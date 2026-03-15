import { motion } from 'motion/react'
import styles from './PhilosophyQuote.module.css'

interface PhilosophyQuoteProps {
  text: string
  accent: string
  index: number
}

export function PhilosophyQuote({ text, accent, index }: PhilosophyQuoteProps) {
  const isEven = index % 2 === 0
  const parts = text.split(accent)

  return (
    <motion.blockquote
      className={styles.quote}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
    >
      <p className={styles.text}>
        {parts[0]}
        <span className={styles.accent}>{accent}</span>
        {parts[1]}
      </p>
    </motion.blockquote>
  )
}
