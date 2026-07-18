import React from 'react';

const collections = [
  { title: "Contemporary Palaces", count: "9", from: "€24M", desc: "Architecture as autobiography — modern residences commissioned as single gestures." },
  { title: "Private Islands & Atolls", count: "5", from: "€48M", desc: "Sovereign-feeling islands with full infrastructure and absolute exclusivity." },
  { title: "Historic Estates & Châteaux", count: "12", from: "€18.5M", desc: "Classified European estates with documented provenance." },
  { title: "Urban Penthouses", count: "7", from: "€15.5M", desc: "Apex residences across Monaco, Paris, London and New York." },
  { title: "Vineyard Estates", count: "4", from: "€48M", desc: "Turnkey legacies with brand, inventory and cellar team." },
  { title: "Alpine Retreats", count: "6", from: "€22M", desc: "Contemporary lodges in Verbier, Gstaad and Lech — ski-in, ski-out." },
];

const Collections = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-32">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="uppercase tracking-[4px] text-amber-400 text-sm">CURATED BY CATEGORY</div>
          <h1 className="text-7xl font-light tracking-tighter mt-6">Private Collections</h1>
          <p className="mt-6 text-xl text-white/70 max-w-md mx-auto">
            Six dedicated collections, each assembled over years and offered as a private dossier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((col, index) => (
            <div key={index} className="group bg-zinc-950 border border-white/10 p-12 hover:border-amber-400/50 transition-all duration-500">
              <div className="text-7xl font-light text-white/20 group-hover:text-amber-400/70 transition-colors mb-8">
                {col.count}
              </div>
              <h3 className="text-3xl tracking-tight mb-6">{col.title}</h3>
              <p className="text-white/70 mb-10 leading-relaxed">{col.desc}</p>
              <div className="text-sm uppercase tracking-widest border-b border-white/30 inline-block pb-1">
                From {col.from}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
