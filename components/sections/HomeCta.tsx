"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function HomeCta() {
  return (
    <section className="py-16 px-4 relative max-w-5xl mx-auto my-8">
      <div className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 via-slate-900/40 to-slate-900/80 dark:from-purple-950/40 dark:via-slate-900/60 dark:to-[#0B1120] p-8 sm:p-12 text-center shadow-xl backdrop-blur-md">
        {/* Subtle decorative glow */}
        <div 
          aria-hidden="true" 
          className="absolute -top-24 -left-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" 
        />
        <div 
          aria-hidden="true" 
          className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" 
        />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-purple-500/10 border border-purple-500/20 text-purple-400">
            Let's Collaborate
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-snug">
            Ready to Build Robust, Scalable Systems?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
            Whether you need custom payment gateway integrations, high-performance API engineering, or full-cycle Laravel development, let's turn your vision into reliable software.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base transition-all bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/25"
            >
              <Mail size={18} />
              <span>Discuss a Project</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/maksudur.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base transition-all border bg-white/5 hover:bg-white/10 border-white/10 text-white hover:border-emerald-500/40"
            >
              <WhatsAppIcon size={18} className="text-emerald-400" />
              <span>Quick WhatsApp Chat</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 mt-6">
            Typically replies within a few hours • Available for remote roles worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
