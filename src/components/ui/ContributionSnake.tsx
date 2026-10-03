"use client";

import { useEffect, useRef } from "react";

const USERNAME = "pcnasc";
const BASE_URL = "https://github-contributions.now.sh/svg";

type ThemeMode = "light" | "dark";

interface Props {
  /** CSS class overrides */
  className?: string;
  /** Animation speed — lower is faster (0.5–3.0) */
  speed?: number;
  /** How many rows of heatmap to show */
  rows?: number;
  theme?: ThemeMode;
}

export function ContributionSnake({
  className = "",
  speed = 1.0,
  rows = 7,
  theme = "dark",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mode = theme === "dark" ? "-dark" : "";
    const url = `${BASE_URL}/${USERNAME}${mode}?padding=8&radius=6&rows=${rows}&gap=${24 * (1 / speed)}&column_width=10&column_height=10`;

    const img = document.createElement("img");
    img.src = url;
    img.alt = `${USERNAME} GitHub contribution activity`;
    img.className = [
      "w-full h-auto opacity-0 transition-opacity duration-700",
      className,
    ].join(" ");
    img.addEventListener("load", () => img.classList.add("opacity-100"));
    img.onerror = () => {
      // Fallback: static heatmap without snake
      const fallbackUrl = `${BASE_URL}/${USERNAME}${mode}?padding=8&radius=6&rows=${rows}`;
      img.src = fallbackUrl;
    };

    el.innerHTML = "";
    el.appendChild(img);
  }, [USERNAME, theme, rows, speed, className]);

  return <div ref={ref} aria-label="GitHub contributions" />;
}
