'use client'

interface SectionNavProps {
  prevLabel?: string
  prevHref?: string
  nextLabel?: string
  nextHref?: string
  light?: boolean
}

export function SectionNav({ prevLabel, prevHref, nextLabel, nextHref, light = false }: SectionNavProps) {
  const textColor = light ? 'text-white/70 hover:text-white' : 'text-gray hover:text-charcoal'

  return (
    <div className="flex justify-between items-center w-full px-6 md:px-12 py-6">
      {prevLabel && prevHref ? (
        <a
          href={prevHref}
          className={`font-body text-xs tracking-ultra-wide uppercase transition-colors ${textColor}`}
        >
          {prevLabel}
        </a>
      ) : (
        <span />
      )}
      {nextLabel && nextHref ? (
        <a
          href={nextHref}
          className={`font-body text-xs tracking-ultra-wide uppercase transition-colors ${textColor}`}
        >
          {nextLabel}
        </a>
      ) : (
        <span />
      )}
    </div>
  )
}
