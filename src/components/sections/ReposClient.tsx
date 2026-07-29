"use client";

import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "@/components/layout/Header";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getLanguageColor, type GitHubPayload } from "@/lib/github";

export function ReposClient({ data }: { data: GitHubPayload }) {
  const { t } = useI18n();

  return (
    <section id="repos" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <SectionHeader label={t.repos.label} title={t.repos.title} id="repos" />
          <div className="flex items-center justify-between -mt-6 mb-10 gap-4 flex-wrap">
            <p className="text-ink-300 max-w-2xl text-sm sm:text-base">
              {t.repos.intro}
            </p>
            <div className="flex items-center gap-2 mono text-xs text-ink-400">
              <span
                className={[
                  "w-2 h-2 rounded-full",
                  data.source === "api" ? "bg-phosphor-400 shadow-[0_0_8px_var(--color-phosphor-400)]" : "bg-amber-400",
                ].join(" ")}
              />
              {data.source === "api" ? "api.github.com · live" : "offline snapshot"}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.repos.map((r, i) => (
            <ScrollReveal key={r.name} delay={60 + i * 60}>
              <a
                href={r.html_url}
                target="_blank"
                rel="noreferrer"
                className="repo-card block h-full"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ink-300 shrink-0">
                      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
                    </svg>
                    <h3 className="mono text-sm text-phosphor-300 link-underline truncate">
                      {r.name}
                    </h3>
                  </div>
                </div>

                <p className="text-ink-300 text-sm leading-relaxed line-clamp-3 min-h-[3.5em]">
                  {r.description || <span className="text-ink-500 italic">— no description —</span>}
                </p>

                <div className="mt-5 flex items-center justify-between mono text-[0.7rem]">
                  <div className="flex items-center gap-3 text-ink-300">
                    {r.language && (
                      <span className="flex items-center gap-1.5">
                        <span
                          className="lang-dot"
                          style={{ background: getLanguageColor(r.language) }}
                        />
                        <span>{r.language}</span>
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-ink-400">
                    <span title={t.repos.stars} className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
                      </svg>
                      {r.stargazers_count}
                    </span>
                    <span title={t.repos.forks} className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <circle cx="6" cy="6" r="2.5" />
                        <circle cx="18" cy="18" r="2.5" />
                        <circle cx="6" cy="18" r="2.5" />
                        <path d="M6 8.5v5a3.5 3.5 0 0 0 3.5 3.5h5M15.5 6h-6A3.5 3.5 0 0 0 6 9.5" />
                      </svg>
                      {r.forks_count}
                    </span>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-10 flex justify-center">
            <a
              href="https://github.com/pcnasc"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              {t.repos.viewOnGithub} →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
