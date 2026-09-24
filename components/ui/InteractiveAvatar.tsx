"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Zap, MessageCircle, X } from "lucide-react";

interface InteractiveAvatarProps {
  className?: string;
  imageSrc?: string;
  priority?: boolean;
}

export default function InteractiveAvatar({
  className = "",
  imageSrc = "/images/avatar-workspace.webp",
  priority = true,
}: InteractiveAvatarProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);
  const [speechMessage, setSpeechMessage] = useState("⚡ In deep focus mode: architecting scalable Laravel services.");
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile / touch devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px) or (hover: none)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Motion values for smooth 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Physics springs for natural card movement
  const springConfig = { damping: 24, stiffness: 240, mass: 0.7 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Rotate angles based on cursor position
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-9, 9]);

  // Dynamic light glare position
  const glareX = useTransform(smoothMouseX, [-0.5, 0.5], [15, 85]);
  const glareY = useTransform(smoothMouseY, [-0.5, 0.5], [15, 85]);
  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(circle 260px at ${gx}% ${gy}%, rgba(255, 255, 255, 0.5), transparent 75%)`
  );

  // Auto dismiss speech bubble after 15s or on manual close
  useEffect(() => {
    if (showSpeechBubble) {
      const timer = setTimeout(() => setShowSpeechBubble(false), 15000);
      return () => clearTimeout(timer);
    }
  }, [showSpeechBubble]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    if (!isMobile) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleCardClick = () => {
    const quotes = [
      "⚡ Architected high-throughput payment pipelines with resilient Redis caching & zero packet drop.",
      "💳 Integrated 10+ bank & international payment gateways with robust webhook signature verification.",
      "🚀 Built scalable, high-concurrency systems powering enterprise ERPs, HRM, and FinTech wallets.",
      "🔒 Enforcing strict standards: double-entry ledgers, idempotent transactions, and zero data leakage.",
      "☕ 5+ years of engineering experience delivering clean, testable domain code.",
      "🤝 Available for contract roles, backend architecture, and technical consulting.",
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setSpeechMessage(randomQuote);
    setShowSpeechBubble(true);
  };

  return (
    <div className={`relative flex items-center justify-center select-none w-full ${className}`}>
      {/* Ambient glowing backlight */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 bg-gradient-to-tr from-purple-600/30 via-indigo-500/20 to-emerald-500/25 rounded-[3rem] blur-3xl opacity-75 dark:opacity-60 animate-pulse pointer-events-none -z-10"
        style={{ animationDuration: "7s" }}
      />

      {/* Main 3D Perspective Container */}
      <div
        style={{ perspective: 1200 }}
        className="relative p-2 w-full flex justify-center items-center"
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleCardClick}
          style={{
            rotateX: isMobile ? 0 : rotateX,
            rotateY: isMobile ? 0 : rotateY,
            transformStyle: "preserve-3d",
          }}
          whileHover={!isMobile ? { scale: 1.02 } : {}}
          whileTap={{ scale: 0.98 }}
          className="relative group cursor-pointer w-full max-w-[340px] sm:max-w-[390px] md:max-w-[430px] lg:max-w-[460px] mx-auto rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-white/95 via-slate-50/90 to-white/80 dark:from-slate-800/90 dark:via-slate-900/90 dark:to-slate-950/95 border border-slate-200/90 dark:border-white/10 shadow-2xl shadow-purple-500/10 dark:shadow-purple-950/40 backdrop-blur-xl transition-all duration-300"
        >
          {/* Inner Image Frame (4:3 Aspect Ratio matching the workspace illustration) */}
          <div
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 shadow-inner ring-1 ring-black/5 dark:ring-white/10"
            style={{ transform: "translateZ(10px)" }}
          >
            <Image
              src={imageSrc}
              alt="Maksudur Rahman - Laravel Developer & FinTech Software Engineer at Workspace"
              fill
              priority={priority}
              sizes="(max-width: 640px) 340px, (max-width: 1024px) 430px, 460px"
              className="object-cover object-center filter brightness-[1.02] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Subtle atmospheric vignette */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"
            />

            {/* Dynamic Mouse Glare Overlay */}
            {!isMobile && (
              <motion.div
                aria-hidden="true"
                animate={{ opacity: isHovered ? 0.3 : 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 pointer-events-none mix-blend-overlay"
                style={{
                  background: glareBackground,
                }}
              />
            )}
          </div>

          {/* Floating Hotspot 1: Experience & Focus (Top Left) */}
          <motion.div
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transform: "translateZ(42px)" }}
            className="absolute -top-3 -left-2 sm:-top-3.5 sm:-left-3 z-20 pointer-events-none"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-purple-300 shadow-xl border border-purple-500/30 backdrop-blur-md">
              <Zap size={13} className="text-purple-600 dark:text-purple-400" />
              <span>5+ Yrs Experience</span>
            </div>
          </motion.div>

          {/* Floating Hotspot 2: Live Status (Top Right) */}
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            style={{ transform: "translateZ(45px)" }}
            className="absolute -top-3 -right-2 sm:-top-3.5 sm:-right-3 z-20 pointer-events-none"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-emerald-300 shadow-xl border border-emerald-500/30 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Hire</span>
            </div>
          </motion.div>

          {/* Interactive Technical Highlights Modal / Speech Bubble */}
          <AnimatePresence>
            {showSpeechBubble && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ type: "spring", damping: 22, stiffness: 320 }}
                style={{ transform: "translateZ(65px)" }}
                className="absolute inset-x-3 top-3 z-50 p-4 rounded-2xl bg-slate-900/98 dark:bg-slate-950/98 border border-purple-500/50 shadow-2xl shadow-purple-500/35 text-white backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-purple-400">
                    <MessageCircle size={14} className="text-amber-400" />
                    <span>Technical Architecture:</span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowSpeechBubble(false);
                    }}
                    className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors"
                    aria-label="Close message"
                  >
                    <X size={14} />
                  </button>
                </div>
                <p className="text-xs leading-relaxed text-slate-100 font-medium">
                  {speechMessage}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
