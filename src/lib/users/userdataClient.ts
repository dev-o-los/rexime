import { createClient } from "../client";

export const getUserCredits = async (
  userid: string
): Promise<number | null> => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("users")
    .select("credits")
    .eq("id", userid)
    .single();

  if (error) throw new Error(error.message);
  return (data?.credits as number) ?? null;
};
