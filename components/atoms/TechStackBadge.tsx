import * as React from "react";
import Image from "next/image";
import classNames from "classnames";

export interface ITechStackBadgeProps {
  tech: string;
}

export default function TechStackBadge(props: ITechStackBadgeProps) {
  const { tech } = props;
  return (
    <div
      className={classNames(
        "w-fit h-fit flex flex-row text-[10px] items-center rounded-lg rounded-bl-none leading-2 px-[8px] py-[2px]",
        {
          "bg-[#61DAFB]": tech.split(' ')[0] === "React",
          "bg-[#009688] text-white": tech === "fastAPI",
          "bg-[#232F3E] text-white": tech === "AWS",
          "bg-[#3178C6] text-white": tech === "TypeScript",
          "bg-[#38B2AC] text-white": tech === "tailwind",
          "bg-[#4479A1] text-white": tech === "MySQL",
          "bg-[#430098] text-white": tech === "Heroku",
          "bg-[#CC6699] text-white": tech === "Sass",
          "bg-black text-white": tech === "Nextjs",
          "bg-[#000020] text-white": tech === "Expo",
        }
      )}
    >
      <Image
        src={`/images/tech/${tech.split(' ')[0]}.svg`}
        alt={tech}
        width={10}
        height={10}
      />
      <span className="ml-1">{tech}</span>
    </div>
  );
}
