import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";
import { servicesList } from "@/lib/data/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://maksudur.dev";

  // Static routes
  const staticRoutes = [
    "",
    "/profile",
    "/experience",
    "/projects",
    "/services",
    "/contact",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic projects routes
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamic services routes
  const serviceRoutes = servicesList.map((service) => ({
    url: `${baseUrl}/services/${service.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...serviceRoutes];
}
