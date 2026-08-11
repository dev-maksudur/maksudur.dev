"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
            <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Portfolio
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Selected <span className="text-blue-600 dark:text-blue-400">Work</span>
            </h3>
          </div>
        </FadeIn>
        
        <div className="flex gap-2 sm:gap-3">
          <button 
            onClick={() => swiperRef.current?.slidePrev()} 
            className="group p-3 sm:p-4 rounded-full transition-all border bg-white border-slate-200 hover:border-blue-500 text-slate-600 hover:text-blue-600 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-blue-500 dark:text-slate-400 dark:hover:text-white"
            aria-label="Previous Slide"
          >
            <ArrowLeft size={20} className="sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => swiperRef.current?.slideNext()} 
            className="group p-3 sm:p-4 rounded-full transition-all border bg-white border-slate-200 hover:border-blue-500 text-slate-600 hover:text-blue-600 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-blue-500 dark:text-slate-400 dark:hover:text-white"
            aria-label="Next Slide"
          >
            <ArrowRight size={20} className="sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
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
