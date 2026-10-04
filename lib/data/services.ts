export interface SecurityService {
  id: string
  title: string
  shortDescription: string
  details: string
  badge: string
}

export const SERVICES: SecurityService[] = [
  {
    id: "vapt",
    title: "VAPT",
    shortDescription: "Vulnerability Assessment and Penetration Testing for digital infrastructure.",
    details:
      "Comprehensive vulnerability scanning combined with expert manual penetration testing to identify, evaluate, and remediate technical security flaws before malicious adversaries exploit them.",
    badge: "Core Assessment",
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing",
    shortDescription: "Simulated real-world cyberattacks against systems, networks, and applications.",
    details:
      "Controlled offensive testing executing advanced adversary tactics, uncovering architectural flaws, privilege escalation avenues, and data exfiltration pathways.",
    badge: "Offensive Security",
  },
  {
    id: "security-auditing",
    title: "Security Auditing",
    shortDescription: "Deep technical audits across configurations, policies, and system architectures.",
    details:
      "Rigorous evaluations comparing your cybersecurity controls against modern industry baselines, identifying misconfigurations and compliance blind spots.",
    badge: "Compliance & Risk",
  },
  {
    id: "web-app-security",
    title: "Web & Application Security",
    shortDescription: "Full-lifecycle protection for web apps, APIs, microservices, and client platforms.",
    details:
      "Source code analysis, API vulnerability assessment, business logic flaw identification, and security hardening throughout development and production environments.",
    badge: "Application Defense",
  },
  {
    id: "soc-monitoring",
    title: "SOC Monitoring",
    shortDescription: "24/7 Security Operations Center monitoring, telemetry analysis, and alert triage.",
    details:
      "Continuous surveillance of endpoint logs, network traffic, and cloud environments to detect indicators of compromise (IoCs) and neutralize threats immediately.",
    badge: "Continuous Defense",
  },
  {
    id: "incident-response",
    title: "Incident Response & Training",
    shortDescription: "Rapid containment of security breaches paired with workforce tactical training.",
    details:
      "Rapid breach containment, digital forensics investigation, threat eradication, and specialized training programs to elevate internal team resilience.",
    badge: "Breach Response",
  },
]
