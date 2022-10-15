import * as React from "react";
import Image from "next/image";

export interface IExprienceDescBoxProps {
  title: string;
  subtitle?: string;
  description: string;
  logoURL: string;
  logoWidth?: number;
  logoHeight?: number;
  link: string;
}

export default function ExprienceDescBox(props: IExprienceDescBoxProps) {
  const { title, subtitle, description, logoURL, logoWidth = 64, logoHeight = 64, link } = props;
  return (
    <div className="flex flex-row justify-between relative timeline">
      <div>
        <h3 className="font-bold text-xl mb-2 tracking-wider leading-none">
          <a href={link}>{title}</a>
        </h3>
        {subtitle && <h5 className="font-bold text-gray-700">{subtitle}</h5>}
        <p className="text-sm mt-4 text-gray-600 whitespace-pre-wrap leading-6">{description}</p>
      </div>
      <div>
        <Image src={logoURL} alt="company logo" width={logoWidth} height={logoHeight} />
      </div>
    </div>
  );
}
