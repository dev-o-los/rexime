"use client";

import { useUpdateResume } from "@/hooks/useUpdateResume";
import { BsTextParagraph } from "react-icons/bs";
import TiptapEditor from "../editor/TiptapEditor";
import { ResumeHeading } from "../resume/ResumeHeading";

export default function FormTextArea({ content }: { content: string }) {
  const { handleChange } = useUpdateResume("summary");

  return (
    <div className="summary">
      <ResumeHeading heading="Summary" icon={<BsTextParagraph />} />
      <TiptapEditor
        content={content ?? ""}
        onContentChange={(content: string) => handleChange(content)}
      />
    </div>
  );
}
