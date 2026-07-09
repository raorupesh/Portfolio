import { useEffect, useState } from 'react'
import { site } from './site'
import { StatusBar } from './sections/StatusBar'
import { Topbar } from './sections/Topbar'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { SkillsSection } from './sections/SkillsSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { EducationSection } from './sections/EducationSection'
import { TestimonialsSection } from './sections/TestimonialsSection'
import { ContactSection } from './sections/ContactSection'
import { FooterSection } from './sections/FooterSection'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark'

  const saved = window.localStorage.getItem('portfolio-theme')
  if (saved === 'light' || saved === 'dark') return saved

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(getInitialTheme)

  useEffect(() => {
    document.title = site.title
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div className="page-shell" id="home">
      <StatusBar />
      <Topbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <TestimonialsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  )
}

export default App
