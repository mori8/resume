'use client';

import { useLanguage } from '../providers';
import publicationsData from '@/data/publications.json';
import type { Publication } from '@/types';

const publications = publicationsData as Publication[];

export default function PublicationsPage() {
  const { language } = useLanguage();

  const highlightAuthor = (authors: string[], name: string = 'Sooyohn Nam') => {
    return authors.map((author, index) => {
      const isTarget = author === name;
      return (
        <span key={index}>
          {isTarget ? <strong className="font-semibold">{author}</strong> : author}
          {index < authors.length - 1 && ', '}
        </span>
      );
    });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] px-8 lg:px-16 py-12 lg:py-16">
      <h1 className="text-sm font-bold uppercase tracking-wider mb-12 text-black">
        {language === 'ko' ? '논문 및 저서' : 'Publications'}
      </h1>

      <div className="space-y-10 max-w-4xl">
        {publications.map((pub) => (
          <article key={pub.id} className="group">
            <h2 className="text-lg font-semibold text-black leading-snug mb-2">
              {pub.title}
            </h2>

            <p className="text-sm text-gray-600 mb-1">
              {highlightAuthor(pub.authors)}
            </p>

            <p className="text-sm text-gray-500 italic mb-2">
              {pub.venue}
              {pub.venueShort && ` (${pub.venueShort})`}
            </p>

            <div className="flex flex-wrap gap-3 text-xs">
              {pub.links.doi && (
                <a
                  href={pub.links.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black border-b border-transparent hover:border-black transition-colors"
                >
                  DOI
                </a>
              )}
              {pub.links.openreview && (
                <a
                  href={pub.links.openreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black border-b border-transparent hover:border-black transition-colors"
                >
                  OpenReview
                </a>
              )}
              {pub.links.github && (
                <a
                  href={pub.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black border-b border-transparent hover:border-black transition-colors"
                >
                  GitHub
                </a>
              )}
              {pub.links.huggingface && (
                <a
                  href={pub.links.huggingface}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black border-b border-transparent hover:border-black transition-colors"
                >
                  HuggingFace
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
