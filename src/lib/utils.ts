import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SectionFields } from "./resume-types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sectionData: Record<string, SectionFields> = {
  experience: {
    title1: "Company",
    placeholder1: "Company name",
    title2: "Position",
    placeholder2: "Senior Developer",
    title3: "More Information",
    placeholder3: "Jan 2021 – Dec 2023 | Mountain View",
    title4: "Website",
    placeholder4: "www.xyz.com",
  },

  education: {
    title1: "Institution",
    placeholder1: "Stanford University",
    title2: "Degree",
    placeholder2: "Bachelor of Computer Science",
    title3: "More Information",
    placeholder3: "2019 – 2023 | California, USA",
    title4: "Grade / CGPA",
    placeholder4: "3.9 / 4.0",
  },

  certification: {
    title1: "Certificate Name",
    placeholder1: "Google Cloud Professional Developer",
    title2: "Issuer",
    placeholder2: "Google",
    title3: "More Information",
    placeholder3: "Issued Jan 2024 | Credential ID 12345",
    title4: "Verification Link",
    placeholder4: "www.credential-link.com",
  },

  projects: {
    title1: "Project Name",
    placeholder1: "PeakFlow – Productivity App",
    title2: "Role",
    placeholder2: "Lead Developer",
    title3: "More Information",
    placeholder3: "Jan 2024 – Present | React, Firebase, TypeScript",
    title4: "Project Link",
    placeholder4: "www.github.com/utkarsh/peakflow",
  },

  awards: {
    title1: "Award Title",
    placeholder1: "Winner – Hackathon 2024",
    title2: "Organization",
    placeholder2: "Google Developer Group",
    title3: "More Information",
    placeholder3: "Awarded for building an AI productivity app",
    title4: "Date",
    placeholder4: "March 2024",
  },

  extracurricular: {
    title1: "Activity Name",
    placeholder1: "Public Speaking Club",
    title2: "Role",
    placeholder2: "President",
    title3: "More Information",
    placeholder3: "Organized weekly speaking sessions and debates",
    title4: "Duration",
    placeholder4: "2022 – 2023",
  },
};
