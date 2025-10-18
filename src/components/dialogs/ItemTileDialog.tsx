import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { sectionData } from "@/lib/constants";
import { AiOutlineHolder } from "react-icons/ai";
import { DialogTipTapEditor } from "../editor/DialogTipTapEditor";
import { Field, FieldControl, FieldLabel } from "../ui/field";

function DialogField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <Field className="w-full">
      <FieldLabel>{label}</FieldLabel>
      <FieldControl placeholder={placeholder} />
    </Field>
  );
}

export default function AddNewItemDialog() {
  let data = sectionData["experience"];

  return (
    <Dialog>
      <DialogTrigger className="w-full" asChild>
        <Button variant="secondary" className="w-full px-4 py-8 justify-start">
          <AiOutlineHolder />
          <div className="flex flex-col text-start pl-2">
            <div>Software Development Engineer - 1</div>
            <div className="text-xs font-normal">Amazon India</div>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="gap-2">
        <DialogTitle>New Item</DialogTitle>
        <div className="flex gap-2">
          <DialogField label={data.title1} placeholder={data.placeholder1} />
          <DialogField label={data.title2} placeholder={data.placeholder2} />
        </div>
        <div className="flex gap-2">
          <DialogField label={data.title3} placeholder={data.placeholder3} />
          <DialogField label={data.title4} placeholder={data.placeholder4} />
        </div>
        <DialogTipTapEditor />
      </DialogContent>
    </Dialog>
  );
}
