"use client";

export default function StormBackground() {
  return (
    <div 
      className="fixed inset-0 -z-10 pointer-events-none bg-white dark:bg-[#0B1120] transition-colors duration-300"
      aria-hidden="true"
    >
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      
      {/* Soft Ambient Glow - Refined and non-intrusive */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-500/5 dark:bg-blue-600/10 blur-[120px] rounded-full" />
    </div>
  );
}