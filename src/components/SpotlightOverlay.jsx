import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import styles from './SpotlightOverlay.module.scss'

export default function SpotlightOverlay({ zone, onClose }) {
  const overlayRef = useRef(null)
  const contentRef = useRef(null)

  useGSAP(() => {
    if (!zone) return

    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })

    // Cinematic entrance
    tl.fromTo(overlayRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.8 }
    )
    .fromTo(contentRef.current,
      { y: 60, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2 },
      '-=0.4'
    )
    .from('.spotlight-item', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
    }, '-=0.8')

  }, { scope: overlayRef, dependencies: [zone] })

  const handleClose = () => {
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: onClose
    })
  }

  if (!zone) return null

  return (
    <div ref={overlayRef} className={styles.overlay}>
      <div className={styles.backdrop} onClick={handleClose} data-cursor="close" />
      
      <div ref={contentRef} className={styles.content}>
        <button className={styles.closeBtn} onClick={handleClose} data-cursor="close">×</button>
        
        <div className={styles.inner}>
          <div className={styles.left}>
            <img src={zone.img} alt={zone.name} className={styles.mainImg} />
            <div className={styles.imgOverlay} />
          </div>

          <div className={styles.right}>
            <span className={`${styles.tag} spotlight-item`}>{zone.tag}</span>
            <h2 className={`${styles.title} spotlight-item`}>{zone.name}</h2>
            <p className={`${styles.desc} spotlight-item`}>{zone.desc}</p>
            
            <div className={`${styles.stats} spotlight-item`}>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Zone Status</span>
                <span className={styles.statValue}>85% Allocated</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Key Metric</span>
                <span className={styles.statValue}>{zone.highlight}</span>
              </div>
            </div>

            <div className={`${styles.brands} spotlight-item`}>
              <h4 className={styles.brandsTitle}>Anchors & Featured Brands</h4>
              <div className={styles.brandGrid}>
                {/* Mock brand logos/placeholders */}
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className={styles.brandLogo} />
                ))}
              </div>
            </div>

            <div className={`${styles.actions} spotlight-item`}>
              <button className={styles.btnPrimary}>Download Zone Prospectus</button>
              <button className={styles.btnSecondary}>Virtual Tour 360°</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
