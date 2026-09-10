import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { projects } from "@/lib/data/projects";
import { getProjectsCollectionSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Projects",
  description: "Showcase of enterprise-grade systems and software projects engineered by Maksudur Rahman.",
  alternates: {
    canonical: "/projects/",
  },
  other: {
    title: "Projects | Maksudur.dev",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={getProjectsCollectionSchema(projects)} />
      {children}
    </>
  );
}
