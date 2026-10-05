"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useMemo, useRef } from "react";
import type { Contributions } from "@/lib/github";

/** Level 0–4, from empty charcoal to bright brass. */
const LEVEL_COLORS = ["#1f1d19", "#3a3123", "#62502f", "#977841", "#d8bf8a"];
const SNAKE_RGB = "237, 230, 214";
const SNAKE_LENGTH = 6;
const STEP_MS = 42;
const GAP_RATIO = 0.28;

type Cell = [col: number, row: number];

/**
 * Greedy route: from the current head, go to the nearest uneaten contribution
 * (Manhattan distance), walking horizontally then vertically. Anything stepped
 * over on the way counts as eaten, so the snake never doubles back for it.
 */
function buildPath(levels: number[], weeks: number): Cell[] {
  const remaining = new Set<number>();
  levels.forEach((lv, i) => lv > 0 && remaining.add(i));

  const path: Cell[] = [];
  let c = -SNAKE_LENGTH;
  let r = 0;
  for (; c < 0; c++) path.push([c, r]); // slither in from the left

  const visit = () => {
    path.push([c, r]);
    if (c >= 0 && c < weeks) remaining.delete(c * 7 + r);
  };
  visit();

  while (remaining.size) {
    let best = -1;
    let bestDist = Infinity;
    for (const idx of remaining) {
      const d = Math.abs(Math.floor(idx / 7) - c) + Math.abs((idx % 7) - r);
      if (d < bestDist) {
        bestDist = d;
        best = idx;
      }
    }
    const tc = Math.floor(best / 7);
    const tr = best % 7;
    while (c !== tc) {
      c += Math.sign(tc - c);
      visit();
    }
    while (r !== tr) {
      r += Math.sign(tr - r);
      visit();
    }
  }

  while (c < weeks + SNAKE_LENGTH) {
    c++;
    path.push([c, r]); // and out to the right
  }
  return path;
}

export function ContributionGraph({ data }: { data: Contributions }) {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { levels, weeks } = data;

  const path = useMemo(() => buildPath(levels, weeks), [levels, weeks]);

  const months = useMemo(() => {
    const fmt = new Intl.DateTimeFormat("en-US", { month: "short", timeZone: "UTC" });
    const start = new Date(`${data.start}T00:00:00Z`);
    const out: Array<{ col: number; label: string }> = [];
    let prev = -1;
    for (let col = 0; col < weeks; col++) {
      const d = new Date(start);
      d.setUTCDate(start.getUTCDate() + col * 7);
      const m = d.getUTCMonth();
      if (m !== prev) {
        if (col > 0 && col < weeks - 2) out.push({ col, label: fmt.format(d).replace(".", "") });
        prev = m;
      }
    }
    return out;
  }, [data.start, weeks]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!wrap || !canvas || !ctx) return;

    const eaten = new Uint8Array(levels.length);
    let cell = 0;
    let gap = 0;
    let step = 0;
    let last = 0;
    let pauseUntil = 0;
    let visible = false;
    let raf = 0;

    const square = (x: number, y: number, s: number, fill: string) => {
      ctx.fillStyle = fill;
      ctx.beginPath();
      ctx.roundRect(x, y, s, s, s * 0.26);
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < levels.length; i++) {
        const lv = levels[i];
        if (lv < 0) continue;
        const x = Math.floor(i / 7) * (cell + gap);
        const y = (i % 7) * (cell + gap);
        square(x, y, cell, LEVEL_COLORS[eaten[i] ? 0 : lv]);
      }
      if (reduce) return;
      for (let k = SNAKE_LENGTH - 1; k >= 0; k--) {
        const p = path[step - k];
        if (!p || p[0] < 0 || p[0] >= weeks) continue;
        const s = cell * (1 - k * 0.07);
        const o = (cell - s) / 2;
        square(p[0] * (cell + gap) + o, p[1] * (cell + gap) + o, s, `rgba(${SNAKE_RGB}, ${1 - (k / SNAKE_LENGTH) * 0.8})`);
      }
    };

    const resize = () => {
      const w = wrap.clientWidth;
      cell = w / (weeks + (weeks - 1) * GAP_RATIO);
      gap = cell * GAP_RATIO;
      const h = 7 * cell + 6 * gap;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    const tick = (t: number) => {
      raf = requestAnimationFrame(tick);
      if (!visible || t < pauseUntil || t - last < STEP_MS) return;
      last = t;
      step++;
      if (step >= path.length) {
        // Board cleared — breathe, then restore every square and go again.
        step = 0;
        eaten.fill(0);
        pauseUntil = t + 1600;
      } else {
        const [c, r] = path[step];
        if (c >= 0 && c < weeks && levels[c * 7 + r] > 0) eaten[c * 7 + r] = 1;
      }
      draw();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0.2 });
    io.observe(wrap);
    resize();
    if (!reduce) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [levels, weeks, path, reduce]);

  return (
    <div>
      <div className="relative mb-3 h-4 text-[0.68rem] uppercase tracking-[0.16em] text-cream-500" aria-hidden>
        {months.map((m) => (
          <span key={m.col} className="absolute" style={{ left: `${(m.col / weeks) * 100}%` }}>
            {m.label}
          </span>
        ))}
      </div>
      <div ref={wrapRef} className="w-full">
        <canvas ref={canvasRef} className="block w-full" role="img" aria-label={`${data.total} GitHub contributions in the last year`} />
      </div>
      <div className="mt-4 flex items-center justify-end gap-1.5 text-[0.68rem] text-cream-500" aria-hidden>
        <span className="mr-1">Less</span>
        {LEVEL_COLORS.map((c) => (
          <span key={c} className="h-2.5 w-2.5 rounded-[3px]" style={{ background: c }} />
        ))}
        <span className="ml-1">More</span>
      </div>
    </div>
  );
}
