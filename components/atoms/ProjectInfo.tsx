import React from "react";

type Props = {
  type: string;
  value: string;
};

export default function ProjectInfo({ type, value }: Props) {
  return (
    <div className="flex flex-row">
      <span className="w-20 font-bold">{type}</span>
      <span>{value}</span>
    </div>
  );
}
