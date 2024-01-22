import * as React from "react";
import HighlightedText from "../atoms/HighlightedText";
import CustomLi from "../atoms/CustomLi";

interface EducationProps {
  json: {
    univ: string;
    major: string;
    totalGrade: string;
    majorGrade: string;
    period: string;
    details: string[];
  };
}

export default function Educations({ json }: EducationProps) {
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
            <CustomLi key={`education_${index}`}>{detail}</CustomLi>
          ))}
        </ul>
      </div>
    </section>
  );
}
