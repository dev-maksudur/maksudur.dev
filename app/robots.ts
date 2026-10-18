import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://maksudur.dev";

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/_next/static/",
          "/_next/image*",
          "/images/",
          "/files/",
          "/favicon.ico",
          "/favicon.svg",
          "/llms.txt",
          "/llms-full.txt",
        ],
        disallow: [
          // Tracking query parameters and analytics noise (crawl waste minimization)
          "/*?*utm_*",
          "/*?*fbclid*",
          "/*?*gclid*",
          "/*?*ref=*",
          "/*?*source=*",
          "/*?*mc_cid*",
          "/*?*mc_eid*",
          // Preview and draft parameter variations
          "/*preview*",
          "/*?*preview*",
          "/*?*draft*",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
