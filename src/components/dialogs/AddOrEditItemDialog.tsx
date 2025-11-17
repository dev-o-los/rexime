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
import { isDiffDialog } from "@/lib/utils";
import { AiOutlineHolder } from "react-icons/ai";
import { SiReaddotcv } from "react-icons/si";
import { VscEdit } from "react-icons/vsc";
import DialogForm from "../form/DialogForm";
import { SkillDialogForm } from "../form/SkillDialogForm";

export default function AddOrEditItemDialog({
  entry,
  id,
  entryFields,
  index,
  fIndex,
}: {
  entry?: ResumeEntry;
  id: string;
  entryFields?: ResumeField;
  index?: number;
  fIndex?: number;
}) {
  let data = sectionData[id];
  if (data == undefined) data = sectionData["experience"];
  const isCreateMode = fIndex == 0 ? false : !fIndex && !entry;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {isCreateMode ? (
          <Button variant="outline" className="w-full p-6">
            <SiReaddotcv />
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
                {entry?.title ?? entryFields?.label ?? "Update item"}
              </div>
              <div className="text-xs font-normal overflow-ellipsis text-wrap line-clamp-1">
                {entry?.subtitle}
              </div>
            </div>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent
        className={`gap-2 ${isDiffDialog(id) ? "sm:w-[500px]" : ""}`}
      >
        <DialogTitle>
          {isCreateMode ? (
            <div className="flex gap-2">
              <SiReaddotcv />
              New Item
            </div>
          ) : (
            <div className="flex gap-2">
              <VscEdit /> Update Item
            </div>
          )}
        </DialogTitle>
        {isDiffDialog(id) && entryFields ? (
          <SkillDialogForm
            skill={entryFields}
            entryIndex={index}
            fieldIndex={fIndex}
            id={id}
          />
        ) : (
          <DialogForm data={data} entry={entry} id={id} index={index} />
        )}
      </DialogContent>
    </Dialog>
  );
}
