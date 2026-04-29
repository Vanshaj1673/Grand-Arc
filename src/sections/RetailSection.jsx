import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useScrollReveal } from '../hooks/useGsap'
import styles from './RetailSection.module.scss'

const ZONES = [
  {
    id: 'luxury',
    tag: 'Level 1 & 2',
    name: 'Luxury Avenue',
    desc: 'India\'s largest contiguous luxury mall zone — Hermès, Louis Vuitton, Chanel, Cartier. A dedicated luxury block engineered for high-net-worth conversion.',
    highlight: '32 luxury maisons',
    img: '/assets/luxury-zone.jpg',
  },
  {
    id: 'premium',
    tag: 'Level 3 & 4',
    name: 'Premium District',
    desc: 'Premium international and aspirational brands in a curated environment — Zara, Massimo Dutti, Hugo Boss, Michael Kors, and 200+ others.',
    highlight: '200+ premium brands',
    img: '/assets/premium-zone.jpg',
  },
  {
    id: 'flagship',
    tag: 'Ground Level',
    name: 'Flagship Corridor',
    desc: 'Double-height flagship stores up to 15,000 sq ft each. Built for brand storytelling at maximum visibility — the heartbeat of the mall.',
    highlight: '6 flagship slots',
    img: '/assets/flagship-zone.jpg',
  },
]

export default function RetailSection({ onZoneClick }) {
  const sectionRef = useRef(null)
  const stripRef   = useRef(null)
  const headRef    = useScrollReveal({ yOffset: 40 })

  useGSAP(() => {
    if (!stripRef.current) return

    // Pinned horizontal scroll strip
    gsap.to(stripRef.current, {
      x: () => -(stripRef.current.scrollWidth - window.innerWidth + 160),
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${stripRef.current.scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })

    // Staggered reveal of info blocks inside cards
    gsap.from('.retail-card-info', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 40%',
      }
    })
  }, { scope: sectionRef })

  return (
    <section id="retail" ref={sectionRef} className={styles.section}>
      <div ref={headRef} className={`${styles.header} will-animate`}>
        <p className={styles.eyebrow}>Retail Zones</p>
        <h2 className={styles.headline}>
          Every brand's<br />
          <em>perfect address.</em>
        </h2>
      </div>

      <div ref={stripRef} className={`${styles.strip} retail-strip gpu-accelerate`}>
        {ZONES.map((zone) => (
          <article 
            key={zone.id} 
            className={`${styles.card} will-animate`} 
            id={`retail-${zone.id}`}
            onClick={() => onZoneClick?.(zone)}
            data-cursor="explore"
          >
            <div className={styles.imgWrap}>
              <img
                src={zone.img}
                alt={zone.name}
                className={styles.img}
                loading="lazy"
              />
              <div className={styles.imgOverlay} />
              <div className={styles.exploreBtn}>Explore Zone +</div>
            </div>
            <div className={`${styles.info} retail-card-info`}>
              <span className={styles.tag}>{zone.tag}</span>
              <h3 className={styles.cardTitle}>{zone.name}</h3>
              <p className={styles.cardDesc}>{zone.desc}</p>
              <div className={styles.highlight}>{zone.highlight}</div>
            </div>
          </article>
        ))}

        {/* End spacer */}
        <div className={styles.cta}>
          <p className={styles.ctaLabel}>Ready to claim your space?</p>
          <a href="#cta" className={styles.ctaBtn}>View Leasing Deck →</a>
        </div>
      </div>
    </section>
  )
}
