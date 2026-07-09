import { useEffect, useState } from 'react'

export function useActiveSection() {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]')
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null
        for (const entry of entries) {
          if (entry.isIntersecting && (!best || entry.intersectionRatio > best.intersectionRatio)) {
            best = entry
          }
        }
        if (best) setActiveId(best.target.id)
      },
      { rootMargin: '-60px 0px -70% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return activeId
}
