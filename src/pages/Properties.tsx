import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, Map, LayoutGrid, X } from "lucide-react";
import { PROPERTIES, type PropertyListing } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading, PropertyCard, GoldButton } from "@/components/ui/luxury";
import { cn } from "@/lib/utils";

import { assetUrl } from "@/lib/assets";

const CATEGORIES = ["All", "Contemporary", "Historic", "Island", "Penthouse", "Mountain", "Vineyard"] as const;
const REGIONS = ["All", "French Riviera", "Indian Ocean", "Bordeaux", "Côte d'Azur", "Valais", "Lazio", "London", "Paris"];
const SORTS = ["Featured", "Price ↓", "Price ↑", "Newest"] as const;

export default function Properties() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [region, setRegion] = useState("All");
  const [sort, setSort] = useState<(typeof SORTS)[number]>("Featured");
  const [maxPrice, setMaxPrice] = useState(100);
  const [view, setView] = useState<"grid" | "map">("grid");
  const [visible, setVisible] = useState(6);

  const filtered = useMemo(() => {
    let list: PropertyListing[] = PROPERTIES.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (region !== "All" && p.region !== region) return false;
      if (p.price / 1e6 > maxPrice) return false;
      if (query) {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q)
        );
      }
      return true;
    });
    list = [...list].sort((a, b) => {
      if (sort === "Price ↓") return b.price - a.price;
      if (sort === "Price ↑") return a.price - b.price;
      if (sort === "Newest") return b.yearBuilt - a.yearBuilt;
      return Number(b.featured) - Number(a.featured);
    });
    return list;
  }, [query, category, region, sort, maxPrice]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  return (
    <div className="bg-background">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-gold/10 bg-navy-deep pt-36 pb-20">
        <div className="absolute inset-0 opacity-20">
          <img
            src={assetUrl("property_contemporary_palace")}
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 to-navy-deep" />
        <div className="container relative">
          <Reveal>
            <p className="eyebrow mb-6">Signature Properties</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-serif text-5xl leading-[1.1] text-ivory sm:text-6xl md:text-7xl">
              The Collection
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-platinum/75 sm:text-lg">
              Eight estates currently held by the practice, from €15.5M to €85M.
              Each is offered under sealed terms to a single qualified principal.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[68px] z-30 border-b border-gold/10 bg-navy/85 backdrop-blur-xl">
        <div className="container py-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 items-center gap-3">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-platinum/40" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name, location…"
                  className="w-full border border-gold/15 bg-transparent py-2.5 pl-10 pr-4 text-sm text-ivory placeholder:text-platinum/40 focus:border-gold/50 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex border border-gold/15">
                <button
                  onClick={() => setView("grid")}
                  className={cn("flex h-9 w-9 items-center justify-center transition-colors", view === "grid" ? "bg-gold text-navy" : "text-platinum/60 hover:text-gold")}
                  aria-label="Grid view"
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setView("map")}
                  className={cn("flex h-9 w-9 items-center justify-center border-l border-gold/15 transition-colors", view === "map" ? "bg-gold text-navy" : "text-platinum/60 hover:text-gold")}
                  aria-label="Map view"
                >
                  <Map className="h-4 w-4" />
                </button>
              </div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as (typeof SORTS)[number])}
                className="border border-gold/15 bg-charcoal px-3 py-2 text-xs uppercase tracking-[0.15em] text-ivory focus:outline-none"
              >
                {SORTS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Filter chips */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={cn(
                  "px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.18em] transition-all duration-300",
                  category === c
                    ? "bg-gold text-navy"
                    : "border border-gold/15 text-platinum/70 hover:border-gold/50 hover:text-gold"
                )}
              >
                {c}
              </button>
            ))}
            <span className="mx-2 h-4 w-px bg-gold/15" />
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="border border-gold/15 bg-charcoal px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.18em] text-ivory focus:outline-none"
            >
              {REGIONS.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            <span className="mx-2 h-4 w-px bg-gold/15" />
            <div className="flex items-center gap-3 px-2">
              <span className="text-[0.65rem] uppercase tracking-[0.18em] text-platinum/60">Max €{maxPrice}M</span>
              <input
                type="range"
                min={15}
                max={100}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-24 accent-gold"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="container py-16">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-platinum/60">
            <span className="text-gold">{filtered.length}</span> residence{filtered.length === 1 ? "" : "s"}
            {category !== "All" && ` · ${category}`}
          </p>
          {(query || category !== "All" || region !== "All" || maxPrice < 100) && (
            <button
              onClick={() => { setQuery(""); setCategory("All"); setRegion("All"); setMaxPrice(100); }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-platinum/60 hover:text-gold"
            >
              <X className="h-3 w-3" /> Clear
            </button>
          )}
        </div>

        <AnimatePresence mode="wait">
          {view === "grid" ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {shown.length === 0 ? (
                <div className="py-24 text-center">
                  <p className="font-serif text-2xl text-ivory">No estates match your criteria.</p>
                  <p className="mt-3 text-sm text-platinum/60">The practice holds further residences off-record. Request a private dossier.</p>
                  <div className="mt-8">
                    <GoldButton to="/contact" variant="outline">Request Private Dossier</GoldButton>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {shown.map((p, i) => (
                      <PropertyCard key={p.slug} property={p} index={i} />
                    ))}
                  </div>
                  {hasMore && (
                    <div className="mt-14 flex justify-center">
                      <button
                        onClick={() => setVisible((v) => v + 6)}
                        className="inline-flex items-center gap-3 border border-gold/40 px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.25em] text-gold transition-all duration-500 hover:bg-gold hover:text-navy"
                      >
                        <SlidersHorizontal className="h-3.5 w-3.5" />
                        Reveal More Residences
                      </button>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="map"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid gap-7 lg:grid-cols-[1fr_1.4fr]"
            >
              <div className="space-y-4 lg:max-h-[70vh] lg:overflow-y-auto lg:pr-3">
                {filtered.map((p, i) => (
                  <PropertyCard key={p.slug} property={p} index={i} />
                ))}
              </div>
              <MapView properties={filtered} />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}

/** Stylised world map of property locations (decorative). */
function MapView({ properties }: { properties: PropertyListing[] }) {
  // Normalised lat/lng → x/y on a 0-100 grid (Europe-centric)
  const toXY = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * 100;
    const y = ((90 - lat) / 180) * 100;
    return { x, y };
  };
  return (
    <div className="relative aspect-[4/3] overflow-hidden border border-gold/15 bg-navy-deep">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(hsl(33 52% 68% / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(33 52% 68% / 0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,transparent_30%,hsl(213_60%_5%/0.6)_100%)]" />
      <div className="absolute left-6 top-6">
        <p className="eyebrow text-gold/80">Global Atlas</p>
        <p className="mt-1 font-serif text-2xl text-ivory">The Practice's Reach</p>
      </div>

      {properties.map((p, i) => {
        const { x, y } = toXY(p.coordinates.lat, p.coordinates.lng);
        return (
          <a
            key={p.slug}
            href={`/properties/${p.slug}`}
            className="group absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" style={{ animationDelay: `${i * 0.3}s` }} />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-gold ring-2 ring-gold/30" />
            </span>
            <span className="pointer-events-none absolute left-1/2 top-5 z-10 -translate-x-1/2 whitespace-nowrap border border-gold/20 bg-navy/95 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.18em] text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {p.name} · {p.location}
            </span>
          </a>
        );
      })}

      <div className="absolute bottom-6 right-6 text-[0.55rem] uppercase tracking-[0.2em] text-platinum/40">
        Decorative projection · Not to scale
      </div>
    </div>
  );
                                                                                                                                            }

