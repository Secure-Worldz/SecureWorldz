"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Products", href: "/#products" },
    { name: "Courses", href: "/courses" },
    { name: "Workshops", href: "/workshops" },
    { name: "Blogs", href: "/blogs" },
    { name: "Community", href: "/#community" },
  ]

  return (
    <header className="w-full h-14 sm:h-16 md:h-20 lg:h-[84px] relative flex justify-center items-center z-40 px-4 sm:px-6 md:px-8">
      {/* Floating Pill Container */}
      <div className="w-full max-w-5xl h-11 sm:h-12 py-1 sm:py-1.5 px-3 sm:px-4 bg-[#F7F5F3]/95 backdrop-blur-md shadow-[0px_0px_0px_2px_white,0px_4px_12px_rgba(0,0,0,0.04)] rounded-[50px] flex justify-between items-center relative z-30 border border-[rgba(55,50,47,0.08)]">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 pl-2">
          <span className="text-[#2F3037] text-sm sm:text-base font-semibold tracking-tight font-sans">
            SECUREWORLDZ
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[rgba(49,45,43,0.80)] hover:text-[#2F3037] text-xs md:text-[13px] font-medium leading-[14px] font-sans transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://wa.me/917845088387?text=Hi%20SECUREWORLDZ%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses%20and%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-4 py-1.5 bg-[#37322F] hover:bg-[#201D1B] text-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] rounded-full flex justify-center items-center text-xs sm:text-[13px] font-medium font-sans transition-colors"
          >
            Talk to Us
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-[#37322F] hover:bg-[rgba(55,50,47,0.06)] rounded-full transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[calc(100%+8px)] left-4 right-4 bg-[#F7F5F3] border border-[rgba(55,50,47,0.12)] shadow-[0px_8px_24px_rgba(0,0,0,0.08)] rounded-2xl p-4 flex flex-col gap-3 z-50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#37322F] hover:bg-[rgba(55,50,47,0.05)] px-3 py-2 rounded-lg text-sm font-medium font-sans transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-[rgba(55,50,47,0.1)] flex justify-between items-center text-xs text-[#605A57] px-2">
            <span>secureworld628@gmail.com</span>
            <span>+91 7845088387</span>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
