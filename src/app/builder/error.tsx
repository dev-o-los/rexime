"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Error = () => {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
        <h2 className="mb-6 text-5xl font-semibold">Access Denied</h2>
        <h3 className="mb-1.5 text-3xl font-semibold">
          You can’t edit this resume
        </h3>
        <p className="text-muted-foreground mb-6 max-w-sm">
          You don’t have permission to access or edit this resume. If you think
          this is a mistake, please return to the home page.
        </p>
        <Button asChild size="lg" className="rounded-lg text-base">
          <Link href="/">Back to home page</Link>
        </Button>
      </div>

      {/* Right Section: Illustration */}
      <div className="relative max-h-screen w-full p-2 max-lg:hidden">
        <div className="h-full w-full rounded-2xl bg-black"></div>
        <img
          src="https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/error/image-1.png"
          alt="404 illustration"
          className="absolute top-1/2 left-1/2 h-[clamp(260px,25vw,406px)] -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default Error;
