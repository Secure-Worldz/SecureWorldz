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
    <section id="products" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="self-stretch px-4 sm:px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center">
        <ScrollReveal className="w-full max-w-[680px] flex flex-col justify-start items-center gap-4 text-center">
          {/* Badge */}
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-[90px] flex items-center gap-2 border border-[rgba(2,6,23,0.08)]">
            <Layers className="w-3.5 h-3.5 text-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">Software & Labs</span>
          </div>

          <h2 className="text-[#37322F] text-2xl sm:text-3xl md:text-5xl font-normal font-serif tracking-tight leading-tight">
            Security Tools & Training Labs
          </h2>
          <p className="text-[#605A57] text-sm sm:text-base font-normal leading-relaxed font-sans max-w-[560px]">
            Tools and Labs are grouped under Products. Built by practitioners for real exploitation workflows, systems research, OSINT, and cutting-edge Agentic AI safety.
          </p>
        </ScrollReveal>
      </div>

      {/* Featured AI Lab Hero Block */}
      {lab && (
        <div className="w-full border-b border-[rgba(55,50,47,0.12)] bg-white/70 p-6 sm:p-10 md:p-12">
          <ScrollReveal direction="up" distance={20} className="max-w-[960px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-[#181716] text-[#39F763] text-[11px] font-semibold tracking-wide uppercase font-sans">
                  Flagship Lab
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[rgba(55,50,47,0.06)] text-[#37322F] text-[11px] font-medium font-sans flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#39F763]" />
                  OWASP 2026 ASI-01 to ASI-10
                </span>
              </div>

              <h3 className="text-[#37322F] text-xl sm:text-2xl md:text-3xl font-serif">
                {lab.name}
              </h3>
              <p className="text-[#37322F] text-sm sm:text-base font-medium font-sans">
                {lab.tagline}
              </p>
              <p className="text-[#605A57] text-xs sm:text-sm font-normal leading-relaxed font-sans max-w-[620px]">
                {lab.description}
              </p>

              {/* Lab features pill list */}
              {lab.features && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {lab.features.map((feat, i) => (
                    <div
                      key={i}
                      className="px-3 py-1 bg-white border border-[rgba(55,50,47,0.12)] rounded-full text-[12px] font-medium text-[#49423D] flex items-center gap-1.5 shadow-xs"
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
                className="px-6 py-3 bg-[#181716] hover:bg-[#39F763] hover:text-black text-white text-xs sm:text-sm font-medium rounded-full shadow-sm text-center transition-all font-sans"
              >
                Access AI Security Lab
              </a>
              <span className="text-[11px] text-[#828387] text-center font-sans">
                Isolated sandbox & tool dispatcher
              </span>
            </div>
          </ScrollReveal>
        </div>
      )}

      {/* Connected Editorial Grid for the 7 Tools */}
      <div className="self-stretch flex justify-center items-start">
        {/* Left decorative hatch */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden sm:block">
          <div className="w-[120px] left-[-40px] top-[-120px] absolute flex flex-col">
            {Array.from({ length: 120 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>

        {/* 7 Tools in Clean Editorial Blocks */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
          {tools.map((tool, index) => (
            <ScrollReveal
              key={tool.id}
              delay={index * 60}
              className={`p-6 sm:p-8 flex flex-col justify-between items-start gap-4 border-b border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] hover:bg-white transition-all duration-300 group ${
                index % 3 !== 2 ? "lg:border-r border-[rgba(55,50,47,0.12)]" : ""
              } ${index % 2 === 0 ? "md:border-r lg:border-r-0 border-[rgba(55,50,47,0.12)]" : ""}`}
            >
              <div className="flex flex-col gap-3 w-full">
                <div className="flex justify-between items-center w-full">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[rgba(55,50,47,0.1)] flex items-center justify-center shadow-xs group-hover:bg-[#181716] group-hover:text-[#39F763] transition-all">
                    {getProductIcon(tool.id)}
                  </div>
                  {tool.badge && (
                    <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-[rgba(55,50,47,0.05)] text-[#49423D] group-hover:bg-[#181716] group-hover:text-[#39F763] transition-all font-sans">
                      {tool.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5 mt-1">
                  <h3 className="text-[#37322F] text-lg font-semibold font-sans group-hover:text-black transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-[#49423D] text-xs sm:text-sm font-medium leading-snug font-sans">
                    "{tool.tagline}"
                  </p>
                  <p className="text-[#605A57] text-xs leading-relaxed font-sans pt-1">
                    {tool.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[rgba(55,50,47,0.06)] w-full flex items-center justify-between text-xs font-semibold text-[#1C1A18] group-hover:text-black transition-colors font-sans mt-2">
                <a
                  href={`https://wa.me/917845088387?text=Hi%20SECUREWORLDZ%2C%20I%20am%20interested%20in%20${encodeURIComponent(tool.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full"
                >
                  <span>Talk to Us</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:text-[#39F763] transition-all" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Right decorative hatch */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden sm:block">
          <div className="w-[120px] left-[-40px] top-[-120px] absolute flex flex-col">
            {Array.from({ length: 120 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
