import { useEffect, useState } from 'react'

export default function useActiveSection(sectionIds, options = {}) {
  const [active, setActive] = useState(sectionIds?.[0] ?? null)

  useEffect(() => {
    if (!sectionIds?.length) return
    const els = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id)
        }
      })
    }, { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1], ...options })

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds?.join(','), options.rootMargin, options.threshold])

  return active
}
