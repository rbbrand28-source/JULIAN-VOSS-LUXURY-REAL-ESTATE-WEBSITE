import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PropertyListing } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";

/** Section eyebrow + serif title block. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <p className="eyebrow mb-5">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="font-serif text-4xl leading-[1.1] text-ivory sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-6 text-pretty text-base leading-relaxed text-platinum/75 sm:text-lg",
              align === "center" && "mx-auto"
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/** Outlined luxury button with gold border. */
export function GoldButton({
  children,
  to,
  href,
  onClick,
  variant = "solid",
  className,
  type,
}: {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline";
  className?: string;
  type?: "button" | "submit";
}) {
  const base =
    "group inline-flex items-center gap-3 px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.28em] transition-all duration-500";
  const styles =
    variant === "solid"
      ? "bg-gold text-navy hover:bg-transparent hover:text-gold border border-gold"
      : "border border-gold/40 text-gold hover:bg-gold hover:text-navy";
  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );
  if (to) {
    return (
      <Link to={to} className={cn(base, styles, className)}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cn(base, styles, className)}>
        {content}
      </a>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick} className={cn(base, styles, className)}>
      {content}
    </button>
  );
}

/** Property card with hover image swap and gold frame. */
export function PropertyCard({
  property,
  index = 0,
  priority = false,
}: {
  property: PropertyListing;
  index?: number;
  priority?: boolean;
}) {
  return (
    <Reveal delay={index * 0.06}>
      <Link
        to={`/properties/${property.slug}`}
        className="group block"
        aria-label={`${property.name} — ${property.location}`}
      >
        <div className="gold-frame relative aspect-[4/5] overflow-hidden border border-gold/10 bg-charcoal">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={property.image}
              alt={property.tagline}
              loading={priority ? "eager" : "lazy"}
              className="h-full w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/30 to-transparent opacity-90" />
          <div className="absolute inset-0 bg-navy-deep/20 transition-opacity duration-700 group-hover:opacity-0" />

          <div className="absolute left-5 top-5 flex items-center gap-2">
            <span className="border border-gold/30 bg-navy/60 px-3 py-1 text-[0.6rem] uppercase tracking-[0.22em] text-gold backdrop-blur-md">
              {property.status}
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.22em] text-platinum/70">
              <MapPin className="h-3 w-3 text-gold/70" />
              <span>{property.location}</span>
            </div>
            <h3 className="mt-2 font-serif text-2xl text-ivory transition-colors duration-500 group-hover:text-gold">
              {property.name}
            </h3>
            <p className="mt-1 text-sm text-platinum/70">{property.tagline}</p>

            <div className="mt-4 flex items-center justify-between border-t border-gold/10 pt-4">
              <span className="font-serif text-lg text-gold">{property.priceLabel}</span>
              <span className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.22em] text-platinum/60 transition-colors group-hover:text-gold">
                View
                <ArrowUpRight className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

/** Decorative gold hairline divider. */
export function GoldDivider({ className }: { className?: string }) {
  return <div className={cn("hairline mx-auto max-w-7xl", className)} />;
}

/** Animated gold counter — counts up when in view. */
export function StatCounter({
  value,
  label,
  suffix = "",
  duration = 1.6,
}: {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}) {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-5xl text-gold sm:text-6xl"
      >
        {value}
        {suffix}
      </motion.div>
      <div className="eyebrow mt-3">{label}</div>
    </div>
  );
}

