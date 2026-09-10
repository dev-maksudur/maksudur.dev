"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, Award, Zap, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getExperienceText } from "@/lib/utils/experience";

export default function Intro({ 
  isPageHeading = false,
  isStandalone = false,
}: { 
  isPageHeading?: boolean;
  isStandalone?: boolean;
}) {
  const HeadingTag = isPageHeading ? "h1" : "h2";
  const [experienceValue, setExperienceValue] = useState(getExperienceText());

  useEffect(() => {
    setExperienceValue(getExperienceText());
  }, []);

  const stats = [
    { 
      icon: Briefcase, 
      label: "Experience", 
      value: experienceValue,
      iconColor: "text-purple-600 dark:text-purple-400",
      iconBg: "bg-purple-500/10 dark:bg-purple-500/15 border-purple-500/20",
    },
    { 
      icon: Award, 
      label: "Core Expertise", 
      value: "Backend & Scale",
      iconColor: "text-cyan-600 dark:text-cyan-400",
      iconBg: "bg-cyan-500/10 dark:bg-cyan-500/15 border-cyan-500/20",
    },
    { 
      icon: Zap, 
      label: "Focus", 
      value: "Performance & Security",
      iconColor: "text-amber-600 dark:text-amber-400",
      iconBg: "bg-amber-500/10 dark:bg-amber-500/15 border-amber-500/20",
    },
    { 
      icon: Users, 
      label: "Collaboration", 
      value: "Remote & Agile",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      iconBg: "bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/20",
    },
  ];

  return (
    <section id="intro" className={`${isStandalone ? 'pt-0 pb-8' : 'py-12'} relative max-w-5xl mx-auto transition-colors bg-transparent`}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400">
            About My Work
          </div>
          <HeadingTag className="text-3xl sm:text-4xl font-bold mb-6 transition-colors text-slate-900 dark:text-white leading-tight">
            High-Performance Backend Development & <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Fintech Integrations</span>
          </HeadingTag>
          <div className="space-y-4 leading-relaxed text-base sm:text-lg transition-colors text-slate-700 dark:text-slate-300">
            <p>
              I am a dedicated <strong>PHP Software Engineer</strong> and <strong>Laravel Developer</strong> based in Dhaka, Bangladesh. I specialize in building high-throughput systems, custom <strong>REST APIs</strong>, and integrating robust <strong>payment gateway solutions</strong>.
            </p>
            <p>
              As a seasoned <strong>Laravel payment gateway developer</strong>, <strong>React Laravel freelancer</strong>, and <strong>Telegram Mini App developer</strong>, I focus on delivering scalable, secure, and modern web architectures. From double-entry inventory structures to secure webhook handlers, I optimize every layer of the system.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all shadow-md hover:shadow-lg shadow-purple-500/20 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white"
            >
              <span>Discuss a Project</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all border bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-900 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-white"
            >
              Full Career History
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 xs:grid-cols-2 gap-4"
        >
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="group p-5 sm:p-6 rounded-2xl transition-all duration-300 border h-full flex flex-col bg-slate-50/80 hover:bg-white border-slate-200 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/5 dark:bg-white/[0.04] dark:border-white/10 dark:hover:bg-white/[0.08] dark:hover:border-purple-500/30 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2.5 rounded-xl border ${stat.iconBg} ${stat.iconColor} transition-transform group-hover:scale-105 duration-300`}>
                  <stat.icon size={20} />
                </div>
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-wider mb-1 transition-colors text-slate-500 dark:text-slate-400">
                {stat.label}
              </h3>
              <p className="text-xl sm:text-2xl font-bold transition-colors mt-auto text-slate-900 dark:text-white tracking-tight">
                {stat.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}