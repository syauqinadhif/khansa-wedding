'use client'

import Image from 'next/image'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { Divider } from '@/components/ui/Divider'
import { SectionNav } from '@/components/ui/SectionNav'
import { WEDDING } from '@/lib/constants'

function VenueCard({
  title,
  venue,
  address,
  city,
  time,
  imageSrc,
}: {
  title: string
  venue: string
  address: string
  city: string
  time: string
  imageSrc: string
}) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Venue photo */}
      <AnimateOnScroll className="w-full">
        <div className="relative w-full aspect-[4/3] mb-10">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover grayscale"
          />
        </div>
      </AnimateOnScroll>

      {/* Venue details */}
      <AnimateOnScroll delay={0.1}>
        <h3 className="font-display text-display-sm uppercase tracking-widest-plus font-medium mb-2">
          {title}
        </h3>
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.2}>
        <Divider className="my-6" />
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.3}>
        <p className="font-display text-lg md:text-xl font-bold uppercase tracking-wider">
          {venue}
        </p>
        <p className="font-display text-base tracking-wider mt-1">
          {address}
        </p>
        <p className="font-display text-base tracking-wider">
          {city}
        </p>
        <p className="font-body text-sm tracking-wider text-gray mt-4">
          {time}
        </p>
      </AnimateOnScroll>
    </div>
  )
}

export function CeremonySection() {
  return (
    <section id="ceremony" className="min-h-screen bg-white py-20 md:py-28 flex flex-col">
      <div className="flex-1 max-w-2xl mx-auto px-6 md:px-12 w-full">
        {/* Ceremony */}
        <VenueCard
          title="Ceremony"
          venue={WEDDING.ceremony.venue}
          address={WEDDING.ceremony.address}
          city={WEDDING.ceremony.city}
          time={WEDDING.ceremony.time}
          imageSrc="/images/ceremony/ceremony-venue.jpg"
        />

        {/* Separator */}
        <div className="my-16 h-px bg-gray-pale" />

        {/* Reception */}
        <VenueCard
          title="Reception"
          venue={WEDDING.reception.venue}
          address={WEDDING.reception.address}
          city={WEDDING.reception.city}
          time={WEDDING.reception.time}
          imageSrc="/images/ceremony/reception-venue.jpg"
        />
      </div>

      {/* Bottom nav */}
      <SectionNav
        prevLabel="Itinerary"
        prevHref="#itinerary"
        nextLabel="RSVP"
        nextHref="#rsvp"
      />
    </section>
  )
}
