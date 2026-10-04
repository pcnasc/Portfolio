"use client";

import { useI18n } from "@/lib/i18n";
import { MaskLines, Reveal } from "@/components/motion/primitives";

export function Capabilities() {
  const { t } = useI18n();

  return (
    <section id="capabilities" className="section border-t border-cream-100/[0.06]">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-brass-500/60" />
              <span className="eyebrow">{t.capabilities.label}</span>
            </Reveal>
            <h2 className="display text-[clamp(2.6rem,5.2vw,5rem)] leading-[1.02]">
              <MaskLines lines={[t.capabilities.title]} />
            </h2>
          </div>
          <Reveal delay={0.15} className="lg:col-span-4">
            <p className="text-[1rem] leading-[1.75] text-cream-400">{t.capabilities.intro}</p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[24px] border border-cream-100/[0.08] bg-cream-100/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {t.capabilities.categories.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 0.07} y={20} className="group bg-coal-900 p-8 transition-colors duration-700 hover:bg-coal-850">
              <div className="mb-6 flex items-baseline justify-between">
                <h3 className="text-[0.7rem] uppercase tracking-[0.22em] text-cream-500 transition-colors duration-500 group-hover:text-brass-300">
                  {c.name}
                </h3>
                <span className="font-serif text-[0.95rem] italic text-cream-500">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <ul className="space-y-2.5">
                {c.items.map((item) => (
                  <li
                    key={item}
                    className="text-[1.02rem] text-cream-100 transition-transform duration-500 ease-[var(--ease-apple)] hover:translate-x-1 hover:text-cream-50"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
