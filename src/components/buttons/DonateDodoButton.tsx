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
        description: "Please login before donating",
        type: "error",
      });
      return;
    }

    const name = (user.user_metadata?.full_name as string) ?? "Full name";

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        productId: product,
        id: user.id,
        amt: donationAmt * 100,
        name: name,
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
