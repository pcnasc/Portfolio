import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Marquee } from "@/components/sections/Marquee";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Capabilities } from "@/components/sections/Capabilities";
import { OpenSource } from "@/components/sections/OpenSource";
import { Contact } from "@/components/sections/Contact";
import { fetchContributions, fetchRepos } from "@/lib/github";

// Static page, re-generated at most hourly (GitHub repos + contribution calendar).
export const revalidate = 3600;

export default async function Home() {
  const [repos, contributions] = await Promise.all([fetchRepos(), fetchContributions()]);

  return (
    <>
      <Hero />
      <About />
      <Marquee />
      <Work />
      <Experience />
      <Capabilities />
      <OpenSource repos={repos} contributions={contributions} />
      <Contact />
    </>
  );
}
