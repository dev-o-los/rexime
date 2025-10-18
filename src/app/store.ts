import { sampleData } from "@/lib/constants";
import type { ResumeData } from "@/lib/resume-types";
import { atom } from "jotai";

export const openSignUpDialogAtom = atom(false);
export const resumeAtom = atom<ResumeData>(sampleData);
export const resumeShowCaseIdxAtom = atom<number>(0);
