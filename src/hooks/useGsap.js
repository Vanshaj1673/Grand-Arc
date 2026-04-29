import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * useScrollReveal — attaches a GSAP ScrollTrigger fade-up reveal
 * to any element.
 *
 * @param {object} options
 * @param {number} options.delay       - stagger delay in seconds
 * @param {string} options.start       - ST start position string
 * @param {number} options.yOffset     - px translateY from / to
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const { delay = 0, start = 'top 85%', yOffset = 50 } = options

  useEffect(() => {
    if (!ref.current) return

    const el = ref.current
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: yOffset },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: 'play none none none',
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [delay, start, yOffset])

  return ref
}

/**
 * useParallax — vertical parallax on a ref element
 * @param {number} speed  - 0.2 = subtle, 0.6 = dramatic
 */
export function useParallax(speed = 0.3) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: speed * 100 * -1,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, el)

    return () => ctx.revert()
  }, [speed])

  return ref
}
