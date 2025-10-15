import { PrintPdfBtn } from "@/components/buttons/PrintPdfBtn";
import { ResumeForm } from "@/components/form/ResumeForm";
import TemplateSelector from "@/components/templates/TemplateSelector";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Page() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* LEFT SECTION — Scrollable form */}
      <aside className="w-[30%] border-r">
        <ScrollArea className="h-full px-6 py-3 space-y-8">
          <ResumeForm />
        </ScrollArea>
      </aside>

      {/* MIDDLE SECTION — Resume preview */}
      <main className="w-2/4 h-full m-0 p-0 block" id="resume-section">
        <TemplateSelector />
      </main>

      {/* RIGHT SECTION — Scrollable color + template picker */}
      <aside className="w-1/4 border-l">
        <ScrollArea className="h-full p-4 space-y-8">
          <PrintPdfBtn />
          {/* Color Picker */}
          {/* Template Selector */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-secondary p-4 h-50 rounded">Resume 1</div>
            <div className="bg-secondary p-4 h-50 rounded">Resume 2</div>
            <div className="bg-secondary p-4 h-50 rounded">Resume 3</div>
            <div className="bg-secondary p-4 h-50 rounded">Resume 4</div>
          </div>
        </ScrollArea>
      </aside>
    </div>
  );
}
