"use client";

import { SaveChangesBtn } from "../buttons/SaveChangesBtn";
import { DialogField } from "../inputs/DialogField";
import { Form } from "../ui/form";

export function ResumeCardEntryForm() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const resumeDetails = {
      label: formData.get("resume-entry-card")?.toString(),
      json: null,
    };
  };

  return (
    <Form onSubmit={onSubmit}>
      <DialogField
        label={"Write a title for this resume"}
        placeholder={"Google, Meta, X"}
        name="resume-entry-card"
      />
      <SaveChangesBtn />
    </Form>
  );
}
