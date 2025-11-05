import { PRODUCT_CREDITS } from "@/lib/payments/product-credits";
import { WebhookPayload } from "dodopayments/resources/webhook-events.mjs";
import { NextRequest, NextResponse } from "next/server";
import { Webhook } from "standardwebhooks";

const webhook = new Webhook(process.env.DODO_PAYMENTS_WEBHOOK_KEY!);

export const POST = async (request: NextRequest) => {
  try {
    const rawBody = await request.text();

    const webhookHeaders = {
      "webhook-id": request.headers.get("webhook-id") || "",
      "webhook-timestamp": request.headers.get("webhook-timestamp") || "",
      "webhook-signature": request.headers.get("webhook-signature") || "",
    };

    // Verify the webhook signature
    await webhook.verify(rawBody, webhookHeaders);

    const payload = JSON.parse(rawBody) as WebhookPayload;
    console.log("Webhook received:", payload);

    // Handle successful payments only
    if (
      payload.type === "payment.succeeded" &&
      payload.data.payload_type === "Payment"
    ) {
      const product_cart = payload.data.product_cart ?? [];
      if (product_cart.length === 0) {
        console.warn("Payment succeeded but no products in cart");
        return NextResponse.json({ success: true }); // respond 2xx anyway
      }

      const product_id = product_cart[0]?.product_id;
      if (!product_id || !PRODUCT_CREDITS[product_id]) {
        console.warn("Unknown product ID:", product_id);
        return NextResponse.json({ success: true }); // respond 2xx to prevent retries
      }

      // Extract user ID safely from payload (make sure your payload has it)
      const userId = payload.data.metadata?.supabaseid;
      if (!userId) {
        console.warn("No user ID found in payment metadata");
        return NextResponse.json({ success: true });
      }

      //! add code here/

      return NextResponse.json({ success: true });
    }

    // Ignore other event types
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Webhook verification or processing failed:", err);
    // Respond 400/403 if signature verification fails
    return NextResponse.json(
      { error: "Invalid webhook payload" },
      { status: 400 }
    );
  }
};
