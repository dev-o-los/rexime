"use client";

import { ibmplexmono } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PaymentStatus() {
  const params = useSearchParams();
  const status = params.get("status");
  // const payment_id = params.get("payment_id");
  const isFailed = status === "failed";

  // useEffect(() => {
  //   const getPayementDetail = async () => {
  //     if (payment_id) {
  //       const payment = await dodopayments.payments.retrieve(payment_id);
  //       console.log(payment);
  //     } else {
  //       console.log("no payment");
  //     }
  //   };

  //   getPayementDetail();
  // }, []);

  return (
    <div
      className={`grid place-content-center h-screen ${ibmplexmono.className} text-[max(2vw,1.2rem)]`}
    >
      <div className="text-center">
        <div className={isFailed ? "text-destructive" : "text-chart-2"}>
          Payment {isFailed ? "Failed" : "Successful"}
        </div>
        {isFailed ? "Please try again later" : "Thank you for donating"}
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
