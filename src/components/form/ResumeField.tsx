"use client";

import { Field, FieldControl, FieldLabel } from "@/components/ui/field";
import { useUpdateResume } from "@/hooks/useUpdateResume";
import { ResumeData } from "@/lib/resume-types";

interface ResumeFieldProps {
  label: string;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  field: keyof ResumeData;
}

export function ResumeField({
  label,
  placeholder,
  disabled,
  type = "text",
  field,
}: ResumeFieldProps) {
  const { handleChange, resumeData } = useUpdateResume(field);

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <FieldControl
        value={resumeData[field]?.toString()}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
      />
    </Field>
  );
}
