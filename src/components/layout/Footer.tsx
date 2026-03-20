import { Monogram } from '@/components/ui/Monogram'
import { Divider } from '@/components/ui/Divider'

export function Footer() {
  return (
    <footer className="bg-ivory py-16 text-center">
      <Divider />
      <Monogram size="md" className="mt-4" />
      <p className="font-display text-xs tracking-ultra-wide uppercase text-gray mt-4">
        Khansa & Izzar
      </p>
      <p className="font-body text-xs text-gray-light mt-2">
        April 5, 2026
      </p>
      <p className="font-body text-[10px] text-gray-light mt-8">
        Made with love
      </p>
    </footer>
  )
}
