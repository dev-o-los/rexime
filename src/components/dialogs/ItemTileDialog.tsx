import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { sectionData } from "@/lib/constants";
import { ResumeEntry } from "@/lib/resume-types";
import { AiOutlineHolder } from "react-icons/ai";
import { RiQuestionLine } from "react-icons/ri";
import { DialogTipTapEditor } from "../editor/DialogTipTapEditor";
import { Field, FieldControl, FieldLabel } from "../ui/field";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

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

export default function AddNewItemDialog({
  entry,
  id,
}: {
  entry: ResumeEntry;
  id: string;
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
            <div>{entry.title ?? "Update " + id}</div>
            <div className="text-xs font-normal">{entry.subtitle}</div>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="gap-2">
        <DialogTitle>Update Item</DialogTitle>
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
            value={entry.website}
          />
        </div>
        <DialogTipTapEditor content={entry.editorHTML} />
      </DialogContent>
    </Dialog>
  );
}
