"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ParticlesLayer() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[100] overflow-hidden mix-blend-screen">
      {Array.from({ length: 80 }).map((_, i) => {
        // Larger size for stronger visibility
        const size = Math.random() * 5 + 2;
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;
        const duration = Math.random() * 15 + 10; // Faster movement
        // We use a negative delay so the animation has already "started" by the time the page loads
        const delay = Math.random() * -20;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,1),_0_0_30px_rgba(255,255,255,0.8)]"
            style={{ width: size, height: size }}
            initial={{ x: `${initialX}vw`, y: `${initialY}vh`, opacity: 0 }}
            animate={{
              x: [`${initialX}vw`, `${initialX + (Math.random() * 20 - 10)}vw`],
              y: [`${initialY}vh`, `${initialY - 50}vh`],
              opacity: [0, 1, 1, 0], // Fades in quickly, stays visible, fades out at the very end
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              delay: delay,
              times: [0, 0.1, 0.8, 1] // reaches full opacity at 10% of the animation duration
            }}
          />
        );
      })}
    </div>
  );
}
