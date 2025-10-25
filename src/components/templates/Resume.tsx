"use client";

import { ResumeData, ResumeEntry, ResumeSection } from "@/lib/resume-types";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import TiptapHTML from "../editor/TiptapHTML";

type Props = { data: ResumeData; font: string | null };

export default function Resume({ data, font }: Props) {
  return (
    <div
      className={`bg-white max-xl:w-[690px] text-black max-w-4xl mx-auto p-10 text-[13px] ${
        font ? font : "font-serif"
      }`}
    >
      {/* ---------------- Header ---------------- */}
      <header className="text-center border-b border-gray-400 pb-2 print:pb-2 mb-4">
        <h1 className="text-3xl font-bold tracking-wide">{data.name}</h1>
        {data.title && (
          <p className="text-lg font-medium text-gray-700 mt-1">{data.title}</p>
        )}

        {/* Contact Info */}
        <div className="flex justify-center flex-wrap gap-3 text-sm mt-1">
          {data.phone && (
            <span className="flex items-center gap-2">
              <FaPhoneAlt /> {data.phone}
            </span>
          )}
          {data.email && (
            <a
              href={`mailto:${data.email}`}
              className="hover:underline flex items-center gap-2"
            >
              <FaEnvelope />
              {data.email}
            </a>
          )}
          {data.linkedin && (
            <a
              href={data.linkedin}
              target="_blank"
              className="hover:underline flex items-center gap-2"
            >
              <FaLinkedin /> {data.linkedin}
            </a>
          )}
          {data.github && (
            <a
              href={data.github}
              target="_blank"
              className="hover:underline flex items-center gap-2"
            >
              <FaGithub /> {data.github}
            </a>
          )}
          {data.website && (
            <a
              href={data.website}
              target="_blank"
              className="hover:underline flex items-center gap-2"
            >
              <FaLink /> {data.website}
            </a>
          )}
          {data.location && (
            <div className="hover:underline flex items-center gap-2">
              <MdLocationOn /> {data.location}
            </div>
          )}
        </div>
      </header>

      {/* ---------------- Summary ---------------- */}
      {data.summary && (
        <section className="mb-4">
          <h2 className="font-bold text-lg border-b border-gray-400 mb-1">
            SUMMARY
          </h2>
          <div
            className="tiptap border-none min-h-auto"
            dangerouslySetInnerHTML={{ __html: data.summary }}
          />
        </section>
      )}

      {/* ---------------- Dynamic Sections ---------------- */}
      {data.sections &&
        data.sections.map((section: ResumeSection) => (
          <section key={section.id} className="mb-4">
            <h2 className="font-bold text-lg border-b border-gray-400 mb-1 uppercase">
              {section.title}
            </h2>

            {section.items.map((item: ResumeEntry, i: number) => (
              <div key={i} className="mb-3">
                {/* Entry Header */}
                <div className="flex justify-between flex-wrap">
                  <div>
                    {item.title && (
                      <p className="font-semibold">
                        {item.title}
                        {item.website && (
                          <span>
                            {" "}
                            |{" "}
                            <a
                              href={item.website}
                              target="_blank"
                              className="text-gray-700 underline"
                            >
                              {item.website}
                            </a>
                          </span>
                        )}
                      </p>
                    )}
                    {item.subtitle && (
                      <div className="italic text-xs text-gray-700">
                        {item.subtitle}
                        {item.gpa && (
                          <span>
                            {" "}
                            -{" "}
                            <span className="text-gray-700 font-normal">
                              {item.gpa}
                            </span>
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  {item.meta && (
                    <div className="flex">
                      <p className="text-sm text-gray-600">{item.meta}</p>
                      {item.location && (
                        <p className="text-sm text-gray-600">
                          &nbsp;|&nbsp;{item.location}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Editor data */}
                {item.editorHTML && <TiptapHTML html={item.editorHTML} />}
              </div>
            ))}
          </section>
        ))}
    </div>
  );
}
