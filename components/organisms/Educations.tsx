import * as React from "react";
import HighlightedText from "../atoms/HighlightedText";
import DecoreatedList from "../atoms/DecoratedText";
import Image from "next/image";
import educations from "../../data/educations.json";

export default function Educations() {
  return (
    <section className="section-educations">
      <HighlightedText backgroundSize="none" className="text-2xl mb-10">
        Educations
      </HighlightedText>
      <div className="educations-container flex flex-row gap-10">
        <div className="w-28 h-32 relative">
          <Image src={educations.logoURL} alt={educations.univ} layout="fill" />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <DecoreatedList className="text-xl font-bold">
            {educations.univ}
            <span className="text-gray-400 font-thin">
              , {educations.location}
            </span>
          </DecoreatedList>
          <p className="ml-4 text-gray-800 leading-relaxed">
            {educations.major} - {educations.status} <br />
            전공평점 <b>{educations.majorGrade}</b> | 전체평점{" "}
            <b>{educations.totalGrade}</b>
          </p>
          <p className="note ml-4 text-sm text-gray-600">{educations.note}</p>
        </div>
      </div>
    </section>
  );
}
