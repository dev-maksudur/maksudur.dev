"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { getYearsOfExperience } from "@/lib/utils/experience";

export default function Stats() {
  const yearsExp = getYearsOfExperience();

  const stats = [
    { label: "Years Experience", value: yearsExp, suffix: "+", highlight: "Since Nov 2020" },
    { label: "Production Solutions", value: 25, suffix: "+", highlight: "Enterprise & SaaS" },
    { label: "Fintech & Bank APIs", value: 12, suffix: "+", highlight: "Payment Gateways" },
    { label: "System Uptime & SLA", value: 99.9, suffix: "%", highlight: "High Concurrency", isFloat: true },
  ];

  return (
    <section className="py-12 border-y border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <CounterCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CounterProps {
  label: string;
  value: number;
  suffix?: string;
  highlight?: string;
  isFloat?: boolean;
}

function CounterCard({ label, value, suffix = "+", highlight, isFloat = false }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayCount, setDisplayCount] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const duration = 1500;
      const steps = 30;
      const stepTime = duration / steps;
      let step = 0;
      setDisplayCount(0);

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        // Ease out quadratic
        const easeVal = 1 - (1 - progress) * (1 - progress);
        const current = easeVal * value;
        
        if (step >= steps) {
          setDisplayCount(value);
          clearInterval(timer);
        } else {
          setDisplayCount(isFloat ? Math.round(current * 10) / 10 : Math.round(current));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, isFloat, hasAnimated]);

  return (
    <div 
      ref={ref} 
      className="p-5 sm:p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-white/[0.03] transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 flex flex-col items-center text-center group"
    >
      <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-500 dark:from-purple-400 dark:via-indigo-300 dark:to-amber-400">
        {isFloat ? displayCount.toFixed(1) : displayCount}
        <span className="text-purple-600 dark:text-purple-400 text-2xl sm:text-3xl md:text-4xl ml-0.5">{suffix}</span>
      </div>
      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider mt-2 text-slate-800 dark:text-slate-200">
        {label}
      </h3>
      {highlight && (
        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">
          {highlight}
        </span>
      )}
    </div>
  );
}