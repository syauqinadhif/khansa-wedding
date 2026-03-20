'use client'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}

export function Button({ children, variant = 'primary', href, onClick, className = '', type = 'button' }: ButtonProps) {
  const base = 'inline-block font-body text-xs tracking-ultra-wide uppercase px-8 py-3.5 rounded-full transition-all duration-300'
  const variants = {
    primary: 'bg-charcoal text-white hover:bg-black',
    outline: 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-white',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }

  return <button type={type} onClick={onClick} className={classes}>{children}</button>
}
