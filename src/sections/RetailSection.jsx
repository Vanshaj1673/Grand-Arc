import { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import styles from './RetailSection.module.scss'

gsap.registerPlugin(ScrollTrigger)

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

export default function RetailSection() {
  const sectionRef = useRef(null)

  // Horizontal marquee for zone cards
  useGSAP(() => {
    // Pinned horizontal scroll strip
    gsap.to('.retail-strip', {
      x: () => -(document.querySelector('.retail-strip').scrollWidth - window.innerWidth + 120),
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${document.querySelector('.retail-strip').scrollWidth}`,
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
      },
    })
  }, { scope: sectionRef })

  return (
    <section id="retail" ref={sectionRef} className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Retail Zones</p>
        <h2 className={styles.headline}>
          Every brand's<br />
          <em>perfect address.</em>
        </h2>
      </div>

      <div className={`${styles.strip} retail-strip`}>
        {ZONES.map(({ id, tag, name, desc, highlight, img }) => (
          <article key={id} className={styles.card} id={`retail-${id}`}>
            <div className={styles.imgWrap}>
              <img
                src={img}
                alt={name}
                className={styles.img}
                loading="lazy"
              />
              <div className={styles.imgOverlay} />
            </div>
            <div className={styles.info}>
              <span className={styles.tag}>{tag}</span>
              <h3 className={styles.cardTitle}>{name}</h3>
              <p className={styles.cardDesc}>{desc}</p>
              <div className={styles.highlight}>{highlight}</div>
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
