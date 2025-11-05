import { createClient } from "../client";
import { getUser } from "./getUserClient";

export const deleteResume = async (resumeId: string) => {
  const user = await getUser();
  if (!user) throw new Error("User not logged in");

  const supabase = createClient();

  const { error } = await supabase
    .from("resumes")
    .delete()
    .eq("id", resumeId)
    .eq("user_id", user.id);

  if (error) throw new Error(error.message);
};
