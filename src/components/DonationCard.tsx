"use client";

import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import SpotlightCard from "./SpotlightCard";
import { Button } from "./ui/button";
import { CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function DonationCard() {
  return (
    <SpotlightCard className="">
      <div className="">
        <Image
          src="/qrcode.png" // replace with your QR image path
          alt="Donation QR Code"
          width={300}
          height={160}
          className="rounded-lg border border-gray-200 shadow-md"
        />
        <CardHeader className="p-0">
          <CardTitle className="text-2xl mt-3 font-bold tracking-tight flex items-center gap-2">
            <FaHeart className="animate-pulse text-pink-400" />
            Support the dev
          </CardTitle>
          <CardDescription>
            <p className="mb-3">
              Hey there, I built this <strong>Resume Builder</strong> all by
              myself with a lot of love and late nights.
            </p>

            <p>
              If it helped you land a job or create your perfect resume,
              consider donating Every bit of support keeps this project alive
              and growing!
            </p>
          </CardDescription>
        </CardHeader>
        <div className="mt-5 flex justify-between">
          <Button size="lg" className="w-full">
            Donate via Google Pay
          </Button>
        </div>
      </div>
    </SpotlightCard>
  );
}
