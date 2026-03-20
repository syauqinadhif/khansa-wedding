'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionNav } from '@/components/ui/SectionNav'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export function ItinerarySection() {
  return (
    <section id="itinerary" className="relative min-h-screen flex flex-col">
      {/* Background image with grayscale + dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/itinerary-bg.jpg"
          alt="Khansa & Izzar"
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
          all about our
        </motion.p>

        <motion.h2
          variants={fadeInUp}
          className="font-display text-display-lg md:text-display-xl text-white uppercase tracking-widest-plus mt-2"
        >
          Wedding
        </motion.h2>
        <motion.h2
          variants={fadeInUp}
          className="font-display text-display-lg md:text-display-xl text-white uppercase tracking-widest-plus"
        >
          Itinerary
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="font-body text-sm text-gray-light tracking-wider mt-8 max-w-xs leading-relaxed"
        >
          Here you may find all basic informations about the event.
        </motion.p>
      </motion.div>

      {/* Bottom nav */}
      <div className="relative z-10">
        <SectionNav
          prevLabel="Start"
          prevHref="#hero"
          nextLabel="Ceremony"
          nextHref="#ceremony"
          light
        />
      </div>
    </section>
  )
}
