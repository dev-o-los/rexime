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
  const isProcessing = status === "processing";

  return (
    <div
      className={`grid place-content-center h-screen ${ibmplexmono.className} text-[max(2vw,1.2rem)] mx-7`}
    >
      <div className="text-center">
        <div
          className={
            isFailed
              ? "text-destructive"
              : isProcessing
              ? "text-amber-300"
              : "text-chart-2"
          }
        >
          Payment{" "}
          {isFailed ? "Failed" : isProcessing ? "Processing" : "Successful"}
        </div>
        {isProcessing && (
          <div className="text-sm py-5">
            Your bank is taking longer than usual to verify the transaction. If
            this doesn’t complete, please try another card or enable online
            payments.
          </div>
        )}
        {isFailed ? "Please try again later" : "Thank you for donating"}
      </div>
      <Link className="text-center" href="/">
        <Button className="mt-2  w-full max-w-[500px]">Navigate to home</Button>
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
