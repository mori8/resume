import * as React from "react";
import HighlightedText from "../atoms/HighlightedText";
import CustomLi from "../atoms/CustomLi";
import SectionWrapper from "../molecules/SectionWrapper";
import educations from "../../data/educations.json";

export default function Educations() {
  return (
    <SectionWrapper sectionTitle="Educations">
      <div className="flex flex-col gap-8">
        {educations.map((education, index) => (
          <div className="flex-1 flex flex-col">
            <div>
              <div className="flex flex-row gap-4">
                <h3 className="text-xl font-bold">{education.univ}</h3>
                <h5 className="text-xl">{education.major}</h5>
              </div>
              <div className="flex flex-row gap-3">
                {education.totalGrade && (
                  <span>
                    GPA <b>{education.totalGrade}</b>
                  </span>
                )}
                {education.majorGrade && (
                  <span>
                    MAJOR GPA <b>{education.majorGrade}</b>
                  </span>
                )}
              </div>
              <div>
                <span className="period">{education.period}</span>
              </div>
            </div>
            <ul className="text-gray-600 ul-disc">
              {education.details.map((detail, index) => (
                <CustomLi key={`education_${index}`}>{detail}</CustomLi>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
