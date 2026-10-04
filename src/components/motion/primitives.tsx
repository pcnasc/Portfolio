"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef, type ReactNode } from "react";

/** Apple-like ease-out (fast start, long silky settle). */
export const EASE = [0.22, 1, 0.36, 1] as const;

/* -------------------------------------------------------------------------- */
/* Reveal — fade + rise when scrolled into view                                */
/* -------------------------------------------------------------------------- */

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  duration = 1.1,
  onMount = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  /** Animate on mount instead of on scroll-into-view. */
  onMount?: boolean;
}) {
  const target = { opacity: 1, y: 0 };
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      {...(onMount
        ? { animate: target }
        : { whileInView: target, viewport: { once: true, margin: "0px 0px -12% 0px" } })}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* MaskLines — each line rises from behind an invisible mask                   */
/* -------------------------------------------------------------------------- */

export function MaskLines({
  lines,
  className,
  lineClassName = "",
  delay = 0,
  stagger = 0.12,
  duration = 1.25,
  onMount = false,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  onMount?: boolean;
}) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        // Padding (offset by a negative margin) keeps descenders & italic overhangs unclipped.
        <span key={i} className="block overflow-hidden pb-[0.14em] -mb-[0.14em] pr-[0.08em] -mr-[0.08em]">
          <motion.span
            className={`block will-change-transform ${lineClassName}`}
            initial={{ y: "110%" }}
            {...(onMount
              ? { animate: { y: "0%" } }
              : { whileInView: { y: "0%" }, viewport: { once: true, margin: "0px 0px -10% 0px" } })}
            transition={{ duration, ease: EASE, delay: delay + i * stagger }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* ScrollText — words brighten one by one as the paragraph scrolls past        */
/* -------------------------------------------------------------------------- */

export function ScrollText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });

  if (reduce) return <p className={className}>{text}</p>;

  const words = text.split(" ");
  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => {
        const start = i / words.length;
        return (
          <Word key={`${i}-${w}`} progress={scrollYProgress} range={[start, start + 1 / words.length]}>
            {w}
          </Word>
        );
      })}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span aria-hidden style={{ opacity }}>
      {children}{" "}
    </motion.span>
  );
}
