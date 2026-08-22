import { useEffect, useState } from 'react'
import { site } from '../site'

interface TopbarProps {
  activeSection: string
  mobileMenuOpen: boolean
  toggleMobileMenu: () => void
  closeMobileMenu: () => void
}

export function Topbar({ activeSection, mobileMenuOpen, toggleMobileMenu, closeMobileMenu }: TopbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault()
    const id = link.toLowerCase()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      el.focus({ preventScroll: true })
      window.history.pushState(null, '', `#${id}`)
    }
    closeMobileMenu()
  }

  return (
    <header className={`topbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="topbar-inner">
        <nav className="nav" aria-label={site.nav.ariaLabel}>
          {site.nav.links.map((link) => {
            const sectionId = link.toLowerCase()
            return (
              <a
                href={`#${sectionId}`}
                key={link}
                className={activeSection === sectionId ? 'active' : ''}
                onClick={(e) => handleNavClick(e, link)}
              >
                {link}
              </a>
            )
          })}
        </nav>
        <button
          className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-inner" aria-label="Mobile navigation">
          {site.nav.links.map((link) => {
            const sectionId = link.toLowerCase()
            return (
              <a
                href={`#${sectionId}`}
                key={link}
                className={activeSection === sectionId ? 'active' : ''}
                onClick={(e) => handleNavClick(e, link)}
              >
                {link}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
