export const SITE_URL = "https://maksudur.dev";

export const PERSON_SCHEMA = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Maksudur Rahman",
  alternateName: "Maksud",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/images/maksudur.png`,
  jobTitle: "Software Engineer",
  description:
    "Experienced Laravel Developer & PHP Software Engineer specializing in scalable web applications, payment gateways, REST APIs, fintech solutions, and React.",
  email: "maksudur.dev02@gmail.com",
  worksFor: {
    "@type": "Organization",
    name: "Softrobotics Bangladesh Ltd",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  sameAs: [
    "https://github.com/dev-maksudur",
    "https://linkedin.com/in/maksudur-dev",
    "https://wa.me/maksudur.dev",
  ],
  knowsAbout: [
    "PHP",
    "Laravel",
    "React",
    "Next.js",
    "TypeScript",
    "REST APIs",
    "Payment Gateway Integration",
    "Fintech Solutions",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "Redis",
    "Telegram Mini Apps",
    "Linux Server Setup",
    "aaPanel",
    "AWS EC2",
    "SSL Setup & Certbot",
    "DevOps",
  ],
};

export const WEBSITE_SCHEMA = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: "Maksudur Rahman",
  alternateName: [
    "Maksudur.dev",
    "Maksudur Rahman - Software Engineer",
    "Maksudur Rahman Portfolio",
  ],
  description:
    "Experienced Laravel Developer & PHP Software Engineer specializing in scalable web applications, payment gateways, REST APIs, fintech solutions, and React.",
  inLanguage: "en-US",
  publisher: {
    "@id": `${SITE_URL}/#person`,
  },
};

export function getRootSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      WEBSITE_SCHEMA,
      PERSON_SCHEMA,
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: "Laravel Developer & PHP Software Engineer | Maksudur.dev",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#person`,
        },
        mainEntity: {
          "@id": `${SITE_URL}/#person`,
        },
      },
    ],
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function getProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      PERSON_SCHEMA,
      {
        "@type": "AboutPage",
        "@id": `${SITE_URL}/profile/#about`,
        url: `${SITE_URL}/profile/`,
        name: "Profile | Maksudur.dev",
        description:
          "Learn more about Maksudur Rahman, a Software Engineer specializing in scalable enterprise systems and fintech solutions.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        mainEntity: {
          "@id": `${SITE_URL}/#person`,
        },
      },
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Profile", url: "/profile/" },
      ]),
    ],
  };
}

export function getExperiencePageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      PERSON_SCHEMA,
      {
        "@type": "ItemPage",
        "@id": `${SITE_URL}/experience/#experience`,
        url: `${SITE_URL}/experience/`,
        name: "Experience | Maksudur.dev",
        description:
          "Professional journey and work experience of Maksudur Rahman in software engineering and fintech.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        mainEntity: {
          "@id": `${SITE_URL}/#person`,
        },
      },
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Experience", url: "/experience/" },
      ]),
    ],
  };
}

export function getProjectsCollectionSchema(
  projects: { id: string; title: string; desc: string; category: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/projects/#collection`,
        url: `${SITE_URL}/projects/`,
        name: "Projects | Maksudur.dev",
        description:
          "Showcase of enterprise-grade systems and software projects engineered by Maksudur Rahman.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: projects.map((p, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: p.title,
            url: `${SITE_URL}/projects/${p.id}/`,
            description: p.desc,
          })),
        },
      },
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Projects", url: "/projects/" },
      ]),
    ],
  };
}

export function getProjectDetailSchema(project: {
  id: string;
  title: string;
  overview: string;
  tech: string[];
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/projects/${project.id}/#software`,
        name: project.title,
        description: project.overview,
        applicationCategory: project.category,
        operatingSystem: "Web",
        author: {
          "@id": `${SITE_URL}/#person`,
        },
        keywords: project.tech.join(", "),
      },
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Projects", url: "/projects/" },
        { name: project.title, url: `/projects/${project.id}/` },
      ]),
    ],
  };
}

export function getServicesCollectionSchema(
  services: { slug: string; heading: string; metaDescription: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/services/#collection`,
        url: `${SITE_URL}/services/`,
        name: "Services | Maksudur.dev",
        description:
          "Explore professional software engineering services, including custom Laravel web applications, payment integrations, REST APIs, Telegram Mini Apps, and React full-stack solutions.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: services.map((s, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: s.heading,
            url: `${SITE_URL}/services/${s.slug}/`,
            description: s.metaDescription,
          })),
        },
      },
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services/" },
      ]),
    ],
  };
}

export function getServiceDetailSchema(service: {
  slug: string;
  heading: string;
  metaDescription: string;
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}/services/${service.slug}/#service`,
        name: service.heading,
        serviceType: service.heading,
        description: service.metaDescription,
        provider: {
          "@id": `${SITE_URL}/#person`,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Worldwide",
        },
      },
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services/" },
        { name: service.heading, url: `/services/${service.slug}/` },
      ]),
    ],
  };
}

export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contact/#contact`,
        url: `${SITE_URL}/contact/`,
        name: "Contact Me | Maksudur.dev",
        description:
          "Get in touch for freelance, contract, or full-time remote engineering opportunities.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        mainEntity: {
          "@id": `${SITE_URL}/#person`,
        },
      },
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Contact", url: "/contact/" },
      ]),
    ],
  };
}

export function getTermsPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/terms/#terms`,
        url: `${SITE_URL}/terms/`,
        name: "Terms of Service | Maksudur.dev",
        description: "Terms of Service for Maksudur Rahman's portfolio website.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
      },
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Terms of Service", url: "/terms/" },
      ]),
    ],
  };
}
