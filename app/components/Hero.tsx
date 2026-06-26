"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FloatingParticles = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Generate beautiful floating particles
    const newParticles = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 6 + 3,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * -20,
      opacity: Math.random() * 0.5 + 0.2,
      xOffset: Math.random() * 100 - 50,
    }));
    setParticles(newParticles);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-[#0c7fae] rounded-full shadow-[0_0_12px_rgba(12,127,174,0.9)]"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            bottom: -20,
          }}
          animate={{
            y: ["0vh", "-120vh"],
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

export default function Hero() {
  return (
    <section 
      className="relative w-full min-h-[100dvh] flex flex-col overflow-hidden font-sans bg-[#ffefd0]" 
      dir="rtl"
    >
      <div className="absolute top-[52px] sm:top-[64px] lg:top-[72px] inset-x-0 bottom-0 z-0 overflow-hidden">
        {/* Mobile Background */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 md:hidden origin-top"
        >
          <Image
            src="/mobile.png"
            alt="Background Mobile"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover object-top"
            priority
          />
        </motion.div>
        
        {/* Desktop Background */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 hidden md:block origin-top"
        >
          <Image
            src="/desktop.png"
            alt="Background Desktop"
            fill
            sizes="(max-width: 1024px) 100vw, 100vw"
            className="object-cover object-top"
            priority
          />
        </motion.div>
      </div>

      <FloatingParticles />

      {/* Temporary Navbar */}
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
      
      {/* Content Section */}
      <>
        {/* === Desktop Layout (Hidden on Mobile) === */}
        <div className="hidden lg:flex absolute inset-y-0 right-12 xl:right-24 items-center z-20 pointer-events-none">
          {/* GROUP CONTAINER */}
          <div className="flex flex-col items-start gap-4 max-w-2xl w-full pointer-events-auto">
            
            {/* Top Logo (Anchored to Bottom to sit close to text) */}
            <div className="relative w-full h-56 xl:h-80">
              <Image 
                src="/Logo.svg" 
                alt="Logo" 
                fill
                sizes="(max-width: 1024px) 100vw, 672px"
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* Text (Aligned to RTL Start / Right) */}
            <div className="relative flex flex-col gap-4 text-right w-full z-10">
              {/* Glowing Spotlight Behind Text */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[160%] bg-white/70 rounded-[100%] blur-[80px] pointer-events-none z-[-1]"
                animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
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

            {/* Bottom Logo (Anchored to Top to sit close to text) */}
            <div className="relative w-full h-56 xl:h-72 mt-2">
              <Image 
                src="/summer shine.svg" 
                alt="Summer Shine" 
                fill
                sizes="(max-width: 1024px) 100vw, 672px"
                className="object-contain object-top"
              />
            </div>
          </div>
        </div>

        {/* === Mobile Layout (Hidden on Desktop) === */}
        <div className="flex lg:hidden absolute inset-0 items-center justify-center z-20 pointer-events-none">
          {/* GROUP CONTAINER */}
          <div className="flex flex-col items-center gap-2 px-6 max-w-md w-full pointer-events-auto">
            
            {/* Top Logo (Anchored to Bottom to sit close to text) */}
            <div className="relative w-full h-48 sm:h-56">
              <Image 
                src="/Logo.svg" 
                alt="Logo" 
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* Text (Centered for better mobile wrapping) */}
            <div className="relative flex flex-col gap-4 text-center w-full z-10">
              {/* Glowing Spotlight Behind Text */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[180%] bg-white/70 rounded-[100%] blur-[60px] pointer-events-none z-[-1]"
                animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
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

            {/* Bottom Logo (Anchored to Top to sit close to text) */}
            <div className="relative w-full h-40 sm:h-56 mt-2">
              <Image 
                src="/summer shine.svg" 
                alt="Summer Shine" 
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-contain object-top"
              />
            </div>
          </div>
        </div>
      </>
    </section>
  );
}
