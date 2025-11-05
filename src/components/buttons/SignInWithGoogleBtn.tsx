"use client";

import { signInWithGoogle } from "@/lib/actions";
import { Button } from "../ui/button";
import { toastManager } from "../ui/toast";

export default function SignInWithGoogleBtn({
  isLogin = false,
}: {
  isLogin?: boolean;
}) {
  return (
    <Button
      variant={isLogin ? "outline" : "default"}
      onClick={() => {
        try {
          signInWithGoogle("/dashboard");
        } catch (error) {
          toastManager.add({
            title: (error as Error).message,
            type: "error",
          });
        }
      }}
    >
      {isLogin ? "Login with Google" : "Sign in with Google"}
    </Button>
  );
}
