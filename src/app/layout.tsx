import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Background } from "@/components/layout/Background";
import { Header, Footer } from "@/components/layout/Header";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pedronascimento.dev"),
  title: {
    default: "Pedro Nascimento — Software Engineer",
    template: "%s · Pedro Nascimento",
  },
  description:
    "Portfólio de Pedro Nascimento — Engenheiro de Software na SumUp (Adquirência), estudante de Engenharia de Computação na FIAP, com foco em sistemas de alta concorrência, IA e robótica.",
  applicationName: "Pedro Nascimento · Portfolio",
  authors: [{ name: "Pedro Nascimento", url: "https://github.com/pcnasc" }],
  creator: "Pedro Nascimento",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Pedro Nascimento · Portfolio",
    title: "Pedro Nascimento — Software Engineer",
    description:
      "Software Engineer Intern @ SumUp · Computer Engineering @ FIAP · Robotics & AI. Portfólio com cases de Digital Twin, Visão Computacional e Acessibilidade.",
    url: "https://pedronascimento.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Nascimento — Software Engineer",
    description:
      "Software Engineer Intern @ SumUp · Computer Engineering @ FIAP · Robotics & AI",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#07090c" />
      </head>
      <body className="min-h-screen flex flex-col relative">
        <Background />
        <Providers>
          <Header />
          <main className="flex-1 relative">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
