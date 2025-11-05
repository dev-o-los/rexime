"use client";

import { ibmplexmono } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PaymentStatus() {
  const params = useSearchParams();
  const status = params.get("status");
  const isFailed = status === "failed";

  return (
    <div
      className={`grid place-content-center h-screen ${ibmplexmono.className} text-[max(2vw,1.2rem)]`}
    >
      <div className="text-center">
        <div className={isFailed ? "text-destructive" : "text-chart-2"}>
          Payment {isFailed ? "Failed" : "Successful"}
        </div>
        {isFailed ? "Please try again later" : "Thank you for your purchase"}
      </div>
      <Link href="/">
        <Button className="mt-2 w-full">Navigate to home</Button>
      </Link>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense>
      <PaymentStatus />
    </Suspense>
  );
}
