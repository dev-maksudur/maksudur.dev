"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Github, Linkedin, Mail, Briefcase, User, FolderOpen,
  Sun, Moon, Home
} from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { useTheme } from "./ThemeProvider";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Profile", href: "/profile/", icon: User },
  { name: "Experience", href: "/experience/", icon: Briefcase },
  { name: "Projects", href: "/projects/", icon: FolderOpen },
  { name: "Contact", href: "/contact/", icon: Mail },
];

const normalizePath = (path: string | null) => {
  if (!path) return "/";
  const trimmed = path.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  const pathname = usePathname();
  const currentPath = normalizePath(pathname);

  const SidebarContent = () => (
    <nav className="flex flex-col h-full justify-between py-8">
      {/* Top Section */}
      <div className="px-6">
        {/* Profile */}
        <Link href="/" className="flex items-center gap-3 mb-10 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-blue-500/50 group-hover:ring-blue-500 transition-all shadow-lg">
            <img
              src="/images/maksudur.webp"
              alt="Maksudur Rahman - Senior Laravel Developer & PHP Software Engineer | Founder of Kodersolution"
              title="Maksudur Rahman - Senior Laravel Developer & Software Engineer"
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <span className="text-lg font-bold dark:text-white text-slate-900 tracking-tight block">Maksudur Rahman</span>
            <p className="text-xs text-blue-500 dark:text-blue-400 font-medium uppercase tracking-wider">Software Engineer</p>
          </div>
        </Link>

        {/* Navigation */}
        <ul className="space-y-1">
          {navItems.map((item) => {
            const targetPath = normalizePath(item.href);
            const isActive =
              targetPath === "/"
                ? currentPath === "/"
                : currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-lg transition-all duration-200 text-sm gap-3",
                    isActive
                      ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/25"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 font-medium"
                  )}
                >
                  <Icon size={18} className={isActive ? "text-white" : "text-slate-500 dark:text-slate-400"} />
                  {item.name}
                </Link>
              </li>
            );
          })}

          {/* Animated Download CV Button */}
          <li>
            <a
              href="/files/Maksudur_Rahman.pdf"
              download
              className="flex items-center justify-center px-4 py-3 mt-2 rounded-lg font-bold text-white bg-gradient-to-r from-[#6a2cff] via-[#8b5cf6] to-[#ff8a00] bg-[length:200%_200%] animate-gradientHover hover:scale-105 transition-all text-sm shadow-md"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>

      {/* Bottom Section: Socials, Theme Toggle */}
      <div className="px-6">
        <div className="flex gap-2 items-center justify-between">
          <div className="flex gap-2">
            <a
              href="https://wa.me/maksudur.dev"
              aria-label="WhatsApp Contact"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg dark:bg-white/5 bg-slate-100 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all"
            >
              <WhatsAppIcon size={18} />
            </a>
            <a
              href="https://github.com/dev-maksudur"
              aria-label="GitHub Profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg dark:bg-white/5 bg-slate-100 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="http://linkedin.com/in/maksudur-dev"
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg dark:bg-white/5 bg-slate-100 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:maksudur.dev02@gmail.com"
              aria-label="Email Address"
              className="p-2 rounded-lg dark:bg-white/5 bg-slate-100 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg dark:bg-white/5 bg-slate-100 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-yellow-400 transition-all"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        animate={{ x: 0 }}
        className="hidden md:flex fixed left-0 top-0 h-screen w-[280px] dark:bg-[#0B1120]/95 bg-white/95 backdrop-blur-xl border-r border-slate-200 dark:border-white/5 flex-col z-40"
      >
        <SidebarContent />
      </motion.aside>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 w-full h-16 dark:bg-[#0B1120]/95 bg-white/95 backdrop-blur-md border-b border-slate-200 dark:border-white/10 z-50 px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-blue-500/30 group-hover:ring-blue-500 transition-all">
            <img
              src="/images/maksudur.webp"
              alt="Maksudur Rahman - Senior Laravel Developer & PHP Software Engineer"
              title="Maksudur Rahman - Software Engineer"
              width={32}
              height={32}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">Maksudur Rahman</span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          className="text-slate-900 dark:text-white p-2 bg-slate-100 dark:bg-white/5 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden fixed top-0 left-0 h-screen w-[280px] dark:bg-[#0B1120] bg-white z-50 border-r border-slate-200 dark:border-white/10 overflow-y-auto"
          >
            <div className="pt-4 h-full">
              <SidebarContent />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>
    </>
  );
}
