import FontResetBtn from "@/components/buttons/FontResetBtn";
import ColorPicker from "@/components/ColorPicker";
import DonationCard from "@/components/DonationCard";
import FontSelection from "@/components/FontSelection";
import TemplateShowcase from "@/components/resume-view/TemplateShowcase";
import { ResumeForm } from "@/components/resume/ResumeForm";
import { ResumeHeading } from "@/components/resume/ResumeHeading";
import TemplateSelector from "@/components/TemplateSelector";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BiDonateHeart } from "react-icons/bi";
import { CiPalette } from "react-icons/ci";
import { GoTypography } from "react-icons/go";

export default function Page() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* LEFT SECTION — Scrollable form */}
      <aside className="w-[30%] border-r">
        <ScrollArea className="h-full px-6 py-3">
          <ResumeForm />
        </ScrollArea>
      </aside>

      {/* MIDDLE SECTION — Resume preview */}
      <main className="w-2/4 h-full m-0 p-0 block" id="resume-section">
        <TemplateShowcase />
      </main>

      {/* RIGHT SECTION — Scrollable color + template picker */}
      <aside className="w-1/4 border-l">
        <ScrollArea className="h-full px-4 py-3">
          <TemplateSelector />
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
