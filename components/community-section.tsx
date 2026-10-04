"use client"

import { MessageSquare, Users, Sparkles, MapPin, Calendar, ArrowRight, Languages, Trophy, Shield } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function CommunitySection() {
  const communityStats = [
    { label: "DRAGOZ Members", value: "300+", desc: "Active cybersecurity learners & interns" },
    { label: "Students Reached", value: "5,000+", desc: "Trained across community workshops" },
    { label: "Social Media Reach", value: "40K+", desc: "Engaged cybersecurity audience" },
    { label: "Events Partnered", value: "100+", desc: "Colleges & conferences sponsored" },
  ]

  return (
    <section id="community" className="w-full py-20 md:py-28 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-12 sm:mb-16 flex flex-col justify-center items-center text-center">
        <ScrollReveal className="w-full max-w-[660px] flex flex-col justify-start items-center gap-4 text-center">
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-[90px] flex items-center gap-2 border border-[rgba(2,6,23,0.08)]">
            <Sparkles className="w-3.5 h-3.5 text-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">DRAGOZ Collective</span>
          </div>

          <h2 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl font-normal font-serif tracking-tight leading-tight">
            Join a Growing Cybersecurity Movement
          </h2>
          <p className="text-[#605A57] text-sm sm:text-base font-normal leading-relaxed font-sans max-w-[560px]">
            Our vibrant community shares tools, solves real-world CTFs, conducts Discord intern sessions, and hosts campus meetups across English & Tamil.
          </p>
        </ScrollReveal>
      </div>

      {/* Community Metrics Grid - Distinct Elevated Cards */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-10 sm:mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {communityStats.map((stat, i) => (
            <ScrollReveal
              key={i}
              delay={i * 70}
              direction="up"
              distance={16}
              className="bg-white rounded-2xl border border-[rgba(55,50,47,0.1)] p-6 sm:p-7 flex flex-col items-center text-center shadow-xs hover:shadow-md transition-all duration-300"
            >
              <span className="text-3xl sm:text-4xl font-serif text-[#37322F] font-medium tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-[#37322F] font-sans mt-2">
                {stat.label}
              </span>
              <span className="text-[11px] text-[#828387] font-sans mt-1">
                {stat.desc}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* 3 Community Pillars - Distinct Cards */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Discord Interaction */}
          <ScrollReveal
            delay={0}
            direction="up"
            distance={20}
            className="bg-white rounded-2xl border border-[rgba(55,50,47,0.1)] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F7F5F3] border border-[rgba(55,50,47,0.08)] flex items-center justify-center text-[#37322F] group-hover:bg-[#37322F] group-hover:text-white transition-colors duration-300">
                <MessageSquare className="w-5 h-5" />
              </div>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#828387] font-sans">
                  Always-On Support
                </span>
                <h3 className="text-xl font-serif text-[#37322F] mt-1 mb-2 font-medium">
                  Discord & Peer Exchange
                </h3>
                <p className="text-xs text-[#605A57] font-sans leading-relaxed">
                  Intern interaction sessions through Discord, daily tool discussion, CTF problem walkthroughs, and defensive workflow reviews.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://wa.me/917845088387?text=Hi%20SECUREWORLDZ%2C%20I%20want%20to%20join%20the%20DRAGOZ%20cybersecurity%20community."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#37322F] hover:gap-2 transition-all font-sans"
              >
                <span>Join DRAGOZ Discord</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </ScrollReveal>

          {/* Card 2: Offline Meetup (Prathyusha Eng College) */}
          <ScrollReveal
            delay={100}
            direction="up"
            distance={20}
            className="bg-white rounded-2xl border border-[rgba(55,50,47,0.1)] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F7F5F3] border border-[rgba(55,50,47,0.08)] flex items-center justify-center text-[#37322F] group-hover:bg-[#37322F] group-hover:text-white transition-colors duration-300">
                <Users className="w-5 h-5" />
              </div>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#828387] font-sans">
                  Offline Campus Meetup
                </span>
                <h3 className="text-xl font-serif text-[#37322F] mt-1 mb-2 font-medium">
                  Meetup 2026 @ Prathyusha
                </h3>
                <div className="flex flex-col gap-1.5 text-xs text-[#49423D] font-sans mb-3">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#828387]" />
                    <span>Prathyusha Engineering College, Tiruvallur</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#828387]" />
                    <span>3 September 2026</span>
                  </div>
                </div>
                <p className="text-xs text-[#605A57] font-sans leading-relaxed">
                  Full-day practical workshop showcasing live penetration testing, student project showcases, and team networking.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <span className="text-[11px] text-[#828387] font-sans italic">
                * Real student feedback featured directly from cohorts.
              </span>
            </div>
          </ScrollReveal>

          {/* Card 3: Bilingual Support (English & Tamil) */}
          <ScrollReveal
            delay={200}
            direction="up"
            distance={20}
            className="bg-white rounded-2xl border border-[rgba(55,50,47,0.1)] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F7F5F3] border border-[rgba(55,50,47,0.08)] flex items-center justify-center text-[#37322F] group-hover:bg-[#37322F] group-hover:text-white transition-colors duration-300">
                <Languages className="w-5 h-5" />
              </div>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#828387] font-sans">
                  Bilingual Education
                </span>
                <h3 className="text-xl font-serif text-[#37322F] mt-1 mb-2 font-medium">
                  English & Tamil Learning
                </h3>
                <p className="text-xs text-[#605A57] font-sans leading-relaxed">
                  Complex cybersecurity concepts explained with crystal-clear native language examples, breaking technical jargon down into actionable engineering instincts.
                </p>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded-full bg-[#F7F5F3] border border-[rgba(55,50,47,0.08)] text-[10px] font-medium text-[#49423D] font-sans">
                Tamil Explanations
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#F7F5F3] border border-[rgba(55,50,47,0.08)] text-[10px] font-medium text-[#49423D] font-sans">
                English Standards
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#F7F5F3] border border-[rgba(55,50,47,0.08)] text-[10px] font-medium text-[#49423D] font-sans">
                Global Certifications
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
