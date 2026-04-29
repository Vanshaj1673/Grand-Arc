import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Magnetic from '../components/Magnetic'
import styles from './CtaSection.module.scss'

export default function CtaSection() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    })

    tl.fromTo('.cta-line', { scaleX: 0 }, { scaleX: 1, duration: 1, ease: 'expo.inOut' })
      .fromTo('.cta-eyebrow', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out' }, '-=0.6')
      .fromTo('.cta-headline', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'expo.out' }, '-=0.5')
      .fromTo('.cta-sub', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out' }, '-=0.6')
      .fromTo('.cta-actions', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out' }, '-=0.4')
      .fromTo('.cta-contact', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, '-=0.2')
  }, { scope: sectionRef })

  return (
    <section id="cta" ref={sectionRef} className={styles.section}>
      {/* Ambient background glow */}
      <div className={styles.glow} aria-hidden />

      <div className={styles.inner}>
        <div className={`${styles.line} cta-line`} />

        <p className={`${styles.eyebrow} cta-eyebrow will-animate`}>
          Exclusive Leasing Enquiry
        </p>

        <h2 className={`${styles.headline} cta-headline will-animate`}>
          Claim your position<br />
          <em>at the pinnacle.</em>
        </h2>

        <p className={`${styles.sub} cta-sub will-animate`}>
          Prime retail, F&B, and flagship spaces are being allocated now.
          <br />
          Limited availability — early partners receive preferred positioning.
        </p>

        <div className={`${styles.actions} cta-actions will-animate`}>
          <Magnetic strength={0.2}>
            <a href="mailto:leasing@grandarc.com" className={styles.btnPrimary} id="cta-enquire-btn">
              Enquire Now
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a href="/assets/grand-arc-deck.pdf" target="_blank" rel="noopener" className={styles.btnSecondary} id="cta-download-btn">
              Download Deck ↓
            </a>
          </Magnetic>
        </div>

        <div className={styles.contactRow}>
          <div className={`${styles.contactItem} cta-contact`}>
            <span className={styles.contactLabel}>Leasing Office</span>
            <span className={styles.contactValue}>leasing@grandarc.com</span>
          </div>
          <div className={styles.divider} />
          <div className={`${styles.contactItem} cta-contact`}>
            <span className={styles.contactLabel}>Direct Line</span>
            <span className={styles.contactValue}>+91 11 4000 8000</span>
          </div>
          <div className={styles.divider} />
          <div className={`${styles.contactItem} cta-contact`}>
            <span className={styles.contactLabel}>Location</span>
            <span className={styles.contactValue}>Sector 128, Noida Expressway</span>
          </div>
        </div>
      </div>
    </section>
  )
}
