import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Quote, ArrowUpRight } from "lucide-react";
import { ADVISOR_TIMELINE, ADVISOR_STATS, TESTIMONIALS } from "@/lib/data";
import { Reveal, Parallax, EASE } from "@/components/motion/Reveal";
import { SectionHeading, GoldButton, GoldDivider } from "@/components/ui/luxury";

import { assetUrl } from "@/lib/assets";

export default function Advisor() {
  return (
    <div className="bg-background">
      {/* HERO PORTRAIT */}
      <section className="relative h-[88svh] min-h-[560px] overflow-hidden">
        <motion.img
          src={assetUrl("advisor_portrait_julian")}
          alt="Julian Voss — portrait"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: EASE }}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-transparent to-navy-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/70 to-transparent" />
        <div className="container relative flex h-full items-end pb-20">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow mb-6 text-gold">The Advisor</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-serif text-6xl leading-[1.05] text-ivory sm:text-7xl md:text-8xl">
                Julian Voss
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-platinum/85">
                A solo practitioner for twenty-eight years. Self-made. €1.2 billion
                in career sales volume — without a single partner, franchise, or public
                listing.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-background py-24 sm:py-32">
        <div className="container grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <p className="eyebrow mb-6 text-gold">Philosophy</p>
            <h2 className="font-serif text-4xl leading-[1.15] text-ivory sm:text-5xl">
              On the practice
            </h2>
          </Reveal>
          <div className="space-y-6">
            <Reveal delay={0.08}>
              <p className="text-pretty text-lg leading-relaxed text-platinum/85">
                "I began alone because I could not find a house that would let me work
                the way I believed the work should be done. I have remained alone for
                the same reason."
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-pretty leading-relaxed text-platinum/75">
                The practice is deliberately small. No more than forty active principals
                at any time, no junior advisors, no franchised listings, no public
                marketing. Every transaction is conducted personally, from first
                conversation to final signature.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="text-pretty leading-relaxed text-platinum/75">
                A great residence is not a commodity. It is a decision a family makes
                about who they intend to become. The role of an advisor is to
                understand that decision before the family has had to articulate it —
                and then to find the place that makes it real.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <p className="text-pretty leading-relaxed text-platinum/75">
                Discretion is not a service one offers. It is a posture one maintains,
                even when no one is watching.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-gold/10 bg-navy-deep py-20">
        <div className="container grid grid-cols-2 gap-12 lg:grid-cols-4">
          {ADVISOR_STATS.map((s) => (
            <Reveal key={s.label}>
              <div className="text-center">
                <p className="font-serif text-4xl text-gold sm:text-5xl">{s.value}</p>
                <p className="eyebrow mt-2 text-[0.55rem]">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-background py-24 sm:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="The Biography"
            title="Twenty-eight years, alone"
            intro="A selected chronology of the practice."
            align="center"
            className="mx-auto"
          />
          <div className="relative mx-auto mt-20 max-w-3xl">
            {/* Center line */}
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent sm:left-1/2" />
            <div className="space-y-14">
              {ADVISOR_TIMELINE.map((entry, i) => {
                const reversed = i % 2 === 1;
                return (
                  <Reveal key={entry.year} delay={i * 0.05}>
                    <div className={`relative flex items-start gap-8 sm:gap-0 ${reversed ? "sm:flex-row-reverse" : ""}`}>
                      {/* Dot */}
                      <div className="absolute left-4 top-1.5 z-10 -translate-x-1/2 sm:left-1/2">
                        <span className="block h-3 w-3 rounded-full bg-gold ring-4 ring-navy" />
                      </div>
                      {/* Content */}
                      <div className={`ml-12 sm:ml-0 sm:w-1/2 ${reversed ? "sm:pl-12" : "sm:pr-12 sm:text-right"}`}>
                        <p className="font-serif text-3xl text-gold">{entry.year}</p>
                        <h3 className="mt-2 font-serif text-xl text-ivory">{entry.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-platinum/75">{entry.text}</p>
                      </div>
                      {/* Spacer for other half on desktop */}
                      <div className="hidden sm:block sm:w-1/2" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* LIFESTYLE GALLERY */}
      <section className="bg-navy-deep py-24 sm:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="The World of the Practice"
            title="A life in residence"
            intro="The settings in which the work is conducted — and the lives it serves."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "lifestyle_library_detail", label: "The study · Monaco" },
              { src: "lifestyle_yacht_marina", label: "The harbour · Antibes" },
              { src: "collection_historic_estate_interior", label: "A client's drawing room · London" },
            ].map((g, i) => (
              <Reveal key={g.src} delay={i * 0.08}>
                <div className="group relative aspect-[4/5] overflow-hidden border border-gold/10 gold-frame">
                  <img
                    src={assetUrl(g.src)}
                    alt={g.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent" />
                  <p className="absolute bottom-5 left-5 eyebrow text-ivory/90">{g.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="relative h-[60svh] min-h-[420px] overflow-hidden">
        <Parallax speed={0.2} className="absolute inset-0">
          <img src={assetUrl("hero_villa_dusk")} alt="" className="h-[120%] w-full object-cover" loading="lazy" />
        </Parallax>
        <div className="absolute inset-0 bg-navy-deep/75" />
        <div className="container relative flex h-full items-center">
          <div className="max-w-3xl">
            <Quote className="mb-6 h-7 w-7 text-gold/60" />
            <Reveal>
              <p className="font-serif text-3xl leading-[1.3] text-ivory sm:text-4xl">
                "I have never taken a partner. I never will. The practice is the
                <span className="text-gold-gradient italic"> shape of a single life</span>,
                and that is the only shape I know how to give it."
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 eyebrow text-gold">Julian Voss</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gold/10 bg-background py-24 sm:py-32">
        <div className="container max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-6 text-gold">Begin</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif text-4xl leading-[1.15] text-ivory sm:text-5xl">
              A short, private conversation
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-platinum/75">
              The practice accepts new principals by referral or by direct introduction.
              A first conversation lasts twenty minutes and carries no obligation.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <GoldButton to="/contact" variant="solid">Begin Private Conversation</GoldButton>
              <GoldButton to="/legacy" variant="outline">Read Client Legacy</GoldButton>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
