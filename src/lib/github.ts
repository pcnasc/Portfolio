export type Repo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  updated_at: string;
};

export type GitHubPayload = {
  repos: Repo[];
  source: "api" | "fallback";
};

const FALLBACK_NAMES = [
  "festo-digital-twin",
  "visai",
  "industrial-robot-arm",
  "sumup-adquirencia-toolkit",
  "gcp-foundations",
  "fiap-computacao",
];

// GitHub public API language colors (subset)
export const LANGUAGE_COLORS: Record<string, string> = {
  Go: "#00ADD8",
  Java: "#b07219",
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Rust: "#dea584",
  "C++": "#f34b7d",
  C: "#555555",
  Shell: "#89e051",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Jupyter: "#DA5B0B",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Dart: "#00B4AB",
};

export function getLanguageColor(lang: string | null): string {
  if (!lang) return "#4e5e75";
  return LANGUAGE_COLORS[lang] ?? "#73849b";
}

function makeFallback(): Repo[] {
  return FALLBACK_NAMES.map((name, i) => ({
    name,
    description: null,
    language: i % 2 === 0 ? "Python" : "Go",
    stargazers_count: 0,
    forks_count: 0,
    html_url: `https://github.com/pcnasc/${name}`,
    updated_at: new Date().toISOString(),
  }));
}

export async function fetchRepos(): Promise<GitHubPayload> {
  try {
    const res = await fetch("https://api.github.com/users/pcnasc/repos?per_page=100&type=owner", {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const raw = (await res.json()) as Array<Record<string, unknown>>;
    if (!Array.isArray(raw)) throw new Error("Unexpected payload");

    const repos: Repo[] = raw
      .filter((r) => r.fork !== true)
      .map((r) => ({
        name: String(r.name ?? ""),
        description: (r.description as string | null) ?? null,
        language: (r.language as string | null) ?? null,
        stargazers_count: Number(r.stargazers_count ?? 0),
        forks_count: Number(r.forks_count ?? 0),
        html_url: String(r.html_url ?? ""),
        updated_at: String(r.updated_at ?? ""),
      }))
      .filter((r) => r.name)
      .sort((a, b) => {
        if (b.stargazers_count !== a.stargazers_count) return b.stargazers_count - a.stargazers_count;
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      })
      .slice(0, 6);

    return { repos, source: repos.length ? "api" : "fallback" };
  } catch {
    return { repos: makeFallback(), source: "fallback" };
  }
}
