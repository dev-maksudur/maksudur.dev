import { ServicePageData } from "./types";

export const reactLaravelDevelopment: ServicePageData = {
  id: "react-laravel-development",
  slug: "react-laravel-development",
  title: "React & Laravel Developer | Full-Stack Web App Engineer",
  heading: "React + Laravel Full-Stack Web Application Development",
  subheading: "Build modern, high-performance Single Page Applications (SPAs) combining interactive React/Next.js frontends with robust Laravel APIs.",
  metaDescription: "Looking for a React and Laravel developer? Partner with a full-stack software engineer specializing in interactive Next.js interfaces, secure Laravel APIs, and database structures.",
  keywords: ["react laravel developer", "react laravel freelancer", "react and laravel developer", "full stack laravel developer"],
  intro: [
    "Modern web applications demand a balance of user-friendly frontend experiences and solid backend architectures. React has become the framework of choice for building fast, responsive user interfaces, while Laravel excels as a backend engine for database design, background queue execution, and API management. Combining these two technologies allows you to create fast, scalable web applications. However, bridging these systems requires a full-stack engineer who understands client-side state hydration, API protocols, and secure backend routing.",
    "I am Maksudur Rahman, a full-stack developer and remote React & Laravel engineer. I design and build end-to-end web applications, integrating responsive frontends built with Next.js/React and Tailwind CSS with secure APIs powered by Laravel. I focus on optimizing user experiences by implementing fast page rendering, state management (using Redux or React Context), and securing API communications via cookie authentication or JWT bearer tokens.",
    "My full-stack development services provide clean, organized architectures. Whether you want to develop an interactive SaaS dashboard, a customized client booking portal, or a multi-tenant web application, I handle the development lifecycle from layout styling and database indexes to production-grade Docker deployment."
  ],
  offers: [
    {
      title: "Full-Stack Single Page Applications (SPAs)",
      desc: "Developing fast, responsive web apps using React or Next.js for the interface and Laravel for backend APIs. This architecture provides rich user experiences while maintaining server stability."
    },
    {
      title: "Interactive Admin Dashboards & SaaS Portals",
      desc: "Building database dashboards with real-time charts, advanced tables, filters, and drag-and-drop elements. I ensure layouts remain responsive and optimized for mobile devices."
    },
    {
      title: "State Management & Server Hydration",
      desc: "Implementing clean state synchronization between frontend and backend. I manage API calls, query caches, and coordinate state updates with React components."
    },
    {
      title: "Secure Authentication Integration",
      desc: "Implementing secure login states across React client domains and Laravel API servers using cookie-based Sanctum sessions or JWT authorization headers."
    },
    {
      title: "Tailwind CSS Styling & Micro-Animations",
      desc: "Crafting beautiful user interfaces using Tailwind CSS. I implement clean CSS designs, interactive animations with Framer Motion, and dark mode toggles."
    },
    {
      title: "API Performance Tuning & Optimizations",
      desc: "Profiling API routes to ensure fast React component loads. I optimize database queries, implement Redis cache stores, and handle file uploads using signed AWS S3 requests."
    }
  ],
  experienceHighlight: "My full-stack background includes building web applications, client portals, and blogs using React/Next.js and Laravel at Softrobotics Bangladesh Ltd and Smart Software Ltd.",
  caseStudies: [
    "Kodersolution Agency Portal: Built a complete Next.js client management panel connected to a Laravel API server, featuring Stripe split-payouts and secure AWS asset downloads.",
    "Sportslover Live Coverage: Programmed a Next.js sports site using Pusher WebSockets and Laravel Echo to stream real-time match events without client polling.",
    "Personal Financial Ledger: Developed a React budget dashboard featuring receipt OCR scanning and balance tracking powered by a Laravel backend.",
    "Next.js Portfolio Platform: Built this portfolio application featuring dark/light transitions, fast layouts, and interactive components."
  ],
  technologies: [
    {
      name: "Frontend Stack",
      items: ["React.js", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      name: "Backend Stack",
      items: ["PHP 8.x / Laravel", "RESTful Web APIs", "Laravel Sanctum Auth", "Composer Packages"]
    },
    {
      name: "Databases & Caching",
      items: ["MySQL", "PostgreSQL", "Redis Store", "Database Row Locking"]
    },
    {
      name: "DevOps & Tools",
      items: ["Docker Containers", "Git / GitHub Actions", "AWS S3 / EC2", "Linux Commands"]
    }
  ],
  process: [
    {
      step: "01",
      title: "Requirements & Mockups",
      desc: "We define the user stories, database needs, and layout requirements. I draft user flows and map out API contracts before writing code."
    },
    {
      step: "02",
      title: "API Design & DB Setup",
      desc: "I design the relational database schema, database tables, and API routes in Laravel. I enforce data validation rules to secure backend paths."
    },
    {
      step: "03",
      title: "Frontend Component Coding",
      desc: "I build the user interface using React/Next.js and Tailwind CSS. I write clean, reusable components and implement interactive animations with Framer Motion."
    },
    {
      step: "04",
      title: "API Integration & Hydration",
      desc: "I connect the React components to the Laravel APIs, handling login states, data loading, error forms, and secure file uploads."
    },
    {
      step: "05",
      title: "Testing, Build & Launch",
      desc: "I run query checks, test frontend layout responsiveness, and verify that Next.js static generation builds compile correctly before deploying using Docker."
    }
  ],
  faqs: [
    {
      question: "Why combine React/Next.js with a Laravel backend?",
      answer: "React offers rich frontend layouts, instant page transitions, and interactive components. Laravel provides a robust backend with migrations, queue processing, and security layers. Together, they create a high-performance system for complex web applications."
    },
    {
      question: "How do you handle authentication in a decoupled React-Laravel setup?",
      answer: "I implement cookie-based session authentication using Laravel Sanctum. This utilizes HTTP-only, secure cookies, preventing Cross-Site Scripting (XSS) token theft and ensuring seamless user sessions."
    },
    {
      question: "Can you help optimize page load speeds in a React application?",
      answer: "Yes. I optimize Next.js rendering paths, implement route lazy-loading, optimize image files, cache API responses using Redis on the backend, and eager-load database records to reduce response times."
    },
    {
      question: "Are you comfortable using Tailwind CSS and Framer Motion?",
      answer: "Yes, Tailwind CSS is my preferred styling tool for building responsive, modern layouts. I pair it with Framer Motion to create smooth transitions, hover effects, and micro-animations that enhance the user experience."
    },
    {
      question: "How do we handle file uploads in a full-stack setup?",
      answer: "For performance and security, I generate temporary pre-signed upload URLs from AWS S3 on the Laravel backend. The React client then uploads the file directly to the S3 bucket, reducing server memory usage."
    }
  ]
};
