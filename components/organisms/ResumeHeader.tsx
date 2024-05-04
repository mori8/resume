import * as React from "react";
import Image from "next/image";
import Contacts from "../atoms/Contacts";
import introduction from "../../data/introduction.json";

export interface IResumeHeaderProps {}

export default function ResumeHeader(props: IResumeHeaderProps) {
  return (
    <header className="grid grid-cols-[208px_1fr] gap-12">
      <div className="w-full">
        <Image
          src={introduction.profileImage}
          alt="profile"
          width={208}
          height={208}
        />
      </div>
      <div className="text-5xl flex flex-row justify-between leading-tight">
        <div className="flex-shrink-0 font-bold">
          <h1 className="mb-4">{introduction.name}<br/>{introduction.englishName}</h1>
        </div>
        <div className="text-right">{introduction.interests}</div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          {introduction.contacts.map((contact, index) => (
            <Contacts
              key={index}
              contactType={contact.type}
              contactValue={contact.content}
              link={contact.link}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="whitespace-pre-wrap leading-relaxed">
          {introduction.introduction}
        </p>
      </div>
    </header>
  );
}
