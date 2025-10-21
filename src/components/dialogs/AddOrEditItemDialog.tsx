"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { sectionData } from "@/lib/constants";
import { ResumeEntry, ResumeField } from "@/lib/resume-types";
import { AiOutlineHolder } from "react-icons/ai";
import DialogForm from "../form/DialogForm";
import { SkillDialogContent } from "./SkillDialog";

export default function AddOrEditItemDialog({
  entry,
  id,
  entryFields,
  index,
}: {
  entry?: ResumeEntry;
  id: string;
  entryFields?: ResumeField;
  index?: number;
}) {
  let data = sectionData[id];
  if (data == undefined) data = sectionData["experience"];
  const isCreateMode = !index && !entry;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {isCreateMode ? (
          <Button variant="outline" className="w-full p-6">
            Add a new item
          </Button>
        ) : (
          <Button
            variant="secondary"
            className="w-full px-4 py-8 mb-2 justify-start"
          >
            <AiOutlineHolder />
            <div className="flex flex-col text-start pl-2">
              <div className="overflow-ellipsis text-wrap line-clamp-1">
                {entry?.title ?? entryFields?.label ?? "Update " + id}
              </div>
              <div className="text-xs font-normal overflow-ellipsis text-wrap line-clamp-1">
                {entry?.subtitle}
              </div>
            </div>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent
        className={`gap-2 ${id == "skills" ? "sm:w-[500px]" : ""}`}
      >
        <DialogTitle>{isCreateMode ? "New Item" : "Update Item"}</DialogTitle>
        {id == "skills" ? (
          <SkillDialogContent />
        ) : (
          <DialogForm data={data} entry={entry} id={id} index={index} />
        )}
      </DialogContent>
    </Dialog>
  );
}
