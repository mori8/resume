import React from "react";
import HighlightedText from "../atoms/HighlightedText";
import CustomLi from "../atoms/CustomLi";
import communities from "../../data/communities.json";

export default function Communities() {
  const Community = (props: CommunityPropsWithIndex) => {
    const {
      index,
      title,
      position,
      description,
      started,
      ended,
      details,
      link,
    } = props;
    return (
      <div className="flex flex-col">
        <div className="flex flex-row gap-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <h5 className="text-lg">{position}</h5>
        </div>
        <div className="period mt-1">
          <span className="">{started}</span> -{" "}
          <span className="">{ended}</span>
        </div>
        <div className="mt-3">
          <p className="">{description}</p>
        </div>
        <ul className="ul-disc">
          {details.map((detail, detail_index) => (
            <CustomLi key={`community_${index}_d${detail_index}`}>
              {detail}
            </CustomLi>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section className="section-communities">
      <HighlightedText backgroundSize="none" className="text-2xl mb-10">
        Communities
      </HighlightedText>
      <div className="flex flex-col gap-10">
        {communities.map((community, index) => (
          <Community key={`community_${index}`} {...community} index={index} />
        ))}
      </div>
    </section>
  );
}
