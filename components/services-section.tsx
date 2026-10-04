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

      {/* 6 Services Grid with Distinct Cards & Neat Spacing */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <ScrollReveal
              key={service.id}
              delay={index * 90}
              className="p-7 sm:p-8 flex flex-col justify-between items-start gap-6 bg-white rounded-2xl border border-[rgba(55,50,47,0.1)] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col gap-4 w-full">
                <div className="flex justify-between items-center w-full">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(55,50,47,0.04)] border border-[rgba(55,50,47,0.08)] flex items-center justify-center shadow-xs">
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
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#37322F] hover:gap-2 transition-all font-sans pt-3 border-t border-[rgba(55,50,47,0.08)] w-full"
              >
                <span>Talk to Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </ScrollReveal>
          ))}
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
