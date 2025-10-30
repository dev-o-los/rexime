"use client";

import { openCustomEditorAtom } from "@/app/store";
import { useUpdateResume } from "@/hooks/useUpdateResume";
import { ResumeEntry } from "@/lib/resume-types";
import { isDiffDialog } from "@/lib/utils";
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
    }
  }, [id]);

  return (
    <div>
      <ResumeHeading heading={heading} icon={icon} />
      {(isEditorOpen && id === "skills") || id === "achievements" ? (
        <TiptapEditor
          onContentChange={(content) =>
            updateSectionItem(id, 0, { editorHTML: content })
          }
          content={entries[0].editorHTML ?? ""}
        />
      ) : (
        <div>
          {isDiffDialog(id)
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
          {isDiffDialog(id) ? <SkillDialog /> : <AddOrEditItemDialog id={id} />}
        </div>
      )}

      <hr className="w-full mt-7 mb-4" />
    </div>
  );
}
