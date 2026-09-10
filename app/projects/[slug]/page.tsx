import { notFound } from 'next/navigation';
import ProjectDetailContent from '@/components/ProjectDetailContent';
import { projects } from '@/lib/data/projects';

import JsonLd from '@/components/JsonLd';
import { getProjectDetailSchema } from '@/lib/seo/schema';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id, 
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find(p => p.id === slug);
  const title = project?.title ?? 'Project Not Found';

  return {
    title,
    description: project?.overview,
    alternates: {
      canonical: `/projects/${slug}/`,
    },
    other: {
      title: `${title} | Maksudur.dev`,
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find(p => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <JsonLd data={getProjectDetailSchema(project)} />
      <ProjectDetailContent project={project} />
    </>
  );
}