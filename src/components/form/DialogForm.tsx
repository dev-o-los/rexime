"use client";

import { useUpdateResume } from "@/hooks/useUpdateResume";
import { ResumeEntry, SectionFields } from "@/lib/resume-types";
import { useState } from "react";
import { SaveChangesBtn } from "../buttons/SaveChangesBtn";
import TiptapEditor from "../editor/TiptapEditor";
import { DialogField } from "../inputs/DialogField";
import { Form } from "../ui/form";

export default function DialogForm({
  data,
  entry,
  id,
  index,
}: {
  data: SectionFields;
  entry?: ResumeEntry;
  id: string;
  index?: number;
}) {
  const [editorHtml, seteditorHtml] = useState("");
  const { updateSectionItem } = useUpdateResume();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (index) {
      updateSectionItem(id, index, {
        title: formData.get("title")?.toString(),
        subtitle: formData.get("subtitle")?.toString(),
        meta: formData.get("meta")?.toString(),
        gpa: formData.get("gpa")?.toString(),
        website: formData.get("website")?.toString(),
        location: formData.get("location")?.toString(),
        editorHTML: editorHtml,
      });
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <div className="flex gap-2">
        <DialogField
          label={data.title1}
          placeholder={data.placeholder1}
          value={entry?.title}
          name="title"
        />
        <DialogField
          label={data.title2}
          placeholder={data.placeholder2}
          value={entry?.subtitle}
          name="subtitle"
        />
      </div>
      <div className="flex gap-2">
        <DialogField
          label={data.title3}
          placeholder={data.placeholder3}
          value={entry?.meta}
          name="meta"
        />
        <DialogField
          optional
          label={data.title4}
          placeholder={data.placeholder4}
          value={id == "education" ? entry?.gpa : entry?.website}
          name={id == "education" ? "gpa" : "website"}
        />
      </div>
      <div className="text-sm my-2">Description</div>
      <TiptapEditor
        onContentChange={(content) => seteditorHtml(content)}
        content={entry?.editorHTML}
      />
      <SaveChangesBtn />
    </Form>
  );
}
