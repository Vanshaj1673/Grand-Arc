import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import styles from './IntroLoader.module.scss'

export default function IntroLoader({ onComplete }) {
  const loaderRef = useRef(null)
  const logoRef   = useRef(null)
  const lineRef   = useRef(null)
  const [percent, setPercent] = useState(0)

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: 'expo.inOut',
          onComplete
        })
      }
    })

    // Loading progress simulation
    const p = { val: 0 }
    gsap.to(p, {
      val: 100,
      duration: 2.5,
      ease: 'power2.inOut',
      onUpdate: () => setPercent(Math.floor(p.val))
    })

    // Cinematic reveal sequence
    tl.fromTo(logoRef.current,
      { y: 40, opacity: 0, letterSpacing: '0.5em' },
      { y: 0, opacity: 1, letterSpacing: '0.25em', duration: 1.5, ease: 'expo.out' }
    )
    .fromTo(lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2, ease: 'power2.inOut' },
      '-=0.8'
    )
    .to(logoRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: 'power2.in',
      delay: 1
    })

  }, { scope: loaderRef })

  return (
    <div ref={loaderRef} className={styles.loader}>
      <div className={styles.center}>
        <div ref={logoRef} className={styles.logo}>
          <span className={styles.logoMark}>✦</span>
          <span className={styles.logoName}>GRAND ARC</span>
        </div>
        <div className={styles.lineWrap}>
          <div ref={lineRef} className={styles.line} />
        </div>
        <div className={styles.progress}>
          <span className={styles.percent}>{percent}%</span>
          <span className={styles.label}>ESTABLISHING CONNECTION</span>
        </div>
      </div>
    </div>
  )
}
