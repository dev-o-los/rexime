"use client";

import { resumeColorAtom } from "@/app/store";
import { skillLevelMap } from "@/lib/constants";
import { ResumeData, ResumeEntry, ResumeSection } from "@/lib/resume-types";
import { isNotEditorEmpty } from "@/lib/utils";
import { useAtomValue } from "jotai";
import { FC, RefObject } from "react";
import TiptapHTML from "../editor/TiptapHTML";

const ModernTitle: FC<{ title: string; colorClass: string }> = ({
  title,
  colorClass,
}) => (
  <div className="mt-8 mb-4">
    <h2 className="text-xl font-bold uppercase text-gray-800 tracking-wider">
      {title}
    </h2>
    <div className={`w-full h-0.5 mt-2 ${colorClass}`}></div>
  </div>
);

const ModernEntry: FC<{ item: ResumeEntry }> = ({ item }) => (
  <div className="mb-4">
    <div className="flex justify-between items-baseline">
      <div className="grow pr-4">
        {item.title && (
          <h3 className="text-base font-bold text-gray-900 leading-tight">
            {item.title}
            {item.subtitle && (
              <span className="font-normal text-gray-700">
                , {item.subtitle}
              </span>
            )}
          </h3>
        )}
        {item.location && (
          <p className="text-sm italic text-gray-600 mt-0.5">{item.location}</p>
        )}
      </div>
      {item.meta && (
        <div className="shrink-0 text-right text-sm italic text-gray-600">
          <p>{item.meta}</p>
          {item.gpa && <p>GPA: {item.gpa}</p>}
        </div>
      )}
    </div>

    {item.editorHTML && (
      <TiptapHTML className="text-sm mt-1" html={item.editorHTML} />
    )}
  </div>
);

const ModernSkillEntry: FC<{ section: ResumeSection }> = ({ section }) => (
  <div className="mb-6">
    <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
      {section.items.map((item, i) =>
        item.editorHTML && isNotEditorEmpty(item.editorHTML) ? (
          <div key={i} className="col-span-2">
            <TiptapHTML html={item.editorHTML} />
          </div>
        ) : item.fields ? (
          item.fields.map((field) => (
            <div
              key={`${i}-${field.label}`}
              className="flex justify-between border-b border-gray-100 pb-1"
            >
              <span className="font-medium text-gray-800">{field.label}</span>
              <span className="text-gray-600">
                {skillLevelMap[field?.value ?? "1"]}
              </span>
            </div>
          ))
        ) : null
      )}
    </div>
  </div>
);

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

  const skillsSection = sections?.find((s) => s.id === "skills");
  const mainSections = sections?.filter(
    (s) => s.id !== "skills" && s.id !== "summary"
  );

  const contactItems = [
    data.phone,
    data.email,
    data.location,
    data.linkedin,
    data.github,
    data.website,
  ].filter(Boolean);

  return (
    <div
      ref={ref}
      className={`w-[794px] mx-auto bg-white shadow-lg text-gray-900 text-[14px] p-10 print:p-8 ${
        font ? font : "font-serif"
      } print:shadow-none print:text-[12px]`}
    >
      <header className="text-center mb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 uppercase">
          {name}
        </h1>
        {title && (
          <h2 className="text-xl font-medium text-gray-600 mt-1 mb-3">
            {title}
          </h2>
        )}

        <div className="flex justify-center flex-wrap gap-x-4 text-sm text-gray-700 py-1 mb-2">
          {contactItems.map((item, index) => (
            <span key={index} className="whitespace-nowrap">
              {item}
              {index < contactItems.length - 1 && (
                <span className="ml-4 font-bold">|</span>
              )}
            </span>
          ))}
        </div>

        <div className={`w-full h-2 ${resumeColor}`}></div>
      </header>

      <main>
        {summary && (
          <section className="mb-6">
            <ModernTitle title="Summary" colorClass={resumeColor} />
            <TiptapHTML className="text-sm" html={summary} />
          </section>
        )}

        {mainSections?.map((section) => (
          <section key={section.id} className="mb-6">
            <ModernTitle title={section.title} colorClass={resumeColor} />
            {section.items.map((item, index) => (
              <ModernEntry key={index} item={item} />
            ))}
          </section>
        ))}

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
