"use client";

import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "@/components/layout/Header";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectMockup } from "@/components/ui/ProjectMockup";

type Variant = "twin" | "robot" | "visai";

export function Projects({ projectImages }: { projectImages: Record<string, boolean> }) {
  const { t } = useI18n();
  const variants: Variant[] = ["twin", "robot", "visai"];

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <SectionHeader label={t.projects.label} title={t.projects.title} id="projects" />
          <p className="text-ink-300 max-w-2xl -mt-6 mb-12 text-sm sm:text-base">
            {t.projects.intro}
          </p>
        </ScrollReveal>

        <div className="space-y-24">
          {t.projects.items.map((p, i) => {
            const v = variants[i];
            const featured = i === 0;
            const reverse = i % 2 === 1;

            return (
              <ScrollReveal key={p.id} delay={80}>
                <article
                  className={[
                    "grid lg:grid-cols-12 gap-8 lg:gap-12 items-center",
                    featured ? "" : "",
                  ].join(" ")}
                >
                  {/* Visual */}
                  <div
                    className={[
                      featured ? "lg:col-span-7" : "lg:col-span-6",
                      reverse ? "lg:order-2" : "",
                    ].join(" ")}
                  >
                    <ProjectMockup id={p.id} variant={v} hasImage={!!projectImages[p.id]} />
                  </div>

                  {/* Copy */}
                  <div
                    className={[
                      featured ? "lg:col-span-5" : "lg:col-span-6",
                      reverse ? "lg:order-1" : "",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="mono text-xs text-ink-500">#{p.number}</span>
                      <span className="h-px flex-1 bg-ink-700/60" />
                    </div>

                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[0.68rem] mono bg-amber-400/10 text-amber-300 border border-amber-400/25 mb-4">
                      {p.badge}
                    </div>

                    <h3
                      className={[
                        "display text-ink-50 leading-tight tracking-tight",
                        featured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl",
                      ].join(" ")}
                    >
                      {p.title}
                    </h3>

                    <p className="text-ink-200 mt-4 text-sm sm:text-base leading-relaxed">
                      {p.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {p.tags.map((tag) => (
                        <span key={tag} className="chip">{tag}</span>
                      ))}
                    </div>

                    {p.links.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-3">
                        {p.links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            className="link-underline mono text-xs text-phosphor-300 hover:text-phosphor-400"
                          >
                            → {l.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
