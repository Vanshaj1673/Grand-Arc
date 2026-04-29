import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useScrollReveal } from '../hooks/useGsap'
import styles from './FloorplanSection.module.scss'

const LEVELS = [
  { id: 'l7', label: 'Level 7', theme: 'Sky Terrace & Fine Dining', color: '#D4AF37' },
  { id: 'l5', label: 'Level 5-6', theme: 'Entertainment & IMAX', color: '#C0C0C0' },
  { id: 'l3', label: 'Level 3-4', theme: 'Premium Brands & Cafés', color: '#B8860B' },
  { id: 'l1', label: 'Level 1-2', theme: 'Luxury Avenue & Maisons', color: '#FFD700' },
  { id: 'lg', label: 'Ground', theme: 'Flagships & Entry Atrium', color: '#E5C100' },
]

export default function FloorplanSection() {
  const sectionRef = useRef(null)
  const headRef    = useScrollReveal({ yOffset: 40 })
  const [activeLevel, setActiveLevel] = useState('l1')

  useGSAP(() => {
    gsap.from('.level-bar', {
      scaleX: 0,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
      }
    })
  }, { scope: sectionRef })

  return (
    <section id="floorplan" ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>
        <div ref={headRef} className={styles.head}>
          <p className={styles.eyebrow}>Spatial Architecture</p>
          <h2 className={styles.headline}>
            Designed for<br />
            <em>discovery.</em>
          </h2>
          <p className={styles.sub}>
            A vertical journey through commerce and culture. 
            Click a level to explore the programmatic mix.
          </p>
        </div>

        <div className={styles.visualizer}>
          <div className={styles.stack}>
            {LEVELS.map((level) => (
              <div 
                key={level.id}
                className={`${styles.levelBar} level-bar ${activeLevel === level.id ? styles.active : ''}`}
                onClick={() => setActiveLevel(level.id)}
                style={{ '--level-color': level.color }}
              >
                <span className={styles.levelLabel}>{level.label}</span>
                <div className={styles.levelFill} />
              </div>
            ))}
          </div>

          <div className={styles.details}>
            <div className={styles.detailsInner}>
              <h3 className={styles.levelTitle}>{LEVELS.find(l => l.id === activeLevel)?.label}</h3>
              <h4 className={styles.levelTheme}>{LEVELS.find(l => l.id === activeLevel)?.theme}</h4>
              <p className={styles.levelDesc}>
                This level is engineered for maximum {activeLevel === 'l1' ? 'exclusivity' : 'dwell time'}. 
                Featuring high-volume circulation paths and strategic brand positioning.
              </p>
              <ul className={styles.levelStats}>
                <li><span>Total Area:</span> 120,000 sq ft</li>
                <li><span>Units:</span> 42</li>
                <li><span>Anchor Slots:</span> 2</li>
              </ul>
              <button className={styles.viewMapBtn}>View Detailed Floorplan →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
