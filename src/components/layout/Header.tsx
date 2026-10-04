"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { useI18n, type Locale } from "@/lib/i18n";
import { getLenis } from "@/lib/scroll";
import { AnchorLink } from "@/components/ui/links";
import { EASE } from "@/components/motion/primitives";

const LINKS = [
  { key: "about", id: "about" },
  { key: "work", id: "work" },
  { key: "experience", id: "experience" },
  { key: "capabilities", id: "capabilities" },
  { key: "contact", id: "contact" },
] as const;

function LocaleToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useI18n();
  return (
    <div role="group" aria-label="Language" className={`flex items-center gap-1.5 text-[0.72rem] tracking-[0.18em] ${className}`}>
      {(["pt", "en"] as Locale[]).map((l, i) => (
        <span key={l} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-cream-500">/</span>}
          <button
            id={`locale-${l}`}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={locale === l}
            className={`uppercase transition-colors duration-300 ${
              locale === l ? "text-cream-50" : "text-cream-500 hover:text-cream-200"
            }`}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}

export function Header() {
  const { t } = useI18n();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  // Highlight the section currently crossing the middle of the viewport.
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["top", ...LINKS.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Lock scroll while the mobile menu is open.
  useEffect(() => {
    const lenis = getLenis();
    if (open) {
      lenis?.stop();
      document.documentElement.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.documentElement.style.overflow = "";
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled && !open
            ? "border-b border-cream-100/[0.07] bg-coal-900/70 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent"
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between">
          <AnchorLink
            href="#top"
            id="nav-home"
            onNavigate={() => setOpen(false)}
            className="group flex items-baseline gap-3"
            aria-label="Pedro Nascimento — home"
          >
            <span className="font-serif text-[1.65rem] leading-none tracking-[-0.03em] text-cream-50">PN</span>
            <span
              className={`hidden text-[0.8rem] tracking-[0.02em] text-cream-300 transition-all duration-700 ease-[var(--ease-apple)] sm:inline ${
                scrolled ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
              }`}
            >
              Pedro Nascimento
            </span>
          </AnchorLink>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <AnchorLink
                key={l.id}
                id={`nav-${l.id}`}
                href={`#${l.id}`}
                className={`relative px-3.5 py-2 text-[0.84rem] tracking-[0.01em] transition-colors duration-300 ${
                  active === l.id ? "text-cream-50" : "text-cream-300 hover:text-cream-50"
                }`}
              >
                {t.nav[l.key]}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute bottom-0.5 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-brass-400"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </AnchorLink>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <LocaleToggle className="hidden md:flex" />
            <button
              id="menu-toggle"
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex items-center gap-3 text-[0.8rem] tracking-[0.04em] text-cream-100 md:hidden"
            >
              <span>{open ? t.nav.close : t.nav.menu}</span>
              <span className="relative block h-2.5 w-5">
                <span
                  className={`absolute left-0 h-px w-5 bg-current transition-all duration-500 ease-[var(--ease-apple)] ${
                    open ? "top-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-5 bg-current transition-all duration-500 ease-[var(--ease-apple)] ${
                    open ? "top-1/2 -rotate-45" : "top-full"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col bg-coal-950 px-6 pb-10 pt-28 md:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {LINKS.map((l, i) => (
                <div key={l.id} className="overflow-hidden border-b border-cream-100/[0.07]">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.06 }}
                  >
                    <AnchorLink
                      href={`#${l.id}`}
                      onNavigate={() => setOpen(false)}
                      className="flex items-baseline justify-between py-4"
                    >
                      <span className="font-serif text-[2.6rem] leading-none tracking-[-0.02em] text-cream-50">
                        {t.nav[l.key]}
                      </span>
                      <span className="text-[0.7rem] tracking-[0.2em] text-cream-500">0{i + 1}</span>
                    </AnchorLink>
                  </motion.div>
                </div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-auto flex items-center justify-between"
            >
              <LocaleToggle />
              <a href="mailto:pedroeng.nascimento@gmail.com" className="text-[0.85rem] text-cream-300">
                pedroeng.nascimento@gmail.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
