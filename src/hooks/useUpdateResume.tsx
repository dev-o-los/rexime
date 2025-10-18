import { resumeAtom } from "@/app/store";
import { ResumeData, ResumeSection } from "@/lib/resume-types";
import { useAtom } from "jotai";
import React from "react";

export const useUpdateResume = (field?: keyof ResumeData) => {
  const [resumeData, setResumeData] = useAtom(resumeAtom);

  // Generic handler for top-level text fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string
  ) => {
    const value = typeof e === "string" ? e : e.target.value;
    if (!field) return;

    setResumeData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Add a new section (Experience, Projects, etc.)
  const addSection = (newSection: ResumeSection) => {
    setResumeData((prev) => ({
      ...prev,
      sections: [...(prev.sections ?? []), newSection],
    }));
  };

  // Add an item (ResumeEntry) to a specific section by id
  const addSectionItem = (sectionId: string, newItem: any) => {
    setResumeData((prev) => {
      const updatedSections = (prev.sections ?? []).map((section) =>
        section.id === sectionId
          ? { ...section, items: [...section.items, newItem] }
          : section
      );
      return { ...prev, sections: updatedSections };
    });
  };

  // Update a field inside a specific section item
  const updateSectionItem = (
    sectionId: string,
    itemIndex: number,
    key: keyof any,
    value: any
  ) => {
    setResumeData((prev) => {
      const updatedSections = (prev.sections ?? []).map((section) => {
        if (section.id !== sectionId) return section;
        const updatedItems = section.items.map((item, idx) =>
          idx === itemIndex ? { ...item, [key]: value } : item
        );
        return { ...section, items: updatedItems };
      });
      return { ...prev, sections: updatedSections };
    });
  };

  return {
    handleChange,
    addSection,
    addSectionItem,
    updateSectionItem,
  };
};
