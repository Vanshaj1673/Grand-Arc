import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import styles from './Hero.module.scss'

// Ambient stat strip
const STATS = [
  { value: '4.2M', label: 'sq ft of premier space' },
  { value: '600+', label: 'curated brands' },
  { value: '28M',  label: 'annual visitors' },
  { value: '#1',   label: 'luxury destination' },
]

export default function Hero() {
  const containerRef = useRef(null)
  const videoRef     = useRef(null)
  const headlineRef  = useRef(null)
  const subRef       = useRef(null)
  const statsRef     = useRef(null)
  const lineRef      = useRef(null)
  const scrollCueRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })

    // Cinematic reveal sequence — 10-second emotional impact
    tl.fromTo(videoRef.current,
      { scale: 1.15, filter: 'blur(10px)' },
      { scale: 1, filter: 'blur(0px)', duration: 2.8, ease: 'power2.out' }
    )
    .fromTo(lineRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 1 },
      '-=2.0'
    )
    .fromTo(headlineRef.current.children,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.4, stagger: 0.15 },
      '-=1.2'
    )
    .fromTo(subRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1 },
      '-=0.9'
    )
    .fromTo(statsRef.current.children,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 },
      '-=0.7'
    )
    .fromTo(scrollCueRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.4'
    )

    // Subtle parallax on video background
    gsap.to(videoRef.current, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })
  }, { scope: containerRef })

  return (
    <section id="hero" ref={containerRef} className={styles.hero}>
      {/* ── Background video ── */}
      <div className={styles.videoWrap}>
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/hero-poster.jpg"
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
          <source src="/assets/hero.webm" type="video/webm" />
        </video>
      </div>

      {/* ── Layered overlays ── */}
      <div className={styles.overlayGradient} aria-hidden />
      <div className={styles.overlayVignette} aria-hidden />
      <div className={styles.overlayGrid} aria-hidden />

      {/* ── Content ── */}
      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span ref={lineRef} className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>Grand Arc — New Delhi</span>
        </div>

        <h1 ref={headlineRef} className={styles.headline}>
          <span>Where the World</span>
          <span className={styles.headlineAccent}>Comes to&nbsp;Shop.</span>
        </h1>

        <p ref={subRef} className={styles.sub}>
          4.2 million square feet of curated retail, dining, and culture —<br />
          designed for the extraordinary.
        </p>

        {/* ── Stat bar ── */}
        <ul ref={statsRef} className={styles.stats}>
          {STATS.map(({ value, label }) => (
            <li key={value} className={styles.stat}>
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Scroll cue ── */}
      <div ref={scrollCueRef} className={styles.scrollCue} aria-label="Scroll to explore">
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  )
}
