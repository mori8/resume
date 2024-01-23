import React from "react";
import HighlightedText from "../atoms/HighlightedText";

export default function Communities({
  communities,
}: {
  communities: Community[];
}) {
  const Community = (
    props: Community & {
      index: number;
    }
  ) => {
    const { title, position, started, ended, description, index } = props;
    return (
      <div className="flex flex-col">
        <div className="flex flex-row gap-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <h5 className="text-xl">{position}</h5>
        </div>
        <div className="period mt-1">
          <span className="">{started}</span> -{" "}
          <span className="">{ended}</span>
        </div>
        <div className="mt-3">
          <p className="">{description}</p>
        </div>
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
