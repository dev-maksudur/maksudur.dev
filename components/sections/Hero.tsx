"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/framer-wrapper";
import Link from "next/link";
import { ArrowRight, Terminal, Layers, ShieldCheck } from "lucide-react";

const coreTech = [
  "PHP 8+",
  "Laravel",
  "Payment Gateways",
  "REST APIs",
  "PostgreSQL",
  "Redis",
  "Docker",
  "React & Next.js",
];

export default function Hero() {
  return (
    <section className="min-h-[75vh] flex items-center justify-center relative pb-12 md:pb-16 pt-4 overflow-hidden">
      {/* Ambient background glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-purple-600/10 dark:bg-purple-600/15 blur-[120px] rounded-full pointer-events-none -z-10" 
      />

      <div className="max-w-4xl mx-auto px-4 text-center z-10">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2.5 py-1.5 px-4 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for Hire & Contract Projects
          </div>
        </FadeIn>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-colors leading-[1.15] text-slate-900 dark:text-white">
          Laravel Developer for{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-500 dark:from-purple-400 dark:via-indigo-300 dark:to-amber-400">
            Scalable Web Applications
          </span>
          , APIs & Fintech Systems
        </h1>

        <FadeIn delay={0.25}>
          <p className="text-base sm:text-lg md:text-xl mb-9 max-w-2xl mx-auto leading-relaxed transition-colors text-slate-600 dark:text-slate-300 font-normal">
            Specialized in high-throughput backend architecture, resilient payment gateway integrations, distributed caching, and modern React frontends. Delivering enterprise-grade systems with clean, testable code.
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center px-4 sm:px-0 mb-10">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                href="/projects"
                className="flex justify-center items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base transition-all bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/25"
              >
                <span>View Projects</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                href="/contact"
                className="flex justify-center items-center px-7 py-3.5 rounded-xl font-semibold text-base transition-all border bg-slate-100/90 hover:bg-slate-200 border-slate-300 text-slate-900 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/15 dark:text-white"
              >
                Discuss a Project
              </Link>
            </motion.div>
          </div>
        </FadeIn>

        {/* Core Tech Stack Ribbon */}
        <FadeIn delay={0.45}>
          <div className="pt-6 border-t border-slate-200/80 dark:border-white/10 max-w-3xl mx-auto">
            <p className="text-[11px] uppercase tracking-widest font-semibold text-slate-600 dark:text-slate-300 mb-3">
              Core Tech Stack & Specialties
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {coreTech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-lg border bg-slate-100/80 border-slate-200 text-slate-700 hover:border-purple-300 transition-colors dark:bg-white/[0.04] dark:border-white/10 dark:text-slate-300 dark:hover:border-purple-500/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}