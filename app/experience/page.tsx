'use client';

import { useLanguage } from '../providers';
import experiencesData from '@/data/experiences.json';
import type { Experience } from '@/types';

const experiences = experiencesData as Experience[];

export default function ExperiencePage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-[calc(100vh-64px)] px-8 lg:px-16 py-12 lg:py-16">
      <h1 className="text-sm font-bold uppercase tracking-wider mb-12 text-black">
        {language === 'ko' ? '근무 경력' : 'Experience'}
      </h1>

      <div className="space-y-12 max-w-4xl">
        {experiences.map((exp, index) => (
          <article key={index}>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-6">
              <span className="text-sm text-gray-500 font-mono">{exp.period}</span>
              <div>
                <h2 className="text-xl font-bold text-black">
                  {exp.company}
                  {language === 'ko' && exp.companyKo && (
                    <span className="text-gray-500 font-normal ml-1">({exp.companyKo})</span>
                  )}
                </h2>
                <p className="text-sm text-gray-600">{exp.position}</p>
              </div>
            </div>

            <div className="space-y-8 pl-0 sm:pl-[140px]">
              {exp.projects.map((project, pIndex) => (
                <div key={pIndex} className="space-y-3">
                  <h3 className="font-semibold text-black">
                    {project.title[language]}
                  </h3>

                  <div className="space-y-2 text-sm">
                    <div className="flex gap-3">
                      <span className="text-gray-400 font-medium w-12 flex-shrink-0">
                        {language === 'ko' ? '문제' : 'Problem'}
                      </span>
                      <span className="text-gray-700">{project.problem[language]}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-gray-400 font-medium w-12 flex-shrink-0">
                        {language === 'ko' ? '해결' : 'Solution'}
                      </span>
                      <span className="text-gray-700">{project.solution[language]}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-gray-400 font-medium w-12 flex-shrink-0">
                        {language === 'ko' ? '성과' : 'Outcome'}
                      </span>
                      <span className="text-gray-700">{project.outcome[language]}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
