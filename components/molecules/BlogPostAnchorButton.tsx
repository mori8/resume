import React from "react";
import RoundedRectImageView from "../atoms/RoundedRectImageView";

type Props = {
  title: string;
  mainText: string;
  imageURL?: string;
  href: string;
};

function BlogPostAnchorButton({ title, mainText, imageURL, href }: Props) {
  return (
    <a href={href} target="_blank">
      <div className="w-full bg-haze flex flex-row gap-6 rounded-2xl p-6 items-center">
      <RoundedRectImageView imageURL={imageURL} />
      <div>
        <h5 className="font-bold mb-2">{title}</h5>
        <p className="text-neutral-500 whitespace-pre-wrap truncate line-clamp-3 w-full">{mainText}</p>
      </div>
    </div>
    </a>
  );
}

export default BlogPostAnchorButton;
