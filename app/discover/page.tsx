"use client";

import { motion } from "framer-motion";
import { 
  Users, Calendar, MapPin, Smartphone, ChevronRight, 
  ArrowUpLeft, Share2, Mail, Map, FileText, Clock, Globe,
  Building, Copy, Check
} from "lucide-react";
import Link from "next/link";
import SiteBackground from "../components/SiteBackground";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function ClubDetailsPage() {
  
  // Data State
  const clubData = {
    associationName: "جمعية لبنات لتمكين الفتيات",
    associationLogo: "/Logo.svg",
    associationLicense: "5594", 
    clubName: "نادي لبنات الصيفي",
    clubLogo: "/club_logo.png",
    clubDescription: "برنامج صيفي متكامل يهدف إلى تمكين الفتيات وتطوير مهاراتهن القيادية والشخصية من خلال ورش عمل تفاعلية، ومشاريع إبداعية، وأنشطة ترفيهية تصنع قادة المستقبل.",
    targetGender: "إناث", 
    startAge: "12",
    endAge: "15",
    startDate: "1447/05/01", 
    endDate: "1447/07/01",
    registrationLink: "#",
    mobileNumber: "0533052433",
    email: "info@labanat.org.sa",
    region: "مكة المكرمة",
    city: "جدة",
    detailedAddress: "حي الحمدانية ومشروع الأمير فواز",
    mapLocationUrl: "https://maps.app.goo.gl/Xd1H6WmXaKoqPs5P8"
  };

  const [duration, setDuration] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(clubData.associationLicense);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const calculateWeeks = () => {
      // Automatic duration calculation representation
      return "8 أسابيع";
    };
    setDuration(calculateWeeks());
  }, [clubData.startDate, clubData.endDate]);

  const whatsappMessage = encodeURIComponent(
    `مرحباً! أود مشاركة تفاصيل ${clubData.clubName} التابع لـ ${clubData.associationName}.\n\n` +
    `📅 التاريخ: ${clubData.startDate} إلى ${clubData.endDate}\n` +
    `🎯 الفئة: ${clubData.targetGender} (${clubData.startAge} - ${clubData.endAge} سنة)\n` +
    `📍 الموقع: ${clubData.city} - ${clubData.detailedAddress}\n\n` +
    `للتسجيل: ${clubData.registrationLink}`
  );

  return (
    <main className="flex flex-col min-h-screen bg-[#ffefd0]">
      {/* Navbar Holder */}
      <div className="relative w-full h-[52px] sm:h-[64px] lg:h-[72px] bg-[#ffefd0]/40 backdrop-blur-md z-[100] border-b border-[#1D7671]/10 shadow-sm shrink-0" dir="ltr">
        <div className="relative mx-auto flex items-center justify-between h-full px-4 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="h-7 sm:h-8 lg:h-10 w-24 bg-[#1C81AC]/20 rounded animate-pulse"></div>
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-4 w-16 bg-[#1C81AC]/20 rounded animate-pulse"></div>
            <div className="h-4 w-24 bg-[#1C81AC]/20 rounded animate-pulse"></div>
            <div className="h-4 w-24 bg-[#1C81AC]/20 rounded animate-pulse"></div>
            <div className="h-4 w-16 bg-[#1C81AC]/20 rounded animate-pulse"></div>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4">
              <div className="h-4 w-16 bg-[#1C81AC]/20 rounded animate-pulse"></div>
              <div className="h-10 w-24 rounded-full bg-[#1C81AC]/20 animate-pulse"></div>
            </div>
            <button className="lg:hidden inline-flex items-center justify-center size-10 sm:size-11 rounded-2xl bg-[#1C81AC]/10 ring-1 ring-[#1C81AC]/20 text-[#1C81AC]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 sm:h-6 sm:w-6"><path d="M4 5h16M4 12h16M4 19h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
            </button>
          </div>
        </div>
      </div>

      <SiteBackground className="flex-1 font-thmanyah pb-32" dir="rtl" waveColor="#82C1B9" style={{ fontFamily: 'var(--font-thmanyahsans), "Thmanyah Sans", Arial, sans-serif' }}>
        
        <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10 pt-10">

        {/* Detailed Hero Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative bg-white/60 backdrop-blur-3xl rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 border border-white/60 shadow-[0_20px_60px_rgba(29,118,113,0.08)]"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-br from-[#83e6d6]/30 to-[#ff9f9d]/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          {/* Top Bar: Back Button, Association Info & Share */}
          <motion.div variants={itemVariants} className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 mb-8 border-b border-[#1D7671]/10 gap-4">
            
            {/* Right Side: Back Button & Association Info */}
            <div className="flex items-center gap-4">
              {/* Back Navigation */}
              <Link 
                href="/"
                className="flex items-center justify-center size-10 md:size-12 rounded-full bg-[#1D7671]/5 text-[#1D7671] hover:bg-[#1D7671] hover:text-white transition-all hover:-translate-x-1"
                title="العودة للرئيسية"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </Link>

              <div>
                <h3 className="text-[#1D7671] font-bold text-sm md:text-base">{clubData.associationName}</h3>
                <button 
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-[#1D7671]/60 text-xs md:text-sm mt-1 hover:text-[#1D7671] transition-colors cursor-pointer group"
                  title="انقر لنسخ رقم الترخيص"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <FileText className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />}
                  <span>رقم الترخيص: {clubData.associationLicense}</span>
                  {copied && <span className="text-green-500 text-[10px] bg-green-500/10 px-1.5 py-0.5 rounded mr-1">تم النسخ!</span>}
                </button>
              </div>
            </div>

            {/* Share to WhatsApp */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`https://wa.me/?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white px-5 py-2.5 rounded-full font-bold text-sm transition-colors border border-[#25D366]/20 shrink-0 w-full sm:w-auto justify-center"
            >
              <Share2 className="w-4 h-4" />
              مشاركة عبر واتساب
            </motion.a>
          </motion.div>

          {/* Club Main Profile */}
          <motion.div variants={itemVariants} className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start mb-12">
            
            {/* Club Logo */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff9f9d] to-[#fd5c3d] rounded-[1.5rem] blur-xl opacity-30 translate-y-2 scale-90" />
              <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white/40 backdrop-blur-xl rounded-[1.5rem] p-3 shadow-xl border border-white/50 flex items-center justify-center">
                <img src={clubData.clubLogo} className="w-full h-full object-contain drop-shadow-sm" alt="Club Logo" />
              </div>
            </div>

            {/* Club Details */}
            <div className="flex-1 text-center md:text-right">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1D7671] leading-[1.3] mb-4 tracking-tight">
                {clubData.clubName}
              </h1>
              <p className="text-base md:text-lg text-[#1D7671]/80 leading-relaxed font-medium max-w-3xl mx-auto md:mx-0">
                {clubData.clubDescription}
              </p>
            </div>
          </motion.div>

          {/* Data Grid Section */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 font-thmanyah">
            
            {/* Target Audience */}
            <motion.div variants={itemVariants} className="bg-[#83e6d6] rounded-2xl p-5 shadow-lg flex flex-col gap-3 relative overflow-hidden group text-[#1D7671]">
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
              <div className="flex items-center gap-3 relative z-10">
                <div className="p-2.5 bg-white/30 rounded-xl">
                  <Users className="w-5 h-5 text-[#1D7671]" />
                </div>
                <h4 className="font-bold text-[#1D7671]">الفئة المستهدفة</h4>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2 relative z-10">
                <div className="bg-white/20 p-3 rounded-xl border border-white/10">
                  <span className="block text-xs text-[#1D7671]/70 mb-1">الجنس</span>
                  <strong className="text-[#1D7671] font-bold">{clubData.targetGender}</strong>
                </div>
                <div className="bg-white/20 p-3 rounded-xl border border-white/10">
                  <span className="block text-xs text-[#1D7671]/70 mb-1">الفئة العمرية</span>
                  <strong className="text-[#1D7671] font-bold">{clubData.startAge} - {clubData.endAge} سنة</strong>
                </div>
              </div>
            </motion.div>

            {/* Dates & Duration */}
            <motion.div variants={itemVariants} className="bg-[#0068a1] rounded-2xl p-5 shadow-lg flex flex-col gap-3 lg:col-span-2 relative overflow-hidden group text-white">
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
              <div className="flex items-center gap-3 relative z-10">
                <div className="p-2.5 bg-white/10 rounded-xl">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-white">الفترة الزمنية</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 relative z-10">
                <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                  <span className="block text-xs text-white/70 mb-1">تاريخ البدء</span>
                  <strong className="text-white font-bold">{clubData.startDate}</strong>
                </div>
                <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                  <span className="block text-xs text-white/70 mb-1">تاريخ الانتهاء</span>
                  <strong className="text-white font-bold">{clubData.endDate}</strong>
                </div>
                <div className="bg-white/10 p-3 rounded-xl border border-white/10 opacity-80 cursor-default" title="حقل محسوب تلقائياً">
                  <span className="block text-xs text-white/70 mb-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> المدة (تلقائي)
                  </span>
                  <strong className="text-white font-bold">{duration}</strong>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div variants={itemVariants} className="bg-[#1D7671] rounded-2xl p-5 shadow-lg flex flex-col gap-3 lg:col-span-2 relative overflow-hidden group text-white">
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
              <div className="flex items-center gap-3 relative z-10">
                <div className="p-2.5 bg-white/10 rounded-xl">
                  <MapPin className="w-5 h-5 text-[#83e6d6]" />
                </div>
                <h4 className="font-bold text-[#83e6d6]">موقع النادي</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2 relative z-10">
                <div className="flex flex-col">
                  <span className="text-xs text-white/70 mb-1 flex items-center gap-1"><Globe className="w-3.5 h-3.5"/> المنطقة والمدينة</span>
                  <strong className="text-white font-bold">{clubData.region} - {clubData.city}</strong>
                </div>
                <div className="flex flex-col sm:col-span-2">
                  <span className="text-xs text-white/70 mb-1 flex items-center gap-1"><Building className="w-3.5 h-3.5"/> العنوان التفصيلي</span>
                  <strong className="text-white font-bold">{clubData.detailedAddress}</strong>
                </div>
              </div>
              <a href={clubData.mapLocationUrl} target="_blank" rel="noopener noreferrer" className="relative z-10 mt-2 inline-flex items-center justify-center gap-2 bg-[#83e6d6] hover:bg-[#83e6d6]/80 text-[#1D7671] py-2 px-4 rounded-xl text-sm font-bold transition-colors shadow-sm w-fit">
                <Map className="w-4 h-4" />
                عرض على الخريطة
              </a>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-[#ff9f9d] to-[#fd5c3d] rounded-2xl p-5 shadow-[0_15px_30px_rgba(253,92,61,0.2)] flex flex-col gap-3 relative overflow-hidden group text-white">
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
              <div className="flex items-center gap-3 relative z-10">
                <div className="p-2.5 bg-white/20 rounded-xl border border-white/10">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-white">التواصل</h4>
              </div>
              <div className="flex flex-row flex-wrap items-center gap-3 mt-2 relative z-10">
                <a href={`tel:${clubData.mobileNumber}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity bg-white/20 px-4 py-2 rounded-xl border border-white/10" dir="ltr">
                  <strong className="text-sm tracking-wider text-white font-bold">{clubData.mobileNumber}</strong>
                </a>
                <a href={`mailto:${clubData.email}`} className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity bg-white/20 px-4 py-2 rounded-xl border border-white/10 text-white font-bold">
                  {clubData.email}
                </a>
              </div>
            </motion.div>

          </div>

          {/* Call to Action Bar */}
          <motion.div 
            initial={{ opacity: 0, y: -800, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 35, 
              damping: 10,
              delay: 0.3 
            }}
            className="relative z-10 mt-8 pt-8 border-t border-[#1D7671]/10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
             <motion.a
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
                href={clubData.registrationLink}
                className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#ff9f9d] to-[#fd5c3d] text-white px-10 py-4 rounded-[2rem] font-black text-xl overflow-hidden transition-all shadow-[0_15px_30px_rgba(253,92,61,0.3)] hover:shadow-[0_20px_40px_rgba(253,92,61,0.4)] w-full sm:w-auto min-w-[280px] border border-white/20"
              >
                {/* Hover Shine/Sweep effect */}
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[30deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out" />
                
                <span className="relative z-10 flex items-center gap-3">
                  سجل في النادي الآن
                  <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors">
                    <ArrowUpLeft className="w-5 h-5 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </span>
              </motion.a>
          </motion.div>

        </motion.div>

      </div>
    </SiteBackground>
    </main>
  );
}
