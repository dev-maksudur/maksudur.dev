import type { Metadata } from "next";
import Link from "next/link";
import { servicesList } from "@/lib/data/services";
import { FadeIn } from "@/components/ui/framer-wrapper";
import { 
  Server, Code, Database, CreditCard, MessageSquare, Link as LinkIcon, Layers, ChevronRight, ArrowRight, Terminal 
} from "lucide-react";

import JsonLd from "@/components/JsonLd";
import { getServicesCollectionSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore professional software engineering services, including custom Laravel web applications, payment integrations, REST APIs, Telegram Mini Apps, React full-stack solutions, and DevOps server setup.",
  alternates: {
    canonical: "/services/",
  },
  other: {
    title: "Services | Maksudur.dev",
  },
};

// Map service slug to appropriate icon
const getServiceIcon = (slug: string) => {
  switch (slug) {
    case "hire-laravel-developer":
      return <Server className="w-8 h-8 text-blue-500" />;
    case "hire-php-developer":
      return <Code className="w-8 h-8 text-indigo-500" />;
    case "hire-backend-developer":
      return <Database className="w-8 h-8 text-emerald-500" />;
    case "payment-gateway-integration":
      return <CreditCard className="w-8 h-8 text-amber-500" />;
    case "telegram-mini-app-development":
      return <MessageSquare className="w-8 h-8 text-purple-500" />;
    case "laravel-api-development":
      return <LinkIcon className="w-8 h-8 text-cyan-500" />;
    case "react-laravel-development":
      return <Layers className="w-8 h-8 text-pink-500" />;
    case "devops-and-server-setup":
      return <Terminal className="w-8 h-8 text-orange-500" />;
    default:
      return <Server className="w-8 h-8 text-blue-500" />;
  }
};

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto pb-12">
      <JsonLd data={getServicesCollectionSchema(servicesList)} />
      {/* Page Header */}
      <FadeIn>
        <div className="mb-12">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-blue-100 border border-blue-300 text-blue-700 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-400">
            Expert Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Custom Software <span className="text-blue-600 dark:text-blue-400">Services</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            High-performance backend development, payment systems, and interactive full-stack integrations tailored to solve your business bottlenecks. Select a service to view experience, processes, and FAQs.
          </p>
        </div>
      </FadeIn>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {servicesList.map((service, index) => (
          <FadeIn key={service.id} delay={index * 0.05}>
            <Link 
              href={`/services/${service.slug}`}
              className="group block p-6 h-full rounded-2xl border transition-all duration-300 bg-white border-slate-200 hover:border-blue-500/30 hover:shadow-lg dark:bg-white/5 dark:border-white/5 dark:hover:bg-white/10 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 group-hover:scale-110 transition-transform duration-300">
                    {getServiceIcon(service.slug)}
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {service.heading.replace("Hire Dedicated ", "").replace("Custom ", "")}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-450 leading-relaxed mb-6">
                  {service.subheading}
                </p>
              </div>

              {/* Keyword tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {service.keywords.slice(0, 3).map((kw) => (
                  <span 
                    key={kw}
                    className="text-[10px] px-2 py-0.5 rounded font-mono font-semibold uppercase tracking-wider bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>

      {/* Bottom CTA Card */}
      <FadeIn delay={0.4}>
        <div className="p-8 md:p-10 rounded-3xl border text-center transition-all bg-slate-50 border-slate-200 dark:bg-white/5 dark:border-white/10 dark:shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl" />
          
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Need a custom solution or dedicated consultation?
          </h2>
          <p className="text-slate-650 dark:text-slate-450 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
            Let's discuss your project timelines, stack requirements, and workflow bottlenecks. I am open for remote contracts, agency overflow support, and direct freelance projects.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] bg-blue-600 hover:bg-blue-500 text-white"
            >
              Discuss Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
