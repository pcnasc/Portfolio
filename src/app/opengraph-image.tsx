import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Pedro Nascimento — Software Engineer. Systems built for pressure & precision.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [regular, italic] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/InstrumentSerif-Regular.ttf")),
    readFile(join(process.cwd(), "src/assets/InstrumentSerif-Italic.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "radial-gradient(90% 120% at 85% 10%, #2a241a 0%, #12110e 60%)",
          color: "#ede6d6",
          fontFamily: "Instrument Serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 44, letterSpacing: -1, color: "#faf6ee" }}>PN</div>
          <div style={{ fontSize: 22, letterSpacing: 6, color: "#c7a86e", textTransform: "uppercase" }}>
            Software Engineer — São Paulo
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, lineHeight: 1, letterSpacing: -3, color: "#faf6ee" }}>Systems built for</div>
          <div style={{ display: "flex", fontSize: 112, lineHeight: 1.05, letterSpacing: -3, color: "#faf6ee" }}>
            pressure &amp;&nbsp;<span style={{ fontStyle: "italic", color: "#e8d6ad" }}>precision.</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ height: 1, width: "100%", background: "linear-gradient(90deg, #b8975a, rgba(184,151,90,0))" }} />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 28, fontSize: 30, color: "#b3aa98" }}>
            <span style={{ color: "#faf6ee" }}>Pedro Nascimento</span>
            <span>SumUp · FIAP · pedronasc.dev</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: regular, style: "normal", weight: 400 },
        { name: "Instrument Serif", data: italic, style: "italic", weight: 400 },
      ],
    }
  );
}
