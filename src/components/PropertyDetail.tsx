import React from 'react';
import { useParams, Link } from 'react-router-dom';

const properties = [
  {
    id: 1,
    title: "Villa Aurelia",
    location: "Cap Ferrat, France",
    price: "€72,000,000",
    image: "https://picsum.photos/id/1015/1200/800",
    status: "Private Treaty",
    description: "A contemporary palace above the Côte d'Azur with breathtaking Mediterranean views.",
    details: { bedrooms: 8, bathrooms: 10, area: "2,850 m²", land: "4.2 ha" },
    highlights: ["Infinity pool", "Private helipad", "Climate-controlled wine cellar", "Beach access"]
  },
  // Add other properties...
];

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id || ''));

  if (!property) return <div className="text-center py-40 text-2xl">Property not found</div>;

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20">
      <div className="relative h-[80vh]">
        <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black" />
        
        <div className="absolute bottom-12 left-12">
          <div className="text-amber-400 uppercase tracking-widest text-sm mb-4">{property.status}</div>
          <h1 className="text-6xl font-light tracking-tight">{property.title}</h1>
          <p className="text-3xl text-white/80 mt-2">{property.location}</p>
          <p className="text-5xl font-light mt-6">{property.price}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-12 gap-16">
        <div className="md:col-span-7">
          <p className="text-xl leading-relaxed text-white/80">{property.description}</p>
          
          <h3 className="text-3xl mt-16 mb-8">Highlights</h3>
          <ul className="space-y-6 text-lg">
            {property.highlights.map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-amber-400">•</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5">
          <div className="bg-zinc-950 border border-white/10 p-10 sticky top-8">
            <h4 className="uppercase tracking-widest mb-8">Specifications</h4>
            {Object.entries(property.details).map(([key, value]) => (
              <div key={key} className="flex justify-between py-5 border-b border-white/10 last:border-none">
                <span className="capitalize text-white/60">{key}</span>
                <span>{value}</span>
              </div>
            ))}
            
            <button className="btn-luxury w-full mt-12 py-6 text-lg tracking-widest border border-white">
              ENQUIRE PRIVATELY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
