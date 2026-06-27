"use client";

import dynamic from 'next/dynamic';
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SaudiMap2 = dynamic(() => import('./SaudiMap2'), { ssr: false });

const FloatingParticles = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
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

export default function Hero1() {
  return (
    <section className="relative w-full min-h-[100dvh] bg-[#ffefd0] flex flex-col items-center justify-center overflow-hidden font-sans pb-16 pt-[100px] sm:pt-[120px] lg:pt-[140px]" dir="rtl">
      
      <FloatingParticles />

      {/* Placeholder for future Navbar matching map.scy.org.sa sizes */}
      <div className="absolute top-0 left-0 w-full h-[52px] sm:h-[64px] lg:h-[72px] bg-[#ffefd0]/40 backdrop-blur-md z-[100] border-b border-white/30 shadow-sm">
        <div className="relative mx-auto flex items-center justify-between h-full px-4 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="h-7 sm:h-8 lg:h-10 w-24 bg-[#1C81AC]/20 rounded animate-pulse"></div>
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-4 w-16 bg-[#1C81AC]/20 rounded animate-pulse"></div>
            <div className="h-4 w-24 bg-[#1C81AC]/20 rounded animate-pulse"></div>
            <div className="h-4 w-24 bg-[#1C81AC]/20 rounded animate-pulse"></div>
            <div className="h-4 w-16 bg-[#1C81AC]/20 rounded animate-pulse"></div>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4">
              <div className="h-4 w-16 bg-[#1C81AC]/20 rounded animate-pulse"></div>
              <div className="h-10 w-24 rounded-full bg-[#1C81AC]/20 animate-pulse"></div>
            </div>
            <button className="lg:hidden inline-flex items-center justify-center size-10 sm:size-11 rounded-2xl bg-[#1C81AC]/10 ring-1 ring-[#1C81AC]/20 text-[#1C81AC]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 sm:h-6 sm:w-6"><path d="M4 5h16M4 12h16M4 19h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full flex-1 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row-reverse items-center justify-center lg:justify-between gap-8 lg:gap-4 px-6 py-4 lg:py-0 mt-8 lg:mt-0">
        
        {/* Interactive Saudi Map */}
        <motion.div 
          initial={{ opacity: 0, y: "-15vh", scale: 1.1 }}
          animate={{ opacity: 1, y: ["-15vh", "-15vh", "0vh"], scale: [1.1, 1.1, 1] }}
          transition={{ 
            opacity: { duration: 0.8 },
            y: { duration: 2.5, times: [0, 0.6, 1], ease: "easeInOut" },
            scale: { duration: 2.5, times: [0, 0.6, 1], ease: "easeInOut" }
          }}
          className="absolute lg:relative inset-0 lg:inset-auto m-auto lg:m-0 flex justify-center lg:justify-end items-center lg:items-start w-full lg:w-[55%] z-0 lg:z-20 max-h-[45vh] lg:max-h-[70vh] mt-4 lg:mt-0 lg:mb-0"
        >
          <SaudiMap2 />
        </motion.div>

        {/* === Mobile Text Layout (Hidden on Desktop) === */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
          className="w-full lg:hidden flex flex-col items-center text-center z-10 pointer-events-auto"
        >
          {/* Top Logo */}
          <div className="relative w-full h-48 sm:h-56">
            <Image 
              src="/Logo.svg" 
              alt="Logo" 
              fill
              sizes="(max-width: 1024px) 100vw, 672px"
              className="object-contain object-bottom"
              priority
            />
          </div>

          {/* Text Area */}
          <div className="relative flex flex-col gap-4 w-full z-10 py-2">
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

          {/* Bottom Logo */}
          <div className="relative w-full h-40 sm:h-56 mt-2">
            <Image 
              src="/summer shine.svg" 
              alt="Summer Shine" 
              fill
              sizes="(max-width: 1024px) 100vw, 672px"
              className="object-contain object-top"
            />
          </div>
        </motion.div>

        {/* === Desktop Text Layout (Hidden on Mobile) === */}
        <div className="hidden lg:flex absolute inset-y-0 right-4 xl:right-12 items-center z-20 pointer-events-none">
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
      </div>

      {/* Animated Bottom Waves (Glassmorphism) */}
      <div className="absolute bottom-0 left-0 w-full h-8 sm:h-10 md:h-12 lg:h-16 z-10 pointer-events-none overflow-hidden" style={{ transform: 'translateZ(0)' }}>
        
        {/* Back Wave (Light Teal Glass) */}
        <motion.div 
          className="absolute bottom-0 left-0 h-[85%] flex w-max"
          animate={{ x: ["-12.5%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {[...Array(8)].map((_, i) => (
            <div 
              key={`back-${i}`}
              className="h-full aspect-[421.1/43.11] bg-[#83e6d6]/30 backdrop-blur-sm -mx-[1px] shrink-0"
              style={{ 
                WebkitMaskImage: "url('/svg/wave-line-teal.svg')", 
                maskImage: "url('/svg/wave-line-teal.svg')", 
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                transform: 'translateZ(0)'
              }} 
            />
          ))}
        </motion.div>
        
        {/* Front Wave (Dark Blue Glass) */}
        <motion.div 
          className="absolute bottom-0 left-0 h-full flex w-max"
          animate={{ x: ["0%", "-12.5%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...Array(8)].map((_, i) => (
            <div 
              key={`front-${i}`}
              className="h-full aspect-[421.1/43.11] bg-[#0068a1]/30 backdrop-blur-md -mx-[1px] shrink-0"
              style={{ 
                WebkitMaskImage: "url('/svg/wave-line-blue.svg')", 
                maskImage: "url('/svg/wave-line-blue.svg')", 
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                transform: 'translateZ(0)'
              }} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
