"use client";

import t from "@/messages";

/** Slow, endless serif ribbon of the stack — edges fade, pauses on hover. */
export function Marquee() {
  const items = t.marquee;

  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-8 font-serif text-[clamp(2.4rem,5.5vw,5rem)] italic leading-none text-cream-100/[0.22] transition-colors duration-500 hover:text-cream-50 md:px-12">
            {item}
          </span>
          <span className="h-1.5 w-1.5 rotate-45 bg-brass-500/50" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="mask-fade-x relative overflow-hidden border-y border-cream-100/[0.06] py-10 md:py-14">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
