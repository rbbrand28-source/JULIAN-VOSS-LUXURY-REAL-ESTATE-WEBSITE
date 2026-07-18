import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Clock, BarChart3, Globe2 } from "lucide-react";
import { INTELLIGENCE } from "@/lib/data";
import { Reveal, Parallax } from "@/components/motion/Reveal";
import { SectionHeading, GoldButton, GoldDivider } from "@/components/ui/luxury";
import { cn } from "@/lib/utils";

import { assetUrl } from "@/lib/assets";

const CATEGORIES = ["All", "Outlook", "Market", "Macro", "Briefing"] as const;

// Fictional aggregate market data for the visualization
const MARKET_DATA = [
  { region: "Cap Ferrat", ppm2: 48200, yoy: 14.2, volume: 410 },
  { region: "Monaco Apex", ppm2: 61400, yoy: 6.1, volume: 380 },
  { region: "Saint-Émilion", ppm2: 9800, yoy: 8.4, volume: 240 },
  { region: "Belgravia", ppm2: 42300, yoy: 3.8, volume: 290 },
  { region: "Verbier", ppm2: 38600, yoy: 5.5, volume: 180 },
  { region: "Private Islands", ppm2: 21500, yoy: 9.8, volume: 420 },
];

const SEGMENT_TREND = [
  { month: "Jan", value: 100 },
  { month: "Feb", value: 102 },
  { month: "Mar", value: 105 },
  { month: "Apr", value: 107 },
  { month: "May", value: 111 },
  { month: "Jun", value: 114 },
  { month: "Jul", value: 117 },
];

export default function Intelligence() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");

  const filtered = useMemo(
    () => INTELLIGENCE.filter((a) => category === "All" || a.category === category),
    [category]
  );

  const featured = INTELLIGENCE[0];
  const rest = filtered.filter((a) => a.slug !== featured.slug || category !== "All");
  const showFeatured = category === "All";

  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative h-[60svh] min-h-[440px] overflow-hidden">
        <Parallax speed={0.2} className="absolute inset-0">
          <img
            src={assetUrl("lifestyle_library_detail")}
            alt="Market intelligence"
            className="h-[120%] w-full object-cover"
            loading="eager"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/75 via-navy/40 to-navy-deep" />
        <div className="container relative flex h-full flex-col justify-end pb-20">
          <Reveal>
            <p className="eyebrow mb-6 text-gold">Market Intelligence</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-4xl font-serif text-5xl leading-[1.1] text-ivory sm:text-6xl md:text-7xl">
              The quarterly briefing
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-platinum/80 sm:text-lg">
              Four times a year, a single sealed report on the markets that matter
              to the practice. Distributed only to active principals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MARKET VISUALIZATION */}
      <section className="border-b border-gold/10 bg-navy-deep py-20 sm:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Live Atlas · 2026 H1"
            title="The markets, at a glance"
            intro="Aggregate data across the practice's six active markets. Indicative — sealed dossiers carry the full series."
          />
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            {/* Bar chart of €/sqm */}
            <Reveal>
              <div className="border border-gold/15 bg-charcoal p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="eyebrow text-gold/80">Avg € / m²</p>
                    <p className="mt-1 font-serif text-2xl text-ivory">By region, 2026 H1</p>
                  </div>
                  <BarChart3 className="h-5 w-5 text-gold/60" />
                </div>
                <div className="mt-8 space-y-5">
                  {MARKET_DATA.map((d, i) => {
                    const max = Math.max(...MARKET_DATA.map((m) => m.ppm2));
                    const widthPct = (d.ppm2 / max) * 100;
                    return (
                      <Reveal key={d.region} delay={i * 0.06}>
                        <div>
                          <div className="mb-1.5 flex items-center justify-between text-xs">
                            <span className="text-platinum/80">{d.region}</span>
                            <span className="font-serif text-gold">€{d.ppm2.toLocaleString()}</span>
                          </div>
                          <div className="relative h-2 overflow-hidden bg-navy-deep">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${widthPct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                              className="h-full bg-gradient-to-r from-gold-deep via-gold to-gold-soft"
                            />
                          </div>
                          <p className="mt-1 text-[0.6rem] uppercase tracking-[0.18em] text-emerald/80">
                            <TrendingUp className="mr-1 inline h-2.5 w-2.5" />
                            +{d.yoy}% YoY
                          </p>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* Trend line */}
            <div className="space-y-6">
              <Reveal delay={0.1}>
                <div className="border border-gold/15 bg-charcoal p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="eyebrow text-gold/80">Luxury Index</p>
                      <p className="mt-1 font-serif text-2xl text-ivory">2026 trend</p>
                    </div>
                    <Globe2 className="h-5 w-5 text-gold/60" />
                  </div>
                  <TrendLine data={SEGMENT_TREND} />
                  <p className="mt-4 text-xs text-platinum/60">
                    Composite of the practice's six markets, indexed to January 2026.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Avg YoY", value: "+8.0%" },
                    { label: "Median DOM", value: "61d" },
                    { label: "Sealed offers", value: "11" },
                  ].map((s) => (
                    <div key={s.label} className="border border-gold/15 bg-charcoal p-4 text-center">
                      <p className="font-serif text-xl text-gold">{s.value}</p>
                      <p className="eyebrow mt-1 text-[0.5rem]">{s.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="bg-background py-24 sm:py-32">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Reports" title="Recent briefings" />
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-2">
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
              </div>
            </Reveal>
          </div>

          {/* Featured */}
          {showFeatured && (
            <Reveal delay={0.1}>
              <Link
                to={`/intelligence/${featured.slug}`}
                className="group mt-14 grid overflow-hidden border border-gold/10 bg-charcoal gold-frame lg:grid-cols-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                  <img
                    src={assetUrl(featured.image)}
                    alt={featured.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute left-5 top-5 border border-gold/30 bg-navy/60 px-3 py-1 text-[0.6rem] uppercase tracking-[0.22em] text-gold backdrop-blur-md">
                    Featured · {featured.category}
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <p className="text-[0.65rem] uppercase tracking-[0.22em] text-platinum/60">
                    {featured.date} · {featured.readMinutes} min read
                  </p>
                  <h3 className="mt-4 font-serif text-3xl leading-[1.15] text-ivory transition-colors group-hover:text-gold sm:text-4xl">
                    {featured.title}
                  </h3>
                  <p className="mt-4 text-pretty leading-relaxed text-platinum/75">{featured.dek}</p>
                  {featured.datum && (
                    <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gold/10 pt-6">
                      {featured.datum.map((d) => (
                        <div key={d.label}>
                          <p className="font-serif text-xl text-gold">{d.value}</p>
                          <p className="eyebrow mt-1 text-[0.5rem]">{d.label}</p>
                          {d.delta && <p className="mt-1 text-[0.6rem] text-emerald/80">{d.delta}</p>}
                        </div>
                      ))}
                    </div>
                  )}
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.22em] text-gold">
                    Read the Report
                    <ArrowUpRight className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          {/* Grid */}
          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {(showFeatured ? rest : filtered).map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.06}>
                <Link
                  to={`/intelligence/${a.slug}`}
                  className="group flex h-full flex-col overflow-hidden border border-gold/10 bg-charcoal gold-frame"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={assetUrl(a.image)}
                      alt={a.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                    <div className="absolute left-4 top-4 border border-gold/30 bg-navy/60 px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.2em] text-gold backdrop-blur-md">
                      {a.category}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.18em] text-platinum/55">
                      <span>{a.date}</span>
                      <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {a.readMinutes} min</span>
                    </p>
                    <h3 className="mt-3 font-serif text-2xl leading-tight text-ivory transition-colors group-hover:text-gold">
                      {a.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-platinum/70">{a.dek}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.22em] text-gold">
                      Read
                      <ArrowUpRight className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="border-t border-gold/10 bg-navy-deep py-24 sm:py-32">
        <div className="container max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-6 text-gold">Subscribe</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif text-4xl leading-[1.15] text-ivory sm:text-5xl">
              Receive the next sealed briefing
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-platinum/75">
              Four reports a year. No promotion, no listings — only analysis. Discretion is absolute.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10">
              <GoldButton to="/contact" variant="solid">Request the Briefing</GoldButton>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function TrendLine({ data }: { data: { month: string; value: number }[] }) {
  const w = 320;
  const h = 120;
  const pad = 8;
  const max = Math.max(...data.map((d) => d.value));
  const min = Math.min(...data.map((d) => d.value));
  const points = data.map((d, i) => {
    const x = pad + (i / (data.length - 1)) * (w - pad * 2);
    const y = h - pad - ((d.value - min) / (max - min)) * (h - pad * 2);
    return { x, y, ...d };
  });
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const area = `${path} L ${points[points.length - 1].x} ${h - pad} L ${points[0].x} ${h - pad} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-6 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="gold-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(33 52% 68% / 0.35)" />
          <stop offset="100%" stopColor="hsl(33 52% 68% / 0)" />
        </linearGradient>
      </defs>
      <motion.path
        d={area}
        fill="url(#gold-area)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
      />
      <motion.path
        d={path}
        fill="none"
        stroke="hsl(33 52% 68%)"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
      {points.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="2.5"
          fill="hsl(33 52% 68%)"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
        />
      ))}
    </svg>
  );
                                      }

