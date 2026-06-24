"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, ChevronRight, ChevronLeft } from "lucide-react";
import MediaModal, { type MediaItem } from "./MediaModal";

const items: MediaItem[] = [
  {
    id: "m1",
    title: "ورشة الابتكار الشبابي",
    description: "ورشة عمل تفاعلية لتعزيز مهارات الابتكار والإبداع بين الشباب في بيئة ملهمة.",
    type: "image",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "m2",
    title: "مؤتمر قادة المستقبل",
    description: "مؤتمر سنوي يجمع نخبة من القادة الشباب لتبادل الخبرات والرؤى.",
    type: "image",
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "m3",
    title: "برنامج التدريب المهني",
    description: "برنامج متكامل لتأهيل الشباب وتطوير مهاراتهم المهنية.",
    type: "video",
    poster: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "m4",
    title: "معرض المشاريع الإبداعية",
    description: "معرض يعرض أبرز المشاريع الإبداعية التي طورها الشباب.",
    type: "image",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "m5",
    title: "اليوم الرياضي الترفيهي السنوي الكبير",
    description: "هذا اليوم الرياضي الترفيهي السنوي هو واحد من أبرز الفعاليات الشبابية التي ننظمها على مدار العام، حيث يجتمع الشباب من مختلف المناطق والمدن في ملتقى رياضي ترفيهي مميز مليء بالحيوية والنشاط والتنافس الشريف الذي يعزز القيم النبيلة ويرسخ مبادئ العمل الجماعي والتعاون المثمر بين الجميع. يتضمن اليوم العديد من الفعاليات والمسابقات الرياضية المتنوعة التي تهدف إلى تعزيز الروح الرياضية ونشر ثقافة النشاط البدني بين أوساط الشباب، بالإضافة إلى تنظيم ورش عمل توعوية حول أهمية الرياضة في بناء الشخصية السليمة وتحقيق التوازن النفسي والجسدي الذي يحتاجه كل شاب وفتاة في هذه المرحلة العمرية المهمة. يشمل البرنامج مجموعة كبيرة ومتنوعة من الأنشطة التفاعلية الشيقة مثل سباقات التحدي والقدرة على التحمل، مباريات كرة القدم والطائرة والسلة، مسابقات اللياقة البدنية والقوى، وألعاب القوى المختلفة في المضمار والميدان، إلى جانب ركن خاص للتغذية الصحية حيث يقدم نخبة من أخصائيي التغذية نصائح وإرشادات قيمة حول أنماط الحياة الصحية المتوازنة التي تعزز مناعة الجسم وتحسن الأداء الرياضي. تهدف هذه الفعالية السنوية الكبيرة إلى ترسيخ قيم التعاون والمثابرة والانضباط والالتزام لدى الشباب، واكتشاف المواهب الرياضية الواعدة في مختلف الألعاب والرياضات، وتشجيعهم على ممارسة الرياضة بشكل منتظم كأسلوب حياة يعزز من جودة حياتهم البدنية والنفسية والاجتماعية، ويسهم في بناء مجتمع صحي ونشط قادر على مواجهة التحديات وتحقيق الطموحات الوطنية الكبرى في ظل رؤية المملكة 2030 التي تضع الشباب في صدارة الأولويات وتعمل على تمكينهم في جميع المجالات. نؤمن في هذه المبادرة بأن الشباب هم ثروة الوطن الحقيقية وعماد المستقبل المشرق، وأن الاستثمار في صحتهم البدنية والنفسية هو استثمار في مستقبل الأمة بأسرها، ولذلك نحرص كل الحرص على تقديم برامج رياضية متميزة تجمع بين المتعة والفائدة، وتراعي احتياجات الشباب وتطلعاتهم، وتساعدهم على اكتشاف قدراتهم الكامنة وتطوير مهاراتهم الشخصية والاجتماعية من خلال بيئة رياضية آمنة ومحفزة تحت إشراف نخبة من المدربين والمشرفين المؤهلين وذوي الخبرة الطويلة في المجال الرياضي الشبابي.",
    type: "image",
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "m6",
    title: "فرص التمويل والدعم للمشاريع الناشئة",
    description: "محاضرة توعوية شاملة حول فرص التمويل والدعم المالي المتاحة للمشاريع الناشئة الشبابية في المملكة العربية السعودية، تتناول آليات الحصول على الدعم من صناديق التنمية المختلفة، وشروط التقديم على المنح الحكومية، وكيفية إعداد خطط العمل الاحترافية التي تؤهل الشباب للفوز بفرص استثمارية واعدة، بالإضافة إلى استعراض قصص نجاح ملهمة لمشاريع شبابية استطاعت أن تحقق نقلة نوعية بفضل الدعم المناسب في الوقت المناسب.",
    type: "image",
    src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "m7",
    title: "رحلة المعرفة",
    description: "رحلة تعليمية تفاعلية تجمع بين التعلم والتجربة الميدانية.",
    type: "image",
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "m8",
    title: "ورشة التصميم الرقمي الحديثة",
    description: "ورشة عمل متخصصة في أدوات التصميم الرقمي الحديثة وتطبيقاتها العملية.",
    type: "video",
    poster: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const floatConfig = [
  { duration: 3.5, delay: 0 },
  { duration: 4.2, delay: 0.3 },
  { duration: 3.8, delay: 0.6 },
  { duration: 4.5, delay: 0.1 },
  { duration: 3.2, delay: 0.8 },
  { duration: 4.0, delay: 0.4 },
  { duration: 3.6, delay: 0.2 },
  { duration: 4.3, delay: 0.7 },
];

export default function MediaSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, scrollLeft: 0, moved: false });

  const scrollBy = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.65, 600);
    el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  const onDragStart = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    drag.current = { down: true, startX: e.pageX, scrollLeft: el.scrollLeft, moved: false };
    el.style.cursor = "grabbing";
  };

  const onDragMove = (e: React.MouseEvent) => {
    if (!drag.current.down || !scrollRef.current) return;
    e.preventDefault();
    const dx = e.pageX - drag.current.startX;
    if (Math.abs(dx) > 5) drag.current.moved = true;
    scrollRef.current.scrollLeft = drag.current.scrollLeft - dx;
  };

  const onDragEnd = () => {
    if (!drag.current.down) return;
    drag.current.down = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "";
  };

  const handleCardClick = (item: MediaItem) => {
    if (drag.current.moved) {
      drag.current.moved = false;
      return;
    }
    setSelectedItem(item);
    setModalOpen(true);
  };

  return (
    <section dir="rtl" className="relative w-full bg-[#ffefd0] font-thmanyah overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-20 right-0 w-[35rem] h-[35rem] bg-[#1D7671]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-10 left-0 w-[30rem] h-[30rem] bg-[#1D7671]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="relative w-full max-w-[100rem] mx-auto px-5 sm:px-12 lg:px-20 pt-16 md:pt-28 pb-4 md:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-right"
        >
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#114b48] mb-3 md:mb-5 leading-[1.2] font-thmanyah">
            لحظات{" "}
            <span className="relative inline-block px-1.5">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#1D7671] via-[#32b5ac] to-[#1D7671] drop-shadow-sm">
                ملهمة
              </span>
              <span className="absolute bottom-1 left-0 right-0 h-2 md:h-3 bg-gradient-to-r from-[#1D7671]/20 to-transparent rounded-full -skew-x-12" />
            </span>
          </h2>

          {/* Decorative line */}
          <div className="flex items-center gap-3 mt-2">
            <div className="w-12 md:w-20 h-[4px] bg-gradient-to-l from-[#1D7671]/60 to-transparent rounded-full" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#1D7671]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#1D7671]/20" />
          </div>
        </motion.div>
      </div>

      {/* Floating cards track */}
      <div className="relative w-full">
        <div
          ref={scrollRef}
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          className="w-full overflow-x-auto pb-6 md:pb-10 media-scroll-x cursor-grab active:cursor-grabbing select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <div className="flex gap-4 md:gap-6 lg:gap-8 px-5 sm:px-12 lg:px-20 w-max items-center py-8 md:py-12">
            {items.map((item, i) => (
              <FloatingCard
                key={item.id}
                item={item}
                index={i}
                config={floatConfig[i % floatConfig.length]}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>

        {/* Arrows — always visible */}
        <button
          onClick={() => scrollBy("right")}
          aria-label="التالي"
          className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 lg:right-8 z-20 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-white/70 backdrop-blur-xl border border-[#1D7671]/20 text-[#1D7671] hover:bg-white/90 hover:border-[#1D7671]/40 shadow-lg transition-all duration-200"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </button>
        <button
          onClick={() => scrollBy("left")}
          aria-label="السابق"
          className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 lg:left-8 z-20 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-white/70 backdrop-blur-xl border border-[#1D7671]/20 text-[#1D7671] hover:bg-white/90 hover:border-[#1D7671]/40 shadow-lg transition-all duration-200"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </button>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 lg:w-28 bg-gradient-to-l from-[#ffefd0] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 lg:w-28 bg-gradient-to-r from-[#ffefd0] to-transparent z-10" />
      </div>

      <MediaModal isOpen={modalOpen} item={selectedItem} onClose={() => setModalOpen(false)} />
    </section>
  );
}

/* ─── Floating Card ────────────────────────────────── */

function FloatingCard({
  item,
  index,
  config,
  onClick,
}: {
  item: MediaItem;
  index: number;
  config: { duration: number; delay: number };
  onClick: (item: MediaItem) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      animate={{ y: [0, -7, 0, -4, 0] }}
      transition={{
        duration: config.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: config.delay,
      }}
      className="shrink-0"
      style={{ perspective: 1500 }}
    >
      <motion.button
        initial={{ opacity: 0, y: 60, scale: 0.9, rotateY: -15, rotateX: 5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: -15, rotateX: 5 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 18,
          delay: Math.min(index * 0.08, 0.6),
        }}
        whileHover={{
          y: -15,
          scale: 1.08,
          rotateY: 0,
          rotateX: 0,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => onClick(item)}
        className="group relative w-[70vw] sm:w-64 md:w-72 lg:w-80 xl:w-[22rem] aspect-[3/4] rounded-[3rem] overflow-hidden p-4 md:p-5 bg-gradient-to-br from-[#e0f7f4]/50 via-[#80cec3]/40 to-[#1D7671]/60 backdrop-blur-2xl border-[2px] border-white/70 shadow-[inset_6px_6px_16px_rgba(255,255,255,0.9),inset_-8px_-8px_20px_rgba(17,75,72,0.8),0_20px_50px_rgba(0,0,0,0.25)] hover:shadow-[inset_8px_8px_20px_rgba(255,255,255,1),inset_-10px_-10px_25px_rgba(17,75,72,0.9),0_30px_60px_rgba(0,0,0,0.35)] transition-all duration-500 cursor-pointer outline-none"
        style={{ willChange: "transform", transformStyle: "preserve-3d" }}
      >
        {/* Animated swirling liquid colors inside the glass border */}
        <div className="absolute inset-0 rounded-[3rem] overflow-hidden z-0 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,rgba(224,247,244,0.1)_0%,rgba(128,206,195,0.8)_25%,rgba(29,118,113,0.9)_50%,rgba(128,206,195,0.8)_75%,rgba(224,247,244,0.1)_100%)] animate-[spin_8s_linear_infinite] blur-[20px]" />
        </div>

        {/* Liquid reflection highlight for 3D glass effect */}
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-white/60 via-transparent to-transparent pointer-events-none mix-blend-overlay opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-0" />
        
        {/* Inner Media Container */}
        <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-black/20 z-10 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
          {item.type === "video" ? (
            <>
              <img
                src={item.poster}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                draggable={false}
              />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/50 shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white fill-white mr-[-2px]" />
                </div>
              </div>
            </>
          ) : (
            <img
              src={item.src}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              draggable={false}
            />
          )}

          {/* Deep Recess Overlay for depth */}
          <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_8px_20px_rgba(0,0,0,0.5),inset_0_1px_3px_rgba(0,0,0,0.6)] pointer-events-none z-20 transition-opacity duration-500 group-hover:opacity-80" />

          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#114b48]/90 via-[#1D7671]/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20" />

          {/* Hover text */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 text-right pointer-events-none z-30"
            initial={false}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <span className="text-[10px] md:text-xs font-bold text-white/70 tracking-[0.15em] block mb-2 font-thmanyah">
              {item.type === "video" ? "فيديو" : "صورة"}
            </span>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-white mb-2 leading-tight font-thmanyah">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed line-clamp-3 font-light font-thmanyah">
              {item.description}
            </p>
          </motion.div>

          {/* Always-visible title */}
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-right pointer-events-none z-30">
            <h3
              className={`text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white leading-tight transition-opacity duration-300 font-thmanyah drop-shadow-md ${
                hovered ? "opacity-0" : "opacity-100"
              }`}
            >
              {item.title}
            </h3>
          </div>
        </div>

      </motion.button>
    </motion.div>
  );
}
