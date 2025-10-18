// components/resumes/resumeBerlin.tsx
// import type { FC } from "react";

import { ResumeData, ResumeSection } from "@/lib/resume-types";
import { FC } from "react";

// // --- DATA TYPES (Tailored for this specific template) ---
// export type ResumeEntry = {
//   title?: string;
//   subtitle?: string;
//   meta?: string;
//   location?: string;
//   editorHTML?: string;
// };

// export type ResumeSection = {
//   id: string;
//   title: string;
//   items: ResumeEntry[];
// };

// export type ResumeDataBerlin = {
//   name: string;
//   title?: string;
//   location?: string;
//   phone?: string;
//   email?: string;
//   nationality?: string;
//   skills?: string[];
//   languages?: string[];
//   sections?: ResumeSection[];
// };

// --- MOCK DATA (Matches the provided image exactly) ---
// const mockBerlinData: ResumeDataBerlin = {
//   name: "TAYLOR COOK",
//   title: "Programmer",
//   location: "1600 Amphitheatre Road\nPalo Alto, CA 94304\nUnited States",
//   phone: "(315) 802-8179",
//   email: "taylor.cook@gmail.com",
//   nationality: "American",
//   skills: [
//     "Performance Optimization",
//     "Troubleshooting and Solutions Deployment",
//     "Analytical Thinking Skills",
//     "Software Design and Development",
//     "Coding and Scripting",
//   ],
//   languages: ["English", "French"],
//   sections: [
//     {
//       id: "profile",
//       title: "PROFILE",
//       items: [
//         {
//           editorHTML: `<p>Innovative Programmer and Internet Entrepreneur striving to make the world a more unified and connected place. A creative thinker, adept in software development and working with various data structures.</p>`,
//         },
//       ],
//     },
//     {
//       id: "experience",
//       title: "EMPLOYMENT HISTORY",
//       items: [
//         {
//           title: "Programmer",
//           subtitle: "Johannes Initiative",
//           location: "Palo Alto",
//           meta: "Dec 2015 --- Present",
//           editorHTML: `<ul><li>Worked to enhance software systems to help educators, scientists, and policy experts already working on some of humanity's greatest challenges.</li><li>Developed and enhances programs to increase accuracy and lower costs.</li><li>Developed strategies to ensure compliance with new standards.</li></ul>`,
//         },
//         {
//           title: "Programmer",
//           subtitle: "Kindlinks, Inc.",
//           location: "Menlo Park, CA",
//           meta: "Feb 2004 - Sep 2015",
//           editorHTML: `<ul><li>Since founding Kindlinks, Inc. in 2004 I continue to work to build and improve it's infrastructure, offerings, product strategy, and design.</li><li>Work to continuously lead developments helping people to create, share, and discover in new ways.</li></ul>`,
//         },
//       ],
//     },
//     {
//       id: "education",
//       title: "EDUCATION",
//       items: [
//         {
//           title: "Master of Computer Science",
//           subtitle: "Boston College",
//           location: "Boston",
//           meta: "Aug 2001 --- Jun 2004",
//         },
//       ],
//     },
//   ],
// };

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
          {item.editorHTML && (
            <div
              className="text-sm max-w-none mt-2 text-gray-700 [&_ul]:list-disc [&_ul]:list-outside [&_ul]:pl-5"
              dangerouslySetInnerHTML={{ __html: item.editorHTML }}
            />
          )}
        </div>
      ))}
    </div>
  </section>
);

export const ResumeBerlin = ({ data }: { data: ResumeData }) => {
  return (
    <div className="bg-white font-sans text-gray-900 flex shadow-lg">
      {/* Left Column */}
      <aside className="w-[36%] bg-gray-50 p-8">
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
                <p>{data.email}</p>
              </div>
            )}
            {data.nationality && (
              <div>
                <h3 className="font-bold uppercase text-xs mb-1">
                  Nationality
                </h3>
                <p>{data.nationality}</p>
              </div>
            )}
          </div>
        </LeftColumnSection>
        {data.skillsBerlin && (
          <LeftColumnSection title="SKILLS">
            <ul className="space-y-3">
              {data.skillsBerlin.map((skill) => (
                <li key={skill} className="text-sm font-medium">
                  {skill}
                  <div className="h-[3px] bg-gray-300 mt-1.5 w-full"></div>
                </li>
              ))}
            </ul>
          </LeftColumnSection>
        )}

        {data.languages && (
          <LeftColumnSection title="LANGUAGES">
            <ul className="space-y-3">
              {data.languages.map((lang) => (
                <li key={lang} className="text-sm font-medium">
                  {lang}
                  <div className="h-[3px] bg-gray-300 mt-1.5 w-3/4"></div>
                </li>
              ))}
            </ul>
          </LeftColumnSection>
        )}
      </aside>

      {/* Right Column */}
      <main className="w-[64%] p-10">
        {data.sections?.map((section) => (
          <RightColumnSection key={section.id} section={section} />
        ))}
      </main>
    </div>
  );
};
