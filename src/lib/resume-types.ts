export type ResumeField = {
  label: string; // e.g. "Company", "Duration", "Role"
  value?: string; // The value like "Google", "2021–2023"
};

export type ResumeEntry = {
  title?: string; // Optional main heading, e.g., "Software Engineer"
  subtitle?: string; // Optional subheading, e.g., "Google"
  meta?: string; // e.g., "Jan 2021 – Dec 2023 | Mountain View"
  website?: string;
  location?: string;
  editorHTML?: string; // Bullet points
  fields?: ResumeField[]; // Arbitrary labeled fields for flexibility
};

export type ResumeSection = {
  id: string; //identifying
  title: string; // e.g. "Experience", "Projects", "Education"
  items: ResumeEntry[]; // list of entries
  displayOrder?: number; // optional ordering
};

export type ResumeData = {
  name: string;
  title?: string;
  summary?: string;
  phone?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  location?: string;
  nationality?: string;
  languages?: string[];
  skillsBerlin?: string[];
  sections?: ResumeSection[];
};

export type SectionFields = {
  title1: string;
  placeholder1: string;
  title2: string;
  placeholder2: string;
  title3: string;
  placeholder3: string;
  title4: string;
  placeholder4: string;
};
