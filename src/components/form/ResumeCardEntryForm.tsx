"use client";

import { createResume } from "@/lib/supabase/createResume";
import { useRouter } from "next/navigation";
import { SaveChangesBtn } from "../buttons/SaveChangesBtn";
import { DialogField } from "../inputs/DialogField";
import { Form } from "../ui/form";
import { toastManager } from "../ui/toast";

export function ResumeCardEntryForm() {
  const router = useRouter();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);

      const resume = {
        title: formData.get("resume-title")?.toString(),
        data: null,
      };

      await createResume(
        resume.title ?? "Resume",
        resume.data,
        "/resume-simple.png"
      ).then(() => router.refresh());
    } catch (error) {
      toastManager.add({
        title: (error as Error).message,
        type: "error",
      });
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <DialogField
        label={"Write a title for this resume"}
        placeholder={"Google, Meta, X"}
        name="resume-title"
      />
      <div className="text-end">
        <SaveChangesBtn />
      </div>
    </Form>
  );
}
