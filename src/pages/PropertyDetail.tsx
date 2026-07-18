import { useMemo, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, BedDouble, Bath, Maximize, Calendar, MapPin, Check, X,
  Play, ChevronLeft, ChevronRight, Volume2, Phone, Mail,
} from "lucide-react";
import { PROPERTIES, PROPERTIES as ALL } from "@/lib/data";
import { Reveal, Parallax } from "@/components/motion/Reveal";
import { GoldButton, PropertyCard, GoldDivider } from "@/components/ui/luxury";
import { cn } from "@/lib/utils";

import { assetUrl } from "@/lib/assets";

export default function PropertyDetail() {
  const { slug } = useParams();
  const property = useMemo(() => PROPERTIES.find((p) => p.slug === slug), [slug]);
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  if (!property) return <Navigate to="/properties" replace />;

  const related = ALL.filter((p) => p.slug !== property.slug && p.category === property.category).slice(0, 3);
  const gallery = property.gallery.length ? property.gallery : [property.image];

  return (
    <div className="bg-background">
      {/* HERO GALLERY */}
      <section className="relative h-[88svh] min-h-[560px] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImg}
            src={assetUrl(gallery[activeImg])}
            alt={`${property.name} — view ${activeImg + 1}`}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-transparent to-navy-deep" />

        {/* Top nav back */}
        <div className="absolute inset-x-0 top-0 z-20 pt-28">
          <div className="container">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.25em] text-platinum/80 transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All Properties
            </Link>
          </div>
        </div>

        {/* Title block */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="container pb-12">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Reveal>
                  <div className="flex items-center gap-3">
                    <span className="border border-gold/30 bg-navy/60 px-3 py-1 text-[0.6rem] uppercase tracking-[0.22em] text-gold backdrop-blur-md">
                      {property.status}
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-[0.22em] text-platinum/70">
                      {property.category}
                    </span>
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <h1 className="mt-4 font-serif text-5xl text-ivory sm:text-6xl md:text-7xl">
                    {property.name}
                  </h1>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="mt-3 flex items-center gap-2 text-platinum/80">
                    <MapPin className="h-4 w-4 text-gold/70" /> {property.location}
                  </p>
                </Reveal>
              </div>
              <Reveal delay={0.24}>
                <div className="text-right">
                  <p className="eyebrow text-gold/80">Guide</p>
                  <p className="font-serif text-4xl text-gold sm:text-5xl">{property.priceLabel}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Gallery controls */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
          <button
            onClick={() => setActiveImg((i) => (i - 1 + gallery.length) % gallery.length)}
            className="flex h-10 w-10 items-center justify-center border border-gold/30 bg-navy/60 text-ivory backdrop-blur-md transition-colors hover:bg-gold hover:text-navy"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="px-3 text-[0.65rem] uppercase tracking-[0.22em] text-platinum/80">
            {activeImg + 1} / {gallery.length}
          </span>
          <button
            onClick={() => setActiveImg((i) => (i + 1) % gallery.length)}
            className="flex h-10 w-10 items-center justify-center border border-gold/30 bg-navy/60 text-ivory backdrop-blur-md transition-colors hover:bg-gold hover:text-navy"
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="absolute bottom-6 left-6 z-20 hidden gap-2 sm:flex">
          {gallery.map((g, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={cn(
                "h-14 w-20 overflow-hidden border transition-all duration-300",
                i === activeImg ? "border-gold" : "border-gold/15 opacity-60 hover:opacity-100"
              )}
            >
              <img src={assetUrl(g)} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
          <button
            onClick={() => setLightbox(true)}
            className="flex h-14 w-20 items-center justify-center border border-gold/15 bg-navy/60 text-[0.55rem] uppercase tracking-[0.18em] text-platinum/70 backdrop-blur-md transition-colors hover:border-gold/50 hover:text-gold"
          >
            Expand
          </button>
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="border-b border-gold/10 bg-navy-deep py-10">
        <div className="container grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6">
          <Fact icon={<BedDouble className="h-4 w-4" />} label="Bedrooms" value={property.beds.toString()} />
          <Fact icon={<Bath className="h-4 w-4" />} label="Bathrooms" value={property.baths.toString()} />
          <Fact icon={<Maximize className="h-4 w-4" />} label="Interior" value={`${property.sqm.toLocaleString()} m²`} />
          <Fact icon={<MapPin className="h-4 w-4" />} label="Land" value={property.acres > 0 ? `${property.acres} acres` : "n/a"} />
          <Fact icon={<Calendar className="h-4 w-4" />} label="Year built" value={property.yearBuilt.toString()} />
          <Fact icon={<Play className="h-4 w-4" />} label="Virtual tour" value={property.virtualTour ? "Available" : "On request"} />
        </div>
      </section>

      {/* STORY */}
      <section className="bg-background py-24 sm:py-32">
        <div className="container grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">The Residence</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-serif text-4xl leading-[1.15] text-ivory sm:text-5xl">
                {property.tagline}
              </h2>
            </Reveal>
            <div className="mt-8 space-y-6">
              {property.story.map((para, i) => (
                <Reveal key={i} delay={0.16 + i * 0.08}>
                  <p className="max-w-2xl text-pretty text-base leading-relaxed text-platinum/80 sm:text-lg">
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <div className="mt-12 flex flex-wrap gap-3">
                <GoldButton onClick={() => setInquiryOpen(true)} variant="solid">
                  Private Inquiry
                </GoldButton>
                {property.virtualTour && (
                  <GoldButton onClick={() => setTourOpen(true)} variant="outline">
                    Launch 3D Tour
                  </GoldButton>
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="border border-gold/15 bg-charcoal p-8">
              <p className="eyebrow mb-6">Highlights</p>
              <ul className="space-y-4">
                {property.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-platinum/85">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <GoldDivider className="my-8" />
              <div className="space-y-3 text-sm">
                <Row label="Region" value={property.region} />
                <Row label="Country" value={property.country} />
                <Row label="Status" value={property.status} />
                <Row label="Guide" value={property.priceLabel} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CINEMATIC PARALLAX IMAGE */}
      <section className="relative h-[60svh] min-h-[420px] overflow-hidden">
        <Parallax speed={0.25} className="absolute inset-0">
          <img src={assetUrl(gallery[1] ?? gallery[0])} alt="" className="h-[120%] w-full object-cover" loading="lazy" />
        </Parallax>
        <div className="absolute inset-0 bg-navy-deep/60" />
        <div className="container relative flex h-full items-center">
          <Reveal>
            <p className="max-w-xl font-serif text-3xl leading-[1.3] text-ivory sm:text-4xl">
              "A residence is not acquired for what it is, but for what it allows a family to become."
            </p>
            <p className="mt-6 eyebrow text-gold">Julian Voss</p>
          </Reveal>
        </div>
      </section>

      {/* INQUIRY CTA */}
      <section className="bg-navy-deep py-24 sm:py-32">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-6">Arrange a Private Viewing</p>
            <h2 className="font-serif text-4xl leading-[1.15] text-ivory sm:text-5xl">
              This residence is offered under sealed terms.
            </h2>
            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-platinum/75">
              Viewings are arranged privately and never advertised. To request an
              appointment or the full dossier, begin a confidential conversation with
              the practice.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <GoldButton onClick={() => setInquiryOpen(true)} variant="solid">
                Request Private Dossier
              </GoldButton>
              <GoldButton to="/contact" variant="outline">
                Contact the Advisor
              </GoldButton>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactTile icon={<Phone className="h-5 w-5" />} title="Direct line" lines={["+377 00 00 00 00", "Mon–Fri · By appointment"]} />
              <ContactTile icon={<Mail className="h-5 w-5" />} title="Correspondence" lines={["office@julianvoss.legacy", "Encrypted on request"]} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-background py-24 sm:py-32">
          <div className="container">
            <div className="flex items-end justify-between">
              <Reveal>
                <h2 className="font-serif text-3xl text-ivory sm:text-4xl">Further residences</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <Link to="/properties" className="link-gold text-[0.65rem] uppercase tracking-[0.22em] text-gold">
                  View all
                </Link>
              </Reveal>
            </div>
            <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <PropertyCard key={p.slug} property={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/95 backdrop-blur-xl"
          >
            <button className="absolute right-6 top-6 text-ivory hover:text-gold" aria-label="Close">
              <X className="h-6 w-6" />
            </button>
            <motion.img
              key={activeImg}
              src={assetUrl(gallery[activeImg])}
              alt=""
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); setActiveImg((i) => (i - 1 + gallery.length) % gallery.length); }}
              className="absolute left-6 text-ivory hover:text-gold"
              aria-label="Previous"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setActiveImg((i) => (i + 1) % gallery.length); }}
              className="absolute right-6 text-ivory hover:text-gold"
              aria-label="Next"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* VIRTUAL TOUR */}
      <AnimatePresence>
        {tourOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex flex-col bg-navy-deep"
          >
            <div className="flex items-center justify-between border-b border-gold/10 px-6 py-4">
              <div>
                <p className="eyebrow text-gold">3D Virtual Tour</p>
                <p className="font-serif text-xl text-ivory">{property.name}</p>
              </div>
              <button onClick={() => setTourOpen(false)} className="text-ivory hover:text-gold" aria-label="Close tour">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative flex-1">
              <img src={assetUrl(gallery[0])} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-navy-deep/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group flex flex-col items-center gap-4">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/50 bg-navy/60 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-gold">
                    <Play className="h-7 w-7 text-gold transition-colors group-hover:text-navy" />
                  </span>
                  <span className="eyebrow text-ivory">Begin Immersive Tour</span>
                </button>
              </div>
              {/* Hotspots */}
              {[
                { top: "30%", left: "25%", label: "Grand salon" },
                { top: "55%", left: "60%", label: "Terrace & pool" },
                { top: "70%", left: "35%", label: "Wine cellar" },
              ].map((h, i) => (
                <div key={i} className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center" style={{ top: h.top, left: h.left }}>
                  <span className="flex h-4 w-4 items-center justify-center">
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-gold/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-gold ring-2 ring-navy" />
                  </span>
                  <span className="mt-2 whitespace-nowrap border border-gold/20 bg-navy/90 px-2 py-1 text-[0.55rem] uppercase tracking-[0.18em] text-ivory backdrop-blur-md">
                    {h.label}
                  </span>
                </div>
              ))}
              <div className="absolute bottom-6 right-6 flex items-center gap-2 text-platinum/60">
                <Volume2 className="h-4 w-4" />
                <span className="text-[0.6rem] uppercase tracking-[0.2em]">Ambient audio available</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* INQUIRY MODAL */}
      <AnimatePresence>
        {inquiryOpen && <InquiryModal property={property} onClose={() => setInquiryOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

function Fact({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-gold/70">{icon}</span>
      <div>
        <p className="text-[0.6rem] uppercase tracking-[0.2em] text-platinum/60">{label}</p>
        <p className="font-serif text-lg text-ivory">{value}</p>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-gold/10 py-2">
      <span className="text-[0.65rem] uppercase tracking-[0.18em] text-platinum/60">{label}</span>
      <span className="text-ivory">{value}</span>
    </div>
  );
}

function ContactTile({ icon, title, lines }: { icon: React.ReactNode; title: string; lines: string[] }) {
  return (
    <div className="border border-gold/15 bg-charcoal p-6">
      <span className="text-gold">{icon}</span>
      <p className="mt-4 eyebrow text-[0.55rem]">{title}</p>
      {lines.map((l) => (
        <p key={l} className="mt-1 text-sm text-platinum/85">{l}</p>
      ))}
    </div>
  );
}

function InquiryModal({ property, onClose }: { property: { name: string; priceLabel: string }; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/90 backdrop-blur-xl p-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.96 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg border border-gold/20 bg-navy p-8 sm:p-10"
      >
        <button onClick={onClose} className="absolute right-5 top-5 text-platinum/60 hover:text-gold" aria-label="Close">
          <X className="h-5 w-5" />
        </button>
        {submitted ? (
          <div className="py-10 text-center">
            <p className="font-serif text-3xl text-gold">Received in confidence.</p>
            <p className="mt-4 text-sm text-platinum/75">
              The office will be in touch from a number you trust within 48 hours.
            </p>
          </div>
        ) : (
          <>
            <p className="eyebrow text-gold">Private Inquiry</p>
            <h3 className="mt-3 font-serif text-3xl text-ivory">{property.name}</h3>
            <p className="mt-2 text-sm text-platinum/60">Guide {property.priceLabel} · Sealed terms</p>
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="mt-8 space-y-4"
            >
              <Field label="Full name" required>
                <input required type="text" className="luxury-input" placeholder="As recorded in your passport" />
              </Field>
              <Field label="Private email" required>
                <input required type="email" className="luxury-input" placeholder="you@private.email" />
              </Field>
              <Field label="Trusted telephone">
                <input type="tel" className="luxury-input" placeholder="+••• ••• •••" />
              </Field>
              <Field label="A note to the advisor">
                <textarea rows={3} className="luxury-input resize-none" placeholder="Share what you are considering…" />
              </Field>
              <button
                type="submit"
                className="w-full border border-gold bg-gold py-3.5 text-[0.7rem] uppercase tracking-[0.25em] text-navy transition-all duration-500 hover:bg-transparent hover:text-gold"
              >
                Submit in Confidence
              </button>
              <p className="text-center text-[0.65rem] text-platinum/40">
                Encrypted in transit · Never shared · Never listed
              </p>
            </form>
          </>
        )}
      </motion.div>
      <style>{`.luxury-input{width:100%;border:1px solid hsl(33 52% 68% / 0.15);background:transparent;padding:0.7rem 0.9rem;font-size:0.875rem;color:hsl(40 35% 93%);outline:none}.luxury-input::placeholder{color:hsl(42 30% 86% / 0.35)}.luxury-input:focus{border-color:hsl(33 52% 68% / 0.6)}`}</style>
    </motion.div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="eyebrow mb-2 block text-[0.55rem]">
        {label}
        {required && <span className="ml-1 text-gold/70">*</span>}
      </span>
      {children}
    </label>
  );
}

