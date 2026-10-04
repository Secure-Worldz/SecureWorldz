"use client"

import { PRODUCTS } from "@/lib/data/products"
import {
  Layers,
  Cpu,
  Database,
  Binary,
  ShieldAlert,
  Bug,
  Crosshair,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Code2,
} from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

function getProductIcon(id: string) {
  switch (id) {
    case "exploitry":
      return <Crosshair className="w-5 h-5 text-[#37322F] group-hover:text-[#39F763] transition-colors" />
    case "bugatlas":
      return <Bug className="w-5 h-5 text-[#37322F] group-hover:text-[#39F763] transition-colors" />
    case "versage":
      return <Binary className="w-5 h-5 text-[#37322F] group-hover:text-[#39F763] transition-colors" />
    case "machinex":
      return <Cpu className="w-5 h-5 text-[#37322F] group-hover:text-[#39F763] transition-colors" />
    case "kernelis":
      return <Layers className="w-5 h-5 text-[#37322F] group-hover:text-[#39F763] transition-colors" />
    case "infectis":
      return <ShieldAlert className="w-5 h-5 text-[#37322F] group-hover:text-[#39F763] transition-colors" />
    case "darkx":
      return <Database className="w-5 h-5 text-[#37322F] group-hover:text-[#39F763] transition-colors" />
    default:
      return <Code2 className="w-5 h-5 text-[#37322F] group-hover:text-[#39F763] transition-colors" />
  }
}

export default function ProductsSection() {
  const tools = PRODUCTS.filter((p) => p.category === "Tool")
  const lab = PRODUCTS.find((p) => p.category === "Lab")

  return (
    <section id="products" className="w-full py-20 md:py-28 relative overflow-hidden bg-[#F7F5F3] border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Background subtle radial glow matching Testimonials */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(55,50,47,0.03),transparent_60%)] pointer-events-none" />

      {/* Header Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-12 sm:mb-16 flex flex-col justify-center items-center text-center relative z-10">
        <ScrollReveal className="w-full max-w-[680px] flex flex-col justify-start items-center gap-4 text-center">
          {/* Badge */}
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-[90px] flex items-center gap-2 border border-[rgba(2,6,23,0.08)]">
            <Layers className="w-3.5 h-3.5 text-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">Software & Labs</span>
          </div>

          <h2 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl font-normal font-serif tracking-tight leading-tight">
            Security Tools & Training Labs
          </h2>
          <p className="text-[#605A57] text-sm sm:text-base font-normal leading-relaxed font-sans max-w-[560px]">
            Tools and Labs are grouped under Products. Built by practitioners for real exploitation workflows, systems research, OSINT, and cutting-edge Agentic AI safety.
          </p>
        </ScrollReveal>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Featured AI Lab Hero Block */}
        {lab && (
          <ScrollReveal
            direction="up"
            distance={20}
            className="w-full bg-white rounded-2xl border border-[rgba(55,50,47,0.1)] p-6 sm:p-8 md:p-10 shadow-xs hover:shadow-md transition-all duration-300 mb-8 sm:mb-10 group"
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#181716] text-[#39F763] text-[11px] font-semibold tracking-wide uppercase font-sans">
                    Flagship Lab
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[rgba(55,50,47,0.06)] text-[#37322F] text-[11px] font-medium font-sans flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#39F763]" />
                    OWASP 2026 ASI-01 to ASI-10
                  </span>
                </div>

                <h3 className="text-[#1C1A18] text-2xl sm:text-3xl font-serif font-medium tracking-tight">
                  {lab.name}
                </h3>
                <p className="text-[#2F2B28] text-sm sm:text-base font-medium font-sans">
                  {lab.tagline}
                </p>
                <p className="text-[#605A57] text-xs sm:text-sm font-normal leading-relaxed font-sans max-w-[620px]">
                  {lab.description}
                </p>

                {/* Lab features pill list */}
                {lab.features && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {lab.features.map((feat, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 bg-[#F7F5F3] border border-[rgba(55,50,47,0.08)] rounded-full text-[12px] font-medium text-[#37322F] flex items-center gap-1.5 shadow-2xs"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#39F763]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="w-full lg:w-auto flex flex-col gap-3 shrink-0">
                <a
                  href="https://wa.me/917845088387?text=Hi%20SECUREWORLDZ%2C%20I%20want%20to%20access%20the%20OWASP%202026%20AI%20Security%20Lab."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-[#181716] hover:bg-black text-white text-xs sm:text-sm font-medium rounded-full shadow-sm text-center border border-transparent hover:border-[#39F763]/40 hover:shadow-[0_4px_16px_rgba(57,247,99,0.2)] transition-all font-sans"
                >
                  Access AI Security Lab
                </a>
                <span className="text-[11px] text-[#82807C] text-center font-sans">
                  Isolated sandbox & tool dispatcher
                </span>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* 7 Tools in Clean Testimonials UI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
            const isLast = index === tools.length - 1 // DarkX
            return (
              <ScrollReveal
                key={tool.id}
                delay={index * 60}
                direction="up"
                distance={20}
                className={`w-full bg-white rounded-2xl p-6 sm:p-7 border border-[rgba(55,50,47,0.1)] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group ${
                  isLast ? "col-span-1 md:col-span-2 lg:col-span-3 md:flex-row md:items-center" : ""
                }`}
              >
                <div className={isLast ? "flex-1 md:pr-8" : ""}>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[rgba(55,50,47,0.04)] border border-[rgba(55,50,47,0.08)] flex items-center justify-center text-[#1C1A18] group-hover:bg-[#181716] transition-all shadow-xs">
                      {getProductIcon(tool.id)}
                    </div>
                    {tool.badge && (
                      <span className="px-2.5 py-1 rounded-full bg-[rgba(55,50,47,0.05)] text-[10px] font-sans font-semibold uppercase tracking-[0.14em] text-[#82807C]">
                        {tool.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-sans font-semibold text-[#1C1A18] tracking-tight group-hover:text-black transition-colors mb-1.5">
                    {tool.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#2F2B28] leading-snug font-sans mb-2">
                    "{tool.tagline}"
                  </p>
                  <p className="text-xs text-[#605A57] leading-relaxed font-sans">
                    {tool.description}
                  </p>
                </div>

                {/* Bottom Action Link with Divider */}
                <a
                  href={`https://wa.me/917845088387?text=Hi%20SECUREWORLDZ%2C%20I%20am%20interested%20in%20${encodeURIComponent(tool.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`pt-4 border-t border-[rgba(55,50,47,0.06)] flex items-center justify-between text-xs sm:text-sm font-semibold text-[#1C1A18] group-hover:text-black transition-colors ${
                    isLast ? "mt-6 md:mt-0 md:pt-0 md:border-t-0 md:border-l md:pl-8 shrink-0 md:flex-col md:justify-center md:gap-3" : "mt-6"
                  }`}
                >
                  <span>Talk to Us</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:text-[#39F763] transition-all" />
                </a>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
