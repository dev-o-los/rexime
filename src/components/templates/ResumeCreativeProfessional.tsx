"use client";

import { resumeColorAtom } from "@/app/store";
import { ResumeData, ResumeEntry, ResumeSection } from "@/lib/resume-types";
import { useAtomValue } from "jotai";
import { RefObject, FC } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import TiptapHTML from "../editor/TiptapHTML";

// --- HELPER COMPONENTS (Following the pattern of ResumeBerlin.tsx) ---

/**
 * Renders the main section title with a dynamic color highlight.
 */
const MainSectionTitle: FC<{ title: string; colorClass: string }> = ({ title, colorClass }) => (
  <div className="mt-6 mb-3">
    {/* Uses a bold, capitalized title with a colored line underneath */}
    <h2 className="text-xl font-bold uppercase text-gray-800 tracking-wide mb-1">
      {title}
    </h2>
    {/* Dynamic accent color line */}
    <div className={`w-12 h-1 ${colorClass}`}></div>
  </div>
);

/**
 * Renders an entry item for Experience, Education, or Projects (Main Content).
 */
const MainContentEntry: FC<{ item: ResumeEntry }> = ({ item }) => (
  <div className="mb-4">
    <div className="flex justify-between items-baseline flex-wrap">
      <div className="flex items-baseline gap-2">
        {item.title && (
          <h3 className="text-lg font-bold text-gray-900 leading-tight">
            {item.title}
          </h3>
        )}
        {item.subtitle && (
          <span className="text-base text-gray-700 font-medium leading-tight">
            {item.subtitle}
          </span>
        )}
      </div>
      {item.meta && (
        <span className="text-sm text-gray-600 font-medium shrink-0">
          {item.meta}
        </span>
      )}
    </div>
    
    {/* Location and GPA */}
    <div className="flex justify-between items-baseline text-xs italic text-gray-600 mt-0.5">
        <span>{item.location}</span>
        {item.gpa && <span>GPA: {item.gpa}</span>}
    </div>

    {/* Editor Content (Description/Bullets) */}
    {item.editorHTML && <TiptapHTML className="text-sm mt-1" html={item.editorHTML} />}
  </div>
);

/**
 * Renders an item in the sidebar (Contact, Link, etc.).
 */
const SidebarItem: FC<{ icon: React.ReactNode; value?: string | null }> = ({ icon, value }) => {
    if (!value) return null;
    return (
        <div className="flex items-center gap-3 mb-2">
            <div className="shrink-0 w-4 h-4 text-white print:text-gray-700">
                {icon}
            </div>
            <span className="text-sm text-white opacity-90 print:text-gray-700">
                {value}
            </span>
        </div>
    );
};


// -----------------------------------------------------------------
// 4. MAIN RESUME COMPONENT: ResumeCreativeProfessional
// -----------------------------------------------------------------

export const ResumeCreativeProfessional = ({
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

  // Separate sections for specific placement
  const skillsSection = sections?.find((s) => s.id === "skills");
  const mainSections = sections?.filter((s) => s.id !== "skills");
  
  // Define layout ratios (35% sidebar, 65% main)
  const sidebarClasses = 'w-[35%] print:w-full print:order-2';
  const contentClasses = 'w-[65%] print:w-full print:order-1';

  return (
    <div
      ref={ref}
      // Fixed width for A4 size (approx 210mm) and default font
      className={`w-[794px] mx-auto bg-white shadow-lg text-gray-900 text-[14px] ${
        font ? font : "font-sans"
      } print:shadow-none print:p-0 print:text-[12px]`}
    >
      {/* Outer Flex container for the two columns */}
      {/* IMPORTANT: 'print:flex-col' stacks the columns for printing */}
      <div className="flex print:flex-col">
        
        {/* --- LEFT SIDEBAR (Skills, Contact) --- */}
        {/* We use the dynamic color for the background */}
        {/* NOTE: print:bg-white and print:text-black reverts colors for printing */}
        <aside 
            className={`${sidebarClasses} ${resumeColor} p-8 text-white print:bg-white print:text-black print:p-6 print:border-b-2 print:border-gray-300`}
        >
          
          {/* Main Name & Title */}
          <header className="mb-8">
            <h1 className="text-3xl font-light uppercase tracking-widest print:text-gray-900">{name}</h1>
            {title && <h2 className="text-lg font-medium opacity-90 mt-1 print:text-gray-600">{title}</h2>}
          </header>

          {/* Contact & Links */}
          <div className="mt-8">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-3 print:text-gray-800">Contact</h3>
            <div className="space-y-2">
                <SidebarItem icon={<FaPhoneAlt />} value={data.phone} />
                <SidebarItem icon={<FaEnvelope />} value={data.email} />
                <SidebarItem icon={<MdLocationOn />} value={data.location} />
                <SidebarItem icon={<FaLinkedin />} value={data.linkedin} />
                <SidebarItem icon={<FaGithub />} value={data.github} />
                <SidebarItem icon={<FaLink />} value={data.website} />
            </div>
          </div>

          {/* Skills Section */}
          {skillsSection && (
            <div className="mt-10">
              <h3 className="text-lg font-bold uppercase tracking-wider mb-3 print:text-gray-800">{skillsSection.title}</h3>
              {skillsSection.items.map((item, index) => (
                <div key={index} className="mb-3">
                  {/* Assuming Skills entries might have fields (e.g. Skill Name, Level) */}
                  {item.fields?.map((field, fIndex) => (
                    <div key={fIndex}>
                        <p className="text-sm font-medium text-white print:text-gray-800">{field.label}</p>
                        {/* Simple progress bar for skills (Max level 5) */}
                        <div className="h-1.5 bg-white/30 mt-1 w-full relative print:bg-gray-300">
                            <div
                                className={`h-1.5 ${resumeColor} absolute top-0 left-0 print:bg-gray-800`}
                                style={{ width: `${(Number(field.value) / 5) * 100}%` }}
                            />
                        </div>
                    </div>
                  ))}
                  {/* Fallback for general skills text */}
                  {item.editorHTML && (
                    <TiptapHTML className="text-sm" html={item.editorHTML} />
                  )}
                </div>
              ))}
            </div>
          )}
        </aside>

        {/* --- RIGHT MAIN CONTENT (Experience, Education, Summary) --- */}
        <main className={`${contentClasses} p-8 bg-white print:p-6`}>
          
          {/* Summary/Profile Section */}
          {summary && (
            <section className="mb-6">
              <MainSectionTitle title="Summary" colorClass={resumeColor} />
              <TiptapHTML className="text-sm" html={summary} />
            </section>
          )}

          {/* Dynamic Main Sections (Experience, Education, etc.) */}
          {mainSections?.map((section) => (
            <section key={section.id} className="mb-6">
              <MainSectionTitle title={section.title} colorClass={resumeColor} />
              {section.items.map((item, index) => (
                <MainContentEntry key={index} item={item} />
              ))}
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default ResumeCreativeProfessional;
