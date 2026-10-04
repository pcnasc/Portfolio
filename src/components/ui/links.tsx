"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { scrollToHash } from "@/lib/scroll";

/** In-page link that scrolls smoothly through Lenis but still works without JS. */
export function AnchorLink({
  href,
  onNavigate,
  onClick,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: `#${string}`; onNavigate?: () => void }) {
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    onNavigate?.();
    // Next frame, so a closing menu can release the scroll lock first.
    requestAnimationFrame(() => scrollToHash(href));
    history.replaceState(null, "", href === "#top" ? window.location.pathname : href);
  };
  return <a href={href} onClick={handle} {...rest} />;
}

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M3.5 8.5 8.5 3.5M4 3.5h4.5V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
