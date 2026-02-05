'use client';

import Image from 'next/image';
import { useLanguage } from '@/app/providers';
import profileData from '@/data/profile.json';
import type { Profile } from '@/types';

const profile = profileData as Profile;

export default function IntroSection() {
  const { language } = useLanguage();

  return (
    <section className="flex-shrink-0 lg:w-[45%] flex flex-col justify-center">
      {/* Profile Image */}
      <div className="w-40 h-48 relative mb-8 grayscale flex-shrink-0 overflow-hidden">
        <Image
          src={profile.image}
          alt={profile.name.en}
          fill
          className="object-cover scale-125"
          priority
        />
      </div>

      <div className="flex flex-col gap-1 mb-8">
        <div className="flex items-baseline gap-4">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight">{profile.name.ko}</h1>
          <span className="text-xl lg:text-3xl font-light tracking-wide text-gray-500">{profile.name.en}</span>
        </div>
      </div>

      {/* Title & Contact */}
      <div className="flex flex-col gap-4 mb-12">
        <p className="text-lg font-medium tracking-wide text-black">{profile.title[language]}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 uppercase tracking-wider">
          {profile.contact.slice(0, 2).map((contact) => (
            <a
              key={contact.type}
              href={contact.url}
              className="hover:text-black transition-colors border-b border-transparent hover:border-black pb-0.5"
              target={contact.type !== 'email' ? '_blank' : undefined}
              rel={contact.type !== 'email' ? 'noopener noreferrer' : undefined}
            >
              {contact.label}
            </a>
          ))}
          {profile.birthDate && (
            <span className="text-gray-400">{profile.birthDate}</span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm lg:text-base text-gray-800 leading-relaxed mb-8 max-w-xl">
        {profile.description[language]}
      </p>

      {/* Skills */}
      <div className="space-y-4 text-sm mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-4 items-baseline">
          <span className="font-bold uppercase tracking-wider text-xs text-gray-400">Programming</span>
          <span className="text-gray-800 font-light leading-relaxed">{profile.skills.programming.join(', ')}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-4 items-baseline">
          <span className="font-bold uppercase tracking-wider text-xs text-gray-400">Qualitative R.</span>
          <span className="text-gray-800 font-light leading-relaxed">{profile.skills.qualitativeResearch.join(', ')}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-4 items-baseline">
          <span className="font-bold uppercase tracking-wider text-xs text-gray-400">Design Tool</span>
          <span className="text-gray-800 font-light leading-relaxed">{profile.skills.design.join(', ')}</span>
        </div>
      </div>
    </section>
  );
}
