import * as React from "react";
import classNames from "classnames";

export interface IHighlightedTextProps {
  backgroundSize?: string;
  leftBias?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function HighlightedText(props: IHighlightedTextProps) {
  const { backgroundSize = "base", children,className } = props;
  return (
    <div
      className={classNames(
        'inline-block font-bold after:content-[""] after:float-left after:bg-celeste after:w-full after:h-7 after:rounded-full after:-mt-7',
        {
          "after:h-7 after:-mt-7": backgroundSize === "xl",
          "after:h-4 after:-mt-4": backgroundSize === "base",
          "after:h-3 after:-mt-3": backgroundSize === "sm",
          "after:ml-2": props.leftBias,
        },
        className
      )}
    >
      {children}
    </div>
  );
}
