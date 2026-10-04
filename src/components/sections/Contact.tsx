"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { MaskLines, Reveal } from "@/components/motion/primitives";
import { ArrowUpRight } from "@/components/ui/links";

const EMAIL = "pedroeng.nascimento@gmail.com";

export function Contact() {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="section relative overflow-hidden border-t border-cream-100/[0.06]">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[30%] left-1/2 h-[80vh] w-[90vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(184_151_90/0.12),transparent)] blur-2xl"
      />

      <div className="container-x relative">
        <Reveal className="mb-10 flex items-center gap-4">
          <span className="h-px w-10 bg-brass-500/60" />
          <span className="eyebrow">{t.contact.label}</span>
        </Reveal>

        <h2 className="display text-[clamp(3.2rem,10vw,10.5rem)] leading-[0.92]">
          <MaskLines
            stagger={0.14}
            lines={[t.contact.titleLine1, <em key="em" className="italic text-brass-200">{t.contact.titleEmphasis}</em>]}
          />
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-5">
            <p className="text-[1.08rem] leading-[1.75] text-cream-300">{t.contact.body}</p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7 lg:justify-self-end">
            <div className="flex flex-wrap items-center gap-4">
              <a
                id="contact-email"
                href={`mailto:${EMAIL}`}
                className="link-underline font-serif text-[clamp(1.5rem,3vw,2.6rem)] leading-tight text-cream-50"
              >
                {EMAIL}
              </a>
              <button
                id="contact-copy"
                type="button"
                onClick={copy}
                className="rounded-full border border-cream-100/15 px-4 py-1.5 text-[0.75rem] tracking-[0.06em] text-cream-300 transition-colors duration-300 hover:border-brass-400/60 hover:text-cream-50"
                aria-live="polite"
              >
                {copied ? `✓ ${t.contact.copied}` : t.contact.copy}
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 text-[0.92rem]">
              <a
                id="contact-linkedin"
                href="https://linkedin.com/in/pedrocnasc"
                target="_blank"
                rel="noreferrer"
                className="link-draw inline-flex items-center gap-1.5 text-cream-200 hover:text-cream-50"
              >
                LinkedIn <ArrowUpRight />
              </a>
              <a
                id="contact-github"
                href="https://github.com/pcnasc"
                target="_blank"
                rel="noreferrer"
                className="link-draw inline-flex items-center gap-1.5 text-cream-200 hover:text-cream-50"
              >
                GitHub <ArrowUpRight />
              </a>
              <span className="text-cream-500" title={t.contact.cv}>
                {t.contact.cv}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
