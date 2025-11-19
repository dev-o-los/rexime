"use client";

import { useUpdateResume } from "@/hooks/useUpdateResume";
import { ResumeField } from "@/lib/resume-types";
import { isEmptyObject } from "@/lib/utils";
import { useState } from "react";
import { SaveChangesBtn } from "../buttons/SaveChangesBtn";
import { DialogField } from "../inputs/DialogField";
import SkillSlider from "../SkillSlider";
import { Form } from "../ui/form";

export function SkillDialogForm({
  skill,
  entryIndex,
  fieldIndex,
  id,
}: {
  skill?: ResumeField;
  entryIndex?: number | undefined;
  fieldIndex?: number | undefined;
  id: string;
}) {
  const [level, setlevel] = useState(0);
  const { addFieldToResumeEntry, updateFieldInResumeEntry } = useUpdateResume();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const skill = {
      label: formData.get("skill")?.toString(),
      value: level.toString(),
    } as ResumeField;

    if (entryIndex != undefined && fieldIndex != undefined) {
      updateFieldInResumeEntry(id, entryIndex, fieldIndex, skill);
    } else {
      if (isEmptyObject(skill)) return;
      addFieldToResumeEntry(id, skill);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <DialogField
        label={"Skill Category"}
        placeholder={"Frame works"}
        name="skill"
        value={skill?.label}
      />
      <SkillSlider level={Number(skill?.value ?? 0)} onValueChange={setlevel} />
      {/* <InputWithTags /> */}
      <div className="text-end">
        <SaveChangesBtn />
      </div>
    </Form>
  );
}
