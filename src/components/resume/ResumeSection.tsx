"use client";

import { openCustomEditorAtom } from "@/app/store";
import { useUpdateResume } from "@/hooks/useUpdateResume";
import { ResumeEntry } from "@/lib/resume-types";
import { useAtom } from "jotai";
import { useEffect } from "react";
import AddOrEditItemDialog from "../dialogs/AddOrEditItemDialog";
import SkillDialog from "../dialogs/SkillDialog";
import TiptapEditor from "../editor/TiptapEditor";
import { ResumeHeading } from "./ResumeHeading";

export function ResumeSection({
  heading,
  icon,
  entries,
  id,
}: {
  heading: string;
  icon: React.ReactElement;
  entries: ResumeEntry[];
  id: string;
}) {
  const [isEditorOpen, setIsEditorOpen] = useAtom(openCustomEditorAtom);
  const { updateSectionItem } = useUpdateResume();

  useEffect(() => {
    if (id === "skills") {
      const shouldOpen = (entries[0].editorHTML?.length ?? 0) > 0;
      setIsEditorOpen(shouldOpen);
      console.log(shouldOpen, id);
    }
  }, [id]);

  return (
    <div>
      <ResumeHeading heading={heading} icon={icon} />

      {(isEditorOpen && id == "skills") || id == "achievements" ? (
        <TiptapEditor
          onContentChange={(content) =>
            updateSectionItem(id, 0, { editorHTML: content })
          }
          content={entries[0].editorHTML ?? ""}
        />
      ) : (
        <div>
          {id == "skills"
            ? entries.map((entry, key) => (
                <div key={key}>
                  {entry.fields?.map((entryFields, index) => (
                    <AddOrEditItemDialog
                      index={index}
                      entry={entry}
                      entryFields={entryFields}
                      key={key}
                      id={id}
                    />
                  ))}
                </div>
              ))
            : entries.map((entry, index) => (
                <AddOrEditItemDialog
                  index={index}
                  entry={entry}
                  key={index}
                  id={id}
                />
              ))}
          <div className="mb-5"></div>
          {id == "skills" ? <SkillDialog /> : <AddOrEditItemDialog id={id} />}
        </div>
      )}

      <hr className="w-full mt-7 mb-4" />
    </div>
  );
}
