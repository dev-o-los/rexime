// components/resumes/resumeBerlin.tsx
import { resumeColorAtom } from "@/app/store";
import { ResumeData, ResumeSection } from "@/lib/resume-types";
import { useAtomValue } from "jotai";
import { FC } from "react";
import TiptapHTML from "../editor/TiptapHTML";

// --- HELPER COMPONENTS (For clean, reusable sections) ---
const LeftColumnSection: FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="mb-8">
    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-800 mb-4">
      {title}
    </h2>
    {children}
  </section>
);

const RightColumnSection: FC<{ section: ResumeSection }> = ({ section }) => (
  <section className="mb-8">
    <h2 className="text-xl font-bold mb-4 pb-1 border-b-2 border-gray-200">
      {section.title}
    </h2>
    <div className="space-y-6">
      {section.items.map((item, index) => (
        <div key={index}>
          <div className="flex justify-between items-start mb-1">
            <div className="flex-grow">
              <h3 className="text-lg font-semibold leading-tight">
                {item.title}
                {item.subtitle && (
                  <span className="font-normal">, {item.subtitle}</span>
                )}
              </h3>
            </div>
            {item.location && (
              <p className="text-sm text-gray-600 flex-shrink-0 ml-4">
                {item.location}
              </p>
            )}
          </div>
          {item.meta && <p className="text-sm text-gray-500">{item.meta}</p>}
          {item.gpa && <p className="text-sm text-gray-500">{item.gpa}</p>}
          {item.editorHTML && (
            <TiptapHTML className="text-sm" html={item.editorHTML} />
          )}
        </div>
      ))}
    </div>
  </section>
);

export const ResumeBerlin = ({ data }: { data: ResumeData }) => {
  const skillsSection = data.sections?.find(
    (section) => section.id === "skills"
  );

  const skillFields = skillsSection?.items?.[0]?.fields ?? [];
  const langsection = data.sections?.find(
    (section) => section.id === "languages"
  );

  const langFields = langsection?.items?.[0]?.fields ?? [];
  const resumeColor = useAtomValue(resumeColorAtom);

  return (
    <div className="bg-white font-sans text-gray-900 flex shadow-lg">
      {/* Left Column */}
      <aside className={`w-[36%] ${resumeColor} p-8`}>
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-800">
            {data.name}
          </h1>
          {data.title && (
            <h2 className="text-lg text-gray-600 font-medium mt-1">
              {data.title}
            </h2>
          )}
        </header>

        <LeftColumnSection title="DETAILS">
          <div className="text-sm space-y-3">
            {data.location && (
              <div>
                <h3 className="font-bold uppercase text-xs mb-1">Address</h3>
                <p className="whitespace-pre-line leading-snug">
                  {data.location}
                </p>
              </div>
            )}
            {data.phone && (
              <div>
                <h3 className="font-bold uppercase text-xs mb-1">Phone</h3>
                <p>{data.phone}</p>
              </div>
            )}
            {data.email && (
              <div>
                <h3 className="font-bold uppercase text-xs mb-1">Email</h3>
                <a href={`mailto:${data.email}`}>{data.email}</a>
              </div>
            )}
            {data.website && (
              <div>
                <h3 className="font-bold uppercase text-xs mb-1">Portfolio</h3>
                <a target="_blank" href={data.website}>
                  {data.website}
                </a>
              </div>
            )}
            {data.linkedin && (
              <div>
                <h3 className="font-bold uppercase text-xs mb-1">Linkedin</h3>
                <a target="_blank" href={data.linkedin}>
                  {data.linkedin}
                </a>
              </div>
            )}
            {data.github && (
              <div>
                <h3 className="font-bold uppercase text-xs mb-1">Github</h3>
                <a target="_blank" href={data.github}>
                  {data.github}
                </a>
              </div>
            )}
            {/* {data.nationality && (
              <div>
                <h3 className="font-bold uppercase text-xs mb-1">
                  Nationality
                </h3>
                <p>{data.nationality}</p>
              </div>
            )} */}
          </div>
        </LeftColumnSection>
        {skillFields.length > 0 && (
          <LeftColumnSection title="SKILLS">
            <ul className="space-y-3">
              {skillFields.map((field, idx) => (
                <li key={idx} className="text-sm font-medium">
                  {field.label}
                  <div className="h-[3px] bg-gray-300 mt-1.5 w-full relative">
                    <div
                      className="h-[3px] bg-black absolute top-0 left-0"
                      style={{
                        width: `${(Number(field.value) / 4) * 100}%`, // adjust max value if needed
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </LeftColumnSection>
        )}

        {langFields.length > 0 && (
          <LeftColumnSection title="LANGUAGES">
            <ul className="space-y-3">
              {langFields.map((field, idx) => (
                <li key={idx} className="text-sm font-medium">
                  {field.label}
                  <div className="h-[3px] bg-gray-300 mt-1.5 w-full relative">
                    <div
                      className="h-[3px] bg-black absolute top-0 left-0"
                      style={{
                        width: `${(Number(field.value) / 4) * 100}%`, // adjust max value if needed
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </LeftColumnSection>
        )}
      </aside>

      {/* Right Column */}
      <main className="w-[64%] p-10">
        {data.summary && (
          <section className="mb-4">
            <h2 className="text-xl font-bold mb-4 pb-1 border-b-2 border-gray-200">
              SUMMARY
            </h2>
            <div dangerouslySetInnerHTML={{ __html: data.summary }} />
          </section>
        )}
        {data.sections?.map(
          (section) =>
            section.id != "skills" && (
              <RightColumnSection key={section.id} section={section} />
            )
        )}
      </main>
    </div>
  );
};
