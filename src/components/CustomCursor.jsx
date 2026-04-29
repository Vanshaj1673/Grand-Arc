import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import styles from './CustomCursor.module.scss'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const [cursorType, setCursorType] = useState('default')
  const [cursorLabel, setCursorLabel] = useState('')

  useGSAP(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    // Movement
    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      })
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: 'power2.out'
      })
    }

    // Interaction states
    const onMouseEnter = (e) => {
      const target = e.target
      
      if (target.closest('button, a, .clickable')) {
        setCursorType('pointer')
      }
      
      const exploreTarget = target.closest('[data-cursor="explore"]')
      if (exploreTarget) {
        setCursorType('explore')
        setCursorLabel('Explore')
      }

      const closeTarget = target.closest('[data-cursor="close"]')
      if (closeTarget) {
        setCursorType('close')
      }
    }

    const onMouseLeave = () => {
      setCursorType('default')
      setCursorLabel('')
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseEnter)
    document.addEventListener('mouseout', onMouseLeave)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseEnter)
      document.removeEventListener('mouseout', onMouseLeave)
    }
  }, [])

  return (
    <div className={styles.cursorWrapper}>
      <div 
        ref={cursorRef} 
        className={`${styles.cursor} ${styles[cursorType]}`}
      />
      <div 
        ref={followerRef} 
        className={`${styles.follower} ${styles[cursorType]}`}
      >
        {cursorType === 'explore' && <span className={styles.label}>{cursorLabel}</span>}
        {cursorType === 'close' && <span className={styles.closeIcon}>×</span>}
      </div>
    </div>
  )
}
