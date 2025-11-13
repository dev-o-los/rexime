"use client";

import { resumeColorAtom } from "@/app/store";
import { skillLevelMap } from "@/lib/constants";
import { ResumeData, ResumeEntry, ResumeSection } from "@/lib/resume-types";
import { useAtomValue } from "jotai";
import { FC, RefObject } from "react";
import TiptapHTML from "../editor/TiptapHTML";

const TechSectionTitle: FC<{ title: string; colorClass: string }> = ({
  title,
  colorClass,
}) => (
  <div className="mt-6 mb-3">
    <h2
      className={`text-xl font-extrabold uppercase tracking-wide ${colorClass}`}
    >
      {title}
    </h2>
  </div>
);

const TechMainEntry: FC<{ item: ResumeEntry }> = ({ item }) => (
  <div className="mb-5">
    <div className="flex justify-between items-baseline flex-wrap">
      <div className="flex flex-col">
        {item.title && (
          <h3 className="text-lg font-bold text-gray-900 leading-tight">
            {item.title}
          </h3>
        )}
        {item.subtitle && (
          <span className="text-sm font-medium italic text-gray-600">
            {item.subtitle}
          </span>
        )}
      </div>
      <div className="text-sm text-gray-700 font-semibold text-right">
        {item.meta && <p>{item.meta}</p>}
        {item.location && <p className="font-normal italic">{item.location}</p>}
      </div>
    </div>

    {item.editorHTML && (
      <TiptapHTML className="text-sm mt-1" html={item.editorHTML} />
    )}
  </div>
);

const SkillBadgeEntry: FC<{ section: ResumeSection; colorClass: string }> = ({
  section,
  colorClass,
}) => (
  <div className="mt-3">
    {section.items.map((item, index) => (
      <div key={index} className="mb-4">
        {item.title && (
          <h4
            className={`text-sm font-bold uppercase mb-2 ${colorClass} border-opacity-50`}
          >
            {item.title}
          </h4>
        )}

        <div className="flex flex-wrap gap-2 text-sm">
          {item.fields?.map((field, fIndex) => (
            <span
              key={fIndex}
              className={`px-3 py-1 rounded-full text-xs font-semibold ${colorClass} bg-opacity-10 text-gray-900 print:bg-gray-100 print:text-gray-800`}
            >
              {field.label}
              {field.value && (
                <span className="text-gray-600 font-normal ml-1">
                  ({skillLevelMap[field?.value ?? "1"]})
                </span>
              )}
            </span>
          ))}
        </div>

        {item.editorHTML && (
          <TiptapHTML className="text-sm mt-1" html={item.editorHTML} />
        )}
      </div>
    ))}
  </div>
);

export const ResumeTechOriented = ({
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

  const sidebarClasses =
    "w-[30%] pl-4 border-l border-gray-200 print:w-full print:order-2 print:border-none print:pt-4";
  const contentClasses = "w-[70%] pr-4 print:w-full print:order-1";

  return (
    <div
      ref={ref}
      className={`w-[794px] mx-auto bg-white shadow-lg text-gray-900 text-[13px] p-8 print:p-6 ${
        font ? font : "font-sans"
      } print:shadow-none print:text-[11px]`}
    >
      <header className="text-left mb-6 pb-2 border-b-2 border-gray-300">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 uppercase">
          {name}
        </h1>
        {title && (
          <h2 className="text-xl font-medium text-gray-600 mt-1">{title}</h2>
        )}
      </header>

      <div className="flex print:flex-col">
        <main className={contentClasses}>
          {summary && (
            <section className="mb-6">
              <TechSectionTitle title="Profile" colorClass={resumeColor} />
              <TiptapHTML className="text-sm" html={summary} />
            </section>
          )}

          {mainSections?.map((section) => (
            <section key={section.id} className="mb-6">
              <TechSectionTitle
                title={section.title}
                colorClass={resumeColor}
              />
              {section.items.map((item, index) => (
                <TechMainEntry key={index} item={item} />
              ))}
            </section>
          ))}
        </main>

        <aside className={sidebarClasses}>
          <div className="mb-6">
            <TechSectionTitle title="Contact" colorClass={resumeColor} />
            {/* Added text-sm and space-y-2 for clean, consistent alignment */}
            <div className="text-sm space-y-2">
              {data.phone && <p>{data.phone}</p>}
              {data.email && (
                <p>
                  <a href={`mailto:${data.email}`}>{data.email}</a>
                </p>
              )}
              {data.location && <p>{data.location}</p>}
              {data.linkedin && (
                <p>
                  <a href={data.linkedin} target="_blank">
                    LinkedIn
                  </a>
                </p>
              )}
              {data.github && (
                <p>
                  <a href={data.github} target="_blank">
                    GitHub
                  </a>
                </p>
              )}
              {data.website && (
                <p>
                  <a href={data.website} target="_blank">
                    Website
                  </a>
                </p>
              )}
            </div>
          </div>

          {skillsSection && (
            <div className="mt-8">
              <TechSectionTitle
                title={skillsSection.title}
                colorClass={resumeColor}
              />
              <SkillBadgeEntry
                section={skillsSection}
                colorClass={resumeColor}
              />
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default ResumeTechOriented;
