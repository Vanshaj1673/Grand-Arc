import { useRef, useState, useEffect } from 'react'

export default function LazyVideo({ src, webm, poster, className, videoRef }) {
  const localRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  // Use the provided ref if available, otherwise use localRef
  const activeRef = videoRef || localRef

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05 }
    )

    if (activeRef.current) {
      observer.observe(activeRef.current)
    }

    return () => observer.disconnect()
  }, [activeRef])

  return (
    <video
      ref={activeRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
    >
      {isVisible && (
        <>
          {webm && <source src={webm} type="video/webm" />}
          <source src={src} type="video/mp4" />
        </>
      )}
    </video>
  )
}
