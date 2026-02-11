'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project } from '@/types';

interface Props {
  prev: Project | null;
  next: Project | null;
}

export default function ProjectNavigation({ prev, next }: Props) {
  return (
    <motion.nav
      className="border-t border-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.4 }}
    >
      <div className="max-w-4xl mx-auto px-8 py-8 flex justify-between items-center">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex items-center gap-3 text-gray-600 hover:text-black transition-colors"
          >
            <svg
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <div className="text-right">
              <span className="text-xs uppercase tracking-wider text-gray-400 block">
                Previous
              </span>
              <span className="font-medium">{prev.title}</span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        <Link
          href="/"
          className="text-gray-400 hover:text-black transition-colors"
          aria-label="Back to home"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
        </Link>

        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center gap-3 text-gray-600 hover:text-black transition-colors"
          >
            <div className="text-left">
              <span className="text-xs uppercase tracking-wider text-gray-400 block">
                Next
              </span>
              <span className="font-medium">{next.title}</span>
            </div>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </motion.nav>
  );
}
