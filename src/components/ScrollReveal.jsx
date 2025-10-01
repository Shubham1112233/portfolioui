'use client'

import { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({ children, delay = 0, duration = 0.8, className = '' }) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [delay])

  return (
    <div
      ref={elementRef}
      className={`reveal ${isVisible ? 'active' : ''} ${className}`}
      style={{
        transitionDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  )
}
