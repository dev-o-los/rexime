"use client";

import { ibmplexmono } from "@/app/fonts";
import { resumeAtom } from "@/app/store";
import { useMobile } from "@/hooks/useMobile";
import { sampleData } from "@/lib/constants";
import { Resume } from "@/lib/resume-types";
import { updateResume } from "@/lib/supabase/createResume";
import { deleteResume } from "@/lib/supabase/deleteResume";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { VscEdit } from "react-icons/vsc";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { toastManager } from "../ui/toast";
import { TiltCard } from "./TiltCard";

export default function ResumeCard({ resume }: { resume: Resume }) {
  const setResume = useSetAtom(resumeAtom);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(resume.title);
  const isMobile = useMobile();

  const handleResumeEdit = () => {
    setResume(resume.data ?? sampleData);
    router.push(`/builder/${resume.id}`);
  };

  const handleEditTitle = () => {
    if (!resume.id) {
      toastManager.add({
        title: "User id not found",
        type: "error",
      });
    }
    setNewTitle(resume.title);
    setOpen(true);
  };

  const handleSaveTitle = async () => {
    if (!newTitle || newTitle.trim().length === 0) {
      toastManager.add({
        title: "Title cannot be empty",
        type: "error",
      });
      return;
    }
    if (newTitle.trim().toLowerCase() === resume.title.trim().toLowerCase()) {
      toastManager.add({
        title: "Title cannot be same as before",
        type: "error",
      });
      return;
    }

    await updateResume(resume.id, { title: newTitle });
    toastManager.add({
      title: "Title updated!",
      type: "success",
    });
    setOpen(false);
    router.refresh();
  };

  const handleDelete = async () => {
    if (!resume.id) {
      toastManager.add({
        title: "User id not found",
        type: "error",
      });
    }
    await deleteResume(resume.id);
    router.refresh();
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
            <TiltCard imageUrl={resume.image}>
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
          sideOffset={isMobile ? -200 : -100}
          alignOffset={isMobile ? 0 : -45}
        >
          <DropdownMenuItem onClick={handleResumeEdit}>
            <VscEdit size={16} className="opacity-60" aria-hidden="true" />
            Edit Resume
          </DropdownMenuItem>

          <DropdownMenuItem onClick={handleEditTitle}>
            <VscEdit size={16} className="opacity-60" aria-hidden="true" />
            Edit Title
          </DropdownMenuItem>

          <DropdownMenuItem className="text-destructive" onClick={handleDelete}>
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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Edit Resume Title</DialogTitle>
          </DialogHeader>

          <Input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className={ibmplexmono.className}
            placeholder="Enter new title"
          />

          <DialogFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveTitle}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
