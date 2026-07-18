import React from 'react';
import { Link } from 'react-router-dom';

const properties = [
  {
    id: 1,
    title: "Villa Aurelia",
    location: "Cap Ferrat, France",
    price: "€72,000,000",
    image: "https://picsum.photos/id/1015/800/600",
    status: "Private Treaty",
    description: "A contemporary palace above the Côte d'Azur",
  },
  {
    id: 2,
    title: "Isle of Serenity",
    location: "North Malé Atoll, Maldives",
    price: "€85,000,000",
    image: "https://picsum.photos/id/1018/800/600",
    status: "Available",
    description: "A private atoll, entirely your own",
  },
  // Add more properties as needed
];

const Properties = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <div className="uppercase text-amber-400 tracking-[4px] text-sm">QUIETLY OFFERED</div>
          <h1 className="text-7xl font-light tracking-tighter mt-4">Signature Properties</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {properties.map((prop) => (
            <div key={prop.id} className="property-card group relative overflow-hidden bg-zinc-950 rounded-2xl aspect-[16/12] cursor-pointer">
              <img 
                src={prop.image} 
                alt={prop.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <div className="text-amber-400 text-xs tracking-widest mb-2">{prop.status}</div>
                <h3 className="text-4xl font-light tracking-tight mb-2">{prop.title}</h3>
                <p className="text-white/70 mb-6">{prop.location}</p>
                
                <div className="flex justify-between items-end">
                  <div className="text-4xl font-light">{prop.price}</div>
                  <Link to={`/property/${prop.id}`} className="btn-luxury px-8 py-4 border border-white/40 text-sm tracking-widest">
                    VIEW ESTATE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
