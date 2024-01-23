import * as React from "react";
import HighlightedText from "../atoms/HighlightedText";

export default function Educations({
  educations,
}: {
  educations: Education[];
}) {
  return (
    <section className="section-educations">
      <HighlightedText backgroundSize="none" className="text-2xl mb-10">
        Educations
      </HighlightedText>
      {educations.map((education, index) => (
        <div className="flex-1 flex flex-col gap-2">
          <div>
            <div className="flex flex-row gap-4">
              <h3 className="text-xl font-bold">{education.univ}</h3>
              <h5 className="text-xl">{education.course}</h5>
            </div>
            <div>
              <span className="period">{education.period}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
