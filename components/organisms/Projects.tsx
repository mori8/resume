import * as React from "react";
import { useState } from "react";
import HighlightedText from "../atoms/HighlightedText";
import ProjectInfo from "../atoms/ProjectInfo";
import ThumbnailView from "../atoms/ThumbnailView";
import ReferencesAnchorButton from "../molecules/ReferencesAnchorButton";
import projects from "../../data/projects.json";
import classNames from "classnames";

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(
    Array(projects.length).fill(false)
  );

  const Project = (
    props: ProjectsProps & {
      index: number;
    }
  ) => {
    const {
      title,
      imageURL,
      description,
      period,
      myRoles,
      teamMembers,
      contributions,
      responsibilities,
      references,
      index,
    } = props;

    const ChangeIsExpanded = (index: number) => {
      const newIsExpanded = [...isExpanded];
      newIsExpanded[index] = !newIsExpanded[index];
      setIsExpanded(newIsExpanded);
    };

    return (
      <div className="project-container">
        <div className="rounded-lg hover:bg-slate-100 px-6 py-7 transition-all cursor-pointer">
          <div className="flex-1 flex flex-row gap-8">
            <div className="">
              <ThumbnailView imageURL={imageURL} type={"blog"} size="lg" />
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex-1">
                <h5 className="mb-2 font-bold text-xl leading-none">{title}</h5>
                <div className="period mb-2">
                  <span>{period}</span>
                </div>
                <p className="text-sm text-gray-600 whitespace-pre-wrap leading-6">
                  {description}
                </p>
              </div>
              <div className="text-sm flex flex-col gap-1">
                <ProjectInfo type="맡은 역할" value={myRoles} />
                <ProjectInfo type="참여 인원" value={teamMembers} />
                <ProjectInfo type="기여도" value={contributions} />
              </div>
            </div>
          </div>
          <div className="mt-6 project-desc-wrapper bg-white">
            <button
              onClick={() => ChangeIsExpanded(index)}
              className="font-bold underline px-6 py-2"
            >
              {isExpanded[index] ? "▲ 접기" : "▼ 더보기"}
            </button>
            <div
              className={classNames("px-6 pb-6", {
                hidden: !isExpanded[index],
              })}
            >
              <div className="project-desc-detail-wrapper">
                <h4 className="font-bold mb-3">Key Responsibilities</h4>
                <ul className="list-inside text-sm text-gray-600 leading-5">
                  {responsibilities.map((role, index) => (
                    <li key={"role_" + index + "_" + role} className="mb-2">
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
              {props.references?.length !== 0 && (
                <div className="project-desc-detail-wrapper">
                  <h4 className="font-bold mb-3">References</h4>
                  <div className="references-container mt-2">
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
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="section-projects">
      <HighlightedText backgroundSize="none" className="text-2xl">
        Personal Projects
      </HighlightedText>
      <div className="flex flex-col gap-4 mt-8">
        {projects.map((project, index) => (
          <Project {...project} key={"project_" + index} index={index} />
        ))}
      </div>
    </section>
  );
}
