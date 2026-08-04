import { Suspense, lazy, useCallback, useEffect, useState } from 'react'
import { site } from './site'
import { useActiveSection } from './hooks/useActiveSection'
import { Topbar } from './sections/Topbar'
import { ThemeToggle } from './sections/ThemeToggle'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { SkillsSection } from './sections/SkillsSection'
import { FooterSection } from './sections/FooterSection'

const ProjectsSection = lazy(() =>
  import('./sections/ProjectsSection').then((m) => ({ default: m.ProjectsSection })),
)
const ExperienceSection = lazy(() =>
  import('./sections/ExperienceSection').then((m) => ({ default: m.ExperienceSection })),
)
const EducationSection = lazy(() =>
  import('./sections/EducationSection').then((m) => ({ default: m.EducationSection })),
)
const PublicationsSection = lazy(() =>
  import('./sections/PublicationsSection').then((m) => ({ default: m.PublicationsSection })),
)
const TestimonialsSection = lazy(() =>
  import('./sections/TestimonialsSection').then((m) => ({ default: m.TestimonialsSection })),
)
const ContactSection = lazy(() =>
  import('./sections/ContactSection').then((m) => ({ default: m.ContactSection })),
)

const getInitialTheme = (): 'dark' | 'light' => {
  if (typeof window === 'undefined') return 'dark'

  const preset = document.documentElement.dataset.theme
  if (preset === 'light' || preset === 'dark') return preset

  const saved = window.localStorage.getItem('portfolio-theme')
  if (saved === 'light' || saved === 'dark') return saved

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(getInitialTheme)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    document.title = site.title
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    const root = document.documentElement
    root.classList.remove('theme-transition')
    void root.offsetWidth
    root.classList.add('theme-transition')
    window.setTimeout(() => root.classList.remove('theme-transition'), 360)
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <div className="page-shell" id="home">
      <Topbar
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={() => setMobileMenuOpen((v) => !v)}
        closeMobileMenu={closeMobileMenu}
      />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <Suspense fallback={null}>
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <PublicationsSection />
          <TestimonialsSection />
          <ContactSection />
        </Suspense>
      </main>
      <FooterSection />
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay open" onClick={closeMobileMenu} aria-hidden="true" />
      )}
    </div>
  )
}

export default App
