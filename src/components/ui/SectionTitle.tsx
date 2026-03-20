'use client'

interface SectionTitleProps {
  script?: string
  heading: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionTitle({ script, heading, subtitle, align = 'center', light = false }: SectionTitleProps) {
  const textColor = light ? 'text-white' : 'text-charcoal'
  const scriptColor = light ? 'text-gold-light' : 'text-gold'
  const subColor = light ? 'text-gray-light' : 'text-gray'
  const alignment = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`${alignment} ${textColor}`}>
      {script && (
        <p className={`font-script text-script-lg ${scriptColor} mb-1`}>
          {script}
        </p>
      )}
      <h2 className="font-display text-display-md md:text-display-lg uppercase tracking-widest-plus font-medium">
        {heading}
      </h2>
      {subtitle && (
        <p className={`font-body text-sm tracking-wider mt-3 ${subColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
