import { SunIcon, MoonIcon } from '../icons'

interface ThemeToggleProps {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

export function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  const isDark = theme === 'dark'

  return (
    <button
      className="theme-fab"
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <SunIcon aria-hidden="true" /> : <MoonIcon aria-hidden="true" />}
    </button>
  )
}
