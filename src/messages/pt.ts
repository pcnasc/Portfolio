const pt = {
  site: {
    title: "Pedro Nascimento — Software Engineer",
    description:
      "Portfólio de Pedro Nascimento — Engenheiro de Software na SumUp (Adquirência), estudante de Engenharia de Computação na FIAP, com foco em sistemas de alta concorrência, IA e robótica.",
  },
  nav: {
    about: "Sobre",
    experience: "Experiência",
    projects: "Projetos",
    repos: "Repositórios",
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
    ctaProjects: "Ver Projetos",
    ctaGithub: "GitHub",
    ctaLinkedin: "LinkedIn",
    ctaEmail: "E-mail",
    cvDisabled: "CV em breve",
    statusLabel: "status",
    statusValue: "disponível para conexões",
  },
  about: {
    label: "01 / Sobre",
    title: "Sobre mim",
    body: [
      "Sou estudante de Engenharia de Computação na FIAP e Técnico em Informática pelo Senai, com atuação focada em sistemas críticos de alta concorrência, arquitetura de software determinística e intersecção entre software e hardware.",
      "Atuo na engenharia de Adquirência na SumUp, projetando serviços de baixa latência para o throughput nacional de transações. Meu interesse profissional abrange aplicações financeiras, health tech (especialmente neurotecnologia), física aplicada e qualquer sistema onde pressão e precisão importam — é onde eu performo melhor.",
    ],
  },
  experience: {
    label: "02 / Trajetória",
    title: "Experiência Profissional",
    items: [
      {
        company: "SumUp",
        role: "Software Engineer Intern · Acquiring Engineering",
        period: "Julho 2025 – Presente",
        current: true,
        description:
          "Engenharia de sistemas de adquirência de alta concorrência e baixa latência, processando o throughput nacional de transações. Implemento motores de roteamento e integrações que comunicam diretamente com bandeiras (Visa, Mastercard, Cielo) via protocolos RS2, além de pipelines orientados a eventos com consistência de estado usando Go, Elixir/Erlang, PostgreSQL e Apache Kafka.",
        scope: [
          "Roteamento de transações com Go, Elixir e Erlang",
          "Protocolos de adquirência: RS2, Visa Direct, Mastercard Send",
          "Event-driven architecture com Kafka, PostgreSQL e Redis",
          "Alta concorrência — sistema mais crítico da empresa",
          "Observabilidade com Grafana e Elastic (ELK)",
        ],
      },
      {
        company: "GOL Linhas Aéreas",
        role: "IT & Finance Intern",
        period: "Março 2025 – Julho 2025",
        current: false,
        description:
          "Integração entre a coordenação de TI, Finanças e Administração. Suporte a sistemas internos críticos, análise de dados financeiros e melhoria de processos tecnológicos na operação da companhia.",
        scope: [],
      },
    ],
  },
  projects: {
    label: "03 / Cases",
    title: "Projetos em Destaque",
    intro:
      "Quatro casos que sintetizam minha atuação na intersecção entre software, IA e hardware — de maratonas de inovação a plataformas industriais.",
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
    title: "Repositórios",
    intro: "Seleção dinâmica via API do GitHub — ordenada por estrelas e atividade recente.",
    stars: "stars",
    forks: "forks",
    viewOnGithub: "Ver no GitHub",
    loading: "Carregando repositórios…",
    fallbackTitle: "Repositórios (snapshot)",
    fallback: [
      "festo-digital-twin",
      "visai",
      "industrial-robot-arm",
      "sumup-adquirencia-toolkit",
      "gcp-foundations",
      "fiap-computacao",
    ],
    error: "Não foi possível carregar os repositórios no momento.",
  },
  skills: {
    label: "05 / Skills",
    title: "Matriz de Competências",
    categories: [
      { name: "Linguagens", items: ["Go", "Elixir", "Erlang", "Python", "TypeScript", "Java"] },
      { name: "Protocolos & Hardware", items: ["RS2 / Payment Protocols", "J1939 CAN Bus", "ESP32 Firmware", "WebSockets"] },
      { name: "Concorrência & Streaming", items: ["Apache Kafka", "High-Throughput Routing", "RabbitMQ", "AWS SQS"] },
      { name: "Inteligência & Lógica", items: ["Deterministic FSMs", "ChromaDB RAG", "Local LLM (Ollama)", "YOLO + CV", "Pydantic Validation"] },
      { name: "Dados & Persistência", items: ["PostgreSQL", "Async SQLite", "MongoDB", "Snowflake", "Redis"] },
      { name: "Infra & Observabilidade", items: ["Grafana", "Elastic (ELK)", "Schema Registry", "Docker"] },
      { name: "Certificações GCP", items: ["Foundational Infrastructure", "Networks & Security", "ML/AI Tasks"] },
      { name: "Idiomas", items: ["Português (Nativo)", "Inglês (Fluente)", "Francês (Básico)"] },
    ],
  },
  footer: {
    built: "Construído com Next.js, Tailwind e muito café.",
    copyright: "© {year} Pedro Nascimento. Todos os direitos reservados.",
  },
};

export default pt;

/* Structural type — strings, not literal types, so EN can satisfy it. */
export type Dict = {
  site: { title: string; description: string };
  nav: { about: string; experience: string; projects: string; repos: string; skills: string };
  hero: {
    promptUser: string;
    promptPath: string;
    lines: { whoami: string; name: string; title: string; pitch: string };
    ctaProjects: string;
    ctaGithub: string;
    ctaLinkedin: string;
    ctaEmail: string;
    cvDisabled: string;
    statusLabel: string;
    statusValue: string;
  };
  about: { label: string; title: string; body: string[] };
  experience: {
    label: string;
    title: string;
    items: Array<{
      company: string;
      role: string;
      period: string;
      current: boolean;
      description: string;
      scope: string[];
    }>;
  };
  projects: {
    label: string;
    title: string;
    intro: string;
    items: Array<{
      id: string;
      number: string;
      title: string;
      badge: string;
      summary: string;
      tags: string[];
      links: Array<{ label: string; href: string }>;
    }>;
  };
  repos: {
    label: string;
    title: string;
    intro: string;
    stars: string;
    forks: string;
    viewOnGithub: string;
    loading: string;
    fallbackTitle: string;
    fallback: string[];
    error: string;
  };
  skills: {
    label: string;
    title: string;
    categories: Array<{ name: string; items: string[] }>;
  };
  footer: { built: string; copyright: string };
};
