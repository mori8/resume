import * as React from "react";
import Image from "next/image";
import ResumeHeader from "../organisms/ResumeHeader";
import ResumeFooter from "../organisms/ResumeFooter";
import Educations from "../organisms/Educations";
import Experiences from "../organisms/Experiences";
import Projects from "../organisms/Projects";
import Communities from "../organisms/Communities";
import RoundedButtonWithHoverMessage from "../atoms/RoundedButtonWithHoverMessage";

export interface IResumeTemplateProps {}

export default function ResumeTemplate(props: IResumeTemplateProps) {
  return (
    <div className="w-1/2 max-w-[72rem] min-w-[60rem] mx-auto h-full px-8 pt-20 pb-64 relative">
      <a href="/Suyeon-Nam-Resume.pdf" download>
        <RoundedButtonWithHoverMessage
          description="PDF로 다운로드"
          className="top-4 right-8 fixed"
        >
          <Image
            src="/images/download.svg"
            alt="download"
            width={24}
            height={24}
          />
        </RoundedButtonWithHoverMessage>
      </a>
      <>
        <ResumeHeader />
      </>
      <main className="flex flex-col gap-32 mt-24">
        {/* TODO: 여기서 props로 json 전달 */}
        <Experiences />
        <Projects />
        <Communities />
        <Educations />
      </main>
      <>
        <ResumeFooter />
      </>
    </div>
  );
}
