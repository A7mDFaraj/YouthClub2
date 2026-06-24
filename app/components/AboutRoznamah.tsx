"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function AboutRoznamah() {
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
                منصة رقمية موحّدة تجمع الأندية الشبابية والجهات ذات العلاقة، وتُسهّل استكشافها والوصول السريع لبياناتها وتفاصيلها الجغرافية لزيادة نطاق التكامل الفعال.
              </p>
            </motion.div>

            {/* Horizontal Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              
              {/* Services Card */}
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
                    خدمات الروزنامة
                  </h3>
                  
                  <p className="relative z-10 text-gray-700 text-sm sm:text-base leading-relaxed mb-5 grow font-medium">
                    تتيح الروزنامة استعراض الأندية الشبابية حسب المنطقة والمدينة ومجالات الاهتمام، مع عرض بيانات التواصل والموقع الجغرافي مدعومة بلوحة تحكم لتحديث بياناتك بسهولة.
                  </p>

                  <ul className="relative z-10 flex flex-col gap-3 text-sm font-bold text-[#233A77]">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#1C81AC] shrink-0 mt-0.5" /> <span>استعراض الأندية حسب المناطق</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#1C81AC] shrink-0 mt-0.5" /> <span>فلاتر حسب مجالات الاهتمام</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#1C81AC] shrink-0 mt-0.5" /> <span>بيانات التواصل والمواقع الجغرافية</span></li>
                  </ul>
                </div>
              </motion.div>

              {/* Importance Card */}
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
                    أهمية المنصة
                  </h3>
                  
                  <p className="relative z-10 text-gray-700 text-sm sm:text-base leading-relaxed mb-6 grow font-medium">
                    تسهم المنصة في حصر بيانات الأندية الشبابية، وتوفير مصدر وطني موثوق يساعد الشباب والمهتمين وصنّاع القرار على بناء معرفة أوضح بالقطاع، وتعزيز فرص التواصل والتعاون.
                  </p>

                  <div className="relative z-10 flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 bg-gradient-to-bl from-white to-[#ffefd0]/30 rounded-xl p-3 border border-[#0620a5]/5 text-center shadow-sm">
                      <div className="text-[#0620a5] text-2xl font-black mb-1 drop-shadow-sm">+210</div>
                      <div className="text-gray-500 text-xs font-bold">نادي شبابي</div>
                    </div>
                    <div className="flex-1 bg-gradient-to-bl from-white to-[#ffefd0]/30 rounded-xl p-3 border border-[#0620a5]/5 text-center shadow-sm">
                      <div className="text-[#0620a5] text-2xl font-black mb-1 drop-shadow-sm">13</div>
                      <div className="text-gray-500 text-xs font-bold">منطقة إدارية</div>
                    </div>
                  </div>
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
                {/* Generated SVG Art Blocks Grid (Hidden for future use per client request) */}
                {false && (
                  <div className="grid grid-cols-2 grid-rows-2 w-full h-[calc(100%-60px)] rounded-xl overflow-hidden gap-1 bg-white">
                    
                    {/* Top Left - Yellow Circle representing Sun */}
                    <div className="bg-[#facc15]/20 relative flex items-center justify-center overflow-hidden">
                      <div className="w-20 h-20 rounded-full border-[8px] border-[#facc15] opacity-80"></div>
                      <div className="absolute bottom-0 w-full h-1/2 bg-white/40 backdrop-blur-sm border-t border-white"></div>
                    </div>
                    
                    {/* Top Right - Blue Waves */}
                    <div className="bg-[#1C81AC] relative overflow-hidden flex items-center justify-center">
                      <svg className="absolute w-[200%] h-[200%] -left-[50%] -top-[50%] text-white/30" viewBox="0 0 100 100" fill="none">
                        <path d="M0 40 Q 25 20 50 40 T 100 40" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                        <path d="M0 55 Q 25 35 50 55 T 100 55" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                        <path d="M0 70 Q 25 50 50 70 T 100 70" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                      </svg>
                    </div>
                    
                    {/* Bottom Left - Coral Starburst */}
                    <div className="bg-[#fd5c3d] relative flex items-center justify-center overflow-hidden">
                      <svg className="w-24 h-24 text-white/40 transform rotate-12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 1L14.5 9.5L23 12L14.5 14.5L12 23L9.5 14.5L1 12L9.5 9.5L12 1Z" />
                      </svg>
                    </div>
                    
                    {/* Bottom Right - Indigo Lines */}
                    <div className="bg-[#0620a5] relative overflow-hidden">
                      <div className="absolute inset-0" style={{ background: "repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.2) 8px, rgba(255,255,255,0.2) 16px)" }}></div>
                    </div>
                    
                  </div>
                )}

                {/* Using Brand SVG Art Blocks from public/svg */}
                <div className="grid grid-cols-2 grid-rows-2 w-full h-[calc(100%-60px)] rounded-xl overflow-hidden gap-1 bg-white">
                  {/* Grid Item 1: Visual Top Right (because of RTL) */}
                  <div className="bg-[#ffefd0]/40 flex items-center justify-center p-3 relative overflow-hidden"><img src="/svg/art-01-tl.svg" alt="Brand Art 1" className="w-[150%] h-[150%] object-contain" /></div>
                  {/* Grid Item 2: Visual Top Left (because of RTL) */}
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

        {/* Bottom Content: CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative group mt-14 font-thmanyah pt-8"
        >
          {/* Stacked Background Layers */}
          <div className="absolute top-0 left-10 right-10 bottom-0 rounded-[3rem] bg-white/40 border border-white/60 transition-all duration-500 group-hover:-translate-y-2"></div>
          <div className="absolute top-4 left-5 right-5 bottom-0 rounded-[3rem] bg-white/60 border border-white/80 transition-all duration-500 group-hover:-translate-y-1"></div>

          {/* Main Card Content */}
          <div className="relative bg-white/70 backdrop-blur-md rounded-[2.5rem] shadow-[0_15px_50px_rgba(0,104,161,0.08)] border border-white overflow-hidden transition-all duration-500 z-10 group-hover:-translate-y-1 group-hover:shadow-[0_20px_60px_rgba(0,104,161,0.12)]">
            {/* Partner-style decorative corners for CTA */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#0620a5]/10 to-transparent rounded-bl-full transition-transform duration-700 group-hover:scale-[1.35] origin-top-right pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#fd5c3d]/20 to-transparent rounded-tr-full transition-transform duration-700 group-hover:scale-[1.35] origin-bottom-left pointer-events-none"></div>

            <div className="relative z-10 p-10 sm:p-14 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-6 sm:gap-8 text-center sm:text-right flex-1">
                <div className="flex-1 max-w-2xl flex flex-col items-center sm:items-start">
                  
                  <h3 className="text-[#0620a5] text-3xl sm:text-4xl lg:text-5xl font-black mb-4 font-thmanyah leading-snug drop-shadow-sm">
                    هل تمثّل جمعية شبابية؟
                  </h3>

                  <p className="text-[#233A77]/80 text-base sm:text-lg lg:text-xl leading-relaxed font-thmanyah font-medium max-w-xl">
                    سجّل بيانات النادي الشبابي التابع لجمعيتك، وأتِح له الظهور ضمن روزنامة الأندية الشبابية؛ لتسهيل وصول المستفيدين إليه.
                  </p>
                </div>
              </div>
              
              <div className="flex-shrink-0 w-full sm:w-auto mt-6 lg:mt-0">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-full font-bold text-lg text-white overflow-hidden shadow-[0_10px_30px_rgba(253,92,61,0.3)] hover:shadow-[0_15px_40px_rgba(253,92,61,0.5)] transition-all duration-500 font-thmanyah group/btn bg-gradient-to-r from-[#fd5c3d] to-[#ff7b63]"
                >
                  {/* Shine effect for the orange button */}
                  <div className="absolute inset-0 rounded-full border border-white/30"></div>
                  <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover/btn:left-[200%] transition-all duration-700 ease-out"></div>
                  
                  <span className="relative z-10 flex items-center gap-3 tracking-wide">
                    سجل بيانات ناديك الآن
                    <ArrowLeft className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
