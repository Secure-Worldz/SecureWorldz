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
    <section id="achievements" className="w-full py-20 md:py-28 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-12 sm:mb-16 flex flex-col justify-center items-center text-center">
        <ScrollReveal className="w-full max-w-[620px] flex flex-col justify-start items-center gap-4 text-center">
          {/* Badge */}
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-[90px] flex items-center gap-2 border border-[rgba(2,6,23,0.08)]">
            <Trophy className="w-3.5 h-3.5 text-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">Our Track Record</span>
          </div>

          <h2 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl font-normal font-serif tracking-tight leading-tight">
            Impact in Numbers
          </h2>
          <p className="text-[#605A57] text-sm sm:text-base font-normal leading-relaxed font-sans max-w-[540px]">
            Real results driven by a commitment to practical education, industry engagement, and open community sharing.
          </p>
        </ScrollReveal>
      </div>

      {/* 3 Metric Columns - Distinct Elevated Cards */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal
              key={index}
              delay={index * 130}
              direction="up"
              distance={24}
              className="bg-white rounded-2xl border border-[rgba(55,50,47,0.1)] p-8 sm:p-10 flex flex-col justify-between items-start gap-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F7F5F3] border border-[rgba(55,50,47,0.08)] flex items-center justify-center text-[#37322F] group-hover:bg-[#37322F] group-hover:text-white transition-colors duration-300">
                {stat.icon}
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#37322F] font-medium tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[#37322F] text-lg font-semibold font-sans">
                  {stat.label}
                </span>
                <p className="text-[#605A57] text-xs leading-relaxed font-sans">
                  {stat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
