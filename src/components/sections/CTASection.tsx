import { motion } from 'motion/react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Button } from '@/components/ui/Button'
import styles from './CTASection.module.css'

export function CTASection() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.content}`}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Запишитесь на бесплатную консультацию
        </motion.h2>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          30 минут видеозвонка, чтобы познакомиться и обсудить ваши цели
        </motion.p>
        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button href="https://wa.me/79152614175?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E">
            WhatsApp
          </Button>
          <Button href="https://t.me/zhamyana" variant="ghost">
            Telegram
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
