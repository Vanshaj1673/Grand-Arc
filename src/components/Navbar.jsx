import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import styles from './Navbar.module.scss'

const NAV_LINKS = [
  { id: 'hero',          label: 'Entry' },
  { id: 'why',           label: 'Overview' },
  { id: 'retail',        label: 'Retail' },
  { id: 'dining',        label: 'Dining' },
  { id: 'entertainment', label: 'Play' },
  { id: 'events',        label: 'Events' },
]

export default function Navbar({ lenis }) {
  const navRef      = useRef(null)
  const progressRef = useRef(null)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useGSAP(() => {
    // Entrance animation
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1.4,
      ease: 'expo.out',
      delay: 0.5
    })

    // Update progress bar and scrolled state
    const updateNav = () => {
      const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      gsap.to(progressRef.current, { scaleX: progress, duration: 0.1, overwrite: 'auto' })
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener('scroll', updateNav)

    // Active section tracking
    NAV_LINKS.forEach(({ id }) => {
      gsap.to({}, {
        scrollTrigger: {
          trigger: `#${id}`,
          start: 'top 40%',
          end: 'bottom 40%',
          onToggle: (self) => self.isActive && setActiveSection(id),
        }
      })
    })

    return () => window.removeEventListener('scroll', updateNav)
  }, { scope: navRef })

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el && lenis?.current) {
      lenis.current.scrollTo(el, { offset: -20, duration: 2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
    }
  }

  return (
    <nav ref={navRef} className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo} onClick={() => scrollTo('hero')}>
        <span className={styles.logoMark}>✦</span>
        <span className={styles.logoName}>GRAND&nbsp;ARC</span>
      </div>

      <ul className={styles.links}>
        {NAV_LINKS.map(({ id, label }) => (
          <li key={id}>
            <button 
              onClick={() => scrollTo(id)} 
              className={`${styles.link} ${activeSection === id ? styles.active : ''}`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => scrollTo('cta')}
        className={styles.cta}
      >
        Enquire
      </button>

      {/* Progress Indicator */}
      <div className={styles.progressContainer}>
        <div ref={progressRef} className={styles.progressBar} />
      </div>
    </nav>
  )
}
