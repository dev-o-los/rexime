"use client";

import { useUpdateResume } from "@/hooks/useUpdateResume";
import { ResumeEntry, SectionFields } from "@/lib/resume-types";
import { useState } from "react";
import { SaveChangesBtn } from "../buttons/SaveChangesBtn";
import TiptapEditor from "../editor/TiptapEditor";
import { DialogField } from "../inputs/DialogField";
import { Form } from "../ui/form";

function isEmptyObject(obj: Record<string, any>): boolean {
  return Object.values(obj).every(
    (val) => val === "" || val === undefined || val === null
  );
}

type OptinalFieldData = {
  name: string;
  val: string | undefined;
};

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
  const { updateSectionItem, addSectionItem } = useUpdateResume();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(editorHtml);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const entry = {
      title: formData.get("title")?.toString(),
      subtitle: formData.get("subtitle")?.toString(),
      meta: formData.get("meta")?.toString(),
      gpa: formData.get("gpa")?.toString(),
      website: formData.get("website")?.toString(),
      location: formData.get("location")?.toString(),
      editorHTML: editorHtml,
    };

    console.log(index, id);

    if (index != undefined) {
      updateSectionItem(id, index, entry);
    } else {
      if (isEmptyObject(entry)) return;
      console.log(entry);
      addSectionItem(id, entry);
    }
  };

  const optionalFieldDataVal: Record<string, OptinalFieldData> = {
    education: { name: "gpa", val: entry?.gpa },
    experience: { name: "location", val: entry?.location },
    projects: { name: "website", val: entry?.website },
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
          value={optionalFieldDataVal[id].val}
          name={optionalFieldDataVal[id].name}
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
