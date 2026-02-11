'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/providers';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const menuItems = [
  { label: 'Projects', href: '/' },
  { label: 'Publications', href: '/publications' },
  { label: 'Experience', href: '/experience' },
  { label: 'Education', href: '/education' },
  { label: 'CV', href: '/cv' },
];

export default function Navigation() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="md:hidden" />

            {/* Desktop Menu Items */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-gray-900 ${
                      isActive ? 'text-gray-900' : 'text-gray-500'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              {/* Language Toggle */}
              <div className="relative flex items-center bg-gray-100 rounded-full p-0.5">
                <motion.div
                  className="absolute top-0.5 bottom-0.5 bg-white rounded-full shadow-sm"
                  initial={false}
                  animate={{
                    left: language === 'ko' ? '2px' : '50%',
                    width: 'calc(50% - 2px)',
                  }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
                <button
                  onClick={() => setLanguage('ko')}
                  className={`relative z-10 px-3 py-1 text-xs font-medium rounded-full transition-colors duration-200 ${
                    language === 'ko' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
                  }`}
                  aria-label="Korean"
                >
                  KR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`relative z-10 px-3 py-1 text-xs font-medium rounded-full transition-colors duration-200 ${
                    language === 'en' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
                  }`}
                  aria-label="English"
                >
                  EN
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-1 text-gray-500 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay — outside nav to avoid backdrop-blur stacking context */}
      {isMenuOpen && (
        <div className="fixed top-[56px] right-0 bottom-0 left-0 bg-white z-50 md:hidden flex flex-col border-t border-gray-100 p-6">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-2xl font-medium py-3 transition-colors ${
                  isActive ? 'text-gray-900' : 'text-gray-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
