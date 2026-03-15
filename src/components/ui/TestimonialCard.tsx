import { motion } from 'motion/react'
import type { Testimonial } from '@/data/testimonials'
import styles from './TestimonialCard.module.css'

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <p className={styles.text}>{testimonial.text}</p>
      <div className={styles.footer}>
        <span className={styles.author}>{testimonial.author}</span>
        {testimonial.service && (
          <span className={styles.service}>{testimonial.service}</span>
        )}
      </div>
    </motion.div>
  )
}
