"use client";

import { ibmplexmono } from "@/app/fonts";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { VscEdit } from "react-icons/vsc";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { TiltCard } from "./TiltCard";

export default function ResumeCard() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <TiltCard imageUrl="/resume-simple.png">
            <h1
              className={`text-center text-xl font-semibold ${ibmplexmono.className}`}
            >
              Google
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
        <DropdownMenuItem>
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
