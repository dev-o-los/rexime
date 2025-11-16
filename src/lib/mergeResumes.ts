import { ResumeData } from "./resume-types";

export function mergeResumes(
  oldData: ResumeData,
  newData: ResumeData
): ResumeData {
  const merged: ResumeData = {} as ResumeData;

  // ---------------------------------------
  // 1. HANDLE TOP-LEVEL FIELDS
  // ---------------------------------------
  for (const key in newData) {
    const newVal = newData[key as keyof ResumeData];
    const oldVal = oldData[key as keyof ResumeData];

    // If field exists in new template
    // → preserve old if non-empty, else use new
    if (oldVal !== undefined && oldVal !== null && oldVal !== "") {
      merged[key as keyof ResumeData] = oldVal as any;
    } else {
      merged[key as keyof ResumeData] = newVal as any;
    }
  }

  // Remove fields not in new template
  for (const key in oldData) {
    if (!(key in newData)) continue;
  }

  // ---------------------------------------
  // 2. HANDLE SECTIONS
  // ---------------------------------------
  const newSections = newData.sections ?? [];
  const oldSections = oldData.sections ?? [];

  merged.sections = newSections.map((newSection) => {
    const oldSection = oldSections.find((s) => s.id === newSection.id);

    // If section does not exist in old → use new
    if (!oldSection) return newSection;

    // Merge section with field rules
    const mergedSection: any = {};

    // Copy only fields defined in newSection
    for (const key in newSection) {
      const newVal = newSection[key as keyof typeof newSection];
      const oldVal = oldSection[key as keyof typeof oldSection];

      if (oldVal !== undefined && oldVal !== null && oldVal !== "") {
        mergedSection[key] = oldVal;
      } else {
        mergedSection[key] = newVal;
      }
    }

    // --------------------------------------------------
    // HANDLE ITEMS ARRAY (EXACT SAME LOGIC)
    // --------------------------------------------------
    if (newSection.items) {
      mergedSection.items = newSection.items.map((newItem, index) => {
        const oldItem = oldSection.items?.[index];

        if (!oldItem) return newItem; // New item not in old

        const mergedItem: any = {};

        for (const key in newItem) {
          const newVal = newItem[key as keyof typeof newItem];
          const oldVal = oldItem[key as keyof typeof oldItem];

          if (oldVal !== undefined && oldVal !== null && oldVal !== "") {
            mergedItem[key] = oldVal;
          } else {
            mergedItem[key] = newVal;
          }
        }

        return mergedItem;
      });
    }

    return mergedSection;
  });

  return merged;
}
