"use client";

import { ResumeData } from "@/lib/resume-types";

type Props = { data: ResumeData };

export default function Resume({ data }: Props) {
  return (
    <div className="bg-white text-black max-w-4xl mx-auto p-10 text-[13px] font-serif">
      {/* Header */}
      <header className="text-center border-b border-gray-400 pb-2 mb-4">
        <h1 className="text-3xl font-bold tracking-wide">{data.name}</h1>
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
        </div>
      </header>

      {/* Education */}
      {data.education && (
        <section className="mb-4">
          <h2 className="font-bold text-lg border-b border-gray-400 mb-1">
            EDUCATION
          </h2>
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">{data.education.institute}</p>
              <p className="italic">{data.education.degree}</p>
            </div>
            <div className="text-right text-sm">
              <p>{data.education.location}</p>
              <p>{data.education.duration}</p>
            </div>
          </div>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-4">
          <h2 className="font-bold text-lg border-b border-gray-400 mb-1">
            EXPERIENCE
          </h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-3">
              <div className="flex justify-between">
                <p className="font-semibold">
                  {exp.title} - <span className="italic">{exp.company}</span>
                </p>
                <p className="text-sm">{exp.duration}</p>
              </div>
              <p className="text-sm italic">{exp.location}</p>
              <ul className="list-disc ml-6">
                {exp.points?.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <section className="mb-4">
          <h2 className="font-bold text-lg border-b border-gray-400 mb-1">
            PROJECTS
          </h2>
          {data.projects.map((proj, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold">
                {proj.title}{" "}
                {proj.stack && <span className="italic">| {proj.stack}</span>}
              </p>
              <ul className="list-disc ml-6">
                {proj.points?.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Achievements */}
      {data.achievements && data.achievements.length > 0 && (
        <section className="mb-4">
          <h2 className="font-bold text-lg border-b border-gray-400 mb-1">
            ACHIEVEMENTS
          </h2>
          <ul className="list-disc ml-6">
            {data.achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Technical Skills */}
      {data.skills && (
        <section>
          <h2 className="font-bold text-lg border-b border-gray-400 mb-1">
            TECHNICAL SKILLS
          </h2>
          <div className="space-y-1">
            {data.skills.languages && (
              <p>
                <span className="font-semibold">Languages: </span>
                {data.skills.languages.join(", ")}
              </p>
            )}
            {data.skills.frameworks && (
              <p>
                <span className="font-semibold">Frameworks: </span>
                {data.skills.frameworks.join(", ")}
              </p>
            )}
            {data.skills.databases && (
              <p>
                <span className="font-semibold">Databases: </span>
                {data.skills.databases.join(", ")}
              </p>
            )}
            {data.skills.cloud && (
              <p>
                <span className="font-semibold">Cloud Services: </span>
                {data.skills.cloud.join(", ")}
              </p>
            )}
            {data.skills.tools && (
              <p>
                <span className="font-semibold">Developer Tools: </span>
                {data.skills.tools.join(", ")}
              </p>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
