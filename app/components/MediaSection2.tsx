"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type CardData = {
  id: string;
  title: string;
  description: string;
  type: "image" | "video";
  src: string;
  poster?: string;
  label?: string;
};

const cards: CardData[] = [
  {
    id: "g1",
    title: "شلال سحابي",
    description: "شلال طبيعي ينساب بين الصخور والأشجار الخضراء",
    type: "image",
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g2",
    title: "غابة misty forest",
    description: "غابة ضبابية خضراء تنبض بالحياة والهدوء",
    type: "image",
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g3",
    title: "ليلة هادئة",
    description: "مشهد ليلي ساحر تحت ضوء القمر مع انعكاس الأضواء على سطح الماء",
    type: "video",
    poster: "https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?auto=format&fit=crop&w=1200&q=80",
    src: "https://i.imgur.com/jelYwDX.mp4",
    label: "فيديو",
  },
  {
    id: "g4",
    title: "جبال مغيمة",
    description: "قمم جبلية شامخة تلامس الغيوم في مشهد ساحر يأسر الأبصار، حيث تتراقص الأضواء على قمم الصخور العالية وتتلاعب الرياح بالسحب حولها كأنها ترسم لوحة فنية طبيعية لا مثيل لها. تُعد هذه المناطق من أجمل الوجهات السياحية التي يزورها المسافرون الباحثون عن الهدوء والجمال الخلاب، حيث يمكنهم الاستمتاع بالمناظر الطبيعية الخلابة والمساحات الخضراء الواسعة والأنهار الجارية التي تنساب بين الوديان العميقة والشعاب الصخرية التي تشكلت عبر ملايين السنين من التعرض المستمر للعوامل الطبيعية والمناخية المختلفة التي عملت على تشكيل هذه المناظر الخلابة التي تجذب إليها الزوار من مختلف أنحاء العالم بحثاً عن الراحة النفسية والسكينة التي توفرها الطبيعة للإنسان في عالمه المزدحم والضوضائي.",
    type: "image",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g5",
    title: "شجرة وحيدة",
    description: "شجرة وحيدة واقفة في حقل أخضر واسع ترتفع بفخر نحو السماء الزرقاء الصافية، حيث تنعم بأطرافها الخضراء بأشعة الشمس الدافئة وتمتص نسمات الهواء النقي العليل الذي يحمل معه عبق الحياة والحياة. تُعد هذه الشجرة رمزاً للصمود والقوة والإرادة التي لا تتزعزع أمام تحديات الزمن والعوامل الجوية المختلفة التي تتعرض لها على مدار الفصول الأربعة من السنة، فالشتاء يحظرها بالبرد والثلوج، والربيع يزيدها جمالاً بأزهارها المتفتحة، والصيف يمنحها ظلالاً واسعة يرتاح تحتها المسافرون والمسافرون، والخريف يكسوها بأوراقها الذهبية والحمراء التي تتساقط ببطء على الأرض كأنها ترقص رقصة الوداع الأخيرة قبل أن تعود الحياة من جديد في الربيع المقبل. هذه الشجرة وحيدة لكنها ليست وحيدة حقاً فها حولها مئات الكائنات الحية التي تستقر في أفنانها وتحت ظلالها الواسعة من طيور وحشرات وحيوانات صغيرة تعيش في سلام ووئام مع هذا الكائن العظيم الذي يمنح الجميع الحماية والدفء والأمان طوال فترات الحياة الطويلة.",
    type: "image",
    src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
  },
];

/* ─── Simple Modal ──────────────────────────────────── */

function SimpleModal({
  isOpen,
  card,
  onClose,
}: {
  isOpen: boolean;
  card: CardData | null;
  onClose: () => void;
}) {
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
      {isOpen && card && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/60 backdrop-blur-lg"
          onClick={(e) => {
            if (e.target === overlayRef.current) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl bg-neutral-950 flex flex-col max-h-[90dvh]"
            dir="rtl"
          >
            <button
              onClick={onClose}
              className="absolute top-3 left-3 z-10 p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full flex-1 min-h-0 bg-black">
              {card.type === "video" ? (
                <video
                  src={card.src}
                  poster={card.poster}
                  controls
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-full max-h-[90dvh] object-contain"
                />
              ) : (
                <img
                  src={card.src}
                  alt={card.title}
                  className="w-full h-full max-h-[90dvh] object-contain"
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Main Section ──────────────────────────────────── */

export default function MediaSection2() {
  const [modalCard, setModalCard] = useState<CardData | null>(null);

  return (
    <section
      dir="rtl"
      className="relative w-full bg-[#ffefd0] font-thmanyah overflow-hidden"
    >
      <div className="absolute top-0 left-1/3 w-[30rem] h-[30rem] bg-[#1D7671]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[25rem] h-[25rem] bg-[#1D7671]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[80rem] mx-auto px-5 sm:px-8 lg:px-12 py-8 md:py-12">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-right mb-6 md:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#114b48] mb-3 md:mb-5 leading-[1.2] font-thmanyah">
            لحظات{" "}
            <span className="relative inline-block px-1.5">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#1D7671] via-[#32b5ac] to-[#1D7671] drop-shadow-sm">
                ميديا
              </span>
              <span className="absolute bottom-1 left-0 right-0 h-2 md:h-3 bg-gradient-to-r from-[#1D7671]/20 to-transparent rounded-full -skew-x-12" />
            </span>
          </h2>
          <div className="flex items-center gap-3 mt-2">
            <div className="w-12 md:w-20 h-[4px] bg-gradient-to-l from-[#1D7671]/60 to-transparent rounded-full" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#1D7671]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#1D7671]/20" />
          </div>
        </motion.div>

        {/* Responsive grid: bento mobile (2 cols) -> bento desktop (3 cols, 2 rows) */}
        <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-3 sm:gap-4 md:h-[70dvh] md:min-h-[450px]">
          {/* Top row on mobile, Left column on desktop */}
          <GridCard card={cards[0]} index={0} onClick={() => setModalCard(cards[0])} className="h-48 sm:h-56 md:h-auto md:row-start-1 md:col-start-1" />
          <GridCard card={cards[1]} index={1} onClick={() => setModalCard(cards[1])} className="h-48 sm:h-56 md:h-auto md:row-start-2 md:col-start-1" />

          {/* Full width on mobile, Middle column (tall) on desktop */}
          <GridCard card={cards[2]} index={2} onClick={() => setModalCard(cards[2])} className="h-64 sm:h-80 md:h-auto col-span-2 md:col-span-1 md:row-start-1 md:col-start-2 md:row-span-2" />

          {/* Bottom row on mobile, Right column on desktop */}
          <GridCard card={cards[3]} index={3} onClick={() => setModalCard(cards[3])} className="h-48 sm:h-56 md:h-auto md:row-start-1 md:col-start-3" />
          <GridCard card={cards[4]} index={4} onClick={() => setModalCard(cards[4])} className="h-48 sm:h-56 md:h-auto md:row-start-2 md:col-start-3" />
        </div>
      </div>

      <SimpleModal
        isOpen={!!modalCard}
        card={modalCard}
        onClose={() => setModalCard(null)}
      />
    </section>
  );
}

/* ─── Grid Card ─────────────────────────────────────── */

function GridCard({
  card,
  index,
  onClick,
  className,
}: {
  card: CardData;
  index: number;
  onClick: () => void;
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer outline-none bg-white/[0.08] backdrop-blur-xl border border-white/30 shadow-[0_4px_20px_rgba(29,118,113,0.06)] hover:shadow-[0_16px_48px_rgba(29,118,113,0.12)] transition-all duration-500 ${className}`}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-l from-[#1D7671]/20 to-transparent z-20" />

      {card.type === "video" ? (
        <video
          src={card.src}
          muted
          loop
          playsInline
          autoPlay
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      ) : (
        <img
          src={card.src}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          draggable={false}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#1D7671]/80 via-[#1D7671]/10 to-transparent pointer-events-none" />

      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 text-right pointer-events-none"
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <p className="text-xs text-white/90 leading-relaxed line-clamp-3 font-light font-thmanyah">
          {card.description}
        </p>
      </motion.div>
    </motion.button>
  );
}
