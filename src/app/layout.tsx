import type { Metadata } from 'next'
import { Great_Vibes, Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Khansa & Izzar — Wedding | April 5, 2026',
  description: 'You are cordially invited to celebrate the wedding of Khansa & Izzar on April 5, 2026.',
  openGraph: {
    title: 'Khansa & Izzar Wedding',
    description: 'Join us for our special day — April 5, 2026',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${cormorant.variable} ${montserrat.variable}`}>
      <body className="font-body bg-white text-charcoal antialiased">
        {children}
      </body>
    </html>
  )
}
