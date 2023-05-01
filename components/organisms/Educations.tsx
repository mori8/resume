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
      <div className="flex-1 flex flex-col gap-2">
        <div>
          <div className="flex flex-row gap-4">
            <h3 className="text-xl font-bold">{educations.univ}</h3>
            <h5 className="text-xl">{educations.major}</h5>
          </div>
          <div className="flex flex-row gap-3">
            <span>
              GPA <b>{educations.totalGrade}</b>
            </span>
            <span>
              MAJOR GPA <b>{educations.majorGrade}</b>
            </span>
          </div>
          <div>
            <span className="period">{educations.period}</span>
          </div>
        </div>
        <ul className="text-gray-600 ul-disc">
          {educations.details.map((detail, index) => (
            <li key={`education_${index}`}>{detail}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
