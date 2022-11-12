import React from "react";
import RoundedRectImageView from "../atoms/RoundedRectImageView";
import ClassNames from "classnames";

type Props = {
  title: string;
  mainText: string;
  imageURL?: string;
  href: string;
  type?: string;
};

function BlogPostAnchorButton({
  title,
  mainText,
  imageURL,
  href,
  type = "blog",
}: Props) {
  return (
    <a href={href} target="_blank">
      <div
        className={ClassNames(
          "w-full flex flex-row gap-4 rounded-xl p-4 items-center shadow-lg shadow-gray-200 mb-4",
          {
            "bg-haze": type === "blog",
            "bg-rose-50": type === "youtube",
          }
        )}
      >
        <RoundedRectImageView imageURL={imageURL} />
        <div className="flex-1">
          <h5 className="font-bold mb-2 text-sm">{title}</h5>
          <p className="text-neutral-500 whitespace-pre-wrap truncate line-clamp-2 w-full text-xs">
            {mainText}
          </p>
        </div>
      </div>
    </a>
  );
}

export default BlogPostAnchorButton;
