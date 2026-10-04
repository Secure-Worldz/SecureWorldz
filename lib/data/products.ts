export interface SecurityProduct {
  id: string
  name: string
  tagline: string
  description: string
  category: "Tool" | "Lab"
  features?: string[]
  badge?: string
}

export const PRODUCTS: SecurityProduct[] = [
  {
    id: "exploitry",
    name: "Exploitry",
    tagline: "Bundle of tools made for exploitation, not explanation.",
    description:
      "Collection of security tools built for real exploitation work, testing, research and defensive workflows. Each tool targets a specific security problem.",
    category: "Tool",
    badge: "Exploitation Suite",
  },
  {
    id: "bugatlas",
    name: "BugAtlas",
    tagline: "Checklist mapped to reach real bugs, not random hunting.",
    description:
      "A structured checklist for practical vulnerability discovery, attack patterns and meaningful security issues.",
    category: "Tool",
    badge: "Vulnerability Discovery",
  },
  {
    id: "versage",
    name: "Versage",
    tagline: "Reverse engineering grounded in real behavior, not surface descriptions.",
    description:
      "A reverse-engineering guide focused on program behaviour, binary logic, vulnerabilities and execution flows.",
    category: "Tool",
    badge: "Reverse Engineering",
  },
  {
    id: "machinex",
    name: "Machinex",
    tagline: "Engineering security tools meant to run, not just exist.",
    description:
      "A roadmap for high-performance security tooling, including network I/O, modular code, reliability and efficiency.",
    category: "Tool",
    badge: "High-Performance Tooling",
  },
  {
    id: "kernelis",
    name: "Kernelis",
    tagline: "Understanding systems at the core, not the surface.",
    description:
      "Covers OS internals, kernel concepts, memory management, scheduling, interrupts, system calls and Ring 0 concepts.",
    category: "Tool",
    badge: "OS & Ring 0 Internals",
  },
  {
    id: "infectis",
    name: "Infectis",
    tagline: "Developing offensive malware as controlled systems, not samples.",
    description:
      "Covers malware-development concepts as controlled engineering systems, including execution, persistence, evasion, lateral movement, C2 and kernel techniques.",
    category: "Tool",
    badge: "Offensive Research",
  },
  {
    id: "darkx",
    name: "DarkX",
    tagline: "Dark Web OSINT tool built to discover leaked data, not just search it.",
    description:
      "Dark-web OSINT for identifying and analysing leaked information such as emails, usernames, domains and credentials, with correlation for threat analysis and breach investigation.",
    category: "Tool",
    badge: "Dark Web OSINT",
  },
  {
    id: "owasp-2026-lab",
    name: "OWASP 2026 Challenges / AI Security Training Lab",
    tagline: "Ten hands-on labs spanning the OWASP 2026 Agentic AI risk categories.",
    description:
      "An isolated simulated environment with a mock AI backend, tool dispatcher, memory layer and flag store. Learners work through ten vulnerable scenarios aligned to ASI-01 through ASI-10.",
    category: "Lab",
    badge: "Agentic AI Security",
    features: [
      "Web-Based Security Lab",
      "Linux Terminal",
      "AI-Integrated IDE",
      "OWASP 2026 Lab (10 simulations)",
      "Vulnerable App Playgrounds",
    ],
  },
]
