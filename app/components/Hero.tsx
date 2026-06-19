"use client";

import dynamic from 'next/dynamic';
import { motion } from "framer-motion";

const SaudiMap = dynamic(() => import('./SaudiMap'), { ssr: false });

const BrandTile = ({ src, className = "" }: { src: string, className?: string }) => (
  <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center shrink-0 shadow-lg ${className}`}>
    <img src={src} className="w-full h-full object-cover" alt="Brand Art" />
  </div>
);

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#ffefd0] flex flex-col items-center justify-center overflow-hidden font-sans pb-16 pt-10" dir="rtl">
      
      {/* Decorative Borders */}
      <div className="absolute top-0 left-0 right-0 flex w-full justify-between pointer-events-none z-0 opacity-90 md:opacity-100">
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

      <div className="absolute top-16 left-0 flex flex-col pointer-events-none z-0 opacity-90 md:opacity-100">
        <BrandTile src="/svg/art-02-tl.svg" />
        <BrandTile src="/svg/art-01-br.svg" />
      </div>

      <div className="absolute top-16 right-0 flex flex-col pointer-events-none z-0 opacity-90 md:opacity-100">
        <BrandTile src="/svg/art-03-bl.svg" />
        <BrandTile src="/svg/art-01-bl.svg" />
      </div>

      <div className="absolute bottom-20 left-0 flex flex-col pointer-events-none z-0 opacity-90 md:opacity-100">
        <BrandTile src="/svg/art-02-tl.svg" />
        <BrandTile src="/svg/art-02-tr.svg" />
      </div>

      <div className="absolute bottom-20 right-0 flex flex-col pointer-events-none z-0 opacity-90 md:opacity-100">
        <BrandTile src="/svg/art-01-tl.svg" />
        <BrandTile src="/svg/art-03-tl.svg" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-4 px-6 h-full">
        
        {/* Interactive Saudi Map (Replaces old 3D Map) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[55%] flex justify-center lg:justify-end z-20 max-h-[50vh] lg:max-h-[70vh]"
        >
          <SaudiMap />
        </motion.div>

        {/* Text & Logo Area */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-[45%] flex flex-col items-center justify-center text-center z-20"
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
               transition={{ type: "spring", stiffness: 200, damping: 15 }}
             >
               <img src="/svg/Logo_cropped.svg" alt="Logo" className="w-[240px] sm:w-[320px] lg:w-[420px] object-contain drop-shadow-2xl" />
             </motion.div>
          </motion.div>

          {/* Text perfectly centered with the logo with its own entrance animation */}
          <motion.p 
            className="text-[#1D7671] text-xl sm:text-2xl md:text-3xl font-extrabold mt-2 mb-8 leading-[1.6] drop-shadow-sm max-w-[90%]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            وجهتك الأولى للإبداع، الابتكار،<br/>واكتشاف الذات في بيئة شبابية متكاملة
          </motion.p>
          
          {/* Buttons perfectly centered with their own entrance animation */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
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
              href="#"
              className="bg-[#ffefd0]/80 backdrop-blur-sm text-[#1D7671] border-2 border-[#1D7671] px-8 py-3 rounded-2xl text-lg font-bold hover:shadow-[0_10px_20px_rgba(29,118,113,0.15)] hover:bg-[#1D7671] hover:text-white transition-all shadow-lg text-center"
            >
              اكتشف المزيد
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Bottom Waves (Glassmorphism) */}
      <div className="absolute bottom-0 left-0 w-full h-12 sm:h-16 md:h-20 lg:h-24 z-10 pointer-events-none overflow-hidden">
        
        {/* Back Wave (Light Teal Glass) */}
        <motion.div 
          className="absolute bottom-0 left-0 h-[85%] flex w-max"
          animate={{ x: ["-12.5%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {[...Array(8)].map((_, i) => (
            <div 
              key={`back-${i}`}
              className="h-full aspect-[421.1/43.11] bg-[#83e6d6]/30 backdrop-blur-sm"
              style={{ 
                WebkitMaskImage: "url('/svg/wave-line-teal.svg')", 
                maskImage: "url('/svg/wave-line-teal.svg')", 
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%'
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
              className="h-full aspect-[421.1/43.11] bg-[#0068a1]/30 backdrop-blur-md"
              style={{ 
                WebkitMaskImage: "url('/svg/wave-line-blue.svg')", 
                maskImage: "url('/svg/wave-line-blue.svg')", 
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%'
              }} 
            />
          ))}
        </motion.div>
      </div>

    </section>
  );
}
