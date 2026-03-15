import { philosophyQuotes } from '@/data/philosophy'
import { PhilosophyQuote } from '@/components/ui/PhilosophyQuote'
import { SectionHeading } from '@/components/ui/SectionHeading'
import styles from './PhilosophySection.module.css'

export function PhilosophySection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading title="Философия" />
        <div className={styles.grid}>
          {philosophyQuotes.map((q, i) => (
            <PhilosophyQuote key={i} text={q.text} accent={q.accent} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
