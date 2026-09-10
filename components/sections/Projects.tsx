"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "../ui/framer-wrapper";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export default function Projects() {
  const swiperRef = useRef<any>(null);

  return (
    <section id="projects" className="py-16 px-4 relative max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <FadeIn>
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400">
              Portfolio
            </div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Selected <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Work</span>
            </h2>
          </div>
        </FadeIn>
        
        <div className="flex items-center gap-3">
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mr-2 transition-colors"
          >
            <span>All Projects</span>
            <ArrowRight size={16} />
          </Link>
          <button 
            onClick={() => swiperRef.current?.slidePrev()} 
            className="group p-3 sm:p-3.5 rounded-full transition-all border bg-white border-slate-200 hover:border-purple-500 text-slate-600 hover:text-purple-600 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-purple-500 dark:text-slate-400 dark:hover:text-white"
            aria-label="Previous Slide"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button 
            onClick={() => swiperRef.current?.slideNext()} 
            className="group p-3 sm:p-3.5 rounded-full transition-all border bg-white border-slate-200 hover:border-purple-500 text-slate-600 hover:text-purple-600 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-purple-500 dark:text-slate-400 dark:hover:text-white"
            aria-label="Next Slide"
          >
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="!pb-8 overflow-visible"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
