'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '@/contexts/LanguageContext'

export function LoadingScreen() {
  const [isOpen, setIsOpen] = useState(true)
  const { t } = useLang()

  const handleOpen = () => {
    // Dispatch custom event so MusicPlayer can start playing
    window.dispatchEvent(new CustomEvent('invitation-opened'))
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-script text-script-md md:text-script-lg text-gold mb-4"
          >
            {t('loading.wedding')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-display text-7xl md:text-8xl lg:text-9xl tracking-widest-plus text-center"
          >
            <span className="font-semibold">K</span>
            <span className="mx-4 md:mx-5 text-gold font-light">+</span>
            <span className="font-semibold">I</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="font-display text-sm md:text-base tracking-ultra-wide uppercase text-gray mt-5"
          >
            Khansa & Izar
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="font-display text-sm md:text-base tracking-ultra-wide uppercase font-bold text-gold mt-4"
          >
            {t('loading.date')}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            onClick={handleOpen}
            className="mt-12 font-body text-sm md:text-base tracking-ultra-wide uppercase border border-charcoal/30 rounded-full px-10 py-3.5 text-charcoal hover:bg-charcoal hover:text-white transition-colors"
          >
            {t('loading.open')}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
