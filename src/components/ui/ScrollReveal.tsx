"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function ScrollReveal({
  children,
  delay = 0,
  className = "",
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [reduced, setReduced] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );
  const [visible, setVisible] = useState(reduced);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReduced(mq.matches);
      if (mq.matches) setVisible(true);
    };
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  useEffect(() => {
    if (reduced || visible) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let timer = 0;
    const cleanup = () => {
      if (raf) cancelAnimationFrame(raf);
      if (timer) window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    const reveal = () => {
      cleanup();
      // Honour the stagger delay while still detaching listeners immediately.
      timer = window.setTimeout(() => setVisible(true), delay);
    };
    const check = () => {
      raf = 0;
      // Reveal as soon as the element's top crosses into the lower 90% of the
      // viewport. Because top < 0 also satisfies this, it covers elements that
      // were scrolled past and — critically — anchor jumps / fast scrolls that
      // skip the intersection band entirely, so content can never get stuck
      // invisible. The CSS transition on `.is-visible` still animates the entry.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) reveal();
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };

    raf = requestAnimationFrame(check);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return cleanup;
  }, [reduced, visible, delay]);

  const Component = As as React.ElementType;
  return (
    <Component
      ref={ref as never}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
