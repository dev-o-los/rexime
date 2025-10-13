"use client";

import { ibmplexmono } from "@/app/fonts";
import { openSignUpDialogAtom } from "@/app/store";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAtom } from "jotai";
import Link from "next/link";
import SignInWithGoogleBtn from "../buttons/SignInWithGoogleBtn";

export default function Component({ withTrigger = true }) {
  const [openSignUpDialog, setopenSignUpDialog] = useAtom(openSignUpDialogAtom);

  return (
    <Dialog open={openSignUpDialog} onOpenChange={setopenSignUpDialog}>
      {withTrigger && (
        <DialogTrigger asChild>
          <Button variant="default">Sign In</Button>
        </DialogTrigger>
      )}
      <DialogContent>
        <div className="flex flex-col items-center gap-2">
          <div className={`h-12 ${ibmplexmono.className} `}>MinoMap AI</div>
          {/* <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            logo for future
            <svg
              className="stroke-zinc-800 dark:stroke-zinc-100"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
            </svg>
          </div> */}
          <DialogHeader>
            <DialogTitle className="sm:text-center">Welcome</DialogTitle>
            <DialogDescription className="sm:text-center">
              We just need a few details to get you started.
            </DialogDescription>
          </DialogHeader>
        </div>

        <SignInWithGoogleBtn />

        <p className="text-muted-foreground text-center text-xs">
          By signing up you agree to our{" "}
          <Link href="/terms" className="underline hover:no-underline">
            Terms
          </Link>
          .
        </p>
      </DialogContent>
    </Dialog>
  );
}
