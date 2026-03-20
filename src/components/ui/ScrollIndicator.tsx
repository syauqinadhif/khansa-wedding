'use client'

import { motion } from 'framer-motion'

export function ScrollIndicator({ className = '' }: { className?: string }) {
  return (
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className={`flex flex-col items-center ${className}`}
    >
      <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-gold">
        <path d="M8 4L8 20" stroke="currentColor" strokeWidth="1" />
        <path d="M2 14L8 20L14 14" stroke="currentColor" strokeWidth="1" />
      </svg>
    </motion.div>
  )
}
