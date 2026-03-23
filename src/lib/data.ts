export const PROJECTS = [
  {
    title: "NeuralFlow",
    desc: "A real-time ML pipeline orchestration tool that lets teams deploy and monitor AI models with zero-downtime rollouts.",
    tags: ["Python", "React", "FastAPI", "Docker"],
    color: "#cf6c3f",
    year: "2024",
  },
  {
    title: "Codebase Atlas",
    desc: "Interactive codebase visualizer that maps dependencies, hotspots, and contributor activity across monorepos.",
    tags: ["TypeScript", "D3.js", "Node.js", "GraphQL"],
    color: "#4a7fa6",
    year: "2024",
  },
  {
    title: "Driftless",
    desc: "Minimal, distraction-free writing environment with AI-assisted grammar nudges and version diffing built in.",
    tags: ["Next.js", "Tailwind", "Postgres", "OpenAI"],
    color: "#7a6a9e",
    year: "2023",
  },
  {
    title: "Meridian API",
    desc: "High-throughput geocoding and routing microservice handling 2M+ requests/day with 99.99% uptime SLA.",
    tags: ["Go", "Redis", "Kubernetes", "gRPC"],
    color: "#3a9e7a",
    year: "2023",
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

export const STATS = [
  { value: "3+", label: "Years experience" },
  { value: "10+", label: "Projects shipped" },
  // { value: "99.9%", label: "Uptime SLA" },
] as const;

export const NAV_LINKS = ["About", "Projects", "Skills", "Contact"] as const;
