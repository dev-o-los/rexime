import { PrintPdfBtn } from "@/components/buttons/PrintPdfBtn";
import ColorPicker from "@/components/ColorPicker";
import { ResumeForm } from "@/components/resume/ResumeForm";
import { ResumeHeading } from "@/components/resume/ResumeHeading";
import TemplateSelector from "@/components/TemplateSelector";
import TemplateShowcase from "@/components/TemplateShowcase";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CiPalette } from "react-icons/ci";

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
        <ScrollArea className="h-full p-4 space-y-8">
          <PrintPdfBtn />
          <TemplateSelector />
          <div className="mt-5">
            <ResumeHeading
              heading={"Theme"}
              icon={<CiPalette />}
              showMore={false}
            />
            <ColorPicker />
          </div>
        </ScrollArea>
      </aside>
    </div>
  );
}
