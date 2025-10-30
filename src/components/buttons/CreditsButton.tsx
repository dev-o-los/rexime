"use client";

import { getUser } from "@/lib/supabase/getUserClient";
import {
  PaymentCreateResponse,
  ProductListResponse,
} from "dodopayments/resources/index.mjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";

export default function CreditsButton({
  product,
  buttonText,
  isPopular,
}: {
  buttonText: string;
  isPopular: boolean;
  product: ProductListResponse;
}) {
  const router = useRouter();

  const handlePayClick = async (product: ProductListResponse) => {
    const user = await getUser();

    if (!user) {
      toast.error("User Error", {
        description: "No user id found",
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
        productId: product.product_id,
        id: user.id, //"0ca17b23-e0a7-4de6-8aa8-b35ce275abf9",
      }),
    });

    const body = (await response.json()) as PaymentCreateResponse;

    if (body.payment_link) {
      router.push(body.payment_link);
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <Button
      onClick={() => handlePayClick(product)}
      variant={isPopular ? "default" : "outline"}
      size="lg"
      className="w-full mt-6 rounded-full"
    >
      {buttonText}
    </Button>
  );
}
