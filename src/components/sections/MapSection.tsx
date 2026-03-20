'use client'

import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { Divider } from '@/components/ui/Divider'
import { WEDDING } from '@/lib/constants'

export function MapSection() {
  return (
    <section id="map" className="min-h-screen bg-cream py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-6 md:px-12">
        <AnimateOnScroll>
          <SectionTitle script="find" heading="On Map" />
        </AnimateOnScroll>

        {/* Map embed */}
        <AnimateOnScroll delay={0.2}>
          <div className="mt-12 border border-gold/30 overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=-7.16610498234112,111.8764428958938&z=16&output=embed"
              className="w-full aspect-[4/3] md:aspect-video border-0 grayscale hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding venue location"
            />
          </div>
        </AnimateOnScroll>

        {/* Venue info */}
        <AnimateOnScroll delay={0.3}>
          <div className="text-center mt-10">
            <Divider />
            <h3 className="font-display text-lg font-bold uppercase tracking-wider">
              {WEDDING.ceremony.venue}
            </h3>
            <p className="font-body text-sm text-gray tracking-wider mt-1">
              {WEDDING.ceremony.address}, {WEDDING.ceremony.city}
            </p>
            <div className="mt-8">
              <Button
                variant="outline"
                href={WEDDING.ceremony.mapUrl}
              >
                Get Directions
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
