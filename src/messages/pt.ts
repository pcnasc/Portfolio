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
      title: "Software Engineer Intern @ SumUp | Computer Engineering @ FIAP | Robotics & AI",
      pitch:
        "Engenheiro em formação focado em sistemas de alta concorrência, adquirência, inteligência artificial e a intersecção entre software e hardware.",
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
      "Sou estudante de Engenharia de Computação na FIAP e Técnico em Informática pelo Senai, com atuação focada no desenvolvimento de sistemas críticos, arquiteturas distribuídas e robótica industrial.",
      "Atualmente atuo na engenharia de Adquirência na SumUp, desenvolvendo microsserviços em Go e Java para processamento e liquidação de transações. Possuo experiência em ambientes corporativos de grande porte como a GOL Linhas Aéreas e um histórico de vitórias em maratonas de inovação, unindo IA Generativa (RAG), visão computacional e simulação em tempo real.",
    ],
  },
  experience: {
    label: "02 / Trajetória",
    title: "Experiência Profissional",
    items: [
      {
        company: "SumUp",
        role: "Software Engineer Intern — Adquirência",
        period: "Maio 2026 – Presente",
        current: true,
        description:
          "Desenvolvimento e manutenção de sistemas na área core de Adquirência, trabalhando com mensageria e processamento contínuo de eventos em pipelines de alta disponibilidade.",
        scope: [
          "Backend robusto em Go e Java",
          "Arquitetura de eventos com Kafka, Schema Registry, RabbitMQ e AWS SQS",
          "Persistência e Analytics em PostgreSQL, MongoDB e Snowflake",
          "Integrações financeiras, conciliações e protocolos: RS2, Cielo Recon, Fleet, SFTP",
          "Observabilidade e Telemetria com Grafana e Elastic (ELK)",
        ],
      },
      {
        company: "GOL Linhas Aéreas",
        role: "IT & Finance Intern",
        period: "Maio 2025 – Maio 2026",
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
      "Três casos que sintetizam minha atuação na intersecção entre software, IA e hardware — de maratonas de inovação a plataformas industriais.",
    items: [
      {
        id: "festo-digital-twin",
        number: "01",
        title: "Gêmeo Digital & IA Preditiva para Indústria 4.0",
        badge: "🥈 2º Lugar — Festo Digital Twin Challenge 2025 (Equipe NewByte)",
        summary:
          "Plataforma completa de Digital Twin para estação pneumática Festo. Integra monitoramento em tempo real do hardware, assistente de IA especialista em RAG (NewSon), análise preditiva de risco de parada de linha a cada 30 segundos e simulação virtual para desgaste e eficiência energética.",
        tags: ["Digital Twin", "RAG / GenAI", "Análise Preditiva", "Indústria 4.0", "Python"],
        links: [{ label: "github.com/macorfilho/festo-digital-twin", href: "https://github.com/macorfilho/festo-digital-twin" }],
      },
      {
        id: "robot-arm",
        number: "02",
        title: "Robô de Automação Industrial com Visão Computacional",
        badge: "🥇 1º Lugar — SPI + ABDI Gen AI Challenge 2024 (Equipe NewByte)",
        summary:
          "Automação industrial unindo braço robótico a um ecossistema de visão computacional em tempo real. Detecção, categorização e manipulação de objetos em fábrica utilizando YOLO e a plataforma NVIDIA Omniverse (MeshIA).",
        tags: ["NVIDIA Omniverse", "YOLO", "Visão Computacional", "Robótica", "MeshIA"],
        links: [],
      },
      {
        id: "visai",
        number: "03",
        title: "VisAI — Assistente Multimodal para Acessibilidade",
        badge: "🥉 3º Lugar — Hackathon Google Cloud GenAI & FIAP",
        summary:
          "Protótipo funcional em 4 horas para acessibilidade visual e suporte a interações sociais no espectro autista (TEA). Integra análise de emoções via Vertex AI, visão computacional com Gemini e sintetização de áudio natural com CHIP3.",
        tags: ["React", "Google Cloud Gemini", "Vertex AI", "Acessibilidade", "CHIP3"],
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
      { name: "Linguagens", items: ["Go", "Java", "Python (Pandas)"] },
      { name: "Mensageria & Streaming", items: ["Kafka", "Schema Registry", "RabbitMQ", "AWS SQS"] },
      { name: "Bancos de Dados & Data", items: ["PostgreSQL", "MongoDB", "Snowflake", "SFTP"] },
      { name: "Adquirência & Financeiro", items: ["RS2", "Cielo Recon", "Fleet", "Adquirência"] },
      { name: "Observabilidade", items: ["Grafana", "Elastic (ELK)"] },
      { name: "Hardware & IA / Robótica", items: ["Visão Computacional (YOLO)", "NVIDIA Omniverse", "Vertex AI", "Gemini", "RAG", "Digital Twins"] },
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
