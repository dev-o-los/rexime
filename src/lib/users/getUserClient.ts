import { createClient } from "@/lib/client";

export async function getUser() {
  const supabase = createClient();
  const session = await supabase.auth.getUser();
  const user = session.data.user;

  return user;
}
