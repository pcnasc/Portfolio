import { fetchRepos, getLanguageColor, type GitHubPayload } from "@/lib/github";
import { ReposClient } from "./ReposClient";

export async function Repos() {
  const data: GitHubPayload = await fetchRepos();
  return <ReposClient data={data} />;
}

export { getLanguageColor };
export type { GitHubPayload };
