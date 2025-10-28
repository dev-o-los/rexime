"use client";

import { createResume } from "@/lib/supabase/createResume";
import { toast } from "sonner";
import { SaveChangesBtn } from "../buttons/SaveChangesBtn";
import { DialogField } from "../inputs/DialogField";
import { Form } from "../ui/form";

export function ResumeCardEntryForm() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);

      const resume = {
        title: formData.get("resume-title")?.toString(),
        data: null,
      };

      await createResume(resume.title ?? "Resume", resume.data);
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <DialogField
        label={"Write a title for this resume"}
        placeholder={"Google, Meta, X"}
        name="resume-title"
      />
      <SaveChangesBtn />
    </Form>
  );
}
