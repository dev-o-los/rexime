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
import { RiQuestionLine } from "react-icons/ri";
import { SaveChangesBtn } from "../buttons/SaveChangesBtn";
import TiptapEditor from "../editor/TiptapEditor";
import { Field, FieldControl, FieldLabel } from "../ui/field";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { SkillDialogContent } from "./SkillDialog";

function DialogField({
  label,
  placeholder,
  value,
  optional = false,
}: {
  label: string;
  placeholder: string;
  value: string | undefined;
  optional?: boolean;
}) {
  return (
    <Field className="w-full">
      <div className="flex items-center gap-2">
        <FieldLabel>{label}</FieldLabel>
        {optional && (
          <Tooltip>
            <TooltipTrigger className="text-gray-300 text-xs">
              <RiQuestionLine />
            </TooltipTrigger>
            <TooltipContent>
              <p>Optional field</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
      <FieldControl placeholder={placeholder} value={value} />
    </Field>
  );
}

export default function ItemTileDialog({
  entry,
  id,
  entryFields,
}: {
  entry: ResumeEntry;
  id: string;
  entryFields?: ResumeField;
}) {
  let data = sectionData[id];
  if (data == undefined) data = sectionData["experience"];

  return (
    <Dialog>
      <DialogTrigger className="w-full" asChild>
        <Button
          variant="secondary"
          className="w-full px-4 py-8 mb-2 justify-start"
        >
          <AiOutlineHolder />
          <div className="flex flex-col text-start pl-2">
            <div>{entry.title ?? entryFields?.label ?? "Update " + id}</div>
            <div className="text-xs font-normal">{entry.subtitle}</div>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent
        className={`gap-2 ${id == "skills" ? "sm:w-[500px]" : ""}`}
      >
        <DialogTitle>Update Item</DialogTitle>
        {id == "skills" ? (
          <SkillDialogContent />
        ) : (
          <div>
            <div className="flex gap-2">
              <DialogField
                label={data.title1}
                placeholder={data.placeholder1}
                value={entry.title}
              />
              <DialogField
                label={data.title2}
                placeholder={data.placeholder2}
                value={entry.subtitle}
              />
            </div>
            <div className="flex gap-2">
              <DialogField
                label={data.title3}
                placeholder={data.placeholder3}
                value={entry.meta}
              />
              <DialogField
                optional
                label={data.title4}
                placeholder={data.placeholder4}
                value={id == "education" ? entry.gpa : entry.website}
              />
            </div>
            <div className="text-sm my-2">Description</div>
            <TiptapEditor
              onContentChange={(content: string) => {}}
              content={entry.editorHTML}
            />
            <SaveChangesBtn />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
