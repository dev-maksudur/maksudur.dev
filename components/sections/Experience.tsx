"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { FadeIn } from "@/components/ui/framer-wrapper";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer / Team Lead",
    company: "SoftRobotics Bangladesh",
    period: "2023 - Present",
    location: "Dhaka, Bangladesh",
    description: "Leading fintech product development with direct bank integrations and high-volume payment systems. Implemented structured error mapping for fraud analysis, optimized payment processing, and designed backup strategies for critical transaction tables. Working directly with clients and stakeholders to deliver reliable systems handling 1M+ daily transactions smoothly. Leading engineering teams through sprint planning and architecture reviews.",
    skills: ["Fintech", "System Design", "PHP", "Laravel", "MySQL", "PgSQL", "Team Leadership"],
  },
  {
    role: "Software Engineer",
    company: "Smart Software Ltd",
    period: "2020 - 2023",
    location: "Dhaka, Bangladesh",
    description: "Developed multiple client-facing solutions including HRM, POS, Procurement Management, and Garments ERP systems. Delivered small to mid-scale production systems for real business clients, contributing to requirement analysis, development, deployment, and ongoing technical support.",
    skills: ["ERP Systems", "PHP", "Laravel", "MySQL", "React.Js"],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 px-3 sm:px-6 lg:px-8 bg-white dark:bg-black/20 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="mb-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-slate-900 dark:text-white">
              Professional <span className="text-blue-500">History</span>
            </h2>
            <div className="h-1.5 w-20 bg-blue-500 rounded-full mb-3" />
            <p className="text-lg md:text-xl max-w-2xl text-slate-600 dark:text-slate-400">
              My career journey as a software engineer, building impactful digital products and leading engineering teams.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-0">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-6 md:gap-16 py-12 border-b border-slate-200 dark:border-slate-800/60 last:border-0"
            >
              {/* Left Column: Date & Company */}
              <div className="space-y-3">
                <div className="font-mono text-sm font-bold tracking-tighter text-blue-600 dark:text-blue-400">
                  {exp.period}
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-1 text-slate-800 dark:text-slate-100">
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* Right Column: Role & Description */}
              <div className="space-y-5">
                <h4 className="text-2xl md:text-3xl font-black tracking-tight leading-tight text-slate-900 dark:text-white">
                  {exp.role}
                </h4>
                <p className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1 text-xs font-bold rounded-md border bg-slate-100 border-slate-200 text-slate-700 dark:bg-white/5 dark:border-white/10 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}