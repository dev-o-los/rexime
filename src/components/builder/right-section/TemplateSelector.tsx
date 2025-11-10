"use client";

import { useResumeStore } from "@/lib/store";
import {
  DUMMY_AMSTERDAM_DATA,
  DUMMY_BERLIN_DATA,
  DUMMY_CREATIVE_PROFESSIONAL_DATA,
  DUMMY_MODERN_CORPORATE_DATA,
  DUMMY_STANDARD_DATA,
  DUMMY_STUDENT_ENTRY_DATA,
  DUMMY_TECH_ORIENTED_DATA,
  DUMMY_TIMELINE_DATA,
} from "@/lib/constants";
import { ResumeData } from "@/lib/resume-types";
import { ResumeTemplate } from "./ResumeTemplate";
import { useState } from "react";
import Resume from "../Resume/Resume";

type TemplateConfig = {
  id: string;
  name: string;
  data: ResumeData;
  component: (props: any) => JSX.Element;
};

// Array containing the configuration for the 8 original templates
const templates: TemplateConfig[] = [
  {
    id: "standard",
    name: "Classic Standard",
    data: DUMMY_STANDARD_DATA,
    component: Resume, 
  },
  {
    id: "berlin",
    name: "Berlin (Minimalist)",
    data: DUMMY_BERLIN_DATA,
    component: Resume,
  },
  {
    id: "timeline",
    name: "Timeline (Functional)",
    data: DUMMY_TIMELINE_DATA,
    component: Resume,
  },
  {
    id: "amsterdam",
    name: "Amsterdam (Sales/BizOps)",
    data: DUMMY_AMSTERDAM_DATA,
    component: Resume,
  },
  {
    id: "creative-professional",
    name: "Creative Professional",
    data: DUMMY_CREATIVE_PROFESSIONAL_DATA,
    component: Resume,
  },
  {
    id: "modern-corporate",
    name: "Modern Corporate",
    data: DUMMY_MODERN_CORPORATE_DATA,
    component: Resume,
  },
  {
    id: "student-entry",
    name: "Student/Entry Level",
    data: DUMMY_STUDENT_ENTRY_DATA,
    component: Resume,
  },
  {
    id: "tech-oriented",
    name: "Tech Oriented (Developer)",
    data: DUMMY_TECH_ORIENTED_DATA,
    component: Resume,
  },
];

export default function TemplateSelector() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const setResumeData = useResumeStore((state) => state.setResumeData);

  const handleSelectTemplate = (templateData: ResumeData) => {
    // 1. Update the global state with the new template's data
    setResumeData(templateData);
    // 2. Set the ID for visual selection feedback
    setSelectedId(templateData.id || "standard"); 
  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold">Choose a Starting Template</h2>
      <p className="text-gray-600">
        Select a template below to load pre-filled data and a structure that suits your needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {templates.map((template) => (
          <ResumeTemplate
            key={template.id}
            name={template.name}
            data={template.data}
            isSelected={selectedId === template.id}
            onSelect={() => handleSelectTemplate(template.data)}
            TemplateComponent={template.component} 
          />
        ))}
      </div>
    </div>
  );
}
