"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, Zap, Users } from "lucide-react";
import Link from "next/link";

const stats = [
  { icon: Briefcase, label: "Experience", value: "5+ Years" },
  { icon: Award, label: "Core Expertise", value: "Backend & Scale" },
  { icon: Zap, label: "Focus", value: "Performance & Security" },
  { icon: Users, label: "Collaboration", value: "Remote & Agile" },
];

export default function Intro() {

  return (
    <section id="intro" className="py-12 px-4 sm:px-6 lg:px-8 relative max-w-5xl mx-auto transition-colors bg-transparent">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 transition-colors text-slate-900 dark:text-white">
            High-Performance Backend Development & <span className="text-blue-500">Fintech Integrations</span>
          </h2>
          <div className="space-y-4 leading-relaxed text-lg transition-colors text-slate-700 dark:text-slate-300">
            <p>
              I am a dedicated <strong>PHP Software Engineer</strong> and <strong>Laravel Developer</strong> based in Dhaka, Bangladesh. I specialize in building high-throughput systems, custom <strong>REST APIs</strong>, and integrating robust <strong>payment gateway solutions</strong>.
            </p>
            <p>
              As a seasoned <strong>Laravel payment gateway developer</strong>, <strong>React Laravel freelancer</strong>, and <strong>Telegram Mini App developer</strong>, I focus on delivering scalable, secure, and modern web architectures. From double-entry inventory structures to secure webhook handlers, I optimize every layer of the system.
            </p>
          </div>
          <div className="mt-8">
            <Link 
              href="/contact" 
              className="inline-block px-6 py-3 font-bold rounded-lg transition-colors bg-blue-600 text-white hover:bg-blue-500 dark:bg-white dark:text-[#0B1120] dark:hover:bg-slate-200"
            >
              Discuss a Project
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
            <div key={idx} className="p-5 sm:p-6 rounded-xl transition-all border h-full flex flex-col bg-slate-100 border-slate-300 hover:bg-slate-200 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10">
              <stat.icon className="text-blue-500 mb-3" size={20} />
              <h3 className="text-xs font-medium uppercase tracking-wider mb-1 transition-colors text-slate-600 dark:text-slate-400">{stat.label}</h3>
              <p className="text-base sm:text-lg font-bold transition-colors mt-auto text-slate-900 dark:text-white">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}