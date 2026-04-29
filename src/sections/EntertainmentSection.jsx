import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useScrollReveal } from '../hooks/useGsap'
import styles from './EntertainmentSection.module.scss'

gsap.registerPlugin(ScrollTrigger)

const EXPERIENCES = [
  { id: 'imax', icon: '◉', label: 'IMAX Multiplex',   body: '15-screen IMAX & Dolby Cinema complex — the largest in NCR.' },
  { id: 'vr',   icon: '◈', label: 'VR Arena',         body: 'A 20,000 sq ft immersive VR zone — gaming, simulation, social.' },
  { id: 'kids', icon: '◇', label: 'World of Kids',    body: 'A dedicated 3-floor children\'s edutainment destination.' },
  { id: 'esport',icon: '▣', label: 'eSports Stadium', body: '500-seat tournament-ready arena. Broadcast infrastructure built in.' },
  { id: 'bowl', icon: '◎', label: 'Luxury Bowling',   body: '24-lane boutique bowling lounge with F&B service at every lane.' },
  { id: 'spa',  icon: '◆', label: 'Wellness Spa',     body: 'A 12,000 sq ft urban retreat — biohacking, spa, and cryo chambers.' },
]

export default function EntertainmentSection() {
  const sectionRef = useRef(null)
  const headRef    = useScrollReveal({ yOffset: 60 })

  useGSAP(() => {
    gsap.fromTo('.ent-item', {
      opacity: 0,
      x: -30,
    }, {
      opacity: 1,
      x: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 72%',
        toggleActions: 'play none none none',
      },
    })
  }, { scope: sectionRef })

  return (
    <section id="entertainment" ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>
        {/* ── Left: text ── */}
        <div className={styles.left}>
          <div ref={headRef}>
            <p className={styles.eyebrow}>Entertainment</p>
            <h2 className={styles.headline}>
              Beyond<br />
              <em>shopping.</em>
            </h2>
            <p className={styles.sub}>
              We engineered a destination where visitors stay 4+ hours — because an entertained customer is a buying customer.
            </p>
          </div>

          <div className={styles.bigStat}>
            <span className={styles.bigNum}>4.5h</span>
            <span className={styles.bigLabel}>avg dwell time<br />vs industry avg 1.8h</span>
          </div>
        </div>

        {/* ── Right: experience list ── */}
        <ul className={styles.list}>
          {EXPERIENCES.map(({ id, icon, label, body }) => (
            <li key={id} className={`${styles.item} ent-item`}>
              <span className={styles.itemIcon}>{icon}</span>
              <div>
                <h3 className={styles.itemLabel}>{label}</h3>
                <p className={styles.itemBody}>{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
