"use client";

import { useUpdateResume } from "@/hooks/useUpdateResume";
import { BsTextParagraph } from "react-icons/bs";
import { ResumeHeading } from "../builder/left-section/ResumeHeading";
import TiptapEditor from "../editor/TiptapEditor";

export default function FormTextArea({ content }: { content: string }) {
  const { handleChange } = useUpdateResume("summary");

  return (
    <div className="summary">
      <ResumeHeading heading="Summary" icon={<BsTextParagraph />} />
      <TiptapEditor
        content={content}
        onContentChange={(newContent: string) => {
          if (newContent !== content) {
            handleChange(newContent);
          }
        }}
      />
    </div>
  );
}
