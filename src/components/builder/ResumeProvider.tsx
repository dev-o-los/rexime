"use client";

import { useResumeSync } from "@/hooks/useResumeSync";
import { useSearchParams } from "next/navigation";

export default function ResumeProvider() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  if (!id) return null;

  useResumeSync(id);

  return null;
}
