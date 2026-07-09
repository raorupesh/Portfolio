import { site } from '../site'

interface TopbarProps {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

export function Topbar({ theme, toggleTheme }: TopbarProps) {
  const isDark = theme === 'dark'

  return (
    <header className="topbar">
      <div className="brand">
        {site.brand}
        <span>{site.brandSuffix}</span>
      </div>
      <div className="topbar-actions">
        <nav className="nav" aria-label={site.nav.ariaLabel}>
          {site.nav.links.map((link) => (
            <a href={`#${link.toLowerCase()}`} key={link}>
              {link}
            </a>
          ))}
        </nav>
        <div className="theme-toggle" role="group" aria-label={site.theme.ariaLabel}>
          <button
            className={`theme-option ${isDark ? 'active' : ''}`}
            onClick={toggleTheme}
            type="button"
            aria-pressed={isDark}
          >
            {site.theme.dark}
          </button>
          <button
            className={`theme-option ${!isDark ? 'active' : ''}`}
            onClick={toggleTheme}
            type="button"
            aria-pressed={!isDark}
          >
            {site.theme.light}
          </button>
        </div>
      </div>
    </header>
  )
}
