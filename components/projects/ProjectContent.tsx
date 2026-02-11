'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Project } from '@/types';
import VideoPlayer from './VideoPlayer';
import ImageGrid from './ImageGrid';
import { useLanguage } from '@/app/providers';

interface Props {
  project: Project;
}

export default function ProjectContent({ project }: Props) {
  const { language } = useLanguage();
  const summary = project.summary[language];
  const role = project.role[language];
  const details = project.details[language];

  const externalLinks = [
    project.links?.github && { label: 'GitHub', url: project.links.github },
    project.links?.demo && { label: 'Demo', url: project.links.demo },
    project.links?.paper && { label: 'Paper', url: project.links.paper },
    project.links?.youtube && { label: 'YouTube', url: project.links.youtube },
  ].filter(Boolean) as { label: string; url: string }[];

  return (
    <motion.section
      className="max-w-4xl mx-auto px-8 pb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <figure className="mb-12">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </figure>

      <div className="mb-12">
        <p className="text-xl text-gray-700 leading-relaxed mb-6">{summary}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {externalLinks.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors border border-gray-300 hover:border-gray-500 px-4 py-2 rounded-full"
              >
                {link.label}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ))}
          </div>
        )}
      </div>

      {project.videoUrl && (
        <div className="mb-12">
          <h2 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-500">
            Demo Video
          </h2>
          <VideoPlayer url={project.videoUrl} title={project.title} />
        </div>
      )}

      <div className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-500">
          My Role
        </h2>
        <p className="text-gray-700 leading-relaxed">{role}</p>
      </div>

      <div className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-500">
          Details
        </h2>
        <div className="prose prose-gray max-w-none">
          {details.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h3 key={index} className="text-lg font-semibold mt-6 mb-3">
                  {paragraph.replace('## ', '')}
                </h3>
              );
            }
            return (
              <p key={index} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>

      {project.images.length > 1 && (
        <div className="mb-12">
          <h2 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-500">
            Gallery
          </h2>
          <ImageGrid images={project.images} alt={project.title} />
        </div>
      )}
    </motion.section>
  );
}
