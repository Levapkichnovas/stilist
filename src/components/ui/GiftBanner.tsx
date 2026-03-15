import { motion } from 'motion/react'
import { Button } from './Button'
import styles from './GiftBanner.module.css'

export function GiftBanner() {
  const whatsappUrl = `https://wa.me/79152614175?text=${encodeURIComponent('Здравствуйте! Хочу приобрести подарочный сертификат.')}`

  return (
    <motion.div
      className={styles.banner}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>Подарочный сертификат</h3>
        <p className={styles.text}>
          Подарите близким стильное преображение. Сертификат на любую услугу —
          идеальный подарок для тех, кто ценит себя.
        </p>
        <Button href={whatsappUrl}>Приобрести</Button>
      </div>
      <div className={styles.decorLine} />
    </motion.div>
  )
}
