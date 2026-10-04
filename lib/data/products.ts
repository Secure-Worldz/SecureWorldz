export interface SecurityProduct {
  id: string
  name: string
  tagline: string
  description: string
  category: "Tool" | "Lab"
  features?: string[]
  badge?: string
  spec?: string
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
    spec: "Offensive Arsenal",
    features: [
      "Automated Fuzzing",
      "Payload Generators",
      "Heap Analysis",
      "Bypass Harness",
    ],
  },
  {
    id: "bugatlas",
    name: "BugAtlas",
    tagline: "Checklist mapped to reach real bugs, not random hunting.",
    description:
      "A structured checklist for practical vulnerability discovery, attack patterns and meaningful security issues.",
    category: "Tool",
    badge: "Vulnerability Discovery",
    spec: "Attack Taxonomy",
    features: [
      "OWASP Top 10 Mapping",
      "Business Logic Flaws",
      "Auth & Token Bypass",
      "Race Conditions",
    ],
  },
  {
    id: "versage",
    name: "Versage",
    tagline: "Reverse engineering grounded in real behavior, not surface descriptions.",
    description:
      "A reverse-engineering guide focused on program behaviour, binary logic, vulnerabilities and execution flows.",
    category: "Tool",
    badge: "Reverse Engineering",
    spec: "Binary Intelligence",
    features: [
      "Binary Disassembly",
      "Control Flow Graphs",
      "ELF & PE Analysis",
      "Execution Logic",
    ],
  },
  {
    id: "machinex",
    name: "Machinex",
    tagline: "Engineering security tools meant to run, not just exist.",
    description:
      "A roadmap for high-performance security tooling, including network I/O, modular code, reliability and efficiency.",
    category: "Tool",
    badge: "High-Performance Tooling",
    spec: "Systems Engine",
    features: [
      "Async Sockets & epoll",
      "Zero-Copy Memory",
      "Modular C++ & Rust",
      "Sub-ms Latency I/O",
    ],
  },
  {
    id: "kernelis",
    name: "Kernelis",
    tagline: "Understanding systems at the core, not the surface.",
    description:
      "Covers OS internals, kernel concepts, memory management, scheduling, interrupts, system calls and Ring 0 concepts.",
    category: "Tool",
    badge: "OS & Ring 0 Internals",
    spec: "Low-Level Kernel",
    features: [
      "Ring 0 Kernel Space",
      "Syscall Interception",
      "Memory Pages & IDT",
      "Device Driver Internals",
    ],
  },
  {
    id: "infectis",
    name: "Infectis",
    tagline: "Developing offensive malware as controlled systems, not samples.",
    description:
      "Covers malware-development concepts as controlled engineering systems, including execution, persistence, evasion, lateral movement, C2 and kernel techniques.",
    category: "Tool",
    badge: "Offensive Research",
    spec: "Adversary Systems",
    features: [
      "Process Injection",
      "EDR Evasion Vectors",
      "C2 Infrastructure",
      "Lateral Movement",
    ],
  },
  {
    id: "darkx",
    name: "DarkX",
    tagline: "Dark Web OSINT tool built to discover leaked data, not just search it.",
    description:
      "Dark-web OSINT for identifying and analysing leaked information such as emails, usernames, domains and credentials, with correlation for threat analysis and breach investigation.",
    category: "Tool",
    badge: "Dark Web OSINT",
    spec: "Autonomous Radar",
    features: [
      "Tor .onion Scraping",
      "Credential Leak Radar",
      "Identity Correlation",
      "Breach Threat Intel",
    ],
  },
  {
    id: "owasp-2026-lab",
    name: "OWASP 2026 Challenges / AI Security Training Lab",
    tagline: "Ten hands-on labs spanning the OWASP 2026 Agentic AI risk categories.",
    description:
      "An isolated simulated environment with a mock AI backend, tool dispatcher, memory layer and flag store. Learners work through ten vulnerable scenarios aligned to ASI-01 through ASI-10.",
    category: "Lab",
    badge: "Agentic AI Security",
    spec: "Flagship Lab",
    features: [
      "Web-Based Security Lab",
      "Linux Cloud Environment",
      "AI-Integrated IDE",
      "OWASP 2026 Lab (10 simulations)",
      "Vulnerable App Playgrounds",
    ],
  },
]
