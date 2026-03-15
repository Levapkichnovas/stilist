import { motion } from 'motion/react'
import type { Service } from '@/data/services'
import { Button } from './Button'
import styles from './ServiceCard.module.css'

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const whatsappUrl = `https://wa.me/79152614175?text=${encodeURIComponent(`Здравствуйте! Хочу записаться на услугу "${service.name}"`)}`

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className={styles.header}>
        <h3 className={styles.name}>{service.name}</h3>
        {service.format && <span className={styles.format}>{service.format}</span>}
      </div>
      <p className={styles.price}>{service.price}</p>
      {service.duration && <p className={styles.duration}>{service.duration}</p>}
      <p className={styles.description}>{service.description}</p>
      {service.bonuses && service.bonuses.length > 0 && (
        <ul className={styles.bonuses}>
          {service.bonuses.map((bonus) => (
            <li key={bonus} className={styles.bonus}>+ {bonus}</li>
          ))}
        </ul>
      )}
      <Button href={whatsappUrl} variant="ghost" className={styles.cta}>
        Записаться
      </Button>
    </motion.div>
  )
}
