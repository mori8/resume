import * as React from "react";
import HighlightedText from "../atoms/HighlightedText";
import projects from "../../data/projects.json";



export default function Projects() {
  const Project = (props: ProjectsProps) => {};

  return (
    <section className="section-projects">
      <HighlightedText backgroundSize="sm" className="text-xl tracking-wider">
        Projects
      </HighlightedText>
    </section>
  );
}
