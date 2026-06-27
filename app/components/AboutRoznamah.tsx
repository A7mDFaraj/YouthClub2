"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutRoznamah() {
  const stats = [
    { value: "+200", label: "نادٍ شبابي" },
    { value: "13", label: "منطقة" },
    { value: "140", label: "جمعية شبابية منفذة" },
    { value: "70", label: "مدينة ومحافظة" },
    { value: "30 ألف", label: "مستفيد متوقع" },
    { value: "20", label: "شريكًا في الأثر" },
    { value: "21 يومًا", label: "متوسط مدة النادي" },
    { value: "145", label: "ناديًا للشباب" },
    { value: "56", label: "ناديًا للفتيات" },
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#ffefd0] via-[#fff8ed] to-[#ffefd0] font-thmanyah" dir="rtl">
      
      {/* Dynamic Brand Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-70">
        {/* Teal glowing orb */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0, -50, 0], 
            y: [0, -50, 100, 50, 0],
            scale: [1, 1.2, 0.9, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -right-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-[#1C81AC]/20 blur-[100px]"
        />
        
        {/* Coral/Orange glowing orb */}
        <motion.div 
          animate={{ 
            x: [0, -80, 0, 80, 0], 
            y: [0, 80, -40, 60, 0],
            scale: [1.1, 0.9, 1.2, 0.9, 1.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-[30%] -left-[10%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-[#fd5c3d]/15 blur-[120px]"
        />
        
        {/* Deep Blue glowing orb */}
        <motion.div 
          animate={{ 
            x: [0, 60, -60, 40, 0], 
            y: [0, 40, 80, -20, 0],
            scale: [0.9, 1.1, 0.8, 1.1, 0.9]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute bottom-[20%] right-[15%] w-[30vw] h-[30vw] max-w-[450px] max-h-[450px] rounded-full bg-[#0620a5]/15 blur-[100px]"
        />

        {/* Indigo/Purple glowing orb */}
        <motion.div 
          animate={{ 
            x: [0, -40, 50, -30, 0], 
            y: [0, -60, -30, 50, 0],
            scale: [1, 1.1, 0.9, 1.2, 1]
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute -bottom-[5%] left-[20%] w-[45vw] h-[45vw] max-w-[650px] max-h-[650px] rounded-full bg-[#233A77]/10 blur-[120px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 font-thmanyah">
        
        {/* Top Content: Split Layout (Text/Cards on right, Visuals on left) */}
        <div className="flex flex-col xl:flex-row gap-12 lg:gap-16 mb-16 items-center xl:items-start">
          
          {/* Right Column: Text & Features */}
          <div className="flex-1 flex flex-col justify-center w-full">
            
            {/* Intro Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-[#0620a5] text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight font-thmanyah drop-shadow-sm">
                نبذة عن <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#1C81AC] to-[#0620a5]">الروزنامة</span>
                  <motion.span 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="absolute bottom-2 right-0 h-3 sm:h-4 bg-gradient-to-r from-[#1C81AC]/20 to-[#fd5c3d]/20 -z-0 rounded-full"
                  />
                </span>
              </h2>
              
              <p className="text-[#233A77]/80 text-lg sm:text-xl leading-relaxed max-w-2xl font-thmanyah font-medium">
                روزنامة رقمية موحّدة تجمع أكثر من 200 نادٍ للشباب والفتيات في الصيف، تنفذها الجمعيات الشبابية في مختلف مناطق المملكة؛ لتقريب الفرص، وتيسير الوصول، وصناعة صيف يشع حياة.
              </p>
            </motion.div>

            {/* Horizontal Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              
              {/* Card 1: ماذا تقدم */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group h-full pt-6 font-thmanyah"
              >
                {/* Stacked Background Layers */}
                <div className="absolute top-0 left-8 right-8 bottom-0 rounded-[2.5rem] bg-white/40 border border-white/60 transition-all duration-500 group-hover:-translate-y-2"></div>
                <div className="absolute top-3 left-4 right-4 bottom-0 rounded-[2.5rem] bg-white/60 border border-white/80 transition-all duration-500 group-hover:-translate-y-1"></div>

                {/* Main Card Content */}
                <div className="relative bg-white/80 backdrop-blur-md rounded-[2.5rem] p-6 sm:p-8 shadow-[0_15px_50px_rgba(0,104,161,0.05)] border border-white overflow-hidden flex flex-col h-full transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_60px_rgba(0,104,161,0.1)] z-10">
                  {/* Partner-style decorative corners */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1C81AC]/15 to-transparent rounded-bl-full transition-transform duration-700 group-hover:scale-[1.35] origin-top-right pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#83e6d6]/30 to-transparent rounded-tr-full transition-transform duration-700 group-hover:scale-[1.35] origin-bottom-left pointer-events-none"></div>
                  
                  <h3 className="relative z-10 text-[#0620a5] text-xl sm:text-2xl font-black mb-4">
                    ماذا تقدم الروزنامة؟
                  </h3>
                  
                  <p className="relative z-10 text-gray-700 text-sm sm:text-base leading-relaxed mb-5 grow font-medium">
                    تجمع الروزنامة الأندية الشبابية صيف 1448هـ | 2026م في منصة وطنية موحّدة، وتتيح استعراضها حسب المنطقة، المدينة، الفئة، الموعد، ونوع النادي؛ ليصل الشباب والفتيات إلى الفرصة الأقرب لهم بسهولة.
                  </p>

                  <ul className="relative z-10 flex flex-col gap-3 text-sm font-bold text-[#233A77]">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#1C81AC] shrink-0 mt-0.5" /> <span>استعراض الأندية حسب مناطق المملكة</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#1C81AC] shrink-0 mt-0.5" /> <span>التصفية حسب الفئة والموعد ونوع النادي</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#1C81AC] shrink-0 mt-0.5" /> <span>مواقع التنفيذ وروابط التسجيل في مكان واحد</span></li>
                  </ul>
                </div>
              </motion.div>

              {/* Card 2: جمعيات شبابية */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative group h-full pt-6 font-thmanyah"
              >
                {/* Stacked Background Layers */}
                <div className="absolute top-0 left-8 right-8 bottom-0 rounded-[2.5rem] bg-white/40 border border-white/60 transition-all duration-500 group-hover:-translate-y-2"></div>
                <div className="absolute top-3 left-4 right-4 bottom-0 rounded-[2.5rem] bg-white/60 border border-white/80 transition-all duration-500 group-hover:-translate-y-1"></div>

                {/* Main Card Content */}
                <div className="relative bg-white/80 backdrop-blur-md rounded-[2.5rem] p-6 sm:p-8 shadow-[0_15px_50px_rgba(253,92,61,0.05)] border border-white overflow-hidden flex flex-col h-full transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_60px_rgba(253,92,61,0.1)] z-10">
                  {/* Partner-style decorative corners */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#fd5c3d]/15 to-transparent rounded-bl-full transition-transform duration-700 group-hover:scale-[1.35] origin-top-right pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#ff9f9d]/30 to-transparent rounded-tr-full transition-transform duration-700 group-hover:scale-[1.35] origin-bottom-left pointer-events-none"></div>
                  
                  <h3 className="relative z-10 text-[#0620a5] text-xl sm:text-2xl font-black mb-4">
                    جمعيات شبابية تصنع الأثر
                  </h3>
                  
                  <p className="relative z-10 text-gray-700 text-sm sm:text-base leading-relaxed mb-6 grow font-medium">
                    تُبرز الروزنامة اتساع حضور الجمعيات الشبابية في مختلف مناطق المملكة، وتعكس جهودها في تنفيذ أندية نوعية للشباب والفتيات، ضمن منظومة وطنية موحّدة تسهم في استثمار أوقاتهم، وتنمية مهاراتهم، وتعزيز قيمهم.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Left Column: Visuals (Floating Cards with SVG Art) */}
          <div className="flex-1 relative w-full min-h-[450px] lg:min-h-[550px] flex items-center justify-center mt-12 xl:mt-0">
            
            <div className="absolute w-full h-full max-w-[450px] max-h-[550px]">
              {/* Decorative blurred background blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#1C81AC]/20 rounded-full blur-[80px]"></div>
              <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-[#fd5c3d]/20 rounded-full blur-[60px]"></div>

              {/* Back Card (Pattern / Colorful) */}
              <motion.div 
                animate={{ y: [-15, 15, -15], rotate: [-8, -4, -8] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] right-[10%] w-[240px] h-[320px] rounded-[2rem] bg-gradient-to-br from-[#fd5c3d] via-[#1C81AC] to-[#0620a5] shadow-[0_20px_50px_rgba(6,32,165,0.3)] transform -rotate-6 border-4 border-white/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] bg-[length:20px_20px]"></div>
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>

              {/* Front Card (Abstract SVG Art Blocks) */}
              <motion.div 
                animate={{ y: [10, -10, 10], rotate: [4, 8, 4] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[20%] left-[5%] w-[280px] h-[360px] rounded-[2rem] bg-[#ffefd0] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-[8px] border-white p-2 flex flex-col transform rotate-6 overflow-hidden"
              >
                {/* Using Brand SVG Art Blocks from public/svg */}
                <div className="grid grid-cols-2 grid-rows-2 w-full h-[calc(100%-60px)] rounded-xl overflow-hidden gap-1 bg-white">
                  <div className="bg-[#ffefd0]/40 flex items-center justify-center p-3 relative overflow-hidden"><img src="/svg/art-01-tl.svg" alt="Brand Art 1" className="w-[150%] h-[150%] object-contain" /></div>
                  <div className="bg-[#1C81AC]/10 flex items-center justify-center p-3 relative overflow-hidden"><img src="/svg/art-02-bl.svg" alt="Brand Art 2" className="w-[150%] h-[150%] object-contain" /></div>
                  <div className="bg-[#fd5c3d]/10 flex items-center justify-center p-3 relative overflow-hidden"><img src="/svg/art-03-bl.svg" alt="Brand Art 3" className="w-[150%] h-[150%] object-contain" /></div>
                  <div className="bg-[#facc15]/10 flex items-center justify-center p-3 relative overflow-hidden"><img src="/svg/art-03-tl-yellow.svg" alt="Brand Art 4" className="w-[150%] h-[150%] object-contain" /></div>
                </div>

                {/* Card Footer (Polaroid Style) */}
                <div className="absolute bottom-0 left-0 w-full h-[60px] bg-white flex items-center justify-center border-t border-gray-100">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#facc15]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#1C81AC]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#fd5c3d]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#0620a5]"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stats Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-24 pt-12 border-t border-[#0620a5]/10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`relative group bg-white/70 backdrop-blur-sm rounded-3xl p-6 lg:p-8 text-center border border-white shadow-[0_10px_40px_rgba(0,104,161,0.06)] hover:shadow-[0_20px_50px_rgba(0,104,161,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden ${i === 8 ? "col-span-2 sm:col-span-1" : ""}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1C81AC]/[0.03] to-[#fd5c3d]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0620a5] mb-3 drop-shadow-sm group-hover:scale-110 transition-transform duration-500 origin-bottom">{stat.value}</div>
                  <div className="text-gray-600 font-bold text-sm sm:text-lg leading-snug">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

