import { motion } from 'motion/react'
import { services } from '@/data/services'
import { faqItems } from '@/data/faq'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FAQItem } from '@/components/ui/FAQItem'
import { GiftBanner } from '@/components/ui/GiftBanner'
import { CTASection } from '@/components/sections/CTASection'
import styles from './ServicesPage.module.css'

export function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className={styles.hero}>
        <div className="container">
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Услуги и цены
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Каждая услуга — это индивидуальная работа с вашим стилем и вашими целями
          </motion.p>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.grid}>
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.giftSection}>
        <div className="container">
          <GiftBanner />
        </div>
      </section>

      <section className={styles.prepayment}>
        <div className="container">
          <p className={styles.prepaymentText}>
            Для бронирования даты необходима предоплата 30% от стоимости услуги
          </p>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="container">
          <SectionHeading title="Частые вопросы" />
          <div className={styles.faqList}>
            {faqItems.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  )
}
