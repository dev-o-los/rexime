import { isEditedResumeAtom, resumeAtom } from "@/app/store";
import {
  ResumeData,
  ResumeEntry,
  ResumeField,
  ResumeSection,
} from "@/lib/resume-types";
import { useAtom } from "jotai";
import React from "react";

export const useUpdateResume = (field?: keyof ResumeData) => {
  const [resumeData, setResumeData] = useAtom(resumeAtom);
  const [isEditedResume, setIsEditedResume] = useAtom(isEditedResumeAtom);

  // Generic handler for top-level text fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string
  ) => {
    const value = typeof e === "string" ? e : e.target.value;
    if (!field) return;

    if (!isEditedResume) setIsEditedResume(true);

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
  const addSectionItem = (sectionId: string, newItem: ResumeEntry) => {
    setResumeData((prev) => {
      const updatedSections = (prev.sections ?? []).map((section) =>
        section.id === sectionId
          ? { ...section, items: [...section.items, newItem] }
          : section
      );
      return { ...prev, sections: updatedSections };
    });
  };

  const addFieldToResumeEntry = (sectionId: string, newField: ResumeField) => {
    setResumeData((prev) => {
      const updatedSections = (prev.sections ?? []).map((section) => {
        if (section.id !== sectionId) return section;

        if (!section.items || section.items.length === 0) return section; // no items, nothing to add to

        // find last entry
        const lastIndex = section.items.length - 1;

        const updatedItems = section.items.map((item, idx) => {
          if (idx !== lastIndex) return item;

          const updatedFields = [...(item.fields ?? []), newField];
          return { ...item, fields: updatedFields };
        });

        return { ...section, items: updatedItems };
      });

      return { ...prev, sections: updatedSections };
    });
  };

  const updateFieldInResumeEntry = (
    sectionId: string,
    itemIndex: number,
    fieldIndex: number,
    updatedField: ResumeField
  ) => {
    setResumeData((prev) => {
      const updatedSections = (prev.sections ?? []).map((section) => {
        if (section.id !== sectionId) return section;

        // Make sure the itemIndex exists
        const items = [...section.items];
        if (!items[itemIndex]) return section;

        const item = items[itemIndex];

        // Make sure the fields array exists and fieldIndex is valid
        if (!item.fields || fieldIndex >= item.fields.length) return section;

        // Update only the specific field
        const updatedFields = item.fields.map((field, idx) =>
          idx === fieldIndex ? updatedField : field
        );

        // Replace only the modified item
        const updatedItem = { ...item, fields: updatedFields };
        items[itemIndex] = updatedItem;

        return { ...section, items };
      });

      return { ...prev, sections: updatedSections };
    });
  };

  // Updates a single item in a single section
  const updateSectionItem = (
    sectionId: string,
    itemIndex: number,
    updates: Partial<ResumeEntry>
  ) => {
    setResumeData((prev) => {
      const updatedSections = (prev.sections ?? []).map((section) => {
        if (section.id !== sectionId) return section; // skip other sections

        const updatedItems = section.items.map((item, idx) =>
          idx === itemIndex ? { ...item, ...updates } : item
        );

        return { ...section, items: updatedItems };
      });

      return { ...prev, sections: updatedSections };
    });
  };

  return {
    resumeData,
    handleChange,
    addSection,
    addSectionItem,
    addFieldToResumeEntry,
    updateFieldInResumeEntry,
    updateSectionItem,
  };
};
