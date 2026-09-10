import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData, servicesList } from "@/lib/data/services";
import { FadeIn } from "@/components/ui/framer-wrapper";
import { 
  Server, Code, Database, CreditCard, MessageSquare, Link as LinkIcon, 
  Layers, ArrowLeft, ArrowRight, CheckCircle, ChevronDown, Cpu, Sparkles, Terminal 
} from "lucide-react";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicesList.map((service) => ({
    slug: service.slug,
  }));
}

import JsonLd from "@/components/JsonLd";
import { getServiceDetailSchema } from "@/lib/seo/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service page does not exist.",
    };
  }

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}/`,
    },
    other: {
      title: `${service.title} | Maksudur.dev`,
    },
  };
}

// Map service slug to appropriate icon
const getServiceIcon = (slug: string) => {
  switch (slug) {
    case "hire-laravel-developer":
      return <Server className="w-6 h-6 text-blue-500" />;
    case "hire-php-developer":
      return <Code className="w-6 h-6 text-indigo-500" />;
    case "hire-backend-developer":
      return <Database className="w-6 h-6 text-emerald-500" />;
    case "payment-gateway-integration":
      return <CreditCard className="w-6 h-6 text-amber-500" />;
    case "telegram-mini-app-development":
      return <MessageSquare className="w-6 h-6 text-purple-500" />;
    case "laravel-api-development":
      return <LinkIcon className="w-6 h-6 text-cyan-500" />;
    case "react-laravel-development":
      return <Layers className="w-6 h-6 text-pink-500" />;
    case "devops-and-server-setup":
      return <Terminal className="w-6 h-6 text-orange-500" />;
    default:
      return <Server className="w-6 h-6 text-blue-500" />;
  }
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto pb-12">
      <JsonLd data={getServiceDetailSchema(service)} />
      
      {/* Back to Services navigation */}
      <FadeIn>
        <Link 
          href="/services" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Services
        </Link>
      </FadeIn>

      {/* Hero Header */}
      <FadeIn>
        <div className="mb-12 border-b border-slate-200 dark:border-slate-800/60 pb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5">
              {getServiceIcon(service.slug)}
            </div>
            <span className="text-xs font-bold font-mono uppercase tracking-widest text-blue-500 dark:text-blue-400">
              Service Overview
            </span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
            {service.heading}
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-4xl">
            {service.subheading}
          </p>
        </div>
      </FadeIn>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-16">
        
        {/* Left Column: Intros, Offers, Experience (Span 2) */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Detailed Intro Paragraphs */}
          <FadeIn>
            <section className="space-y-6 text-base md:text-lg text-slate-655 dark:text-slate-350 leading-relaxed">
              {service.intro.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </section>
          </FadeIn>

          {/* What I Offer Section */}
          <FadeIn>
            <section className="space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-500" /> Key Specializations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.offers.map((offer, i) => (
                  <div 
                    key={i} 
                    className="p-5 rounded-xl border bg-slate-50 border-slate-200 dark:bg-white/5 dark:border-white/5 space-y-2 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                  >
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {offer.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {offer.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* Experience Highlights Section */}
          <FadeIn>
            <section className="space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" /> Proven Track Record
              </h2>
              <div className="p-6 rounded-2xl border bg-slate-50 border-slate-200 dark:bg-white/5 dark:border-white/5 space-y-6">
                <p className="text-sm md:text-base text-slate-650 dark:text-slate-400 leading-relaxed font-medium">
                  {service.experienceHighlight}
                </p>
                <ul className="space-y-3.5 pl-1">
                  {service.caseStudies.map((caseStudy, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span>{caseStudy}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </FadeIn>

          {/* Development Process Section */}
          <FadeIn>
            <section className="space-y-8">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <Cpu className="w-5 h-5 text-indigo-500" /> My Development Process
              </h2>
              <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 pl-6 space-y-8">
                {service.process.map((step, i) => (
                  <div key={i} className="relative">
                    {/* Bullet marker */}
                    <div className="absolute -left-[35px] top-0.5 w-4 h-4 rounded-full border-2 border-blue-500 bg-white dark:bg-[#0B1120] flex items-center justify-center font-bold text-[8px] text-blue-500" />
                    <div className="space-y-2">
                      <span className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest">
                        Step {step.step}
                      </span>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>
        </div>

        {/* Right Column: Tech Specs & Contact Card Sticky (Span 1) */}
        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-24">
          
          {/* Tech Stack Spec List */}
          <FadeIn delay={0.1}>
            <div className="p-6 rounded-2xl border bg-slate-50 border-slate-200 dark:bg-white/5 dark:border-white/5 space-y-6">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg border-b border-slate-200 dark:border-slate-800 pb-3">
                Technical Stack
              </h3>
              <div className="space-y-4">
                {service.technologies.map((cat, i) => (
                  <div key={i} className="space-y-2">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {cat.name}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((item, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Quick Connect CTA Card */}
          <FadeIn delay={0.2}>
            <div className="p-6 rounded-2xl border text-center transition-all bg-gradient-to-br from-blue-600 to-indigo-700 border-blue-700 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-3">
                Start Your Project
              </h3>
              <p className="text-blue-100 text-xs leading-relaxed mb-6">
                Connect directly to discuss deadlines, technical requirements, and custom specifications for your {service.id.replace(/-/g, " ")}.
              </p>
              <Link
                href={`/contact?subject=Inquiry: ${service.heading.replace("Hire Dedicated ", "")}`}
                className="block w-full py-3 text-center rounded-xl font-bold bg-white text-blue-700 hover:bg-blue-50 transition-colors shadow-md text-sm"
              >
                Inquire Service →
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* FAQs Section */}
      <FadeIn>
        <section className="mb-16 border-t border-slate-200 dark:border-slate-800/60 pt-12">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-3xl">
            {service.faqs.map((faq, i) => (
              <details 
                key={i} 
                className="group border-b border-slate-200 dark:border-slate-800/80 pb-5"
              >
                <summary className="flex justify-between items-center font-bold text-base md:text-lg cursor-pointer list-none select-none text-slate-900 dark:text-white group-open:text-blue-500 dark:group-open:text-blue-400 transition-colors">
                  <span>{faq.question}</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400">
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </summary>
                <div className="mt-3 text-slate-600 dark:text-slate-350 leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      </FadeIn>
      
    </div>
  );
}
