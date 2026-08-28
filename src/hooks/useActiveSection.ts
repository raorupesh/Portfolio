import { useEffect, useState } from 'react'

export function useActiveSection() {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const ratios = new Map<Element, number>()

    const pickActive = () => {
      let bestId = ''
      let bestRatio = 0
      for (const [el, ratio] of ratios) {
        if (ratio > bestRatio) {
          bestRatio = ratio
          bestId = (el as HTMLElement).id
        }
      }
      if (bestId) setActiveId(bestId)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0)
        }
        pickActive()
      },
      { rootMargin: '-60px 0px -70% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    const observeNewSections = () => {
      document.querySelectorAll<HTMLElement>('section[id]').forEach((el) => {
        if (!ratios.has(el)) {
          ratios.set(el, 0)
          observer.observe(el)
        }
      })
    }

    observeNewSections()

    // Projects/Experience/Education/Publications/Testimonials/Contact are
    // React.lazy-loaded, so they mount after this effect's initial scan.
    const mutationTarget = document.getElementById('main-content') ?? document.body
    const mutationObserver = new MutationObserver(observeNewSections)
    mutationObserver.observe(mutationTarget, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  return activeId
}
