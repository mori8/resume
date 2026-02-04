import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { LanguageProvider } from './providers';
import './globals.css';

const suit = localFont({
  src: [
    {
      path: '../styles/SUIT/SUIT-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../styles/SUIT/SUIT-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../styles/SUIT/SUIT-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../styles/SUIT/SUIT-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../styles/SUIT/SUIT-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../styles/SUIT/SUIT-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../styles/SUIT/SUIT-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../styles/SUIT/SUIT-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../styles/SUIT/SUIT-Heavy.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-suit',
});

export const metadata: Metadata = {
  title: 'Suyeon Nam - HCI Researcher & Developer',
  description: 'Portfolio of Suyeon Nam, HCI Researcher and Developer',
  authors: [{ name: 'Suyeon Nam' }],
  keywords: ['HCI', 'Research', 'Developer', 'Portfolio', 'UX'],
  openGraph: {
    title: 'Suyeon Nam - HCI Researcher & Developer',
    description: 'Portfolio of Suyeon Nam, HCI Researcher and Developer',
    url: 'https://namsuyeon.me',
    siteName: 'Suyeon Nam Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${suit.variable} noise font-suit antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
