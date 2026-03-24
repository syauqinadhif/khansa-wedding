'use client'

import { SectionTitle } from '@/components/ui/SectionTitle'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { SectionNav } from '@/components/ui/SectionNav'
import { useLang } from '@/contexts/LanguageContext'
import { TIMELINE } from '@/lib/constants'
import { TranslationKey } from '@/lib/translations'

export function StorySection() {
  const { t } = useLang()

  return (
    <section id="story" className="min-h-screen bg-cream py-20 md:py-28 flex flex-col">
      <div className="flex-1 max-w-2xl mx-auto px-6 md:px-12">
        <AnimateOnScroll>
          <SectionTitle script={t('story.script')} heading={t('story.heading')} />
        </AnimateOnScroll>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-light md:-translate-x-px" />

          {TIMELINE.map((item, index) => (
            <AnimateOnScroll key={`${item.year}-${index}`} delay={index * 0.1}>
              <div className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gold -translate-x-1.5 md:-translate-x-1.5 mt-1 z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                }`}>
                  <p className="font-display text-lg tracking-wider text-gold">{item.year}</p>
                  <h3 className="font-display text-base font-semibold uppercase tracking-wider mt-1">
                    {t(item.titleKey as TranslationKey)}
                  </h3>
                  <p className="font-body text-sm text-gray mt-2 leading-relaxed">
                    {t(item.descKey as TranslationKey)}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <SectionNav
        prevLabel={t('nav.ceremony')}
        prevHref="#ceremony"
        nextLabel={t('nav.photos')}
        nextHref="#photos"
      />
    </section>
  )
}
