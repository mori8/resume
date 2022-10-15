import * as React from "react";
import Image from "next/image";

export interface IProfileWithBlobsProps {}

export default function ProfileWithBlobs(props: IProfileWithBlobsProps) {
  return (
    <div className="relative">
      <Image
        src="/images/profile-blob.png"
        alt="Profile"
        width={340}
        height={360}
      />
      <div className="absolute right-4 bottom-12">
        <Image
          src="/images/RedBlob.svg"
          alt="red blob decoration"
          width={80}
          height={80}
        />
      </div>
      <div className="absolute left-4 top-20">
        <Image
          src="/images/GlassyHeart.svg"
          alt="glassy blue heart decoration"
          width={80}
          height={80}
        />
      </div>
    </div>
  );
}
