import { useEffect, useRef, useState } from 'react'

type Project = {
  name: string
  category: string
  description: string
  impact: string
  tags: string[]
  href: string
}

type Experience = {
  role: string
  company: string
  location: string
  period: string
  summary: string
}

type Testimonial = {
  quote: string
  person: string
  role: string
}

const env = import.meta.env as Record<string, string | undefined>

const splitEnvList = (value: string | undefined, fallback: string[]) =>
  value
    ? value
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean)
    : fallback

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const savedTheme = window.localStorage.getItem('portfolio-theme')
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

const site = {
  title: env.VITE_SITE_TITLE ?? 'Rupeshwar Rao | Software Engineer',
  brand: env.VITE_SITE_BRAND ?? 'raorupesh',
  brandSuffix: env.VITE_SITE_BRAND_SUFFIX ?? '.github.io',
  name: env.VITE_SITE_NAME ?? 'Rupeshwar Rao',
  role: env.VITE_SITE_ROLE ?? 'Software Engineer',
  location: env.VITE_SITE_LOCATION ?? 'Seattle, WA',
  timeZone: env.VITE_SITE_TIMEZONE ?? 'America/Los_Angeles',
  focus: splitEnvList(env.VITE_SITE_FOCUS, ['React', 'TypeScript', 'UI Engineering', 'LLM Integration', 'Bot Services']),
  availability: splitEnvList(env.VITE_SITE_AVAILABILITY, ['Full Stack Engineer', 'AI Engineer', 'Product Engineer']),
  headline:
    env.VITE_SITE_HEADLINE ??
    'Building clean digital products that help teams move faster and feel confident in the work.',
  intro:
    env.VITE_SITE_INTRO ??
    'I create thoughtful front-end experiences, ship practical tools, and communicate technical decisions clearly.',
  aboutTitle: env.VITE_SITE_ABOUT_TITLE ?? 'Full-stack engineer who ships, not just plans.',
  aboutOne:
    env.VITE_SITE_ABOUT_ONE ??
    '4+ years building production software across React, Node.js, and Python from customer-facing interfaces to the backend services behind them.',
  aboutTwo:
    env.VITE_SITE_ABOUT_TWO ??
    'I have shipped 5+ end-to-end products solo, from a Gemini-powered code refactoring tool to a full auth-and-content blogging platform, so I can own a feature from database schema to deployed UI.',
  aboutThree:
    env.VITE_SITE_ABOUT_THREE ??
    'Currently looking for a Software Engineer or Full Stack role where I can bring that same ownership to a team that ships fast and cares about quality.',
  email: env.VITE_SITE_EMAIL ?? 'rupesh.inquiries@gmail.com',
  openToWork: env.VITE_SITE_OPEN_TO_WORK !== 'false',
  responseTime: env.VITE_SITE_RESPONSE_TIME ?? 'usually replies within 24h',
  resumeUrl: env.VITE_SITE_RESUME_URL ?? '',
  calendlyUrl: env.VITE_SITE_CALENDLY_URL ?? '',
  github: env.VITE_SITE_GITHUB ?? 'https://github.com/raorupesh',
  githubUsername: env.VITE_SITE_GITHUB_USERNAME ?? 'raorupesh',
  linkedin: env.VITE_SITE_LINKEDIN ?? 'https://www.linkedin.com/in/raorupeshwar',
  linkedinRecommendations:
    env.VITE_SITE_LINKEDIN_RECOMMENDATIONS ?? 'https://www.linkedin.com/in/raorupeshwar/details/recommendations/',
  projectsLabel: env.VITE_SITE_PROJECTS_LABEL ?? 'Selected work.',
  projectsNote:
    env.VITE_SITE_PROJECTS_NOTE ?? 'Shipped products with real users, real constraints, and measurable outcomes.',
  certifications: splitEnvList(env.VITE_SITE_CERTIFICATIONS, []),
}

const skillCategories: { name: string; items: string[] }[] = [
  { name: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Dart'] },
  { name: 'Frontend', items: ['React', 'Next.js', 'Angular', 'Flutter', 'TailwindCSS'] },
  { name: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { name: 'Databases', items: ['PostgreSQL', 'MongoDB'] },
  { name: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Docker'] },
  { name: 'AI / ML', items: ['Machine Learning', 'System Design'] },
]

const projects: Project[] = [
  {
    name: 'Remorph - AI Code Refactoring Tool',
    category: 'AI Tooling + Backend',
    description:
      'Paste or upload code and get a Gemini-powered refactor with a line-by-line diff view for exactly what changed.',
    impact: 'Supports 9 programming languages',
    tags: ['Node.js', 'Express.js', 'Gemini API', 'Vite'],
    href: env.VITE_PROJECT_REMORPH_URL ?? 'https://github.com/raorupesh/Remorph',
  },
  {
    name: 'Mean - Medium-like Blogging Platform',
    category: 'Full-Stack App',
    description:
      'A blogging platform with auth, scheduling, image uploads, bookmarks, and self-documented API routes.',
    impact: 'Built with JWT, Drizzle, and OpenAPI',
    tags: ['Next.js', 'PostgreSQL', 'Drizzle ORM', 'TailwindCSS'],
    href: env.VITE_PROJECT_MEAN_URL ?? 'https://github.com/raorupesh/Mean_Blogging_Platform',
  },
  {
    name: 'EchoJournal - Mood Tracking SaaS',
    category: 'SaaS + Mobile-Web',
    description:
      'A journaling app for logging moods, tracking patterns, and reflecting on mental well-being over time.',
    impact: 'Deployed on Azure with Google SSO',
    tags: ['Angular', 'Node.js', 'MongoDB', 'Mongoose'],
    href: env.VITE_PROJECT_ECHOJOURNAL_URL ?? 'https://github.com/raorupesh/EchoJournal-Mood-Booster',
  },
  {
    name: 'SpendMate - Group Expense Manager',
    category: 'Flutter App',
    description:
      'A mobile-first expense splitting app with layered architecture and offline-first SQLite storage.',
    impact: 'Offline-first by design',
    tags: ['Flutter', 'Dart', 'Provider', 'SQLite'],
    href: env.VITE_PROJECT_SPENDMATE_URL ?? 'https://github.com/raorupesh/SpendMate',
  },
  {
    name: 'Smart Parking System',
    category: 'ML + IoT',
    description:
      'An end-to-end vehicle detection and classification system that connects sensor input, ML inference, and output handling.',
    impact: 'Published research project',
    tags: ['Python', 'Machine Learning', 'IoT'],
    href: env.VITE_PROJECT_PARKING_URL ?? 'https://github.com/raorupesh/Smart-Parking-Website',
  },
]

const experience: Experience[] = [
  {
    role: 'Web Developer',
    company: 'Seattle University Events',
    location: 'United States',
    period: '2025 - 2026',
    summary:
      'Built and deployed full-stack event services on cloud infrastructure, adding observability and structured logging to cut down debugging time during live events.',
  },
  {
    role: 'Enterprise Application Developer',
    company: 'ZS Associates',
    location: 'India',
    period: '2021 - 2024',
    summary:
      'Developed and maintained enterprise-scale application modules in a structured SDLC environment, coordinating with cross-functional teams to ship features on schedule.',
  },
]

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Seattle University',
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'MIT Art, Design and Technology University',
  },
]

const skillsWithLevels = [
  { name: 'React & TypeScript', level: 95 },
  { name: 'Node.js & Express', level: 90 },
  { name: 'Next.js & Full-Stack', level: 88 },
  { name: 'Python & ML', level: 85 },
  { name: 'Angular', level: 80 },
  { name: 'AWS & Cloud', level: 88 },
  { name: 'PostgreSQL & MongoDB', level: 90 },
  { name: 'Docker & DevOps', level: 82 },
  { name: 'Flutter & Mobile', level: 78 },
  { name: 'UI/UX Engineering', level: 88 },
  { name: 'REST APIs & Microservices', level: 90 },
  { name: 'System Design', level: 85 },
]

const testimonials: Testimonial[] = [
  {
    quote:
      'Great leader with excellent organizational and managerial ability. He leads with confidence and helps others stay motivated on outcomes.',
    person: 'Senior Reporting Manager',
    role: 'Enterprise Manager',
  },
  {
    quote:
      'Strong leadership and communication skills with solid knowledge across technologies. Honest, hardworking, and a great team player.',
    person: 'Senior Colleague',
    role: 'Project Lead',
  },
  {
    quote:
      'Rupeshwar shows the kind of reliability that hiring teams value immediately. Responsive, attentive, and able to carry responsibility independently.',
    person: 'Team Member',
    role: 'Engineering Peer',
  },
]

const stats = [
  { label: 'Projects shipped', value: '5+' },
  { label: 'Languages', value: '8+' },
  { label: 'Years active', value: '4+' },
  { label: 'Response time', value: '<24h' },
]

const formatLocalTime = (timeZone: string) => {
  try {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      timeZone,
    }).format(new Date())
  } catch {
    return ''
  }
}

function useLocalTime(timeZone: string) {
  const [time, setTime] = useState(() => formatLocalTime(timeZone))

  useEffect(() => {
    const id = window.setInterval(() => setTime(formatLocalTime(timeZone)), 30_000)
    return () => window.clearInterval(id)
  }, [timeZone])

  return time
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(getInitialTheme)
  const localTime = useLocalTime(site.timeZone)

  const aboutRef = useReveal<HTMLElement>()
  const skillsRef = useReveal<HTMLElement>()
  const projectsRef = useReveal<HTMLElement>()
  const experienceRef = useReveal<HTMLElement>()
  const educationRef = useReveal<HTMLElement>()
  const testimonialsRef = useReveal<HTMLElement>()
  const contactRef = useReveal<HTMLElement>()

  useEffect(() => {
    document.title = site.title
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="page-shell" id="home">
      <div className="status-bar">
        <div className="status-bar-inner">
          <span className={`status-dot ${site.openToWork ? 'on' : 'off'}`} aria-hidden="true" />
          <span className="status-text">
            {site.openToWork ? 'Open to new opportunities' : 'Focused on current work'}
          </span>
          <span className="status-sep" aria-hidden="true">
            /
          </span>
          <span className="status-text muted">{site.responseTime}</span>
          <span className="status-sep" aria-hidden="true">
            /
          </span>
          <span className="status-text muted">
            {localTime ? `${localTime} local` : site.location} · {site.location}
          </span>
        </div>
      </div>

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
            <button className={`theme-option ${theme === 'dark' ? 'active' : ''}`} onClick={toggleTheme} type="button">
              Dark
            </button>
            <button className={`theme-option ${theme === 'light' ? 'active' : ''}`} onClick={toggleTheme} type="button">
              Light
            </button>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="section hero" aria-labelledby="hero-title">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              {site.availability.join(' · ')}
            </p>
            <h1 id="hero-title">
              {site.name}
              <br />
              {site.role}
            </h1>
            <p className="lead">{site.headline}</p>
            <p className="lead muted">{site.intro}</p>

            <div className="hero-meta" aria-label="Key focus areas">
              {site.focus.slice(0, 3).map((focus) => (
                <span key={focus}>{focus}</span>
              ))}
              <span>{site.location}</span>
            </div>

            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Hire me
              </a>
              {site.resumeUrl ? (
                <a className="button secondary" href={site.resumeUrl} target="_blank" rel="noreferrer">
                  View resume
                </a>
              ) : null}
              {site.calendlyUrl ? (
                <a className="button secondary" href={site.calendlyUrl} target="_blank" rel="noreferrer">
                  Book a call
                </a>
              ) : null}
              <a className="button ghost" href="#projects">
                View work
              </a>
            </div>

            <div className="hero-metrics">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-card" aria-label="Profile summary card">
            <div className="hero-card-header">
              <span className="dot red" />
              <span className="dot amber" />
              <span className="dot green" />
              <span className="terminal-title">status / {site.brand}</span>
            </div>
            <pre className="terminal">{`name        ${site.name}
role        ${site.role}
location    ${site.location}
focus       ${site.focus.join(', ')}
status      ${site.openToWork ? 'available for new roles' : 'heads down, currently building'}
reply time  ${site.responseTime}
contact     ${site.email}`}</pre>
          </div>
        </section>

        <section className="section" id="about" ref={aboutRef}>
          <div className="section-heading">
            <div>
              <p className="section-label">01 · About</p>
              <h2>Practical engineering with clear communication.</h2>
            </div>
            <p className="section-note">
              A focused summary of the kind of work I do, the problems I like to solve, and the impact I try to create.
            </p>
          </div>

          <div className="grid-two">
            <div className="panel">
              <h3>{site.aboutTitle}</h3>
              <p>{site.aboutOne}</p>
              <p>{site.aboutTwo}</p>
              <p>{site.aboutThree}</p>
            </div>

            <div className="panel stack">
              <div>
                <h3>What I optimize for</h3>
                <p>Readable code, reliable delivery, and interfaces that make the product easier to use.</p>
              </div>
              <div>
                <h3>Current focus</h3>
                <p>Front-end architecture, product-minded full-stack work, and AI-assisted workflows.</p>
              </div>
              <div>
                <h3>Working style</h3>
                <p>Small iterations, direct feedback loops, and stable releases over flashy but fragile output.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills" ref={skillsRef}>
          <div className="section-heading">
            <div>
              <p className="section-label">02 · Skills</p>
              <h2>Core technologies and strengths.</h2>
            </div>
            <p className="section-note">A compact view of the stack I use across product, platform, and AI work.</p>
          </div>

          <div className="grid-two">
            <div className="panel stack">
              {skillsWithLevels.map((skill) => (
                <div key={skill.name}>
                  <div className="project-card-top">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="meter">
                    <div className="meter-fill" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="panel stack">
              {skillCategories.map((category) => (
                <div key={category.name}>
                  <h3>{category.name}</h3>
                  <div className="skills-grid">
                    {category.items.map((skill) => (
                      <span className="skill-pill" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects" ref={projectsRef}>
          <div className="section-heading">
            <div>
              <p className="section-label">03 · Projects</p>
              <h2>{site.projectsLabel}</h2>
            </div>
            <p className="section-note">{site.projectsNote}</p>
          </div>

          <div className="card-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-card-top">
                  <span className="status-chip">
                    <span className="status-chip-dot" aria-hidden="true" />
                    {project.category}
                  </span>
                  <span className="project-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-footer">
                  <strong>{project.impact}</strong>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a className="button secondary" href={project.href} target="_blank" rel="noreferrer">
                    Open project
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience" ref={experienceRef}>
          <div className="section-heading">
            <div>
              <p className="section-label">04 · Experience</p>
              <h2>Delivery across product and backend work.</h2>
            </div>
            <p className="section-note">A condensed timeline of the environments and responsibilities I have worked in.</p>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.role}-${item.company}`}>
                <div className="timeline-meta">
                  <span>{item.period}</span>
                </div>
                <div>
                  <h3>{item.role}</h3>
                  <div className="timeline-company">
                    {item.company} · {item.location}
                  </div>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education" ref={educationRef}>
          <div className="section-heading">
            <div>
              <p className="section-label">05 · Education</p>
              <h2>Formal education and leadership.</h2>
            </div>
            <p className="section-note">Academic background that supports the technical and communication side of the work.</p>
          </div>

          <div className="grid-two">
            <div className="panel stack">
              {education.map((item) => (
                <div key={item.degree}>
                  <h3>{item.degree}</h3>
                  <p>{item.school}</p>
                </div>
              ))}
            </div>

            <div className="panel">
              <h3>Leadership notes</h3>
              <p>
                I have worked best in environments where I can own execution, communicate tradeoffs clearly, and help the
                team stay aligned on outcomes.
              </p>
              <p>
                The same pattern shows up in my project work: keep the surface simple, reduce avoidable complexity, and
                leave the codebase easier to maintain than I found it.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="testimonials" ref={testimonialsRef}>
          <div className="section-heading">
            <div>
              <p className="section-label">06 · Testimonials</p>
              <h2>What collaborators say.</h2>
            </div>
            <p className="section-note">Short excerpts only. The full set can live on LinkedIn.</p>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <blockquote className="testimonial" key={item.person}>
                <p>&ldquo;{item.quote}&rdquo;</p>
                <footer>
                  <strong>{item.person}</strong>
                  <span>{item.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="hero-actions" style={{ marginTop: '24px' }}>
            <a className="button secondary" href={site.linkedinRecommendations} target="_blank" rel="noreferrer">
              View more on LinkedIn
            </a>
          </div>
        </section>

        <section className="section contact" id="contact" ref={contactRef}>
          <div>
            <p className="section-label">07 · Contact</p>
            <h2>Let&apos;s talk about a role, a product, or a collaboration.</h2>
            <p className="section-note">
              If you need a builder who cares about both the interface and the implementation, email is the fastest way to
              reach me {site.responseTime}.
            </p>
          </div>

          <div className="contact-card">
            <a className="email-link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <div className="contact-links">
              <a href={site.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              {site.resumeUrl ? (
                <a href={site.resumeUrl} target="_blank" rel="noreferrer">
                  Resume
                </a>
              ) : null}
              <a href="#home">Top</a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>© 2026 {site.name}</span>
          <span>Built for fast, stable updates.</span>
        </footer>
      </main>
    </div>
  )
}

export default App