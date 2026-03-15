import { motion } from 'motion/react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { CTASection } from '@/components/sections/CTASection'
import aboutImg from '@/assets/images/2.jpg'
import styles from './AboutPage.module.css'

export function AboutPage() {
  const { ref: bioRef, isInView: bioInView } = useScrollReveal()
  const { ref: approachRef, isInView: approachInView } = useScrollReveal()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            О стилисте
          </motion.h1>
        </div>
      </section>

      <section className={styles.bio} ref={bioRef}>
        <div className={`container ${styles.bioGrid}`}>
          <motion.div
            className={styles.bioPhoto}
            initial={{ opacity: 0, x: -40 }}
            animate={bioInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <img src={aboutImg} alt="Жамьяна Хатуева" className={styles.photoImage} />
            <div className={styles.photoFrame} />
          </motion.div>
          <motion.div
            className={styles.bioText}
            initial={{ opacity: 0, x: 40 }}
            animate={bioInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className={styles.bioName}>Жамьяна Хатуева</h2>
            <p className={styles.bioRole}>Осознанный стилист</p>
            <p className={styles.bioParagraph}>
              Родом из Бурятии, живу и работаю в Москве. Мой путь в стиле начался
              с простого наблюдения: то, как мы одеваемся, напрямую влияет на то,
              как мы себя чувствуем и как нас воспринимает мир.
            </p>
            <p className={styles.bioParagraph}>
              Я верю, что стиль — это не про следование трендам, а про глубокое
              понимание себя. Каждый клиент для меня — уникальная история, и моя
              задача — помочь эту историю рассказать через образ.
            </p>
            <p className={styles.bioParagraph}>
              Работаю с клиентами в Москве офлайн и онлайн по всему миру.
              Каждый проект начинается с бесплатной консультации — чтобы мы
              могли познакомиться и понять, подходим ли друг другу.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.approach} ref={approachRef}>
        <div className="container">
          <motion.div
            className={styles.approachContent}
            initial={{ opacity: 0, y: 40 }}
            animate={approachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className={styles.approachTitle}>Мой подход</h2>
            <div className={styles.approachGrid}>
              <div className={styles.approachBlock}>
                <p className={styles.pullQuote}>
                  &laquo;Работа со мной, как сеанс у <span className={styles.goldText}>психолога</span>&raquo;
                </p>
                <p className={styles.approachText}>
                  Я не просто подбираю одежду — я помогаю разобраться в себе через стиль.
                  Мы работаем с вашими переживаниями, комплексами и желаниями,
                  превращая их в уверенность.
                </p>
              </div>
              <div className={styles.approachBlock}>
                <p className={styles.pullQuote}>
                  &laquo;Наши комплексы — это наши <span className={styles.goldText}>достоинства</span>&raquo;
                </p>
                <p className={styles.approachText}>
                  То, что вы считаете недостатком, я научу вас видеть как особенность.
                  Стиль не скрывает — стиль подчёркивает вашу уникальность.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  )
}
