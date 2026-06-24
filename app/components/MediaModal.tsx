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
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-8 lg:p-10 bg-[#1D7671]/60 backdrop-blur-md"
          onClick={(e) => {
            if (e.target === overlayRef.current) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full max-w-4xl max-h-[95dvh] sm:max-h-[90vh] bg-white/95 backdrop-blur-2xl border border-white/80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_32px_64px_rgba(29,118,113,0.2)] flex flex-col"
            dir="rtl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10 p-2 sm:p-2.5 rounded-full bg-[#1D7671]/10 backdrop-blur-md border border-[#1D7671]/15 text-[#1D7671] hover:bg-[#1D7671]/20 transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Media — capped height, never flex-1 */}
            <div className="relative w-full flex-shrink-0 max-h-[55dvh] min-h-0 flex items-center justify-center bg-black/5">
              {item.type === "video" ? (
                <video
                  src={item.src}
                  poster={item.poster}
                  controls
                  autoPlay
                  className="w-full h-full max-h-[55dvh] object-contain"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full max-h-[55dvh] object-contain"
                />
              )}
            </div>

            {/* Text Content — flex-1 scrolls if long */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 md:p-8 text-right border-t border-[#1D7671]/10 bg-white min-h-0">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#1D7671] mb-2 leading-tight font-thmanyah">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-[#1D7671]/80 leading-relaxed font-medium font-thmanyah">
                {item.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
