"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export type MediaItem = {
  id: string;
  title: string;
  description: string;
  type: "image" | "video";
  src: string;
  poster?: string;
};

type MediaModalProps = {
  isOpen: boolean;
  item: MediaItem | null;
  onClose: () => void;
};

export default function MediaModal({ isOpen, item, onClose }: MediaModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 lg:p-16 bg-[#0a2e2c]/80 backdrop-blur-xl"
          onClick={(e) => {
            if (e.target === overlayRef.current) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20, rotateX: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative w-full max-w-5xl max-h-[95dvh] sm:max-h-[90vh] bg-white/10 backdrop-blur-[40px] border-[3px] border-white/50 rounded-2xl p-3 md:p-5 shadow-[inset_10px_10px_20px_rgba(255,255,255,1),inset_-12px_-12px_30px_rgba(35,58,119,0.5),0_40px_80px_rgba(0,0,0,0.6)] flex flex-col"
            dir="rtl"
            style={{ transformStyle: "preserve-3d", perspective: 1200 }}
          >
            {/* Liquid reflection highlight */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/70 via-transparent to-transparent pointer-events-none mix-blend-overlay opacity-90 z-0" />

            {/* Swirling animation inside modal glass border using brand aurora colors */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none opacity-80 mix-blend-overlay z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,rgba(255,239,208,1)_0%,rgba(255,239,208,1)_45%,rgba(249,115,22,0.9)_55%,rgba(28,129,172,0.9)_65%,rgba(6,32,165,0.9)_75%,rgba(35,58,119,0.9)_90%,rgba(255,239,208,1)_100%)] animate-[spin_12s_linear_infinite] blur-[40px]" />
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-7 right-7 sm:top-10 sm:right-10 z-30 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-xl border-[2px] border-white/80 shadow-[0_4px_10px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.9)] text-[#114b48] hover:bg-white/40 hover:scale-110 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2),inset_0_4px_8px_rgba(255,255,255,1)] transition-all duration-300"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 font-bold" strokeWidth={2.5} />
            </button>

            {/* Inner Content Wrapper */}
            <div className="relative flex-1 w-full h-full rounded-xl overflow-hidden bg-white/50 shadow-[0_10px_40px_rgba(0,0,0,0.4)] flex flex-col md:flex-row z-10 border-[3px] border-white/80">
              
              {/* Media Section */}
              <div className="relative w-full md:w-[55%] lg:w-[60%] flex-shrink-0 min-h-[35dvh] max-h-[50dvh] md:max-h-none flex items-center justify-center bg-black/10">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    poster={item.poster}
                    controls
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}
                {/* Deep Recess Overlay over Media */}
                <div className="absolute inset-0 shadow-[inset_0_8px_30px_rgba(0,0,0,0.5),inset_0_1px_5px_rgba(0,0,0,0.6)] pointer-events-none" />
              </div>

              {/* Text Content */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 md:p-8 lg:p-10 text-right bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-md min-h-[30dvh] flex flex-col justify-center md:justify-start">
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, type: "spring", damping: 15 }}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-[#114b48] mb-3 leading-snug font-thmanyah drop-shadow-sm"
                >
                  {item.title}
                </motion.h3>
                
                <motion.div 
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                  className="w-12 sm:w-16 h-[4px] bg-gradient-to-l from-[#1D7671] to-[#40c4bb] rounded-full mb-4 sm:mb-5 origin-right shadow-sm"
                />
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, type: "spring", damping: 15 }}
                  className="text-xs sm:text-sm md:text-base text-[#1D7671]/90 leading-relaxed font-medium font-thmanyah"
                >
                  {item.description}
                </motion.p>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
