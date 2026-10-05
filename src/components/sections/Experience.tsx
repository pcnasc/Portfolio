"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import t from "@/messages";
import { MaskLines, Reveal } from "@/components/motion/primitives";

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.7", "end 0.6"] });
  const draw = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section id="experience" className="section border-t border-cream-100/[0.06]">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Reveal className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-brass-500/60" />
              <span className="eyebrow">{t.experience.label}</span>
            </Reveal>
            <h2 className="display text-[clamp(2.8rem,5vw,4.8rem)] leading-[1]">
              <MaskLines lines={[t.experience.title]} />
            </h2>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xs text-[1rem] leading-[1.7] text-cream-400">{t.experience.intro}</p>
            </Reveal>
          </div>
        </div>

        <ol ref={listRef} className="relative lg:col-span-8">
          {/* Track + self-drawing brass line */}
          <span aria-hidden className="absolute bottom-2 left-[4px] top-2 w-px bg-cream-100/[0.08]" />
          <motion.span
            aria-hidden
            style={{ scaleY: draw }}
            className="absolute bottom-2 left-[4px] top-2 w-px origin-top bg-gradient-to-b from-brass-300 via-brass-500 to-brass-600"
          />

          {t.experience.items.map((item, i) => (
            <li key={item.company} className={`relative pl-10 md:pl-16 ${i < t.experience.items.length - 1 ? "pb-20 md:pb-28" : ""}`}>
              <span
                aria-hidden
                className={`absolute left-0 top-[0.6rem] h-[9px] w-[9px] rounded-full border ${
                  item.current ? "animate-breathe border-brass-300 bg-brass-400" : "border-cream-400 bg-coal-900"
                }`}
              />
              <Reveal>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="text-[0.72rem] uppercase tracking-[0.22em] tabular-nums text-cream-400">{item.period}</span>
                  {item.current && (
                    <span className="rounded-full border border-brass-500/40 px-2.5 py-0.5 text-[0.62rem] uppercase tracking-[0.2em] text-brass-300">
                      {t.experience.present}
                    </span>
                  )}
                </div>
                <h3 className="display mt-4 text-[clamp(2.4rem,4.4vw,3.8rem)] leading-[1]">{item.company}</h3>
                <p className="mt-3 font-serif text-[1.2rem] italic text-cream-300">{item.role}</p>
                <p className="mt-6 max-w-2xl text-[1rem] leading-[1.8] text-cream-400">{item.description}</p>
              </Reveal>

              {item.scope.length > 0 && (
                <Reveal delay={0.1}>
                  <ul className="mt-8 grid max-w-2xl gap-px overflow-hidden rounded-2xl border border-cream-100/[0.07] bg-cream-100/[0.07] sm:grid-cols-2">
                    {item.scope.map((s, j) => (
                      <li
                        key={s}
                        className={`flex gap-3 bg-coal-900 px-5 py-4 text-[0.88rem] leading-relaxed text-cream-200 ${
                          j === item.scope.length - 1 && item.scope.length % 2 ? "sm:col-span-2" : ""
                        }`}
                      >
                        <span className="mt-[0.6rem] h-px w-3 shrink-0 bg-brass-500" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
