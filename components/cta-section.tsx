"use client"

import Link from "next/link"
import { ArrowRight, Shield } from "lucide-react"

export default function CTASection() {
  return (
    <section className="w-full relative overflow-hidden flex flex-col justify-center items-center gap-2">
      {/* Content */}
      <div className="self-stretch px-6 md:px-24 py-16 md:py-20 border-t border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6 relative z-10">
        {/* Background diagonal hatched lines from Brillance template */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="w-full h-full relative opacity-70">
            {Array.from({ length: 300 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-4 w-full rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                style={{
                  top: `${i * 16 - 120}px`,
                  left: "-100%",
                  width: "300%",
                }}
              />
            ))}
          </div>
        </div>

        <div className="w-full max-w-[620px] px-6 py-6 md:py-8 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-6 relative z-20 text-center">
          {/* Badge */}
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-[90px] flex items-center gap-2 border border-[rgba(2,6,23,0.08)]">
            <Shield className="w-3.5 h-3.5 text-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">Start Your Journey</span>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-[#37322F] text-3xl md:text-5xl font-serif font-normal tracking-tight leading-tight">
              Learn. Practice. Build.
            </h2>
            <p className="text-[#605A57] text-sm md:text-base leading-relaxed font-sans max-w-[500px] mx-auto">
              Explore SECUREWORLDZ courses, cybersecurity tools, practical labs, and the DRAGOZ community today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <Link
              href="/courses"
              className="px-7 py-3 bg-[#181716] hover:bg-black text-white text-xs sm:text-sm font-medium rounded-full shadow-xs hover:border-[#39F763]/40 hover:shadow-[0_4px_16px_rgba(57,247,99,0.2)] border border-transparent transition-all flex items-center gap-2 font-sans"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4 text-[#39F763]" />
            </Link>

            <a
              href="https://wa.me/917845088387?text=Hi%20SECUREWORLDZ%2C%20I%20would%20like%20to%20learn%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-white hover:bg-white/90 text-[#181716] text-xs sm:text-sm font-medium rounded-full border border-[rgba(55,50,47,0.15)] hover:border-[#39F763]/50 shadow-xs transition-all font-sans"
            >
              Talk to Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
