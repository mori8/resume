'use client';

import Image from 'next/image';
import Link from 'next/link';
import projectsData from '@/data/projects-summary.json';
import type { ProjectSummary } from '@/types';

const projects = projectsData as ProjectSummary[];

export default function ProjectGrid() {
  return (
    <section className="lg:w-[55%] flex flex-col min-h-0 pl-12 pt-24 pb-8">
      <h2 className="text-sm font-bold uppercase tracking-wider mb-6 text-black">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-3 gap-3 flex-1 min-h-0">
        {projects
          .sort((a, b) => a.order - b.order)
          .map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative bg-gray-100 overflow-hidden"
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-90 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent">
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
  );
}
