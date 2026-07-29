import type { Dict } from "./pt";

const en: Dict = {
  site: {
    title: "Pedro Nascimento — Software Engineer",
    description:
      "Pedro Nascimento's portfolio — Software Engineer at SumUp (Payments/Acquiring), Computer Engineering student at FIAP, focused on high-concurrency systems, AI and robotics.",
  },
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    repos: "Repositories",
    skills: "Skills",
  },
  hero: {
    promptUser: "pedro@portfolio",
    promptPath: "~",
    lines: {
      whoami: "whoami",
      name: "Pedro Nascimento",
      title: "Software Engineer Intern @ SumUp | Computer Engineering @ FIAP | Robotics & AI",
      pitch:
        "Engineer in training focused on high-concurrency systems, payment acquiring, artificial intelligence, and the intersection between software and hardware.",
    },
    ctaProjects: "View Projects",
    ctaGithub: "GitHub",
    ctaLinkedin: "LinkedIn",
    ctaEmail: "Email",
    cvDisabled: "CV coming soon",
    statusLabel: "status",
    statusValue: "open to connections",
  },
  about: {
    label: "01 / About",
    title: "About Me",
    body: [
      "I'm a Computer Engineering student at FIAP and hold an IT Technician diploma from Senai, focused on building critical systems, distributed architectures and industrial robotics.",
      "I currently work on Acquiring Engineering at SumUp, building Go and Java microservices for transaction processing and settlement. I have experience in large-scale corporate environments such as GOL Linhas Aéreas and a track record of wins in innovation marathons, combining Generative AI (RAG), computer vision and real-time simulation.",
    ],
  },
  experience: {
    label: "02 / Journey",
    title: "Professional Experience",
    items: [
      {
        company: "SumUp",
        role: "Software Engineer Intern — Acquiring",
        period: "May 2026 – Present",
        current: true,
        description:
          "Development and maintenance of systems in the core Acquiring area, working with messaging and continuous event processing in high-availability pipelines.",
        scope: [
          "Robust backend in Go and Java",
          "Event architecture with Kafka, Schema Registry, RabbitMQ and AWS SQS",
          "Persistence and Analytics on PostgreSQL, MongoDB and Snowflake",
          "Financial integrations, reconciliations and protocols: RS2, Cielo Recon, Fleet, SFTP",
          "Observability and Telemetry with Grafana and Elastic (ELK)",
        ],
      },
      {
        company: "GOL Linhas Aéreas",
        role: "IT & Finance Intern",
        period: "May 2025 – May 2026",
        current: false,
        description:
          "Integration between IT coordination, Finance and Administration. Support for critical internal systems, financial data analysis and improvement of technological processes in the airline's operation.",
        scope: [],
      },
    ],
  },
  projects: {
    label: "03 / Cases",
    title: "Featured Projects",
    intro:
      "Three cases that synthesize my work at the intersection of software, AI and hardware — from innovation marathons to industrial platforms.",
    items: [
      {
        id: "festo-digital-twin",
        number: "01",
        title: "Digital Twin & Predictive AI for Industry 4.0",
        badge: "🥈 2nd Place — Festo Digital Twin Challenge 2025 (Team NewByte)",
        summary:
          "Full Digital Twin platform for a Festo pneumatic station. Integrates real-time hardware monitoring, a RAG specialist AI assistant (NewSon), predictive analysis of line-stop risk every 30 seconds, and virtual simulation for wear and energy efficiency.",
        tags: ["Digital Twin", "RAG / GenAI", "Predictive Analysis", "Industry 4.0", "Python"],
        links: [{ label: "github.com/macorfilho/festo-digital-twin", href: "https://github.com/macorfilho/festo-digital-twin" }],
      },
      {
        id: "robot-arm",
        number: "02",
        title: "Industrial Automation Robot with Computer Vision",
        badge: "🥇 1st Place — SPI + ABDI Gen AI Challenge 2024 (Team NewByte)",
        summary:
          "Industrial automation combining a robotic arm with a real-time computer vision ecosystem. Detection, categorization and manipulation of objects in a factory using YOLO and the NVIDIA Omniverse platform (MeshIA).",
        tags: ["NVIDIA Omniverse", "YOLO", "Computer Vision", "Robotics", "MeshIA"],
        links: [],
      },
      {
        id: "visai",
        number: "03",
        title: "VisAI — Multimodal Assistant for Accessibility",
        badge: "🥉 3rd Place — Google Cloud GenAI & FIAP Hackathon",
        summary:
          "Functional prototype built in 4 hours for visual accessibility and support for social interactions across the autism spectrum (ASD). Integrates emotion analysis via Vertex AI, computer vision with Gemini, and natural audio synthesis with CHIP3.",
        tags: ["React", "Google Cloud Gemini", "Vertex AI", "Accessibility", "CHIP3"],
        links: [],
      },
    ],
  },
  repos: {
    label: "04 / GitHub",
    title: "Repositories",
    intro: "Dynamic selection via GitHub API — sorted by stars and recent activity.",
    stars: "stars",
    forks: "forks",
    viewOnGithub: "View on GitHub",
    loading: "Loading repositories…",
    fallbackTitle: "Repositories (snapshot)",
    fallback: [
      "festo-digital-twin",
      "visai",
      "industrial-robot-arm",
      "sumup-adquirencia-toolkit",
      "gcp-foundations",
      "fiap-computacao",
    ],
    error: "Could not load repositories at the moment.",
  },
  skills: {
    label: "05 / Skills",
    title: "Skills Matrix",
    categories: [
      { name: "Languages", items: ["Go", "Java", "Python (Pandas)"] },
      { name: "Messaging & Streaming", items: ["Kafka", "Schema Registry", "RabbitMQ", "AWS SQS"] },
      { name: "Databases & Data", items: ["PostgreSQL", "MongoDB", "Snowflake", "SFTP"] },
      { name: "Acquiring & Finance", items: ["RS2", "Cielo Recon", "Fleet", "Acquiring"] },
      { name: "Observability", items: ["Grafana", "Elastic (ELK)"] },
      { name: "Hardware & AI / Robotics", items: ["Computer Vision (YOLO)", "NVIDIA Omniverse", "Vertex AI", "Gemini", "RAG", "Digital Twins"] },
      { name: "GCP Certifications", items: ["Foundational Infrastructure", "Networks & Security", "ML/AI Tasks"] },
      { name: "Spoken Languages", items: ["Portuguese (Native)", "English (Fluent)", "French (Basic)"] },
    ],
  },
  footer: {
    built: "Built with Next.js, Tailwind and a lot of coffee.",
    copyright: "© {year} Pedro Nascimento. All rights reserved.",
  },
};

export default en;
