import * as React from "react";
import Image from "next/image";
import ResumeHeader from "../organisms/ResumeHeader";
import ResumeFooter from "../organisms/ResumeFooter";
import Educations from "../organisms/Educations";
import Experiences from "../organisms/Experiences";
import Projects from "../organisms/Projects";
import HonorAndAwards from "../organisms/HonorAndAwards";
import RoundedButtonWithHoverMessage from "../atoms/RoundedButtonWithHoverMessage";

export interface IResumeTemplateProps {}

export default function ResumeTemplate(props: IResumeTemplateProps) {
  return (
    <div className="w-1/2 max-w-[72rem] min-w-[66rem] mx-auto h-full px-8 pt-20 relative">
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
        <Projects />
        <Experiences />
        <Educations />
        <HonorAndAwards />
      </main>
      <>
        <ResumeFooter />
      </>
    </div>
  );
}
