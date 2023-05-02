import React from "react";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

export default function CustomLi({ children }: Props) {
  return (
    <div className="flex flex-row gap-4">
      <div>
        <Image src="/images/drop-vector.svg" alt="li-disc" width={8} height={8} />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
