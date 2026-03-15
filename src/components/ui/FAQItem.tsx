import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import type { FAQItem as FAQItemType } from '@/data/faq'
import styles from './FAQItem.module.css'

interface FAQItemProps {
  item: FAQItemType
  index: number
}

export function FAQItem({ item, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className={styles.item}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <button className={styles.trigger} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.question}>{item.question}</span>
        <motion.span
          className={styles.icon}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.answer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className={styles.answerText}>{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
