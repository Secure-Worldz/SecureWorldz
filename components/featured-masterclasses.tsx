"use client"

import Link from "next/link"
import { Youtube, Clock, ThumbsUp, Layers, PlayCircle, ArrowRight, Video } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function FeaturedMasterclasses() {
  const masterclasses = [
    {
      title: "How to do vibe hacking for free?",
      badge: "Upcoming Live Workshop",
      description: "A hands-on masterclass on AI prompt-driven experimentation, system boundary probing, and free security tools.",
      duration: "Live Interactive Session",
      likes: "October 30, 2026",
      topics: "5 Core Modules",
      highlight: "Free Community Access",
      link: "/workshops",
      isInternal: true,
    },
    {
      title: "VAPT & Web Security Practical Foundation",
      badge: "CyberJai YouTube Series",
      description: "Comprehensive walkthrough covering Burp Suite, SQL injection, XSS, and modern application attack vectors in English & Tamil.",
      duration: "6+ Hours Deep Dive",
      likes: "12k+ Views",
      topics: "OWASP Top 10",
      highlight: "Practical Lab Walkthrough",
      link: "https://youtube.com/@CyberJai",
      isInternal: false,
    },
    {
      title: "Linux & Network Defense for Cybersecurity",
      badge: "CyberJai YouTube Series",
      description: "From essential Linux system tools to packet inspection with Wireshark and automated triage scripts.",
      duration: "4+ Hours Tutorial",
      likes: "9.5k+ Views",
      topics: "Linux & Networking",
      highlight: "Zero-to-Hero Roadmap",
      link: "https://youtube.com/@CyberJai",
      isInternal: false,
    },
  ]

  return (
    <section id="masterclasses" className="w-full py-20 md:py-28 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-12 sm:mb-16 flex flex-col justify-center items-center text-center">
        <ScrollReveal className="w-full max-w-[620px] flex flex-col justify-start items-center gap-4 text-center">
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-[90px] flex items-center gap-2 border border-[rgba(2,6,23,0.08)]">
            <Video className="w-3.5 h-3.5 text-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">Free Masterclasses & Videos</span>
          </div>

          <h2 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl font-normal font-serif tracking-tight leading-tight">
            Learn at Your Own Pace
          </h2>
          <p className="text-[#605A57] text-sm sm:text-base font-normal leading-relaxed font-sans max-w-[540px]">
            Unlock free practical security tutorials and upcoming live workshops led by Cyber Jai on YouTube and community streams.
          </p>
        </ScrollReveal>
      </div>

      {/* 3 Masterclass Cards - Distinct Elevated Cards */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {masterclasses.map((cls, index) => (
            <ScrollReveal
              key={index}
              delay={index * 110}
              direction="up"
              distance={22}
              className="bg-white rounded-2xl border border-[rgba(55,50,47,0.1)] p-7 sm:p-8 flex flex-col justify-between items-start gap-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col gap-4 w-full">
                {/* Visual Video Card Preview */}
                <div className="w-full h-40 bg-[#1F1E1D] rounded-xl border border-[rgba(55,50,47,0.15)] p-4 flex flex-col justify-between text-white relative overflow-hidden group shadow-xs">
                  <div className="flex justify-between items-center z-10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                      SECUREWORLDZ FREE ACCESS
                    </span>
                    <Youtube className="w-4 h-4 text-red-500" />
                  </div>

                  <div className="z-10 flex items-center justify-center my-auto">
                    <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="z-10 flex justify-between items-center text-[10px] font-mono text-neutral-400 pt-1">
                    <span>{cls.highlight}</span>
                    <span>HD 1080P</span>
                  </div>

                  {/* Subtle pattern background */}
                  <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:12px_12px] opacity-30" />
                </div>

                {/* Badge & Title */}
                <div>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full font-sans inline-block mb-2 ${
                      cls.isInternal
                        ? "bg-[#39F763]/20 text-emerald-900 border border-[#39F763]/40"
                        : "bg-[rgba(55,50,47,0.06)] text-[#37322F]"
                    }`}
                  >
                    {cls.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif text-[#37322F] leading-snug font-medium">
                    {cls.title}
                  </h3>
                  <p className="text-xs text-[#605A57] font-sans leading-relaxed mt-1.5">
                    {cls.description}
                  </p>
                </div>

                {/* Metadata tags */}
                <div className="grid grid-cols-2 gap-2 text-[11px] text-[#49423D] font-sans p-3 bg-[#F7F5F3] rounded-xl border border-[rgba(55,50,47,0.08)]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#828387]" />
                    <span>{cls.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ThumbsUp className="w-3.5 h-3.5 text-[#828387]" />
                    <span>{cls.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2">
                    <Layers className="w-3.5 h-3.5 text-[#828387]" />
                    <span>{cls.topics}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              {cls.isInternal ? (
                <Link
                  href={cls.link}
                  className="w-full py-3 rounded-full bg-[#181716] hover:bg-[#39F763] hover:text-black text-white text-xs font-semibold font-sans flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <span>Explore Masterclass</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ) : (
                <a
                  href={cls.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-white hover:bg-neutral-50 text-[#37322F] border border-[rgba(55,50,47,0.15)] text-xs font-medium font-sans flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <span>Watch on YouTube</span>
                  <PlayCircle className="w-3.5 h-3.5" />
                </a>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
