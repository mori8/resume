import * as React from "react";
import Image from "next/image";
import classNames from "classnames";

export interface IDecoreatedListProps {
  children: React.ReactNode;
  className?: string;
}

export default function DecoreatedList(props: IDecoreatedListProps) {
  const { children, className } = props;
  return (
    <div
      className={classNames(
        "flex flex-row items-center relative leading-none",
        className
      )}
    >
      <div className="-mt-6 mr-2">
        <Image
          src="/images/small-decoration.svg"
          alt="decorated list"
          width={8}
          height={8}
        />
      </div>
      {children}
    </div>
  );
}
