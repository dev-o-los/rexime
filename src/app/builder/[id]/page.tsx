"use client";

import FontResetBtn from "@/components/buttons/FontResetBtn";
import DonationCard from "@/components/cards/DonationCard";
import ColorPicker from "@/components/ColorPicker";
import FontSelection from "@/components/FontSelection";
import TemplateShowcase from "@/components/resume-view/TemplateShowcase";
import { ResumeForm } from "@/components/resume/ResumeForm";
import { ResumeHeading } from "@/components/resume/ResumeHeading";
import TemplateSelector from "@/components/TemplateSelector";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useResumeSync } from "@/hooks/useResumeSync";
import React, { useState } from "react";
import { BiDonateHeart } from "react-icons/bi";
import { CiPalette } from "react-icons/ci";
import { GoTypography } from "react-icons/go";
import { LuPanelLeft, LuPanelRight } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import LoadingPage from "../LoadingPage";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const { resumeData, isLoading } = useResumeSync(id);

  // ✅ NEW STATES FOR MOBILE DRAWERS
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  if (isLoading || !resumeData) return <LoadingPage />;

  return (
    <div className="flex h-screen w-full overflow-hidden relative">
      {/* ✅ MOBILE NAVBAR (Visible Only on Small Screens) */}
      <div className="md:hidden fixed top-0 left-0 w-full h-12 border-b z-50 flex items-center justify-between px-4">
        <button onClick={() => setShowLeft(true)}>
          <LuPanelLeft size={26} />
        </button>

        <p className="font-medium text-base truncate max-w-[55%] text-center">
          {resumeData?.title || "Resume"}
        </p>

        <button onClick={() => setShowRight(true)}>
          <LuPanelRight size={26} />
        </button>
      </div>

      {/* LEFT SECTION */}
      <aside
        className={`
          border-r transition-all duration-300 ease-in-out
          w-0 md:w-[400px] xl:w-[30%] shrink-0 overflow-hidden

          /* ✅ Show as Drawer on Mobile */
          ${
            showLeft
              ? "absolute z-50 bg-background w-[80%] h-full left-0 top-0 md:static"
              : ""
          }
        `}
      >
        <ScrollArea className="h-full md:px-6 xl:py-3 px-4 py-3">
          {/* Close button only on mobile */}
          <div className="md:hidden mb-4">
            <button
              className="text-sm underline"
              onClick={() => setShowLeft(false)}
            >
              <MdClose size={26} />
            </button>
          </div>

          <ResumeForm />
        </ScrollArea>
      </aside>

      {/* MIDDLE SECTION */}
      <main className="w-[46%] max-sm:w-full md:w-full overflow-hidden md:pt-0 pt-12">
        <TemplateShowcase />
      </main>

      {/* RIGHT SECTION */}
      <aside
        className={`
          border-l transition-all duration-300 ease-in-out
          w-0 md:w-0 xl:w-[24%] shrink-0 overflow-hidden

          /* ✅ Show as Drawer on Mobile */
          ${
            showRight
              ? "absolute z-50 bg-background w-[80%] h-full right-0 top-0 md:static"
              : ""
          }
        `}
      >
        <ScrollArea className="h-full px-4 py-3">
          {/* Close button only on mobile */}
          <div className="md:hidden mb-4">
            <button
              className="text-sm underline"
              onClick={() => setShowRight(false)}
            >
              <MdClose size={26} />
            </button>
          </div>

          <TemplateSelector id={id} />
          <div className="mt-5" />
          <ResumeHeading
            heading={"Typography"}
            icon={<GoTypography />}
            showMore={false}
            extraBtn={<FontResetBtn />}
          />
          <FontSelection />
          <div className="my-6" />
          <ResumeHeading
            heading={"Theme"}
            icon={<CiPalette />}
            showMore={false}
          />
          <ColorPicker />
          <div className="my-6" />
          <ResumeHeading
            heading={"Donation"}
            icon={<BiDonateHeart />}
            showMore={false}
          />
          <DonationCard />
        </ScrollArea>
      </aside>
    </div>
  );
}
