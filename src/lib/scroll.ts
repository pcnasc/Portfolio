"use client";

import type Lenis from "lenis";
import { useSyncExternalStore } from "react";

/* ---------- Lenis singleton (so menus can pause / resume scrolling) ---------- */

let instance: Lenis | null = null;

export function setLenis(l: Lenis | null) {
  instance = l;
}

export function getLenis() {
  return instance;
}

/** Smoothly scroll to an anchor, falling back to native scrolling. */
export function scrollToHash(hash: string) {
  const el = hash === "#top" ? document.body : document.querySelector(hash);
  if (!el) return;
  if (instance) instance.scrollTo(hash === "#top" ? 0 : (el as HTMLElement), { offset: hash === "#top" ? 0 : -72 });
  else if (hash === "#top") window.scrollTo({ top: 0, behavior: "smooth" });
  else el.scrollIntoView({ behavior: "smooth" });
}

/* ---------- Media query hook (SSR-safe) ---------- */

export function useMediaQuery(query: string, serverValue = false) {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia(query).matches,
    () => serverValue
  );
}
