"use client";

import { motion } from "framer-motion";
import { Users, Calendar, MapPin, Smartphone, ChevronRight, ArrowUpLeft, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ClubDetailsPage() {
  return (
    <div className="min-h-screen bg-[#ffefd0] font-sans pb-32 relative overflow-hidden" dir="rtl">
      


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
          className="relative bg-white/40 backdrop-blur-2xl rounded-[3rem] p-8 md:p-12 mb-16 border border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.03)] overflow-hidden"
        >
          {/* Subtle background glow inside the header */}
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-[#83e6d6]/20 to-[#ff9f9d]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center">
            
            {/* Logo Section */}
            <div className="relative shrink-0 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff9f9d] to-[#fd5c3d] rounded-[2.5rem] blur-xl opacity-40 translate-y-2 scale-90" />
              <div className="relative w-32 h-32 md:w-48 md:h-48 bg-white rounded-[2.5rem] p-5 shadow-xl border border-white/50 flex items-center justify-center">
                <img src="/club_logo.png" className="w-full h-full object-contain drop-shadow-sm" alt="Club Logo" />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 text-center lg:text-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1D7671] leading-[1.2] mb-6 tracking-tight">
                جمعية لبنات <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#fd5c3d] to-[#ff9f9d]">
                  لتمكين الفتيات
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-[#1D7671]/70 leading-relaxed font-medium max-w-3xl mx-auto lg:mx-0">
                برنامج صيفي متكامل يهدف إلى تمكين الفتيات وتطوير مهاراتهن القيادية والشخصية من خلال ورش عمل تفاعلية، ومشاريع إبداعية، وأنشطة ترفيهية تصنع قادة المستقبل.
              </p>
            </div>

            {/* CTA Section */}
            <div className="shrink-0 w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col items-center gap-3 mt-4 lg:mt-0">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#ff9f9d] to-[#fd5c3d] text-white px-10 py-5 rounded-[2rem] font-bold text-xl overflow-hidden transition-all shadow-[0_15px_30px_rgba(253,92,61,0.3)] hover:shadow-[0_20px_40px_rgba(253,92,61,0.4)] w-full sm:flex-1 lg:w-full"
              >
                <span className="relative z-10 flex items-center gap-2">
                  سجل الآن
                  <ArrowUpLeft className="w-6 h-6 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform" />
                </span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="group flex items-center justify-center gap-2 bg-[#1D7671]/10 text-[#1D7671] border-2 border-[#1D7671]/20 px-10 py-4 rounded-[2rem] font-bold text-xl transition-all hover:bg-[#1D7671] hover:text-white hover:border-[#1D7671] w-full sm:flex-1 lg:w-full"
              >
                الموقع
                <MapPin className="w-5 h-5" />
              </motion.a>
            </div>

          </div>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Target Audience */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 lg:col-span-2 bg-[#0068a1] rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_40px_rgba(0,104,161,0.2)] flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute bottom-0 right-0 w-full h-full opacity-10 pointer-events-none scale-150 origin-bottom-right group-hover:scale-110 transition-transform duration-700">
               <img src="/svg/art-02-br.svg" className="w-full h-full object-cover mix-blend-overlay" alt="" />
            </div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#83e6d6]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-10 backdrop-blur-md border border-white/10">
              <Users className="w-8 h-8" />
            </div>
            <div className="relative z-10">
              <p className="text-white/80 font-bold mb-2 text-lg">الفئة المستهدفة</p>
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                فتيات <span className="text-[#ff9f9d]">12 - 15</span> سنة
              </h3>
            </div>
          </motion.div>

          {/* Duration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-1 lg:col-span-2 bg-[#83e6d6] rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_40px_rgba(131,230,214,0.3)] flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute bottom-0 left-0 w-full h-full opacity-10 pointer-events-none scale-150 origin-bottom-left group-hover:scale-110 transition-transform duration-700">
               <img src="/svg/art-02-bl.svg" className="w-full h-full object-cover mix-blend-overlay" alt="" />
            </div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/40 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#1D7671]/10 text-[#1D7671] flex items-center justify-center mb-10 backdrop-blur-md border border-[#1D7671]/10">
              <Calendar className="w-8 h-8" />
            </div>
            <div className="relative z-10">
              <p className="text-[#1D7671]/80 font-bold mb-2 text-lg">الفترة الزمنية</p>
              <h3 className="text-2xl md:text-4xl font-black text-[#1D7671] leading-[1.3] tracking-tight">
                من 01 / 5 / 1447 <br/>
                <span className="text-[#0068a1]">لمدة 8 اسابيع</span>
              </h3>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 lg:col-span-2 bg-[#1D7671] rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_40px_rgba(29,118,113,0.2)] flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none scale-150 origin-top-left group-hover:scale-110 transition-transform duration-700">
               <img src="/svg/art-03-tl.svg" className="w-full h-full object-cover mix-blend-overlay" alt="" />
            </div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#83e6d6]/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/10 text-[#83e6d6] flex items-center justify-center mb-10 backdrop-blur-md border border-white/10">
              <MapPin className="w-8 h-8" />
            </div>
            <div className="relative z-10">
              <p className="text-[#83e6d6]/80 font-bold mb-2 text-lg">موقع النادي</p>
              <h3 className="text-2xl md:text-4xl font-black text-white leading-[1.4] tracking-tight">
                جدة - حي الحمدانية <br/>
                ومشروع الأمير فواز
              </h3>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.a 
            href="https://wa.me/966533052433" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-1 lg:col-span-2 bg-gradient-to-br from-[#ff9f9d] to-[#fd5c3d] rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_40px_rgba(253,92,61,0.25)] flex flex-col justify-between relative overflow-hidden text-white group block cursor-pointer"
          >
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-full h-full opacity-10 pointer-events-none scale-150 origin-bottom-right group-hover:scale-110 transition-transform duration-700">
               <img src="/svg/art-03-br.svg" className="w-full h-full object-cover mix-blend-overlay" alt="" />
            </div>
            
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/20 text-white flex items-center justify-center mb-10 backdrop-blur-md border border-white/20">
              <Smartphone className="w-8 h-8" />
            </div>
            <div className="relative z-10">
              <p className="text-white/80 font-bold mb-2 text-lg">للتواصل والاستفسار</p>
              <h3 className="text-4xl md:text-5xl font-black tracking-wider drop-shadow-sm" dir="ltr">
                053 305 2433
              </h3>
            </div>
          </motion.a>

        </div>
      </div>
    </div>
  );
}
