import React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  contactType: string;
  contactValue: string;
  link: string;
};

export default function Contacts({
  contactType,
  contactValue,
  className,
  link,
}: Props) {
  return (
    <div
      className={classNames("flex flex-row justify-between text-sm", className)}
    >
      <div className="font-medium">{contactType}</div>
      <div className="font-light">
        <a href={link} target="_blank" className="hover:underline">
          {contactValue}
        </a>
      </div>
    </div>
  );
}
