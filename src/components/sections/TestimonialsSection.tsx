import { useRef, useState, useEffect } from 'react'
import { testimonials } from '@/data/testimonials'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import styles from './TestimonialsSection.module.css'

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  function updateArrows() {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateArrows()
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [])

  function scroll(direction: 'left' | 'right') {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.querySelector<HTMLElement>(':scope > div > *')?.offsetWidth ?? 350
    el.scrollBy({ left: direction === 'left' ? -cardWidth - 32 : cardWidth + 32, behavior: 'smooth' })
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading title="Отзывы" />
      </div>
      <div className={styles.sliderWrapper}>
        <button
          className={`${styles.arrow} ${styles.arrowLeft} ${!canScrollLeft ? styles.arrowHidden : ''}`}
          onClick={() => scroll('left')}
          aria-label="Назад"
        >
          ‹
        </button>
        <div className={styles.scrollContainer} ref={scrollRef}>
          <div className={styles.track}>
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
        <button
          className={`${styles.arrow} ${styles.arrowRight} ${!canScrollRight ? styles.arrowHidden : ''}`}
          onClick={() => scroll('right')}
          aria-label="Вперёд"
        >
          ›
        </button>
      </div>
    </section>
  )
}
