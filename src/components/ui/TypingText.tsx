"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  lines: string[];
  /** Delay before starting (ms) */
  startDelay?: number;
  /** Per-character typing speed (ms) */
  speed?: number;
  /** Delay between lines (ms) */
  lineDelay?: number;
  className?: string;
  /** If true, skip animation (reduced motion) */
  skip?: boolean;
};

export function TypingText({
  lines,
  startDelay = 200,
  speed = 28,
  lineDelay = 450,
  className = "",
  skip = false,
}: Props) {
  const [currentLine, setCurrentLine] = useState(() => (skip ? lines.length : 0));
  const [currentChar, setCurrentChar] = useState(0);
  const [started, setStarted] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastTickRef = useRef<number>(0);

  // Derive displayed lines from current animation position
  const displayed = useMemo(() => {
    if (skip || currentLine >= lines.length) return [...lines];
    const result: string[] = [];
    for (let i = 0; i < lines.length; i++) {
      if (i < currentLine) result.push(lines[i]);
      else if (i === currentLine) result.push(lines[i].slice(0, currentChar));
      else result.push("");
    }
    return result;
  }, [lines, currentLine, currentChar, skip]);

  // Sync when skip changes
  const prevSkipRef = useRef(skip);
  useEffect(() => {
    if (skip && !prevSkipRef.current) {
      setCurrentLine(lines.length);
    }
    prevSkipRef.current = skip;
  }, [skip, lines.length]);

  useEffect(() => {
    if (skip) return;
    const t = window.setTimeout(() => setStarted(true), startDelay);
    return () => window.clearTimeout(t);
  }, [skip, startDelay]);

  useEffect(() => {
    if (!started || skip) return;
    let cancelled = false;

    const tick = (now: number) => {
      if (cancelled) return;
      if (!lastTickRef.current) lastTickRef.current = now;
      const elapsed = now - lastTickRef.current;

      if (currentLine >= lines.length) return;
      const target = lines[currentLine] ?? "";

      if (currentChar <= target.length) {
        if (elapsed >= speed) {
          lastTickRef.current = now;
          if (currentChar === target.length) {
            // move to next line after delay
            window.setTimeout(() => {
              if (cancelled) return;
              setCurrentLine((l) => l + 1);
              setCurrentChar(0);
            }, lineDelay);
            return;
          }
          setCurrentChar((c) => c + 1);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTickRef.current = 0;
    };
  }, [started, currentLine, currentChar, lines, speed, lineDelay, skip]);

  const finished = currentLine >= lines.length;

  return (
    <div className={className}>
      {lines.map((_, i) => {
        const isCurrent = i === currentLine && !finished;
        const text = displayed[i] ?? "";
        return (
          <div key={i} className="min-h-[1.5em]">
            <span>{text}</span>
            {isCurrent && <span className="prompt-caret" aria-hidden />}
          </div>
        );
      })}
    </div>
  );
}
