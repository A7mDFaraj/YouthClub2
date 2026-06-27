"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";

const BrandTile = ({ src, className = "" }: { src: string, className?: string }) => (
  <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center shrink-0 opacity-10 md:opacity-20 ${className}`}>
    <img src={src} className="w-full h-full object-cover" alt="Brand Art" />
  </div>
);

const PartnerPlaceholder = ({ label, src, alt }: { label?: string, src?: string, alt?: string }) => (
  <div className="relative w-full aspect-[3/2] sm:aspect-[4/3] rounded-[2.5rem] bg-[#004a75]/5 backdrop-blur-xl shadow-[0_15px_50px_rgba(0,104,161,0.1)] border border-[#004a75]/10 flex flex-col items-center justify-center overflow-hidden group hover:shadow-[0_20px_60px_rgba(0,104,161,0.2)] transition-all duration-500">
    {/* Decorative background circle */}
    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#004a75]/10 to-transparent rounded-bl-full transition-transform duration-700 group-hover:scale-[1.35] origin-top-right"></div>
    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#83e6d6]/30 to-transparent rounded-tr-full transition-transform duration-700 group-hover:scale-[1.35] origin-bottom-left"></div>
    
    <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-[2rem] bg-white/40 backdrop-blur-md shadow-inner border border-[#004a75]/10 flex items-center justify-center transition-all duration-500 group-hover:border-[#004a75]/20 group-hover:bg-white/70 overflow-hidden p-2">
      {src ? (
        <>
          {/* Mobile View: Infinite breathing animation */}
          <motion.img 
            src={src} 
            alt={alt || "شريك"} 
            className="w-full h-full object-contain drop-shadow-sm md:hidden" 
            animate={{ scale: [1.25, 1.35, 1.25] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Desktop View: Interactive hover zoom */}
          <img 
            src={src} 
            alt={alt || "شريك"} 
            className="hidden md:block w-full h-full scale-125 object-contain drop-shadow-sm group-hover:drop-shadow-md transition-all duration-500 group-hover:scale-[1.35]" 
          />
        </>
      ) : (
        <span className="text-[#004a75] text-lg md:text-xl font-bold relative z-10">{label}</span>
      )}
    </div>
    
    <div className="absolute bottom-6 sm:bottom-8 z-10 h-3 w-20 bg-gradient-to-r from-[#004a75]/40 to-[#004a75]/80 rounded-full transition-all duration-500 group-hover:w-32"></div>
  </div>
);

const SponsorPlaceholder = ({ src, label }: { src: string; label?: string }) => (
  <div className="relative w-[200px] h-[120px] p-1 mx-4 rounded-[1.5rem] bg-[#004a75]/5 shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-[#004a75]/10 flex items-center justify-center transition-all duration-400 ease-out group/item hover:scale-[1.35] active:scale-110 hover:z-50 hover:shadow-[0_30px_60px_rgba(0,104,161,0.2)] hover:bg-white hover:border-[#004a75]/30 shrink-0 transform-gpu cursor-pointer">
    <img 
      src={encodeURI(src)} 
      alt={label || "Sponsor"} 
      className="w-full h-full object-contain scale-[1.15] transition-transform duration-400 ease-out group-hover/item:scale-[1.25] transform-gpu drop-shadow-sm group-hover/item:drop-shadow-xl" 
      loading="lazy"
      decoding="async"
    />
  </div>
);

const MarqueeRow = ({ children, reverse }: { children: React.ReactNode, reverse?: boolean }) => {
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleInteract = () => {
    setIsPaused(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 1200); 
  };

  return (
    <div 
      className={`flex w-max will-change-transform ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      onMouseEnter={handleInteract}
      onTouchStart={handleInteract}
      onMouseMove={handleInteract}
      onTouchMove={handleInteract}
    >
      {children}
    </div>
  );
};



export default function PartnersSponsors() {
  const sponsorImages = [
    "/sponsers/شعارات الجهات المانحة-01.svg",
    "/sponsers/شعارات الجهات المانحة-02.svg",
    "/sponsers/شعارات الجهات المانحة-03.svg",
    "/sponsers/شعارات الجهات المانحة-04.svg",
    "/sponsers/شعارات الجهات المانحة-05.svg",
    "/sponsers/شعارات الجهات المانحة-06.svg",
    "/sponsers/شعارات الجهات المانحة-07.svg",
    "/sponsers/شعارات الجهات المانحة-08.svg",
    "/sponsers/شعارات الجهات المانحة-09.svg",
    "/sponsers/شعارات الجهات المانحة-10.svg",
    "/sponsers/شعارات الجهات المانحة-11.svg",
    "/sponsers/شعارات الجهات المانحة-12.svg",
    "/sponsers/شعارات الجهات المانحة-13.svg",
    "/sponsers/شعارات الجهات المانحة-14.svg",
    "/sponsers/شعارات الجهات المانحة-15.svg",
    "/sponsers/شعارات الجهات المانحة-16.svg",
    "/sponsers/شعارات الجهات المانحة-17.svg",
  ];

  // We duplicate the array to ensure seamless infinite scrolling since there are only 17 sponsors.
  const allSponsors = [...sponsorImages, ...sponsorImages];
  const sponsorsRow1 = allSponsors.slice(0, 17);
  const sponsorsRow2 = allSponsors.slice(17);

  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden font-sans py-24 lg:py-32" dir="rtl">
      
      {/* Base Background Color added in place of Waterfall */}
      <div className="absolute inset-0 z-0 bg-[#ffefd0]"></div>

      {/* Decorative Brand Arts Background */}
      <div className="absolute top-10 right-[5%] flex flex-col pointer-events-none z-0">
        <BrandTile src="/svg/art-01-tr.svg" />
      </div>
      <div className="absolute top-[45%] left-[5%] flex flex-col pointer-events-none z-0">
        <BrandTile src="/svg/art-02-bl.svg" />
      </div>
      <div className="absolute bottom-20 right-[15%] flex flex-col pointer-events-none z-0">
        <BrandTile src="/svg/art-03-br.svg" />
      </div>
      <div className="absolute bottom-10 left-[10%] flex flex-col pointer-events-none z-0 opacity-50">
        <BrandTile src="/svg/art-03-tl-yellow.svg" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-[#004a75] text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
            شركاء النجاح
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-[#ff9f9d] to-[#fd5c3d] mx-auto rounded-full shadow-lg"></div>
        </motion.div>

        {/* Governmental Partners */}
        <div className="mb-28 lg:mb-36">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 px-4 sm:px-10 lg:px-0">
            {[
              { src: "/Partners/Minisrty-of-Education.svg", alt: "Ministry of Education" },
              { src: "/Partners/talemia.svg", alt: "Talemia" },
              { src: "/Partners/KSSO_logo-1_260609_185237.svg", alt: "KSSO" }
            ].map((partner, index) => (
              <motion.div
                key={`gov-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
                whileHover={{ y: -15, transition: { duration: 0.3 } }}
              >
                <PartnerPlaceholder src={partner.src} alt={partner.alt} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Sponsors Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-10"
      >
        <h3 className="text-[#004a75] text-2xl sm:text-3xl font-bold mb-4 drop-shadow-sm">الجهات المانحة</h3>
        <div className="w-16 h-1 bg-gradient-to-r from-[#ff9f9d] to-[#fd5c3d] mx-auto rounded-full shadow-sm"></div>
      </motion.div>

      {/* Sponsors Marquee - Full Width */}
      <div className="w-full relative z-10 flex flex-col gap-8 bg-[#0068a1]/5 backdrop-blur-xl py-16 border-y border-[#004a75]/10 shadow-sm">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#004a75]/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="w-full overflow-hidden flex flex-col gap-10 py-12 -my-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" dir="ltr">
          {/* Row 1 - Right to Left */}
          <MarqueeRow>
            <div className="flex">
              {sponsorsRow1.map((src, i) => <SponsorPlaceholder key={`r1a-${i}`} src={src} label={`راعي ${i + 1}`} />)}
            </div>
            <div className="flex">
              {sponsorsRow1.map((src, i) => <SponsorPlaceholder key={`r1b-${i}`} src={src} label={`راعي ${i + 1}`} />)}
            </div>
          </MarqueeRow>

          {/* Row 2 - Left to Right */}
          <MarqueeRow reverse>
            <div className="flex">
              {sponsorsRow2.map((src, i) => <SponsorPlaceholder key={`r2a-${i}`} src={src} label={`راعي ${i + 10}`} />)}
            </div>
            <div className="flex">
              {sponsorsRow2.map((src, i) => <SponsorPlaceholder key={`r2b-${i}`} src={src} label={`راعي ${i + 10}`} />)}
            </div>
          </MarqueeRow>
        </div>
      </div>

    </section>
  );
}
