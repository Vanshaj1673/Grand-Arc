import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import styles from './Navbar.module.scss'

const NAV_LINKS = [
  { label: 'Overview',      href: '#why' },
  { label: 'Retail',        href: '#retail' },
  { label: 'Dining',        href: '#dining' },
  { label: 'Entertainment', href: '#entertainment' },
  { label: 'Events',        href: '#events' },
]

export default function Navbar({ lenis }) {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)

  // Reveal on mount
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'expo.out', delay: 0.4 }
    )
  }, [])

  // Solid bg after scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el && lenis?.current) lenis.current.scrollTo(el, { offset: -80, duration: 1.6 })
  }

  return (
    <nav ref={navRef} className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <span className={styles.logoMark}>✦</span>
        <span className={styles.logoName}>GRAND&nbsp;ARC</span>
      </div>

      <ul className={styles.links}>
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <button onClick={() => scrollTo(href)} className={styles.link}>
              {label}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => scrollTo('#cta')}
        className={styles.cta}
        id="nav-cta-btn"
      >
        Book a Tour
      </button>
    </nav>
  )
}
