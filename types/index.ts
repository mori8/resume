export interface SocialLink {
  type: 'email' | 'github' | 'linkedin';
  label: string;
  url: string;
}

export interface Profile {
  name: {
    ko: string;
    en: string;
  };
  title: {
    ko: string;
    en: string;
  };
  description: {
    ko: string;
    en: string;
  };
  image: string;
  contact: SocialLink[];
  skills: {
    programming: string[];
    qualitativeResearch: string[];
    design: string[];
  };
}

export interface ProjectSummary {
  slug: string;
  title: string;
  thumbnail: string;
  tags: string[];
  order: number;
}

export interface Project extends ProjectSummary {
  period: string;
  summary: {
    en: string;
    ko: string;
  };
  techStack: string[];
  team?: string;
  role: {
    en: string;
    ko: string;
  };
  details: {
    en: string;
    ko: string;
  };
  images: string[];
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
  };
}

export interface Publication {
  id: number;
  title: string;
  authors: string[];
  venue: string;
  venueShort: string;
  year: number;
  type: 'conference' | 'journal';
  isFirstAuthor: boolean;
  links: {
    doi?: string;
    openreview?: string;
    github?: string;
    huggingface?: string;
  };
}

export interface LocalizedText {
  ko: string;
  en: string;
}

export interface ExperienceProject {
  title: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  outcome: LocalizedText;
}

export interface Experience {
  period: string;
  company: string;
  companyKo: string;
  position: string;
  projects: ExperienceProject[];
}

export interface Education {
  school: LocalizedText;
  degree: LocalizedText;
  period: string;
  gpa: string;
  gpaDetail?: LocalizedText;
  details?: LocalizedText & { ko: string[]; en: string[] };
}

export interface Award {
  year: string;
  title: LocalizedText;
  link?: string;
}
