"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedVoidOverlay from "./AnimatedVoidOverlay";
import ParticlesLayer from "./ParticlesLayer";

export default function Hero() {
  return (
    <section 
      className="relative w-full min-h-[100dvh] bg-[#0A1A2F] flex flex-col overflow-hidden font-sans" 
      dir="rtl"
    >
      {/* Background Image & Premium Overlay */}
      <motion.div 
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/background.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <AnimatedVoidOverlay />
      </motion.div>

      {/* Temporary Navbar */}
      <div className="absolute top-0 left-0 w-full h-[52px] sm:h-[64px] lg:h-[72px] bg-white/5 backdrop-blur-md z-[100] border-b border-white/10 shadow-sm">
        <div className="relative mx-auto flex items-center justify-between h-full px-4 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          {/* Logo Placeholder */}
          <div className="h-7 sm:h-8 lg:h-10 w-24 bg-white/20 rounded animate-pulse"></div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-4 w-16 bg-white/20 rounded animate-pulse"></div>
            <div className="h-4 w-24 bg-white/20 rounded animate-pulse"></div>
            <div className="h-4 w-24 bg-white/20 rounded animate-pulse"></div>
            <div className="h-4 w-16 bg-white/20 rounded animate-pulse"></div>
          </nav>

          {/* Right Side (Desktop Action / Mobile Hamburger) */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4">
              <div className="h-4 w-16 bg-white/20 rounded animate-pulse"></div>
              <div className="h-10 w-24 rounded-full bg-white/20 animate-pulse"></div>
            </div>
            
            <button className="lg:hidden inline-flex items-center justify-center size-10 sm:size-11 rounded-2xl bg-white/10 ring-1 ring-white/20 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 sm:h-6 sm:w-6"><path d="M4 5h16M4 12h16M4 19h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Right section with Logo and Text - Premium Glassmorphism Card */}
      <div className="relative z-20 flex-1 flex items-center justify-start px-4 sm:px-8 lg:px-16 w-full pt-20">
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white/10 backdrop-blur-2xl border border-white/20 p-10 md:p-14 lg:p-16 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col items-center gap-8 md:gap-10 max-w-lg w-full"
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-[2.5rem] pointer-events-none" />

          {/* Logo with smooth floating animation */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <Image 
              src="/Logo.svg" 
              alt="Logo" 
              width={300} 
              height={300} 
              className="object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
              priority
            />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="relative z-10 w-full"
          >
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold text-center leading-[1.4] drop-shadow-lg font-sans">
              أكثر من <span className="text-[#ffefd0] bg-white/10 px-4 py-1 rounded-2xl backdrop-blur-sm border border-white/20 inline-block mx-1 shadow-[0_0_20px_rgba(255,239,208,0.3)]">210</span> نادي شبابي في مكان واحد
            </h1>
          </motion.div>

          {/* Decorative shapes attached to the card for that premium design feel */}
          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [0, 15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-[#1D7671] to-[#1C81AC] rounded-full blur-[40px] opacity-60 z-[-1]"
          />
          <motion.div 
            animate={{ y: [10, -10, 10], rotate: [0, -15, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-[#e87858] to-[#fd5c3d] rounded-full blur-[50px] opacity-40 z-[-1]"
          />
        </motion.div>
      </div>

      {/* Top-level particles overlay covering everything including the card */}
      <ParticlesLayer />
    </section>
  );
}

