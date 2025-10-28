"use client";

import { ibmplexmono } from "@/app/fonts";
import { resumeAtom } from "@/app/store";
import { sampleData } from "@/lib/constants";
import { Resume } from "@/lib/resume-types";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { VscEdit } from "react-icons/vsc";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { TiltCard } from "./TiltCard";

export default function ResumeCard({ resume }: { resume: Resume }) {
  const setResume = useSetAtom(resumeAtom);
  const router = useRouter();

  const handleResumeEdit = () => {
    setResume(resume.data ?? sampleData);
    router.push("/builder");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <TiltCard imageUrl="/resume-simple.png">
            <h1
              className={`text-center text-3xl font-semibold ${ibmplexmono.className}`}
            >
              {resume.title}
            </h1>
          </TiltCard>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="right"
        align="end"
        sideOffset={-100}
        alignOffset={-45}
      >
        <DropdownMenuItem onClick={handleResumeEdit}>
          <VscEdit size={16} className="opacity-60" aria-hidden="true" />
          Edit Resume
        </DropdownMenuItem>

        <DropdownMenuItem>
          <VscEdit size={16} className="opacity-60" aria-hidden="true" />
          Edit Title
        </DropdownMenuItem>

        <DropdownMenuItem className="text-destructive">
          <MdOutlineRemoveCircleOutline
            size={16}
            color="red"
            className="opacity-60"
            aria-hidden="true"
          />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
