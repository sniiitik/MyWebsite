export const PROJECTS = [
  {
    title: "CodeWeave",
    eyebrow: "Project",
    desc: "Agentic AI coding system that autonomously refactors code, generates tests, and writes documentation through a multi-step execution loop.",
    summary: "Built an agent workflow that plans, acts, validates, and retries while operating on the real file system and surfacing changes through a streaming, diff-based interface.",
    highlights: [
      "Implemented tool-calling workflows with real file system operations and command execution",
      "Designed a multi-step execution loop for plan, act, validate, and retry behavior",
      "Built a real-time UI to visualize reasoning steps and inspect file diffs",
    ],
    tags: ["TypeScript", "AI Agents", "Tool Calling", "Streaming UI"],
    color: "#8c5e3c",
    year: "2024",
    githubUrl: "https://github.com/sniiitik/RepoAgent-AI-Coding-Assistant",
  },
  {
    title: "DocMind",
    eyebrow: "Project",
    desc: "RAG intelligence platform for querying large document and codebases with retrieval pipelines designed for semantic relevance and context quality.",
    summary: "Built retrieval-augmented workflows using embeddings, vector search, chunking strategies, and ranking improvements to make large knowledge bases more searchable and useful.",
    highlights: [
      "Implemented semantic search with embeddings and vector databases",
      "Optimized retrieval quality with chunking and contextual relevance strategies",
      "Designed the system for large document sets and codebase-scale knowledge retrieval",
    ],
    tags: ["RAG", "Embeddings", "Vector DB", "Semantic Search"],
    color: "#2f6f73",
    year: "2024",
    githubUrl: "https://github.com/sniiitik/DocMind-RAG-Intelligence-Platform",
  },
  {
    title: "NeuralFlow",
    eyebrow: "Project",
    desc: "A real-time ML pipeline orchestration tool that lets teams deploy and monitor AI models with zero-downtime rollouts.",
    summary: "Monitoring and deployment workflows for ML teams shipping models in production.",
    highlights: [
      "Built orchestration flows for zero-downtime model rollouts",
      "Designed monitoring workflows to track production model health",
      "Focused on operational reliability for ML teams shipping continuously",
    ],
    tags: ["Python", "React", "FastAPI", "Docker"],
    color: "#cf6c3f",
    year: "2024",
    githubUrl: "",
  },
  {
    title: "Codebase Atlas",
    eyebrow: "Project",
    desc: "Interactive codebase visualizer that maps dependencies, hotspots, and contributor activity across monorepos.",
    summary: "Visualization tooling for understanding structure and change across complex codebases.",
    highlights: [
      "Mapped dependencies and structural relationships across large repositories",
      "Surfaced hotspots and contributor activity to support engineering decisions",
      "Built interactive visualizations for navigating monorepo complexity",
    ],
    tags: ["TypeScript", "D3.js", "Node.js", "GraphQL"],
    color: "#4a7fa6",
    year: "2024",
    githubUrl: "",
  },
  {
    title: "Driftless",
    eyebrow: "Project",
    desc: "Minimal, distraction-free writing environment with AI-assisted grammar nudges and version diffing built in.",
    summary: "Writing-focused product balancing clean UX with lightweight AI assistance.",
    highlights: [
      "Designed a focused writing experience with minimal interface noise",
      "Added lightweight AI grammar support without disrupting the editing flow",
      "Built version diffing to make revisions easier to review and trust",
    ],
    tags: ["Next.js", "Tailwind", "Postgres", "OpenAI"],
    color: "#7a6a9e",
    year: "2023",
    githubUrl: "",
  },
  {
    title: "Meridian API",
    eyebrow: "Project",
    desc: "High-throughput geocoding and routing microservice handling 2M+ requests/day with 99.99% uptime SLA.",
    summary: "Backend service work centered on throughput, uptime, and operational reliability.",
    highlights: [
      "Built backend services for high-volume geocoding and routing workloads",
      "Optimized for throughput and reliability under sustained traffic",
      "Worked around uptime and operational guarantees in production environments",
    ],
    tags: ["Go", "Redis", "Kubernetes", "gRPC"],
    color: "#3a9e7a",
    year: "2023",
    githubUrl: "",
  },
] as const;

export const SKILLS = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "Go", "Rust", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "FastAPI", "Node.js", "GraphQL"],
  },
  {
    category: "Tools & Infra",
    items: ["Docker", "Kubernetes", "AWS", "Postgres", "Redis", "Terraform"],
  },
] as const;

export const EXPERIENCE = [
  {
    company: "SensePlus",
    location: "Pune, IN",
    role: "Founder",
    period: "Feb 2026 - Present",
    color: "#8c5e3c",
    highlights: [
      "Architected and built an AI-driven health analysis system using React Native, Node.js, and Firebase for real-time inference on multimodal inputs.",
      "Designed an ML inference pipeline achieving 80-90% accuracy for disease prediction across preprocessing, model serving, and response generation.",
      "Led end-to-end product development across system design, backend workflows, recommendations, and mobile app delivery.",
    ],
  },
  {
    company: "Holtec Asia",
    location: "Pune, IN",
    role: "Full Stack Software Engineer",
    period: "June 2024 - Present",
    color: "#2f6f73",
    highlights: [
      "Built and maintained enterprise applications with .NET Core, C#, and SQL for business-critical workflows.",
      "Designed and optimized RESTful APIs and backend services to improve response times and system throughput.",
      "Implemented scalable React and .NET solutions and integrated AI-driven features to improve automation and decision-making.",
    ],
  },
  {
    company: "Glenmark Pharmaceuticals Ltd.",
    location: "Mumbai, IN",
    role: "Mobile Developer",
    period: "Jan 2024 - May 2024",
    color: "#4a7fa6",
    highlights: [
      "Developed a responsive web application that improved user engagement by 20% through UI/UX and performance improvements.",
      "Engineered backend services with Node.js and MongoDB to improve query efficiency and overall system throughput.",
      "Designed RESTful APIs that supported a modular and scalable application architecture.",
    ],
  },
] as const;

export const STATS = [
  { value: "3+", label: "Years experience" },
  { value: `${PROJECTS.length}`, label: "Projects shipped" },
  // { value: "99.9%", label: "Uptime SLA" },
] as const;

export const NAV_LINKS = ["About", "Experience", "Projects", "Skills", "Contact"] as const;
