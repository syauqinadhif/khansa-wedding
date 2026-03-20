'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { fadeInUp } from '@/lib/animations'

const rsvpSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  attending: z.enum(['accepts', 'declines'], { message: 'Please select an option' }),
  totalGuests: z.number().min(1).max(5),
  notes: z.string().optional(),
})

type RsvpFormData = z.infer<typeof rsvpSchema>

export function RsvpFormSection() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RsvpFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      totalGuests: 1,
      attending: undefined,
    },
  })

  const onSubmit = (data: RsvpFormData) => {
    console.log('RSVP Data:', data)
    setSubmitted(true)
  }

  return (
    <section id="rsvp-form" className="min-h-screen bg-white py-20 md:py-28 flex items-center">
      <div className="max-w-lg mx-auto px-6 md:px-12 w-full">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-display-sm uppercase tracking-widest-plus">Thank You</h3>
              <p className="font-body text-sm text-gray mt-4">
                Your response has been recorded. We look forward to celebrating with you!
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="mb-12">
                <SectionTitle script="join us!" heading="RSVP" />
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-12">
                {/* Name */}
                <div>
                  <label className="font-body text-xs tracking-wider uppercase text-gray-dark block mb-2">
                    Name<span className="text-gold">*</span>
                  </label>
                  <input
                    {...register('name')}
                    placeholder="Enter guest name"
                    className="w-full border-0 border-b border-gray-light focus:border-gold bg-transparent font-body text-sm py-2 outline-none transition-colors placeholder:text-gray-light"
                  />
                  {errors.name && (
                    <p className="text-xs text-gold-dark mt-1 font-body">{errors.name.message}</p>
                  )}
                </div>

                {/* Attending */}
                <div>
                  <label className="font-body text-xs tracking-wider uppercase text-gray-dark block mb-3">
                    Will you join us?<span className="text-gold">*</span>
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        value="accepts"
                        {...register('attending')}
                        className="w-4 h-4 accent-gold"
                      />
                      <span className="font-body text-sm tracking-wider group-hover:text-gold transition-colors">
                        Joyfully Accepts
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        value="declines"
                        {...register('attending')}
                        className="w-4 h-4 accent-gold"
                      />
                      <span className="font-body text-sm tracking-wider group-hover:text-gold transition-colors">
                        Regretfully Declines
                      </span>
                    </label>
                  </div>
                  {errors.attending && (
                    <p className="text-xs text-gold-dark mt-1 font-body">{errors.attending.message}</p>
                  )}
                </div>

                {/* Total attending */}
                <div>
                  <label className="font-body text-xs tracking-wider uppercase text-gray-dark block mb-2">
                    Total attending<span className="text-gold">*</span>
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={5}
                    {...register('totalGuests', { valueAsNumber: true })}
                    className="w-20 border-0 border-b border-gray-light focus:border-gold bg-transparent font-body text-sm py-2 outline-none transition-colors text-center"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="font-body text-xs tracking-wider uppercase text-gray-dark block mb-2">
                    Notes <span className="text-gray text-[10px]">(optional)</span>
                  </label>
                  <textarea
                    {...register('notes')}
                    rows={3}
                    placeholder="Any dietary restrictions or special requests..."
                    className="w-full border border-gray-light focus:border-gold bg-transparent font-body text-sm p-3 outline-none transition-colors resize-none placeholder:text-gray-light"
                  />
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <Button type="submit" className="w-full text-center">
                    Submit
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
