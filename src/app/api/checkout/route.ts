import { dodopayments } from "@/lib/payments/dodo-payments";
import { APIError } from "dodopayments";
import { CountryCode } from "dodopayments/resources/misc.mjs";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const validator = z.object({
  email: z.string().email(),
  id: z.string().uuid(),
  productId: z.string(),
  amt: z.number(),
  name: z.string(),
});

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const parser = validator.safeParse(body);
  const country_code = (request.headers.get("x-vercel-ip-country") ||
    "US") as CountryCode;

  if (parser.success) {
    const { email, productId, id, amt, name } = parser.data;

    try {
      const payment = await dodopayments.payments.create({
        billing: {
          city: "city",
          country: country_code,
          state: "state",
          street: "street",
          zipcode: "zipcode",
        },
        customer: {
          email: email,
          name: name,
        },
        metadata: {
          supabaseid: id,
        },
        payment_link: true,
        return_url: process.env.DODO_PAYMENTS_RETURN_URL,
        product_cart: [{ product_id: productId, quantity: 1, amount: amt }],
      });

      return NextResponse.json(payment, { status: 200 });
    } catch (e) {
      const dodoError = e as APIError;
      return NextResponse.json(dodoError.message, { status: dodoError.status });
    }
  } else {
    return NextResponse.json(parser.error, { status: 400 });
  }
};
