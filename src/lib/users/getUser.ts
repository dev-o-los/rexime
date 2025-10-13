import { createClient } from "@/lib/server";

export async function getUser() {
  const supabase = await createClient();
  const session = await supabase.auth.getUser();
  const user = session.data.user;

  return user;
}
