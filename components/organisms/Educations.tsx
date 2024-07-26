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
              <div className="flex flex-row justify-between">
                <h3 className="text-lg font-bold">{education.univ}</h3>
                <span className="text-sm">{education.period}</span>
              </div>
              <div className="flex flex-row gap-3">
                {education.GPA && (
                  <span>
                    GPA <b>{education.GPA}</b>
                  </span>
                )}
              </div>
            </div>
            <div className="mt-2 text-slate-700 text-sm">
              <p className="whitespace-pre-wrap leading-relaxed">
                {education.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
