"use client"

import { Trophy, Users, Award, Radio } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function AchievementsSection() {
  const stats = [
    {
      value: "100+",
      label: "National-Level Events",
      description: "Sponsored and partnered across engineering colleges, conferences, and technical symposiums.",
      icon: <Award className="w-5 h-5 text-[#37322F]" />,
    },
    {
      value: "5,000+",
      label: "Students Trained",
      description: "Empowered through hands-on cybersecurity workshops, interactive labs, and community events.",
      icon: <Users className="w-5 h-5 text-[#37322F]" />,
    },
    {
      value: "40K+",
      label: "Social Media Followers",
      description: "Growing community of aspiring cybersecurity analysts, ethical hackers, and security engineers.",
      icon: <Radio className="w-5 h-5 text-[#37322F]" />,
    },
  ]

  return (
    <section id="achievements" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="self-stretch px-4 sm:px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center">
        <ScrollReveal className="w-full max-w-[620px] flex flex-col justify-start items-center gap-4 text-center">
          {/* Badge */}
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-[90px] flex items-center gap-2 border border-[rgba(2,6,23,0.08)]">
            <Trophy className="w-3.5 h-3.5 text-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">Our Track Record</span>
          </div>

          <h2 className="text-[#37322F] text-2xl sm:text-3xl md:text-5xl font-normal font-serif tracking-tight leading-tight">
            Impact in Numbers
          </h2>
          <p className="text-[#605A57] text-sm sm:text-base font-normal leading-relaxed font-sans max-w-[540px]">
            Real results driven by a commitment to practical education, industry engagement, and open community sharing.
          </p>
        </ScrollReveal>
      </div>

      {/* Stats Grid */}
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

        {/* 3 Metric Columns */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
          {stats.map((stat, index) => (
            <ScrollReveal
              key={index}
              delay={index * 130}
              direction="up"
              distance={24}
              className={`p-8 sm:p-10 flex flex-col justify-between items-start gap-6 border-b md:border-b-0 border-[rgba(55,50,47,0.12)] hover:bg-white transition-all duration-300 ${
                index < 2 ? "md:border-r" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-[rgba(55,50,47,0.1)] flex items-center justify-center shadow-xs">
                {stat.icon}
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#37322F] font-medium tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[#37322F] text-base font-semibold font-sans">
                  {stat.label}
                </span>
                <p className="text-[#605A57] text-xs leading-relaxed font-sans">
                  {stat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
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
