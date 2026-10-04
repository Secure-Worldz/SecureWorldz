"use client"

import {
  Shield,
  Lock,
  Search,
  Globe,
  Eye,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Target,
  ShieldAlert,
  Activity,
  Sparkles,
} from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 md:py-28 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-12 sm:mb-16 flex flex-col justify-center items-center text-center">
        <ScrollReveal className="w-full max-w-[640px] flex flex-col justify-start items-center gap-4 text-center">
          {/* Badge */}
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-[90px] flex items-center gap-2 border border-[rgba(2,6,23,0.08)]">
            <Shield className="w-3.5 h-3.5 text-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">Cybersecurity Services</span>
          </div>

          <h2 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl font-normal font-serif tracking-tight leading-tight">
            Security Auditing & Defensive Operations
          </h2>
          <p className="text-[#605A57] text-sm sm:text-base font-normal leading-relaxed font-sans max-w-[540px]">
            End-to-end security assessment, continuous threat monitoring, and rapid incident response engineered to safeguard your systems and applications.
          </p>
        </ScrollReveal>
      </div>

      {/* Asymmetric Apple-Grade Bento Grid (Each Card Unique & Distinct) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Card 1: VAPT - Flagship Core Assessment (7 Cols) */}
          <ScrollReveal
            delay={0}
            direction="up"
            distance={20}
            className="lg:col-span-7 bg-white rounded-3xl border border-[rgba(55,50,47,0.08)] shadow-[0_4px_24px_rgba(55,50,47,0.04),inset_0_1px_0_0_rgba(255,255,255,0.9)] hover:shadow-[0_20px_40px_-10px_rgba(55,50,47,0.08)] hover:-translate-y-1 transition-all duration-300 p-7 sm:p-9 flex flex-col justify-between group"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 shadow-2xs group-hover:scale-105 transition-transform">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-rose-600 font-semibold block">
                      Core Assessment
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#1C1A18] font-medium tracking-tight">
                      VAPT
                    </h3>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-700 text-xs font-mono font-medium">
                  <span>CVSS 3.1 Severity Rating</span>
                </div>
              </div>

              <p className="text-sm sm:text-[15px] font-medium text-[#2F2B28] leading-snug font-sans mb-2">
                Vulnerability Assessment and Penetration Testing for digital infrastructure.
              </p>
              <p className="text-xs sm:text-sm text-[#605A57] leading-relaxed font-sans mb-6">
                Comprehensive automated vulnerability scanning combined with manual exploitation to identify, verify, and remediate technical security flaws before malicious adversaries exploit them.
              </p>

              {/* Visual Severity Breakdown Strip */}
              <div className="p-3.5 rounded-2xl bg-[#F7F5F3] border border-[rgba(55,50,47,0.06)] grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-6">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-[#82807C] uppercase">CRITICAL</span>
                  <span className="text-sm font-mono font-semibold text-emerald-600">0 Flaws</span>
                </div>
                <div className="flex flex-col border-l border-[rgba(55,50,47,0.08)] pl-2">
                  <span className="text-[10px] font-mono text-[#82807C] uppercase">HIGH</span>
                  <span className="text-sm font-mono font-semibold text-rose-600">Remediated</span>
                </div>
                <div className="flex flex-col border-l border-[rgba(55,50,47,0.08)] pl-2">
                  <span className="text-[10px] font-mono text-[#82807C] uppercase">MEDIUM</span>
                  <span className="text-sm font-mono font-semibold text-amber-600">Patched</span>
                </div>
                <div className="flex flex-col border-l border-[rgba(55,50,47,0.08)] pl-2">
                  <span className="text-[10px] font-mono text-[#82807C] uppercase">REPORT</span>
                  <span className="text-sm font-mono font-semibold text-[#1C1A18]">Audit Ready</span>
                </div>
              </div>

              {/* Deliverables tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1 rounded-lg bg-white border border-[rgba(55,50,47,0.08)] text-[11px] font-sans font-medium text-[#49423D] shadow-2xs">
                  Manual Red Team Triage
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-[rgba(55,50,47,0.08)] text-[11px] font-sans font-medium text-[#49423D] shadow-2xs">
                  PoC Exploit Demonstration
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-[rgba(55,50,47,0.08)] text-[11px] font-sans font-medium text-[#49423D] shadow-2xs">
                  Executive Remediation PDF
                </span>
              </div>
            </div>

            <a
              href="https://wa.me/917845088387?text=Hi%20SECUREWORLDZ%2C%20I%20would%20like%20to%20request%20a%20VAPT%20security%20assessment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full pt-4 border-t border-[rgba(55,50,47,0.08)] group/link"
            >
              <span className="text-xs sm:text-sm font-semibold text-[#1C1A18] group-hover/link:text-rose-600 transition-colors">
                Schedule VAPT Audit
              </span>
              <div className="w-8 h-8 rounded-full bg-[#F7F5F3] group-hover/link:bg-[#1C1A18] group-hover/link:text-white flex items-center justify-center transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </ScrollReveal>

          {/* Card 2: Penetration Testing - Adversarial Simulation (5 Cols) */}
          <ScrollReveal
            delay={90}
            direction="up"
            distance={20}
            className="lg:col-span-5 bg-white rounded-3xl border border-[rgba(55,50,47,0.08)] shadow-[0_4px_24px_rgba(55,50,47,0.04),inset_0_1px_0_0_rgba(255,255,255,0.9)] hover:shadow-[0_20px_40px_-10px_rgba(55,50,47,0.08)] hover:-translate-y-1 transition-all duration-300 p-7 sm:p-9 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shadow-2xs group-hover:scale-105 transition-transform">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-amber-600 font-semibold block">
                      Offensive Security
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#1C1A18] font-medium tracking-tight">
                      Penetration Testing
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-mono font-medium">
                  Adversary Ops
                </span>
              </div>

              <p className="text-sm sm:text-[15px] font-medium text-[#2F2B28] leading-snug font-sans mb-2">
                Simulated real-world cyberattacks against systems, networks, and cloud.
              </p>
              <p className="text-xs sm:text-sm text-[#605A57] leading-relaxed font-sans mb-5">
                Controlled offensive testing executing advanced adversary tactics, uncovering architectural flaws, privilege escalation, and lateral movement paths.
              </p>

              {/* Adversary Testing Scope Matrix (Clean Executive UI) */}
              <div className="p-3.5 rounded-2xl bg-[#F7F5F3] border border-[rgba(55,50,47,0.06)] grid grid-cols-2 gap-2 text-xs text-[#37322F] mb-6">
                <div className="p-2.5 rounded-xl bg-white border border-[rgba(55,50,47,0.08)] flex items-center gap-2 shadow-2xs">
                  <Target className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="font-medium text-[11px]">Active Directory & Cloud</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[rgba(55,50,47,0.08)] flex items-center gap-2 shadow-2xs">
                  <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="font-medium text-[11px]">Lateral Movement Paths</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[rgba(55,50,47,0.08)] flex items-center gap-2 shadow-2xs">
                  <Lock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="font-medium text-[11px]">Privilege Escalation Audit</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[rgba(55,50,47,0.08)] flex items-center gap-2 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#39F763] shrink-0" />
                  <span className="font-medium text-[11px]">Zero-Exfiltration Proof</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/917845088387?text=Hi%20SECUREWORLDZ%2C%20I%20want%20to%20commission%20a%20penetration%20test."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full pt-4 border-t border-[rgba(55,50,47,0.08)] group/link"
            >
              <span className="text-xs sm:text-sm font-semibold text-[#1C1A18] group-hover/link:text-amber-600 transition-colors">
                Simulate Attacks
              </span>
              <div className="w-8 h-8 rounded-full bg-[#F7F5F3] group-hover/link:bg-[#1C1A18] group-hover/link:text-white flex items-center justify-center transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </ScrollReveal>

          {/* Card 3: Security Auditing - Compliance & Risk (5 Cols) */}
          <ScrollReveal
            delay={140}
            direction="up"
            distance={20}
            className="lg:col-span-5 bg-white rounded-3xl border border-[rgba(55,50,47,0.08)] shadow-[0_4px_24px_rgba(55,50,47,0.04),inset_0_1px_0_0_rgba(255,255,255,0.9)] hover:shadow-[0_20px_40px_-10px_rgba(55,50,47,0.08)] hover:-translate-y-1 transition-all duration-300 p-7 sm:p-9 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shadow-2xs group-hover:scale-105 transition-transform">
                    <Search className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-sky-600 font-semibold block">
                      Compliance & Risk
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#1C1A18] font-medium tracking-tight">
                      Security Auditing
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-700 text-xs font-mono font-medium">
                  Audit Ready
                </span>
              </div>

              <p className="text-sm sm:text-[15px] font-medium text-[#2F2B28] leading-snug font-sans mb-2">
                Deep technical audits across configurations, policies, and architectures.
              </p>
              <p className="text-xs sm:text-sm text-[#605A57] leading-relaxed font-sans mb-5">
                Rigorous evaluations comparing your cybersecurity controls against modern baselines, identifying misconfigurations and compliance blind spots.
              </p>

              {/* Compliance Framework Checklist */}
              <div className="flex flex-col gap-2 p-3.5 rounded-2xl bg-[#F7F5F3] border border-[rgba(55,50,47,0.06)] mb-6 text-xs text-[#37322F]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span className="font-medium">OWASP 2026 AI Framework Alignment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span className="font-medium">ISO/IEC 27001 Security Baselines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span className="font-medium">Cloud IAM & Permission Hardening</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/917845088387?text=Hi%20SECUREWORLDZ%2C%20I%20need%20a%20compliance%20and%20security%20audit."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full pt-4 border-t border-[rgba(55,50,47,0.08)] group/link"
            >
              <span className="text-xs sm:text-sm font-semibold text-[#1C1A18] group-hover/link:text-sky-600 transition-colors">
                Start Technical Audit
              </span>
              <div className="w-8 h-8 rounded-full bg-[#F7F5F3] group-hover/link:bg-[#1C1A18] group-hover/link:text-white flex items-center justify-center transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </ScrollReveal>

          {/* Card 4: SOC Monitoring - Continuous Defense (7 Cols) */}
          <ScrollReveal
            delay={180}
            direction="up"
            distance={20}
            className="lg:col-span-7 bg-white rounded-3xl border border-[rgba(55,50,47,0.08)] shadow-[0_4px_24px_rgba(55,50,47,0.04),inset_0_1px_0_0_rgba(255,255,255,0.9)] hover:shadow-[0_20px_40px_-10px_rgba(55,50,47,0.08)] hover:-translate-y-1 transition-all duration-300 p-7 sm:p-9 flex flex-col justify-between group"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-2xs group-hover:scale-105 transition-transform">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-emerald-600 font-semibold block">
                      Continuous Defense
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#1C1A18] font-medium tracking-tight">
                      SOC Monitoring
                    </h3>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#39F763]/15 border border-[#39F763]/30 text-emerald-800 text-xs font-mono font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39F763] shadow-[0_0_6px_#39F763] animate-pulse" />
                  <span>24/7 Telemetry Triage</span>
                </div>
              </div>

              <p className="text-sm sm:text-[15px] font-medium text-[#2F2B28] leading-snug font-sans mb-2">
                24/7 Security Operations Center monitoring, telemetry analysis, and alert triage.
              </p>
              <p className="text-xs sm:text-sm text-[#605A57] leading-relaxed font-sans mb-6">
                Continuous surveillance of endpoint logs, network traffic, and cloud environments to detect indicators of compromise (IoCs) and neutralize threats immediately.
              </p>

              {/* Live Telemetry Sensor Bar */}
              <div className="p-3.5 rounded-2xl bg-[#F7F5F3] border border-[rgba(55,50,47,0.06)] grid grid-cols-3 gap-3 text-center mb-6">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-[#82807C] uppercase">THROUGHPUT</span>
                  <span className="text-sm font-mono font-semibold text-emerald-600">4,820 pkt/s</span>
                </div>
                <div className="flex flex-col border-l border-[rgba(55,50,47,0.08)] pl-2">
                  <span className="text-[10px] font-mono text-[#82807C] uppercase">ALERT SLA</span>
                  <span className="text-sm font-mono font-semibold text-[#1C1A18]">&lt; 5 Minutes</span>
                </div>
                <div className="flex flex-col border-l border-[rgba(55,50,47,0.08)] pl-2">
                  <span className="text-[10px] font-mono text-[#82807C] uppercase">STATUS</span>
                  <span className="text-sm font-mono font-semibold text-emerald-600">All Nodes Secure</span>
                </div>
              </div>

              {/* SIEM integration chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1 rounded-lg bg-white border border-[rgba(55,50,47,0.08)] text-[11px] font-sans font-medium text-[#49423D] shadow-2xs">
                  SIEM & Log Ingestion
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-[rgba(55,50,47,0.08)] text-[11px] font-sans font-medium text-[#49423D] shadow-2xs">
                  Endpoint EDR Sensors
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-[rgba(55,50,47,0.08)] text-[11px] font-sans font-medium text-[#49423D] shadow-2xs">
                  Threat Intelligence Feeds
                </span>
              </div>
            </div>

            <a
              href="https://wa.me/917845088387?text=Hi%20SECUREWORLDZ%2C%20I%20am%20interested%20in%2024%2F7%20SOC%20monitoring."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full pt-4 border-t border-[rgba(55,50,47,0.08)] group/link"
            >
              <span className="text-xs sm:text-sm font-semibold text-[#1C1A18] group-hover/link:text-emerald-600 transition-colors">
                Deploy SOC Surveillance
              </span>
              <div className="w-8 h-8 rounded-full bg-[#F7F5F3] group-hover/link:bg-[#1C1A18] group-hover/link:text-white flex items-center justify-center transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </ScrollReveal>

          {/* Card 5: Web & Application Security - Application Defense (6 Cols) */}
          <ScrollReveal
            delay={220}
            direction="up"
            distance={20}
            className="lg:col-span-6 bg-white rounded-3xl border border-[rgba(55,50,47,0.08)] shadow-[0_4px_24px_rgba(55,50,47,0.04),inset_0_1px_0_0_rgba(255,255,255,0.9)] hover:shadow-[0_20px_40px_-10px_rgba(55,50,47,0.08)] hover:-translate-y-1 transition-all duration-300 p-7 sm:p-9 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 shadow-2xs group-hover:scale-105 transition-transform">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-violet-600 font-semibold block">
                      Application Defense
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#1C1A18] font-medium tracking-tight">
                      Web & Application Security
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-700 text-xs font-mono font-medium">
                  API & App Guard
                </span>
              </div>

              <p className="text-sm sm:text-[15px] font-medium text-[#2F2B28] leading-snug font-sans mb-2">
                Full-lifecycle protection for web apps, APIs, microservices, and client platforms.
              </p>
              <p className="text-xs sm:text-sm text-[#605A57] leading-relaxed font-sans mb-5">
                Source code analysis, API vulnerability assessment, business logic flaw identification, and security hardening throughout development and deployment.
              </p>

              {/* Protocol Chips Matrix */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-lg bg-[#F7F5F3] border border-[rgba(55,50,47,0.06)] text-xs font-mono text-[#37322F]">
                  REST & GraphQL
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#F7F5F3] border border-[rgba(55,50,47,0.06)] text-xs font-mono text-[#37322F]">
                  OAuth 2.0 / JWT
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#F7F5F3] border border-[rgba(55,50,47,0.06)] text-xs font-mono text-[#37322F]">
                  SQLi & XSS Shield
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#F7F5F3] border border-[rgba(55,50,47,0.06)] text-xs font-mono text-[#37322F]">
                  Zero-Trust Architecture
                </span>
              </div>
            </div>

            <a
              href="https://wa.me/917845088387?text=Hi%20SECUREWORLDZ%2C%20I%20need%20application%20and%20API%20security%20testing."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full pt-4 border-t border-[rgba(55,50,47,0.08)] group/link"
            >
              <span className="text-xs sm:text-sm font-semibold text-[#1C1A18] group-hover/link:text-violet-600 transition-colors">
                Secure Applications
              </span>
              <div className="w-8 h-8 rounded-full bg-[#F7F5F3] group-hover/link:bg-[#1C1A18] group-hover/link:text-white flex items-center justify-center transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </ScrollReveal>

          {/* Card 6: Incident Response & Training - Breach Response (6 Cols) */}
          <ScrollReveal
            delay={260}
            direction="up"
            distance={20}
            className="lg:col-span-6 bg-white rounded-3xl border border-[rgba(55,50,47,0.08)] shadow-[0_4px_24px_rgba(55,50,47,0.04),inset_0_1px_0_0_rgba(255,255,255,0.9)] hover:shadow-[0_20px_40px_-10px_rgba(55,50,47,0.08)] hover:-translate-y-1 transition-all duration-300 p-7 sm:p-9 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shadow-2xs group-hover:scale-105 transition-transform">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-orange-600 font-semibold block">
                      Breach Response
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#1C1A18] font-medium tracking-tight">
                      Incident Response & Training
                    </h3>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-700 text-xs font-mono font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>&lt; 15m SLA</span>
                </div>
              </div>

              <p className="text-sm sm:text-[15px] font-medium text-[#2F2B28] leading-snug font-sans mb-2">
                Rapid containment of security breaches paired with workforce tactical training.
              </p>
              <p className="text-xs sm:text-sm text-[#605A57] leading-relaxed font-sans mb-5">
                Immediate breach containment, digital forensics investigation, threat eradication, and tabletop training programs to elevate organizational resilience.
              </p>

              {/* Breach Protocol Matrix */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-lg bg-[#F7F5F3] border border-[rgba(55,50,47,0.06)] text-xs font-mono text-[#37322F]">
                  Live Threat Containment
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#F7F5F3] border border-[rgba(55,50,47,0.06)] text-xs font-mono text-[#37322F]">
                  Root Cause Forensics
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#F7F5F3] border border-[rgba(55,50,47,0.06)] text-xs font-mono text-[#37322F]">
                  Crisis Roadmap
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#F7F5F3] border border-[rgba(55,50,47,0.06)] text-xs font-mono text-[#37322F]">
                  Tabletop Drills
                </span>
              </div>
            </div>

            <a
              href="https://wa.me/917845088387?text=Hi%20SECUREWORLDZ%2C%20we%20need%20incident%20response%20or%20crisis%20support."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full pt-4 border-t border-[rgba(55,50,47,0.08)] group/link"
            >
              <span className="text-xs sm:text-sm font-semibold text-[#1C1A18] group-hover/link:text-orange-600 transition-colors">
                Emergency Response SLA
              </span>
              <div className="w-8 h-8 rounded-full bg-[#F7F5F3] group-hover/link:bg-[#1C1A18] group-hover/link:text-white flex items-center justify-center transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </ScrollReveal>
        </div>
      </div>

      {/* Services Action Strip */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-12 sm:mt-16">
        <div className="w-full p-6 sm:p-7 rounded-2xl bg-white border border-[rgba(55,50,47,0.08)] shadow-xs flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-serif font-medium text-[#1C1A18]">
              Need a tailored penetration test, infrastructure audit, or SOC evaluation?
            </span>
            <span className="text-xs text-[#605A57] font-sans mt-0.5">
              Our principal engineers provide detailed scopes of work and NDA-backed consultations.
            </span>
          </div>
          <a
            href="https://wa.me/917845088387?text=Hi%20SECUREWORLDZ%2C%20I%20would%20like%20to%20discuss%20a%20security%20audit."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#181716] hover:bg-black text-white text-xs sm:text-sm font-medium rounded-full shadow-xs hover:border-[#39F763]/40 hover:shadow-[0_4px_16px_rgba(57,247,99,0.2)] border border-transparent transition-all font-sans shrink-0"
          >
            Talk to an Auditor
          </a>
        </div>
      </div>
    </section>
  )
}
