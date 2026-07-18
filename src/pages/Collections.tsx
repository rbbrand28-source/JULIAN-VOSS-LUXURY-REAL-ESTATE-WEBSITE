import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { COLLECTIONS, PROPERTIES } from "@/lib/data";
import { Reveal, Parallax } from "@/components/motion/Reveal";
import { SectionHeading, GoldButton, GoldDivider } from "@/components/ui/luxury";

import { assetUrl } from "@/lib/assets";

export default function Collections() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative h-[70svh] min-h-[480px] overflow-hidden">
        <Parallax speed={0.2} className="absolute inset-0">
          <img
            src={assetUrl("collection_historic_estate_interior")}
            alt="Private collections"
            className="h-[120%] w-full object-cover"
            loading="eager"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy/40 to-navy-deep" />
        <div className="container relative flex h-full flex-col justify-end pb-20">
          <Reveal>
            <p className="eyebrow mb-6 text-gold">Private Collections</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-4xl font-serif text-5xl leading-[1.1] text-ivory sm:text-6xl md:text-7xl">
              Assembled over years,
              <span className="text-gold-gradient italic"> offered as a dossier.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-platinum/80 sm:text-lg">
              Six dedicated collections, each curated over years and presented to a
              principal as a single sealed dossier — never as a public listing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COLLECTIONS LIST */}
      <section className="bg-background py-24 sm:py-32">
        <div className="container space-y-20">
          {COLLECTIONS.map((c, i) => {
            const inCollection = PROPERTIES.filter((p) =>
              p.category.toLowerCase().includes(c.title.toLowerCase().split(" ")[0]) ||
              c.title.toLowerCase().includes(p.category.toLowerCase())
            ).slice(0, 3);
            const reversed = i % 2 === 1;
            return (
              <div key={c.slug} className="grid items-center gap-12 lg:grid-cols-2">
                <Reveal className={reversed ? "lg:order-2" : ""}>
                  <Link
                    to="/properties"
                    className="group relative block aspect-[4/3] overflow-hidden border border-gold/10 gold-frame"
                  >
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent" />
                    <div className="absolute bottom-5 left-5 border border-gold/30 bg-navy/70 px-4 py-2 backdrop-blur-md">
                      <p className="text-[0.6rem] uppercase tracking-[0.22em] text-gold">{c.count} residences</p>
                    </div>
                  </Link>
                </Reveal>

                <div className={reversed ? "lg:order-1" : ""}>
                  <Reveal>
                    <p className="eyebrow text-gold/80">Collection {String(i + 1).padStart(2, "0")}</p>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <h2 className="mt-4 font-serif text-4xl text-ivory sm:text-5xl">{c.title}</h2>
                  </Reveal>
                  <Reveal delay={0.16}>
                    <p className="mt-5 max-w-xl text-pretty leading-relaxed text-platinum/80">{c.summary}</p>
                  </Reveal>
                  <Reveal delay={0.24}>
                    <p className="mt-6 font-serif text-2xl text-gold">{c.priceFromLabel}</p>
                  </Reveal>
                  {inCollection.length > 0 && (
                    <Reveal delay={0.32}>
                      <ul className="mt-6 space-y-2 border-t border-gold/10 pt-6">
                        {inCollection.map((p) => (
                          <li key={p.slug}>
                            <Link
                              to={`/properties/${p.slug}`}
                              className="group flex items-center justify-between py-2 text-sm text-platinum/80 transition-colors hover:text-gold"
                            >
                              <span>{p.name} · {p.location}</span>
                              <span className="text-gold/80">{p.priceLabel}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  )}
                  <Reveal delay={0.4}>
                    <div className="mt-8">
                      <GoldButton to="/contact" variant="outline">Request the Dossier</GoldButton>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* GATED TEASER */}
      <section className="relative border-t border-gold/10 bg-navy-deep py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center border border-gold/30">
                <Lock className="h-5 w-5 text-gold" />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="eyebrow text-gold">The Off-Record Collection</p>
            </Reveal>
            <Reveal delay={0.16}>
              <h2 className="mt-5 font-serif text-4xl leading-[1.15] text-ivory sm:text-5xl">
                Eleven residences never advertised
              </h2>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-platinum/75">
                Beyond these six collections, the practice holds a sealed dossier of
                estates offered only to verified principals. Access requires a brief
                private conversation.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <GoldButton to="/salon" variant="solid">Enter the Private Salon</GoldButton>
                <GoldButton to="/contact" variant="outline">Request Access</GoldButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

