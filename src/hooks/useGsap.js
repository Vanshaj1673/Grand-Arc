import { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

/**
 * useScrollReveal — attaches a GSAP ScrollTrigger fade-up reveal
 * to any element.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const { delay = 0, start = 'top 85%', yOffset = 50 } = options

  useGSAP(() => {
    if (!ref.current) return

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: yOffset },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: 'play none none none',
        },
      }
    )
  }, { scope: ref, dependencies: [delay, start, yOffset] })

  return ref
}

/**
 * useParallax — vertical parallax on a ref element
 */
export function useParallax(speed = 0.3) {
  const ref = useRef(null)

  useGSAP(() => {
    if (!ref.current) return

    gsap.to(ref.current, {
      yPercent: speed * 50 * -1, // Slower, more elegant default
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, { scope: ref, dependencies: [speed] })

  return ref
}
