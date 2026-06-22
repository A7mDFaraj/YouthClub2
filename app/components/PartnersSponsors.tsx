"use client";

import { motion } from "framer-motion";

const BrandTile = ({ src, className = "" }: { src: string, className?: string }) => (
  <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center shrink-0 opacity-10 md:opacity-20 ${className}`}>
    <img src={src} className="w-full h-full object-cover" alt="Brand Art" />
  </div>
);

const PartnerPlaceholder = ({ label }: { label: string }) => (
  <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2.5rem] bg-white/10 backdrop-blur-xl shadow-[0_15px_50px_rgba(0,104,161,0.2)] border border-white/20 flex flex-col items-center justify-center overflow-hidden group hover:shadow-[0_20px_60px_rgba(0,104,161,0.4)] transition-all duration-500">
    {/* Decorative background circle */}
    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full transition-transform duration-700 group-hover:scale-[1.35] origin-top-right"></div>
    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#83e6d6]/30 to-transparent rounded-tr-full transition-transform duration-700 group-hover:scale-[1.35] origin-bottom-left"></div>
    
    <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-white/10 backdrop-blur-md shadow-inner border border-white/30 flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:border-white/50 group-hover:bg-white/20 overflow-hidden">
      <span className="text-white/80 text-lg md:text-xl font-bold relative z-10 drop-shadow-md">{label}</span>
    </div>
    
    <div className="relative z-10 h-3 w-20 bg-gradient-to-r from-white/40 to-white/80 rounded-full transition-all duration-500 group-hover:w-32"></div>
  </div>
);

const SponsorPlaceholder = ({ label }: { label: string }) => (
  <div className="w-[200px] h-[120px] mx-4 rounded-[1.5rem] bg-white/10 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-white/20 flex items-center justify-center hover:shadow-[0_8px_30px_rgba(131,230,214,0.3)] transition-all duration-300 group hover:border-white/40 hover:bg-white/20 shrink-0">
    <span className="text-white/70 text-base font-bold group-hover:text-white transition-colors duration-300 drop-shadow-sm">{label}</span>
  </div>
);

const WaterfallBackground = () => {
  // Deterministic array of water streams for seamless, performant waterfall effect
  const streams = [
    { left: "2%", width: "4vw", duration: 4, opacity: 0.4, color: "#ffffff" },
    { left: "12%", width: "2vw", duration: 6, opacity: 0.3, color: "#83e6d6" },
    { left: "22%", width: "5vw", duration: 3.5, opacity: 0.5, color: "#ffffff" },
    { left: "32%", width: "3vw", duration: 5, opacity: 0.4, color: "#0068a1" },
    { left: "42%", width: "6vw", duration: 7, opacity: 0.2, color: "#ffffff" },
    { left: "55%", width: "4vw", duration: 4.5, opacity: 0.5, color: "#83e6d6" },
    { left: "65%", width: "2.5vw", duration: 5.5, opacity: 0.3, color: "#ffffff" },
    { left: "75%", width: "5vw", duration: 8, opacity: 0.2, color: "#0068a1" },
    { left: "85%", width: "3.5vw", duration: 4, opacity: 0.4, color: "#ffffff" },
    { left: "94%", width: "4vw", duration: 6, opacity: 0.3, color: "#83e6d6" },
    { left: "8%", width: "6vw", duration: 9, opacity: 0.15, color: "#ffffff" },
    { left: "28%", width: "4vw", duration: 5, opacity: 0.3, color: "#0068a1" },
    { left: "48%", width: "7vw", duration: 7.5, opacity: 0.25, color: "#ffffff" },
    { left: "70%", width: "3vw", duration: 4.2, opacity: 0.45, color: "#83e6d6" },
    { left: "88%", width: "5vw", duration: 6.5, opacity: 0.2, color: "#ffffff" },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-[#ffefd0] via-[#52b9cf] to-[#004a75]">
      {streams.map((stream, i) => (
        <motion.div
          key={i}
          className="absolute top-0 h-[200%] blur-sm"
          style={{
            left: stream.left,
            width: stream.width,
            opacity: stream.opacity,
            willChange: "transform",
            background: `linear-gradient(180deg, transparent 0%, ${stream.color} 25%, transparent 50%, transparent 50%, ${stream.color} 75%, transparent 100%)`
          }}
          animate={{ y: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: stream.duration,
            repeat: Infinity,
          }}
        />
      ))}
      
      {/* A subtle overlay to make the water look deeper towards the bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#004a75]/80 pointer-events-none" />
    </div>
  );
};

export default function PartnersSponsors() {
  // Increase length to ensure seamless infinite loop on wide screens
  const sponsorsRow1 = Array.from({ length: 20 });
  const sponsorsRow2 = Array.from({ length: 20 });

  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden font-sans py-24 lg:py-32" dir="rtl">
      
      {/* Live Waterfall Background */}
      <WaterfallBackground />

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
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={`gov-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
                whileHover={{ y: -15, transition: { duration: 0.3 } }}
              >
                <PartnerPlaceholder label={`شريك حكومي ${item}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Sponsors Marquee - Full Width */}
      <div className="w-full relative z-10 flex flex-col gap-8 bg-[#0068a1]/20 backdrop-blur-xl py-16 border-y border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.2)]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="w-full overflow-hidden flex flex-col gap-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" dir="ltr">
          {/* Row 1 - Right to Left */}
          <motion.div 
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            <div className="flex">
              {sponsorsRow1.map((_, i) => <SponsorPlaceholder key={`r1a-${i}`} label={`راعي ${i + 1}`} />)}
            </div>
            <div className="flex">
              {sponsorsRow1.map((_, i) => <SponsorPlaceholder key={`r1b-${i}`} label={`راعي ${i + 1}`} />)}
            </div>
          </motion.div>

          {/* Row 2 - Left to Right */}
          <motion.div 
            className="flex w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 45, repeat: Infinity }}
          >
            <div className="flex">
              {sponsorsRow2.map((_, i) => <SponsorPlaceholder key={`r2a-${i}`} label={`راعي ${i + 10}`} />)}
            </div>
            <div className="flex">
              {sponsorsRow2.map((_, i) => <SponsorPlaceholder key={`r2b-${i}`} label={`راعي ${i + 10}`} />)}
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
