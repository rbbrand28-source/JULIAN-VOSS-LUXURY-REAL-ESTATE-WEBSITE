import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin, Quote, Plus, Minus } from "lucide-react";
import { PROPERTIES, COLLECTIONS, TESTIMONIALS, ADVISOR_STATS } from "@/lib/data";
import { Reveal, Parallax, fadeUp, stagger, EASE } from "@/components/motion/Reveal";
import { SectionHeading, GoldButton, PropertyCard, GoldDivider, StatCounter } from "@/components/ui/luxury";
import { cn } from "@/lib/utils";

const HERO_IMAGES = [
  { src: "hero_villa_dusk", caption: "Cap Ferrat, France" },
  { src: "property_contemporary_palace", caption: "Olgiata, Italy" },
  { src: "property_private_island", caption: "North Malé Atoll" },
];

import { assetUrl } from "@/lib/assets";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const overlayOpacity = useTransform(heroProgress, [0, 1], [0.55, 0.85]);

  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % HERO_IMAGES.length), 7000);
    return () => clearInterval(id);
  }, []);

  const featured = useMemo(() => PROPERTIES.filter((p) => p.featured).slice(0, 4), []);

  return (
    <>
      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={slide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.2, ease: EASE }}
            className="absolute inset-0"
          >
            <motion.img
              src={assetUrl(HERO_IMAGES[slide].src)}
              alt={HERO_IMAGES[slide].caption}
              style={{ y: heroY, scale: heroScale }}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy/30 to-navy-deep"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,20,40,0.6)_100%)]" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: EASE }}
            className="eyebrow text-gold"
          >
            Julian Voss · Solo Advisor to the Few
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 1.2, ease: EASE }}
            className="mt-6 max-w-5xl font-serif text-5xl leading-[1.05] text-ivory sm:text-7xl md:text-8xl"
          >
            Curating Legacies
            <br />
            <span className="text-gold-gradient italic">for the Few</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1, ease: EASE }}
            className="mt-8 text-[0.7rem] uppercase tracking-[0.4em] text-platinum/80 sm:text-sm"
          >
            €20M+ Properties · Solo Mastery
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1, ease: EASE }}
            className="mt-12 flex flex-col items-center gap-5 sm:flex-row"
          >
            <GoldButton to="/properties" variant="solid">
              Signature Properties
            </GoldButton>
            <GoldButton to="/contact" variant="outline">
              Begin Private Conversation
            </GoldButton>
          </motion.div>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 items-center gap-4">
          {HERO_IMAGES.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setSlide(i)}
              className="group flex flex-col items-center gap-2"
              aria-label={`View ${img.caption}`}
            >
              <span
                className={cn(
                  "h-px transition-all duration-700",
                  i === slide ? "w-12 bg-gold" : "w-6 bg-platinum/30 group-hover:bg-platinum/60"
                )}
              />
              <span
                className={cn(
                  "text-[0.55rem] uppercase tracking-[0.2em] transition-colors",
                  i === slide ? "text-gold" : "text-platinum/40"
                )}
              >
                {img.caption}
              </span>
            </button>
          ))}
        </div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 text-platinum/60 lg:flex"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
          <span className="text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
        </motion.div>
      </section>

      {/* ===== INTRO / PHILOSOPHY ===== */}
      <section className="relative bg-background py-28 sm:py-40">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <Reveal>
                <p className="eyebrow mb-6">The Practice</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-serif text-4xl leading-[1.15] text-ivory sm:text-5xl md:text-6xl">
                  A solo advisor to the world's
                  <span className="text-gold-gradient italic"> most discerning principals.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-platinum/75 sm:text-lg">
                  For twenty-eight years, Julian Voss has operated without partners, franchise,
                  or public marketing — brokering the acquisition and quiet disposition of
                  exceptional estates for a deliberately small circle of principals.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-platinum/75 sm:text-lg">
                  The practice is built on a single conviction: that the most valuable
                  transactions are the ones the world never reads about.
                </p>
              </Reveal>
              <Reveal delay={0.32}>
                <div className="mt-10">
                  <GoldButton to="/advisor" variant="outline">
                    Meet the Advisor
                  </GoldButton>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden border border-gold/10">
                  <img
                    src={assetUrl("lifestyle_library_detail")}
                    alt="The private library — Julian Voss advisory"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 hidden border border-gold/20 bg-navy/90 p-6 backdrop-blur-xl sm:block">
                  <p className="font-serif text-3xl text-gold">€1.2B+</p>
                  <p className="eyebrow mt-1 text-[0.55rem]">Career Sales Volume</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="relative border-y border-gold/10 bg-navy-deep py-20">
        <div className="container grid grid-cols-2 gap-12 lg:grid-cols-4">
          <StatCounter value={1.2} suffix="B+" label="Sales Volume €" />
          <StatCounter value={28} label="Years in Practice" />
          <StatCounter value={40} label="Active Principals" />
          <StatCounter value={0} label="Partners · Franchise" />
        </div>
      </section>

      {/* ===== SIGNATURE PROPERTIES ===== */}
      <section className="relative bg-background py-28 sm:py-40">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Signature Properties"
              title="Estates, quietly offered"
              intro="A curated selection of residences currently held by the practice. Each is offered under sealed terms to a single qualified principal."
            />
            <Reveal delay={0.2}>
              <GoldButton to="/properties" variant="outline">
                View All Properties
              </GoldButton>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p, i) => (
              <PropertyCard key={p.slug} property={p} index={i} priority={i < 2} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CINEMATIC PARALLAX QUOTE ===== */}
      <section className="relative h-[80svh] min-h-[520px] overflow-hidden">
        <Parallax speed={0.25} className="absolute inset-0">
          <img
            src={assetUrl("property_private_island")}
            alt="A private atoll at dawn"
            className="h-[120%] w-full object-cover"
            loading="lazy"
          />
        </Parallax>
        <div className="absolute inset-0 bg-navy-deep/70" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            <Quote className="mx-auto mb-8 h-8 w-8 text-gold/60" />
            <Reveal>
              <p className="font-serif text-3xl leading-[1.3] text-ivory sm:text-4xl md:text-5xl">
                "The most valuable transactions are the ones the world
                <span className="text-gold-gradient italic"> never reads about.</span>"
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 eyebrow">Julian Voss</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== PRIVATE COLLECTIONS ===== */}
      <section className="relative bg-background py-28 sm:py-40">
        <div className="container">
          <SectionHeading
            eyebrow="Private Collections"
            title="Curated by category"
            intro="Six dedicated collections, each assembled over years and offered as a private dossier rather than a public listing."
            align="center"
            className="mx-auto"
          />

          <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {COLLECTIONS.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.06}>
                <Link
                  to="/collections"
                  className="group block aspect-[4/3] overflow-hidden border border-gold/10 bg-charcoal gold-frame"
                >
                  <div className="relative h-full w-full overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/40 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-7">
                      <p className="eyebrow text-gold/80">{c.count} residences</p>
                      <h3 className="mt-2 font-serif text-2xl text-ivory transition-colors group-hover:text-gold">
                        {c.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-platinum/70">{c.summary}</p>
                      <div className="mt-4 flex items-center justify-between border-t border-gold/10 pt-4">
                        <span className="text-[0.7rem] uppercase tracking-[0.2em] text-gold">
                          {c.priceFromLabel}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-platinum/60 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADVISOR FEATURE ===== */}
      <section className="relative bg-navy-deep py-28 sm:py-40">
        <div className="container grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden border border-gold/10">
              <img
                src={assetUrl("advisor_portrait_julian")}
                alt="Julian Voss — portrait"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow mb-6">The Advisor</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-serif text-4xl leading-[1.15] text-ivory sm:text-5xl md:text-6xl">
                Julian Voss
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-3 font-serif text-xl italic text-gold/80">
                Self-made · Solo · €1.2B+ in career sales
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-platinum/80 sm:text-lg">
                Julian began as a solo advisor on the Côte d'Azur in 1998 and has
                never taken a partner. His practice is deliberately small — no more
                than forty active principals at any time — and his listings are, by
                design, never seen in public.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-gold/10 pt-8">
                {ADVISOR_STATS.map((s) => (
                  <div key={s.label}>
                    <p className="font-serif text-3xl text-gold">{s.value}</p>
                    <p className="eyebrow mt-1 text-[0.55rem]">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-10">
                <GoldButton to="/advisor" variant="outline">
                  Read the Biography
                </GoldButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== MARKET INTELLIGENCE PREVIEW ===== */}
      <IntelligencePreview />

      {/* ===== TESTIMONIAL ===== */}
      <section className="relative overflow-hidden bg-navy-deep py-28 sm:py-40">
        <Parallax speed={0.15} className="absolute inset-0 opacity-30">
          <img
            src={assetUrl("lifestyle_yacht_marina")}
            alt="Marina at blue hour"
            className="h-[120%] w-full object-cover"
            loading="lazy"
          />
        </Parallax>
        <div className="absolute inset-0 bg-navy-deep/80" />
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <Quote className="mx-auto mb-8 h-8 w-8 text-gold/60" />
            <Reveal>
              <p className="font-serif text-3xl leading-[1.3] text-ivory sm:text-4xl">
                "{TESTIMONIALS[0].quote}"
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8">
                <p className="eyebrow text-gold">{TESTIMONIALS[0].attribution}</p>
                <p className="mt-2 text-sm text-platinum/60">{TESTIMONIALS[0].context}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <NewsletterSection />
    </>
  );
}

function IntelligencePreview() {
  const articles = PROPERTIES.slice(0, 0); // placeholder, real articles below
  void articles;
  const items = [
    {
      tag: "Outlook",
      title: "The Côte d'Azur, Re-priced",
      dek: "Why the 2026 season marks the first structural repricing of Cap Ferrat since 2015.",
      image: "hero_villa_dusk",
    },
    {
      tag: "Market",
      title: "The Quiet Liquidity of Private Islands",
      dek: "Islands have outperformed every other luxury segment over five years.",
      image: "property_private_island",
    },
  ];
  return (
    <section className="relative bg-background py-28 sm:py-40">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Market Intelligence"
            title="Private reports for principals"
            intro="A selection of the quarterly briefings distributed to the practice's active principals."
          />
          <Reveal delay={0.2}>
            <GoldButton to="/intelligence" variant="outline">
              All Reports
            </GoldButton>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {items.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.1}>
              <Link
                to="/intelligence"
                className="group grid overflow-hidden border border-gold/10 bg-charcoal gold-frame md:grid-cols-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:h-full">
                  <img
                    src={assetUrl(a.image)}
                    alt={a.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                </div>
                <div className="flex flex-col justify-center p-8">
                  <p className="eyebrow text-gold/80">{a.tag}</p>
                  <h3 className="mt-3 font-serif text-2xl text-ivory transition-colors group-hover:text-gold">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-platinum/70">{a.dek}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.22em] text-platinum/60 transition-colors group-hover:text-gold">
                   Read Report
                    <ArrowUpRight className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="relative border-t border-gold/10 bg-background py-28 sm:py-36">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-6">Private Intelligence</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif text-4xl leading-[1.15] text-ivory sm:text-5xl md:text-6xl">
              Receive the quarterly briefing
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-platinum/75 sm:text-lg">
              Four times a year, a single sealed report on the markets that matter to the
              practice. No promotion, no listings — only analysis.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mx-auto mt-10 max-w-md border border-gold/30 bg-charcoal p-6"
              >
                <p className="font-serif text-xl text-gold">Request received.</p>
                <p className="mt-2 text-sm text-platinum/70">
                  A member of the office will be in touch from a number you trust.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.trim()) setSubmitted(true);
                }}
                className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your private email"
                  className="flex-1 border border-gold/20 bg-transparent px-5 py-3.5 text-sm text-ivory placeholder:text-platinum/40 focus:border-gold/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="border border-gold bg-gold px-6 py-3.5 text-[0.7rem] uppercase tracking-[0.25em] text-navy transition-all duration-500 hover:bg-transparent hover:text-gold"
                >
                  Subscribe
                </button>
              </form>
            )}
          </Reveal>
          <Reveal delay={0.32}>
            <p className="mx-auto mt-5 max-w-md text-xs text-platinum/40">
              Discretion is absolute. Your address will never appear in a list, shared, or used
              for promotion.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


