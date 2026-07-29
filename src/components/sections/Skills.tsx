"use client";

import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "@/components/layout/Header";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Skills() {
  const { t } = useI18n();
  return (
    <section id="skills" className="relative pt-24 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <SectionHeader label={t.skills.label} title={t.skills.title} id="skills" />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {t.skills.categories.map((cat, i) => (
            <ScrollReveal key={cat.name} delay={60 + i * 60}>
              <div className="skill-cell h-full">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="mono text-[0.72rem] uppercase tracking-wider text-ink-300">
                    {cat.name}
                  </h3>
                  <span className="mono text-[0.65rem] text-ink-500">
                    {String(cat.items.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-phosphor-400/40 via-ink-600/40 to-transparent mb-3" />
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="mono text-xs text-ink-200 flex items-center gap-2 group/item"
                    >
                      <span className="w-1 h-1 rounded-full bg-ink-500 group-hover/item:bg-phosphor-400 transition-colors" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
