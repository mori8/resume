import { notFound } from 'next/navigation';
import projectsData from '@/data/projects-detail.json';
import { Project } from '@/types';
import ProjectHero from '@/components/projects/ProjectHero';
import ProjectContent from '@/components/projects/ProjectContent';
import ProjectNavigation from '@/components/projects/ProjectNavigation';

const projects = projectsData as Project[];

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen">
      <ProjectHero project={project} />
      <ProjectContent project={project} />
      <ProjectNavigation prev={prevProject} next={nextProject} />
    </div>
  );
}
