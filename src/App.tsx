import React from 'react';
import { Link } from 'react-router-dom'; // assuming you use react-router

const LuxuryHome = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black text-sm font-serif tracking-widest">JV</span>
            </div>
            <div>
              <div className="font-serif text-2xl tracking-tight">Julian Voss</div>
              <div className="text-xs text-white/50 -mt-1">LEGACY ESTATES</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm tracking-widest uppercase">
            <Link to="/properties" className="hover:text-amber-400 transition-colors">Signature Properties</Link>
            <Link to="/collections" className="hover:text-amber-400 transition-colors">Private Collections</Link>
            <Link to="/advisor" className="hover:text-amber-400 transition-colors">The Advisor</Link>
            <Link to="/contact" className="hover:text-amber-400 transition-colors">Private Salon</Link>
          </div>

          <a href="#contact" className="px-8 py-3 border border-white/30 hover:bg-white hover:text-black transition-all text-sm tracking-widest">
            ENQUIRE PRIVATELY
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1015/2000/1200')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-8">
          <div className="inline-flex items-center gap-3 px-6 py-2 border border-white/20 rounded-full text-xs tracking-[3px] uppercase mb-8">
            EST. 1998 • MONACO
          </div>
          
          <h1 className="text-7xl md:text-[110px] leading-[0.95] font-light tracking-tighter mb-8">
            CURATING<br />LEGACIES<br />FOR THE FEW
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-md mx-auto mb-12">
            €20M–€85M estates • Solo advisory • Absolute discretion
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/properties" className="px-12 py-6 border border-white text-lg tracking-widest hover:bg-white hover:text-black transition-all">
              EXPLORE PROPERTIES
            </Link>
            <a href="#practice" className="px-12 py-6 border border-white/50 text-lg tracking-widest hover:bg-white/10 transition-all">
              MEET THE PRACTICE
            </a>
          </div>
        </div>
      </section>

      {/* More sections can be added... */}
      <div className="h-96 flex items-center justify-center text-amber-400 text-xl">
        (Continue adding other sections here — reply "next" for more)
      </div>
    </div>
  );
};

export default LuxuryHome;