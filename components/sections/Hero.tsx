"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/framer-wrapper";
import Link from "next/link";

export default function Hero() {

  return (
    <section className="min-h-[75vh] flex items-center justify-center relative py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 text-center z-10">
        <FadeIn delay={0.1}>
          <span className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for Hire
          </span>
        </FadeIn>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 transition-colors leading-[1.2] text-slate-900 dark:text-white">
          Laravel Developer for <span className="text-blue-600 dark:text-blue-400 font-extrabold">Web Applications</span>, APIs & Payment Solutions
        </h1>

        <FadeIn delay={0.3}>
          <p className="text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed transition-colors text-slate-600 dark:text-slate-300 font-normal">
            Experienced Laravel Developer and PHP Software Engineer specializing in scalable web applications, payment gateway integrations, REST APIs, fintech solutions, and React frontends. Available for freelance, contract, and remote development projects.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center px-4 sm:px-0">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                href="/projects"
                className="flex justify-center items-center px-7 py-3.5 rounded-xl font-semibold text-base transition-all bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                href="/experience"
                className="flex justify-center items-center px-7 py-3.5 rounded-xl font-semibold text-base transition-all border bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-900 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-white"
              >
                My Experience
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}