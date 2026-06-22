"use client";

import dynamic from 'next/dynamic';
import { motion } from "framer-motion";

const SaudiMap2 = dynamic(() => import('./SaudiMap2'), { ssr: false });

const BrandTile = ({ src, className = "" }: { src: string, className?: string }) => (
  <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center shrink-0 shadow-lg ${className}`}>
    <img src={src} className="w-full h-full object-cover" alt="Brand Art" />
  </div>
);

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] bg-[#ffefd0] flex flex-col items-center justify-center overflow-hidden font-sans pb-16 pt-[100px] sm:pt-[120px] lg:pt-[140px]" dir="rtl">
      {/* Placeholder for future Navbar matching map.scy.org.sa sizes */}
      <div className="absolute top-0 left-0 w-full h-[52px] sm:h-[64px] lg:h-[72px] bg-[#ffefd0]/40 backdrop-blur-md z-[100] border-b border-white/30 shadow-sm">
        <div className="relative mx-auto flex items-center justify-between h-full px-4 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          {/* Logo Placeholder */}
          <div className="h-7 sm:h-8 lg:h-10 w-24 bg-[#1C81AC]/20 rounded animate-pulse"></div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-4 w-16 bg-[#1C81AC]/20 rounded animate-pulse"></div>
            <div className="h-4 w-24 bg-[#1C81AC]/20 rounded animate-pulse"></div>
            <div className="h-4 w-24 bg-[#1C81AC]/20 rounded animate-pulse"></div>
            <div className="h-4 w-16 bg-[#1C81AC]/20 rounded animate-pulse"></div>
          </nav>

          {/* Right Side (Desktop Action / Mobile Hamburger) */}
          <div className="flex items-center gap-4">
            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="h-4 w-16 bg-[#1C81AC]/20 rounded animate-pulse"></div>
              <div className="h-10 w-24 rounded-full bg-[#1C81AC]/20 animate-pulse"></div>
            </div>
            
            {/* Mobile Hamburger Menu */}
            <button className="lg:hidden inline-flex items-center justify-center size-10 sm:size-11 rounded-2xl bg-[#1C81AC]/10 ring-1 ring-[#1C81AC]/20 text-[#1C81AC]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 sm:h-6 sm:w-6"><path d="M4 5h16M4 12h16M4 19h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Borders */}
      <div className="absolute top-[52px] sm:top-[64px] lg:top-[72px] left-0 right-0 flex w-full justify-between pointer-events-none z-0 opacity-90 md:opacity-100">
        <div className="flex">
          <BrandTile src="/svg/art-01-tl.svg" />
          <BrandTile src="/svg/art-01-tr.svg" />
          <BrandTile src="/svg/art-01-bl.svg" />
        </div>
        <div className="flex hidden md:flex">
          <BrandTile src="/svg/art-02-br.svg" />
          <BrandTile src="/svg/art-02-bl.svg" />
        </div>
      </div>

      <div className="absolute top-[100px] sm:top-[128px] lg:top-[152px] left-0 flex flex-col pointer-events-none z-0 opacity-90 md:opacity-100">
        <BrandTile src="/svg/art-02-tl.svg" />
        <BrandTile src="/svg/art-01-br.svg" />
      </div>

      <div className="absolute top-[100px] sm:top-[128px] lg:top-[152px] right-0 flex flex-col pointer-events-none z-0 opacity-90 md:opacity-100">
        <BrandTile src="/svg/art-03-bl.svg" />
        <BrandTile src="/svg/art-01-bl.svg" />
      </div>

      <div className="absolute bottom-12 sm:bottom-16 lg:bottom-20 left-0 flex flex-col pointer-events-none z-0 opacity-40 sm:opacity-90 md:opacity-100">
        {/* Sun is hidden for asymmetrical effect */}
        {/* <BrandTile src="/svg/art-02-tl.svg" /> */}
        <BrandTile src="/svg/art-03-tl.svg" />
      </div>

      <div className="absolute bottom-12 sm:bottom-16 lg:bottom-20 right-0 flex flex-col pointer-events-none z-0 opacity-40 sm:opacity-90 md:opacity-100">
        <BrandTile src="/svg/art-01-tl.svg" />
        <BrandTile src="/svg/art-03-tl-yellow.svg" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full flex-1 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row-reverse items-center justify-center lg:justify-between gap-8 lg:gap-4 px-6 py-4 lg:py-0 mt-8 lg:mt-0">
        
        {/* Interactive Saudi Map (Replaces old 3D Map) */}
        <motion.div 
          initial={{ opacity: 0, y: "-15vh", scale: 1.1 }}
          animate={{ opacity: 1, y: ["-15vh", "-15vh", "0vh"], scale: [1.1, 1.1, 1] }}
          transition={{ 
            opacity: { duration: 0.8 },
            y: { duration: 2.5, times: [0, 0.6, 1], ease: "easeInOut" },
            scale: { duration: 2.5, times: [0, 0.6, 1], ease: "easeInOut" }
          }}
          className="w-full lg:w-[55%] flex justify-center lg:justify-end z-20 max-h-[35vh] sm:max-h-[45vh] lg:max-h-[70vh] mt-4 lg:mt-0 mb-12 sm:mb-0"
        >
          <SaudiMap2 />
        </motion.div>

        {/* Text & Logo Area */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-[45%] flex flex-col items-center justify-center text-center z-20 -mt-6 sm:-mt-10 lg:-mt-40"
        >
          {/* Logo with Infinite Floating Animation */}
          <motion.div 
             className="mb-0 flex justify-center w-full relative"
             animate={{ y: [-4, 4, -4] }}
             transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
             {/* Entrance Animation Wrap */}
             <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ type: "spring", stiffness: 200, damping: 15, delay: 2.0 }}
             >
               <img src="/svg/Logo_cropped.svg" alt="Logo" className="w-[280px] sm:w-[320px] lg:w-[420px] object-contain drop-shadow-2xl" />
             </motion.div>
          </motion.div>

          {/* Text perfectly centered with the logo with its own entrance animation */}
          <motion.p 
            className="text-[#1D7671] text-lg sm:text-2xl md:text-3xl font-extrabold -mt-2 lg:-mt-6 mb-6 lg:mb-8 leading-[1.6] drop-shadow-sm max-w-[90%]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            وجهتك الأولى للإبداع، الابتكار،<br/>واكتشاف الذات في بيئة شبابية متكاملة
          </motion.p>
          
          {/* Buttons perfectly centered with their own entrance animation */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="bg-gradient-to-r from-[#ff9f9d] to-[#fd5c3d] text-white px-8 py-3 rounded-2xl text-lg font-bold shadow-lg hover:shadow-[0_10px_20px_rgba(253,92,61,0.3)] transition-all text-center"
            >
              سجل الآن
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              href="/discover"
              className="bg-[#ffefd0]/80 backdrop-blur-sm text-[#1D7671] border-2 border-[#1D7671] px-8 py-3 rounded-2xl text-lg font-bold hover:shadow-[0_10px_20px_rgba(29,118,113,0.15)] hover:bg-[#1D7671] hover:text-white transition-all shadow-lg text-center"
            >
              اكتشف المزيد
            </motion.a>
          </motion.div>
        </motion.div>
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
