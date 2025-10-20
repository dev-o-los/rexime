"use client";

import { openCustomEditorAtom } from "@/app/store";
import { useUpdateResume } from "@/hooks/useUpdateResume";
import { ResumeEntry } from "@/lib/resume-types";
import { useAtom } from "jotai";
import * as React from "react";
import AddNewItemDialog from "../dialogs/AddNewItemDialog";
import ItemTileDialog from "../dialogs/ItemTileDialog";
import SkillDialog from "../dialogs/SkillDialog";
import TiptapEditor from "../editor/TiptapEditor";
import { ResumeHeading } from "./ResumeHeading";

export function ResumeSection({
  heading,
  icon,
  entries,
}: {
  heading: string;
  icon: React.ReactElement;
  entries: ResumeEntry[];
}) {
  const [isEditorOpen, setIsEditorOpen] = useAtom(openCustomEditorAtom);
  const id = heading.toLowerCase();
  const { updateSectionItem } = useUpdateResume();

  React.useEffect(() => {
    if (
      id == "skills" &&
      entries.some((val) => val.fields == undefined || val.fields.length == 0)
    ) {
      setIsEditorOpen(true);
    } else {
      setIsEditorOpen(false);
    }
  }, [id, entries, setIsEditorOpen]);

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
                    <ItemTileDialog
                      index={index}
                      entry={entry}
                      entryFields={entryFields}
                      key={key}
                      id={heading.toLowerCase()}
                    />
                  ))}
                </div>
              ))
            : entries.map((entry, index) => (
                <ItemTileDialog
                  index={index}
                  entry={entry}
                  key={index}
                  id={heading.toLowerCase()}
                />
              ))}
          <div className="mb-5"></div>
          {heading.toLowerCase() == "skills" ? (
            <SkillDialog />
          ) : (
            <AddNewItemDialog id={heading.toLowerCase()} />
          )}
        </div>
      )}

      <hr className="w-full mt-7 mb-4" />
    </div>
  );
}
