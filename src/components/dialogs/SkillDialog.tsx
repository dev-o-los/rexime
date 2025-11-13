import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SiReaddotcv } from "react-icons/si";
import { SkillDialogForm } from "../form/SkillDialogForm";

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
        <SkillDialogForm id="skills" />
      </DialogContent>
    </Dialog>
  );
}
