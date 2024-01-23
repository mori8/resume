import { IconType } from "react-icons";
declare module "gtag.js";

declare global {
  interface Window {
    gtag: string;
  }
}

interface Community {
  title: string;
  position: string;
  started: string;
  ended: string;
  description: string;
  icon: string;
}

interface Education {
  univ: string;
  location: string;
  course: string;
  period: string;
  icon: string;
}

interface Experience {
  started: string;
  ended: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  projects: ProjectDetails[];
}

interface ProjectDetails {
  title: string;
  techstack: string[];
  description: string[];
}

interface Project {
  title: string;
  imageURL: string;
  period: string;
  description: string;
  myRoles: string;
  responsibilities: string[];
  link: {
    name: string;
    url: string;
  }[];
}
