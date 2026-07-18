import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Shield } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { Reveal, Parallax } from "@/components/motion/Reveal";
import { SectionHeading, GoldButton, GoldDivider } from "@/components/ui/luxury";

import { assetUrl } from "@/lib/assets";

const LEGACY_STATS = [
  { value: "€1.2B+", label: "Career sales volume" },
  { value: "≤ 40", label: "Active principals" },
  { value: "28", label: "Years of practice" },
  { value: "0", label: "Public listings, ever" },
];

export default function Legacy() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative h-[68svh] min-h-[460px] overflow-hidden">
        <Parallax speed={0.2} className="absolute inset-0">
          <img
            src={assetUrl("lifestyle_yacht_marina")}
            alt="Client legacy"
            className="h-[120%] w-full object-cover"
            loading="eager"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/75 via-navy/40 to-navy-deep" />
        <div className="container relative flex h-full flex-col justify-end pb-20">
          <Reveal>
            <p className="eyebrow mb-6 text-gold">Client Legacy</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-4xl font-serif text-5xl leading-[1.1] text-ivory sm:text-6xl md:text-7xl">
              In their words,
              <span className="text-gold-gradient italic"> anonymously.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-platinum/80 sm:text-lg">
              Testimonials shared with consent. Attributions are deliberately partial —
              the practice does not disclose its principals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-gold/10 bg-navy-deep py-16">
        <div className="container grid grid-cols-2 gap-10 lg:grid-cols-4">
          {LEGACY_STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="text-center">
                <p className="font-serif text-4xl text-gold sm:text-5xl">{s.value}</p>
                <p className="eyebrow mt-2 text-[0.55rem]">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL CAROUSEL */}
      <section className="bg-background py-24 sm:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Voices"
            title="A practice described by its principals"
            align="center"
            className="mx-auto"
          />

          <div className="relative mx-auto mt-16 max-w-4xl">
            <Quote className="mx-auto mb-8 h-8 w-8 text-gold/50" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <p className="font-serif text-2xl leading-[1.4] text-ivory sm:text-3xl md:text-4xl">
                  "{t.quote}"
                </p>
                <div className="mt-8">
                  <p className="eyebrow text-gold">{t.attribution}</p>
                  <p className="mt-2 text-sm text-platinum/60">{t.context}</p>
                </div>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-12 flex items-center justify-center gap-4">
              <button
                onClick={() => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="flex h-10 w-10 items-center justify-center border border-gold/30 text-ivory transition-colors hover:bg-gold hover:text-navy"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="group"
                    aria-label={`Go to testimonial ${i + 1}`}
                  >
                    <span
                      className={`block h-1.5 transition-all duration-500 ${i === active ? "w-8 bg-gold" : "w-1.5 bg-platinum/30 group-hover:bg-platinum/60"}`}
                    />
                  </button>
                ))}
              </div>
              <button
                onClick={() => setActive((a) => (a + 1) % TESTIMONIALS.length)}
                className="flex h-10 w-10 items-center justify-center border border-gold/30 text-ivory transition-colors hover:bg-gold hover:text-navy"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ANONYMIZED CASES GRID */}
      <section className="bg-navy-deep py-24 sm:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Selected Transactions"
            title="Five cases, anonymously"
            intro="A selection of completed matters. Names, locations, and prices are deliberately obscured."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              { year: "2025", type: "Acquisition", region: "Mediterranean", note: "A first-line estate acquired through sealed tender for a principal relocating from London. The transaction closed without a public photograph leaving the room." },
              { year: "2024", type: "Disposition", region: "Western Alps", note: "A family's third-generation lodge placed quietly with a single qualified buyer. Twenty-two months from mandate to signature; one viewing." },
              { year: "2024", type: "Advisory", region: "—", note: "A principal was advised against a contemplated acquisition. Eighteen months later, the reasoning became clear. No fee was charged for the refusal." },
              { year: "2023", type: "Acquisition", region: "Indian Ocean", note: "A sovereign-lease atoll acquired as a multi-generational legacy. The structure included resident staff, a 99-year lease, and a marine conservation covenant." },
              { year: "2022", type: "Portfolio", region: "Cross-border", note: "A three-year, three-residence acquisition programme for a single family office across Monaco, Paris, and the Valais." },
              { year: "2021", type: "Disposition", region: "Côte d'Azur", note: "A cap residence sold to a buyer who had never visited the property on the open market. The dossier was presented, the price accepted, the signature witnessed." },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="h-full border border-gold/10 bg-charcoal p-8 gold-frame">
                  <div className="flex items-center justify-between">
                    <span className="border border-gold/30 px-3 py-1 text-[0.6rem] uppercase tracking-[0.22em] text-gold">
                      {c.type}
                    </span>
                    <span className="font-serif text-2xl text-gold">{c.year}</span>
                  </div>
                  <p className="mt-4 eyebrow text-[0.55rem]">{c.region}</p>
                  <p className="mt-4 text-pretty leading-relaxed text-platinum/80">{c.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DISCRETION PROMISE */}
      <section className="bg-background py-24 sm:py-32">
        <div className="container max-w-3xl text-center">
          <Reveal>
            <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center border border-gold/30">
              <Shield className="h-5 w-5 text-gold" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif text-4xl leading-[1.15] text-ivory sm:text-5xl">
              The discretion covenant
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-platinum/75">
              Every principal of the practice is bound by — and protected by — the same
              covenant. No photograph, no address, no price is ever published without
              explicit, written, revocable consent.
            </p>
          </Reveal>
          <GoldDivider className="my-10" />
          <Reveal delay={0.24}>
            <div className="mt-2">
              <GoldButton to="/contact" variant="solid">Begin Private Conversation</GoldButton>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

