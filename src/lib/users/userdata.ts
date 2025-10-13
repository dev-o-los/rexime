import { createClient } from "../server";

export const getUserCredits = async (
  userid: string
): Promise<number | null> => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .select("credits")
    .eq("id", userid)
    .single();

  if (error) console.error(error);
  return (data?.credits as number) ?? null;
};
