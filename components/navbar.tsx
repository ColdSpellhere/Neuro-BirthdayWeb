"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "首页" },
  { href: "/participate", label: "参与" },
  { href: "/schedule", label: "日程" },
  { href: "/news", label: "新闻" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/10 shadow-[0_8px_30px_rgba(2,6,23,0.35)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group pr-2 sm:pr-0">
            <span className="leading-tight">
              <span className="font-display text-[15px] sm:text-lg font-bold text-pink-100 group-hover:text-white transition-colors">
                <span className="sm:hidden">Neuro-Sama 2026</span>
                <span className="hidden sm:inline">Neuro-Sama 2026年B站社群生日会</span>
              </span>
              <span className="hidden sm:flex items-center gap-2 text-[10px] tracking-[0.12em] text-slate-400 mt-0.5">
                <span className="status-dot" />
                官方纪念网站
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg transition-all font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                  pathname === item.href
                    ? "bg-gradient-to-r from-pink-500/30 to-cyan-400/20 text-pink-200 border border-pink-400/30 shadow-[0_0_18px_rgba(236,72,153,0.25)]"
                    : "text-gray-300 hover:text-pink-300 hover:bg-white/5"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/70"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            type="button"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Sidebar */}
      {isOpen && (
        <div id="mobile-navigation" className="md:hidden border-t border-white/10 bg-slate-950/90 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg transition-all font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/70",
                  pathname === item.href
                    ? "bg-gradient-to-r from-pink-500/30 to-cyan-400/20 text-pink-200 border border-pink-400/30"
                    : "text-gray-300 hover:text-pink-300 hover:bg-white/5"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
