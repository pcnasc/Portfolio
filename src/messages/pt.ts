/* Structural type — strings, not literal types, so EN can satisfy it. */
export type Project = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  kicker: string;
  summary: string;
  metrics: Array<{ value: string; label: string }>;
  tags: string[];
  links: Array<{ label: string; href: string }>;
};

export type Dict = {
  meta: { title: string; description: string };
  nav: {
    about: string;
    work: string;
    experience: string;
    capabilities: string;
    contact: string;
    menu: string;
    close: string;
  };
  hero: {
    eyebrow: string;
    headline: { line1: string; line2: string; emphasis: string; end: string };
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
    status: string;
    caption: string;
    portraitAlt: string;
    awards: Array<{ place: string; event: string; year: string }>;
    scroll: string;
  };
  about: {
    label: string;
    manifesto: string;
    body: string[];
    facts: Array<{ label: string; lines: string[] }>;
  };
  marquee: string[];
  work: {
    label: string;
    title: string;
    intro: string;
    items: Project[];
  };
  experience: {
    label: string;
    title: string;
    intro: string;
    present: string;
    items: Array<{
      company: string;
      role: string;
      period: string;
      current: boolean;
      description: string;
      scope: string[];
    }>;
  };
  capabilities: {
    label: string;
    title: string;
    intro: string;
    categories: Array<{ name: string; items: string[] }>;
  };
  openSource: {
    label: string;
    title: string;
    intro: string;
    profile: string;
    noDescription: string;
    contributions: string;
    snakeCaption: string;
  };
  contact: {
    label: string;
    titleLine1: string;
    titleEmphasis: string;
    body: string;
    copy: string;
    copied: string;
    cv: string;
  };
  footer: {
    rights: string;
    built: string;
    localTime: string;
    backToTop: string;
  };
};

const pt: Dict = {
  meta: {
    title: "Pedro Nascimento — Engenheiro de Software",
    description:
      "Pedro Nascimento — Engenheiro de Software na SumUp (Adquirência) e estudante de Engenharia de Computação na FIAP. Sistemas de alta concorrência, IA determinística na borda e telemetria industrial.",
  },
  nav: {
    about: "Sobre",
    work: "Projetos",
    experience: "Experiência",
    capabilities: "Competências",
    contact: "Contato",
    menu: "Menu",
    close: "Fechar",
  },
  hero: {
    eyebrow: "Engenheiro de Software — São Paulo",
    headline: { line1: "Sistemas feitos para", line2: "pressão & ", emphasis: "precisão", end: "." },
    lede:
      "Construo infraestrutura de pagamentos de alta concorrência na SumUp, copilotos de IA determinística na borda e sistemas de telemetria industrial.",
    ctaPrimary: "Ver projetos",
    ctaSecondary: "Entrar em contato",
    status: "Atualmente na SumUp · Acquiring Engineering",
    caption: "Est. 2004 · FIAP · SumUp",
    portraitAlt: "Retrato de Pedro Nascimento",
    awards: [
      { place: "1º", event: "SPI + ABDI Gen AI Challenge", year: "2024" },
      { place: "2º", event: "Festo Digital Twin Challenge", year: "2025" },
      { place: "3º", event: "Google Cloud GenAI Hackathon", year: "2024" },
    ],
    scroll: "Role",
  },
  about: {
    label: "Sobre",
    manifesto:
      "Construo sistemas que não podem falhar — trilhos de pagamento que movem as transações de um país, copilotos que mantêm máquinas operando onde não há sinal e modelos que transformam telemetria bruta em previsão.",
    body: [
      "Sou estudante de Engenharia de Computação na FIAP e Técnico em Informática pelo SENAI, com foco em sistemas críticos de alta concorrência, arquitetura de software determinística e a intersecção entre software e hardware.",
      "Hoje atuo na engenharia de Adquirência da SumUp, projetando serviços de baixa latência para o volume nacional de transações. Meus interesses passam por aplicações financeiras, health tech — especialmente neurotecnologia —, física aplicada e qualquer sistema onde pressão e precisão importam. É onde eu rendo melhor.",
    ],
    facts: [
      { label: "Formação", lines: ["FIAP — Engenharia de Computação, 2023–2027", "SENAI — Técnico em Informática, 2020–2022"] },
      { label: "Certificações", lines: ["Google Cloud — Infraestrutura, Redes & Segurança, ML/IA", "Harvard CS50 — em andamento"] },
      { label: "Idiomas", lines: ["Português (nativo) · Inglês (fluente) · Francês (básico)"] },
      { label: "Base", lines: ["São Paulo, Brasil"] },
    ],
  },
  marquee: ["Go", "Elixir", "Erlang", "Apache Kafka", "PostgreSQL", "J1939 CAN", "ESP32", "ChromaDB", "Ollama", "YOLO", "Vertex AI", "Grafana"],
  work: {
    label: "Projetos selecionados",
    title: "Quatro casos onde o software encontra o mundo físico.",
    intro:
      "De maratonas de inovação a plataformas industriais — trabalhos na intersecção entre software, IA e hardware.",
    items: [
      {
        id: "festo-digital-twin",
        number: "01",
        title: "Festo Digital Twin",
        subtitle: "Motor preditivo de energia para pneumática industrial",
        kicker: "2º lugar · Festo Digital Twin Challenge 2025",
        summary:
          "Pipeline de telemetria para uma bancada pneumática Festo que transforma pressão, vazão e ciclos em tempo real em modelos físicos de degradação — prevendo desgaste de vedações e quedas de pressão, e quantificando o desperdício de energia do compressor em kWh antes que vire parada de linha. Acompanhado pelo NewSon, um assistente RAG ancorado nos dados operacionais.",
        metrics: [
          { value: "2º", label: "lugar entre equipes do desafio Festo" },
          { value: "kWh", label: "desperdício de energia quantificado em tempo real" },
        ],
        tags: ["Telemetria pneumática", "Predição de desgaste", "Eficiência energética", "RAG", "Python"],
        links: [{ label: "Código no GitHub", href: "https://github.com/macorfilho/festo-digital-twin" }],
      },
      {
        id: "jd-fixit",
        number: "02",
        title: "JD Fixit",
        subtitle: "Copiloto determinístico de cabine para harvesters florestais",
        kicker: "Robótica na borda & IA offline",
        summary:
          "Harvesters perdem cerca de US$ 131 por hora quando param em talhões sem sinal. O JD Fixit roda inteiro dentro da cabine: firmware ESP32 lê a telemetria J1939 do barramento CAN, uma máquina de estados determinística isola cada transição de segurança e um RAG offline (ChromaDB, Ollama) cita um manual OEM de 401 páginas — com schemas Pydantic estritos e zero controle do LLM sobre a execução.",
        metrics: [
          { value: "22/22", label: "testes de conformidade determinística" },
          { value: "401", label: "páginas de manual OEM citadas offline" },
          { value: "0", label: "controle do LLM sobre a execução" },
        ],
        tags: ["J1939 CAN", "Firmware ESP32", "FSM determinística", "ChromaDB", "Ollama", "FastAPI"],
        links: [],
      },
      {
        id: "robot-arm",
        number: "03",
        title: "Braço robótico com visão",
        subtitle: "Automação industrial com visão computacional em tempo real",
        kicker: "1º lugar · SPI + ABDI Gen AI Challenge 2024",
        summary:
          "Um braço robótico integrado a um ecossistema de visão computacional em tempo real que detecta, classifica e manipula objetos no chão de fábrica — treinado com YOLO e simulado na plataforma NVIDIA Omniverse (MeshIA).",
        metrics: [
          { value: "1º", label: "lugar no SPI + ABDI Gen AI Challenge" },
          { value: "91%", label: "precisão de identificação no melhor item" },
        ],
        tags: ["NVIDIA Omniverse", "YOLO", "Visão computacional", "Robótica"],
        links: [],
      },
      {
        id: "visai",
        number: "04",
        title: "VisAI",
        subtitle: "Assistente multimodal para acessibilidade",
        kicker: "3º lugar · Google Cloud GenAI & FIAP Hackathon",
        summary:
          "Construído em quatro horas: um assistente multimodal para acessibilidade visual e apoio a interações sociais no espectro autista — análise de emoções com Vertex AI, compreensão de cena com Gemini e síntese de voz natural com CHIP3.",
        metrics: [
          { value: "4h", label: "da ideia ao protótipo funcional" },
          { value: "3º", label: "lugar no hackathon Google Cloud & FIAP" },
        ],
        tags: ["React", "Gemini", "Vertex AI", "Acessibilidade"],
        links: [],
      },
    ],
  },
  experience: {
    label: "Trajetória",
    title: "Experiência",
    intro: "Onde a teoria encontra produção — e o throughput é real.",
    present: "Atual",
    items: [
      {
        company: "SumUp",
        role: "Software Engineer Intern · Acquiring Engineering",
        period: "Jul 2025 — Atual",
        current: true,
        description:
          "Engenharia de serviços de adquirência de alta concorrência e baixa latência, processando o volume nacional de transações. Motores de roteamento e integrações diretas com bandeiras (Visa, Mastercard) e adquirentes (Cielo) via RS2, com pipelines orientados a eventos e consistência de estado.",
        scope: [
          "Roteamento de transações com Go, Elixir e Erlang",
          "Protocolos de adquirência: RS2, Visa Direct, Mastercard Send",
          "Arquitetura orientada a eventos com Kafka, PostgreSQL e Redis",
          "Alta concorrência no sistema mais crítico da empresa",
          "Observabilidade com Grafana e Elastic (ELK)",
        ],
      },
      {
        company: "GOL Linhas Aéreas",
        role: "IT & Finance Intern",
        period: "Mar 2025 — Jul 2025",
        current: false,
        description:
          "Integração entre a coordenação de TI, Finanças e Administração. Suporte a sistemas internos críticos, análise de dados financeiros e melhoria de processos tecnológicos na operação da companhia.",
        scope: [],
      },
    ],
  },
  capabilities: {
    label: "Competências",
    title: "Ferramentas para sistemas sob pressão.",
    intro: "Da camada de protocolo ao modelo — o stack com que penso e construo.",
    categories: [
      { name: "Linguagens", items: ["Go", "Elixir", "Erlang", "Python", "TypeScript", "Java"] },
      { name: "Concorrência & Streaming", items: ["Apache Kafka", "Roteamento de alto throughput", "RabbitMQ", "AWS SQS"] },
      { name: "Protocolos & Hardware", items: ["RS2 / Protocolos de pagamento", "J1939 CAN Bus", "Firmware ESP32", "WebSockets"] },
      { name: "Inteligência & Lógica", items: ["FSMs determinísticas", "RAG com ChromaDB", "LLMs locais (Ollama)", "YOLO + Visão", "Validação Pydantic"] },
      { name: "Dados & Persistência", items: ["PostgreSQL", "SQLite assíncrono", "MongoDB", "Snowflake", "Redis"] },
      { name: "Infra & Observabilidade", items: ["Grafana", "Elastic (ELK)", "Schema Registry", "Docker"] },
      { name: "Certificações GCP", items: ["Foundational Infrastructure", "Networks & Security", "ML/AI Tasks"] },
      { name: "Idiomas", items: ["Português (nativo)", "Inglês (fluente)", "Francês (básico)"] },
    ],
  },
  openSource: {
    label: "Open source",
    title: "Do caderno ao repositório.",
    intro: "Uma seleção dos meus repositórios públicos — de redes neurais do zero a sistemas embarcados.",
    profile: "Ver perfil no GitHub",
    noDescription: "Sem descrição — o código fala por si.",
    contributions: "{count} contribuições no último ano",
    snakeCaption: "A cobra come os commits. Eu escrevo mais.",
  },
  contact: {
    label: "Contato",
    titleLine1: "Vamos construir algo",
    titleEmphasis: "preciso.",
    body: "Aberto a conversas sobre infraestrutura de pagamentos, IA na borda e sistemas de alto risco — e a boas ideias em geral.",
    copy: "Copiar",
    copied: "Copiado",
    cv: "CV em breve",
  },
  footer: {
    rights: "Todos os direitos reservados.",
    built: "Projetado e desenvolvido em São Paulo.",
    localTime: "São Paulo",
    backToTop: "Voltar ao topo",
  },
};

export default pt;
