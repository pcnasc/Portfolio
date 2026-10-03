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
      title: "High concurrency · acquiring & routing · deterministic edge AI · industrial telemetry",
      pitch:
        "Engineer building high-concurrency acquiring services, deterministic edge-AI copilots, and industrial telemetry systems. Where pressure and precision meet — that's where I operate.",
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
      "I'm a Computer Engineering student at FIAP and hold an IT Technician diploma from Senai, focused on building high-concurrency critical systems, deterministic software architectures, and the intersection between software and hardware.",
      "I currently work on Acquiring Engineering at SumUp, designing low-latency services for nationwide transaction throughput. My professional interests span financial applications, health tech (especially neurotechnology), applied physics, and any system where pressure and precision matter — that's where I perform best.",
    ],
  },
  experience: {
    label: "02 / Journey",
    title: "Professional Experience",
    items: [
      {
        company: "SumUp",
        role: "Software Engineer Intern · Acquiring Engineering",
        period: "Jul 2025 – Present",
        current: true,
        description:
          "Engineering high-concurrency, low-latency acquiring services handling nationwide transaction throughput. Designed routing engines interfacing directly with card schemes (Visa, Mastercard) and major acquirers (Cielo) via RS2 protocols. Implemented resilient event-driven pipelines and state consistency using Go, Elixir/Erlang, PostgreSQL, and Apache Kafka.",
        scope: [
          "Transaction routing with Go, Elixir and Erlang",
          "Acquiring protocols: RS2, Visa Direct, Mastercard Send",
          "Event-driven architecture with Kafka, PostgreSQL and Redis",
          "High concurrency — most critical system in the company",
          "Observability with Grafana and Elastic (ELK)",
        ],
      },
      {
        company: "GOL Linhas Aéreas",
        role: "IT & Finance Intern",
        period: "Mar 2025 – Jul 2025",
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
      "Four cases that synthesize my work at the intersection of software, AI and hardware — from innovation marathons to industrial platforms.",
    items: [
      {
        id: "festo-digital-twin",
        number: "01",
        title: "Digital Twin & Predictive Energy Engine for Industrial Pneumatics",
        badge: "🥈 2nd Place · Festo Digital Twin Challenge 2025 (Team NewByte)",
        summary:
          "Engineered the telemetry pipeline for a Festo pneumatic testbed, translating live pressure, flow, and cycle metrics into physical degradation models. Formulated algorithmic predictions for valve seal wear and pressure-drop anomalies, calculating compressor energy waste in kWh and air consumption to preempt station downtime. Anchored by a RAG-powered specialist assistant (NewSon) on live operational data.",
        tags: ["Pneumatic Telemetry", "Wear Prediction", "Energy Optimization", "RAG / GenAI", "Python"],
        links: [{ label: "github.com/macorfilho/festo-digital-twin", href: "https://github.com/macorfilho/festo-digital-twin" }],
      },
      {
        id: "jd-fixit",
        number: "02",
        title: "JD Fixit — Deterministic Cabin Copilot for Forestry Harvesters",
        badge: "Category: Edge Robotics & Offline AI",
        summary:
          "Heavy forestry harvesters face ~$131/hour field downtime in remote parcels with zero cellular reception. Built an edge-native diagnostic copilot running locally inside the cabin. Reads raw J1939 CAN bus telemetry through custom ESP32 firmware, driven by a deterministic Finite State Machine that sandboxes all safety transitions. Anchored by offline RAG (ChromaDB, nomic-embed-text, Ollama) citing a 401-page OEM service manual with strict Pydantic schemas, state replay, and zero LLM control over execution logic. Verified: 22/22 deterministic conformance, 401-page manual ingestion.",
        tags: ["J1939 CAN", "ESP32 Firmware", "Deterministic FSM", "ChromaDB", "Ollama", "FastAPI", "Pydantic"],
        links: [],
      },
      {
        id: "robot-arm",
        number: "03",
        title: "Industrial Automation Robot with Computer Vision",
        badge: "🥇 1st Place · SPI + ABDI Gen AI Challenge 2024 (Team NewByte)",
        summary:
          "Industrial automation combining a robotic arm with a real-time computer vision ecosystem. Detection, categorization and manipulation of objects in a factory using YOLO and the NVIDIA Omniverse platform (MeshIA).",
        tags: ["NVIDIA Omniverse", "YOLO", "Computer Vision", "Robotics", "MeshIA"],
        links: [],
      },
      {
        id: "visai",
        number: "04",
        title: "VisAI — Multimodal Assistant for Accessibility",
        badge: "🥉 3rd Place · Google Cloud GenAI & FIAP Hackathon",
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
      { name: "Languages", items: ["Go", "Elixir", "Erlang", "Python", "TypeScript", "Java"] },
      { name: "Protocols & Hardware", items: ["RS2 / Payment Protocols", "J1939 CAN Bus", "ESP32 Firmware", "WebSockets"] },
      { name: "Concurrency & Streaming", items: ["Apache Kafka", "High-Throughput Routing", "RabbitMQ", "AWS SQS"] },
      { name: "Intelligence & Logic", items: ["Deterministic FSMs", "ChromaDB RAG", "Local LLM (Ollama)", "YOLO + CV", "Pydantic Validation"] },
      { name: "Data & Persistence", items: ["PostgreSQL", "Async SQLite", "MongoDB", "Snowflake", "Redis"] },
      { name: "Infra & Observability", items: ["Grafana", "Elastic (ELK)", "Schema Registry", "Docker"] },
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
