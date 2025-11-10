"use client";

import { resumeColorAtom } from "@/app/store";
import { ResumeData, ResumeEntry, ResumeSection } from "@/lib/resume-types";
import { useAtomValue } from "jotai";
import { RefObject, FC } from "react";
import TiptapHTML from "../editor/TiptapHTML";

// --- HELPER COMPONENTS ---

/**
 * Renders the section title with the modern corporate style (subtle line).
 */
const ModernTitle: FC<{ title: string; colorClass: string }> = ({ title, colorClass }) => (
  <div className="mt-8 mb-4">
    {/* Title is prominent, bold, and uppercase */}
    <h2 className="text-xl font-bold uppercase text-gray-800 tracking-wider">
      {title}
    </h2>
    {/* A thin, subtle line in the accent color for separation */}
    <div className={`w-full h-0.5 mt-1 ${colorClass}`}></div>
  </div>
);

/**
 * Renders an entry item for Experience, Education, or Projects.
 */
const ModernEntry: FC<{ item: ResumeEntry }> = ({ item }) => (
  <div className="mb-4">
    <div className="flex justify-between items-start">
      <div className="grow pr-4">
        {/* Title and Subtitle are distinct */}
        {item.title && (
          <h3 className="text-base font-bold text-gray-900 leading-tight">
            {item.title}
            {item.subtitle && (
              <span className="font-normal text-gray-700">, {item.subtitle}</span>
            )}
          </h3>
        )}
        {/* Meta (Dates) and Location are less prominent */}
        <p className="text-sm italic text-gray-600 mt-0.5">
          {item.meta} {item.meta && item.location ? '|' : ''} {item.location}
          {item.gpa && <span> | GPA: {item.gpa}</span>}
        </p>
      </div>
    </div>
    
    {/* Editor Content (Description/Bullets) */}
    {item.editorHTML && <TiptapHTML className="text-sm mt-1" html={item.editorHTML} />}
  </div>
);

/**
 * Renders Skill entries as simple comma-separated lists or text.
 */
const ModernSkillEntry: FC<{ section: ResumeSection }> = ({ section }) => (
  <div className="mb-4">
    <p className="text-sm text-gray-700">
      {section.items.map((item) => (
        item.fields 
          ? item.fields.map((field) => (
              <span key={field.label} className="inline-block mr-4 mb-1">
                <span className="font-semibold text-gray-800">{field.label}:</span> {field.value}
              </span>
            ))
          : item.editorHTML 
            ? <TiptapHTML html={item.editorHTML} />
            : null
      ))}
    </p>
  </div>
);


// -----------------------------------------------------------------
// 4. MAIN RESUME COMPONENT: ResumeModernCorporate
// -----------------------------------------------------------------

export const ResumeModernCorporate = ({
  data,
  font,
  ref,
}: {
  data: ResumeData;
  font: string | null;
  ref: RefObject<HTMLDivElement | null>;
}) => {
  const resumeColor = useAtomValue(resumeColorAtom);
  const { name, title, summary, sections } = data;

  // Find the skills section to render it uniquely
  const skillsSection = sections?.find((s) => s.id === "skills");
  // Filter out skills and summary, which are rendered manually
  const mainSections = sections?.filter((s) => s.id !== "skills" && s.id !== "summary");
  
  // Combine all contact info into a simple, centered header bar
  const contactItems = [
    data.phone, 
    data.email, 
    data.location, 
    data.linkedin, 
    data.github, 
    data.website
  ].filter(Boolean); // Filters out null/empty strings

  return (
    <div
      ref={ref}
      // Fixed width for A4 size and default font
      className={`w-[794px] mx-auto bg-white shadow-lg text-gray-900 text-[14px] p-10 print:p-8 ${
        font ? font : "font-serif"
      } print:shadow-none print:text-[12px]`}
    >
      
      {/* --- HEADER (Name, Title, Contact) --- */}
      <header className="text-center mb-6 pb-2 border-b-2 border-gray-300">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 uppercase">
          {name}
        </h1>
        {title && (
          <h2 className="text-xl font-medium text-gray-600 mt-1 mb-3">
            {title}
          </h2>
        )}

        {/* Subtle, Centered Contact List */}
        <div className="flex justify-center flex-wrap gap-x-4 text-sm text-gray-700">
          {contactItems.map((item, index) => (
            <span key={index} className="whitespace-nowrap">
              {item}
              {/* Add a separator except for the last item */}
              {index < contactItems.length - 1 && <span className="ml-4 font-bold">|</span>}
            </span>
          ))}
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main>
        
        {/* --- SUMMARY/PROFILE --- */}
        {summary && (
          <section className="mb-6">
            <ModernTitle title="Summary" colorClass={resumeColor} />
            <TiptapHTML className="text-sm" html={summary} />
          </section>
        )}

        {/* --- DYNAMIC MAIN SECTIONS (Experience, Education, Projects) --- */}
        {mainSections?.map((section) => (
          <section key={section.id} className="mb-6">
            <ModernTitle title={section.title} colorClass={resumeColor} />
            {section.items.map((item, index) => (
              <ModernEntry key={index} item={item} />
            ))}
          </section>
        ))}

        {/* --- SKILLS SECTION (Rendered as a list) --- */}
        {skillsSection && (
          <section>
            <ModernTitle title={skillsSection.title} colorClass={resumeColor} />
            <ModernSkillEntry section={skillsSection} />
          </section>
        )}
      </main>
    </div>
  );
};

export default ResumeModernCorporate;
