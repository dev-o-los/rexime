"use client";

import { signInWithGoogle } from "@/lib/actions";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";

export default function SignInWithGoogleBtn({
  isLogin = false,
}: {
  isLogin?: boolean;
}) {
  const next = usePathname();

  return (
    <Button
      variant={isLogin ? "outline" : "default"}
      onClick={() => {
        try {
          signInWithGoogle(next);
        } catch (error) {
          toast.error((error as Error).message);
        }
      }}
    >
      {isLogin ? "Login with Google" : "Sign in with Google"}
    </Button>
  );
}
