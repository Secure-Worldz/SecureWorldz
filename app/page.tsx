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
import AwardsRecognition from "../components/awards-recognition"
import FeaturedMasterclasses from "../components/featured-masterclasses"
import CareerGuidanceDialog from "../components/career-guidance-dialog"
import TestimonialsSection from "../components/testimonials-section"
import { ArrowRight, ArrowUpRight, Users, ShieldCheck, Terminal, Award, Sparkles, Shield } from "lucide-react"

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

const typewriterPhrases = [
  "Offensive Security Labs",
  "VAPT & Defense Protocols",
  "Zero-Day Vulnerability Research",
  "Agentic AI Security Audits",
  "Reverse Engineering & Exploits",
]

export default function LandingPage() {
  // Typewriter effect state
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter effect logic
  useEffect(() => {
    let timer: NodeJS.Timeout
    const currentPhrase = typewriterPhrases[phraseIndex]

    if (!isDeleting && displayedText === currentPhrase) {
      timer = setTimeout(() => {
        setIsDeleting(true)
      }, 1800)
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false)
      setPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length)
    } else {
      const speed = isDeleting ? 30 : 65
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? currentPhrase.substring(0, prev.length - 1)
            : currentPhrase.substring(0, prev.length + 1)
        )
      }, speed)
    }

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, phraseIndex])

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      {/* Scroll Progress Indicator along top edge */}
      <ScrollProgress />

      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Full-width container */}
        <div className="w-full relative flex flex-col justify-start items-center min-h-screen">
          <div className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center relative z-10 w-full">
            {/* Global Header Navigation */}
            <Header />

            {/* 4.1 Sevora-Inspired Hero Section */}
            <div className="w-full pt-6 sm:pt-10 md:pt-14 pb-14 sm:pb-20 px-3 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center justify-center relative overflow-hidden [background-image:repeating-linear-gradient(-45deg,rgba(55,50,47,0.035)_0,rgba(55,50,47,0.035)_1px,transparent_0,transparent_14px)] border-b border-[rgba(55,50,47,0.08)]">
              {/* Floating Sevora-Style Rounded Hero Container */}
              <ScrollReveal direction="up" distance={20} delay={50} className="w-full max-w-[1240px] mx-auto rounded-[28px] sm:rounded-[40px] md:rounded-[48px] bg-gradient-to-br from-[#F4F2EC] via-[#ECE9E3] to-[#E4E1DB] border border-[rgba(55,50,47,0.08)] shadow-[0_24px_60px_-15px_rgba(55,50,47,0.06)] p-6 sm:p-10 md:p-14 lg:p-16 relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Left Column (Headline, Typewriter, Subtitle, Buttons, 3-Stat Columns) */}
                  <div className="lg:col-span-7 flex flex-col justify-start items-start text-left">
                    {/* Dynamic Typewriter Pill */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#37322F]/10 shadow-xs text-xs font-mono text-[#37322F] mb-6">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[#37322F]/60">Hands-on:</span>
                      <span className="font-semibold text-[#37322F]">
                        {displayedText}
                        <span className="animate-pulse font-bold text-[#37322F] ml-0.5">|</span>
                      </span>
                    </div>

                    {/* Sevora Two-Tone Typography Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-serif font-normal leading-[1.04] tracking-tight text-[#1C1A18]">
                      Defend Better<br />
                      <span className="text-[#9E9B95]">Faster Smarter</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-[#605A57] text-sm sm:text-base md:text-[17px] font-sans leading-relaxed max-w-[480px] mt-5 mb-8">
                      Practical cybersecurity training, offensive tools, zero-day labs, and community built by people who build tech.
                    </p>

                    {/* Buttons Side by Side */}
                    <div className="flex flex-wrap items-center gap-3.5 mb-10 sm:mb-12">
                      <Link
                        href="/#courses"
                        className="h-12 px-8 bg-[#181716] hover:bg-black text-white text-xs sm:text-sm font-medium rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.18)] flex items-center justify-center gap-2 font-sans transition-all hover:scale-[1.02]"
                      >
                        <span>Explore Courses</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href="/#products"
                        className="h-12 px-8 bg-white/90 hover:bg-white text-[#181716] text-xs sm:text-sm font-medium rounded-full border border-[rgba(55,50,47,0.15)] shadow-xs flex items-center justify-center gap-2 font-sans transition-all hover:scale-[1.02]"
                      >
                        <span>View Products</span>
                      </Link>
                    </div>

                    {/* 3 Inline Stat Columns (Matching Sevora's "120+ / 8yr / 40+") */}
                    <div className="grid grid-cols-3 gap-6 sm:gap-8 pt-6 border-t border-[rgba(55,50,47,0.1)] w-full max-w-[480px]">
                      <div>
                        <span className="block font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1C1A18] tracking-tight">
                          5,000+
                        </span>
                        <span className="block text-xs sm:text-[13px] text-[#82807C] font-sans mt-1">
                          Students trained
                        </span>
                      </div>
                      <div>
                        <span className="block font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1C1A18] tracking-tight">
                          100+
                        </span>
                        <span className="block text-xs sm:text-[13px] text-[#82807C] font-sans mt-1">
                          Events partnered
                        </span>
                      </div>
                      <div>
                        <span className="block font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1C1A18] tracking-tight">
                          40K+
                        </span>
                        <span className="block text-xs sm:text-[13px] text-[#82807C] font-sans mt-1">
                          Community reach
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column (Without human photo: Interactive Cyber Console + Floating Glass Card) */}
                  {/* Right Column: Apple-Grade Floating Glassmorphic Cohort Card (Terminal Box Removed) */}
                  <div className="lg:col-span-5 flex flex-col justify-center items-center w-full h-full">
                    <div className="w-full rounded-[28px] sm:rounded-[36px] p-7 sm:p-9 md:p-10 bg-[#141416]/90 backdrop-blur-2xl border border-white/[0.08] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.14)] text-white flex flex-col justify-between gap-6 transition-all duration-300 hover:border-white/[0.14] group">
                      {/* Top Header with Status Badges */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-mono font-medium tracking-wide">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          <span>UPCOMING COHORT</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Enrolling Now</span>
                        </div>
                      </div>

                      {/* Main Copy */}
                      <div className="flex flex-col gap-2.5">
                        <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal tracking-tight leading-tight">
                          Available for enrollments
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-300/80 leading-relaxed font-sans">
                          Direct mentorship with Cyber Jai, weekly offensive CTFs, 10 OWASP AI simulation labs, and 24/7 DRAGOZ Discord exchange.
                        </p>
                      </div>

                      {/* Feature Tags (Apple-style translucent chips) */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        <span className="px-3 py-1 rounded-lg bg-white/[0.06] border border-white/[0.08] text-[11px] font-mono text-neutral-200">
                          OWASP 2026 Ready
                        </span>
                        <span className="px-3 py-1 rounded-lg bg-white/[0.06] border border-white/[0.08] text-[11px] font-mono text-neutral-200">
                          English & Tamil
                        </span>
                        <span className="px-3 py-1 rounded-lg bg-white/[0.06] border border-white/[0.08] text-[11px] font-mono text-neutral-200">
                          10 Hands-on Labs
                        </span>
                        <span className="px-3 py-1 rounded-lg bg-white/[0.06] border border-white/[0.08] text-[11px] font-mono text-neutral-200">
                          ₹499 Starter · ₹2,999 Advanced
                        </span>
                      </div>

                      {/* Bottom Action Row */}
                      <div className="flex items-center justify-between pt-5 border-t border-white/[0.08] mt-1">
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-white font-sans">
                            5,000+ Alumni Network
                          </span>
                          <span className="text-[11px] text-neutral-400 font-sans">
                            Recognized across 100+ events
                          </span>
                        </div>
                        <Link
                          href="/#courses"
                          className="w-12 h-12 rounded-2xl bg-white text-[#181716] flex items-center justify-center shrink-0 hover:bg-neutral-100 hover:scale-105 active:scale-95 transition-all shadow-md group/btn"
                          aria-label="View Courses"
                        >
                          <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Sevora-Style Logo Marquee Strip underneath the Hero Card */}
              <ScrollReveal direction="up" distance={16} delay={150} className="w-full max-w-[1240px] mx-auto mt-10 sm:mt-12 px-4">
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-8 opacity-75">
                  <div className="flex items-center gap-2 font-sans font-semibold text-sm sm:text-base text-[#37322F]">
                    <Shield className="w-4 h-4 text-[#37322F]" />
                    <span>Prathyusha</span>
                  </div>
                  <div className="flex items-center gap-2 font-sans font-semibold text-sm sm:text-base text-[#37322F]">
                    <ShieldCheck className="w-4 h-4 text-[#37322F]" />
                    <span>OWASP 2026</span>
                  </div>
                  <div className="flex items-center gap-2 font-sans font-semibold text-sm sm:text-base text-[#37322F]">
                    <Users className="w-4 h-4 text-[#37322F]" />
                    <span>DRAGOZ</span>
                  </div>
                  <div className="flex items-center gap-2 font-sans font-semibold text-sm sm:text-base text-[#37322F]">
                    <Sparkles className="w-4 h-4 text-[#37322F]" />
                    <span>CyberJai</span>
                  </div>
                  <div className="flex items-center gap-2 font-sans font-semibold text-sm sm:text-base text-[#37322F]">
                    <Terminal className="w-4 h-4 text-[#37322F]" />
                    <span>BugAtlas</span>
                  </div>
                  <div className="flex items-center gap-2 font-sans font-semibold text-sm sm:text-base text-[#37322F]">
                    <Award className="w-4 h-4 text-[#37322F]" />
                    <span>100+ Events</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* 4.4 Courses Section (Starter ₹499 & Advanced ₹2,999 - EMC Premier Programs style) */}
            <CoursesSection />

            {/* Student Review / Testimonials Section (EMC & User Image Reference) */}
            <TestimonialsSection />

            {/* 4.2 Services Section */}
            <ServicesSection />

            {/* 4.3 Products Section (7 Tools + OWASP 2026 Lab) */}
            <ProductsSection />

            {/* EMC-Style Awards & Recognition Grid */}
            <AwardsRecognition />

            {/* 4.7 Why Us Section (10 Core Pillars) */}
            <WhyUsSection />

            {/* 4.5 Community Section (EMC-style stats, Discord, Prathyusha Meetup & Bilingual badges) */}
            <CommunitySection />

            {/* EMC-Style Featured Masterclasses & Free Tutorials */}
            <FeaturedMasterclasses />

            {/* 4.6 Achievements Section (100+ events, 5,000+ students, 40K+ followers) */}
            <AchievementsSection />

            {/* EMC-Style Giant Typographic Watermark Strip */}
            <div className="w-full py-10 sm:py-16 overflow-hidden border-t border-b border-[#37322F]/10 flex items-center justify-center bg-white/40 select-none">
              <p className="font-serif text-[28px] xs:text-[38px] sm:text-[56px] md:text-[80px] lg:text-[104px] tracking-[0.2em] sm:tracking-[0.28em] md:tracking-[0.32em] text-[#37322F]/[0.08] font-bold uppercase text-center whitespace-nowrap">
                S E C U R E W O R L D Z
              </p>
            </div>

            {/* Closing Primary CTA Section (Learn. Practice. Build.) */}
            <CTASection />

            {/* Global Footer Section */}
            <FooterSection />
          </div>
        </div>
      </div>

      {/* Floating EMC-Style Career Counselor / WhatsApp Guidance Widget */}
      <CareerGuidanceDialog />
    </div>
  )
}
