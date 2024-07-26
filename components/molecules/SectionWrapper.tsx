import React from "react";

type Props = {
  sectionTitle: string;
  children: React.ReactNode;
};

export default function SectionWrapper({ sectionTitle, children }: Props) {
  return (
    <div className="border-t-2 border-t-black pt-4 flex flex-row gap-4 w-full">
      <h2 className="text-sm font-medium leading-5 mb-10 whitespace-pre-wrap lg:w-32 flex-shrink-0">
        {sectionTitle.toUpperCase()}
      </h2>
      <div className="flex-1">{children}</div>
    </div>
  );
}
