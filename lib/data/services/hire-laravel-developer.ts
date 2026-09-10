import { ServicePageData } from "./types";
import { getYearsOfExperience } from "@/lib/utils/experience";

export const hireLaravelDeveloper: ServicePageData = {
  id: "hire-laravel-developer",
  slug: "hire-laravel-developer",
  title: "Hire Laravel Developer | Dedicated PHP & Laravel Engineer",
  heading: "Hire Dedicated Laravel Developer for Scalable Web Applications",
  subheading: "Get custom backend architectures, high-performance database designs, and robust systems built by a seasoned remote Laravel engineer.",
  metaDescription: "Looking to hire a Laravel developer? Hire an experienced remote Laravel engineer specializing in custom enterprise applications, payment integrations, REST APIs, and performance optimization.",
  keywords: ["hire laravel developer", "laravel developer for hire", "laravel freelancer", "remote laravel developer", "hire php developer"],
  intro: [
    "In today's fast-paced digital economy, businesses need robust, secure, and highly scalable web applications that perform under pressure. Laravel has emerged as the premier PHP framework for building modern enterprise systems, offering elegant syntax, powerful features, and unparalleled developer velocity. However, to leverage Laravel's full potential, you need more than just a programmer—you need a dedicated software engineer who understands database architecture, queue management, security protocols, and scalable system design.",
    `I am an experienced remote Laravel Developer and PHP Software Engineer with over ${getYearsOfExperience()} years of professional experience building enterprise portals, financial technology integrations, and high-throughput backend pipelines. Having worked as a core engineer in rapid-growth tech environments, I specialize in designing and maintaining clean, testable codebases that are optimized for performance, security, and developer onboarding. My code adheres strictly to PSR standards, SOLID principles, and clean architecture paradigms, ensuring your system remains maintainable as your business scales.`,
    "Whether you are a startup looking to build a secure MVP, an agency needing a reliable contractor to expand your capacity, or an established enterprise seeking to migrate legacy systems to Laravel, I offer full-cycle development services. From database indexing and Redis queue tuning to third-party bank payment gateway integrations, I focus on building systems that don't break, allowing you to focus on growing your business."
  ],
  offers: [
    {
      title: "Custom Laravel Application Development",
      desc: "Tailor-made web applications designed to solve unique business challenges. I write modular, clean, and object-oriented PHP code using the latest Laravel practices, focusing on modularity, security, and high performance."
    },
    {
      title: "Database Architecture & Optimization",
      desc: "Designing clean relational databases using MySQL and PostgreSQL. I specialize in schema design, refactoring legacy tables, optimizing complex queries, index profiling, and database scaling to manage millions of rows efficiently."
    },
    {
      title: "High-Throughput Queue Management",
      desc: "Offloading intensive tasks like PDF generation, email dispatches, and third-party data synchronization to background workers. I construct robust Redis-backed queue systems with proper failure handling, retries, and job prioritization."
    },
    {
      title: "Fintech & Payment Gateway Integrations",
      desc: "Seamless integration of local and international payment methods. I build secure transaction engines, direct banking integrations, cashback programs, and robust webhook sequence handlers to eliminate double-payment issues."
    },
    {
      title: "Legacy Code Migration & Upgrades",
      desc: "Upgrading outdated PHP/Laravel systems to the latest secure versions. I refactor legacy codebases, replace deprecated libraries, implement automated test suites, and transition systems with minimal downtime."
    },
    {
      title: "RESTful API Design & Integration",
      desc: "Designing standard, developer-friendly REST APIs for mobile applications and third-party developers. I implement JWT/Sanctum authentication, rate limiting, data serialization, and comprehensive API documentation."
    }
  ],
  experienceHighlight: "Throughout my professional history at Softrobotics Bangladesh Ltd and Smart Software Ltd, I have successfully designed, built, and optimized complex Laravel platforms that directly drove organizational growth. My experience spans across diverse industries including FinTech, HR Tech, Procurement, and Garments ERP systems. I specialize in building solutions where data consistency, high availability, and transaction reliability are critical.",
  caseStudies: [
    "Softrobotics Bangladesh Ltd: Led the development of advanced payment gateway solutions tailored for the Turkish fintech ecosystem, implementing provider error mapping to enhance reliability and reduce transaction dropouts.",
    "Smart Software Ltd: Architected and optimized a custom payroll module and third-party attendance systems utilizing event-driven listeners to handle overtime tracking, tax rules, and compliance variables.",
    "Inventory & Procurement Control: Implemented inventory reconciliation models with double-entry ledger database rules, improving tracking accuracy across multi-branch retail outlets and garments manufacturing setups.",
    "Kodersolution Agency Portal: Built custom availability locks, billing split logic, and secure client asset download mechanisms using signed URLs and AWS S3 policies."
  ],
  technologies: [
    {
      name: "Core Backend",
      items: ["PHP 8.x", "Laravel 10 / 11", "RESTful APIs", "MVC Pattern"]
    },
    {
      name: "Databases & Cache",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis Caching"]
    },
    {
      name: "DevOps & Deployments",
      items: ["Docker Containers", "AWS EC2 / S3", "Digital Ocean", "CI/CD Pipelines", "Linux Scripting"]
    },
    {
      name: "Code Quality & Tools",
      items: ["PHPUnit Tests", "Git / GitHub", "SonarQube Quality Gates", "Jira & Trello"]
    }
  ],
  process: [
    {
      step: "01",
      title: "Discovery & Analysis",
      desc: "We start by analyzing your business goals, user flows, and technical requirements. I help define the scope, map out the user stories, and determine the ideal technical architecture."
    },
    {
      step: "02",
      title: "Architecture & Schema Design",
      desc: "Before writing any code, I design the database schemas, entity relationships, and API endpoints. This planning phase prevents bottlenecks and ensures the database is built for scale."
    },
    {
      step: "03",
      title: "Agile Development & Coding",
      desc: "Development proceeds in organized sprints. I write clean, documented, and test-driven Laravel code, keeping you updated with live staging environments and transparent GitHub updates."
    },
    {
      step: "04",
      title: "Optimization & Quality Assurance",
      desc: "I run query profiling to optimize slow database queries, check code coverage with unit tests, configure Redis caching, and ensure the code passes static analysis security checks."
    },
    {
      step: "05",
      title: "Deployment & Support",
      desc: "I handle secure server deployments using Docker or CI/CD pipelines. After launch, I provide system monitoring, security patch applications, and performance tuning support."
    }
  ],
  faqs: [
    {
      question: "Are you available for full-time contract roles or freelance projects?",
      answer: "Yes, I am available for full-time remote contracts, freelance projects, and agency support. I collaborate with teams worldwide using Slack, Jira, GitHub, and video stand-ups."
    },
    {
      question: "How do you ensure the security of a Laravel application?",
      answer: "I implement industry best practices including column-level encryption for sensitive database values, CSRF protection, SQL injection prevention, strict input validation using Form Requests, rate limiting, and secure authentication packages like Laravel Sanctum or Passport."
    },
    {
      question: "Can you help optimize a slow Laravel website?",
      answer: "Absolutely. Optimization is one of my core strengths. I inspect query execution plans, add proper database indexes, implement database eager-loading to solve N+1 query problems, introduce Redis caching, and configure background queue workers to handle heavy processing tasks."
    },
    {
      question: "Do you write tests for your Laravel code?",
      answer: "Yes, I write automated tests using PHPUnit. I focus on integration tests for API endpoints and unit tests for complex business logic, ensuring features do not break during future updates."
    },
    {
      question: "What is your hourly rate or project pricing structure?",
      answer: "I offer flexible pricing models, including hourly rates for ongoing consultancy and fixed-price contracts for well-defined project scopes. Contact me with details about your project to receive a tailored estimate."
    }
  ]
};
