import { ServicePageData } from "./types";
import { getExperienceText } from "@/lib/utils/experience";

export const hireBackendDeveloper: ServicePageData = {
  id: "hire-backend-developer",
  slug: "hire-backend-developer",
  title: "Hire Backend Developer | Custom System Architect & API Engineer",
  heading: "Hire Dedicated Backend Developer for Secure, Scalable Architectures",
  subheading: "Design and implement high-performance backend systems, custom APIs, and transaction-heavy pipelines that scale with ease.",
  metaDescription: "Looking to hire a backend developer? Partner with a professional backend engineer specializing in robust database designs, custom REST APIs, fintech systems, and automated server workflows.",
  keywords: ["hire backend developer", "remote laravel engineer", "fintech software engineer", "backend software engineer"],
  intro: [
    "A software application is only as strong as its backend. While user interfaces capture user attention, the backend is responsible for data integrity, transaction security, processing speeds, and structural scalability. If your backend suffers from database lockups, slow response times, API integration bugs, or security loopholes, it directly impacts your customer retention and bottom line. Architecting resilient backend systems requires specialized knowledge of server-side languages, database engineering, system memory limits, and caching logic.",
    `I am Maksudur Rahman, a remote Backend Developer and Software Engineer. Over the last ${getExperienceText()}, I have built core engine services for financial platforms, human resource modules, procurement tracking, and multi-tenant web applications. I focus on building backend architectures that are clean, modular, and optimized for speed. I work across PHP, Javascript/Node.js, and Python, leveraging the strengths of each platform to create robust systems that handle concurrent database writes, enforce transactional isolation, and sync complex datasets.`,
    "My backend development services cover the entire lifecycle of system architecture. Whether you need a relational database model designed to avoid duplication, a custom API gateway built for a mobile app client, or background worker queues to process transaction-heavy dispatches, I engineer secure, optimized, and test-driven backends that align with your business goals."
  ],
  offers: [
    {
      title: "Backend Architecture & System Design",
      desc: "Designing the blueprint for scalable backend systems. I plan component interactions, schema rules, data flow diagrams, caching strategies, and server setups to ensure maximum uptime and performance."
    },
    {
      title: "Custom RESTful & GraphQL API Engineering",
      desc: "Developing secure, standardized API endpoints for web, mobile, and third-party integrations. I implement robust request validators, serialization layers, rate-limiting, and auto-generated OpenAPI documentation."
    },
    {
      title: "Database Engineering & Index Tuning",
      desc: "Structuring relational schemas (PostgreSQL, MySQL) and NoSQL stores (MongoDB). I specialize in query planning, indexing strategies, resolving lock contention, and managing transactional boundaries."
    },
    {
      title: "Background Job & Worker Pipelines",
      desc: "Implementing background queue systems to handle resource-heavy operations asynchronously. I set up Redis-backed worker queues for operations like bulk report generation, external data synchronization, and invoice mailing."
    },
    {
      title: "FinTech & Secure Transaction Systems",
      desc: "Building highly secure ledger and payment modules. I implement double-entry bookkeeping schemas, database transaction locks, encryption for sensitive data, and secure payment integrations."
    },
    {
      title: "Server Deployment & Dockerization",
      desc: "Containerizing backend environments to ensure consistency across local development, staging, and production servers. I configure Nginx, write Dockerfiles, and automate CI/CD release pipelines."
    }
  ],
  experienceHighlight: "My backend engineering background includes designing business-critical architectures for softrobotics Bangladesh Ltd and Smart Software Ltd. I specialize in backend logic where security, low-latency, and absolute data consistency are mandatory requirements.",
  caseStudies: [
    "Softrobotics Bangladesh: Built payment gateway adapters, bank integrations, and transactional mapping engines processing payments for the Turkish fintech ecosystem with high transaction reliability.",
    "Smart Software Ltd: Engineered attendance event listeners, automated payroll engines, requisition approvals, and warehouse stock movement pipelines across ERP platforms.",
    "Kodersolution Agency Portal: Created custom availability locking engines in MySQL to prevent duplicate client meeting reservations across varying timezones.",
    "Personal Financial Ledgers: Designed double-entry database schemas with atomic balance validations, ensuring mathematical ledger reconciliation."
  ],
  technologies: [
    {
      name: "Backend Languages",
      items: ["PHP (Laravel / Custom)", "JavaScript / Node.js", "Python (Django / Scripting)"]
    },
    {
      name: "Databases & Cache",
      items: ["MySQL Query Profiling", "PostgreSQL Schemas", "MongoDB Documents", "Redis In-Memory Store"]
    },
    {
      name: "DevOps & Cloud",
      items: ["Docker Containers", "AWS EC2 / S3 / CloudFront", "Digital Ocean Droplets", "Nginx Server", "CI/CD Actions"]
    },
    {
      name: "Quality & Security",
      items: ["PHPUnit", "SonarQube Quality Gates", "JWT / JWT Bearer Tokens", "Git Workflows"]
    }
  ],
  process: [
    {
      step: "01",
      title: "Discovery & Blueprinting",
      desc: "We define system requirements, throughput expectations, and entity relationships. I draft database schemas, system architecture diagrams, and API routing plans."
    },
    {
      step: "02",
      title: "Database Modeling & Setup",
      desc: "I set up the database structure, enforce relationship constraints, write migration files, and set up seeds. I apply appropriate normalization forms to ensure data consistency."
    },
    {
      step: "03",
      title: "Core Backend Development",
      desc: "I code the business logic, route handlers, controllers, and services. All logic is developed in structured modules using strict type declarations and clean coding patterns."
    },
    {
      step: "04",
      title: "Integration & Profiling",
      desc: "I integrate background workers, cache layers, and external APIs. I profile the system under simulated concurrent loads to identify and resolve query bottlenecks."
    },
    {
      step: "05",
      title: "Dockerization & Production Deploy",
      desc: "The backend is containerized in Docker, configured with secure environment vars, and deployed via Git-integrated pipelines to AWS or Digital Ocean servers."
    }
  ],
  faqs: [
    {
      question: "How do you handle database race conditions and double-booking bugs?",
      answer: "I resolve concurrency issues using database transactions paired with row-level locks (`SELECT FOR UPDATE`) or distributed locking patterns using Redis. This ensures only one process can write or modify a specific row at a time."
    },
    {
      question: "What languages do you use for backend development?",
      answer: "My primary backend language is PHP, backed by the Laravel framework. I also build backend scripts, integrations, and lightweight services using Javascript (Node.js) and Python, selecting the tool that best fits the project requirements."
    },
    {
      question: "Can you design a database from scratch for my application?",
      answer: "Yes. I specialize in custom database engineering. I analyze your user flows, define relational schemas, optimize indices for fast lookups, map out foreign key cascades, and ensure tables are structured for performance."
    },
    {
      question: "How do you secure API endpoints?",
      answer: "I implement token-based authentication (JWT, Sanctum, or OAuth2), enforce strict HTTPS, apply CORS filters, validate and sanitize all inputs, implement rate-limiting headers, and log API exceptions to prevent data exposure."
    },
    {
      question: "Are you comfortable collaborating with frontend teams?",
      answer: "Yes, I regularly collaborate with frontend developers (React, Vue, mobile apps). I provide clean, standardized JSON response structures, clear API documentation, mock endpoints for parallel development, and active support during integration."
    }
  ]
};
