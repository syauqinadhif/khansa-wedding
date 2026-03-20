'use client'

import { useState, useEffect } from 'react'
import { Monogram } from '@/components/ui/Monogram'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-1.5 p-1"
            aria-label="Open menu"
          >
            <span className="block w-6 h-px bg-charcoal" />
            <span className="block w-6 h-px bg-charcoal" />
          </button>

          {/* Center Monogram */}
          <a href="#hero">
            <Monogram size="sm" />
          </a>

          {/* RSVP Link */}
          <a
            href="#rsvp"
            className="font-body text-xs tracking-ultra-wide uppercase text-charcoal hover:text-gold transition-colors"
          >
            RSVP
          </a>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
