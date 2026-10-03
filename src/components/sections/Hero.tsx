"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { TypingText } from "@/components/ui/TypingText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useEffect, useState } from "react";

export function Hero() {
  const { t } = useI18n();
  const [reduced, setReduced] = useState<boolean>(() =>
    typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  const typingLines = [
    `$ ${t.hero.lines.whoami}`,
    t.hero.lines.name,
    t.hero.lines.title,
    "",
    t.hero.lines.pitch,
  ];

  return (
    <section id="top" className="relative pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Terminal block */}
          <div className="lg:col-span-8">
            <div className="terminal-panel overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-ink-700/60 bg-ink-900/60">
                <span className="w-3 h-3 rounded-full bg-danger/80" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                <span className="w-3 h-3 rounded-full bg-phosphor-400/80" />
                <span className="mono text-[0.7rem] text-ink-400 ml-3 flex-1 text-center">
                  {t.hero.promptUser}:{t.hero.promptPath}$ — zsh — 100×24
                </span>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-7 mono text-[0.85rem] sm:text-[0.95rem] leading-relaxed">
                <div className="text-ink-400">
                  <span className="text-phosphor-400">{t.hero.promptUser}</span>
                  <span className="text-ink-500">@</span>
                  <span className="text-teal-300">portfolio</span>
                  <span className="text-ink-500">:</span>
                  <span className="text-amber-300">{t.hero.promptPath}</span>
                  <span className="text-ink-500">$ </span>
                  <span className="text-ink-100">{t.hero.lines.whoami}</span>
                </div>

                <div className="mt-5 text-ink-100">
                  <TypingText
                    lines={typingLines.slice(1)}
                    skip={reduced}
                    speed={10}
                    lineDelay={160}
                    startDelay={140}
                  />
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a href="#projects" className="btn btn-primary">
                    <span aria-hidden>↴</span>
                    {t.hero.ctaProjects}
                  </a>
                  <a
                    href="https://github.com/pcnasc"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.3-5.24-1.28-5.24-5.7 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.5.1-3.12 0 0 .97-.3 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.48 3.17-1.18 3.17-1.18.63 1.62.23 2.82.11 3.12.75.8 1.2 1.82 1.2 3.08 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                    </svg>
                    {t.hero.ctaGithub}
                  </a>
                  <a
                    href="https://linkedin.com/in/pedrocnasc"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.26-.02-2.9-1.77-2.9-1.78 0-2.05 1.38-2.05 2.82V21h-4V9Z" />
                    </svg>
                    {t.hero.ctaLinkedin}
                  </a>
                  <a
                    href="mailto:pedroeng.nascimento@gmail.com"
                    className="btn btn-ghost"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                    {t.hero.ctaEmail}
                  </a>
                  <button
                    type="button"
                    disabled
                    className="btn btn-ghost"
                    aria-disabled="true"
                    title={t.hero.cvDisabled}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                    </svg>
                    {t.hero.cvDisabled}
                  </button>
                </div>

                {/* Stack chips */}
                <div className="mt-8 pt-6 border-t border-ink-700/40">
                  <div className="flex flex-wrap gap-1.5">
                    {["Go", "Elixir", "Kafka", "J1939 CAN", "ChromaDB", "Postgres"].map((s) => (
                      <span key={s} className="chip">
                        <span className="w-1 h-1 rounded-full bg-phosphor-400" />
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Meta column */}
          <ScrollReveal className="lg:col-span-4 lg:sticky lg:top-24" delay={150}>
            <div className="terminal-panel overflow-hidden">
              {/* Status row */}
              <div className="flex items-center justify-between px-5 pt-4 pb-3">
                <div className="flex items-center gap-2">
                  <span className="dot-status" />
                  <span className="mono text-xs text-ink-200">
                    <span className="text-ink-400">{t.hero.statusLabel}:</span>{" "}
                    <span className="text-phosphor-300">{t.hero.statusValue}</span>
                  </span>
                </div>
                <span className="mono text-[0.65rem] text-ink-500">#a7f070</span>
              </div>

              {/* Portrait feed — terminal-style frame */}
              <div className="px-5 pb-5">
                <div className="border border-ink-700/60 rounded-md overflow-hidden bg-ink-950">
                  {/* Mini title bar */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-ink-700/40 bg-ink-900/60">
                    <span className="w-2 h-2 rounded-full bg-danger/70" />
                    <span className="w-2 h-2 rounded-full bg-amber-400/70" />
                    <span className="w-2 h-2 rounded-full bg-phosphor-400/70" />
                    <span className="mono text-[0.6rem] text-ink-500 ml-2 flex-1 truncate">
                      portrait.feed · <span className="text-ink-400">~/pedro.png</span>
                    </span>
                    <span className="mono text-[0.55rem] text-phosphor-400/80 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-phosphor-400 animate-pulseDot" />
                      online
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative portrait-feed">
                    <div className="corner-brackets" />
                    <div className="portrait-scanlines" />
                    <div className="aspect-[3/4] relative">
                      <Image
                        src="/pedro.png"
                        alt="Pedro Nascimento"
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover object-top portrait-img"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
