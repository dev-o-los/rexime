import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { sectionData } from "@/lib/utils";
import { Field, FieldControl, FieldLabel } from "../ui/field";
import { Textarea } from "../ui/textarea";

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
      <DialogTrigger className="w-full">
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
        <Field>
          <FieldLabel>Description</FieldLabel>
          <Textarea placeholder="Write something..." className="h-32" />
        </Field>
        <div className="text-end mt-3">
          <Button className="w-fit">Save Changes</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
