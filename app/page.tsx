"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Header from "../components/header"
import ScrollProgress from "../components/scroll-progress"
import { ScrollReveal } from "../components/scroll-reveal"
import ServicesSection from "../components/services-section"
import ProductsSection from "../components/products-section"
import CoursesSection from "../components/courses-section"
import AchievementsSection from "../components/achievements-section"
import WhyUsSection from "../components/why-us-section"
import CommunitySection from "../components/community-section"
import CTASection from "../components/cta-section"
import FooterSection from "../components/footer-section"
import { ArrowRight, Users } from "lucide-react"

// Reusable Badge Component adhering to Brillance styling
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

export default function LandingPage() {
  const [activeCard, setActiveCard] = useState(0)
  const [progress, setProgress] = useState(0)
  const mountedRef = useRef(true)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (!mountedRef.current) return

      setProgress((prev) => {
        if (prev >= 100) {
          if (mountedRef.current) {
            setActiveCard((current) => (current + 1) % 3)
          }
          return 0
        }
        return prev + 2 // 2% every 100ms = 5s
      })
    }, 100)

    return () => {
      clearInterval(progressInterval)
      mountedRef.current = false
    }
  }, [])

  useEffect(() => {
    return () => {
      mountedRef.current = false
    }
  }, [])

  const handleCardClick = (index: number) => {
    if (!mountedRef.current) return
    setActiveCard(index)
    setProgress(0)
  }

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      {/* Scroll Progress Indicator along top edge */}
      <ScrollProgress />

      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Main container with Brillance margins and vertical guide lines */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical guideline */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none" />

          {/* Right vertical guideline */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none" />

          <div className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center relative z-10 w-full">
            {/* Global Header Navigation */}
            <Header />

            {/* 4.1 Hero Section */}
            <div className="pt-8 sm:pt-12 md:pt-16 lg:pt-[100px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full">
              {/* Trust Badge */}
              <ScrollReveal direction="down" distance={16} delay={50} className="mb-4 sm:mb-6">
                <Badge
                  icon={<Users className="w-3.5 h-3.5 text-[#37322F]" />}
                  text="5,000+ students trained through community events"
                />
              </ScrollReveal>

              {/* Hero Headings */}
              <ScrollReveal direction="up" distance={24} delay={100} className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <div className="self-stretch flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6">
                  <h1 className="w-full max-w-[820px] text-center text-[#37322F] text-[28px] xs:text-[34px] sm:text-[44px] md:text-[60px] lg:text-[76px] font-normal leading-[1.08] sm:leading-[1.12] md:leading-[1.15] font-serif px-2">
                    Products Built by People Who Build Tech
                  </h1>
                  <p className="w-full max-w-[620px] text-center text-[rgba(55,50,47,0.85)] text-sm sm:text-base md:text-lg leading-[1.5] font-sans px-2">
                    Cybersecurity training, tools, labs, services and community for students and clients.
                  </p>
                </div>
              </ScrollReveal>

              {/* Hero CTAs */}
              <ScrollReveal direction="up" distance={20} delay={200} className="w-full max-w-[500px] flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 relative z-10 mt-6 sm:mt-8">
                {/* Primary CTA */}
                <Link
                  href="/#courses"
                  className="w-full sm:w-auto h-11 px-7 bg-[#37322F] hover:bg-[#201D1B] text-white text-xs sm:text-[13px] font-medium rounded-full shadow-[0px_1px_2px_rgba(55,50,47,0.15)] flex justify-center items-center gap-2 font-sans transition-colors"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Secondary CTA */}
                <Link
                  href="/#products"
                  className="w-full sm:w-auto h-11 px-7 bg-white hover:bg-white/80 text-[#37322F] text-xs sm:text-[13px] font-medium rounded-full border border-[rgba(55,50,47,0.15)] shadow-xs flex justify-center items-center gap-2 font-sans transition-colors"
                >
                  <span>View Products</span>
                </Link>
              </ScrollReveal>

              {/* Background decorative pattern */}
              <div className="absolute top-[232px] sm:top-[248px] md:top-[264px] lg:top-[300px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
                <img
                  src="/mask-group-pattern.svg"
                  alt=""
                  className="w-[936px] sm:w-[1404px] md:w-[2106px] lg:w-[2808px] h-auto opacity-30 sm:opacity-40 md:opacity-50 mix-blend-multiply"
                  style={{
                    filter: "hue-rotate(15deg) saturate(0.7) brightness(1.2)",
                  }}
                />
              </div>

              {/* Cybersecurity Interface Preview (Black & White style) */}
              <ScrollReveal direction="up" distance={30} delay={250} className="w-full max-w-[960px] lg:w-[960px] pt-4 sm:pt-6 pb-6 px-2 sm:px-4 md:px-6 lg:px-11 flex flex-col justify-center items-center relative z-5 my-8 sm:my-10">
                <div className="w-full h-[240px] sm:h-[320px] md:h-[460px] lg:h-[520px] bg-[#1E1E1E] text-white shadow-[0px_4px_24px_rgba(0,0,0,0.12)] border border-[rgba(55,50,47,0.2)] rounded-[8px] sm:rounded-[10px] overflow-hidden flex flex-col">
                  {/* Mock Terminal Header */}
                  <div className="w-full h-9 bg-[#2A2A2A] px-4 flex items-center justify-between border-b border-[#333]">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#555]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#555]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#555]" />
                      <span className="text-[11px] font-mono text-neutral-400 pl-2">
                        secureworldz@terminal ~ {activeCard === 0 ? "products-and-labs" : activeCard === 1 ? "telemetry-and-services" : "training-curriculum"}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                      SECUREWORLDZ LAB OS
                    </span>
                  </div>

                  {/* Terminal Screen Body */}
                  <div className="flex-1 p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-hidden flex flex-col justify-between bg-[#191919]">
                    {activeCard === 0 && (
                      <div className="flex flex-col gap-3">
                        <div className="text-neutral-400 text-xs">$ ./launch-ecosystem.sh --all-products</div>
                        <div className="text-white text-xs sm:text-sm font-semibold">
                          [+] Exploitry: Security exploitation tools loaded.
                        </div>
                        <div className="text-neutral-300 text-xs">
                          [+] BugAtlas: Practical vulnerability discovery checklist active.
                        </div>
                        <div className="text-neutral-300 text-xs">
                          [+] Versage & Machinex: Binary reverse-engineering & tooling initialized.
                        </div>
                        <div className="text-neutral-300 text-xs">
                          [+] Kernelis & Infectis: OS internals, Ring 0 and controlled C2 simulations online.
                        </div>
                        <div className="p-3 bg-[#242424] rounded border border-neutral-700 mt-2">
                          <span className="text-neutral-200 font-bold">[FLAGSHIP LAB]</span>{" "}
                          <span className="text-neutral-300">OWASP 2026 AI Security Lab: 10 Agentic scenarios (ASI-01 to ASI-10) ready.</span>
                        </div>
                      </div>
                    )}

                    {activeCard === 1 && (
                      <div className="flex flex-col gap-3">
                        <div className="text-neutral-400 text-xs">$ swz-soc-telemetry --status --live</div>
                        <div className="text-white text-xs sm:text-sm font-semibold">
                          [*] VAPT & Security Auditing Engine: Active
                        </div>
                        <div className="text-neutral-300 text-xs">
                          [*] SOC Surveillance: Monitoring network endpoints and application traffic.
                        </div>
                        <div className="text-neutral-300 text-xs">
                          [*] Incident Response Protocol: Ready for zero-day containment.
                        </div>
                        <div className="p-3 bg-[#242424] rounded border border-neutral-700 mt-2">
                          <span className="text-neutral-200 font-bold">[ASSESSMENT REPORT]</span>{" "}
                          <span className="text-neutral-300">Auditing configurations, cloud permissions, and API boundaries.</span>
                        </div>
                      </div>
                    )}

                    {activeCard === 2 && (
                      <div className="flex flex-col gap-3">
                        <div className="text-neutral-400 text-xs">$ swz-academy --list-courses --active</div>
                        <div className="text-white text-xs sm:text-sm font-semibold">
                          &gt; Cybersecurity Starter Program (₹499) — 7-Day Hands-on Foundation
                        </div>
                        <div className="text-neutral-300 text-xs">
                          &gt; Advanced Cybersecurity Course (₹2,999) — 10 Practical Modules + Capstone
                        </div>
                        <div className="text-neutral-300 text-xs">
                          &gt; Community: DRAGOZ Collective (300+ Members, Discord Interactions)
                        </div>
                        <div className="p-3 bg-[#242424] rounded border border-neutral-700 mt-2">
                          <span className="text-neutral-200 font-bold">[METHODOLOGY]</span>{" "}
                          <span className="text-neutral-300">Learn. Practice. Build. | Real labs, verifiable skills, recognized certification.</span>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between items-center text-[11px] text-neutral-500 pt-3 border-t border-neutral-800">
                      <span>Status: ONLINE</span>
                      <span>SECUREWORLDZ PRO ENVIRONMENT</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* 3 Interactive Feature Tabs underneath Hero Preview */}
              <ScrollReveal direction="up" distance={16} delay={300} className="self-stretch border-t border-[#E0DEDB] border-b border-[#E0DEDB] flex justify-center items-start">
                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden sm:block">
                  <div className="w-[120px] left-[-40px] top-[-120px] absolute flex flex-col">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex-1 px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
                  <FeatureTab
                    title="Tools & Labs"
                    description="Exploitry, BugAtlas, Versage, DarkX, and the OWASP 2026 AI Security Lab."
                    isActive={activeCard === 0}
                    progress={activeCard === 0 ? progress : 0}
                    onClick={() => handleCardClick(0)}
                  />
                  <FeatureTab
                    title="Security Services"
                    description="VAPT, penetration testing, security auditing, and 24/7 SOC incident response."
                    isActive={activeCard === 1}
                    progress={activeCard === 1 ? progress : 0}
                    onClick={() => handleCardClick(1)}
                  />
                  <FeatureTab
                    title="Practical Training"
                    description="Starter & Advanced programs with hands-on labs, capstones, and community access."
                    isActive={activeCard === 2}
                    progress={activeCard === 2 ? progress : 0}
                    onClick={() => handleCardClick(2)}
                  />
                </div>

                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden sm:block">
                  <div className="w-[120px] left-[-40px] top-[-120px] absolute flex flex-col">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* 4.2 Services Section */}
              <ServicesSection />

              {/* 4.3 Products Section (7 Tools + OWASP 2026 Lab) */}
              <ProductsSection />

              {/* 4.4 Courses Section (Starter ₹499 & Advanced ₹2,999) */}
              <CoursesSection />

              {/* 4.5 Community & Student Feedback (Respecting Blank Fictional Testimonials Brief) */}
              <CommunitySection />

              {/* 4.6 Achievements Section (100+ events, 5,000+ students, 40K+ followers) */}
              <AchievementsSection />

              {/* 4.7 Why Us Section (10 Core Pillars) */}
              <WhyUsSection />

              {/* Closing Primary CTA Section (Learn. Practice. Build.) */}
              <CTASection />

              {/* Global Footer Section */}
              <FooterSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureTab({
  title,
  description,
  isActive,
  progress,
  onClick,
}: {
  title: string
  description: string
  isActive: boolean
  progress: number
  onClick: () => void
}) {
  return (
    <div
      className={`w-full md:flex-1 px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 last:border-b-0 transition-colors ${
        isActive
          ? "bg-white shadow-[0px_0px_0px_0.75px_#E0DEDB_inset]"
          : "border-l-0 border-r-0 md:border border-[#E0DEDB]/80 hover:bg-white/50"
      }`}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute top-0 left-0 w-full h-0.5 bg-[rgba(50,45,43,0.08)]">
          <div
            className="h-full bg-[#322D2B] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm font-semibold leading-6 font-sans">
        {title}
      </div>
      <div className="self-stretch text-[#605A57] text-[13px] font-normal leading-[22px] font-sans">
        {description}
      </div>
    </div>
  )
}
