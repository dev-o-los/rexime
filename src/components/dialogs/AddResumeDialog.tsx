import { ibmplexmono } from "@/app/fonts";
import { Plus } from "lucide-react";
import { TiltCard } from "../cards/TiltCard";
import { ResumeCardEntryForm } from "../form/ResumeCardEntryForm";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function AddResumeDialog() {
  return (
    <Dialog>
      <DialogTrigger className="w-full" asChild>
        <div>
          <TiltCard className="w-[250px]">
            <div>
              <div className="text-center ml-[37%]">
                <Plus size={60} />
              </div>
              <h2
                className={`text-lg font-semibold text-center mb-1 ${ibmplexmono.className}`}
              >
                Build Your Resume
              </h2>

              <p
                className={`text-gray-400 text-center text-xs ${ibmplexmono.className}`}
              >
                Design a resume that stands out to recruiters.
              </p>
            </div>
          </TiltCard>
        </div>
      </DialogTrigger>
      <DialogContent className="gap-2 sm:w-[500px]">
        <DialogTitle>New Item</DialogTitle>
        <ResumeCardEntryForm />
      </DialogContent>
    </Dialog>
  );
}
