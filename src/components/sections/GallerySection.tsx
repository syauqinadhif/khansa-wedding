'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { Lightbox } from '@/components/ui/Lightbox'
import { SectionNav } from '@/components/ui/SectionNav'
import { useLang } from '@/contexts/LanguageContext'
import { GALLERY_IMAGES } from '@/lib/constants'

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLang()

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="photos" className="min-h-screen bg-white py-20 md:py-28 flex flex-col">
      <div className="flex-1 max-w-4xl mx-auto px-6 md:px-12">
        <AnimateOnScroll>
          <SectionTitle script={t('gallery.script')} heading={t('gallery.heading')} subtitle={t('gallery.subtitle')} />
        </AnimateOnScroll>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-12">
          {GALLERY_IMAGES.map((image, index) => (
            <AnimateOnScroll key={index} delay={index * 0.08}>
              <button
                onClick={() => openLightbox(index)}
                className="relative aspect-square overflow-hidden group cursor-pointer w-full"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </button>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      <Lightbox
        images={GALLERY_IMAGES}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* Bottom nav */}
      <SectionNav
        prevLabel={t('nav.story')}
        prevHref="#story"
        nextLabel={t('nav.map')}
        nextHref="#map"
      />
    </section>
  )
}
