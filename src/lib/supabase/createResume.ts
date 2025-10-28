import { createClient } from "../client";
import { ResumeData } from "../resume-types";
import { getUser } from "./getUserClient";

export const createResume = async (title: string, data: ResumeData | null) => {
  const user = await getUser();

  if (!user) throw new Error("User not logged in");
  const supabase = createClient();

  const { error } = await supabase
    .from("resumes")
    .insert([
      {
        user_id: user.id,
        title: title,
        data: data ?? null,
      },
    ])
    .single();

  if (error) throw new Error(error.message);
};
