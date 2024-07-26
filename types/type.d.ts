declare module 'gtag.js';

interface ExperienceProps {
  period: string;
  title: string;
  subtitle: string | null;
  description: string;
  link: string;
  projects: string[];
}

interface ExperiencePropsWithIndex extends ExperienceProps {
  index: number;
}

interface CommunityProps {
  title: string;
  position: string;
  description: string;
  started: string;
  ended: string;
  details: string[];
  link: string;
}

interface CommunityPropsWithIndex extends CommunityProps {
  index: number;
}

interface projectProps {
  title: string;
  techstack: string[];
  description: string[];
  screenshots: string[];
}

interface referenceProps {
  title: string;
  mainText: string;
  imageURL: string;
  href: string;
  type: string;
}

interface ProjectsProps {
  title: string;
  imageURL: string;
  period: string;
  description: string;
  myRoles: string,
  teamMembers: string[],
  contributions: string,
  responsibilities: string[];
  link: string,
  references: referenceProps[] | undefined;
}

declare global {
  interface Window {
    gtag: string;
  }
}