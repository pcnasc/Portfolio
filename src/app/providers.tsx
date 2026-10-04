"use client";

import Lenis from "lenis";
import { MotionConfig } from "motion/react";
import { useEffect, type ReactNode } from "react";
import { I18nProvider } from "@/lib/i18n";
import { setLenis } from "@/lib/scroll";

function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ autoRaf: true, lerp: 0.09, wheelMultiplier: 1 });
    setLenis(lenis);
    return () => {
      setLenis(null);
      lenis.destroy();
    };
  }, []);
  return null;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <I18nProvider initial="pt">
      <MotionConfig reducedMotion="user">
        <SmoothScroll />
        {children}
      </MotionConfig>
    </I18nProvider>
  );
}
