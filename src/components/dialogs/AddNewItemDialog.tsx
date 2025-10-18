import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { sectionData } from "@/lib/constants";
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

export default function AddNewItemDialog({ id }: { id: string }) {
  let data = sectionData[id];
  if (data == undefined) data = sectionData["experience"];

  return (
    <Dialog>
      <DialogTrigger className="w-full" asChild>
        <Button variant="outline" className="w-full p-6">
          Add a new item
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
