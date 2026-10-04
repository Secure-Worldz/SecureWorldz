"use client"

import { MessageSquare, Users, Sparkles, MapPin, Calendar, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function CommunitySection() {
  return (
    <section id="community" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="self-stretch px-4 sm:px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center">
        <ScrollReveal className="w-full max-w-[620px] flex flex-col justify-start items-center gap-4 text-center">
          {/* Badge */}
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-[90px] flex items-center gap-2 border border-[rgba(2,6,23,0.08)]">
            <Sparkles className="w-3.5 h-3.5 text-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">DRAGOZ Collective</span>
          </div>

          <h2 className="text-[#37322F] text-2xl sm:text-3xl md:text-5xl font-normal font-serif tracking-tight leading-tight">
            A Community Built Around Cybersecurity
          </h2>
          <p className="text-[#605A57] text-sm sm:text-base font-normal leading-relaxed font-sans max-w-[540px]">
            Join 300+ students, interns, and ethical hackers collaborating through daily problem-solving, Discord workshops, and offline meetups.
          </p>
        </ScrollReveal>
      </div>

      {/* Community Feature Spotlight */}
      <div className="self-stretch flex justify-center items-start">
        {/* Left decorative hatch */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden sm:block">
          <div className="w-[120px] left-[-40px] top-[-120px] absolute flex flex-col">
            {Array.from({ length: 60 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>

        {/* Community details */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
          {/* Card 1: Discord Interaction & Daily Learning */}
          <ScrollReveal
            delay={0}
            direction="up"
            distance={20}
            className="p-6 sm:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] hover:bg-white transition-all duration-300"
          >
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-white border border-[rgba(55,50,47,0.1)] flex items-center justify-center shadow-xs">
                <MessageSquare className="w-5 h-5 text-[#37322F]" />
              </div>

              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#828387] font-sans">
                  Active Member Base
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[#37322F] mt-1 mb-2">
                  300+ DRAGOZ Members
                </h3>
                <p className="text-xs sm:text-sm text-[#605A57] font-sans leading-relaxed">
                  Direct peer support, intern interaction sessions through Discord, security tool troubleshooting, and live bug bounty tips shared across English & Tamil.
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
                <span>Join DRAGOZ Community</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </ScrollReveal>

          {/* Card 2: Recent Landmark Meetup */}
          <ScrollReveal
            delay={120}
            direction="up"
            distance={20}
            className="p-6 sm:p-10 flex flex-col justify-between border-b md:border-b-0 border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] hover:bg-white transition-all duration-300"
          >
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-white border border-[rgba(55,50,47,0.1)] flex items-center justify-center shadow-xs">
                <Users className="w-5 h-5 text-[#37322F]" />
              </div>

              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#828387] font-sans">
                  Recent Offline Meetup
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[#37322F] mt-1 mb-2">
                  DRAGOZ Community Meetup 2026
                </h3>
                <div className="flex flex-col gap-1 text-xs text-[#49423D] font-sans mb-3">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#828387]" />
                    <span>Prathyusha Engineering College, Tiruvallur</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#828387]" />
                    <span>3 September 2026</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#605A57] font-sans leading-relaxed">
                  Full-day practical workshop showcasing live penetration testing, VAPT workflows, hands-on student lab challenges, and engineering team networking.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <span className="text-[11px] text-[#828387] font-sans italic">
                * Note: Authentic student feedback from upcoming cohorts will be published here directly from our community.
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Right decorative hatch */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden sm:block">
          <div className="w-[120px] left-[-40px] top-[-120px] absolute flex flex-col">
            {Array.from({ length: 60 }).map((_, i) => (
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
