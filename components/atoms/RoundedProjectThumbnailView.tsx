import React from "react";
import Image from "next/image";

type Props = {
  imageURL?: string;
};

function RoundedProjectThumbnailView({ imageURL }: Props) {
  return (
    <div className="rounded-lg w-[200px] h-[100px] bg-gray-200 relative">
      {imageURL && (
        <Image
          src={imageURL}
          alt="blog post thumbnail"
          layout="fill"
        />
      )}
    </div>
  );
}

export default RoundedProjectThumbnailView;
