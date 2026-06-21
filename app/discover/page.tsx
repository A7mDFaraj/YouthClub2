"use client";

import { motion } from "framer-motion";
import { Users, Calendar, MapPin, Smartphone, ChevronRight, ArrowUpLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import SiteBackground from "../components/SiteBackground";

export default function ClubDetailsPage() {
  return (
    <SiteBackground className="font-sans pb-32" dir="rtl" waveColor="#82C1B9">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 pt-10">
        
        {/* Navigation */}
        <Link href="/">
          <motion.div 
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-[#1D7671]/70 font-semibold text-lg hover:text-[#fd5c3d] transition-colors mb-12"
          >
            <ChevronRight className="w-5 h-5" />
            العودة للرئيسية
          </motion.div>
        </Link>

        {/* Hero Header Re-imagined */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-white/40 backdrop-blur-2xl rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-6 lg:p-8 mb-8 md:mb-10 border border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.03)] overflow-hidden"
        >
          {/* Subtle background glow inside the header */}
          <div className="absolute top-0 right-0 w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] bg-gradient-to-br from-[#83e6d6]/20 to-[#ff9f9d]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-5 lg:gap-10 items-start lg:items-center">
            
            {/* Logo Section */}
            <div className="relative shrink-0 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff9f9d] to-[#fd5c3d] rounded-[1rem] md:rounded-[1.5rem] blur-xl opacity-30 translate-y-2 scale-90" />
              <div className="relative w-16 h-16 md:w-28 md:h-28 bg-white/20 backdrop-blur-xl rounded-[1rem] md:rounded-[1.25rem] p-1.5 md:p-2 shadow-xl border border-white/40 flex items-center justify-center">
                <img src="/club_logo.png" className="w-full h-full object-contain drop-shadow-sm mix-blend-multiply md:mix-blend-normal" alt="Club Logo" />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 text-center lg:text-right">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#1D7671] leading-[1.4] mb-2 md:mb-3 tracking-tight flex flex-wrap justify-center lg:justify-start gap-1.5 md:gap-2">
                جمعية لبنات لتمكين الفتيات
              </h1>
              
              <p className="text-xs sm:text-sm md:text-base text-[#1D7671]/80 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                برنامج صيفي متكامل يهدف إلى تمكين الفتيات وتطوير مهاراتهن القيادية والشخصية من خلال ورش عمل تفاعلية، ومشاريع إبداعية، وأنشطة ترفيهية تصنع قادة المستقبل.
              </p>
            </div>

            {/* CTA Section */}
            <div className="shrink-0 w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col items-center gap-2.5 md:gap-3 mt-2 lg:mt-0">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-[#ff9f9d] to-[#fd5c3d] text-white px-5 md:px-6 py-2.5 md:py-3 rounded-[1rem] md:rounded-[1.25rem] font-bold text-sm md:text-base overflow-hidden transition-all shadow-[0_10px_20px_rgba(253,92,61,0.3)] hover:shadow-[0_15px_30px_rgba(253,92,61,0.4)] w-full sm:flex-1 lg:w-full"
              >
                <span className="relative z-10 flex items-center gap-2">
                  سجل الآن
                  <ArrowUpLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform" />
                </span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="group flex items-center justify-center gap-2 bg-[#1D7671]/5 text-[#1D7671] border-2 border-[#1D7671]/20 px-5 md:px-6 py-2 md:py-2.5 rounded-[1rem] md:rounded-[1.25rem] font-bold text-sm md:text-base transition-all hover:bg-[#1D7671] hover:text-white hover:border-[#1D7671] w-full sm:flex-1 lg:w-full"
              >
                الموقع
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
            </div>

          </div>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          
          {/* Target Audience */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 lg:col-span-2 bg-[#0068a1] rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 shadow-[0_20px_40px_rgba(0,104,161,0.2)] flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Desktop Art (Hover) */}
            <div className="hidden md:block absolute bottom-0 right-0 w-full h-full opacity-10 pointer-events-none scale-150 origin-bottom-right group-hover:scale-110 transition-transform duration-700">
               <img src="/svg/art-02-br.svg" className="w-full h-full object-cover mix-blend-overlay" alt="" />
            </div>
            {/* Mobile Art (Scroll) */}
            <motion.div 
              initial={{ scale: 1.5 }}
              whileInView={{ scale: 1.1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ margin: "-50px", once: false }}
              className="md:hidden absolute bottom-0 right-0 w-full h-full opacity-10 pointer-events-none origin-bottom-right"
            >
               <img src="/svg/art-02-br.svg" className="w-full h-full object-cover mix-blend-overlay" alt="" />
            </motion.div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#83e6d6]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-[1rem] bg-white/10 text-white flex items-center justify-center mb-6 md:mb-8 backdrop-blur-md border border-white/10">
              <Users className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="relative z-10">
              <p className="text-white/80 font-bold mb-1 md:mb-1.5 text-sm md:text-base">الفئة المستهدفة</p>
              <h3 className="text-xl md:text-4xl font-black text-white tracking-tight">
                فتيات 12 - 15 سنة
              </h3>
            </div>
          </motion.div>

          {/* Duration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-1 lg:col-span-2 bg-[#83e6d6] rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 shadow-[0_20px_40px_rgba(131,230,214,0.3)] flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Desktop Art (Hover) */}
            <div className="hidden md:block absolute bottom-0 left-0 w-full h-full opacity-10 pointer-events-none scale-150 origin-bottom-left group-hover:scale-110 transition-transform duration-700">
               <img src="/svg/art-02-bl.svg" className="w-full h-full object-cover mix-blend-overlay" alt="" />
            </div>
            {/* Mobile Art (Scroll) */}
            <motion.div 
              initial={{ scale: 1.5 }}
              whileInView={{ scale: 1.1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ margin: "-50px", once: false }}
              className="md:hidden absolute bottom-0 left-0 w-full h-full opacity-10 pointer-events-none origin-bottom-left"
            >
               <img src="/svg/art-02-bl.svg" className="w-full h-full object-cover mix-blend-overlay" alt="" />
            </motion.div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/40 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-[1rem] bg-[#1D7671]/10 text-[#1D7671] flex items-center justify-center mb-6 md:mb-8 backdrop-blur-md border border-[#1D7671]/10">
              <Calendar className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="relative z-10">
              <p className="text-[#1D7671]/80 font-bold mb-1 md:mb-1.5 text-sm md:text-base">الفترة الزمنية</p>
              <h3 className="text-lg md:text-3xl font-black text-[#1D7671] leading-[1.3] tracking-tight">
                من 01 / 5 / 1447 <br/>
                لمدة 8 اسابيع
              </h3>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 lg:col-span-2 bg-[#1D7671] rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 shadow-[0_20px_40px_rgba(29,118,113,0.2)] flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Desktop Art (Hover) */}
            <div className="hidden md:block absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none scale-150 origin-top-left group-hover:scale-110 transition-transform duration-700">
               <img src="/svg/art-03-tl.svg" className="w-full h-full object-cover mix-blend-overlay" alt="" />
            </div>
            {/* Mobile Art (Scroll) */}
            <motion.div 
              initial={{ scale: 1.5 }}
              whileInView={{ scale: 1.1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ margin: "-50px", once: false }}
              className="md:hidden absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none origin-top-left"
            >
               <img src="/svg/art-03-tl.svg" className="w-full h-full object-cover mix-blend-overlay" alt="" />
            </motion.div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#83e6d6]/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-[1rem] bg-white/10 text-[#83e6d6] flex items-center justify-center mb-6 md:mb-8 backdrop-blur-md border border-white/10">
              <MapPin className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="relative z-10">
              <p className="text-[#83e6d6]/80 font-bold mb-1 md:mb-1.5 text-sm md:text-base">موقع النادي</p>
              <h3 className="text-lg md:text-3xl font-black text-white leading-[1.4] tracking-tight">
                جدة - حي الحمدانية <br/>
                ومشروع الأمير فواز
              </h3>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.a 
            href="https://wa.me/966533052433" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-1 lg:col-span-2 bg-gradient-to-br from-[#ff9f9d] to-[#fd5c3d] rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 shadow-[0_20px_40px_rgba(253,92,61,0.25)] flex flex-col justify-between relative overflow-hidden text-white group block cursor-pointer"
          >
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/20 rounded-full blur-2xl pointer-events-none" />
            {/* Desktop Art (Hover) */}
            <div className="hidden md:block absolute bottom-0 right-0 w-full h-full opacity-10 pointer-events-none scale-150 origin-bottom-right group-hover:scale-110 transition-transform duration-700">
               <img src="/svg/art-03-br.svg" className="w-full h-full object-cover mix-blend-overlay" alt="" />
            </div>
            {/* Mobile Art (Scroll) */}
            <motion.div 
              initial={{ scale: 1.5 }}
              whileInView={{ scale: 1.1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ margin: "-50px", once: false }}
              className="md:hidden absolute bottom-0 right-0 w-full h-full opacity-10 pointer-events-none origin-bottom-right"
            >
               <img src="/svg/art-03-br.svg" className="w-full h-full object-cover mix-blend-overlay" alt="" />
            </motion.div>
            
            <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-[1rem] bg-white/20 text-white flex items-center justify-center mb-6 md:mb-8 backdrop-blur-md border border-white/20">
              <Smartphone className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="relative z-10">
              <p className="text-white/80 font-bold mb-1 md:mb-1.5 text-sm md:text-base">للتواصل والاستفسار</p>
              <h3 className="text-2xl md:text-4xl font-black tracking-wider drop-shadow-sm" dir="ltr">
                053 305 2433
              </h3>
            </div>
          </motion.a>

        </div>
      </div>
    </SiteBackground>
  );
}
