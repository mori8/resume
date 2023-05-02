import * as React from "react";
import Image from "next/image";
import Contacts from "../atoms/Contacts";

export interface IResumeHeaderProps {}

export default function ResumeHeader(props: IResumeHeaderProps) {
  return (
    <header className="flex flex-row justify-between">
      <div className="flex-[3] relative">
        <Image
          src="/images/profile.webp"
          alt="profile"
          width={260}
          height={260}
        />
        <div className="absolute z-100 h-[22rem] w-[22rem] -top-44 -left-72">
          <Image
            src="/images/big-flower.svg"
            alt="profile"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex-[3] font-bold text-3xl -ml-44 z-10">
        심미적인 것을 추구하는
        <br />
        직감의 근거를 고민하는
        <br />
        한 번 빠지면 끝을 보는
        <br />
        <br />
        소프트웨어 엔지니어
        <br />
        남수연입니다.
      </div>
      <div className="flex-[2] flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <Contacts
            contactType="Email"
            contactValue="kaithape@gmail.com"
            link="mailto:kaithape@gmail.com"
          />
          <Contacts
            contactType="Github"
            contactValue="github.com/mori8"
            link="https://github.com/mori8"
          />
          <Contacts
            contactType="Dev Blog"
            contactValue="cocosy.tistory.com"
            link="https://cocosy.tistory.com"
          />
          <Contacts
            contactType="LinkedIn"
            contactValue="suyeon-nam"
            link="https://www.linkedin.com/in/suyeon-nam-2b65881aa/"
          />
        </div>
        <div className="flex flex-row justify-between">
          <Image
            src="/images/tech/react.svg"
            alt="react"
            width={24}
            height={24}
          />
          <Image
            src="/images/tech/typescript.svg"
            alt="typescript"
            width={24}
            height={24}
          />
          <Image
            src="/images/tech/nextjs.svg"
            alt="nextjs"
            width={24}
            height={24}
          />
          <Image
            src="/images/tech/fastapi.svg"
            alt="fastapi"
            width={24}
            height={24}
          />
          <Image
            src="/images/tech/tensorflow.svg"
            alt="tensorflow"
            width={24}
            height={24}
          />
          <Image
            src="/images/tech/aws.svg"
            alt="aws"
            width={24}
            height={24}
          />
          <Image
            src="/images/tech/c++.svg"
            alt="c++"
            width={24}
            height={24}
          />
        </div>
      </div>
    </header>
  );
}
