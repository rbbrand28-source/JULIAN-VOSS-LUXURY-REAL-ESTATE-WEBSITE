import { Link } from "react-router-dom";
import { Reveal } from "@/components/motion/Reveal";
import { GoldButton } from "@/components/ui/luxury";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-navy-deep px-6 text-center">
      {/* Decorative gold glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(33_52%_68%/0.08),transparent_60%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(hsl(33 52% 68% / 0.06) 1px, transparent 1px), linear-gradient(90deg, hsl(33 52% 68% / 0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Reveal>
        <p className="eyebrow text-gold">404 · Not Found</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h1 className="mt-6 font-serif text-7xl text-ivory sm:text-9xl">
          Off <span className="text-gold-gradient italic">the map.</span>
        </h1>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="mx-auto mt-6 max-w-md text-pretty leading-relaxed text-platinum/75">
          The page you sought is not here. The practice holds many residences
          off-record — but this address is not among them.
        </p>
      </Reveal>
      <Reveal delay={0.24}>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <GoldButton to="/" variant="solid">Return Home</GoldButton>
          <GoldButton to="/properties" variant="outline">View Properties</GoldButton>
        </div>
      </Reveal>
    </div>
  );
}

