import { motion } from 'motion/react'
import { Button } from '@/components/ui/Button'
import heroImg from '@/assets/images/1.jpg'
import styles from './HeroSection.module.css'

export function HeroSection() {
  const words = 'ВАШ ОСОЗНАННЫЙ СТИЛИСТ'.split(' ')

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <div className={styles.textSide}>
          <motion.p
            className={styles.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Жамьяна Хатуева
          </motion.p>
          <h1 className={styles.title}>
            {words.map((word, i) => (
              <div key={i} className={styles.wordWrap}>
                <motion.span
                  className={styles.word}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -120 : 120 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + i * 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Помогу через стиль обрести себя, чтобы быть в гармонии со своим «Я»
          </motion.p>
          <motion.div
            className={styles.pulseBtn}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <Button href="https://wa.me/79152614175?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D1%83%D1%8E%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E">
              Бесплатная консультация
            </Button>
          </motion.div>
        </div>
        <motion.div
          className={styles.photoSide}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className={styles.photoPlaceholder}>
            <img src={heroImg} alt="Жамьяна Хатуева — стилист" className={styles.photoImg} />
          </div>
          <div className={styles.photoFrame} />
        </motion.div>
      </div>
      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className={styles.scrollLine} />
      </motion.div>
    </section>
  )
}
