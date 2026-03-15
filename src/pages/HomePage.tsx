import { motion } from 'motion/react'
import { HeroSection } from '@/components/sections/HeroSection'
import { PhilosophySection } from '@/components/sections/PhilosophySection'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <HeroSection />
      <PhilosophySection />
      <ServicesPreview />
      <TestimonialsSection />
      <CTASection />
    </motion.div>
  )
}
