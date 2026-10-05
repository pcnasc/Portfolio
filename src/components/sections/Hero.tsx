"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import t from "@/messages";
import { EASE, MaskLines, Reveal } from "@/components/motion/primitives";
import { AnchorLink, ArrowRight } from "@/components/ui/links";
import portrait from "../../../public/pedro.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Scroll choreography: copy drifts up and fades, portrait sinks slower (parallax) and zooms gently.
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.16]);

  const h = t.hero.headline;

  return (
    <section ref={ref} id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden pt-32 md:pt-40">
      {/* Ambient warm light behind the portrait */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[10%] top-[5%] h-[70vh] w-[60vw] rounded-full bg-[radial-gradient(closest-side,rgb(184_151_90/0.13),transparent)] blur-2xl"
      />

      <div className="container-x relative grid flex-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <motion.div style={{ y: copyY, opacity: copyOpacity }} className="lg:col-span-7">
          <Reveal onMount delay={0.35} y={12} className="mb-8 flex items-center gap-3">
            <span className="h-1.5 w-1.5 animate-breathe rounded-full bg-brass-400" />
            <span className="eyebrow">{t.hero.eyebrow}</span>
          </Reveal>

          <h1 className="display text-[clamp(3.1rem,8vw,8rem)] leading-[0.94]">
            <MaskLines
              onMount
              delay={0.45}
              lines={[
                h.line1,
                <>
                  {h.line2}
                  <em className="italic text-brass-200">{h.emphasis}</em>
                  {h.end}
                </>,
              ]}
            />
          </h1>

          <Reveal onMount delay={0.95} className="mt-9 max-w-[34rem]">
            <p className="text-[1.08rem] leading-[1.7] text-cream-300 md:text-[1.15rem]">{t.hero.lede}</p>
          </Reveal>

          <Reveal onMount delay={1.1} className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-5">
            <AnchorLink href="#work" id="hero-cta-work" className="btn-pill">
              {t.hero.ctaPrimary}
              <ArrowRight className="arrow" />
            </AnchorLink>
            <AnchorLink
              href="#contact"
              id="hero-cta-contact"
              className="link-underline text-[0.95rem] text-cream-100 transition-colors hover:text-cream-50"
            >
              {t.hero.ctaSecondary}
            </AnchorLink>
          </Reveal>
        </motion.div>

        <motion.div style={{ y: portraitY }} className="lg:col-span-5 lg:pl-6">
          <figure className="group relative mx-auto w-full max-w-[420px] lg:ml-auto lg:mr-0">
            <motion.div
              initial={{ clipPath: "inset(100% 0% 0% 0% round 28px)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0% round 28px)" }}
              transition={{ duration: 1.6, ease: EASE, delay: 0.55 }}
              className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-coal-800"
            >
              <motion.div style={{ scale: imageScale }} className="absolute inset-0">
                <motion.div
                  initial={{ scale: 1.25 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 2.2, ease: EASE, delay: 0.55 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={portrait}
                    alt={t.hero.portraitAlt}
                    fill
                    priority
                    placeholder="blur"
                    sizes="(min-width: 1024px) 420px, 90vw"
                    className="tone-warm object-cover object-[50%_30%]"
                  />
                </motion.div>
              </motion.div>
              {/* Soft vignette + inner hairline */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-coal-950/55 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-cream-100/10" />
            </motion.div>
            <Reveal onMount delay={1.4} y={8}>
              <figcaption className="mt-5 flex items-center justify-between text-[0.68rem] uppercase tracking-[0.24em] text-cream-400">
                <span>{t.hero.caption}</span>
                <span className="text-cream-500">N° 01</span>
              </figcaption>
            </Reveal>
          </figure>
        </motion.div>
      </div>

      {/* Recognition row */}
      <div className="container-x relative mt-16 pb-10 md:mt-20">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.6, ease: EASE, delay: 1.2 }}
          className="h-px origin-left bg-gradient-to-r from-brass-500/70 via-brass-500/30 to-transparent"
        />
        <div className="mt-7 grid gap-5 sm:grid-cols-3 sm:gap-8">
          {t.hero.awards.map((a, i) => (
            <Reveal key={a.event} onMount delay={1.35 + i * 0.1} y={14}>
              <p className="flex items-baseline gap-3">
                <span className="font-serif text-[2.1rem] leading-none text-cream-50">{a.place}</span>
                <span className="text-cream-500">—</span>
                <span className="text-[0.88rem] leading-snug text-cream-300">
                  {a.event} <span className="text-cream-500">{a.year}</span>
                </span>
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
