import { site } from '../site'

interface TopbarProps {
  theme: 'dark' | 'light'
  toggleTheme: () => void
  activeSection: string
  mobileMenuOpen: boolean
  toggleMobileMenu: () => void
  closeMobileMenu: () => void
}

export function Topbar({
  theme,
  toggleTheme,
  activeSection,
  mobileMenuOpen,
  toggleMobileMenu,
  closeMobileMenu,
}: TopbarProps) {
  const isDark = theme === 'dark'

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault()
    const id = link.toLowerCase()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      el.focus({ preventScroll: true })
    }
    closeMobileMenu()
  }

  return (
    <>
      <header className="topbar">
        <a href="#home" className="brand" style={{ textDecoration: 'none' }}>
          {site.brand}
          <span>{site.brandSuffix}</span>
        </a>
        <div className="topbar-actions">
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
          <div className="theme-toggle" role="radiogroup" aria-label={site.theme.ariaLabel}>
            <button
              className={`theme-option ${isDark ? 'active' : ''}`}
              onClick={() => { if (!isDark) toggleTheme() }}
              type="button"
              role="radio"
              aria-checked={isDark}
              tabIndex={isDark ? 0 : -1}
            >
              {site.theme.dark}
            </button>
            <button
              className={`theme-option ${!isDark ? 'active' : ''}`}
              onClick={() => { if (isDark) toggleTheme() }}
              type="button"
              role="radio"
              aria-checked={!isDark}
              tabIndex={!isDark ? 0 : -1}
            >
              {site.theme.light}
            </button>
          </div>
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
      </header>
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
    </>
  )
}
