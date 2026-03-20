'use client'

interface MonogramProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Monogram({ size = 'md', className = '' }: MonogramProps) {
  const sizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  }

  return (
    <div className={`font-display tracking-widest-plus text-center ${sizes[size]} ${className}`}>
      <span className="font-semibold">K</span>
      <span className="mx-2 text-gold font-light">+</span>
      <span className="font-semibold">I</span>
    </div>
  )
}
