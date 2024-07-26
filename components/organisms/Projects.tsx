import * as React from "react";
import { useState } from "react";
import HighlightedText from "../atoms/HighlightedText";
import ProjectInfo from "../atoms/ProjectInfo";
import SectionWrapper from "../molecules/SectionWrapper";
import projects from "../../data/projects.json";
import classNames from "classnames";

export default function Projects() {
  const Project = (
    props: ProjectsProps & {
      index: number;
    }
  ) => {
    const { title, description, period, myRoles, teamMembers, link } = props;

    return (
      <div className="project-container">
        <div className="flex-1 flex flex-row gap-8">
          <div className="flex flex-col justify-between">
            <div className="flex-1">
              <div className="flex flex-row justify-between text-sm">
                <a href={link} target="_blank" className="hover:underline">
                  <h5 className="mb-2 font-bold text-xl leading-none">
                    {title}
                  </h5>
                </a>
                <div className="mb-2">
                  <span>{period}</span>
                </div>
              </div>
              <p className="mb-4 leading-none">
                  {
                    teamMembers.map((member, index) => (
                      <span key={`team_member_${index}`}>
                        <span className={
                          classNames({
                            "font-bold": member === "Suyeon Nam"
                          })
                        }>
                        {member}
                        </span>
                        {index !== teamMembers.length - 1 && ", "}
                      </span>
                    ))

                  }
              </p>
              <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed w-4/5">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <SectionWrapper sectionTitle="Projects">
      <div className="flex flex-col gap-16">
        {projects.map((project, index) => (
          <Project {...project} key={"project_" + index} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
