import * as React from "react";
import HighlightedText from "../atoms/HighlightedText";

export interface IProjectsProps {}

export default function Projects(props: IProjectsProps) {
  return (
    <section>
      <HighlightedText backgroundSize="sm" className="text-xl tracking-wider">
        Projects
      </HighlightedText>
    </section>
  );
}
