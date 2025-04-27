import { useEffect, useState } from 'react'
import './FadeIn.scss'

function FadeInOnLoad({ children, className = '' }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100) // délai léger pour l'effet

    return () => clearTimeout(timer)
  }, [])

  return (
    <article className={`fade-in-on-load ${isVisible ? 'is-visible' : ''} ${className}`}>
      {children}
    </article>
  )
}

export default FadeInOnLoad
