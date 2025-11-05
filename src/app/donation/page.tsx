import DonateDodoButton from "@/components/buttons/DonateDodoButton";
import DonationAmountSelection from "@/components/DonationAmtSelection";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CircleCheck } from "lucide-react";
import Image from "next/image";

const donations = [
  {
    name: "Google Pay (UPI)",
    description:
      "Donate instantly using Google Pay UPI. Every contribution helps us continue our mission.",
    features: [
      "Fast & secure UPI payment",
      "No extra charges",
      "Works with all UPI apps",
      "Instant payment confirmation",
    ],
    buttonText: "Pay using UPI ID",
    qrImage: "/qrcode.png", // <-- REPLACE LATER
  },
  {
    name: "Dodo Payments",
    isPopular: true,
    description:
      "Donate using Dodo Payments — supports international cards, wallets, and secure payment methods.",
    features: [
      "Fast & secure payment",
      "International payments supported",
      "Credit / Debit cards accepted",
    ],
    buttonText: "Donate with Dodo Payments",
    dodoLink: "/donate/dodo",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-6">
      <h1 className="text-5xl sm:text-6xl font-semibold text-center tracking-tighter">
        Support Our Project
      </h1>
      <p className="mt-4 text-center max-w-xl text-muted-foreground">
        Your donation fuels our work. Choose the method you prefer.
      </p>

      <div className="mt-12 sm:mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        {donations.map((donation) => (
          <div
            key={donation.name}
            className={`border h-full rounded-xl p-6 w-full transition-all duration-200 hover:shadow-xl bg-background ${
              donation.isPopular ? "border-primary scale-[1.02]" : ""
            }`}
          >
            <h3 className="text-xl font-semibold">{donation.name}</h3>

            <p className="mt-3 text-muted-foreground">{donation.description}</p>

            <Separator className="my-4" />

            <ul className="space-y-2">
              {donation.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CircleCheck className="h-4 w-4 mt-1 text-green-600" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Google Pay QR Section */}
            {donation.qrImage && (
              <div className="mt-6 flex flex-col items-center">
                <Image
                  src={donation.qrImage}
                  alt="Google Pay QR Code"
                  width={160}
                  height={160}
                  className="rounded-md border shadow-sm"
                />
                <p className="mt-2 text-sm text-muted-foreground">
                  Scan to donate using UPI if you are not redirected to GPay
                </p>
                <Separator className="my-4 w-full" />
                <Button size="lg" variant="outline" className="w-full">
                  <a
                    href="upi://pay?pa=spryzenutkarsh@oksbi&pn=Kumar Utkarsh"
                    target="_blank"
                  >
                    Donate via Google Pay
                  </a>
                </Button>
              </div>
            )}

            {donation.isPopular && <DonationAmountSelection />}

            {/* Dodo Payments Button */}
            {donation.dodoLink && (
              <DonateDodoButton
                buttonText={donation.buttonText}
                product="pdt_leOBapVoCxopJCxwlqByR"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
