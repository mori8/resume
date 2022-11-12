import React from "react";
import Image from "next/image";

type Props = {
  imageURL?: string;
  type: string;
};

function RoundedRectImageView({ imageURL, type }: Props) {
  return (
    <div className="rounded-md w-[128px] h-[72px] bg-gray-200 relative overflow-hidden">
      {type === "youtube" && (
        <div className="w-6 h-6 absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/youtube-play-button.svg"
            alt="youtube play button"
            layout="fill"
          />
        </div>
      )}
      {imageURL && (
        <Image src={imageURL} alt="references thumbnail" layout="fill" />
      )}
    </div>
  );
}

export default RoundedRectImageView;
