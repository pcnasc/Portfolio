import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = "https://pedronasc.dev";
const DESCRIPTION =
  "Pedro Nascimento — Engenheiro de Software na SumUp (Adquirência) e estudante de Engenharia de Computação na FIAP. Sistemas de alta concorrência, IA determinística na borda e telemetria industrial.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pedro Nascimento — Software Engineer",
    template: "%s · Pedro Nascimento",
  },
  description: DESCRIPTION,
  applicationName: "Pedro Nascimento",
  authors: [{ name: "Pedro Nascimento", url: SITE_URL }],
  creator: "Pedro Nascimento",
  keywords: [
    "Pedro Nascimento",
    "Software Engineer",
    "SumUp",
    "FIAP",
    "Go",
    "Elixir",
    "Kafka",
    "Edge AI",
    "Payments",
    "São Paulo",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    siteName: "Pedro Nascimento",
    title: "Pedro Nascimento — Software Engineer",
    description: "Systems built for pressure & precision. Software Engineer at SumUp · Computer Engineering at FIAP.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Nascimento — Software Engineer",
    description: "Systems built for pressure & precision. Software Engineer at SumUp · Computer Engineering at FIAP.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#12110e",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pedro Nascimento",
  url: SITE_URL,
  jobTitle: "Software Engineer",
  worksFor: { "@type": "Organization", name: "SumUp" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "FIAP" },
    { "@type": "EducationalOrganization", name: "SENAI" },
  ],
  address: { "@type": "PostalAddress", addressLocality: "São Paulo", addressCountry: "BR" },
  sameAs: ["https://github.com/pcnasc", "https://linkedin.com/in/pedrocnasc"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${instrument.variable}`} suppressHydrationWarning>
      <body className="relative min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>
          <Header />
          <main className="relative">{children}</main>
          <Footer />
        </Providers>
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
