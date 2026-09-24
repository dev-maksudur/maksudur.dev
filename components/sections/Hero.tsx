"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/framer-wrapper";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import InteractiveAvatar from "@/components/ui/InteractiveAvatar";

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

const quickSocials = [
  { name: "WhatsApp", href: "https://wa.me/maksudur.dev", icon: WhatsAppIcon, color: "text-emerald-500 hover:text-emerald-600 dark:text-emerald-400" },
  { name: "GitHub", href: "https://github.com/dev-maksudur", icon: Github, color: "text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white" },
  { name: "LinkedIn", href: "http://linkedin.com/in/maksudur-dev", icon: Linkedin, color: "text-blue-600 hover:text-blue-700 dark:text-blue-400" },
  { name: "Email", href: "mailto:maksudur.dev02@gmail.com", icon: Mail, color: "text-amber-500 hover:text-amber-600 dark:text-amber-400" },
];

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative pb-12 md:pb-16 pt-4 sm:pt-6 overflow-hidden">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/10 dark:bg-purple-600/15 blur-[130px] rounded-full pointer-events-none -z-10"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left order-1 lg:order-1">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2.5 py-1.5 px-4 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Software Engineer & FinTech Specialist
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold tracking-tight mb-5 transition-colors leading-[1.16] text-slate-900 dark:text-white">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 dark:from-purple-400 dark:via-indigo-300 dark:to-purple-300">
                  Maksudur Rahman
                </span>
                <span className="block mt-2 text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-bold text-slate-800 dark:text-slate-100 leading-snug">
                  Laravel Developer &{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-300">
                    FinTech Architect
                  </span>
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed transition-colors text-slate-600 dark:text-slate-300 font-normal">
                Specialized in high-throughput backend architecture, resilient payment gateway integrations, distributed caching, and modern React frontends. Delivering enterprise-grade systems with clean, testable code.
              </p>
            </FadeIn>

            {/* CTAs and Social Channels */}
            <FadeIn delay={0.35}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
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

                {/* Quick Social Buttons */}
                <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:pl-2">
                  {quickSocials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className={`p-2.5 rounded-xl border bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 shadow-sm transition-colors ${social.color}`}
                      >
                        <Icon size={18} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </FadeIn>

            {/* Core Tech Stack Ribbon */}
            <FadeIn delay={0.45}>
              <div className="pt-6 border-t border-slate-200/80 dark:border-white/10 max-w-xl mx-auto lg:mx-0">
                <p className="text-[11px] uppercase tracking-widest font-semibold text-slate-600 dark:text-slate-300 mb-3">
                  Core Tech Stack & Specialties
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5">
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

          {/* Right Column: Interactive Executive Portrait Card */}
          <div className="lg:col-span-5 flex justify-center items-center order-2 lg:order-2 w-full mt-4 lg:mt-0">
            <FadeIn delay={0.25} className="w-full flex justify-center">
              <InteractiveAvatar
                imageSrc="/images/avatar-workspace.webp"
                priority={true}
              />
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}