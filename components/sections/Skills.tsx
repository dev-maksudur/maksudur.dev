"use client";

import { FadeIn } from "@/components/ui/framer-wrapper";
import { Server, Layout, Database, Shield, Terminal, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Backend",
    icon: Server,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    tech: ["PHP", "Laravel", "dotnet core", "Python"]
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    tech: ["React", "Next.Js", "TypeScript", "Tailwind CSS", "Jquery"]
  },
  {
    title: "Database & Caching",
    icon: Database,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    tech: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
  },
  {
    title: "DevOps & Cloud",
    icon: Terminal,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    tech: ["AWS", "Docker", "Linux", "CI/CD Pipelines", "Github Actions", "Jenkins"]
  },
  {
    title: "Architecture",
    icon: Layers,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    tech: ["REST APIs", "Microservices", "Event Driven", "System Design"]
  },
  {
    title: "Tools & Security",
    icon: Shield,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    tech: ["Git", "SonarQube", "JWT", "Jira"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-3 sm:px-6 lg:px-8 relative max-w-6xl mx-auto">
      <FadeIn>
        <div className="mb-12">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3 transition-colors text-slate-900 dark:text-white">
            Technical <span className="text-blue-600 dark:text-blue-400">Expertise</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A comprehensive stack of technologies I use to build scalable systems.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <FadeIn key={category.title} delay={idx * 0.1} className="h-full">
            <div className={`group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 h-full flex flex-col bg-slate-100 hover:bg-slate-200 border-slate-300 dark:bg-white/5 dark:hover:bg-white/10 dark:${category.border}`}>
              <div className={`w-12 h-12 rounded-xl ${category.bg} ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 transition-colors text-slate-900 dark:text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.tech.map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-md border transition-colors bg-slate-200 text-slate-700 border-slate-300 group-hover:border-slate-400 dark:bg-white/5 dark:text-slate-300 dark:border-white/5 dark:group-hover:border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}