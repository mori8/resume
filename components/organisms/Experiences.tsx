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
      link,
      projects,
    } = props;
    return (
      <div className="flex flex-col">
        <div className="flex flex-row gap-8">
          <h3 className="text-xl font-bold">{title}</h3>
          <h5 className="text-xl">{subtitle}</h5>
        </div>
        <div className="period mt-1">
          <span className="">{started}</span> -{" "}
          <span className="">{ended}</span>
        </div>
        <div className="mt-3">
          <p className="">{description}</p>
        </div>
        <div className="">
          {projects.map((project, project_index) => {
            const { title, description, techstack, screenshots } = project;
            return (
              <div key={`exp_${index}_p${project_index}`} className="">
                <h4 className="mt-5 font-semibold">{title}</h4>
                <p className="text-slate-600">{techstack.join(", ")}</p>
                <ul className="list-disc pl-6 mt-2">
                  {description.map((desc, desc_index) => {
                    return (
                      <li key={`exp_${index}_p${project_index}_d${desc_index}`}>
                        {desc}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className="section-experiences">
      <HighlightedText backgroundSize="none" className="text-2xl mb-8">
        Work Experiences
      </HighlightedText>
      {experiences.map((experience, index) => (
        <Experience key={`exp_${index}`} {...experience} index={index} />
      ))}
    </section>
  );
}
