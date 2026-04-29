import { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useScrollReveal } from '../hooks/useGsap'
import styles from './WhySection.module.scss'

gsap.registerPlugin(ScrollTrigger)

const PILLARS = [
  {
    id: 'footfall',
    number: '01',
    title: 'Unrivalled Footfall',
    body: 'Grand Arc is projected to draw 28 million annual visitors — the highest footfall of any retail destination in South Asia.',
    metric: '28M / year',
  },
  {
    id: 'catchment',
    number: '02',
    title: 'Dominant Catchment',
    body: 'A 25-minute drive catchment covering 12 million affluent households — the largest addressable retail catchment in NCR.',
    metric: '12M households',
  },
  {
    id: 'mix',
    number: '03',
    title: 'Category-Leading Mix',
    body: 'Luxury, premium, F&B, entertainment, and co-working in one address. A complete commerce ecosystem.',
    metric: '600+ brands',
  },
  {
    id: 'roi',
    number: '04',
    title: 'Proven Returns',
    body: 'Anchor tenants at comparable sites report 2.4× revenue uplift in year one. Your brand in the right address.',
    metric: '2.4× uplift',
  },
]

export default function WhySection() {
  const sectionRef = useRef(null)
  const headRef    = useScrollReveal({ yOffset: 60 })

  // Stagger pillar cards on scroll
  useGSAP(() => {
    gsap.fromTo('.pillar-card', {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    })
  }, { scope: sectionRef })

  return (
    <section id="why" ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>
        {/* ── Left label ── */}
        <div className={styles.labelCol}>
          <span className={styles.sideLabel}>Why Grand Arc</span>
        </div>

        {/* ── Main content ── */}
        <div className={styles.body}>
          <div ref={headRef} className={styles.head}>
            <p className={styles.eyebrow}>The Investment Case</p>
            <h2 className={styles.headline}>
              Not just a mall.<br />
              <em>A market landmark.</em>
            </h2>
            <p className={styles.intro}>
              Every square foot is engineered to maximise brand visibility, dwell time, and conversion.
              This is not real estate — this is permanent prime positioning.
            </p>
          </div>

          <div className={styles.pillars}>
            {PILLARS.map(({ id, number, title, body, metric }) => (
              <article key={id} className={`${styles.card} pillar-card`}>
                <span className={styles.cardNumber}>{number}</span>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{title}</h3>
                  <p className={styles.cardBody}>{body}</p>
                </div>
                <div className={styles.cardMetric}>{metric}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
