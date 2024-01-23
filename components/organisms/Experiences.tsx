import { useState } from "react";
import HighlightedText from "../atoms/HighlightedText";
import CustomLi from "../atoms/CustomLi";
import classNames from "classnames";

export default function Experiences({
  experiences,
}: {
  experiences: Experience[];
}) {
  const Experience = (
    props: Experience & {
      index: number;
    }
  ) => {
    const { title, subtitle, started, ended, description, projects, index } =
      props;
    return (
      <div className="flex flex-col">
        <div className="flex flex-row gap-4">
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
        <div className="flex flex-col gap-2">
          {projects.map((project, project_index) => {
            const { title, description, techstack } = project;
            return (
              <div key={`exp_${index}_p${project_index}`} className="">
                <h4 className="mt-5 font-semibold">{title}</h4>
                <p className="text-gray-600">{techstack.join(", ")}</p>
                <ul className="ul-disc">
                  {description.map((desc, desc_index) => {
                    return (
                      <CustomLi
                        key={`exp_${index}_p${project_index}_d${desc_index}`}
                      >
                        {desc}
                      </CustomLi>
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
      <HighlightedText backgroundSize="none" className="text-2xl mb-10">
        Work Experiences
      </HighlightedText>
      {experiences.map((experience, index) => (
        <Experience key={`exp_${index}`} {...experience} index={index} />
      ))}
    </section>
  );
}
