import type { Metadata } from "next";
import Intro from "@/components/sections/Intro";

import JsonLd from "@/components/JsonLd";
import { getProfilePageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Profile",
  description: "Learn more about Maksudur Rahman, a Software Engineer specializing in scalable enterprise systems and fintech solutions.",
  alternates: {
    canonical: "/profile/",
  },
  other: {
    title: "Profile | Maksudur.dev",
  },
};

export default function ProfilePage() {
  return (
    <div className="max-w-5xl mx-auto pb-12">
      <JsonLd data={getProfilePageSchema()} />
      <Intro isPageHeading={true} isStandalone={true} />
    </div>
  );
}
