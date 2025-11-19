import { DUMMY_STANDARD_DATA } from "@/lib/constants";
import type { ResumeData } from "@/lib/resume-types";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const openSignUpDialogAtom = atom(false);
export const openCustomEditorAtom = atom(false);
export const resumeAtom = atom<ResumeData>(DUMMY_STANDARD_DATA);
export const resumeShowCaseIdxAtom = atom<number>(0);
export const selectedFontAtom = atom<string | null>(null);
export const resumeColorAtom = atom<string>("bg-gray-100");
export const selectedDonationAmountAtom = atom<number>(1);

export const editedResumesAtom = atomWithStorage<string[]>("editedResumes", []);

export const resumeEditAtom = atom(
  // READ → return the list of edited IDs
  (get) => get(editedResumesAtom),

  (get, set, resumeId: string) => {
    if (!resumeId) return; // avoids accidental Jotai internal calls

    const list = get(editedResumesAtom);
    // If resume ID already exists, do nothing
    if (list.includes(resumeId)) return;

    // Add new ID
    set(editedResumesAtom, [...list, resumeId]);
  }
);
