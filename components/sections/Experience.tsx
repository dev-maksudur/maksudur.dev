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
    role: "Software Engineer",
    company: "Softrobotics Bangladesh Ltd",
    period: "May, 2023 - Present",
    location: "West Dhanmondi, Dhaka, Bangladesh",
    description: "Designed & Developed advanced payment gateway solutions tailored for the Turkish fintech ecosystem. Implemented provider error mapping to enhance transaction reliability and reduce failures. Developed cashback and rewards programs to drive user engagement. Streamlined onboarding of new banks, expanding available payment methods and increasing transaction flexibility. Optimized transaction efficiency and enhanced the digital wallet experience for end-users.",
    skills: ["PHP", "Laravel", "Javascript", "Vue.js", "MySQL", "PostgreSQL", "Fintech", "Payment Gateways", "API Integration", "Redis", "Docker"],
  },
  {
    role: "Software Engineer",
    company: "Smart Software Ltd",
    period: "Nov, 2020 - April, 2023",
    location: "Dhaka, Bangladesh",
    description: "Built core backend modules for Human Resource Management (HRM) including payroll optimization, Provident Fund management, and third-party attendance integration via event listeners. Developed Procurement Management modules covering requisition workflows, market surveys, and inventory control & optimization. Worked on Garments ERP, Smart Dokan, Hospital and Doctor Management systems.",
    skills: ["PHP", "Laravel", "MySQL", "ERP Systems", "HRM & Payroll", "Procurement", "Inventory Control", "Git"],
  }
];

export default function Experience({ 
  isPageHeading = false,
  isStandalone = false,
}: { 
  isPageHeading?: boolean;
  isStandalone?: boolean;
}) {
  const HeadingTag = isPageHeading ? "h1" : "h2";

  return (
    <section 
      id="experience" 
      className={`${isStandalone ? 'pt-0 pb-8' : 'py-12 px-3 sm:px-6 lg:px-8 bg-white dark:bg-black/20'} transition-colors duration-500`}
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400">
              Career Timeline
            </div>
            <HeadingTag className="text-2xl md:text-4xl font-bold tracking-tight mb-3 text-slate-900 dark:text-white">
              Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">History</span>
            </HeadingTag>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mb-3" />
            <p className="text-base sm:text-lg max-w-2xl text-slate-600 dark:text-slate-300">
              My career journey as a software engineer, building impactful digital products, fintech backends, and leading engineering teams.
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
              className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-6 md:gap-16 py-10 border-b border-slate-200 dark:border-slate-800/60 last:border-0"
            >
              {/* Left Column: Date & Company */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold tracking-tight text-purple-600 dark:text-purple-400">
                  {idx === 0 && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  )}
                  {exp.period}
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight mb-1 text-slate-800 dark:text-slate-100">
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-purple-500" />
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* Right Column: Role & Description */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight text-slate-900 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1 text-xs font-semibold rounded-lg border bg-slate-100 border-slate-200 text-slate-700 hover:border-purple-300 dark:bg-white/5 dark:border-white/10 dark:text-slate-300 dark:hover:border-purple-500/30 transition-colors"
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