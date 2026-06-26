import Image from "next/image";

export default function Hero6() {
  return (
    <section 
      className="relative w-full min-h-[100dvh] flex flex-col overflow-hidden font-sans bg-[#0A1A2F]" 
      dir="rtl"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-left lg:object-center"
        >
          <source src="/Ok_let_s_remove_all_the_humans.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Temporary Navbar */}
      <div className="absolute top-0 left-0 w-full h-[52px] sm:h-[64px] lg:h-[72px] bg-white/5 backdrop-blur-md z-[100] border-b border-white/10 shadow-sm">
        <div className="relative mx-auto flex items-center justify-between h-full px-4 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="h-7 sm:h-8 lg:h-10 w-24 bg-white/20 rounded"></div>
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-4 w-16 bg-white/20 rounded"></div>
            <div className="h-4 w-24 bg-white/20 rounded"></div>
            <div className="h-4 w-24 bg-white/20 rounded"></div>
            <div className="h-4 w-16 bg-white/20 rounded"></div>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4">
              <div className="h-4 w-16 bg-white/20 rounded"></div>
              <div className="h-10 w-24 rounded-full bg-white/20"></div>
            </div>
            <button className="lg:hidden inline-flex items-center justify-center size-10 sm:size-11 rounded-2xl bg-white/10 ring-1 ring-white/20 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 sm:h-6 sm:w-6"><path d="M4 5h16M4 12h16M4 19h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Right section with Logo and Text - No Effects */}
      <div className="relative z-20 flex-1 flex items-center justify-start px-4 sm:px-8 lg:px-16 w-full pt-20">
        <div className="relative flex flex-col items-center gap-8 md:gap-10 max-w-lg w-full">
          <Image 
            src="/Logo.svg" 
            alt="Logo" 
            width={300} 
            height={300} 
            className="object-contain"
            priority
          />
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold text-center leading-[1.4] font-sans">
            أكثر من <span className="text-[#ffefd0]">210</span> نادي شبابي في مكان واحد
          </h1>
        </div>
      </div>
    </section>
  );
}
