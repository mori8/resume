interface ExperienceProps {
  started: string;
  ended: string;
  title: string;
  subtitle: string | null;
  description: string;
  logoURL: string;
  logoWidth: number | null;
  logoHeight: number | null;
  link: string;
  projects: projectProps[];
  references: referenceProps[] | undefined;
}

interface ExperiencePropsWithIndex extends ExperienceProps {
  index: number;
}

interface projectProps {
  title: string;
  subtitle?: string;
  description: string;
  period: string;
  techstack?: string[];
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
  info: string;
  imageURL: string;
  description: string;
  period: string;
  techstack: string[];
  roles: string[];
  references: referenceProps[] | undefined;
}
