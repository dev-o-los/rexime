"use client";

import { resumeColorAtom } from "@/app/store";
import { ResumeData, ResumeEntry } from "@/lib/resume-types";
import { useAtomValue } from "jotai";
import { FC, RefObject } from "react";
import TiptapHTML from "../editor/TiptapHTML";

const StudentSectionTitle: FC<{ title: string; colorClass: string }> = ({
  title,
  colorClass,
}) => (
  <div className="flex items-center mt-6 mb-3">
    <div className={`h-6 w-1 mr-3 ${colorClass}`}></div>
    <h2 className="text-lg font-bold uppercase text-gray-800 tracking-wide">
      {title}
    </h2>
  </div>
);

const StudentEntry: FC<{ item: ResumeEntry }> = ({ item }) => {
  const isAcademic = item.gpa || (item.subtitle && item.location);

  return (
    <div className="mb-4 ml-4">
      <div className="flex justify-between items-start flex-wrap">
        <div className="grow pr-4">
          {item.title && (
            <h3
              className={`text-base leading-tight ${
                isAcademic ? "font-extrabold" : "font-bold"
              } text-gray-900`}
            >
              {item.title}
            </h3>
          )}
          {item.subtitle && (
            <p
              className={`text-sm ${
                isAcademic ? "font-bold" : "font-medium"
              } text-gray-700 mt-0.5`}
            >
              {item.subtitle}
            </p>
          )}
        </div>
        <div className="text-sm text-gray-600 font-medium shrink-0 text-right">
          {item.meta && <p className="whitespace-nowrap">{item.meta}</p>}
          {item.location && (
            <p className="italic whitespace-nowrap">{item.location}</p>
          )}
        </div>
      </div>

      {item.gpa && (
        <p className="text-sm italic text-gray-600 mt-0.5">GPA: {item.gpa}</p>
      )}

      {item.editorHTML && (
        <TiptapHTML className="text-sm mt-1" html={item.editorHTML} />
      )}
    </div>
  );
};

export const ResumeStudentEntry = ({
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
      <header className="text-center mb-6 pb-2 border-b border-gray-400">
        <h1
          className={`text-4xl font-extrabold tracking-tight uppercase ${resumeColor}`}
        >
          {name}
        </h1>
        {title && (
          <h2 className="text-xl font-medium text-gray-700 mt-1">{title}</h2>
        )}

        <div className="flex justify-center flex-wrap gap-x-3 text-sm text-gray-700 mt-2">
          {contactItems.map((item, index) => (
            <span key={index} className="whitespace-nowrap">
              {item}
              {index < contactItems.length - 1 && (
                <span className="ml-3 text-gray-500">|</span>
              )}
            </span>
          ))}
        </div>
      </header>

      <main>
        {summary && (
          <section className="mb-6">
            <StudentSectionTitle title="Profile" colorClass={resumeColor} />
            {/* Added ml-4 for alignment consistency with entries */}
            <TiptapHTML className="text-sm ml-4" html={summary} />
          </section>
        )}

        {sections?.map((section) => (
          <section key={section.id} className="mb-6">
            <StudentSectionTitle
              title={section.title}
              colorClass={resumeColor}
            />
            {section.items.map((item, index) => (
              <StudentEntry key={index} item={item} />
            ))}
          </section>
        ))}
      </main>
    </div>
  );
};

export default ResumeStudentEntry;
