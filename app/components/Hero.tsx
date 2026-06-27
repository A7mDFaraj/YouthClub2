"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/* ────────────────────────────────────────────
   Floating Particles — contained & GPU-only
   ──────────────────────────────────────────── */
const FloatingParticles = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      // Keep particles away from edges (10%-90%) to prevent any overflow
      left: `${10 + Math.random() * 80}%`,
      size: Math.random() * 5 + 3,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * -20,
      opacity: Math.random() * 0.4 + 0.2,
      // Clamp horizontal drift to ±15px — no edge overflow
      xOffset: Math.round(Math.random() * 30 - 15),
    }));
    setParticles(newParticles);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div
      className="absolute inset-0 z-10 pointer-events-none"
      style={{ overflow: "clip" }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-[#0c7fae] rounded-full"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            bottom: -20,
            boxShadow: "0 0 10px rgba(12,127,174,0.7)",
            willChange: "transform, opacity",
          }}
          animate={{
            y: ["0vh", "-110vh"],
            x: ["0px", `${p.xOffset}px`],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

/* ────────────────────────────────────────────
   Hero Section
   ──────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      className="relative w-full h-[100dvh] flex flex-col font-sans bg-[#ffefd0]"
      dir="rtl"
      style={{
        /* overflow:clip is stronger than overflow:hidden on iOS Safari —
           it prevents ALL content from leaking out, including transforms */
        overflow: "clip",
        /* Create an isolated compositing layer for the entire section */
        contain: "layout style paint",
        WebkitTransform: "translateZ(0)",
      }}
    >
      {/* ── CSS-only background zoom (GPU composited, no layout reflow) ── */}
      <style>{`
        @keyframes hero-zoom {
          0%   { transform: translate3d(0,0,0) scale(1.04); }
          50%  { transform: translate3d(0,0,0) scale(1.08); }
          100% { transform: translate3d(0,0,0) scale(1.04); }
        }
        .hero-bg-zoom {
          will-change: transform;
          animation: hero-zoom 20s ease-in-out infinite;
          transform-origin: top center;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.45; }
          50%      { opacity: 0.85; }
        }
        .hero-glow {
          animation: glow-pulse 5s ease-in-out infinite;
          will-change: opacity;
        }
      `}</style>

      {/* Background image container */}
      <div
        className="absolute top-[52px] sm:top-[64px] lg:top-[72px] inset-x-0 bottom-0 z-0"
        style={{ overflow: "clip" }}
      >
        {/* Mobile Background */}
        <div className="absolute inset-0 md:hidden hero-bg-zoom">
          <Image
            src="/mobile.png"
            alt="Background Mobile"
            fill
            sizes="(max-width: 768px) 100vw, 0vw"
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Desktop Background */}
        <div className="absolute inset-0 hidden md:block hero-bg-zoom">
          <Image
            src="/desktop.png"
            alt="Background Desktop"
            fill
            sizes="(min-width: 769px) 100vw, 0vw"
            className="object-cover object-top"
            priority
          />
        </div>
      </div>

      <FloatingParticles />

      {/* ── Navbar ── */}
      <div className="absolute top-0 left-0 w-full h-[52px] sm:h-[64px] lg:h-[72px] bg-black/5 backdrop-blur-md z-[100] border-b border-black/10 shadow-sm">
        <div className="relative mx-auto flex items-center justify-between h-full px-4 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="h-7 sm:h-8 lg:h-10 w-24 bg-black/10 rounded"></div>
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-4 w-16 bg-black/10 rounded"></div>
            <div className="h-4 w-24 bg-black/10 rounded"></div>
            <div className="h-4 w-24 bg-black/10 rounded"></div>
            <div className="h-4 w-16 bg-black/10 rounded"></div>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4">
              <div className="h-4 w-16 bg-black/10 rounded"></div>
              <div className="h-10 w-24 rounded-full bg-black/10"></div>
            </div>
            <button className="lg:hidden inline-flex items-center justify-center size-10 sm:size-11 rounded-2xl bg-black/5 ring-1 ring-black/10 text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 sm:h-6 sm:w-6"><path d="M4 5h16M4 12h16M4 19h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <>
        {/* === Desktop Layout === */}
        <div className="hidden lg:flex absolute inset-y-0 right-12 xl:right-24 items-center z-20 pointer-events-none">
          <div className="flex flex-col items-start gap-4 max-w-2xl w-full pointer-events-auto">
            {/* Top Logo */}
            <div className="relative w-full h-56 xl:h-80">
              <Image
                src="/Logo.svg"
                alt="Logo"
                fill
                sizes="672px"
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* Text */}
            <div className="relative flex flex-col gap-4 text-right w-full z-10">
              {/* Glowing Spotlight Behind Text */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[160%] bg-white/70 rounded-[100%] blur-[80px] pointer-events-none z-[-1] hero-glow"
              />
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-[#0B7FAE] text-6xl xl:text-7xl font-black leading-[1.15] tracking-tight relative z-10"
              >
                منصة وطنية موحّدة
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="text-[#BEC1CE] text-2xl xl:text-3xl font-medium leading-[1.6] relative z-10"
              >
                لأكثر من 200 نادي تنفذها الجمعيات الشبابية بالمملكة
              </motion.p>
            </div>

            {/* Bottom Logo */}
            <div className="relative w-full h-56 xl:h-72 mt-2">
              <Image
                src="/summer shine.svg"
                alt="Summer Shine"
                fill
                sizes="672px"
                className="object-contain object-top"
              />
            </div>
          </div>
        </div>

        {/* === Mobile Layout === */}
        <div className="flex lg:hidden absolute inset-0 items-center justify-center z-20 pointer-events-none">
          <div className="flex flex-col items-center gap-2 px-6 max-w-md w-full pointer-events-auto">
            {/* Top Logo */}
            <div className="relative w-full h-48 sm:h-56">
              <Image
                src="/Logo.svg"
                alt="Logo"
                fill
                sizes="448px"
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* Text */}
            <div className="relative flex flex-col gap-4 text-center w-full z-10">
              {/* Glowing Spotlight Behind Text */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[180%] bg-white/70 rounded-[100%] blur-[60px] pointer-events-none z-[-1] hero-glow"
              />
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-[#0B7FAE] text-4xl sm:text-5xl font-black leading-[1.2] tracking-tight relative z-10"
              >
                منصة وطنية موحّدة
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="text-[#BEC1CE] text-lg sm:text-xl font-medium leading-[1.6] max-w-[280px] mx-auto relative z-10"
              >
                لأكثر من 200 نادي تنفذها الجمعيات الشبابية بالمملكة
              </motion.p>
            </div>

            {/* Bottom Logo */}
            <div className="relative w-full h-40 sm:h-56 mt-2">
              <Image
                src="/summer shine.svg"
                alt="Summer Shine"
                fill
                sizes="448px"
                className="object-contain object-top"
              />
            </div>
          </div>
        </div>
      </>
    </section>
  );
}
