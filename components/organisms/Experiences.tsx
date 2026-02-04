import experiences from "../../data/experiences.json";
import SectionWrapper from "../molecules/SectionWrapper";

export default function Experiences() {
  return (
    <SectionWrapper sectionTitle={`Work\nExperiences`}>
      {experiences.map((experience, index) => (
        <div key={`exp_${index}`} className="flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-4">
              <h3 className="text-lg font-bold">{experience.company}</h3>
              <h5 className="text-lg">{experience.position}</h5>
            </div>
            <span className="text-sm">{experience.period}</span>
          </div>
          <ul className="leading-relaxed w-4/5">
            {experience.projects.map((project, pIndex) => (
              <li
                key={`exp_${index}_p${pIndex}`}
                className="ml-4 pl-2 list-disc mt-2 text-slate-700 text-sm"
              >
                <strong>{project.title.en}</strong>: {project.outcome.en}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </SectionWrapper>
  );
}
