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
        <nav className="nav" aria-label="Section navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="theme-toggle" role="group" aria-label="Theme toggle">
          <button
            className={`theme-option ${isDark ? 'active' : ''}`}
            onClick={toggleTheme}
            type="button"
            aria-pressed={isDark}
          >
            Dark
          </button>
          <button
            className={`theme-option ${!isDark ? 'active' : ''}`}
            onClick={toggleTheme}
            type="button"
            aria-pressed={!isDark}
          >
            Light
          </button>
        </div>
      </div>
    </header>
  )
}
