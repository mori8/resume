import * as React from "react";
import HighlightedText from "../atoms/HighlightedText";

export interface ITitleProps {}

export default function Title(props: ITitleProps) {
  return (
    <div>
      <h1 className="text-5xl font-bold leading-tight">
        <HighlightedText backgroundSize='xl'>Wow Thing</HighlightedText> is
        <br />
        All We Need :P
      </h1>
    </div>
  );
}
