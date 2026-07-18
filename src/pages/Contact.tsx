import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, Check, Clock } from "lucide-react";
import { Reveal, Parallax } from "@/components/motion/Reveal";
import { SectionHeading, GoldDivider } from "@/components/ui/luxury";
import { cn } from "@/lib/utils";

import { assetUrl } from "@/lib/assets";

const INTERESTS = [
  "Acquisition",
  "Quiet Disposition",
  "Portfolio Review",
  "Legacy Structuring",
  "Private Intelligence",
  "Other",
] as const;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Acquisition" as (typeof INTERESTS)[number],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative h-[58svh] min-h-[420px] overflow-hidden">
        <Parallax speed={0.2} className="absolute inset-0">
          <img
            src={assetUrl("lifestyle_library_detail")}
            alt="Contact"
            className="h-[120%] w-full object-cover"
            loading="eager"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/75 via-navy/40 to-navy-deep" />
        <div className="container relative flex h-full flex-col justify-end pb-20">
          <Reveal>
            <p className="eyebrow mb-6 text-gold">Contact</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-4xl font-serif text-5xl leading-[1.1] text-ivory sm:text-6xl md:text-7xl">
              Begin a private
              <span className="text-gold-gradient italic"> conversation.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-platinum/80 sm:text-lg">
              A first conversation lasts twenty minutes and carries no obligation.
              The office replies within 48 hours, from a number you trust.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FORM + DETAILS */}
      <section className="bg-background py-24 sm:py-32">
        <div className="container grid gap-16 lg:grid-cols-[1.3fr_1fr]">
          {/* FORM */}
          <Reveal>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[400px] flex-col items-center justify-center border border-gold/20 bg-charcoal p-12 text-center"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/40">
                    <Check className="h-6 w-6 text-gold" />
                  </div>
                  <p className="font-serif text-3xl text-gold">Received in confidence.</p>
                  <p className="mt-4 max-w-md text-pretty leading-relaxed text-platinum/75">
                    Thank you, {form.name.split(" ")[0] || "principal"}. The office will
                    be in touch within 48 hours to arrange a private conversation.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", interest: "Acquisition", message: "" }); }}
                    className="mt-8 text-[0.65rem] uppercase tracking-[0.22em] text-platinum/60 hover:text-gold"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-6"
                >
                  <SectionHeading
                    eyebrow="Confidential Inquiry"
                    title="The form below is encrypted in transit"
                  />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" required>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="As recorded in your passport"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Private email" required>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="you@private.email"
                        className={inputCls}
                      />
                    </Field>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Trusted telephone">
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="+••• ••• •••"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Nature of inquiry">
                      <select
                        value={form.interest}
                        onChange={(e) => update("interest", e.target.value)}
                        className={cn(inputCls, "appearance-none")}
                      >
                        {INTERESTS.map((i) => (
                          <option key={i} value={i}>{i}</option>
                        ))}
                      </select>
                    </Field>
                  </div>
                  <Field label="A note to the advisor">
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Share what you are considering — acquisition, disposition, or simply an introduction."
                      className={cn(inputCls, "resize-none")}
                    />
                  </Field>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 border border-gold bg-gold px-8 py-4 text-[0.7rem] uppercase tracking-[0.25em] text-navy transition-all duration-500 hover:bg-transparent hover:text-gold"
                  >
                    Submit in Confidence
                    <Send className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5" />
                  </button>
                  <p className="text-xs text-platinum/40">
                    Encrypted in transit · Never shared · Never listed · No marketing
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>

          {/* DETAILS */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="border border-gold/15 bg-charcoal p-7">
                <p className="eyebrow text-gold">The Office</p>
                <h3 className="mt-3 font-serif text-2xl text-ivory">Monaco</h3>
                <ul className="mt-6 space-y-5 text-sm text-platinum/80">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold/70" />
                    <span>14 Avenue de la Concorde<br />Monaco MC 98000</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 flex-shrink-0 text-gold/70" />
                    <span>+377 00 00 00 00</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 flex-shrink-0 text-gold/70" />
                    <span>office@julianvoss.legacy</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-4 w-4 flex-shrink-0 text-gold/70" />
                    <span>By appointment only<br />Mon–Fri · 10:00–18:00 CET</span>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="border border-gold/15 bg-navy-deep p-7">
                <p className="eyebrow text-gold">Discretion</p>
                <p className="mt-4 text-pretty leading-relaxed text-platinum/80">
                  All correspondence is treated as privileged. The office communicates
                  from numbers you recognise, never from public domains, and never
                  forwards a principal's details to any third party.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="border border-gold/15 bg-charcoal p-7">
                <p className="eyebrow text-gold">Encrypted Line</p>
                <p className="mt-4 text-sm text-platinum/80">
                  For matters requiring end-to-end encryption, request a Signal or
                  Wire handle in your first message.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <GoldDivider />
    </div>
  );
}

const inputCls =
  "w-full border border-gold/15 bg-transparent px-4 py-3 text-sm text-ivory placeholder:text-platinum/35 focus:border-gold/60 focus:outline-none transition-colors";

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

