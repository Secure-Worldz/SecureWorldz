"use client"

import { SERVICES } from "@/lib/data/services"
import { Shield, Lock, Search, Globe, Eye, AlertTriangle, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

function getServiceIcon(id: string) {
  switch (id) {
    case "vapt":
      return <Shield className="w-5 h-5 text-[#37322F]" />
    case "penetration-testing":
      return <Lock className="w-5 h-5 text-[#37322F]" />
    case "security-auditing":
      return <Search className="w-5 h-5 text-[#37322F]" />
    case "web-app-security":
      return <Globe className="w-5 h-5 text-[#37322F]" />
    case "soc-monitoring":
      return <Eye className="w-5 h-5 text-[#37322F]" />
    case "incident-response":
      return <AlertTriangle className="w-5 h-5 text-[#37322F]" />
    default:
      return <Shield className="w-5 h-5 text-[#37322F]" />
  }
}

export default function ServicesSection() {
  return (
    <section id="services" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="self-stretch px-4 sm:px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center">
        <ScrollReveal className="w-full max-w-[640px] flex flex-col justify-start items-center gap-4 text-center">
          {/* Badge */}
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-[90px] flex items-center gap-2 border border-[rgba(2,6,23,0.08)]">
            <Shield className="w-3.5 h-3.5 text-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">Cybersecurity Services</span>
          </div>

          <h2 className="text-[#37322F] text-2xl sm:text-3xl md:text-5xl font-normal font-serif tracking-tight leading-tight">
            Security Auditing & Defensive Operations
          </h2>
          <p className="text-[#605A57] text-sm sm:text-base font-normal leading-relaxed font-sans max-w-[540px]">
            End-to-end security assessment, continuous threat monitoring, and rapid incident response engineered to safeguard your systems and applications.
          </p>
        </ScrollReveal>
      </div>

      {/* Services Grid with Brillance borders */}
      <div className="self-stretch flex justify-center items-start">
        {/* Left decorative hatch */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden sm:block">
          <div className="w-[120px] left-[-40px] top-[-120px] absolute flex flex-col">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
          {SERVICES.map((service, index) => (
            <ScrollReveal
              key={service.id}
              delay={index * 90}
              className={`p-6 sm:p-8 flex flex-col justify-between items-start gap-6 border-b border-[rgba(55,50,47,0.12)] hover:bg-white transition-all duration-300 ${
                index % 3 !== 2 ? "lg:border-r" : ""
              } ${index % 2 === 0 ? "md:border-r lg:border-r-0" : ""}`}
            >
              <div className="flex flex-col gap-4 w-full">
                <div className="flex justify-between items-center w-full">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[rgba(55,50,47,0.1)] flex items-center justify-center shadow-xs">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-[rgba(55,50,47,0.05)] text-[#49423D]">
                    {service.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-[#37322F] text-lg font-semibold font-sans mb-1.5">{service.title}</h3>
                  <p className="text-[#49423D] text-xs sm:text-sm font-medium leading-relaxed font-sans mb-2">
                    {service.shortDescription}
                  </p>
                  <p className="text-[#605A57] text-xs leading-relaxed font-sans">
                    {service.details}
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/917845088387?text=Hi%20SECUREWORLDZ%2C%20I%20am%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#37322F] hover:gap-2 transition-all font-sans pt-2 border-t border-[rgba(55,50,47,0.06)] w-full"
              >
                <span>Talk to Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Right decorative hatch */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden sm:block">
          <div className="w-[120px] left-[-40px] top-[-120px] absolute flex flex-col">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Services Action Strip */}
      <div className="w-full py-5 px-6 bg-white/40 border-b border-[rgba(55,50,47,0.08)] flex flex-col sm:flex-row justify-center items-center gap-4 text-center sm:text-left">
        <span className="text-xs sm:text-sm text-[#49423D] font-sans">
          Need a tailored penetration test, infrastructure audit, or SOC evaluation?
        </span>
        <a
          href="https://wa.me/917845088387?text=Hi%20SECUREWORLDZ%2C%20I%20would%20like%20to%20discuss%20a%20security%20audit."
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1.5 bg-[#37322F] hover:bg-[#201D1B] text-white text-xs font-medium rounded-full shadow-xs transition-colors font-sans"
        >
          Talk to Us
        </a>
      </div>
    </section>
  )
}
