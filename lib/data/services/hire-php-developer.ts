import { ServicePageData } from "./types";
import { getYearsOfExperience } from "@/lib/utils/experience";

export const hirePhpDeveloper: ServicePageData = {
  id: "hire-php-developer",
  slug: "hire-php-developer",
  title: "Hire PHP Developer | Professional PHP & Backend Engineer",
  heading: "Hire Dedicated PHP Developer for Custom Web Applications",
  subheading: "Bring enterprise-grade PHP development, custom backend logic, and scalable architectures to your software products.",
  metaDescription: "Hire an experienced PHP developer and backend engineer. Specialized in PHP 8.x, MVC frameworks, custom API systems, database optimization, and high-performance server integrations.",
  keywords: ["hire php developer", "php freelancer", "php software engineer", "dedicated php developer", "php freelancer bangladesh"],
  intro: [
    "PHP remains the backbone of the web, powering over 75% of all websites globally. From fast-growing startup platforms to massive enterprise systems, modern PHP (PHP 8.x) offers speed, stability, and an expansive ecosystem. However, writing high-performance PHP requires deep knowledge of modern OOP paradigms, memory management, query execution plans, and secure coding practices. If you need to build custom web applications, integrate complex APIs, or fix performance bottlenecks, hiring a dedicated PHP developer is crucial.",
    `I am Maksudur Rahman, a professional PHP Software Engineer and Laravel Developer based in Dhaka, Bangladesh. With more than ${getYearsOfExperience()} years of hands-on experience, I design, code, and deploy custom PHP applications that process thousands of active requests, maintain absolute database consistency, and integrate smoothly with third-party service providers. I specialize in utilizing modern PHP features like typed properties, attributes, union types, and match expressions to write expressive, self-documenting code that stands the test of time.`,
    "My development philosophy is focused on utility, clarity, and security. I work closely with project stakeholders to architect custom solutions that address their business bottlenecks. Whether you need a raw PHP script refactored into a modern MVC framework, a custom CRM built from scratch, or performance optimization for a slow database, I deliver high-quality code and clear documentation."
  ],
  offers: [
    {
      title: "Modern PHP 8.x Application Development",
      desc: "Creating bespoke web applications using OOP PHP, strict typing, and modern design patterns. I ensure all systems are written cleanly, following PSR standards for coding styles and autoloader configurations."
    },
    {
      title: "Custom MVC Framework Implementations",
      desc: "Architecting custom PHP backends tailored for specific workflows when heavy external frameworks are not desired. I implement secure session handlers, request routers, and templating systems."
    },
    {
      title: "SQL Performance Tuning & Schema Design",
      desc: "Designing and optimizing databases using MySQL, PostgreSQL, and MongoDB. I profile queries to resolve indexing issues, restructure database tables, and implement caching layers using Redis."
    },
    {
      title: "Secure API Development & Webhook Handling",
      desc: "Building lightweight, rapid API backends. I secure API endpoints with modern authentication standards, enforce rate limits to block DDoS attempts, and develop atomic webhook listeners to parse external notifications."
    },
    {
      title: "Legacy PHP Codebase Refactoring",
      desc: "Transforming old, spaghetti PHP code into organized, maintainable object-oriented codebases. I update systems from older PHP versions (PHP 5.6/7.x) to PHP 8.x, patching security vulnerabilities along the way."
    },
    {
      title: "Third-Party Service Integrations",
      desc: "Connecting PHP applications to external ecosystems. I write custom API wrappers, connect billing and invoicing engines, integrate SMS and email notifications, and synchronize inventory catalogs."
    }
  ],
  experienceHighlight: "My journey as a PHP developer includes working on business-critical systems at Softrobotics Bangladesh Ltd and Smart Software Ltd. From designing payroll modules to optimizing inventory logs across multi-branch procurement systems, I write PHP solutions that address operational pain points and enable smooth workflows.",
  caseStudies: [
    "HRM & Payroll Engine: Automated payroll formulas, work shifts, tax variables, and Provident Fund deductions for thousands of active employees, reducing calculation overhead by 75%.",
    "Procurement Management Portal: Managed multi-branch procurement requisition workflows, allowing market survey comparisons and securing approval loops with double-entry inventory structures.",
    "Sipay Fintech Integrations: Developed bank onboarding adapters and error-mapping modules in PHP to process fintech transactions under high concurrency.",
    "Smart Dokani ERP: Participated in building local POS, receipt printing modules, and multi-tenant inventory synchronization mechanisms for retail clients."
  ],
  technologies: [
    {
      name: "PHP Ecosystem",
      items: ["PHP 8.2 / 8.3", "Object-Oriented Programming (OOP)", "Composer Dependency Manager", "PSR Standards"]
    },
    {
      name: "Frameworks & MVC",
      items: ["Laravel Framework", "Symfony Components", "Custom MVC Routers"]
    },
    {
      name: "Databases",
      items: ["MySQL Query Tuning", "PostgreSQL Indexes", "MongoDB", "Redis Key-Value Caching"]
    },
    {
      name: "Quality & Testing",
      items: ["PHPUnit", "PHPStan Static Analysis", "SonarQube Quality Gates", "Git Version Control"]
    }
  ],
  process: [
    {
      step: "01",
      title: "Technical Consulting & Scope",
      desc: "We align on your requirements, codebase state, and objectives. I analyze the legacy code or project specifications to define the database and backend architecture."
    },
    {
      step: "02",
      title: "Database & Route Modeling",
      desc: "I construct the database schema, entity-relationship diagrams, and API routing structures. I map out access control rules and data validation schemas before writing any core functions."
    },
    {
      step: "03",
      title: "Clean Backend Implementation",
      desc: "I implement the custom business logic using strict typing, design patterns, and PSR standards. Sprints are tracked transparently via Git commits and regular testing feedback loops."
    },
    {
      step: "04",
      title: "Database Profiling & Optimization",
      desc: "Using tools like EXPLAIN queries and slow query logs, I index database columns, optimize loops, implement Redis caching, and test the endpoints for response times."
    },
    {
      step: "05",
      title: "Secure Deployment & Handoff",
      desc: "I handle the deployment to production servers using Linux scripting, Docker, or GitHub Actions. All code is handed over with clear API documentations and setup instructions."
    }
  ],
  faqs: [
    {
      question: "Can you help migrate a website from an old PHP version to PHP 8.x?",
      answer: "Yes, I regularly handle legacy upgrades. I run compatibility analysis tools to identify deprecated functions, update Composer dependencies, rewrite incompatible code sections, and migrate the data securely to ensure zero disruption."
    },
    {
      question: "Do you write custom PHP code or only work with frameworks like Laravel?",
      answer: "I am equally comfortable writing clean, custom PHP applications from scratch (without frameworks) and building within established frameworks like Laravel. I choose the best approach based on your project requirements, budget, and performance needs."
    },
    {
      question: "How do you handle security vulnerabilities in PHP?",
      answer: "I follow secure coding practices to block common vulnerabilities: utilizing PDO/prepared statements to prevent SQL injections, escaping outputs to mitigate Cross-Site Scripting (XSS), utilizing secure password hashing functions (bcrypt/argon2), and validating inputs."
    },
    {
      question: "What databases do you recommend for PHP applications?",
      answer: "MySQL and PostgreSQL are the industry standards for relational data and offer excellent performance when properly indexed. For caching, queuing, and session storage, I recommend pairing them with Redis. For unstructured document data, MongoDB is my choice."
    },
    {
      question: "How can we get started on a project?",
      answer: "You can send an email or submit an inquiry via the Contact page with details about your project. I will schedule a call to review your codebase or requirements, outline a proposed structure, and provide a clear timeline."
    }
  ]
};
