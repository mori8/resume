import * as React from "react";
import ProfileWithBlobs from "../molecules/ProfileWithBlobs";
import DecoreatedText from "../atoms/DecoratedText";
import Title from "../molecules/Title";
import {
  EnvelopeIcon,
  CodeBracketSquareIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/outline";

export interface IResumeHeaderProps {}

export default function ResumeHeader(props: IResumeHeaderProps) {
  return (
    <header className="flex flex-row justify-between items-center mb-8">
      <div className="flex-1">
        <Title />
        <h3 className="font-bold text-lg mt-4 mb-6">
          Software Engineer 남수연입니다.
        </h3>
        <ul className="">
          <DecoreatedText className="my-[10px] text-gray-700 text-sm">
            <EnvelopeIcon className="h-4 w-4 mr-1 text-gray-500" />
            <a href="mailto:kaithape@gmail.com" target="_blank">
              kaithape@gmail.com
            </a>
          </DecoreatedText>
          <DecoreatedText className="my-[10px] text-gray-700 text-sm">
            <CodeBracketSquareIcon className="h-4 w-4 mr-1 text-gray-500" />
            <a href="https://github.com/mori8" target="_blank">
              github.com/mori8
            </a>
          </DecoreatedText>
          <DecoreatedText className="my-[10px] text-gray-700 text-sm">
            <GlobeAsiaAustraliaIcon className="h-4 w-4 mr-1 text-gray-500" />
            <a href="https://cocosy.tistory.com" target="_blank">cocosy.tistory.com</a>
          </DecoreatedText>
        </ul>
      </div>
      <ProfileWithBlobs />
    </header>
  );
}
