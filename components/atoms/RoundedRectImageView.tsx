import React from "react";
import Image from "next/image";

type Props = {
  imageURL?: string;
};

function RoundedRectImageView({ imageURL }: Props) {
  return (
    <div className="rounded-md w-[128px] h-[72px] bg-gray-200 relative overflow-hidden">
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

export default RoundedRectImageView;
