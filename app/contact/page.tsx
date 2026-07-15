import { FadeIn } from "@/components/ui/framer-wrapper";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Globe } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";
import { Suspense } from "react";

export const metadata = {
  title: "Contact Me",
  description: "Get in touch for freelance, contract, or full-time remote engineering opportunities.",
};

export default function ContactPage() {
  return (
    <div className="py-12 max-w-7xl mx-auto pt-16 md:pt-0">

      {/* Header */}
      <FadeIn>
        <h1 className="text-4xl pt-10 md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Let's Work <span className="text-blue-500">Together</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl">
          Have a project in mind or want to discuss a full-time opportunity?
          I'm currently available for freelance and remote roles.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* Left Side: Contact Info & Socials */}
        <FadeIn delay={0.1}>
          <div className="space-y-8">
            <div className="bg-slate-50 border border-slate-200 dark:bg-white/5 dark:border-white/10 p-6 rounded-2xl">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Globe size={20} className="text-blue-500" /> Contact Info
              </h2>

              <div className="space-y-4">
                <a href="mailto:maksudur.dev02@gmail.com" className="flex items-center gap-4 text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors group">
                  <div className="p-3 bg-slate-100 dark:bg-white/5 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Email</p>
                    <p className="font-medium">maksudur.dev02@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                  <div className="p-3 bg-slate-100 dark:bg-white/5 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Location</p>
                    <p className="font-medium">Remote / Dhaka, BD</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                  <div className="p-3 bg-slate-100 dark:bg-white/5 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Availability</p>
                    <p className="font-medium text-emerald-600 dark:text-emerald-400">Open for work</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-50 border border-slate-200 dark:bg-white/5 dark:border-white/10 p-6 rounded-2xl">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Connect with Me</h2>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/valiantboymaksud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-slate-100 hover:bg-slate-200 border border-slate-200 hover:border-slate-300 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/5 dark:hover:border-slate-500/30 rounded-xl transition-all hover:-translate-y-1 group"
                >
                  <Github size={24} className="text-slate-550 group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white transition-colors" />
                  <span className="font-medium text-slate-750 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white">GitHub</span>
                </a>

                <a
                  href="http://linkedin.com/in/maksudur-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-slate-100 hover:bg-slate-200 border border-slate-200 hover:border-slate-300 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/5 dark:hover:border-blue-500/30 rounded-xl transition-all hover:-translate-y-1 group"
                >
                  <Linkedin size={24} className="text-slate-550 group-hover:text-blue-500 dark:text-slate-400 dark:group-hover:text-blue-500 transition-colors" />
                  <span className="font-medium text-slate-750 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white">LinkedIn</span>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-slate-100 hover:bg-slate-200 border border-slate-200 hover:border-slate-300 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/5 dark:hover:border-sky-500/30 rounded-xl transition-all hover:-translate-y-1 group"
                >
                  <Twitter size={24} className="text-slate-550 group-hover:text-sky-500 dark:text-slate-400 dark:group-hover:text-sky-500 transition-colors" />
                  <span className="font-medium text-slate-750 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white">Twitter</span>
                </a>

                <a
                  href="https://kodersolution.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-slate-100 hover:bg-slate-200 border border-slate-200 hover:border-slate-300 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/5 dark:hover:border-purple-500/30 rounded-xl transition-all hover:-translate-y-1 group"
                >
                  <Globe size={24} className="text-slate-550 group-hover:text-purple-500 dark:text-slate-400 dark:group-hover:text-purple-500 transition-colors" />
                  <span className="font-medium text-slate-750 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white">Portfolio</span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Right Side: Contact Form */}
        <FadeIn delay={0.2} className="sticky top-24">
          <Suspense fallback={
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl animate-pulse space-y-6">
              <div className="h-8 bg-slate-800 rounded w-1/3"></div>
              <div className="grid grid-cols-2 gap-6">
                <div className="h-12 bg-slate-800 rounded"></div>
                <div className="h-12 bg-slate-800 rounded"></div>
              </div>
              <div className="h-12 bg-slate-800 rounded"></div>
              <div className="h-32 bg-slate-800 rounded"></div>
              <div className="h-12 bg-slate-800 rounded"></div>
            </div>
          }>
            <ContactForm />
          </Suspense>
        </FadeIn>

      </div>
    </div>
  );
}