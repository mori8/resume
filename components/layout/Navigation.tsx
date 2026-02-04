'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/app/providers';
import { getLocale } from '@/lib/locale';

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
  const t = getLocale(language);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ko' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Menu Items */}
          <div className="flex items-center gap-8">
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

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            aria-label="Toggle language"
          >
            {language === 'en' ? 'KR' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
}
