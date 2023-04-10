import * as React from "react";
import ResumeHeader from "../organisms/ResumeHeader";
import ResumeFooter from "../organisms/ResumeFooter";
import Educations from "../organisms/Educations";
import Experiences from "../organisms/Experiences";
import Projects from "../organisms/Projects";

export interface IResumeTemplateProps {}

export default function ResumeTemplate(props: IResumeTemplateProps) {
  return (
    <div className="w-1/2 max-w-[72rem] min-w-[60rem] mx-auto h-full px-8 py-20">
      <>
        <ResumeHeader />
      </>
      <main className="flex flex-col gap-32 mt-24">
        <Experiences />
        <Projects />
        <Educations />
      </main>
      <>
        <ResumeFooter />
      </>
    </div>
  );
}
