import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Key, ShieldCheck, Sparkles, ArrowUpRight } from "lucide-react";
import { Reveal, Parallax } from "@/components/motion/Reveal";
import { GoldButton, GoldDivider, SectionHeading } from "@/components/ui/luxury";
import { cn } from "@/lib/utils";

import { assetUrl } from "@/lib/assets";

export default function Salon() {
  const [code, setCode] = useState("");
  const [authed, setAuthed] = useState(false);
  const [error, setError] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Fictional — any non-empty 6+ char code grants preview access
    if (code.trim().length >= 6) {
      setAuthed(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative h-[68svh] min-h-[460px] overflow-hidden">
        <Parallax speed={0.2} className="absolute inset-0">
          <img
            src={assetUrl("collection_modern_art_loft")}
            alt="Private Salon"
            className="h-[120%] w-full object-cover"
            loading="eager"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy/50 to-navy-deep" />
        <div className="container relative flex h-full flex-col justify-end pb-20">
          <Reveal>
            <p className="eyebrow mb-6 text-gold">Private Salon · Gated</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-4xl font-serif text-5xl leading-[1.1] text-ivory sm:text-6xl md:text-7xl">
              The off-record
              <span className="text-gold-gradient italic"> dossier.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-platinum/80 sm:text-lg">
              Eleven residences held by the practice that have never been advertised.
              Access requires a sealed access code, issued only after a private
              conversation.
            </p>
          </Reveal>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {!authed ? (
          <motion.div
            key="gate"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* GATE */}
            <section className="bg-background py-24 sm:py-32">
              <div className="container max-w-lg">
                <Reveal>
                  <div className="mx-auto mb-10 flex h-16 w-16 items-center justify-center border border-gold/30">
                    <Lock className="h-6 w-6 text-gold" />
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="text-center font-serif text-4xl text-ivory sm:text-5xl">
                    Enter the Salon
                  </h2>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="mx-auto mt-5 max-w-md text-center text-pretty leading-relaxed text-platinum/75">
                    Enter the sealed access code provided by the office. Codes are
                    single-use, time-bound, and bound to the principal they were
                    issued to.
                  </p>
                </Reveal>
                <Reveal delay={0.24}>
                  <form onSubmit={submit} className="mt-10 space-y-4">
                    <div>
                      <label className="eyebrow mb-3 block text-[0.55rem]">Sealed access code</label>
                      <div className="flex items-center gap-3 border border-gold/20 bg-charcoal px-4 focus-within:border-gold/60">
                        <Key className="h-4 w-4 text-gold/60" />
                        <input
                          type="password"
                          value={code}
                          onChange={(e) => { setCode(e.target.value); setError(false); }}
                          placeholder="••••••••"
                          className="flex-1 bg-transparent py-3.5 text-sm tracking-[0.3em] text-ivory placeholder:text-platinum/30 focus:outline-none"
                          autoFocus
                        />
                      </div>
                      {error && (
                        <p className="mt-2 text-xs text-red-400/80">
                          A sealed access code is six characters or more.
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full border border-gold bg-gold py-3.5 text-[0.7rem] uppercase tracking-[0.25em] text-navy transition-all duration-500 hover:bg-transparent hover:text-gold"
                    >
                      Enter the Salon
                    </button>
                  </form>
                </Reveal>
                <Reveal delay={0.32}>
                  <div className="mt-10 border-t border-gold/10 pt-8 text-center">
                    <p className="text-sm text-platinum/70">Do not have a code?</p>
                    <div className="mt-4">
                      <GoldButton to="/contact" variant="outline">Request a Private Conversation</GoldButton>
                    </div>
                    <p className="mt-5 text-[0.65rem] text-platinum/40">
                      Access is granted at the sole discretion of the practice.
                    </p>
                  </div>
                </Reveal>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="salon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* SALON CONTENT */}
            <section className="bg-background py-20 sm:py-28">
              <div className="container">
                <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                  <div>
                    <p className="eyebrow text-emerald">
                      <ShieldCheck className="mr-2 inline h-3.5 w-3.5" />
                      Access granted · Confidential
                    </p>
                    <h2 className="mt-4 font-serif text-4xl text-ivory sm:text-5xl">
                      The Off-Record Collection
                    </h2>
                  </div>
                  <button
                    onClick={() => { setAuthed(false); setCode(""); }}
                    className="text-[0.65rem] uppercase tracking-[0.22em] text-platinum/60 hover:text-gold"
                  >
                    Exit Salon
                  </button>
                </div>

                <GoldDivider className="my-10" />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {SALON_PROPERTIES.map((p, i) => (
                    <Reveal key={p.id} delay={i * 0.06}>
                      <div className="group relative aspect-[4/5] overflow-hidden border border-gold/15 bg-charcoal gold-frame">
                        <div className="absolute inset-0 overflow-hidden">
                          <img
                            src={assetUrl(p.image)}
                            alt={p.name}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/30 to-transparent" />
                        <div className="absolute left-5 top-5 border border-gold/30 bg-navy/60 px-3 py-1 text-[0.55rem] uppercase tracking-[0.22em] text-gold backdrop-blur-md">
                          <Sparkles className="mr-1 inline h-2.5 w-2.5" /> Off-Record
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-6">
                          <p className="text-[0.65rem] uppercase tracking-[0.22em] text-platinum/70">{p.location}</p>
                          <h3 className="mt-2 font-serif text-2xl text-ivory transition-colors group-hover:text-gold">{p.name}</h3>
                          <p className="mt-1 text-sm text-platinum/70">{p.tagline}</p>
                          <div className="mt-4 flex items-center justify-between border-t border-gold/10 pt-4">
                            <span className="font-serif text-lg text-gold">{p.price}</span>
                            <span className="inline-flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.22em] text-platinum/60 transition-colors group-hover:text-gold">
                              Request dossier
                              <ArrowUpRight className="h-3 w-3" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>

            <section className="border-t border-gold/10 bg-navy-deep py-20 sm:py-28">
              <div className="container max-w-3xl text-center">
                <Reveal>
                  <p className="eyebrow mb-6 text-gold">The Inner Circle</p>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="font-serif text-4xl text-ivory sm:text-5xl">
                    A quarterly private audience
                  </h2>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-platinum/75">
                    Salon members are invited each quarter to a private audience with
                    Julian — a single evening, in a single city, with no more than
                    twelve principals present.
                  </p>
                </Reveal>
                <Reveal delay={0.24}>
                  <div className="mt-10">
                    <GoldButton to="/contact" variant="solid">Confirm Attendance</GoldButton>
                  </div>
                </Reveal>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const SALON_PROPERTIES = [
  { id: "1", name: "Villa Sembach", tagline: "First-line, sealed cove", location: "Saint-Jean-Cap-Ferrat", price: "On request", image: "hero_villa_dusk" },
  { id: "2", name: "The Aerie", tagline: "A vertical chalet", location: "Gstaad, Switzerland", price: "On request", image: "property_mountain_lodge" },
  { id: "3", name: "Maison Lumineuse", tagline: "A chartreuse restored", location: "Loire Valley, France", price: "On request", image: "collection_historic_estate_interior" },
  { id: "4", name: "The Sky Refectory", tagline: "Triplex apex", location: "New York, USA", price: "On request", image: "property_penthouse_skyline" },
  { id: "5", name: "Atelier Privé", tagline: "A collector's loft", location: "Vienna, Austria", price: "On request", image: "collection_modern_art_loft" },
  { id: "6", name: "Isla Oculta", tagline: "An unseen Ionian isle", location: "Ionian Sea, Greece", price: "On request", image: "property_private_island" },
];

