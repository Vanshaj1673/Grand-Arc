import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Magnetic({ children, strength = 0.5 }) {
  const ref = useRef(null)

  useGSAP(() => {
    const el = ref.current
    if (!el) return

    const onMouseMove = (e) => {
      const { clientX, clientY } = e
      const { left, top, width, height } = el.getBoundingClientRect()
      
      const x = (clientX - (left + width / 2)) * strength
      const y = (clientY - (top + height / 2)) * strength
      
      gsap.to(el, { x, y, duration: 0.6, ease: 'power3.out' })
    }

    const onMouseLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' })
    }

    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('mouseleave', onMouseLeave)

    return () => {
      el.removeEventListener('mousemove', onMouseMove)
      el.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [strength])

  return (
    <div ref={ref} style={{ display: 'inline-block' }}>
      {children}
    </div>
  )
}
