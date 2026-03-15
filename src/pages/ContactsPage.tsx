import { motion } from 'motion/react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Button } from '@/components/ui/Button'
import styles from './ContactsPage.module.css'

const contacts = [
  {
    name: 'WhatsApp',
    value: '+7 915 261-41-75',
    href: 'https://wa.me/79152614175',
    icon: 'WA',
  },
  {
    name: 'Telegram',
    value: '@zhamyana',
    href: 'https://t.me/zhamyana',
    icon: 'TG',
  },
  {
    name: 'Instagram',
    value: '@zhamyana',
    href: 'https://instagram.com/zhamyana',
    icon: 'IG',
  },
]

export function ContactsPage() {
  const { ref, isInView } = useScrollReveal()

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
            Контакты
          </motion.h1>
        </div>
      </section>

      <section className={styles.cardsSection}>
        <div className="container">
          <div className={styles.cardsGrid}>
            {contacts.map((contact, i) => (
              <motion.a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                whileHover={{ y: -8, borderColor: 'var(--color-gold)' }}
              >
                <span className={styles.cardIcon}>{contact.icon}</span>
                <span className={styles.cardName}>{contact.name}</span>
                <span className={styles.cardValue}>{contact.value}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.consultation} ref={ref}>
        <div className="container">
          <motion.div
            className={styles.consultationContent}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.consultationTitle}>Бесплатная консультация</h2>
            <p className={styles.consultationText}>
              30 минут видеозвонка, на котором мы познакомимся, обсудим ваши запросы
              и я предложу оптимальный формат работы. Никаких обязательств —
              просто разговор о вас и вашем стиле.
            </p>
            <div className={styles.consultationDetails}>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Формат</span>
                <span className={styles.detailValue}>Видеозвонок</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Длительность</span>
                <span className={styles.detailValue}>~30 минут</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Стоимость</span>
                <span className={styles.detailValue}>Бесплатно</span>
              </div>
            </div>
            <Button href="https://wa.me/79152614175?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D1%83%D1%8E%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E">
              Записаться
            </Button>
          </motion.div>
        </div>
      </section>

      <section className={styles.location}>
        <div className="container">
          <div className={styles.locationContent}>
            <p className={styles.locationCity}>Москва</p>
            <p className={styles.locationNote}>
              Офлайн-услуги доступны в Москве. Онлайн — для клиентов из любого города и страны.
              Также доступны выездные шопинг-туры за рубежом.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
