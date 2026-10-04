"use client"

import { useState } from "react"
import { COURSES } from "@/lib/data/courses"
import { GraduationCap, Check, ArrowRight, Clock, Award, Users, BookOpen } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function CoursesSection() {
  const [selectedLevel, setSelectedLevel] = useState<"All" | "Beginner" | "Advanced">("All")

  const filteredCourses = selectedLevel === "All" 
    ? COURSES 
    : COURSES.filter((c) => c.level === selectedLevel)

  return (
    <section id="courses" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="self-stretch px-4 sm:px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center">
        <ScrollReveal className="w-full max-w-[620px] flex flex-col justify-start items-center gap-4 text-center">
          {/* Badge */}
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-[90px] flex items-center gap-2 border border-[rgba(2,6,23,0.08)]">
            <GraduationCap className="w-3.5 h-3.5 text-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">Training Programs</span>
          </div>

          <h2 className="text-[#37322F] text-2xl sm:text-3xl md:text-5xl font-normal font-serif tracking-tight leading-tight">
            From Beginner to Advanced
          </h2>
          <p className="text-[#605A57] text-sm sm:text-base font-normal leading-relaxed font-sans max-w-[540px]">
            Master ethical hacking, defensive security, forensics, and modern AI security through real-world labs, expert practitioner guidance, and verified certification.
          </p>
        </ScrollReveal>
      </div>

      {/* Filter / Toggle Pills */}
      <div className="self-stretch px-6 py-6 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center bg-white/30">
        <div className="p-1 bg-[rgba(55,50,47,0.06)] rounded-full flex items-center gap-1 border border-[rgba(55,50,47,0.08)]">
          {(["All", "Beginner", "Advanced"] as const).map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium font-sans transition-all ${
                selectedLevel === level
                  ? "bg-[#37322F] text-white shadow-xs"
                  : "text-[#605A57] hover:text-[#37322F]"
              }`}
            >
              {level === "All" ? "All Programs" : `${level} Level`}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Cards Section */}
      <div className="self-stretch flex justify-center items-start">
        {/* Left Decorative Hatch */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden md:block">
          <div className="w-[120px] left-[-40px] top-[-120px] absolute flex flex-col">
            {Array.from({ length: 150 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>

        {/* Course Cards Container */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
          {filteredCourses.map((course, index) => {
            const isFeatured = course.featured

            return (
              <ScrollReveal
                key={course.id}
                delay={index * 120}
                direction="up"
                className={`p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 border-[rgba(55,50,47,0.12)] transition-all duration-300 ${
                  isFeatured
                    ? "bg-[#37322F] text-white"
                    : "bg-white text-[#37322F] lg:border-r border-[rgba(55,50,47,0.12)]"
                }`}
              >
                <div className="flex flex-col gap-6">
                  {/* Top Bar */}
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-xs uppercase font-semibold px-3 py-1 rounded-full font-sans tracking-wide ${
                        isFeatured
                          ? "bg-white/15 text-white border border-white/20"
                          : "bg-[rgba(55,50,47,0.06)] text-[#37322F]"
                      }`}
                    >
                      {course.badge}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs">
                      <Clock className="w-3.5 h-3.5 opacity-70" />
                      <span className="font-sans font-medium">{course.duration}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3
                      className={`text-2xl sm:text-3xl font-serif mb-2 ${
                        isFeatured ? "text-white" : "text-[#37322F]"
                      }`}
                    >
                      {course.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm font-sans leading-relaxed ${
                        isFeatured ? "text-white/80" : "text-[#605A57]"
                      }`}
                    >
                      {course.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="py-2 border-y border-current/10 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-serif tracking-tight font-medium">
                      {course.price}
                    </span>
                    <span className={`text-xs font-sans ${isFeatured ? "text-white/70" : "text-[#828387]"}`}>
                      one-time enrollment fee
                    </span>
                  </div>

                  {/* Key Highlights */}
                  <div className="flex flex-wrap gap-3 py-1 text-xs font-sans">
                    <span className="flex items-center gap-1 opacity-90">
                      <BookOpen className="w-3.5 h-3.5" />
                      {course.format}
                    </span>
                    <span className="flex items-center gap-1 opacity-90">
                      <Award className="w-3.5 h-3.5" />
                      Certificate on Completion
                    </span>
                    <span className="flex items-center gap-1 opacity-90">
                      <Users className="w-3.5 h-3.5" />
                      DRAGOZ Community Access
                    </span>
                  </div>

                  {/* Curriculum Modules */}
                  <div className="flex flex-col gap-2.5 pt-2">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider font-sans ${
                        isFeatured ? "text-white/70" : "text-[#828387]"
                      }`}
                    >
                      Curriculum Modules ({course.modules.length}):
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans">
                      {course.modules.map((mod, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isFeatured ? "text-white" : "text-[#37322F]"}`} />
                          <span className={isFeatured ? "text-white/90" : "text-[#49423D]"}>{mod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Inclusions */}
                  <div className="flex flex-col gap-2 pt-2 border-t border-current/10">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider font-sans ${
                        isFeatured ? "text-white/70" : "text-[#828387]"
                      }`}
                    >
                      What's Included:
                    </span>
                    <ul className="flex flex-col gap-1.5 text-xs font-sans">
                      {course.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isFeatured ? "bg-white" : "bg-[#37322F]"}`} />
                          <span className={isFeatured ? "text-white/80" : "text-[#605A57]"}>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Enroll CTA */}
                <div className="pt-8">
                  <a
                    href={`https://wa.me/917845088387?text=Hi%20SECUREWORLDZ%2C%20I%20want%20to%20enroll%20in%20the%20${encodeURIComponent(course.title)}%20(${course.price}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-full flex justify-center items-center gap-2 text-xs sm:text-sm font-medium font-sans transition-all shadow-xs ${
                      isFeatured
                        ? "bg-white text-[#37322F] hover:bg-white/90"
                        : "bg-[#37322F] text-white hover:bg-[#201D1B]"
                    }`}
                  >
                    <span>Enroll Now ({course.price})</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Right Decorative Hatch */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden md:block">
          <div className="w-[120px] left-[-40px] top-[-120px] absolute flex flex-col">
            {Array.from({ length: 150 }).map((_, i) => (
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
