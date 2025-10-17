"use client";

import { ResumeData, ResumeEntry, ResumeSection } from "@/lib/resume-types";

type Props = { data: ResumeData };

export default function Resume({ data }: Props) {
  return (
    <div className="bg-white text-black max-w-4xl mx-auto p-10 text-[13px] font-serif">
      {/* ---------------- Header ---------------- */}
      <header className="text-center border-b border-gray-400 pb-2 mb-4">
        <h1 className="text-3xl font-bold tracking-wide">{data.name}</h1>
        {data.title && (
          <p className="text-lg font-medium text-gray-700 mt-1">{data.title}</p>
        )}

        {/* Contact Info */}
        <div className="flex justify-center flex-wrap gap-3 text-sm mt-1">
          {data.phone && <span>📞 {data.phone}</span>}
          {data.email && (
            <a href={`mailto:${data.email}`} className="hover:underline">
              ✉️ {data.email}
            </a>
          )}
          {data.linkedin && (
            <a href={data.linkedin} className="hover:underline">
              🔗 {data.linkedin}
            </a>
          )}
          {data.github && (
            <a href={data.github} className="hover:underline">
              💻 {data.github}
            </a>
          )}
          {data.website && (
            <a href={data.website} className="hover:underline">
              🌐 {data.website}
            </a>
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
        data.sections
          .sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0))
          .map((section: ResumeSection) => (
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
                          {item.subtitle && (
                            <span className="italic text-gray-700">
                              {" "}
                              - {item.subtitle}
                            </span>
                          )}
                        </p>
                      )}
                    </div>
                    {item.meta && (
                      <p className="text-sm text-gray-600">{item.meta}</p>
                    )}
                  </div>

                  {/* Optional Fields */}
                  {item.fields && item.fields.length > 0 && (
                    <div className="text-sm mt-1">
                      {item.fields.map((field, j) => (
                        <p key={j}>
                          <span className="font-semibold">{field.label}: </span>
                          {field.value}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Editor data */}
                  {item.editorHTML && (
                    <div
                      className="tiptap border-none min-h-auto"
                      dangerouslySetInnerHTML={{ __html: item.editorHTML }}
                    />
                  )}
                </div>
              ))}
            </section>
          ))}

      {/* ---------------- Skills Section ---------------- */}
      {data.skills && Object.keys(data.skills).length > 0 && (
        <section className="mt-5">
          <h2 className="font-bold text-lg border-b border-gray-400 mb-1">
            SKILLS
          </h2>
          <div className="space-y-1">
            {Object.entries(data.skills).map(([category, list]) => {
              if (!list || list.length === 0) return null;
              return (
                <p key={category}>
                  <span className="font-semibold capitalize">{category}: </span>
                  {list.join(", ")}
                </p>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
