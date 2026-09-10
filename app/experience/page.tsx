import type { Metadata } from "next";
import Experience from "@/components/sections/Experience";

import JsonLd from "@/components/JsonLd";
import { getExperiencePageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional journey and work experience of Maksudur Rahman in software engineering and fintech.",
  alternates: {
    canonical: "/experience/",
  },
  other: {
    title: "Experience | Maksudur.dev",
  },
};

export default function ExperiencePage() {
  return (
    <div className="max-w-5xl mx-auto pb-12">
      <JsonLd data={getExperiencePageSchema()} />
      <Experience isPageHeading={true} isStandalone={true} />
    </div>
  );
}
