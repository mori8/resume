'use client';

import { useLanguage } from '../providers';
import educationsData from '@/data/educations.json';
import awardsData from '@/data/awards.json';
import type { Education, Award } from '@/types';

const educations = educationsData as Education[];
const awards = awardsData as Award[];

export default function EducationPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-[calc(100vh-64px)] px-8 lg:px-16 py-12 lg:py-16">
      {/* Education Section */}
      <section className="mb-16">
        <h1 className="text-sm font-bold uppercase tracking-wider mb-8 text-black">
          {language === 'ko' ? '학력' : 'Education'}
        </h1>

        <div className="space-y-8 max-w-4xl">
          {educations.map((edu, index) => (
            <article key={index} className="flex flex-col sm:flex-row gap-2 sm:gap-8">
              <span className="text-sm text-gray-500 font-mono w-32 flex-shrink-0">
                {edu.period}
              </span>
              <div>
                <h2 className="font-bold text-black">{edu.school[language]}</h2>
                <p className="text-sm text-gray-600 mb-1">
                  {edu.degree[language]}
                  <span className="ml-2 text-gray-500">GPA: {edu.gpa}</span>
                  {edu.gpaDetail && (
                    <span className="ml-1 text-gray-400">({edu.gpaDetail[language]})</span>
                  )}
                </p>
                {edu.details && edu.details[language] && (
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    {(edu.details[language] as string[]).map((detail, dIndex) => (
                      <li key={dIndex}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section>
        <h2 className="text-sm font-bold uppercase tracking-wider mb-8 text-black">
          {language === 'ko' ? '수상 및 기타 실적' : 'Awards & Achievements'}
        </h2>

        <div className="space-y-3 max-w-4xl">
          {awards.map((award, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-1 sm:gap-8 text-sm">
              <span className="text-gray-500 font-mono w-16 flex-shrink-0">{award.year}</span>
              <span className="text-gray-800">
                {award.title[language]}
                {award.link && (
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-gray-400 hover:text-black border-b border-transparent hover:border-black transition-colors"
                  >
                    Link
                  </a>
                )}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
