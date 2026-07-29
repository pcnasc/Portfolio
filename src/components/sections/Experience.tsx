"use client";

import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "@/components/layout/Header";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Experience() {
  const { t } = useI18n();
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <SectionHeader label={t.experience.label} title={t.experience.title} id="experience" />
        </ScrollReveal>

        <div className="timeline-rail space-y-12">
          {t.experience.items.map((item, i) => (
            <ScrollReveal key={item.company} delay={i * 120}>
              <article
                className={`timeline-node ${item.current ? "current" : ""}`}
              >
                <div className="terminal-panel p-5 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="display text-xl sm:text-2xl text-ink-50">
                          {item.company}
                        </h3>
                        {item.current && (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[0.65rem] mono bg-phosphor-400/10 text-phosphor-300 border border-phosphor-400/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-phosphor-400 animate-pulseDot" />
                            current
                          </span>
                        )}
                      </div>
                      <div className="mono text-xs sm:text-sm text-amber-300">{item.role}</div>
                    </div>
                    <div className="mono text-xs text-ink-400 whitespace-nowrap">
                      <span className="text-phosphor-400">⏱</span> {item.period}
                    </div>
                  </div>

                  <p className="text-ink-200 text-sm sm:text-base leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.scope.length > 0 && (
                    <>
                      <div className="hash-divider text-[0.65rem] mb-3">scope.tech</div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.scope.map((s) => (
                          <span key={s} className="chip">{s}</span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
