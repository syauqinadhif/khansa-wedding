'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { WEDDING } from '@/lib/constants'
import { useLang } from '@/contexts/LanguageContext'
import { fadeInUp } from '@/lib/animations'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(): TimeLeft {
  const target = new Date(WEDDING.date.iso).getTime()
  const now = new Date().getTime()
  const diff = Math.max(0, target - now)

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display text-3xl md:text-4xl lg:text-5xl font-light tracking-wider tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
      <span className="font-body text-[9px] md:text-[10px] tracking-ultra-wide uppercase text-gray mt-2">
        {label}
      </span>
    </div>
  )
}

function Colon() {
  return (
    <span className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-gold/50 -mt-3 mx-1 md:mx-2">
      :
    </span>
  )
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)
  const { t } = useLang()

  useEffect(() => {
    setTimeLeft(calculateTimeLeft())
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  if (!timeLeft) return null

  const isOver = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0

  if (isOver) {
    return (
      <motion.div variants={fadeInUp} className="text-center">
        <p className="font-script text-script-md text-gold">{t('countdown.today')}</p>
      </motion.div>
    )
  }

  return (
    <motion.div variants={fadeInUp} className="flex flex-col items-center">
      <p className="font-script text-script-md md:text-script-lg text-gold mb-6">
        {t('countdown.script')}
      </p>

      <div className="flex items-start justify-center gap-3 md:gap-4">
        <TimeUnit value={timeLeft.days} label={t('countdown.days')} />
        <Colon />
        <TimeUnit value={timeLeft.hours} label={t('countdown.hours')} />
        <Colon />
        <TimeUnit value={timeLeft.minutes} label={t('countdown.minutes')} />
        <Colon />
        <TimeUnit value={timeLeft.seconds} label={t('countdown.seconds')} />
      </div>
    </motion.div>
  )
}
