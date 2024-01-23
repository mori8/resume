import * as React from "react";
import { useState } from "react";
import HighlightedText from "../atoms/HighlightedText";
import ThumbnailView from "../atoms/ThumbnailView";

export default function Projects({ projects }: { projects: Project[] }) {
  const Project = (
    props: Project & {
      index: number;
    }
  ) => {
    const { title, period, description, link, imageURL, index } = props;

    return (
      <div className="project-container">
        <div className="flex-1 flex flex-row gap-8">
          <div className="">
            <ThumbnailView imageURL={imageURL} type={"blog"} size="lg" />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex-1">
              {link.map((link, index) => (
                <a
                  href={link.url}
                  target="_blank"
                  className="hover:underline"
                  key={index}
                >
                  <h5 className="mb-2 font-bold text-xl leading-none">
                    {title}
                  </h5>
                </a>
              ))}
              <div className="period mb-2">
                <span>{period}</span>
              </div>
              <p className="text-sm text-gray-600 whitespace-pre-wrap leading-6">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="section-projects">
      <HighlightedText backgroundSize="none" className="text-2xl mb-10">
        Personal Projects
      </HighlightedText>
      <div className="flex flex-col gap-16 mt-8">
        {projects.map((project, index) => (
          <Project {...project} key={"project_" + index} index={index} />
        ))}
      </div>
    </section>
  );
}
