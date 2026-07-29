"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  id: string;
  variant: "twin" | "robot" | "visai";
  /** Resolved at build time (existsSync) so we never request a missing asset. */
  hasImage?: boolean;
};

/**
 * Project mockup — if a real PNG exists at /public/projects/{id}.png (resolved
 * server-side, passed via `hasImage`) it wins; otherwise we render a crafted
 * inline SVG placeholder themed per project. We never <Image> a missing file,
 * so there are no console 404s. Dropping a PNG + redeploy swaps it in (GUD-005).
 */
export function ProjectMockup({ id, variant, hasImage = false }: Props) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = hasImage && !imgFailed;

  return (
    <div className="mockup-frame aspect-[16/10] w-full relative overflow-hidden crt-lines">
      {showImage ? (
        <Image
          src={`/projects/${id}.png`}
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          onError={() => setImgFailed(true)}
          unoptimized
        />
      ) : (
        <Placeholder variant={variant} />
      )}
      {/* Always-visible overlay frame */}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
    </div>
  );
}

function Placeholder({ variant }: { variant: Props["variant"] }) {
  if (variant === "twin") return <TwinArt />;
  if (variant === "robot") return <RobotArt />;
  return <VisAIArt />;
}

/* ---------- Festo Digital Twin ---------- */
function TwinArt() {
  return (
    <svg viewBox="0 0 640 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="twin-bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#0b0e13" />
          <stop offset="1" stopColor="#0f131a" />
        </linearGradient>
        <linearGradient id="twin-glow" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#86f77a" stopOpacity="0.6" />
          <stop offset="1" stopColor="#86f77a" stopOpacity="0" />
        </linearGradient>
        <pattern id="twin-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#26303f" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="640" height="400" fill="url(#twin-bg)" />
      <rect width="640" height="400" fill="url(#twin-grid)" opacity="0.6" />

      {/* horizon line */}
      <line x1="0" y1="260" x2="640" y2="260" stroke="#354255" strokeDasharray="2 4" />

      {/* twin cylinders */}
      {[140, 260, 380, 500].map((cx, i) => (
        <g key={i}>
          <rect x={cx - 28} y={120 + i * 6} width="56" height="130" rx="6" fill="#141a23" stroke="#354255" />
          <rect x={cx - 22} y={128 + i * 6} width="44" height="10" rx="2" fill="#55d64a" opacity="0.7" />
          <circle cx={cx} cy={180 + i * 6} r="14" fill="none" stroke="#86f77a" strokeWidth="1.5" />
          <circle cx={cx} cy={180 + i * 6} r="6" fill="#86f77a" opacity="0.9">
            <animate attributeName="opacity" values="0.3;1;0.3" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
          <line x1={cx} y1={250 + i * 6} x2={cx} y2={260} stroke="#4e5e75" />
        </g>
      ))}

      {/* telemetry lines */}
      <g transform="translate(40, 300)">
        <polyline
          points="0,30 30,20 60,28 90,10 120,22 150,6 180,18 210,4 240,14 270,2 300,10"
          fill="none"
          stroke="#86f77a"
          strokeWidth="1.5"
        />
        <polyline
          points="0,40 30,35 60,40 90,30 120,38 150,28 180,36 210,26 240,34 270,22 300,30"
          fill="none"
          stroke="#ffae5c"
          strokeWidth="1.2"
          opacity="0.7"
        />
      </g>

      {/* panel labels */}
      <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#73849b">
        <text x="40" y="40">TWIN_01 // FESTO_PNEUMATIC</text>
        <text x="40" y="54">MODE: PREDICTIVE · 30s WINDOW</text>
        <text x="480" y="40" fill="#86f77a">▲ 98.4% uptime</text>
        <text x="40" y="380">RISK: 0.04</text>
        <text x="200" y="380">EFF: 0.91</text>
        <text x="360" y="380">WEAR: 0.12</text>
      </g>

      {/* glow at bottom */}
      <rect x="0" y="280" width="640" height="80" fill="url(#twin-glow)" opacity="0.3" />
    </svg>
  );
}

/* ---------- Robot Arm + Vision ---------- */
function RobotArt() {
  return (
    <svg viewBox="0 0 640 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="rob-bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#0f131a" />
          <stop offset="1" stopColor="#07090c" />
        </linearGradient>
        <radialGradient id="rob-spot" cx="0.7" cy="0.3" r="0.6">
          <stop offset="0" stopColor="#ffae5c" stopOpacity="0.35" />
          <stop offset="1" stopColor="#ffae5c" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="640" height="400" fill="url(#rob-bg)" />
      <rect width="640" height="400" fill="url(#rob-spot)" />

      {/* conveyor */}
      <g>
        <rect x="0" y="280" width="640" height="40" fill="#141a23" />
        <g stroke="#26303f" strokeWidth="1">
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={i} x1={i * 34} y1="280" x2={i * 34 + 10} y2="320" />
          ))}
        </g>
        <rect x="0" y="278" width="640" height="2" fill="#354255" />
      </g>

      {/* robot arm */}
      <g transform="translate(120,260)">
        <rect x="-20" y="0" width="40" height="20" fill="#1b2330" stroke="#4e5e75" />
        <g transform="rotate(-30)">
          <rect x="-6" y="-120" width="12" height="120" fill="#26303f" stroke="#4e5e75" />
          <circle cx="0" cy="0" r="10" fill="#141a23" stroke="#ffae5c" strokeWidth="2" />
          <g transform="translate(0,-120) rotate(60)">
            <rect x="-5" y="-90" width="10" height="90" fill="#26303f" stroke="#4e5e75" />
            <circle cx="0" cy="0" r="8" fill="#141a23" stroke="#ffae5c" strokeWidth="2" />
            <g transform="translate(0,-90)">
              <rect x="-14" y="-6" width="28" height="12" fill="#1b2330" stroke="#ffae5c" />
              <rect x="-18" y="-10" width="6" height="20" fill="#ffae5c" />
              <rect x="12" y="-10" width="6" height="20" fill="#ffae5c" />
            </g>
          </g>
        </g>
      </g>

      {/* detected objects with YOLO bounding boxes */}
      {[
        { x: 340, y: 240, label: "obj_A", conf: "0.94", cls: "metal" },
        { x: 430, y: 246, label: "obj_B", conf: "0.87", cls: "plastic" },
        { x: 520, y: 242, label: "obj_C", conf: "0.91", cls: "metal" },
      ].map((o, i) => (
        <g key={i}>
          <rect x={o.x} y={o.y} width="60" height="36" fill="none" stroke="#86f77a" strokeWidth="1.5" strokeDasharray="3 3" />
          <rect x={o.x} y={o.y - 14} width="60" height="14" fill="#86f77a" />
          <text x={o.x + 4} y={o.y - 3} fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#07090c">
            {o.cls} {o.conf}
          </text>
          <rect x={o.x + 10} y={o.y + 8} width="40" height="22" fill="#354255" />
        </g>
      ))}

      {/* camera feed overlay */}
      <g transform="translate(440,30)">
        <rect width="170" height="90" fill="#07090c" stroke="#4e5e75" />
        <text x="8" y="16" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#86f77a">● REC · CAM_01</text>
        <g stroke="#86f77a" strokeWidth="1" fill="none">
          <path d="M 20 40 L 60 35 L 100 55 L 140 45" />
          <circle cx="60" cy="35" r="2" fill="#86f77a" />
          <circle cx="100" cy="55" r="2" fill="#86f77a" />
        </g>
        <text x="8" y="78" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#73849b">YOLO · 30FPS</text>
      </g>

      {/* floor grid */}
      <g stroke="#26303f" strokeWidth="0.5" opacity="0.6">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={i} x1="0" y1={320 + i * 8} x2="640" y2={320 + i * 8} />
        ))}
      </g>
    </svg>
  );
}

/* ---------- VisAI ---------- */
function VisAIArt() {
  return (
    <svg viewBox="0 0 640 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="vis-bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#0b0e13" />
          <stop offset="1" stopColor="#0f131a" />
        </linearGradient>
        <linearGradient id="vis-accent" x1="0" x2="1">
          <stop offset="0" stopColor="#5cc7b9" />
          <stop offset="1" stopColor="#86f77a" />
        </linearGradient>
      </defs>
      <rect width="640" height="400" fill="url(#vis-bg)" />

      {/* face outline (abstract) */}
      <g transform="translate(100,90)" stroke="#5cc7b9" strokeWidth="1.2" fill="none" opacity="0.9">
        <path d="M 30 0 Q 0 40 10 110 Q 30 170 90 180 Q 150 170 170 110 Q 180 40 150 0 Q 90 -20 30 0 Z" />
        {/* eyes */}
        <circle cx="65" cy="70" r="8" />
        <circle cx="115" cy="70" r="8" />
        {/* smile */}
        <path d="M 70 130 Q 90 150 110 130" />
        {/* landmarks */}
        {[[50, 40], [130, 40], [40, 100], [140, 100], [90, 160]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2" fill="#86f77a" />
        ))}
      </g>

      {/* emotion readout */}
      <g transform="translate(340, 80)">
        <rect width="260" height="130" rx="8" fill="#07090c" stroke="#354255" />
        <text x="12" y="22" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#5cc7b9">VERTEX.AI · emotion</text>
        <g fontFamily="JetBrains Mono, monospace" fontSize="10">
          {[
            { k: "joy", v: 0.72, c: "#86f77a" },
            { k: "calm", v: 0.58, c: "#5cc7b9" },
            { k: "focus", v: 0.41, c: "#ffae5c" },
            { k: "stress", v: 0.12, c: "#ff6b6b" },
          ].map((b, i) => (
            <g key={i} transform={`translate(12, ${40 + i * 20})`}>
              <text x="0" y="0" fill="#73849b">{b.k}</text>
              <rect x="60" y="-8" width="170" height="6" rx="3" fill="#1b2330" />
              <rect x="60" y="-8" width={170 * b.v} height="6" rx="3" fill={b.c} />
              <text x="236" y="0" fill="#cdd6e3">{(b.v * 100).toFixed(0)}%</text>
            </g>
          ))}
        </g>
      </g>

      {/* chat bubble */}
      <g transform="translate(340, 230)">
        <rect width="260" height="100" rx="10" fill="#07090c" stroke="#354255" />
        <text x="12" y="22" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#86f77a">GEMINI · vision</text>
        <text x="12" y="48" fontFamily="Space Grotesk, sans-serif" fontSize="11" fill="#cdd6e3">
          {"“I see a calm expression."}
        </text>
        <text x="12" y="64" fontFamily="Space Grotesk, sans-serif" fontSize="11" fill="#cdd6e3">
          {"Would you like to talk?”"}
        </text>
        <text x="12" y="86" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#73849b">
          ▶ CHIP3 · audio synthesis
        </text>
      </g>

      {/* caption */}
      <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#73849b">
        <text x="40" y="340">VISAI // ACCESSIBILITY ASSISTANT</text>
        <text x="40" y="356">MODE: TEA-AWARE · MULTIMODAL</text>
      </g>
    </svg>
  );
}
