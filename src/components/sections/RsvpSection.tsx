'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Divider } from '@/components/ui/Divider'
import { SectionNav } from '@/components/ui/SectionNav'
import { WEDDING } from '@/lib/constants'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export function RsvpSection() {
  return (
    <section id="rsvp" className="min-h-screen flex flex-col items-center bg-cream">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center flex-1 px-6 text-center"
      >
        {/* Script heading */}
        <motion.p
          variants={fadeInUp}
          className="font-script text-script-xl text-gold"
        >
          join us!
        </motion.p>

        {/* RSVP heading */}
        <motion.h2
          variants={fadeInUp}
          className="font-display text-display-xl uppercase tracking-widest-plus font-medium mt-2"
        >
          RSVP
        </motion.h2>

        {/* Deadline */}
        <motion.p
          variants={fadeInUp}
          className="font-body text-xs tracking-ultra-wide uppercase text-gray-dark mt-8"
        >
          Please reply by {WEDDING.rsvp.deadline}.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <Divider className="my-8" />
        </motion.div>

        {/* Reply button */}
        <motion.div variants={fadeInUp}>
          <Button href="#rsvp-form">Reply Now</Button>
        </motion.div>

        {/* Wedding date */}
        <motion.div variants={fadeInUp} className="mt-16">
          <p className="font-display text-display-xl md:text-[5rem] tracking-wider uppercase leading-tight">
            April 5,
          </p>
          <p className="font-display text-display-xl md:text-[5rem] tracking-wider uppercase leading-tight">
            2026
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom nav */}
      <SectionNav
        prevLabel="Start"
        prevHref="#hero"
        nextLabel="Our Story"
        nextHref="#story"
      />
    </section>
  )
}
