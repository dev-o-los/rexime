"use client";

import { resumeAtom } from "@/app/store";
import { useAtomValue } from "jotai";
import React from "react";
import { CgAwards } from "react-icons/cg";
import { GiAchievement } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { MdAssuredWorkload, MdWorkOutline } from "react-icons/md";
import { PiCertificateLight } from "react-icons/pi";
import { SiHyperskill } from "react-icons/si";
import FormTextArea from "../../text/ResumeTextArea";
import { ResumeSection } from "./ResumeSection";

export function ResumeSections() {
  const resumeData = useAtomValue(resumeAtom);

  const iconMap: Record<string, React.ReactElement> = {
    experience: <MdWorkOutline />,
    education: <MdAssuredWorkload />,
    skills: <SiHyperskill />,
    projects: <GrProjects />,
    awards: <CgAwards />,
    certifications: <PiCertificateLight />,
    extracurricular: <MdWorkOutline />,
    achievements: <GiAchievement />,
  };

  return (
    <div>
      <hr className="mt-5" />
      <FormTextArea content={resumeData.summary ?? ""} />
      <hr className="mt-7 mb-4" />
      {resumeData.sections &&
        resumeData.sections.map((section, key) => (
          <ResumeSection
            key={key}
            heading={section.title}
            entries={section.items}
            icon={iconMap[section.id]}
            id={section.id}
          />
        ))}
    </div>
  );
}
