'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionNav } from '@/components/ui/SectionNav'
import { useLang } from '@/contexts/LanguageContext'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export function ItinerarySection() {
  const { t } = useLang()

  return (
    <section id="itinerary" className="relative min-h-screen flex flex-col">
      {/* Background image with grayscale + dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/itinerary-bg.jpg"
          alt="Khansa & Izar"
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center"
      >
        <motion.p
          variants={fadeInUp}
          className="font-script text-script-lg text-gold-light"
        >
          {t('itinerary.script')}
        </motion.p>

        <motion.h2
          variants={fadeInUp}
          className="font-display text-display-lg md:text-display-xl text-white uppercase tracking-widest-plus mt-2"
        >
          {t('itinerary.heading1')}
        </motion.h2>
        <motion.h2
          variants={fadeInUp}
          className="font-display text-display-lg md:text-display-xl text-white uppercase tracking-widest-plus"
        >
          {t('itinerary.heading2')}
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="font-body text-sm text-gray-light tracking-wider mt-8 max-w-xs leading-relaxed"
        >
          {t('itinerary.body')}
        </motion.p>
      </motion.div>

      {/* Bottom nav */}
      <div className="relative z-10">
        <SectionNav
          prevLabel={t('nav.couple')}
          prevHref="#couple"
          nextLabel={t('nav.ceremony')}
          nextHref="#ceremony"
          light
        />
      </div>
    </section>
  )
}
