"use client";

import { useEffect, useState } from "react";
import t from "@/messages";
import { AnchorLink } from "@/components/ui/links";

function SaoPauloClock() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "America/Sao_Paulo",
      hour: "2-digit",
      minute: "2-digit",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, []);
  return <span className="tabular-nums">{time ?? "--:--"}</span>;
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-cream-100/[0.07]">
      <div className="container-x grid gap-6 py-10 text-[0.8rem] text-cream-500 md:grid-cols-4 md:items-center">
        <span>
          © {year} Pedro Nascimento. {t.footer.rights}
        </span>
        <span className="md:text-center">{t.footer.built}</span>
        <span className="md:text-center">
          {t.footer.localTime} — <SaoPauloClock />
        </span>
        <AnchorLink href="#top" id="footer-top" className="link-draw justify-self-start text-cream-300 hover:text-cream-50 md:justify-self-end">
          {t.footer.backToTop} ↑
        </AnchorLink>
      </div>
    </footer>
  );
}
