import HighlightedText from "../atoms/HighlightedText";
import CustomLi from "../atoms/CustomLi";
import experiences from "../../data/experiences.json";
import SectionWrapper from "../molecules/SectionWrapper";
import classNames from "classnames";

export default function Experiences() {
  const Experience = (props: ExperiencePropsWithIndex) => {
    const {
      index,
      started,
      ended,
      title,
      subtitle,
      description,
      link,
      projects,
    } = props;
    return (
      <div className="flex flex-col">
        <div className="flex flex-row gap-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <h5 className="text-xl">{subtitle}</h5>
        </div>
        <div className="period mt-1">
          <span className="">{started}</span> -{" "}
          <span className="">{ended}</span>
        </div>
        <div className="mt-3">
          <p className="">{description}</p>
        </div>
        <div className="flex flex-col gap-2">
          {projects.map((project, project_index) => {
            const { title, description } = project;
            return (
              <div key={`exp_${index}_p${project_index}`} className="">
                <h4 className="mt-5 font-semibold">{title}</h4>
                <ul className="ul-disc">
                  {description.map((desc, desc_index) => {
                    return (
                      <CustomLi key={`exp_${index}_p${project_index}_d${desc_index}`}>
                        {desc}
                      </CustomLi>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
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
