"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/lib/data/projects";
import ProjectVisual from "@/components/ui/ProjectVisual";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="h-full group"
    >
      <div className="h-full flex flex-col rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300">
        {/* Image Container / Mockup Frame */}
        <div className="relative h-56 overflow-hidden p-3 bg-slate-50 dark:bg-slate-950/40 border-b border-slate-100 dark:border-slate-800/80">
          <ProjectVisual projectId={project.id} image={project.image} title={project.title} />
          <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
            <span className={`px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-md shadow-md ${
              project.projectType === "Personal"
                ? "bg-emerald-600 text-white"
                : project.projectType === "Company"
                ? "bg-blue-600 text-white"
                : "bg-amber-600 text-white"
            }`}>
              {project.projectType === "Personal" ? "Core Project" : `${project.projectType} Work`}
            </span>
            <span className="px-2.5 py-1 bg-slate-900/80 backdrop-blur-sm text-slate-200 text-[10px] font-semibold uppercase tracking-wider rounded-md shadow-md">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 flex-1 flex flex-col">
          <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
            {project.title}
          </h4>
          <p className="text-[11px] sm:text-sm leading-relaxed mb-6 flex-1 text-slate-600 dark:text-slate-400">
            {project.desc}
          </p>

          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-4">
            <div className="flex gap-2 flex-wrap">
              {project.tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
            
            <Link
              href={`/projects/${project.id}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 dark:bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-600 dark:hover:bg-blue-500 transition-all shadow-lg group-hover:scale-[1.02]"
            >
              View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
