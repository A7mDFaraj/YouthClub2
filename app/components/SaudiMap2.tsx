"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import saudiMap from "@svg-maps/saudi-arabia";

const REGION_COLORS: Record<string, string> = {
  "ryiadh": "#F2C14E", // Yellow
  "eastern-province": "#e06b52", // Orange
  "mecca": "#31a39f", // Teal
  "medina": "#1C81AC", // Light Blue
  "hail": "#e06b52", // Orange
  "al-qassim": "#31a39f", // Teal
  "northern-borders": "#1C81AC", // Light Blue
  "al-jawf": "#31a39f", // Teal
  "tabuk": "#F2C14E", // Yellow
  "asir": "#1C81AC", // Light Blue
  "al-bahah": "#e06b52", // Orange
  "jizan": "#F2C14E", // Yellow
  "najran": "#31a39f" // Teal
};

const REGION_NAMES_AR: Record<string, string> = {
  "tabuk": "تبوك",
  "al-jawf": "الجوف",
  "northern-borders": "الحدود الشمالية",
  "medina": "المدينة المنورة",
  "al-bahah": "الباحة",
  "hail": "حائل",
  "najran": "نجران",
  "mecca": "مكة المكرمة",
  "asir": "عسير",
  "jizan": "جازان",
  "ryiadh": "الرياض",
  "al-qassim": "القصيم",
  "eastern-province": "المنطقة الشرقية"
};

const VIBRATING_POINTS = [
  // Approximate x,y coordinates relative to viewBox '0 0 730 600'
  // I will need to calibrate these!
  { id: "point-tabuk", cx: 160, cy: 120, color: "#ffffff" },
  { id: "point-hail", cx: 270, cy: 180, color: "#ffffff" },
  { id: "point-ryiadh", cx: 380, cy: 300, color: "#ffffff" },
  { id: "point-eastern", cx: 550, cy: 330, color: "#ffffff" },
];

export default function SaudiMap2() {
  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto flex items-center justify-center p-2"
      onMouseMove={handleMouseMove}
    >
      <svg
        viewBox={saudiMap.viewBox}
        className="w-full h-full drop-shadow-xl overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Regions */}
        <g className="regions">
          {saudiMap.locations.map((region: any, index: number) => {
            // Calculate a random starting position for each piece (like a scattered puzzle)
            // Using a seeded random based on index so it's consistent on the client
            const randomX = (Math.sin(index * 13) * 300);
            const randomY = (Math.cos(index * 17) * 300);
            const randomRotate = (Math.sin(index * 19) * 45);

            return (
              <motion.path
                key={region.id}
                id={region.id}
                name={region.name}
                d={region.path}
                fill={REGION_COLORS[region.id] || "#1C81AC"}
                stroke="#ffefd0"
                strokeWidth={1.5}
                initial={{ 
                  scale: 0.8, 
                  x: randomX, 
                  y: randomY, 
                  rotate: randomRotate, 
                  opacity: 0 
                }}
                animate={{ 
                  scale: 1, 
                  x: 0, 
                  y: 0, 
                  rotate: 0, 
                  opacity: 1 
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 40, 
                  damping: 12, 
                  mass: 1.5,
                  delay: index * 0.08 // Stagger the pieces flying in
                }}
                whileHover={{ 
                  scale: 1.04, 
                  y: -6, 
                  filter: "brightness(1.1) drop-shadow(0 15px 20px rgba(0,0,0,0.3))",
                  zIndex: 50
                }}
                onMouseEnter={() => setHoveredRegionId(region.id)}
                onMouseLeave={() => setHoveredRegionId(null)}
                className="cursor-pointer outline-none transform-origin-center"
              />
            );
          })}
        </g>
        
        {/* Duplicate the hovered region at the end of the SVG so it renders on top! */}
        {hoveredRegionId && (
          <use href={`#${hoveredRegionId}`} pointerEvents="none" />
        )}
        
        {/* Vibrating Points */}
        {VIBRATING_POINTS.map((point) => (
          <g key={point.id}>
            {/* Outer Ripple */}
            <motion.circle
              cx={point.cx}
              cy={point.cy}
              r={8}
              fill="none"
              stroke={point.color}
              strokeWidth={3}
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
            />
            {/* Inner Dot */}
            <circle cx={point.cx} cy={point.cy} r={6} fill={point.color} />
            <circle cx={point.cx} cy={point.cy} r={10} fill="none" stroke={point.color} strokeWidth={2} opacity={0.5} />
          </g>
        ))}
      </svg>
      
      {/* Dynamic Cursor Tooltip */}
      <motion.div 
        className="fixed bg-black/90 text-white px-5 py-2 rounded-xl font-bold shadow-2xl pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-[150%] text-sm"
        style={{ left: mousePos.x, top: mousePos.y }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: hoveredRegionId ? 1 : 0, 
          scale: hoveredRegionId ? 1 : 0.8 
        }}
        transition={{ duration: 0.15 }}
        dir="rtl"
      >
        {hoveredRegionId ? (REGION_NAMES_AR[hoveredRegionId] || "المملكة العربية السعودية") : ""}
      </motion.div>
    </div>
  );
}
