"use server";

import { fetchResumes } from "@/lib/supabase/fetchResumes";
import { getUser } from "@/lib/supabase/getUser";
import ResumeCard from "../cards/ResumeCard";

export default async function ResumeList() {
  const user = await getUser();
  if (!user) return null;

  const resumes = await fetchResumes(user.id);
  return resumes.map((item, k) => <ResumeCard key={k} resume={item} />);
}
