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
  // --- RESPONSIVE BREAKPOINTS ---
  // Adjust these values to match your design system.
  // These can be 'sm', 'md', 'lg', 'xl', '2xl', or custom breakpoints
  // from your tailwind.config.js file.
  const tabletBreakpoint = "md"; // The point where the left panel appears
  const desktopBreakpoint = "xl"; // The point where the right panel appears

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* LEFT SECTION */}
      <aside
        className={`
          border-r
          transition-all duration-300 ease-in-out
          w-0 md:w-[200px] overflow-hidden
          ${desktopBreakpoint}:w-[30%]
          shrink-0
        `}
      >
        {/* Padding is now also responsive */}
        <ScrollArea
          className={`h-full ${tabletBreakpoint}:px-6 ${tabletBreakpoint}:py-3`}
        >
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
