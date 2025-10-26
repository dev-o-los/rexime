"use client";

import { fakeResumeDataAtom } from "@/app/store";
import { useAtomValue } from "jotai";
import ResumeCard from "../cards/ResumeCard";

export default function ResumeList() {
  const resumeList = useAtomValue(fakeResumeDataAtom);

  return resumeList.map((item, k) => <ResumeCard key={k} />);
}
