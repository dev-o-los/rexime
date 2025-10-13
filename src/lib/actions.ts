"use server";

import { redirect } from "next/navigation";
import { createClient } from "./server";

export const signInWithGoogle = async (pathname: string) => {
  const supabase = await createClient();

  const auth_callback_url = `${process.env.SITE_URL}/auth/callback?next=${pathname}`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: auth_callback_url,
    },
  });

  if (error) throw new Error(error.message);

  if (data.url) {
    redirect(data.url);
  }
};

export const signOutGooogle = async () => {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
};
