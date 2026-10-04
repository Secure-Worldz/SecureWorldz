"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import FooterSection from "@/components/footer-section"
import CTASection from "@/components/cta-section"
import ScrollProgress from "@/components/scroll-progress"
import { ScrollReveal } from "@/components/scroll-reveal"
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/data/blogs"
import { BookOpen, User, ArrowRight, Tag } from "lucide-react"

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <ScrollProgress />

      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Main container with Brillance layout borders */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical guideline */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none" />

          {/* Right vertical guideline */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none" />

          <div className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center relative z-10 w-full">
            <Header />

            {/* Header Banner */}
            <div className="pt-10 sm:pt-14 pb-8 sm:pb-12 flex flex-col justify-start items-center px-4 w-full border-b border-[rgba(55,50,47,0.12)]">
              <ScrollReveal className="w-full max-w-[700px] flex flex-col justify-center items-center gap-4 text-center">
                <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-[90px] flex items-center gap-2 border border-[rgba(2,6,23,0.08)]">
                  <BookOpen className="w-3.5 h-3.5 text-[#37322F]" />
                  <span className="text-[#37322F] text-xs font-medium font-sans">
                    Cybersecurity & AI Publication
                  </span>
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-6xl font-normal font-serif tracking-tight leading-tight">
                  Knowledge & Field Notes
                </h1>
                <p className="text-[#605A57] text-sm sm:text-base leading-relaxed font-sans max-w-[540px]">
                  Technical breakdowns, career guides, AI safety research, and hands-on perspectives from the SECUREWORLDZ engineering team.
                </p>

                {/* Search Bar */}
                <div className="w-full max-w-[420px] mt-2">
                  <input
                    type="text"
                    placeholder="Search articles, topics, keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-[rgba(55,50,47,0.15)] rounded-full text-xs sm:text-sm font-sans placeholder:text-[#828387] focus:outline-none focus:border-[#37322F] shadow-xs transition-colors"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Category Filter Pills */}
            <div className="w-full px-4 sm:px-8 py-5 border-b border-[rgba(55,50,47,0.12)] bg-white/40 flex justify-center items-center overflow-x-auto">
              <div className="flex items-center gap-1.5 flex-wrap justify-center">
                {BLOG_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium font-sans whitespace-nowrap transition-all ${
                      selectedCategory === category
                        ? "bg-[#37322F] text-white shadow-xs"
                        : "text-[#605A57] hover:text-[#37322F] hover:bg-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Grid (9 Articles) */}
            <div className="w-full flex justify-center items-start">
              {/* Left decorative hatch */}
              <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden sm:block">
                <div className="w-[120px] left-[-40px] top-[-120px] absolute flex flex-col">
                  {Array.from({ length: 180 }).map((_, i) => (
                    <div
                      key={i}
                      className="self-stretch h-3 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                    />
                  ))}
                </div>
              </div>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
                {filteredPosts.map((post, index) => (
                  <ScrollReveal
                    key={post.id}
                    delay={index * 60}
                    direction="up"
                    distance={20}
                    className={`p-6 sm:p-8 flex flex-col justify-between items-start gap-6 border-b border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] hover:bg-white transition-all duration-300 ${
                      index % 3 !== 2 ? "lg:border-r" : ""
                    } ${index % 2 === 0 ? "md:border-r lg:border-r-0" : ""}`}
                  >
                    <div className="flex flex-col gap-4 w-full">
                      {/* Meta badge & Read Time */}
                      <div className="flex justify-between items-center w-full">
                        <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-[rgba(55,50,47,0.06)] text-[#37322F] font-sans">
                          {post.category}
                        </span>
                        <span className="text-[11px] text-[#828387] font-sans">
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title & Excerpt */}
                      <div className="flex flex-col gap-2">
                        <Link href={`/blogs/${post.slug}`}>
                          <h2 className="text-[#37322F] text-lg sm:text-xl font-semibold font-sans hover:underline leading-snug line-clamp-2">
                            {post.title}
                          </h2>
                        </Link>
                        <p className="text-[#605A57] text-xs sm:text-[13px] leading-relaxed font-sans line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {post.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] text-[#828387] bg-white border border-[rgba(55,50,47,0.08)] px-2 py-0.5 rounded-full font-sans flex items-center gap-1"
                          >
                            <Tag className="w-2.5 h-2.5" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Author & Read More Footer */}
                    <div className="pt-4 border-t border-[rgba(55,50,47,0.06)] w-full flex justify-between items-center">
                      <div className="flex items-center gap-1.5 text-xs text-[#605A57] font-sans">
                        <User className="w-3.5 h-3.5 text-[#37322F]" />
                        <span>{post.author}</span>
                      </div>

                      <Link
                        href={`/blogs/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#37322F] hover:gap-1.5 transition-all font-sans"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </ScrollReveal>
                ))}

                {filteredPosts.length === 0 && (
                  <div className="col-span-full p-12 text-center text-[#605A57] font-sans">
                    No articles found matching your criteria.
                  </div>
                )}
              </div>

              {/* Right decorative hatch */}
              <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden sm:block">
                <div className="w-[120px] left-[-40px] top-[-120px] absolute flex flex-col">
                  {Array.from({ length: 180 }).map((_, i) => (
                    <div
                      key={i}
                      className="self-stretch h-3 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Closing CTA */}
            <CTASection />

            {/* Footer */}
            <FooterSection />
          </div>
        </div>
      </div>
    </div>
  )
}
