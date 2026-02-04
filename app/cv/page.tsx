'use client';

import { useLanguage } from '../providers';

const PDF_PATH = '/resume-sooyohn-nam-202601.pdf';

export default function CVPage() {
  const { language } = useLanguage();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PDF_PATH;
    link.download = 'resume-sooyohn-nam.pdf';
    link.click();
  };

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col px-8 lg:px-16 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-sm font-bold uppercase tracking-wider text-black">
          Curriculum Vitae
        </h1>
        <button
          onClick={handleDownload}
          className="text-sm text-gray-500 hover:text-black border border-gray-300 hover:border-black px-4 py-2 transition-colors"
        >
          {language === 'ko' ? '다운로드' : 'Download PDF'}
        </button>
      </div>

      <div className="flex-1 w-full bg-gray-100">
        <iframe
          src={`${PDF_PATH}#toolbar=0&navpanes=0`}
          className="w-full h-full"
          title="CV PDF Viewer"
        />
      </div>
    </div>
  );
}
