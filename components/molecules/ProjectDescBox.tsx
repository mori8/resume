import * as React from "react";
import DecoratedText from "../atoms/DecoratedText";
import TechStackBadge from "../atoms/TechStackBadge";

export interface IProjectDescBoxProps {
  title: string;
  subtitle?: string;
  description: string;
  period: string;
  techStack?: string[];
}

export default function ProjectDescBox(props: IProjectDescBoxProps) {
  const { title, subtitle, description, period, techStack } = props;
  return (
    <div className="hover:bg-gray-100 px-6 py-7 transition-all cursor-pointer">
      <div className="flex flex-row justify-between mb-2">
        <div className="flex flex-row items-center">
          <DecoratedText className="font-bold text-lg">{title}</DecoratedText>
        </div>
        <div className="text-gray-300">{period}</div>
      </div>
      <div className="ml-3 flex flex-row gap-1 mb-3">
        {techStack?.map((tech, index) => (
          <TechStackBadge tech={tech} key={"tech_" + index + "_" + tech} />
        ))}
      </div>
      {subtitle && <h5 className="mb-3 ml-4">{subtitle}</h5>}
      <p className="text-sm text-gray-600 ml-4 whitespace-pre-wrap leading-6">
        {description}
      </p>
    </div>
  );
}
