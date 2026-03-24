'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Lang, t, TranslationKey } from '@/lib/translations'

interface LanguageContextType {
  lang: Lang
  toggleLang: () => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('id')

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'id' : 'en'))

  const translate = (key: TranslationKey) => t(key, lang)

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translate }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLang must be used within LanguageProvider')
  return context
}
