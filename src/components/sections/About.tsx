"use client";

import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "@/components/layout/Header";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <SectionHeader label={t.about.label} title={t.about.title} id="about" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <ScrollReveal className="lg:col-span-7" delay={80}>
            <div className="space-y-5 text-ink-200 text-base sm:text-lg leading-relaxed">
              {t.about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-5" delay={180}>
            <aside className="terminal-panel p-5 sm:p-6 mono text-xs sm:text-sm">
              <div className="text-ink-400 mb-3">
                <span className="text-phosphor-400">cat</span>{" "}
                <span className="text-ink-200">bio.executive</span>{" "}
                <span className="text-ink-500">| head -n 4</span>
              </div>
              <ul className="space-y-2">
                <Fact k="●" v="Software Engineer Intern" accent />
                <Fact k="●" v="FIAP — Computer Engineering" accent />
                <Fact k="●" v="Senai — IT Technician" />
                <Fact k="●" v="SumUp — Adquirência (Go/Java)" accent />
                <Fact k="●" v="GOL Linhas Aéreas — IT/Finance" />
                <Fact k="●" v="3× winner · innovation marathons" accent />
                <Fact k="●" v="Focus: distributed, AI, robotics" />
                <Fact k="●" v="São Paulo · BR" />
              </ul>
              <div className="mt-5 pt-4 border-t border-ink-700/60 text-ink-500 text-[0.7rem]">
                {"// systems · hardware · intelligence"}
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Fact({ k, v, accent }: { k: string; v: string; accent?: boolean }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className={accent ? "text-phosphor-400" : "text-amber-400"}>{k}</span>
      <span className={accent ? "text-ink-50" : "text-ink-200"}>{v}</span>
    </li>
  );
}
