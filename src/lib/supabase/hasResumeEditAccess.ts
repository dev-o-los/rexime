import { createClient } from "../server";
import { getUser } from "./getUser";

export async function hasResumeEditAccess(resumeId: string) {
  const user = await getUser();
  const supabase = await createClient();

  if (!user) return false; // not logged in

  const { data, error } = await supabase
    .from("resumes")
    .select("id, user_id")
    .eq("id", resumeId)
    .single();

  if (error || !data) return false;

  return data.user_id === user.id;
}
