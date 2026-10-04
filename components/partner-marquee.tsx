"use client"

import { Award, ShieldCheck, Sparkles, Building2, GraduationCap } from "lucide-react"

export default function PartnerMarquee() {
  const partners = [
    { name: "Prathyusha Engineering College", type: "Institutional Partner", icon: <GraduationCap className="w-4 h-4" /> },
    { name: "National Cyber Defense Summit", type: "Event Sponsor", icon: <ShieldCheck className="w-4 h-4" /> },
    { name: "All-India Tech Symposium", type: "Workshop Partner", icon: <Award className="w-4 h-4" /> },
    { name: "University Hackathon Series", type: "Lab Partner", icon: <Sparkles className="w-4 h-4" /> },
    { name: "DRAGOZ Student Chapters", type: "Community Network", icon: <Building2 className="w-4 h-4" /> },
    { name: "Tamil Nadu Tech Conclave", type: "Sponsorship Partner", icon: <Award className="w-4 h-4" /> },
    { name: "AI & Security Hackfest 2026", type: "Keynote & Lab Host", icon: <ShieldCheck className="w-4 h-4" /> },
  ]

  // Duplicate for seamless infinite scroll
  const marqueeItems = [...partners, ...partners, ...partners]

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] bg-white/40 py-6 overflow-hidden flex flex-col items-center justify-center relative">
      <div className="text-[11px] uppercase tracking-widest text-[#828387] font-sans font-semibold mb-3 flex items-center gap-2">
        <span>Where We Have Partnered & Sponsored</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#37322F]" />
        <span>100+ National Events</span>
      </div>

      {/* Marquee Track with CSS Animation */}
      <div className="w-full overflow-hidden relative flex mask-gradient">
        <div className="flex items-center gap-6 whitespace-nowrap animate-marquee">
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-2 bg-white rounded-full border border-[rgba(55,50,47,0.12)] shadow-xs shrink-0"
            >
              <div className="w-6 h-6 rounded-full bg-[rgba(55,50,47,0.06)] flex items-center justify-center text-[#37322F]">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-[#37322F] font-sans">
                  {item.name}
                </span>
                <span className="text-[10px] text-[#828387] font-sans">
                  {item.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
