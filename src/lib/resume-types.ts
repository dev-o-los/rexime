export type ResumeExperience = {
  title: string;
  company: string;
  location?: string;
  duration?: string;
  points?: string[];
};

export type ResumeProject = {
  title: string;
  stack?: string;
  duration?: string;
  points?: string[];
};

export type ResumeData = {
  name: string;
  phone?: string;
  email?: string;
  linkedin?: string;
  education?: {
    institute: string;
    degree: string;
    location?: string;
    duration?: string;
  };
  experience?: ResumeExperience[];
  projects?: ResumeProject[];
  achievements?: string[];
  skills?: {
    languages?: string[];
    frameworks?: string[];
    databases?: string[];
    cloud?: string[];
    tools?: string[];
  };
};
