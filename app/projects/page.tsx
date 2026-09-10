"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"All" | "Personal" | "Company" | "Client">("All");

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.projectType === filter);

  return (
    <div className="max-w-7xl mx-auto pb-12">
      {/* Header */}
        <header className="mb-10">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-2 transition-all mb-6 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform mr-2" /> Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Software <span className="text-blue-600 dark:text-blue-400">Showcase</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
            A comprehensive overview of enterprise systems, core products, and client solutions I've engineered.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "All", label: "All Projects" },
              { id: "Personal", label: "Core Products / Own" },
              { id: "Company", label: "Company Systems" },
              { id: "Client", label: "Client Solutions" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === tab.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </header>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
  );
}