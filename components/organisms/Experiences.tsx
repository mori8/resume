import { useState } from "react";
import HighlightedText from "../atoms/HighlightedText";
import ProjectDescBox from "../molecules/ProjectDescBox";
import ExprienceDescBox from "../molecules/ExperienceDescBox";
import BlogPostAnchorButton from "../molecules/BlogPostAnchorButton";

export interface IExperiencesProps {}

export default function Experiences(props: IExperiencesProps) {
  const [startDate, setStartDate] = useState("2022.02");
  const [endDate, setEndDate] = useState("");

  return (
    <section>
      <HighlightedText backgroundSize="sm" className="text-xl tracking-wider">
        Experiences
      </HighlightedText>
      <div className="flex flex-row mt-12 justify-between gap-10">
        <div className="mr-4 text-desire font-bold leading-relaxed">
          {startDate} -<br />
          {endDate}
        </div>
        <div className="pl-10 border-l-2 border-l-gray-200 flex-1">
          <div className="mb-20">
            <ExprienceDescBox
              title="GOODLIFELAB"
              subtitle="Software Engineer | Front-end Development"
              description="서울대학교 최인철 교수님이 창업하신 멘탈 헬스 스타트업으로, 이런이런 사업을 하고 있습니다."
              logoURL="/images/gll-logo.png"
              link="https://goodlifelab.co.kr/"
            />
            <div>
              <ProjectDescBox
                key="project_gll_admin"
                title="굿라이프 테스트 관리자 페이지"
                subtitle="Front-end 개발"
                description={
                  "자사 서비스인 ‘굿라이프 테스트’의 결과 보고서 제작을 자동화하고 진행상황을 모니터링하기 위한 웹사이트를 제작했습니다.\n보고서 디자인을 모두 컴포넌트화하여 백엔드에서 오는 사용자 정보를 받아 컴포넌트에 렌더링하고, PDF로 export합니다."
                }
                period="2022.06 - 2022.09"
                techStack={["React", "tailwind", "Typescript"]}
              />
              <ProjectDescBox
                key="project_badatest"
                title="바라던 바다 테스트"
                subtitle="Front-end/Back-end 개발, UI 디자인 및 질문지 일러스트 작업"
                description={
                  "Big 5 성격검사를 기반으로 한, 총 검사자 수 약 5만 명의 심리테스트입니다.\n사용자의 몰입을 위해 스토리라인에 따라 질문의 배경과 선택할 수 있는 응답지의 형태에 변주를 주었습니다.\n상태관리를 위해 Context API를 사용했으며, 몰입에 방해가 되지 않게 이미지는 모두 pre-loading해 화면이 깜빡이지 않도록 했습니다.\n시니어 개발자분들의 도움을 받아 AWS ELB와 S3를 통해 서비스를 배포했습니다."
                }
                period="2022.04 - 2022.06"
                techStack={["React", "fastAPI", "Typescript", "AWS"]}
              />
            </div>
          </div>
          <div>
            <ExprienceDescBox
              title="Google Developer Student Clubs"
              description={
                "Google Developer Community Program의 일환으로,\n각 학교의 Lead는 구글 기술에 관심 있는 대학생 개발자를 위한 대학교 기반 커뮤니티를 기획하고 운영합니다.\n한국에서는 2021-22 시즌에 21개 대학교, 전세계에서는 1800개 이상의 대학교에서 GDSC 활동이 있었습니다."
              }
              logoURL="/images/gdsc-logo.png"
              logoWidth={104}
              logoHeight={52}
              link="https://sites.google.com/view/dsc-sookmyung"
            />
            <div>
              <ProjectDescBox
                title="GDSC Sookmyung Lead"
                description={
                  "21-22 GDSC Korea 활동 우수 리드\nGitHub Hands-on Workshop, 눈송이 익명 고민방, DevTalk 등의 커뮤니티 행사 기획 및 주최\nGDG Campus Korea X GDSC Korea - Devfest University 2021 운영진\n2022 GDSC KR Winter Hack: Play Your Stay 운영진"
                }
                period="2021.09 - 2022.08"
              />
              <ProjectDescBox
                title="GDSC Sookmyung Core Member"
                description={
                  "1분기(2020.09 - 2020.12) 알고리즘 스터디 리드\n3분기(2021.05 - 2021.08) PyTorch 및 ML 논문 리뷰 스터디 참여\n'C++로 알고리즘 시작하기'를 주제로 온라인 Speaker Session 진행\n20-21 DSC Korea Winter Hackathon 참여(Gitribute 팀 - 눈송이 유형 테스트)"
                }
                period="2020.9 - 2021.08"
              />
            </div>
            <BlogPostAnchorButton
              title="C++로 알고리즘 시작하기 | DSC Sookmyung Speaker Session"
              mainText={"2020-2021 DSC Sookmyung Core Member 남수연님이 진행하신 세션입니다.\n2021.03.12(금)"}
              imageURL="/images/c++-session.webp"
              href="https://youtu.be/wf8OsBXTX4c"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
