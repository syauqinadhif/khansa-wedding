'use client'

import { motion } from 'framer-motion'
import { Divider } from '@/components/ui/Divider'
import { SectionNav } from '@/components/ui/SectionNav'
import { ScrollIndicator } from '@/components/ui/ScrollIndicator'
import { CountdownTimer } from '@/components/ui/CountdownTimer'
import { staggerContainer, fadeInUp } from '@/lib/animations'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-cream pt-20"
    >
      {/* Decorative corner borders - desktop only */}
      <div className="hidden md:block absolute top-24 left-12 w-16 h-16 border-l border-t border-gold/30" />
      <div className="hidden md:block absolute top-24 right-12 w-16 h-16 border-r border-t border-gold/30" />
      <div className="hidden md:block absolute bottom-12 left-12 w-16 h-16 border-l border-b border-gold/30" />
      <div className="hidden md:block absolute bottom-12 right-12 w-16 h-16 border-r border-b border-gold/30" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center flex-1 px-6"
      >
        {/* Monogram */}
        <motion.div variants={fadeInUp}>
          <div className="font-display text-6xl md:text-8xl text-center tracking-widest-plus">
            <span className="font-semibold">K</span>
            <span className="mx-3 md:mx-4 text-gold font-light">+</span>
            <span className="font-semibold">I</span>
          </div>
        </motion.div>

        {/* Full names */}
        <motion.p
          variants={fadeInUp}
          className="font-display text-sm md:text-base tracking-ultra-wide uppercase mt-6 text-gray-dark"
        >
          Khansa & Izzar
        </motion.p>

        {/* Divider */}
        <motion.div variants={fadeInUp}>
          <Divider className="mt-8 mb-10" />
        </motion.div>

        {/* Countdown */}
        <CountdownTimer />

        {/* Scroll indicator */}
        <motion.div variants={fadeInUp} className="mt-10">
          <ScrollIndicator />
        </motion.div>
      </motion.div>

      {/* Bottom section nav */}
      <SectionNav
        prevLabel="Start"
        prevHref="#hero"
        nextLabel="Itinerary"
        nextHref="#itinerary"
      />
    </section>
  )
}
