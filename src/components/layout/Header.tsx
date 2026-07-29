"use client";

import { useI18n } from "@/lib/i18n";
import { useEffect, useState } from "react";

const ANCHORS = [
  { key: "about" as const, id: "about" },
  { key: "experience" as const, id: "experience" },
  { key: "projects" as const, id: "projects" },
  { key: "repos" as const, id: "repos" },
  { key: "skills" as const, id: "skills" },
];

export function Header() {
  const { locale, setLocale, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    ANCHORS.forEach((a) => {
      const el = document.getElementById(a.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-ink-950/70 border-b border-ink-700/50"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-phosphor-400 animate-pulseDot shadow-[0_0_10px_var(--color-phosphor-400)]" />
          <span className="mono text-[0.78rem] text-ink-200 group-hover:text-phosphor-300 transition-colors">
            <span className="text-phosphor-400">~</span>
            <span className="text-ink-400">/</span>
            <span>pedro</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {ANCHORS.map((a) => {
            const isActive = activeId === a.id;
            return (
              <a
                key={a.id}
                href={`#${a.id}`}
                className={[
                  "mono text-[0.78rem] px-3 py-1.5 rounded-full transition-all",
                  isActive
                    ? "text-phosphor-300 bg-phosphor-400/10"
                    : "text-ink-300 hover:text-ink-50 hover:bg-ink-800/50",
                ].join(" ")}
              >
                <span className="text-ink-500 mr-1">{ANCHORS.indexOf(a) + 1}.</span>
                {t.nav[a.key]}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div
            role="group"
            aria-label="Language"
            className="mono text-[0.72rem] flex items-center rounded-full border border-ink-600/70 bg-ink-900/70 p-0.5"
          >
            {(["pt", "en"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLocale(l)}
                className={[
                  "px-2.5 py-1 rounded-full transition-all uppercase tracking-wider",
                  locale === l
                    ? "bg-phosphor-400 text-ink-950 font-medium"
                    : "text-ink-300 hover:text-ink-50",
                ].join(" ")}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-ink-700/50 mt-16 sm:mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="mono text-xs text-ink-400">
          <span className="text-phosphor-400">❯</span> {t.footer.built}
        </div>
        <div className="mono text-xs text-ink-400">
          {t.footer.copyright.replace("{year}", String(year))}
        </div>
      </div>
    </footer>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label flex items-center gap-2 mb-4">
      <span className="w-6 h-px bg-ink-500" />
      <span>{children}</span>
    </div>
  );
}

export function SectionHeader({
  label,
  title,
  id,
}: {
  label: string;
  title: string;
  id: string;
}) {
  return (
    <div className="mb-10" id={id}>
      <SectionLabel>{label}</SectionLabel>
      <h2 className="display text-3xl sm:text-4xl md:text-5xl text-ink-50 tracking-tight">
        {title}
      </h2>
    </div>
  );
}
