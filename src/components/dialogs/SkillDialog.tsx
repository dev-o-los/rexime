import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SiReaddotcv } from "react-icons/si";
import { SkillDialogForm } from "../form/SkillDialogForm";

// export function DialogField({
//   label,
//   placeholder,
//   value,
//   name,
// }: {
//   label: string;
//   placeholder: string;
//   value?: string;
//   name: string;
// }) {
//   return (
//     <Field name={name} className="w-full">
//       <FieldLabel>{label}</FieldLabel>
//       <FieldControl placeholder={placeholder} value={value} />
//     </Field>
//   );
// }

export default function SkillDialog() {
  return (
    <Dialog>
      <DialogTrigger className="w-full" asChild>
        <Button variant="outline" className="w-full p-6">
          <SiReaddotcv />
          Add a new item
        </Button>
      </DialogTrigger>
      <DialogContent className="gap-2 sm:w-[500px]">
        <DialogTitle>New Item</DialogTitle>
        <SkillDialogForm />
      </DialogContent>
    </Dialog>
  );
}
