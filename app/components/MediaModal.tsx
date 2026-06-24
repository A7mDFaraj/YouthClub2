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
            className="relative w-full max-w-5xl max-h-[95dvh] sm:max-h-[90vh] bg-gradient-to-br from-[#e0f7f4]/70 via-[#80cec3]/50 to-[#1D7671]/70 backdrop-blur-3xl border-[2px] border-white/60 rounded-[2rem] sm:rounded-[3rem] p-3 md:p-5 shadow-[inset_6px_6px_20px_rgba(255,255,255,0.9),inset_-8px_-8px_25px_rgba(17,75,72,0.6),0_40px_80px_rgba(0,0,0,0.5)] flex flex-col"
            dir="rtl"
            style={{ transformStyle: "preserve-3d", perspective: 1200 }}
          >
            {/* Liquid reflection highlight */}
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-white/70 via-transparent to-transparent pointer-events-none mix-blend-overlay opacity-90 z-0" />

            {/* Swirling animation inside modal glass border */}
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden pointer-events-none opacity-40 mix-blend-overlay z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,rgba(224,247,244,0.1)_0%,rgba(128,206,195,0.8)_25%,rgba(29,118,113,0.9)_50%,rgba(128,206,195,0.8)_75%,rgba(224,247,244,0.1)_100%)] animate-[spin_10s_linear_infinite] blur-[30px]" />
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
            <div className="relative flex-1 w-full h-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-white/50 shadow-[0_10px_40px_rgba(0,0,0,0.4)] flex flex-col md:flex-row z-10 border-[3px] border-white/80">
              
              {/* Media Section */}
              <div className="relative w-full md:w-[55%] lg:w-[60%] flex-shrink-0 min-h-[35dvh] max-h-[50dvh] md:max-h-none flex items-center justify-center bg-black/10">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    poster={item.poster}
                    controls
                    autoPlay
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
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-12 text-right bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-md min-h-[30dvh] flex flex-col justify-center">
                <motion.h3 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, type: "spring", damping: 15 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#114b48] mb-5 leading-[1.3] font-thmanyah drop-shadow-sm"
                >
                  {item.title}
                </motion.h3>
                
                <motion.div 
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                  className="w-20 h-1.5 bg-gradient-to-l from-[#1D7671] to-[#40c4bb] rounded-full mb-6 origin-right shadow-sm"
                />
                
                <motion.p 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, type: "spring", damping: 15 }}
                  className="text-base sm:text-lg md:text-xl text-[#1D7671]/90 leading-relaxed font-medium font-thmanyah"
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
