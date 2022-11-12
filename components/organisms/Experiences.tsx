import { useState } from "react";
import HighlightedText from "../atoms/HighlightedText";
import ProjectDescBox from "../molecules/ProjectDescBox";
import ExprienceDescBox from "../molecules/ExperienceDescBox";
import ReferencesAnchorButton from "../molecules/ReferencesAnchorButton";
import experiences from "../../data/experiences.json";
import classNames from "classnames";

export default function Experiences() {
  const Experience = (props: ExperiencePropsWithIndex) => {
    const {
      index,
      started,
      ended,
      title,
      subtitle,
      description,
      logoURL,
      logoWidth,
      logoHeight,
      link,
      projects,
    } = props;
    return (
      <div className="flex flex-row justify-between gap-10">
        <div className="mr-4 text-desire font-bold leading-relaxed lg:w-20">
          {started} -
          <br />
          {ended}
        </div>
        <div className="pl-10 border-l-2 border-l-gray-200 flex-1">
          <div
            className={classNames("pb-20 flex flex-col gap-6", {
              "pb-0": index === experiences.length - 1,
            })}
          >
            <ExprienceDescBox
              key={`$experience_${index}`}
              title={title}
              subtitle={subtitle}
              description={description}
              logoURL={logoURL}
              logoWidth={logoWidth}
              logoHeight={logoHeight}
              link={link}
            />
            <div className="project-container">
              {projects.map((project, index) => (
                <ProjectDescBox
                  key={`project-${index}-${project.title}`}
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  period={project.period}
                  techStack={project.techstack}
                />
              ))}
            </div>
            <div className="references-container">
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
    <section className="section-experiences">
      <HighlightedText
        backgroundSize="sm"
        className="text-xl tracking-wider mb-12"
      >
        Experiences
      </HighlightedText>
      {experiences.map((experience, index) => (
        <Experience key={`exp_${index}`} {...experience} index={index} />
      ))}
    </section>
  );
}
