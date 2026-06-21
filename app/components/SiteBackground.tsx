import React from 'react';
import Image from 'next/image';

const PAGE_BG = '#ffefd0';

const SunburstSquare = ({ bgColor, linesColor = PAGE_BG, origin = "tl", className="", animDuration="40s", animDirection="normal", animDelay="0s" }: { bgColor: string, linesColor?: string, origin?: "tl" | "tr" | "bl" | "br", className?: string, animDuration?: string, animDirection?: string, animDelay?: string }) => {
  const numLines = 72; 
  const cx = origin.includes("r") ? "100" : "0";
  const cy = origin.includes("b") ? "100" : "0";

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`} style={{ backgroundColor: bgColor }}>
      <svg className={`absolute inset-0 w-full h-full`} viewBox="0 0 100 100" preserveAspectRatio="none">
        <g style={{ transformOrigin: `${cx}px ${cy}px`, animation: `sunburst-spin ${animDuration} linear infinite ${animDirection}`, animationDelay: animDelay }}>
          {Array.from({ length: numLines }).map((_, i) => {
            const angle = (i * 360) / numLines; 
            const rad = (angle * Math.PI) / 180;
            
            const length = 400; // longer to cover any corners safely
            const x2 = (Number(cx) + length * Math.cos(rad)).toFixed(3);
            const y2 = (Number(cy) + length * Math.sin(rad)).toFixed(3);
            return (
              <line key={i} x1={cx} y1={cy} x2={x2} y2={y2} stroke={linesColor} strokeWidth="0.8" />
            );
          })}
        </g>
        <circle cx={cx} cy={cy} r="12" fill={PAGE_BG} />
      </svg>
    </div>
  );
};

export default function SiteBackground({ 
  children, 
  className = "", 
  dir = "ltr",
  waveColor
}: { 
  children?: React.ReactNode, 
  className?: string, 
  dir?: string,
  waveColor?: string
}) {
  const colors = {
    bg: PAGE_BG,
    topLeft: '#F2C14E',     // Secondary Mustard Yellow
    topRight: '#1C81AC',    // Primary Light Blue
    bottomLeft: '#e06b52',  // Secondary Orange
    bottomRight: '#31a39f', // Secondary Teal
    wave: waveColor || '#1C81AC',        // Primary Light Blue for waves
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
      <div className="absolute top-[20%] right-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#e06b52]/20 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[30%] left-[5%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#31a39f]/20 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] bg-[#1C81AC]/10 rounded-full blur-[150px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }} />

      {/* Top Left Pattern Grid */}
      <div 
        className="absolute top-0 left-0 w-[240px] h-[240px] md:w-[400px] md:h-[400px] grid grid-cols-3 grid-rows-3 gap-[3px] md:gap-[4px] pointer-events-none z-0 opacity-20 md:opacity-100 transition-opacity"
        dir="ltr"
      >
        <div className="col-span-2 row-span-2 scale-[0.8] origin-top-left"><SunburstSquare bgColor={colors.topLeft} origin="tl" animDuration="45s" animDirection="normal" /></div>
        <div className="col-start-3 row-start-1 scale-[0.8] origin-top-left -translate-x-[40%]"><SunburstSquare bgColor={colors.topRight} origin="tr" animDuration="55s" animDirection="reverse" /></div>
        <div className="col-start-1 row-start-3 scale-[0.8] origin-top-left -translate-y-[40%]"><SunburstSquare bgColor={colors.bottomLeft} origin="bl" animDuration="38s" animDirection="reverse" /></div>
      </div>

      {/* Top Right Pattern Grid */}
      <div 
        className="absolute top-0 right-0 w-[120px] h-[120px] md:w-[200px] md:h-[200px] grid grid-cols-2 grid-rows-2 gap-[3px] md:gap-[4px] pointer-events-none z-0 opacity-20 md:opacity-90 transition-opacity"
        dir="ltr"
      >
        <div className="col-span-2 row-start-1"><SunburstSquare bgColor={colors.bottomRight} origin="br" animDuration="50s" animDirection="reverse" /></div>
      </div>

      {/* Left Edge Accent */}
      <div className="absolute top-[40%] left-0 w-[40px] md:w-[80px] h-[80px] md:h-[160px] pointer-events-none z-0 opacity-80" dir="ltr">
         <SunburstSquare bgColor={colors.bottomLeft} origin="tl" className="rounded-r-full" animDuration="48s" animDirection="normal" />
      </div>

      {/* Right Edge Accent */}
      <div className="absolute top-[52%] right-0 w-[40px] md:w-[80px] h-[80px] md:h-[160px] pointer-events-none z-0 opacity-80" dir="ltr">
         <SunburstSquare bgColor={colors.topRight} origin="tr" className="rounded-l-full" animDuration="52s" animDirection="reverse" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full min-h-screen pb-[250px]">
        {children}
      </div>

      {/* Footer Area (Fixed to bottom of container) */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0 h-[200px]">
        {/* Logo */}
        <div 
          className="absolute bottom-[30px] left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-1 w-[280px] sm:w-[350px] md:w-[550px]"
          style={{ animation: 'float 6s ease-in-out infinite' }}
        >
          <Image 
            src="/svg/Logo_cropped.svg" 
            alt="Waha Youth Club Logo" 
            width={400} 
            height={160} 
            className="w-full h-auto object-contain"
          />
        </div>
        {/* Bottom Wave Pattern */}
        <style>{`
          @keyframes wave-move {
            0% { background-position-x: 0px; }
            100% { background-position-x: 120px; }
          }
          @keyframes sunburst-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
        `}</style>
        <div 
          className="absolute bottom-6 left-0 w-full h-[65px]" 
          style={{ 
            backgroundImage: bgUrl, 
            backgroundRepeat: 'repeat-x', 
            backgroundPosition: 'bottom left',
            animation: 'wave-move 3s linear infinite'
          }}
        />
      </div>

    </div>
  );
}
