import React from 'react';
import Image from 'next/image';

const PAGE_BG = '#ffefd0';

const SunburstSquare = ({ bgColor, linesColor = PAGE_BG, origin = "tl", className="" }: { bgColor: string, linesColor?: string, origin?: "tl" | "tr" | "bl" | "br", className?: string }) => {
  const numLines = 18; 
  const cx = origin.includes("r") ? "100" : "0";
  const cy = origin.includes("b") ? "100" : "0";
  
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`} style={{ backgroundColor: bgColor }}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {Array.from({ length: numLines }).map((_, i) => {
          const angle = (i * 90) / (numLines - 1); 
          let rad = (angle * Math.PI) / 180;
          
          // Adjust angle mapping based on corner origin
          if (origin === "tr") rad = Math.PI - rad;
          else if (origin === "bl") rad = -rad;
          else if (origin === "br") rad = Math.PI + rad;
          
          const length = 200; 
          const x2 = (Number(cx) + length * Math.cos(rad)).toFixed(3);
          const y2 = (Number(cy) + length * Math.sin(rad)).toFixed(3);
          return (
            <line key={i} x1={cx} y1={cy} x2={x2} y2={y2} stroke={linesColor} strokeWidth="0.8" />
          );
        })}
        <circle cx={cx} cy={cy} r="12" fill={PAGE_BG} />
      </svg>
    </div>
  );
};

export default function SiteBackground({ 
  children, 
  className = "", 
  dir = "ltr" 
}: { 
  children: React.ReactNode, 
  className?: string, 
  dir?: string 
}) {
  const colors = {
    bg: PAGE_BG,
    topLeft: '#1A504B',     
    topRight: '#DC965A',    
    bottomLeft: '#DF9780',  
    bottomRight: '#82C1B9', 
    wave: '#82C1B9',
  };

  const waveSvg = `
    <svg width="120" height="65" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0 20 Q 30 0 60 20 T 120 20 L 120 35 L 0 35 Z" fill="${colors.wave}" />
      <path d="M 0 50 Q 30 30 60 50 T 120 50 L 120 65 L 0 65 Z" fill="${colors.wave}" />
    </svg>
  `;

  const bgUrl = `url("data:image/svg+xml,${encodeURIComponent(waveSvg.trim())}")`;

  return (
    <div className={`relative min-h-screen w-full overflow-hidden ${className}`} style={{ backgroundColor: colors.bg }} dir={dir}>
      
      {/* Ambient Breathing Glows */}
      <div className="absolute top-[20%] right-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#DF9780]/20 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[30%] left-[5%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#82C1B9]/20 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] bg-[#DC965A]/10 rounded-full blur-[150px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }} />

      {/* Top Left Pattern Grid */}
      <div 
        className="absolute top-0 left-0 w-[240px] h-[240px] md:w-[400px] md:h-[400px] grid grid-cols-3 grid-rows-3 gap-[3px] md:gap-[4px] pointer-events-none z-0"
        dir="ltr"
      >
        <div className="col-span-2 row-span-2"><SunburstSquare bgColor={colors.topLeft} origin="tl" /></div>
        <div className="col-start-3 row-start-1"><SunburstSquare bgColor={colors.topRight} origin="tr" /></div>
        <div className="col-start-1 row-start-3"><SunburstSquare bgColor={colors.bottomLeft} origin="bl" /></div>
        <div className="col-start-2 row-start-3"><SunburstSquare bgColor={colors.bottomRight} origin="br" /></div>
      </div>

      {/* Top Right Pattern Grid */}
      <div 
        className="absolute top-0 right-0 w-[120px] h-[120px] md:w-[200px] md:h-[200px] grid grid-cols-2 grid-rows-2 gap-[3px] md:gap-[4px] pointer-events-none z-0 opacity-90"
        dir="ltr"
      >
        <div className="col-start-2 row-start-1"><SunburstSquare bgColor={colors.topRight} origin="tr" /></div>
        <div className="col-span-2 row-start-2"><SunburstSquare bgColor={colors.bottomRight} origin="br" /></div>
      </div>

      {/* Left Edge Accent */}
      <div className="absolute top-[40%] left-0 w-[40px] md:w-[80px] h-[80px] md:h-[160px] pointer-events-none z-0 opacity-80" dir="ltr">
         <SunburstSquare bgColor={colors.bottomLeft} origin="tl" className="rounded-r-full" />
      </div>

      {/* Right Edge Accent */}
      <div className="absolute top-[40%] right-0 w-[40px] md:w-[80px] h-[80px] md:h-[160px] pointer-events-none z-0 opacity-80" dir="ltr">
         <SunburstSquare bgColor={colors.topRight} origin="tr" className="rounded-l-full" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full min-h-screen pb-[250px]">
        {children}
      </div>

      {/* Footer Area (Fixed to bottom of container) */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0 h-[200px]">
        {/* Logo */}
        <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-1 w-[280px] sm:w-[350px] md:w-[550px]">
          <Image 
            src="/svg/Logo_cropped.svg" 
            alt="Waha Youth Club Logo" 
            width={400} 
            height={160} 
            className="w-full h-auto object-contain"
          />
        </div>
        {/* Bottom Wave Pattern */}
        <div 
          className="absolute bottom-6 left-0 w-full h-[65px]" 
          style={{ backgroundImage: bgUrl, backgroundRepeat: 'repeat-x', backgroundPosition: 'bottom left' }}
        />
      </div>

    </div>
  );
}
