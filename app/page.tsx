'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './providers';
import profileData from '@/data/profile.json';
import projectsData from '@/data/projects-summary.json';
import type { Profile, ProjectSummary } from '@/types';

const profile = profileData as Profile;
const projects = projectsData as ProjectSummary[];

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col lg:flex-row px-8 lg:px-16 py-8 lg:py-12 gap-8 lg:gap-16 overflow-auto lg:overflow-hidden">
      {/* Left Column - Intro Section */}
      <section className="flex-shrink-0 lg:w-[45%] flex flex-col justify-center">
        {/* Profile Image */}
        <div className="w-40 h-52 lg:w-48 lg:h-64 relative mb-8 grayscale">
          <Image
            src={profile.image}
            alt={profile.name.en}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Name Section */}
        <div className="flex flex-wrap items-baseline gap-x-8 mb-2">
          <h1 className="text-4xl lg:text-5xl font-bold">{profile.name.ko}</h1>
          <span className="text-3xl lg:text-4xl font-semibold">{profile.name.en}</span>
        </div>

        {/* Title & Contact */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-1 text-sm lg:text-base text-gray-700 mb-8">
          <span className="font-medium">{profile.title[language]}</span>
          {profile.contact.slice(0, 2).map((contact) => (
            <a
              key={contact.type}
              href={contact.url}
              className="hover:text-gray-900 transition-colors"
              target={contact.type !== 'email' ? '_blank' : undefined}
              rel={contact.type !== 'email' ? 'noopener noreferrer' : undefined}
            >
              {contact.label}
            </a>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm lg:text-base text-gray-800 leading-relaxed mb-8 max-w-xl">
          {profile.description[language]}
        </p>

        {/* Skills */}
        <div className="space-y-2 text-sm lg:text-base">
          <div className="flex gap-8">
            <span className="font-semibold w-40 flex-shrink-0">Programming</span>
            <span className="text-gray-700">{profile.skills.programming.join(', ')}</span>
          </div>
          <div className="flex gap-8">
            <span className="font-semibold w-40 flex-shrink-0">Qualitative research</span>
            <span className="text-gray-700">{profile.skills.qualitativeResearch.join(', ')}</span>
          </div>
          <div className="flex gap-8">
            <span className="font-semibold w-40 flex-shrink-0">Design</span>
            <span className="text-gray-700">{profile.skills.design.join(', ')}</span>
          </div>
        </div>
      </section>

      {/* Right Column - Projects Grid */}
      <section className="lg:w-[55%] flex flex-col min-h-0">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 flex-shrink-0">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-3 gap-3 flex-1 min-h-0">
          {projects
            .sort((a, b) => a.order - b.order)
            .map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group relative bg-gray-200 overflow-hidden"
              >
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-3">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-white font-semibold">{project.title}</h3>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-white/80 bg-white/20 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
