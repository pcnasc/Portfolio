"use client";

import t from "@/messages";
import { Reveal, ScrollText } from "@/components/motion/primitives";

export function About() {

  return (
    <section id="about" className="section">
      <div className="container-x">
        <Reveal className="mb-12 flex items-center gap-4">
          <span className="h-px w-10 bg-brass-500/60" />
          <span className="eyebrow">{t.about.label}</span>
        </Reveal>

        <ScrollText
          text={t.about.manifesto}
          className="display max-w-[22ch] text-[clamp(2.1rem,4.6vw,4.4rem)] leading-[1.08] sm:max-w-[24ch] lg:max-w-[26ch]"
        />

        <div className="mt-24 grid gap-16 md:mt-32 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-6 lg:col-span-6">
            {t.about.body.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-[1.05rem] leading-[1.8] text-cream-300">{p}</p>
              </Reveal>
            ))}
          </div>

          <dl className="lg:col-span-5 lg:col-start-8">
            {t.about.facts.map((f, i) => (
              <Reveal
                key={f.label}
                delay={i * 0.06}
                y={16}
                className="grid grid-cols-[8.5rem_1fr] gap-6 border-t border-cream-100/[0.08] py-5 last:border-b"
              >
                <dt className="pt-0.5 text-[0.68rem] uppercase tracking-[0.22em] text-cream-500">{f.label}</dt>
                <dd className="space-y-1 text-[0.95rem] leading-relaxed text-cream-100">
                  {f.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
