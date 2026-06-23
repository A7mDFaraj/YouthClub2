"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const data = [
  {
    id: 'programs',
    title: 'برامج الأندية',
    category: 'المبادرات الشبابية',
    items: [
      {
        id: 'prog-1',
        title: 'برنامج تنمية المهارات',
        description: 'يُعنى البرنامج بتعزيز القدرات الشخصية والمهنية للشباب من خلال توفير بيئة محفزة للتعلم والتجربة واكتساب معارف جديدة تسهم في بناء مستقبلهم.',
        image: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=1920&q=80',
      },
      {
        id: 'prog-2',
        title: 'برنامج الابتكار والإبداع',
        description: 'يهدف إلى تحويل أفكار الشباب إلى مشاريع واقعية ورائدة، وتوفير منصة داعمة تكتشف المواهب وتنمي القدرات في مختلف المجالات التقنية والفنية.',
        image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1920&q=80',
      },
      {
        id: 'prog-3',
        title: 'برنامج القيادة الشابة',
        description: 'يهدف إلى إعداد جيل من القادة الشباب القادرين على التأثير الإيجابي في مجتمعاتهم، وتأسيس قاعدة صلبة للمشاركة الفعالة في مسيرة التنمية المستدامة.',
        image: 'https://images.unsplash.com/photo-1444464666168-49b626426081?auto=format&fit=crop&w=1920&q=80',
      }
    ]
  },
  {
    id: 'strategies',
    title: 'استراتيجياتنا',
    category: 'التوجه الاستراتيجي',
    items: [
      {
        id: 'strat-1',
        title: 'استراتيجية تمكين الشباب',
        description: 'تطوير بيئة العمل الشبابي لتكون حاضنة أساسية للمواهب الوطنية، وجذب الطاقات الشبابية من مختلف التخصصات لدعم مسيرة الابتكار والإنجاز.',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80',
      },
      {
        id: 'strat-2',
        title: 'استراتيجية الشراكات المجتمعية',
        description: 'بناء شراكات استراتيجية مع مختلف القطاعات والمؤسسات لتعزيز أثر الأندية الشبابية وخلق فرص تنموية مستدامة تلبي تطلعات الشباب وطموحاتهم.',
        image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1920&q=80',
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
        title: 'منصة شباب المستقبل',
        description: 'مشروع رقمي متكامل ومستقبل جديد، يركز على التواصل الفعال وتطوير المهارات ليصبح الوجهة الأولى للشباب الطموح في مختلف المجالات.',
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80',
      },
      {
        id: 'proj-2',
        title: 'ملتقى المواهب الوطني',
        description: 'مساحة إبداعية ملهمة تجمع النخبة من الشباب الموهوب، وتوفر بيئة محفزة لعرض الإنجازات وتبادل الخبرات في تجارب استثنائية فريدة.',
        image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80',
      },
      {
        id: 'proj-3',
        title: 'مراكز الابتكار الشبابية',
        description: 'الوجهة الأولى للابتكار والأنشطة الإبداعية في الأندية، مساحة متكاملة توفر أحدث التقنيات والمرافق لدعم طموحات جيل المستقبل.',
        image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1920&q=80',
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
      className="relative w-full h-[100dvh] overflow-hidden flex items-center justify-center bg-black font-thmanyah"
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-center h-full py-16 md:py-24 gap-6 md:gap-12 lg:gap-24">
        
        {/* Right Side: Tabs (Horizontal on mobile, Vertical on desktop) */}
        {/* Note: In RTL flex-row, the first child is on the RIGHT */}
        <div className="flex flex-row md:flex-col gap-4 sm:gap-6 md:gap-12 items-center md:items-start w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] md:w-1/3 -mx-4 sm:-mx-6 md:mx-0 px-4 sm:px-6 md:px-0 z-20 overflow-x-auto md:overflow-visible pb-2 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {data.map((section, idx) => {
            const isActive = idx === activeSectionIndex;
            return (
              <button 
                key={section.id} 
                onClick={() => {
                  handleSectionChange(idx);
                  lastScrollTime.current = Date.now();
                }}
                className="group relative flex items-center gap-2 sm:gap-3 md:gap-6 py-2 md:py-3 text-right shrink-0 outline-none snap-center"
              >
                {/* Indicator Icon */}
                <div className="relative flex items-center justify-center w-4 h-4 md:w-8 md:h-8 shrink-0">
                   <div className={`w-1.5 h-1.5 md:w-3.5 md:h-3.5 rotate-45 transition-all duration-500 ${isActive ? 'bg-white scale-125' : 'bg-white/20 group-hover:bg-white/50'}`} />
                   {isActive && (
                     <motion.div
                       layoutId="activeTabIndicator"
                       className="absolute inset-0 border-[1.5px] md:border-2 border-white rotate-45"
                       initial={false}
                       transition={{ type: "spring", stiffness: 300, damping: 30 }}
                     />
                   )}
                </div>
                
                {/* Text Tab */}
                <span className={`text-base sm:text-lg md:text-4xl lg:text-5xl transition-all duration-500 tracking-wide whitespace-nowrap ${isActive ? 'text-white scale-105 origin-right font-bold' : 'text-white/40 group-hover:text-white/70 font-light'}`}>
                  {section.title}
                </span>
              </button>
            )
          })}
        </div>

        {/* Left Side: Carousel Card */}
        <div className="w-full md:w-2/3 flex justify-center md:justify-end h-full md:h-auto items-center">
           <AnimatePresence mode="wait">
              <motion.div
                key={`card-${activeSectionIndex}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-lg bg-neutral-950/50 backdrop-blur-xl border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-5 flex flex-col gap-4 md:gap-6 shadow-2xl relative"
              >
                 {/* The Carousel Image Area inside the card */}
                 <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-xl md:rounded-2xl overflow-hidden group">
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
                 <div className="flex flex-col gap-3 md:gap-4 px-2 pb-2">
                   <span className="text-xs md:text-sm font-semibold text-white/60 tracking-wider">
                     {data[activeSectionIndex].category}
                   </span>
                   <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                     {currentItem.title}
                   </h3>
                   <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed font-light min-h-[4rem] md:min-h-[4.5rem]">
                     {currentItem.description}
                   </p>
                   
                   <div className="mt-2 md:mt-4 flex gap-3 md:gap-4">
                     <button className="flex-1 py-2.5 md:py-3.5 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 text-sm md:text-base">
                       اكتشف المزيد
                     </button>
                     <button className="px-4 md:px-6 py-2.5 md:py-3.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 text-sm md:text-base">
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
