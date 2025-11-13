"use client";

import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { ResumeEntry } from "@/lib/resume-types";
import AddOrEditItemDialog from "./dialogs/AddOrEditItemDialog";

const SkillCollapsible = ({ items }: { items: ResumeEntry[] }) => {
  //   const items = [
  //     {
  //       value: "1",
  //       label: "Standard 3-5 Days",
  //       description: "Friday, 15 June - Tuesday, 19 June",
  //       price: "Free",
  //     },
  //     {
  //       value: "2",
  //       label: "Express",
  //       description: "Friday, 15 June - Sunday, 17 June",
  //       price: "$5.00",
  //     },
  //     {
  //       value: "3",
  //       label: "Overnight",
  //       description: "Tomorrow",
  //       price: "$10.00",
  //     },
  //   ];

  return (
    <div className="w-full max-w-md space-y-3 rounded-md border py-4 bg-background">
      {items &&
        items.map((group, index) => (
          <div key={index}>
            <Collapsible className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-4 px-4">
                {/* Section title */}
                <div className="text-sm font-semibold">
                  {group.title ?? "Update Skills"}
                </div>

                <div className="flex items-center gap-2">
                  {/* Toggle button */}
                  <CollapsibleTrigger asChild className="group">
                    <Button variant="ghost" size="icon" className="size-8">
                      <ChevronDownIcon className="text-muted-foreground h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
              </div>

              {/* Collapsible content: render all skill fields */}
              <CollapsibleContent className="flex flex-col gap-2 px-4 pt-3">
                {group.fields &&
                  group.fields.map((field, fIndex) => (
                    <AddOrEditItemDialog
                      index={fIndex}
                      entryFields={field}
                      key={fIndex}
                      id={"skills"}
                    />
                  ))}
              </CollapsibleContent>
            </Collapsible>

            {/* Separator between collapsibles */}
            {index < items.length - 1 && <Separator className="my-2" />}
          </div>
        ))}
    </div>
  );
};

export default SkillCollapsible;
