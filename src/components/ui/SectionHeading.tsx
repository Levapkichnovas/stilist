import { motion } from 'motion/react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './SectionHeading.module.css'

interface SectionHeadingProps {
  title: string
  light?: boolean
}

export function SectionHeading({ title, light }: SectionHeadingProps) {
  const { ref, isInView } = useScrollReveal()

  return (
    <div ref={ref} className={`${styles.heading} ${light ? styles.light : ''}`}>
      <motion.div
        className={styles.line}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {title}
      </motion.h2>
    </div>
  )
}
