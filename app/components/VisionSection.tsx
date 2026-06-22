"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const data = [
  {
    id: 'programs',
    title: 'برامج الرؤية',
    category: 'المبادرات',
    items: [
      {
        id: 'prog-1',
        title: 'برنامج جودة الحياة',
        description: 'يُعنى البرنامج بتحسين جودة حياة الفرد والأسرة من خلال تهيئة البيئة اللازمة لدعم واستحداث خيارات جديدة تعزز مشاركة المواطن والمقيم.',
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop',
      },
      {
        id: 'prog-2',
        title: 'برنامج تطوير الصناعة',
        description: 'يهدف إلى تحويل المملكة إلى قوة صناعية رائدة ومنصة لوجستية عالمية عبر أربعة قطاعات رئيسية.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
      },
      {
        id: 'prog-3',
        title: 'برنامج التحول الوطني',
        description: 'يهدف إلى تحقيق التميز في الأداء الحكومي وتأسيس البنية التحتية اللازمة لتحسين العيش وتعزيز التنمية المستدامة.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
      }
    ]
  },
  {
    id: 'strategies',
    title: 'الاستراتيجيات',
    category: 'التخطيط الاستراتيجي',
    items: [
      {
        id: 'strat-1',
        title: 'الاستراتيجية الوطنية للسياحة',
        description: 'تطوير القطاع السياحي ليكون أحد الروافد الأساسية للاقتصاد الوطني، وجذب السياح من مختلف أنحاء العالم.',
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
      },
      {
        id: 'strat-2',
        title: 'الاستراتيجية الوطنية للاستثمار',
        description: 'جذب الاستثمارات الأجنبية والمحلية لتعزيز النمو الاقتصادي المتنوع وخلق بيئة استثمارية جاذبة.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
      }
    ]
  },
  {
    id: 'projects',
    title: 'المشاريع الكبرى',
    category: 'التطوير والتنفيذ',
    items: [
      {
        id: 'proj-1',
        title: 'نيوم (NEOM)',
        description: 'مشروع حالم ومستقبل جديد، يركز على الابتكار والاستدامة ليصبح نموذجاً عالمياً رائداً في مختلف القطاعات.',
        image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop',
      },
      {
        id: 'proj-2',
        title: 'مشروع البحر الأحمر',
        description: 'وجهة سياحية فاخرة ممتدة على ساحل البحر الأحمر بتنوع بيئي فريد وتجارب استثنائية.',
        image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=2074&auto=format&fit=crop',
      },
      {
        id: 'proj-3',
        title: 'القدية',
        description: 'عاصمة الترفيه والرياضة والفنون في المملكة العربية السعودية، وجهة ترفيهية متكاملة.',
        image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=2000&auto=format&fit=crop',
      }
    ]
  }
];

export default function VisionSection() {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const lastScrollTime = useRef(0);
  const containerRef = useRef<HTMLElement>(null);

  const handleSectionChange = (newIndex: number) => {
    setActiveSectionIndex(newIndex);
    setActiveImageIndex(0);
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => 
      prev === data[activeSectionIndex].items.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => 
      prev === 0 ? data[activeSectionIndex].items.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleNativeWheel = (e: WheelEvent) => {
      const timeSinceLastScroll = Date.now() - lastScrollTime.current;
      
      // Throttling the scroll handling to prevent rapid section changes
      if (timeSinceLastScroll < 1000) {
        // Prevent default scrolling during cooldown to trap the scroll
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0) {
        // Scroll down -> next section
        if (activeSectionIndex < data.length - 1) {
          e.preventDefault();
          handleSectionChange(activeSectionIndex + 1);
          lastScrollTime.current = Date.now();
        }
      } else if (e.deltaY < 0) {
        // Scroll up -> prev section
        if (activeSectionIndex > 0) {
          e.preventDefault();
          handleSectionChange(activeSectionIndex - 1);
          lastScrollTime.current = Date.now();
        }
      }
    };

    const element = containerRef.current;
    if (element) {
      // Must use passive: false to be able to call e.preventDefault()
      element.addEventListener('wheel', handleNativeWheel, { passive: false });
    }

    return () => {
      if (element) {
        element.removeEventListener('wheel', handleNativeWheel);
      }
    };
  }, [activeSectionIndex]);

  const currentItem = data[activeSectionIndex].items[activeImageIndex];

  return (
    <section 
      dir="rtl"
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black font-thmanyah"
    >
      {/* Dynamic Main Background */}
      <AnimatePresence initial={false}>
        <motion.img 
          key={`bg-${activeSectionIndex}-${activeImageIndex}`}
          src={currentItem.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          alt={currentItem.title}
        />
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center h-full py-24 gap-12 lg:gap-24">
        
        {/* Right Side: Vertical Tabs */}
        {/* Note: In RTL flex-row, the first child is on the RIGHT */}
        <div className="hidden md:flex flex-col gap-12 items-start w-full md:w-1/3 z-20">
          {data.map((section, idx) => {
            const isActive = idx === activeSectionIndex;
            return (
              <button 
                key={section.id} 
                onClick={() => {
                  handleSectionChange(idx);
                  lastScrollTime.current = Date.now();
                }}
                className="group relative flex items-center gap-6 py-3 text-right w-full outline-none"
              >
                {/* Indicator Icon */}
                <div className="relative flex items-center justify-center w-8 h-8 shrink-0">
                   <div className={`w-3.5 h-3.5 rotate-45 transition-all duration-500 ${isActive ? 'bg-white scale-125' : 'bg-white/20 group-hover:bg-white/50'}`} />
                   {isActive && (
                     <motion.div
                       layoutId="activeTabIndicator"
                       className="absolute inset-0 border-2 border-white rotate-45"
                       initial={false}
                       transition={{ type: "spring", stiffness: 300, damping: 30 }}
                     />
                   )}
                </div>
                
                {/* Text Tab */}
                <span className={`text-4xl lg:text-5xl transition-all duration-500 tracking-wide ${isActive ? 'text-white scale-105 origin-right font-bold' : 'text-white/40 group-hover:text-white/70 font-light'}`}>
                  {section.title}
                </span>
              </button>
            )
          })}
        </div>

        {/* Left Side: Vertical Carousel Card */}
        <div className="w-full md:w-2/3 flex justify-end h-full md:h-auto items-center">
           <AnimatePresence mode="wait">
              <motion.div
                key={`card-${activeSectionIndex}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-lg bg-neutral-950/50 backdrop-blur-xl border border-white/10 rounded-[2rem] p-5 flex flex-col gap-6 shadow-2xl relative"
              >
                 {/* The Carousel Image Area inside the card */}
                 <div className="relative w-full h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden group">
                   <AnimatePresence initial={false}>
                     <motion.img 
                       key={`thumb-${activeSectionIndex}-${activeImageIndex}`}
                       src={currentItem.image}
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       exit={{ opacity: 0 }}
                       transition={{ duration: 0.4 }}
                       className="absolute inset-0 w-full h-full object-cover"
                       alt={currentItem.title}
                     />
                   </AnimatePresence>
                   
                   {/* Carousel Controls Overlay */}
                   <div className="absolute inset-0 flex items-center justify-between px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     {/* In RTL: Right arrow is Next visually (moving sequence to left), Left arrow is Prev. 
                         Actually: chevron-right points > (which means Previous in RTL reading direction).
                         chevron-left points < (which means Next in RTL reading direction).
                     */}
                     <button 
                       onClick={(e) => { e.stopPropagation(); handlePrevImage(); }} 
                       className="p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors backdrop-blur-md"
                     >
                       <ChevronRight className="w-6 h-6" /> {/* Points Right -> Prev */}
                     </button>
                     <button 
                       onClick={(e) => { e.stopPropagation(); handleNextImage(); }} 
                       className="p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors backdrop-blur-md"
                     >
                       <ChevronLeft className="w-6 h-6" /> {/* Points Left -> Next */}
                     </button>
                   </div>
                   
                   {/* Carousel Dots */}
                   <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                     {data[activeSectionIndex].items.map((_, idx) => (
                       <button 
                         key={idx}
                         onClick={() => setActiveImageIndex(idx)}
                         className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeImageIndex ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'}`}
                         aria-label={`Go to slide ${idx + 1}`}
                       />
                     ))}
                   </div>

                   {/* Gradient overlay on image bottom for better dot visibility */}
                   <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                 </div>

                 {/* Text Content Area */}
                 <div className="flex flex-col gap-4 px-2 pb-2">
                   <span className="text-sm font-semibold text-white/60 tracking-wider">
                     {data[activeSectionIndex].category}
                   </span>
                   <h3 className="text-3xl md:text-4xl font-bold text-white">
                     {currentItem.title}
                   </h3>
                   <p className="text-base md:text-lg text-white/80 leading-relaxed font-light min-h-[4.5rem]">
                     {currentItem.description}
                   </p>
                   
                   <div className="mt-4 flex gap-4">
                     <button className="flex-1 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300">
                       اكتشف المزيد
                     </button>
                     <button className="px-6 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300">
                       التفاصيل
                     </button>
                   </div>
                 </div>
              </motion.div>
           </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
