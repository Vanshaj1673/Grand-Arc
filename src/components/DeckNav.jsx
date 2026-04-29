import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import styles from './DeckNav.module.scss'

const SECTIONS = [
  { id: 'hero',          label: 'Entry' },
  { id: 'why',           label: 'Overview' },
  { id: 'retail',        label: 'Retail' },
  { id: 'dining',        label: 'Dining' },
  { id: 'entertainment', label: 'Play' },
  { id: 'events',        label: 'Events' },
  { id: 'cta',           label: 'Enquire' },
]

export default function DeckNav({ lenis }) {
  const [activeSection, setActiveSection] = useState('hero')

  useGSAP(() => {
    SECTIONS.forEach(({ id }) => {
      gsap.to({}, {
        scrollTrigger: {
          trigger: `#${id}`,
          start: 'top 50%',
          end: 'bottom 50%',
          onToggle: (self) => self.isActive && setActiveSection(id),
        }
      })
    })
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el && lenis?.current) {
      lenis.current.scrollTo(el, { duration: 1.8 })
    }
  }

  return (
    <aside className={styles.deckNav}>
      <div className={styles.inner}>
        {SECTIONS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`${styles.dot} ${activeSection === id ? styles.active : ''}`}
            aria-label={`Scroll to ${label}`}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.circle} />
          </button>
        ))}
      </div>
    </aside>
  )
}
