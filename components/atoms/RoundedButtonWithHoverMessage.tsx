import React, { useState } from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  children: React.ReactNode;
  description: string;
};

export default function RoundedButtonWithHoverMessage({
  children,
  className,
  description,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={classNames(className, "flex items-center gap-2")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={classNames("bg-slate-200 text-xs px-3 py-1", {
          hidden: !isHovered,
        })}
      >
        {description}
      </div>
      <button className="rounded-full bg-turquoise text-white flex items-center p-3">
        {children}
      </button>
    </div>
  );
}
