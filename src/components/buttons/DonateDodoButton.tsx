"use client";

import { selectedDonationAmountAtom } from "@/app/store";
import { getUser } from "@/lib/supabase/getUserClient";
import { PaymentCreateResponse } from "dodopayments/resources/index.mjs";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { toastManager } from "../ui/toast";

export default function DonateDodoButton({
  product,
  buttonText,
  isPopular = false,
}: {
  buttonText: string;
  isPopular?: boolean;
  product: string;
}) {
  const router = useRouter();
  const donationAmt = useAtomValue(selectedDonationAmountAtom);

  const handlePayClick = async (product: string) => {
    const user = await getUser();

    if (!user) {
      toastManager.add({
        title: "User Error",
        description: "No user id found",
        type: "error",
      });
      return;
    }

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        productId: product,
        id: user.id, //"0ca17b23-e0a7-4de6-8aa8-b35ce275abf9",
        amt: donationAmt * 100,
      }),
    });

    const body = (await response.json()) as PaymentCreateResponse;

    if (body.payment_link) {
      router.push(body.payment_link);
    } else {
      toastManager.add({
        title: "Something went wrong",
        type: "error",
      });
    }
  };

  return (
    <Button
      onClick={() => handlePayClick(product)}
      variant={isPopular ? "default" : "outline"}
      size="lg"
      className="w-full mt-4"
    >
      {buttonText}
    </Button>
  );
}
