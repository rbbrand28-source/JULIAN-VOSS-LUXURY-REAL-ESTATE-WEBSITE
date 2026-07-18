import { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, ArrowUpRight } from "lucide-react";
import { INTELLIGENCE } from "@/lib/data";
import { Reveal, Parallax } from "@/components/motion/Reveal";
import { GoldButton, GoldDivider } from "@/components/ui/luxury";

import { assetUrl } from "@/lib/assets";

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = useMemo(() => INTELLIGENCE.find((a) => a.slug === slug), [slug]);
  const more = useMemo(
    () => INTELLIGENCE.filter((a) => a.slug !== slug).slice(0, 3),
    [slug]
  );

  if (!article) return <Navigate to="/intelligence" replace />;

  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative h-[70svh] min-h-[480px] overflow-hidden">
        <Parallax speed={0.2} className="absolute inset-0">
          <img
            src={assetUrl(article.image)}
            alt={article.title}
            className="h-[120%] w-full object-cover"
            loading="eager"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy/30 to-navy-deep" />
        <div className="container relative flex h-full flex-col justify-end pb-20">
          <Reveal>
            <Link
              to="/intelligence"
              className="inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.25em] text-platinum/80 transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All Reports
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-8 eyebrow text-gold">{article.category}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.1] text-ivory sm:text-5xl md:text-6xl">
              {article.title}
            </h1>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-[0.65rem] uppercase tracking-[0.22em] text-platinum/65">
              <span>{article.date}</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3" /> {article.readMinutes} min</span>
              <span>By {article.author}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BODY */}
      <article className="bg-background py-20 sm:py-28">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="font-serif text-2xl leading-[1.4] text-ivory sm:text-3xl">
              {article.dek}
            </p>
          </Reveal>
          <GoldDivider className="my-12" />

          {article.datum && (
            <Reveal>
              <div className="mb-12 grid grid-cols-3 gap-4 border border-gold/15 bg-charcoal p-6">
                {article.datum.map((d) => (
                  <div key={d.label} className="text-center">
                    <p className="font-serif text-2xl text-gold sm:text-3xl">{d.value}</p>
                    <p className="eyebrow mt-1 text-[0.5rem]">{d.label}</p>
                    {d.delta && <p className="mt-1 text-[0.6rem] text-emerald/80">{d.delta}</p>}
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          <div className="space-y-8">
            {article.body.map((p, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p className="text-pretty text-lg leading-[1.8] text-platinum/85">
                  {i === 0 ? (
                    <span className="float-left mr-3 mt-1 font-serif text-6xl leading-[0.8] text-gold">
                      {p[0]}
                    </span>
                  ) : null}
                  {i === 0 ? p.slice(1) : p}
                </p>
              </Reveal>
            ))}
          </div>

          <GoldDivider className="my-12" />

          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="eyebrow text-gold">Written by</p>
                <p className="mt-2 font-serif text-2xl text-ivory">{article.author}</p>
                <p className="text-sm text-platinum/60">Solo Advisor · Legacy Estates</p>
              </div>
              <GoldButton to="/contact" variant="outline">Discuss with the practice</GoldButton>
            </div>
          </Reveal>
        </div>
      </article>

      {/* MORE */}
      <section className="border-t border-gold/10 bg-navy-deep py-20 sm:py-28">
        <div className="container">
          <Reveal>
            <h2 className="font-serif text-3xl text-ivory sm:text-4xl">Further reports</h2>
          </Reveal>
          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {more.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.06}>
                <Link
                  to={`/intelligence/${a.slug}`}
                  className="group flex h-full flex-col border border-gold/10 bg-charcoal gold-frame"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={assetUrl(a.image)}
                      alt={a.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[0.6rem] uppercase tracking-[0.18em] text-platinum/55">{a.category} · {a.date}</p>
                    <h3 className="mt-2 font-serif text-xl text-ivory transition-colors group-hover:text-gold">{a.title}</h3>
                    <span className="mt-4 inline-flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.22em] text-gold">
                      Read <ArrowUpRight className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

