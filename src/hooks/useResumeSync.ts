import { resumeAtom } from "@/app/store";
import { toastManager } from "@/components/ui/toast";
import { createClient } from "@/lib/client";
import { ResumeData } from "@/lib/resume-types";
// No longer need to import throttle
import { useAtom } from "jotai";
import { RefObject, useEffect, useRef, useState } from "react";

const SAVE_DELAY = 2000; // 2 seconds debounce

export function useResumeSync(resumeId: string) {
  const [resumeData, setResumeData] = useAtom(resumeAtom);
  const [isLoading, setIsLoading] = useState(true);

  const debounceTimer = useRef<NodeJS.Timeout | undefined>(undefined);
  const lastSyncedData = useRef<string>("");

  useEffect(() => {
    (async () => {
      const cached = localStorage.getItem(`resume-${resumeId}`);
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          setResumeData(parsed as ResumeData);
        } catch {
          toastManager.add({
            title: "Invalid cached data",
            type: "error",
          });
          localStorage.removeItem(`resume-${resumeId}`); // Clear bad data
        } finally {
          setIsLoading(false);
        }
      } else {
        const data = await fetchFromSupabase(resumeId);
        if (data) {
          setResumeData(data);
          // Save to cache for next time
          localStorage.setItem(`resume-${resumeId}`, JSON.stringify(data));
        }
        setIsLoading(false);
      }
    })();
    // Adding setResumeData to dependency array
  }, [resumeId, setResumeData]);

  // ✅ Save to cache instantly + DEBOUNCE save to server
  useEffect(() => {
    // Don't save if there's no data or we are still loading
    if (!resumeData || isLoading) return;

    // 1. Save to localStorage *instantly* on every change.
    // This is synchronous and fast. This is what makes reloads work.
    const jsonString = JSON.stringify(resumeData);
    localStorage.setItem(`resume-${resumeId}`, jsonString);

    // 2. Debounce the save to Supabase (the "slow" part)
    // Clear any previously scheduled save
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Schedule a new save for 2 seconds in the future
    debounceTimer.current = setTimeout(() => {
      saveToSupabase(resumeId, resumeData, jsonString, lastSyncedData);
    }, SAVE_DELAY);

    // Cleanup: Clear the timer if the component unmounts
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };

    // Re-run this effect whenever data, ID, or loading state changes
  }, [resumeData, resumeId, isLoading]);

  // ✅ Sync on reconnect (Force-save cached data)
  // This logic was also good.
  useEffect(() => {
    const handleOnline = () => {
      const cached = localStorage.getItem(`resume-${resumeId}`);
      if (cached) {
        try {
          const data = JSON.parse(cached) as ResumeData;
          // We pass 'cached' (the jsonString) directly
          saveToSupabase(resumeId, data, cached, lastSyncedData);
        } catch {
          toastManager.add({
            title: "Failed to re-sync corrupt cached data.",
            type: "error",
          });
        }
      }
    };
    window.addEventListener("online", handleOnline);
    return () => window.removeEventListener("online", handleOnline);
  }, [resumeId]);

  return { resumeData, setResumeData, isLoading };
}

// -------------------- HELPERS --------------------

// This helper function is unchanged
async function fetchFromSupabase(resumeId: string): Promise<ResumeData | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("resumes")
    .select("data")
    .eq("id", resumeId)
    .single();

  if (error) {
    toastManager.add({
      title: error.message,
      type: "error",
    });
    return null;
  }

  return data?.data || null;
}

// ❌ The `throttledSave` helper is no longer needed.

// ✅ Actual save function (Modified to accept jsonString)
async function saveToSupabase(
  resumeId: string,
  data: ResumeData,
  jsonString: string, // Pass string to avoid re-stringifying
  lastSyncedData: RefObject<string>
): Promise<void> {
  try {
    // 1. Skip redundant writes if data hasn't changed since last sync
    if (jsonString === lastSyncedData.current) {
      return; // Data is already up-to-date
    }

    const supabase = createClient();
    const { error } = await supabase
      .from("resumes")
      .update({ data }) // Save the actual object
      .eq("id", resumeId);

    if (error) {
      toastManager.add({
        title: error.message,
        type: "error",
      });
      return;
    }

    // 2. Update the "last synced" data only after a *successful* save
    lastSyncedData.current = jsonString;
    // Optional: Add a subtle success toast
    // toast.success("Changes saved to cloud");
  } catch (err) {
    toastManager.add({
      title: (err as Error).message,
      type: "error",
    });
  }
}
