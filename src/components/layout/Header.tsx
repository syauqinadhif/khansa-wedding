'use client'

import { useState, useEffect } from 'react'
import { Monogram } from '@/components/ui/Monogram'
import { MobileMenu } from './MobileMenu'
import { useLang } from '@/contexts/LanguageContext'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { lang, toggleLang } = useLang()

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

          {/* Right side: Lang toggle + RSVP */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="font-body text-[10px] tracking-wider uppercase border border-charcoal/30 rounded-full px-2.5 py-1 text-charcoal hover:bg-charcoal hover:text-white transition-colors"
            >
              {lang === 'en' ? 'ID' : 'EN'}
            </button>
            <a
              href="#rsvp"
              className="font-body text-xs tracking-ultra-wide uppercase text-charcoal hover:text-gold transition-colors hidden sm:block"
            >
              RSVP
            </a>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
