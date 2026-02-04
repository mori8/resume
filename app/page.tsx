import IntroSection from '@/components/home/IntroSection';
import ProjectGrid from '@/components/home/ProjectGrid';

export default function Home() {
  return (
    <div className="h-[calc(100vh-64px)] flex flex-col lg:flex-row px-8 lg:px-16 py-8 lg:py-12 gap-8 lg:gap-16 overflow-auto lg:overflow-hidden justify-between">
      <IntroSection />
      <ProjectGrid />
    </div>
  );
}
