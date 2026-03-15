import { Link } from 'react-router-dom'
import { services } from '@/data/services'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import styles from './ServicesPreview.module.css'

export function ServicesPreview() {
  const featured = services.filter((s) => s.featured)

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading title="Услуги" />
        <div className={styles.grid}>
          {featured.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
        <div className={styles.linkWrap}>
          <Link to="/services" className={styles.allLink}>
            Все услуги и цены
            <span className={styles.arrow}>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
