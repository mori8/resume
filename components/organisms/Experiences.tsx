import HighlightedText from "../atoms/HighlightedText";
import CustomLi from "../atoms/CustomLi";
import experiences from "../../data/experiences.json";
import SectionWrapper from "../molecules/SectionWrapper";
import classNames from "classnames";

export default function Experiences() {
  const Experience = (props: ExperiencePropsWithIndex) => {
    const { period, title, subtitle, description, link, projects } = props;
    return (
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4">
            <h3 className="text-lg font-bold">{title}</h3>
            <h5 className="text-lg">{subtitle}</h5>
          </div>
          <span className="text-sm">{period}</span>
        </div>
        <div className="mt-2">
          <p className="">{description}</p>
        </div>
        <ul className="leading-relaxed w-4/5">
          {projects.map((project, index) => (
            <li
              key={`exp_${props.index}_p${index}`}
              className="ml-4 pl-2 list-disc mt-2 text-slate-700 text-sm"
            >
              {project}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <SectionWrapper sectionTitle={`Work\nExperiences`}>
      {experiences.map((experience, index) => (
        <Experience key={`exp_${index}`} {...experience} index={index} />
      ))}
    </SectionWrapper>
  );
}
