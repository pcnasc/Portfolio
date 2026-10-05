"use client";

import type { Contributions, Repo } from "@/lib/github";
import { GITHUB_USER } from "@/lib/github";
import t from "@/messages";
import { MaskLines, Reveal } from "@/components/motion/primitives";
import { ArrowUpRight } from "@/components/ui/links";
import { ContributionGraph } from "@/components/ui/ContributionGraph";

export function OpenSource({ repos, contributions }: { repos: Repo[]; contributions: Contributions | null }) {

  return (
    <section id="open-source" className="section border-t border-cream-100/[0.06]">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-brass-500/60" />
              <span className="eyebrow">{t.openSource.label}</span>
            </Reveal>
            <h2 className="display text-[clamp(2.6rem,5.2vw,5rem)] leading-[1.02]">
              <MaskLines lines={[t.openSource.title]} />
            </h2>
          </div>
          <Reveal delay={0.15} className="space-y-6 lg:col-span-4">
            <p className="text-[1rem] leading-[1.75] text-cream-400">{t.openSource.intro}</p>
            <a
              id="github-profile"
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noreferrer"
              className="link-underline inline-flex items-center gap-1.5 text-[0.92rem] text-cream-100 hover:text-cream-50"
            >
              {t.openSource.profile}
              <ArrowUpRight />
            </a>
          </Reveal>
        </div>

        <ul className="mt-16 border-t border-cream-100/[0.08]">
          {repos.map((r, i) => (
            <li key={r.name}>
              <Reveal delay={i * 0.05} y={16}>
                <a
                  href={r.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 gap-y-2 border-b border-cream-100/[0.08] py-7 transition-colors duration-500 hover:bg-cream-100/[0.02] md:grid-cols-[3.5rem_minmax(0,1.1fr)_minmax(0,1.4fr)_9rem_1.5rem] md:gap-x-6"
                >
                  <span className="font-serif text-[0.95rem] italic text-cream-500">{String(i + 1).padStart(2, "0")}</span>
                  <span className="truncate font-serif text-[1.65rem] leading-tight text-cream-50 transition-transform duration-700 ease-[var(--ease-apple)] group-hover:translate-x-1.5 md:text-[1.9rem]">
                    {r.name}
                  </span>
                  <span className="col-start-2 col-end-4 text-[0.9rem] leading-relaxed text-cream-400 md:col-start-auto md:col-end-auto md:line-clamp-2">
                    {r.description ?? t.openSource.noDescription}
                  </span>
                  <span className="col-start-2 flex items-center gap-4 text-[0.78rem] text-cream-500 md:col-start-auto md:justify-end">
                    {r.language && (
                      <span className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brass-400" />
                        {r.language}
                      </span>
                    )}
                    {r.stargazers_count > 0 && <span>★ {r.stargazers_count}</span>}
                  </span>
                  <span className="row-start-1 col-start-3 justify-self-end text-cream-500 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brass-300 md:col-start-auto md:row-start-auto">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        {contributions && (
          <Reveal className="mt-20">
            <div className="rounded-[28px] border border-cream-100/[0.07] bg-coal-850 p-6 sm:p-10">
              <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                <p className="display text-[clamp(1.6rem,2.6vw,2.3rem)] leading-tight">
                  {t.openSource.contributions.replace("{count}", String(contributions.total))}
                </p>
                <p className="font-serif text-[1.05rem] italic text-cream-400">{t.openSource.snakeCaption}</p>
              </div>
              <div className="overflow-x-auto">
                <div className="min-w-[640px]">
                  <ContributionGraph data={contributions} />
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
