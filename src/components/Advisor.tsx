import React from 'react';

const Advisor = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="uppercase tracking-[4px] text-amber-400 text-sm mb-6">THE PRACTICE</div>
          <h1 className="text-7xl font-light tracking-tighter leading-none">Julian Voss</h1>
          <p className="text-2xl text-white/70 mt-6">Self-made. Solo. €1.2B+ in career sales.</p>
        </div>

        <div className="prose prose-invert max-w-none text-lg leading-relaxed mb-20">
          <p className="text-xl">
            For twenty-eight years, Julian Voss has operated without partners, franchise, or public marketing — brokering the acquisition and quiet disposition of exceptional estates for a deliberately small circle of principals.
          </p>
          <p>
            The practice is built on a single conviction: that the most valuable transactions are the ones the world never reads about.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="border border-white/10 p-10 text-center">
            <div className="text-6xl font-light">€1.2B+</div>
            <div className="uppercase text-xs tracking-widest mt-6">Career Sales Volume</div>
          </div>
          <div className="border border-white/10 p-10 text-center">
            <div className="text-6xl font-light">28</div>
            <div className="uppercase text-xs tracking-widest mt-6">Years in Practice</div>
          </div>
          <div className="border border-white/10 p-10 text-center">
            <div className="text-6xl font-light">≤40</div>
            <div className="uppercase text-xs tracking-widest mt-6">Active Principals</div>
          </div>
        </div>

        <div className="text-center">
          <a href="#contact" className="inline-block px-16 py-6 border border-white hover:bg-white hover:text-black text-xl tracking-widest transition-all">
            SPEAK WITH JULIAN
          </a>
        </div>
      </div>
    </div>
  );
};

export default Advisor;
