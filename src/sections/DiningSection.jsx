import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useScrollReveal } from '../hooks/useGsap'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import styles from './DiningSection.module.scss'

const VENUES = [
  {
    id: 'sky-bar',
    category: 'Sky Lounge',
    name: 'Altitude',
    desc: 'A rooftop sunset experience at 120 feet — craft cocktails, live jazz, and the Delhi skyline as your backdrop.',
    detail: 'Level 7 · Open-air · 280 covers',
    img: '/assets/dining-sky.jpg',
  },
  {
    id: 'omakase',
    category: 'Fine Dining',
    name: 'Omakase by Nobu',
    desc: 'A 12-seat chef\'s counter curating the most intimate Japanese dining experience in the city.',
    detail: 'Level 2 · Reservation only · 12 covers',
    img: '/assets/dining-omakase.jpg',
  },
  {
    id: 'market',
    category: 'Food Market',
    name: 'The Grand Market',
    desc: '22 artisanal food concepts under a single spectacular atrium. All-day dining from breakfast to midnight.',
    detail: 'Ground · Walk-in · 800+ covers',
    img: '/assets/dining-market.jpg',
  },
  {
    id: 'cellar',
    category: 'Wine & Spirits',
    name: 'The Cellar',
    desc: 'A curated cave of 1,400 wine labels and rare spirits — tasting events and private dining by reservation.',
    detail: 'Level B1 · Events & retail',
    img: '/assets/dining-cellar.jpg',
  },
]

export default function DiningSection() {
  const sectionRef = useRef(null)
  const headRef    = useScrollReveal({ yOffset: 40 })

  useGSAP(() => {
    // Subtle entry for the swiper container
    gsap.from('.dining-swiper-container', {
      opacity: 0,
      scale: 0.95,
      duration: 1.5,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
      }
    })
  }, { scope: sectionRef })

  return (
    <section id="dining" ref={sectionRef} className={styles.section}>
      <div ref={headRef} className={`${styles.header} will-animate`}>
        <p className={styles.eyebrow}>Food & Beverage</p>
        <h2 className={styles.headline}>
          Dining as<br /><em>destination.</em>
        </h2>
        <p className={styles.sub}>
          40+ F&B concepts across 7 levels — from midnight ramen to
          Michelin-starred omakase.
        </p>
      </div>

      <div className={`${styles.swiperWrap} dining-swiper-container gpu-accelerate`}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          speed={900}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          navigation={{
            nextEl: '.swiper-btn-next',
            prevEl: '.swiper-btn-prev',
          }}
          pagination={{ el: '.swiper-pag', clickable: true, type: 'bullets' }}
          loop
          className={styles.swiper}
        >
          {VENUES.map(({ id, category, name, desc, detail, img }) => (
            <SwiperSlide key={id} className={styles.slide}>
              <div className={styles.imgWrap}>
                <img
                  src={img}
                  alt={name}
                  className={styles.slideImg}
                  loading="lazy"
                />
                <div className={styles.slideOverlay} />
              </div>
              <div className={styles.slideContent}>
                <span className={styles.slideCategory}>{category}</span>
                <h3 className={styles.slideName}>{name}</h3>
                <p className={styles.slideDesc}>{desc}</p>
                <span className={styles.slideDetail}>{detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom nav */}
        <div className={styles.navRow}>
          <button className={`swiper-btn-prev ${styles.navBtn}`} aria-label="Previous venue">←</button>
          <div className={`swiper-pag ${styles.pagination}`} />
          <button className={`swiper-btn-next ${styles.navBtn}`} aria-label="Next venue">→</button>
        </div>
      </div>
    </section>
  )
}
