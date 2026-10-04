export const GITHUB_USER = "pcnasc";

export type Repo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
  updated_at: string;
};

export type Contributions = {
  total: number;
  /** ISO date of the first cell (a Sunday — the grid's top-left). */
  start: string;
  weeks: number;
  /** Column-major levels (week * 7 + weekday); -1 = outside the range, 0–4 = intensity. */
  levels: number[];
};

/** Curated, in display order. */
export const CURATED_REPOS = [
  "panoramic-dental-data",
  "micrograd",
  "PneumaticSim",
  "incubadora-fiap",
  "SmartRecycle",
  "Ocean_Monitoring_System.GS24",
];

const headers: HeadersInit = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
};

function fallbackRepo(name: string): Repo {
  return {
    name,
    description: null,
    language: null,
    stargazers_count: 0,
    html_url: `https://github.com/${GITHUB_USER}/${name}`,
    updated_at: "",
  };
}

/** Curated repos via the GitHub API (ISR, 1h). Any failure degrades to a static entry. */
export async function fetchRepos(): Promise<Repo[]> {
  return Promise.all(
    CURATED_REPOS.map(async (slug) => {
      try {
        const r = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${slug}`, {
          next: { revalidate: 3600 },
          headers,
        });
        if (!r.ok) return fallbackRepo(slug);
        const raw = (await r.json()) as Record<string, unknown>;
        return {
          name: String(raw.name ?? slug),
          description: (raw.description as string | null) ?? null,
          language: (raw.language as string | null) ?? null,
          stargazers_count: Number(raw.stargazers_count ?? 0),
          html_url: String(raw.html_url ?? `https://github.com/${GITHUB_USER}/${slug}`),
          updated_at: String(raw.updated_at ?? ""),
        };
      } catch {
        return fallbackRepo(slug);
      }
    })
  );
}

/** Last-year contribution calendar (public, no auth). Returns null on failure. */
export async function fetchContributions(): Promise<Contributions | null> {
  try {
    const r = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`, {
      next: { revalidate: 21600 },
    });
    if (!r.ok) return null;
    const data = (await r.json()) as {
      total?: Record<string, number>;
      contributions?: Array<{ date: string; count: number; level: number }>;
    };
    const days = data.contributions ?? [];
    if (!days.length) return null;

    // Pad the front so column 0 starts on a Sunday, then pad the back to a full week.
    const first = new Date(`${days[0].date}T00:00:00Z`);
    const offset = first.getUTCDay();
    const levels = [...Array(offset).fill(-1), ...days.map((d) => d.level)];
    while (levels.length % 7 !== 0) levels.push(-1);

    const start = new Date(first);
    start.setUTCDate(first.getUTCDate() - offset);

    const total = data.total?.lastYear ?? days.reduce((s, d) => s + d.count, 0);
    return { total, start: start.toISOString().slice(0, 10), weeks: levels.length / 7, levels };
  } catch {
    return null;
  }
}
