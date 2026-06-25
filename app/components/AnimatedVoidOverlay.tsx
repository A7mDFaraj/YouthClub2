"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedVoidOverlay() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      
      {/* Dark/Light vignette overlay to create a 'void' depth effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.6)_100%)] mix-blend-overlay" />
      
      {/* Smart, organic, moving nebulas/fluid shapes - Speeds increased so they are immediately visible */}
      <motion.div
        animate={{
          scale: [1, 1.2, 0.8, 1],
          x: [0, 80, -80, 0],
          y: [0, -50, 40, 0],
          rotate: [0, 20, -20, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-[40%_60%_70%_30%] bg-teal-300/15 blur-[100px] mix-blend-overlay"
      />
      <motion.div
        animate={{
          scale: [0.8, 1.2, 1, 0.8],
          x: [0, -60, 60, 0],
          y: [0, 60, -60, 0],
          rotate: [0, -25, 15, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[5%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-[50%_40%_30%_60%] bg-blue-300/15 blur-[120px] mix-blend-overlay"
      />
      <motion.div
        animate={{
          scale: [1, 0.7, 1.3, 1],
          x: [0, 90, -40, 0],
          y: [0, 30, -70, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] right-[30%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-[60%_40%_50%_50%] bg-white/15 blur-[120px] mix-blend-overlay"
      />
    </div>
  );
}
