import React from "react";
import Image from "next/image";

type Props = {
  imageURL: string;
};

function RoundedRectImageView({ imageURL }: Props) {
  return (
    <div>
      <Image
        src={imageURL}
        alt="blog post thumbnail"
        width={200}
        height={100}
      />
    </div>
  );
}

export default RoundedRectImageView;
