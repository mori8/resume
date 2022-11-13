import * as React from "react";
import HighlightedText from "../atoms/HighlightedText";
import TechStackBadge from "../atoms/TechStackBadge";
import DecoreatedList from "../atoms/DecoratedText";
import RoundedRectImageView from "../atoms/RoundedRectImageView";
import ReferencesAnchorButton from "../molecules/ReferencesAnchorButton";
import projects from "../../data/projects.json";

export default function Projects() {
  const Project = (props: ProjectsProps) => {
    const {
      title,
      info,
      imageURL,
      description,
      period,
      techstack,
      roles,
      references,
    } = props;
    return (
      <div className="rounded-lg hover:bg-slate-100 px-6 py-7 transition-all cursor-pointer flex flex-row gap-6">
        <div className="flex-1">
          <RoundedRectImageView imageURL={imageURL} type={"blog"} size="lg" />
        </div>
        <div className="project-main-wrapper">
          <div className="flex flex-row justify-between mb-2">
            <DecoreatedList className="font-bold text-lg">
              {title}
            </DecoreatedList>
            <div className="text-gray-300">{period}</div>
          </div>
          <div className="project-text-wrapper pl-4">
            <div className="flex flex-row gap-1 mb-3">
              {techstack?.map((tech, index) => (
                <TechStackBadge
                  tech={tech}
                  key={"tech_" + index + "_" + tech}
                />
              ))}
            </div>
            <h5 className="font-bold text-gray-800 text-sm mb-3">{info}</h5>
            <p className="text-sm text-gray-600 whitespace-pre-wrap leading-6">
              {description}
            </p>
            <div className="mt-6">
              <h4 className="font-bold mb-3">My Roles</h4>
              <ul className="list-inside text-sm text-gray-600 leading-5">
                {roles.map((role, index) => (
                  <li key={"role_" + index + "_" + role} className="mb-2">
                    {role}
                  </li>
                ))}
              </ul>
            </div>
            <div className="references-container mt-6">
              {props.references?.map((reference, index) => (
                <ReferencesAnchorButton
                  key={`reference-${index}-${reference.title}`}
                  title={reference.title}
                  mainText={reference.mainText}
                  imageURL={reference.imageURL}
                  href={reference.href}
                  type={reference.type}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="section-projects">
      <HighlightedText backgroundSize="sm" className="text-xl tracking-wider">
        Projects
      </HighlightedText>
      <div className="flex flex-col gap-4 mt-8">
        {projects.map((project, index) => (
          <Project {...project} key={"project_" + index} />
        ))}
      </div>
    </section>
  );
}
