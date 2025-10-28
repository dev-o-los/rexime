import FontResetBtn from "@/components/buttons/FontResetBtn";
import DonationCard from "@/components/cards/DonationCard";
import ColorPicker from "@/components/ColorPicker";
import FontSelection from "@/components/FontSelection";
import TemplateShowcase from "@/components/resume-view/TemplateShowcase";
import { ResumeForm } from "@/components/resume/ResumeForm";
import { ResumeHeading } from "@/components/resume/ResumeHeading";
import TemplateSelector from "@/components/TemplateSelector";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BiDonateHeart } from "react-icons/bi";
import { CiPalette } from "react-icons/ci";
import { GoTypography } from "react-icons/go";

export default function Page({ params }: { params: { data: string } }) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* LEFT SECTION */}
      <aside
        className={`
          border-r
          transition-all duration-300 ease-in-out
          w-0 md:w-[200px] overflow-hidden
          xl:w-[30%]
          shrink-0
        `}
      >
        {/* Padding is now also responsive */}
        <ScrollArea className={`h-full md:px-6 xl:py-3`}>
          <ResumeForm />
        </ScrollArea>
      </aside>

      {/* MIDDLE SECTION */}
      <main className="w-[46%] overflow-hidden">
        <TemplateShowcase />
      </main>

      {/* RIGHT SECTION */}
      <aside
        className={`
          border-l
          transition-all duration-300 ease-in-out
          w-0 overflow-hidden
          md:w-[400px]
          xl:w-[24%]
          shrink-0
        `}
      >
        {/* Padding is now also responsive */}
        <ScrollArea className={`h-full px-4 py-3`}>
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
