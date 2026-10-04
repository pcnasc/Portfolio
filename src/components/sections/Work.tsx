"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { useI18n } from "@/lib/i18n";
import { useMediaQuery } from "@/lib/scroll";
import type { Project } from "@/messages/pt";
import { MaskLines, Reveal } from "@/components/motion/primitives";
import { ArrowUpRight } from "@/components/ui/links";
import festo from "../../../public/projects/festo-digital-twin.jpg";
import jdFixit from "../../../public/projects/jd-fixit.jpg";
import robotArm from "../../../public/projects/robot-arm.jpg";
import visai from "../../../public/projects/visai.jpg";

/** "cover" = full-bleed photo/illustration; "framed" = UI screenshot floated on a panel. */
const MEDIA: Record<string, { src: StaticImageData; fit: "cover" | "framed"; position?: string }> = {
  "festo-digital-twin": { src: festo, fit: "framed", position: "object-left-top" },
  "jd-fixit": { src: jdFixit, fit: "cover", position: "object-left-top" },
  "robot-arm": { src: robotArm, fit: "framed", position: "object-center" },
  visai: { src: visai, fit: "cover", position: "object-center" },
};

const STACK_QUERY = "(min-width: 1024px) and (min-height: 720px)";

export function Work() {
  const { t } = useI18n();
  const deckRef = useRef<HTMLDivElement>(null);
  const stacking = useMediaQuery(STACK_QUERY);
  const { scrollYProgress } = useScroll({ target: deckRef, offset: ["start start", "end end"] });
  const items = t.work.items;

  return (
    <section id="work" className="section">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-brass-500/60" />
              <span className="eyebrow">{t.work.label}</span>
            </Reveal>
            <h2 className="display text-[clamp(2.6rem,5.6vw,5.4rem)] leading-[1.02]">
              <MaskLines lines={[t.work.title]} />
            </h2>
          </div>
          <Reveal delay={0.15} className="lg:col-span-4">
            <p className="text-[1rem] leading-[1.75] text-cream-400">{t.work.intro}</p>
          </Reveal>
        </div>

        <div ref={deckRef} className="relative mt-20 md:mt-28">
          {items.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              total={items.length}
              progress={scrollYProgress}
              stacking={stacking}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project: p,
  index,
  total,
  progress,
  stacking,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
  stacking: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isLast = index === total - 1;

  // As later cards slide over, earlier ones recede: shrink slightly and dim.
  const depth = total - 1 - index;
  const scale = useTransform(progress, [index / total, 1], [1, 1 - depth * 0.045]);
  const dim = useTransform(progress, [index / total, 1], [0, depth * 0.14]);

  // Image settles from a gentle zoom as the card arrives.
  const { scrollYProgress: arrive } = useScroll({ target: cardRef, offset: ["start end", "start 0.25"] });
  const imgScale = useTransform(arrive, [0, 1], [1.18, 1]);

  const media = MEDIA[p.id];

  return (
    <div
      ref={cardRef}
      className={`stack-item ${isLast ? "" : "mb-8 lg:mb-[14vh]"}`}
      style={{ top: `${96 + index * 18}px` }}
    >
      <motion.article
        style={stacking ? { scale } : undefined}
        className="stack-card relative grid origin-top overflow-hidden rounded-[30px] border border-cream-100/[0.07] bg-coal-850 shadow-[0_40px_120px_-40px_rgb(0_0_0/0.8)] lg:grid-cols-[1.05fr_1fr]"
      >
        {/* Text */}
        <div className="relative z-10 flex flex-col p-7 sm:p-10 lg:p-12">
          <div className="mb-8 flex items-center justify-between gap-6 lg:mb-10">
            <span className="font-serif text-[1.5rem] leading-none text-brass-300">{p.number}</span>
            <span className="text-right text-[0.66rem] uppercase tracking-[0.22em] text-cream-400">{p.kicker}</span>
          </div>

          <h3 className="display text-[clamp(2.1rem,3.6vw,3.3rem)] leading-[1.02]">{p.title}</h3>
          <p className="mt-3 font-serif text-[1.25rem] italic leading-snug text-cream-300">{p.subtitle}</p>
          <p className="mt-6 max-w-[38rem] text-[0.95rem] leading-[1.75] text-cream-400">{p.summary}</p>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-cream-100/[0.08] pt-6 lg:mt-auto">
            {p.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-serif text-[2rem] leading-none text-cream-50 lg:text-[2.3rem]">{m.value}</div>
                <div className="mt-2 text-[0.75rem] leading-snug text-cream-500">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
            <p className="text-[0.78rem] text-cream-500">{p.tags.join("  ·  ")}</p>
            {p.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="link-draw inline-flex items-center gap-1.5 text-[0.82rem] text-cream-200 hover:text-cream-50"
              >
                {l.label}
                <ArrowUpRight />
              </a>
            ))}
          </div>
        </div>

        {/* Media */}
        <div className="relative order-first min-h-[260px] overflow-hidden bg-coal-800 sm:min-h-[360px] lg:order-none lg:min-h-0">
          {media ? (
            media.fit === "cover" ? (
              <motion.div style={{ scale: imgScale }} className="absolute inset-0">
                <Image
                  src={media.src}
                  alt={p.title}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 620px, 100vw"
                  className={`object-cover ${media.position ?? ""}`}
                />
              </motion.div>
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_20%,#2c2821,#171512)]">
                <motion.div
                  style={{ scale: imgScale }}
                  className="absolute inset-y-[12%] left-[10%] right-[-18%] overflow-hidden rounded-[14px] shadow-[0_30px_80px_-20px_rgb(0_0_0/0.75)] ring-1 ring-cream-100/10"
                >
                  <Image
                    src={media.src}
                    alt={p.title}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 700px, 100vw"
                    className={`object-cover ${media.position ?? ""} brightness-[0.9] saturate-[0.85]`}
                  />
                </motion.div>
              </div>
            )
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-[9rem] italic text-cream-100/[0.06]">{p.number}</span>
            </div>
          )}
          {/* Blend media into the card on desktop */}
          <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-coal-850 via-transparent to-transparent opacity-60 lg:block" />
        </div>

        {/* Depth dimmer for receding cards */}
        {stacking && (
          <motion.div style={{ opacity: dim }} className="pointer-events-none absolute inset-0 z-20 bg-coal-950" />
        )}
      </motion.article>
    </div>
  );
}
