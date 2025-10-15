import { resumeAtom } from "@/app/store";
import { ResumeContact, ResumeData } from "@/lib/resume-types";
import { useAtom } from "jotai";

export const useUpdateResume = (
  field: keyof ResumeData,
  nestedKey?: keyof ResumeContact
) => {
  const [resumeData, setResumeData] = useAtom(resumeAtom);

  const addSectionItem = <K extends keyof ResumeData>(
    field: K,
    newItem: any
  ) => {
    if (!Array.isArray(resumeData[field])) return;
    setResumeData((prev) => ({
      ...prev,
      [field]: [...(prev[field] as any[]), newItem],
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;

    setResumeData((prev) => {
      if (nestedKey) {
        const nested = prev[field] ?? {};
        return {
          ...prev,
          [field]: {
            ...nested,
            [nestedKey]: value,
          },
        };
      }
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  return { handleChange, addSectionItem };
};
