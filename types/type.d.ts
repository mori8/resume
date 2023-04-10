interface ExperienceProps {
  started: string;
  ended: string;
  title: string;
  subtitle: string | null;
  description: string;
  link: string;
  projects: projectProps[];
}

interface ExperiencePropsWithIndex extends ExperienceProps {
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
  info: string;
  imageURL: string;
  description: string;
  period: string;
  techstack: string[];
  roles: string[];
  references: referenceProps[] | undefined;
}
