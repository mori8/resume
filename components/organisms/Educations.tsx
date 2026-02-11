import * as React from "react";
import SectionWrapper from "../molecules/SectionWrapper";
import educations from "../../data/educations.json";

export default function Educations() {
  return (
    <SectionWrapper sectionTitle="Educations">
      <div className="flex flex-col gap-8">
        {educations.map((education, index) => (
          <div key={index} className="flex-1 flex flex-col">
            <div>
              <div className="flex flex-row justify-between">
                <h3 className="text-lg font-bold">{education.school.en}</h3>
                <span className="text-sm">{education.period}</span>
              </div>
              <div className="flex flex-row gap-3">
                <span className="text-sm text-gray-600">{education.degree.en}</span>
                {education.gpa && (
                  <span>
                    GPA <b>{education.gpa}</b>
                  </span>
                )}
              </div>
            </div>
            {education.details && (
              <div className="mt-2 text-slate-700 text-sm">
                <ul className="list-disc list-inside">
                  {education.details.en.map((detail, dIndex) => (
                    <li key={dIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
