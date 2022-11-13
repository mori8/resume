import React from "react";
import Image from "next/image";
import classNames from "classnames";

type Props = {
  imageURL: string;
  type: string;
  size: string;
};

function RoundedRectImageView({
  imageURL,
  type,
  size = 'sm'
}: Props) {
  return (
    <div className={classNames("rounded-md bg-gray-200 relative overflow-hidden", {
      "w-[128px] h-[76px]": size === 'sm',
      "w-[228px] h-[120px]": size === 'lg',
    })}>
      {type === "youtube" && (
        <div className="w-6 h-6 absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/youtube-play-button.svg"
            alt="youtube play button"
            width={24}
            height={24}
          />
        </div>
      )}
      <Image
        src={imageURL}
        alt="references thumbnail"
        layout="fill"
      />
    </div>
  );
}

export default RoundedRectImageView;
