"use client";

import { resumeColorAtom } from "@/app/store";
import { ResumeData, ResumeEntry } from "@/lib/resume-types";
import { useAtomValue } from "jotai";
import { RefObject, FC } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import TiptapHTML from "../editor/TiptapHTML";

const MainSectionTitle: FC<{ title: string; colorClass: string }> = ({ title, colorClass }) => (
  <div className="mt-6 mb-3">
    <h2 className="text-xl font-bold uppercase text-gray-800 tracking-wide mb-1">
      {title}
    </h2>
    <div className={`w-12 h-1 ${colorClass}`}></div>
  </div>
);

const MainContentEntry: FC<{ item: ResumeEntry }> = ({ item }) => (
  <div className="mb-4 ml-4">
    <div className="flex justify-between items-start flex-wrap">
      <div className="flex flex-col">
        {item.title && (
          <h3 className="text-lg font-bold text-gray-900 leading-tight">
            {item.title}
          </h3>
        )}
        {item.subtitle && (
          <span className="text-sm italic text-gray-700 font-medium leading-tight mt-0.5">
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

    <div className="flex justify-between items-baseline text-xs italic text-gray-600 mt-0.5">
      <span>{item.location}</span>
      {item.gpa && <span>GPA: {item.gpa}</span>}
    </div>

    {item.editorHTML && <TiptapHTML className="text-sm mt-1" html={item.editorHTML} />}
  </div>
);

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

  const skillsSection = sections?.find((s) => s.id === "skills");
  const mainSections = sections?.filter((s) => s.id !== "skills");
  
  const sidebarClasses = 'w-[35%] print:w-full print:order-2';
  const contentClasses = 'w-[65%] print:w-full print:order-1';

  return (
    <div
      ref={ref}
      className={`w-[794px] mx-auto bg-white shadow-lg text-gray-900 text-[14px] ${
        font ? font : "font-sans"
      } print:shadow-none print:p-0 print:text-[12px]`}
    >
      <div className="flex print:flex-col">
        
        <aside 
            className={`${sidebarClasses} ${resumeColor} p-8 text-white print:bg-white print:text-black print:p-6 print:border-b-2 print:border-gray-300`}
        >
          
          <header className="mb-8">
            <h1 className="text-3xl font-light uppercase tracking-widest print:text-gray-900">{name}</h1>
            {title && <h2 className="text-lg font-medium opacity-90 mt-1 print:text-gray-600">{title}</h2>}
          </header>

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

          {skillsSection && (
            <div className="mt-10">
              <h3 className="text-lg font-bold uppercase tracking-wider mb-3 print:text-gray-800">{skillsSection.title}</h3>
              <ul className="space-y-1.5 list-disc list-inside">
                {skillsSection.items.map((item, index) => (
                  <li key={index} className="text-sm font-medium text-white print:text-gray-800">
                    {item.fields?.map(field => `${field.label}${field.value ? ` (${field.value})` : ''}`).join(', ') || item.editorHTML}
                    {item.editorHTML && <TiptapHTML className="text-sm" html={item.editorHTML} />}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>

        <main className={`${contentClasses} p-8 bg-white print:p-6 border-l-2 border-gray-200`}> 
          
          {summary && (
            <section className="mb-6">
              <MainSectionTitle title="Summary" colorClass={resumeColor} />
              <TiptapHTML className="text-sm" html={summary} />
            </section>
          )}

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
