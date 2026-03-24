'use client'

import { motion } from 'framer-motion'
import { Divider } from '@/components/ui/Divider'
import { SectionNav } from '@/components/ui/SectionNav'
import { useLang } from '@/contexts/LanguageContext'
import { staggerContainer, fadeInUp } from '@/lib/animations'

export function CoupleSection() {
  const { t } = useLang()

  return (
    <section
      id="couple"
      className="relative min-h-screen flex flex-col items-center bg-cream"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center flex-1 px-6 text-center"
      >
        {/* Bride */}
        <motion.div variants={fadeInUp} className="flex flex-col items-center">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl tracking-wide">
            Khansa Nabila Izzati, S.Si.
          </h2>
          <p className="font-body text-xs md:text-sm tracking-wider text-gray mt-3 italic">
            {t('couple.bride.parents')}
          </p>
        </motion.div>

        {/* Decorative separator */}
        <motion.div variants={fadeInUp} className="my-10 md:my-12 flex flex-col items-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            className="text-gold"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="currentColor"
            />
          </svg>
          <div className="w-12 h-px bg-gold/40 mt-3" />
        </motion.div>

        {/* Groom */}
        <motion.div variants={fadeInUp} className="flex flex-col items-center">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl tracking-wide">
            Moch. Imam Zarqoni, S.Kom
          </h2>
          <p className="font-body text-xs md:text-sm tracking-wider text-gray mt-3 italic">
            {t('couple.groom.parents')}
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom nav */}
      <SectionNav
        prevLabel={t('nav.start')}
        prevHref="#hero"
        nextLabel={t('nav.itinerary')}
        nextHref="#itinerary"
      />
    </section>
  )
}
