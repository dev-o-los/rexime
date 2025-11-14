"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { RiAiGenerate2 } from "react-icons/ri";
import { SpinnerInfinity } from "spinners-react";
import { Textarea } from "../ui/textarea";

export default function AIGenerateDialog() {
  const [isLoading, setisLoading] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="secondary">
          <RiAiGenerate2 /> Generate With AI
        </Button>
      </DialogTrigger>
      <DialogContent className="gap-2 sm:w-[500px]">
        <DialogTitle>Generate With AI</DialogTitle>
        <br />
        <p className="text-xs text-muted-foreground">
          Tell us about yourself so that we create your perfect resume
        </p>
        <Textarea
          placeholder="Write a short paragraph about yourself including: your name, education, skills, projects, experience (if any), what job you want, and your email + phone."
          className="pe-9 h-[20dvh] focus-visible:ring-0"
        />
        <br />
        <Button className="w-full">
          {isLoading ? (
            <div className="flex items-center">
              <SpinnerInfinity color="black" /> Generating...
            </div>
          ) : (
            <span className="flex gap-2 items-center">
              <RiAiGenerate2 /> Generate Resume
            </span>
          )}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
