import { existsSync } from "node:fs";
import { join } from "node:path";
import pt from "@/messages/pt";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Repos } from "@/components/sections/Repos";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  // Resolve which project screenshots actually exist at build time so the
  // client never requests a missing /projects/{id}.png (no console 404s).
  // Dropping a real PNG into public/projects/ + redeploy swaps it in (GUD-005).
  const projectImages = Object.fromEntries(
    pt.projects.items.map((p) => [
      p.id,
      existsSync(join(process.cwd(), "public", "projects", `${p.id}.png`)),
    ])
  );

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects projectImages={projectImages} />
      <Repos />
      <Skills />
    </>
  );
}
