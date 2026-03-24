'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Monogram } from '@/components/ui/Monogram'
import { useLang } from '@/contexts/LanguageContext'
import { TranslationKey } from '@/lib/translations'

const NAV_ITEMS: { labelKey: TranslationKey; href: string }[] = [
  { labelKey: 'nav.start', href: '#hero' },
  { labelKey: 'nav.couple', href: '#couple' },
  { labelKey: 'nav.itinerary', href: '#itinerary' },
  { labelKey: 'nav.ceremony', href: '#ceremony' },
  { labelKey: 'nav.story', href: '#story' },
  { labelKey: 'nav.photos', href: '#photos' },
  { labelKey: 'nav.map', href: '#map' },
  { labelKey: 'nav.rsvp', href: '#rsvp' },
]

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useLang()

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-white"
        >
          <div className="flex flex-col items-center justify-center h-full">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-charcoal"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="2" y1="2" x2="18" y2="18" />
                <line x1="18" y1="2" x2="2" y2="18" />
              </svg>
            </button>

            <Monogram size="lg" className="mb-12" />

            <nav className="flex flex-col items-center gap-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="font-display text-xl tracking-widest-plus uppercase text-charcoal hover:text-gold transition-colors"
                >
                  {t(item.labelKey)}
                </motion.a>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
