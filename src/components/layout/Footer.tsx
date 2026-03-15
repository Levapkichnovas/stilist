import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.line} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoAccent}>Ж</span>амьяна Хатуева
          </Link>
          <p className={styles.tagline}>Ваш осознанный стилист</p>
        </div>
        <div className={styles.links}>
          <Link to="/" className={styles.navLink}>Главная</Link>
          <Link to="/services" className={styles.navLink}>Услуги</Link>
          <Link to="/about" className={styles.navLink}>Обо мне</Link>
          <Link to="/contacts" className={styles.navLink}>Контакты</Link>
        </div>
        <div className={styles.socials}>
          <a href="https://wa.me/79152614175" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>WhatsApp</a>
          <a href="https://t.me/zhamyana" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Telegram</a>
          <a href="https://instagram.com/zhamyana" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram</a>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} Жамьяна Хатуева. Москва</p>
      </div>
    </footer>
  )
}
