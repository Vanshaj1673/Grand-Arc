import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useScrollReveal } from '../hooks/useGsap'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './EventsSection.module.scss'

const EVENTS = [
  {
    id: 'fashion-week',
    type: 'Annual',
    name: 'Grand Arc Fashion Week',
    desc: 'A 5-day runway event inside the atrium — broadcast nationally. 200 press, 40 labels, 50,000 live attendees.',
    capacity: '50,000 visitors',
    img: '/assets/event-fashion.jpg',
  },
  {
    id: 'gala',
    type: 'Quarterly',
    name: 'Luxury Brand Gala',
    desc: 'An invitation-only evening for HNI clients and brand partners — curated champagne, private previews, networking.',
    capacity: '800 HNI guests',
    img: '/assets/event-gala.jpg',
  },
  {
    id: 'festival',
    type: 'Seasonal',
    name: 'The Grand Festivale',
    desc: 'Seasonal experiential festivals — Diwali, Christmas, Holi — driving 3× footfall spikes across 10-day windows.',
    capacity: '3× footfall surge',
    img: '/assets/event-festival.jpg',
  },
  {
    id: 'corporate',
    type: 'Available year-round',
    name: 'Private Venue Hire',
    desc: 'The 8,000 sq ft Grand Hall and rooftop terrace are available for corporate events, product launches, and brand activations.',
    capacity: 'Up to 2,000 guests',
    img: '/assets/event-corporate.jpg',
  },
]

export default function EventsSection() {
  const sectionRef = useRef(null)
  const headRef    = useScrollReveal({ yOffset: 40 })

  useGSAP(() => {
    gsap.from('.events-swiper-container', {
      opacity: 0,
      y: 40,
      duration: 1.5,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
      }
    })
  }, { scope: sectionRef })

  return (
    <section id="events" ref={sectionRef} className={styles.section}>
      <div ref={headRef} className={`${styles.header} will-animate`}>
        <p className={styles.eyebrow}>Events & Activations</p>
        <h2 className={styles.headline}>
          The mall<br />
          <em>is the stage.</em>
        </h2>
        <p className={styles.sub}>
          A built-in event calendar that keeps your brand front-of-mind 365 days a year.
        </p>
      </div>

      <div className={`${styles.swiperOuter} events-swiper-container will-animate`}>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            768:  { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: '.events-next',
            prevEl: '.events-prev',
          }}
          pagination={{ el: '.events-pag', clickable: true }}
          grabCursor
          className={styles.swiper}
        >
          {EVENTS.map(({ id, type, name, desc, capacity, img }) => (
            <SwiperSlide key={id} className={styles.slide}>
              <article className={`${styles.card} gpu-accelerate`}>
                <div className={styles.imgWrap}>
                  <img src={img} alt={name} className={styles.img} loading="lazy" />
                  <div className={styles.imgOverlay} />
                  <span className={styles.type}>{type}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardName}>{name}</h3>
                  <p className={styles.cardDesc}>{desc}</p>
                  <div className={styles.cardCapacity}>{capacity}</div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.navRow}>
          <button className={`events-prev ${styles.navBtn}`} aria-label="Previous event">←</button>
          <div className={`events-pag ${styles.pag}`} />
          <button className={`events-next ${styles.navBtn}`} aria-label="Next event">→</button>
        </div>
      </div>
    </section>
  )
}
