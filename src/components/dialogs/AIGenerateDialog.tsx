"use client";
import { resumeAtom } from "@/app/store";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ResumeData } from "@/lib/resume-types";
import { useSetAtom } from "jotai";
import { useRef, useState } from "react";
import { RiAiGenerate2 } from "react-icons/ri";
import { SpinnerInfinity } from "spinners-react";
import { Textarea } from "../ui/textarea";
import { toastManager } from "../ui/toast";

export default function AIGenerateDialog() {
  const [isLoading, setisLoading] = useState(false);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const setResumeData = useSetAtom(resumeAtom);
  const [isOpen, setisOpen] = useState(false);

  const handleClick = async () => {
    try {
      setisLoading(true);

      if (!textRef.current?.value) {
        throw new Error("Input is empty");
      }

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userMessage: textRef.current?.value.trim() }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Something went wrong");
      }
      const data = await res.json();

      const aiResumeData = data.reply as ResumeData;

      console.log(aiResumeData);
      setResumeData(aiResumeData);

      setisOpen(false);
    } catch (error) {
      toastManager.add({
        title: (error as Error).message,
        type: "error",
      });
    } finally {
      setisLoading(false);
    }
  };
  // My name is Utkarsh Bhardwaj, and I’m currently pursuing a Bachelor’s degree in Computer Science, graduating in 2027. I specialize in modern web development using React, TypeScript, Next.js, Tailwind CSS, Firebase, and Supabase, and I’ve built several real-world projects including Alpha Omega (a minimal social media app), Rexime (an AI-powered resume builder), and multiple Flutter-based apps like Ace Expens and Project 51. I’m passionate about building clean, scalable user interfaces and solving real problems through technology. I’m actively looking for a Web Developer or Frontend Developer role where I can grow and contribute to impactful products. You can reach me at utkarshbhardwaj@email.com
  return (
    <Dialog open={isOpen} onOpenChange={setisOpen}>
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
          ref={textRef}
          placeholder={`Write a short paragraph about yourself including: your name, education, skills, projects, experience (if any), what job you want, and your email + phone.`}
          className="pe-9 h-[20dvh] focus-visible:ring-0"
        />
        <br />
        <Button className="w-full" onClick={handleClick}>
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
