import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'motion/react'
import { MobileMenu } from './MobileMenu'
import styles from './Header.module.css'

const navLinks = [
  { path: '/', label: 'Главная' },
  { path: '/services', label: 'Услуги' },
  { path: '/about', label: 'Обо мне' },
  { path: '/contacts', label: 'Контакты' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location])

  return (
    <>
      <motion.header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`container ${styles.inner}`}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoAccent}>Ж</span>амьяна
          </Link>
          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            className={`${styles.burger} ${isMobileOpen ? styles.burgerOpen : ''}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Меню"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </motion.header>
      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} links={navLinks} />
    </>
  )
}
