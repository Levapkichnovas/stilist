import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import styles from './MobileMenu.module.css'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: { path: string; label: string }[]
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const location = useLocation()

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className={styles.nav}>
            {links.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
              >
                <Link
                  to={link.path}
                  className={`${styles.link} ${location.pathname === link.path ? styles.active : ''}`}
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div
            className={styles.socials}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a href="https://t.me/zhamyana" target="_blank" rel="noopener noreferrer" className={styles.social}>Telegram</a>
            <a href="https://wa.me/79152614175" target="_blank" rel="noopener noreferrer" className={styles.social}>WhatsApp</a>
            <a href="https://instagram.com/zhamyana" target="_blank" rel="noopener noreferrer" className={styles.social}>Instagram</a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
