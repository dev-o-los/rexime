import { sampleData } from "@/lib/constants";
import type { ResumeData } from "@/lib/resume-types";
import { atom } from "jotai";

export const openSignUpDialogAtom = atom(false);
export const openCustomEditorAtom = atom(false);
export const resumeAtom = atom<ResumeData>(sampleData);
export const resumeShowCaseIdxAtom = atom<number>(0);
export const selectedFontAtom = atom<string | null>(null);
export const resumeColorAtom = atom<string>("bg-gray-100");
export const selectedDonationAmountAtom = atom<number>(1);
