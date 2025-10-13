"use client";

import { ResumeForm } from "@/components/ResumeForm";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Page() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* LEFT SECTION — Scrollable form */}
      <aside className="w-[30%] border-r">
        <ScrollArea className="h-full px-6 py-3 space-y-8">
          {/* Basics */}
          <ResumeForm />
          {/* Experience */}
          {/* Add other sections below */}
          {/* <Button className="w-full">Save Details</Button> */}
        </ScrollArea>
      </aside>

      {/* MIDDLE SECTION — Resume preview */}
      <main className="w-2/4 flex items-center justify-center relative">
        <div className="w-[80%] h-[90%] bg-muted rounded-xl shadow-lg transition-transform hover:scale-[1.01] duration-300">
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-1">John Doe</h1>
            <p className="text-sm text-muted-foreground mb-4">
              Software Developer
            </p>
            <hr className="mb-4" />
            <p className="text-sm text-foreground">
              This is your live resume preview. As you fill out the left side,
              the details will dynamically appear here.
            </p>
          </div>
        </div>
      </main>

      {/* RIGHT SECTION — Scrollable color + template picker */}
      <aside className="w-1/4 border-l">
        <ScrollArea className="h-full p-6 space-y-8">
          {/* Color Picker */}
          asas
          {/* Template Selector */}
        </ScrollArea>
      </aside>
    </div>
  );
}
