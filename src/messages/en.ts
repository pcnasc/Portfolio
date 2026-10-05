import type { Dict } from "./pt";

const en: Dict = {
  meta: {
    title: "Pedro Nascimento — Software Engineer",
    description:
      "Pedro Nascimento — Software Engineer at SumUp (Acquiring) and Computer Engineering student at FIAP. High-concurrency systems, deterministic edge AI and industrial telemetry.",
  },
  nav: {
    about: "About",
    work: "Work",
    experience: "Experience",
    capabilities: "Capabilities",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
  },
  hero: {
    eyebrow: "Software Engineer — São Paulo",
    headline: { line1: "Systems built for", line2: "pressure & ", emphasis: "precision", end: "." },
    lede:
      "I'm a software engineer building high-concurrency payment infrastructure at SumUp, offline edge-AI systems, and industrial telemetry pipelines.",
    ctaPrimary: "View selected work",
    ctaSecondary: "Get in touch",
    status: "Currently at SumUp · Acquiring Engineering",
    caption: "Est. 2004 · FIAP · SumUp",
    portraitAlt: "Portrait of Pedro Nascimento",
    awards: [
      { place: "1st", event: "SPI + ABDI Gen AI Challenge", year: "2024" },
      { place: "2nd", event: "Festo Digital Twin Challenge", year: "2025" },
      { place: "3rd", event: "Google Cloud GenAI Hackathon", year: "2024" },
    ],
    scroll: "Scroll",
  },
  about: {
    label: "About",
    manifesto:
      "I build the systems that can't afford to fail — payment rails that move a country's transactions, edge intelligence that keeps machines running in dead zones, and models that turn raw telemetry into foresight.",
    body: [
      "I'm a Computer Engineering student at FIAP with an IT Technician diploma from SENAI, focused on high-concurrency critical systems, deterministic software architecture and the intersection between software and hardware.",
      "Today I work on Acquiring Engineering at SumUp, designing low-latency services for nationwide transaction throughput. My core interest lies in financial infrastructure, but my curiosity also spans health tech — neurotechnology in particular — applied physics, and any system where pressure and precision matter. That's where I do my best work.",
    ],
    facts: [
      { label: "Education", lines: ["FIAP — B.Sc. Computer Engineering, 2023–2027", "SENAI — IT Technician, 2020–2022"] },
      { label: "Certifications", lines: ["Google Cloud — Infrastructure, Networks & Security, ML/AI", "Harvard CS50 — in progress"] },
      { label: "Languages", lines: ["Portuguese (native) · English (fluent) · French (basic)"] },
      { label: "Based in", lines: ["São Paulo, Brazil"] },
    ],
  },
  marquee: ["Go", "Elixir", "Erlang", "Apache Kafka", "PostgreSQL", "J1939 CAN", "ESP32", "ChromaDB", "Ollama", "YOLO", "Vertex AI", "Grafana"],
  work: {
    label: "Selected work",
    title: "Four cases where software meets the physical world.",
    intro:
      "From innovation marathons to industrial platforms — work at the intersection of software, AI and hardware.",
    items: [
      {
        id: "festo-digital-twin",
        number: "01",
        title: "Festo Digital Twin",
        subtitle: "Predictive energy engine for industrial pneumatics",
        kicker: "2nd Place · Festo Digital Twin Challenge 2025",
        summary:
          "A telemetry pipeline for a Festo pneumatic testbed that turns live pressure, flow and cycle data into physical degradation models — predicting valve-seal wear and pressure-drop anomalies, and quantifying compressor energy waste in kWh before it becomes downtime. Paired with NewSon, a RAG assistant grounded in live operational data.",
        metrics: [
          { value: "2nd", label: "place among Festo challenge teams" },
          { value: "kWh", label: "energy waste quantified in real time" },
        ],
        tags: ["Pneumatic telemetry", "Wear prediction", "Energy optimisation", "RAG", "Python"],
        links: [{ label: "Code on GitHub", href: "https://github.com/macorfilho/festo-digital-twin" }],
      },
      {
        id: "jd-fixit",
        number: "02",
        title: "JD Fixit",
        subtitle: "Deterministic cabin copilot for forestry harvesters",
        kicker: "Edge robotics & offline AI",
        summary:
          "Harvesters lose ~$131 an hour when they stall in parcels with zero signal. JD Fixit runs entirely inside the cabin: custom ESP32 firmware reads raw J1939 CAN telemetry, a deterministic state machine sandboxes every safety transition, and an offline RAG stack (ChromaDB, Ollama) cites a 401-page OEM service manual — with strict Pydantic schemas and zero LLM control over execution.",
        metrics: [
          { value: "22/22", label: "deterministic conformance tests" },
          { value: "401", label: "page OEM manual, cited offline" },
          { value: "0", label: "LLM control over execution" },
        ],
        tags: ["J1939 CAN", "ESP32 firmware", "Deterministic FSM", "ChromaDB", "Ollama", "FastAPI"],
        links: [],
      },
      {
        id: "robot-arm",
        number: "03",
        title: "Vision-Guided Robot Arm",
        subtitle: "Industrial automation with real-time computer vision",
        kicker: "1st Place · SPI + ABDI Gen AI Challenge 2024",
        summary:
          "A robotic arm paired with a real-time computer-vision ecosystem that detects, classifies and manipulates objects on a factory floor — trained with YOLO and simulated on the NVIDIA Omniverse platform (MeshIA).",
        metrics: [
          { value: "1st", label: "place at SPI + ABDI Gen AI Challenge" },
          { value: "91%", label: "identification accuracy on top item" },
        ],
        tags: ["NVIDIA Omniverse", "YOLO", "Computer vision", "Robotics"],
        links: [],
      },
      {
        id: "visai",
        number: "04",
        title: "VisAI",
        subtitle: "Multimodal assistant for accessibility",
        kicker: "3rd Place · Google Cloud GenAI & FIAP Hackathon",
        summary:
          "Built in four hours: a multimodal assistant for visual accessibility and social-interaction support across the autism spectrum — emotion analysis with Vertex AI, scene understanding with Gemini and natural speech synthesis with CHIP3.",
        metrics: [
          { value: "4h", label: "from idea to working prototype" },
          { value: "3rd", label: "place at Google Cloud & FIAP hackathon" },
        ],
        tags: ["React", "Gemini", "Vertex AI", "Accessibility"],
        links: [],
      },
    ],
  },
  experience: {
    label: "Journey",
    title: "Experience",
    intro: "Where theory meets production — and the throughput is real.",
    present: "Current",
    items: [
      {
        company: "SumUp",
        role: "Software Engineer Intern · Acquiring Engineering",
        period: "Jul 2025 — Present",
        current: true,
        description:
          "Engineering high-concurrency, low-latency acquiring services that handle nationwide transaction throughput. Routing engines and direct integrations with card schemes (Visa, Mastercard) and acquirers (Cielo) over RS2, with resilient event-driven pipelines and state consistency.",
        scope: [
          "Transaction routing with Go, Elixir and Erlang",
          "Acquiring protocols: RS2, Visa Direct, Mastercard Send",
          "Event-driven architecture with Kafka, PostgreSQL and Redis",
          "High concurrency on the company's most critical system",
          "Observability with Grafana and Elastic (ELK)",
        ],
      },
      {
        company: "GOL Linhas Aéreas",
        role: "IT & Finance Intern",
        period: "Mar 2025 — Jul 2025",
        current: false,
        description:
          "Bridged IT coordination, Finance and Administration. Supported critical internal systems, analysed financial data and improved technology processes across the airline's operation.",
        scope: [],
      },
    ],
  },
  capabilities: {
    label: "Capabilities",
    title: "Tools for systems under pressure.",
    intro: "From the protocol layer to the model — the stack I think and build with.",
    categories: [
      { name: "Languages", items: ["Go", "Elixir", "Erlang", "Python", "TypeScript", "Java"] },
      { name: "Concurrency & Streaming", items: ["Apache Kafka", "High-throughput routing", "RabbitMQ", "AWS SQS"] },
      { name: "Protocols & Hardware", items: ["RS2 / Payment protocols", "J1939 CAN Bus", "ESP32 firmware", "WebSockets"] },
      { name: "Intelligence & Logic", items: ["Deterministic FSMs", "ChromaDB RAG", "Local LLMs (Ollama)", "YOLO + Vision", "Pydantic validation"] },
      { name: "Data & Persistence", items: ["PostgreSQL", "Async SQLite", "MongoDB", "Snowflake", "Redis"] },
      { name: "Infra & Observability", items: ["Grafana", "Elastic (ELK)", "Schema Registry", "Docker"] },
      { name: "GCP Certifications", items: ["Foundational Infrastructure", "Networks & Security", "ML/AI Tasks"] },
      { name: "Spoken languages", items: ["Portuguese (native)", "English (fluent)", "French (basic)"] },
    ],
  },
  openSource: {
    label: "Open source",
    title: "From notebook to repository.",
    intro: "A selection of my public repositories — from neural nets built from scratch to embedded systems.",
    profile: "View GitHub profile",
    noDescription: "No description — the code speaks for itself.",
    contributions: "{count} contributions in the last year",
    snakeCaption: "The snake eats the commits. I write more.",
  },
  contact: {
    label: "Contact",
    titleLine1: "Let's build something",
    titleEmphasis: "precise.",
    body: "Open to conversations about payments infrastructure, edge AI and high-stakes systems — and good ideas in general.",
    copy: "Copy",
    copied: "Copied",
    cv: "CV coming soon",
  },
  footer: {
    rights: "All rights reserved.",
    built: "Designed & engineered in São Paulo.",
    localTime: "São Paulo",
    backToTop: "Back to top",
  },
};

export default en;
