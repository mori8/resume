'use client';

import { motion } from 'framer-motion';
import type { Project } from '@/types';

interface Props {
  project: Project;
}

export default function ProjectHero({ project }: Props) {
  return (
    <section className="max-w-4xl mx-auto px-8 pt-24 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.h1
          className="text-4xl lg:text-5xl font-bold text-black mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {project.title}
        </motion.h1>

        <motion.p
          className="text-gray-500 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {project.period}
          {project.team && ` · ${project.team}`}
        </motion.p>
      </motion.div>
    </section>
  );
}
