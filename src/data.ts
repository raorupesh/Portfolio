import { site } from './site'

export type Project = {
  name: string
  category: string
  description: string
  impact: string
  tags: string[]
  href: string
}

export type Experience = {
  role: string
  company: string
  location: string
  period: string
  summary: string
}

export type Testimonial = {
  quote: string
  person: string
  role: string
}

export const projects: Project[] = [
  {
    name: 'Remorph - AI Code Refactoring Tool',
    category: 'AI Tooling + Backend',
    description:
      'Paste or upload code and get a Gemini-powered refactor with a line-by-line diff view for exactly what changed.',
    impact: 'Supports 9 programming languages',
    tags: ['Node.js', 'Express.js', 'Gemini API', 'Vite'],
    href: site.projectUrls.remorph,
  },
  {
    name: 'Mean - Medium-like Blogging Platform',
    category: 'Full-Stack App',
    description:
      'A blogging platform with auth, scheduling, image uploads, bookmarks, and self-documented API routes.',
    impact: 'Built with JWT, Drizzle, and OpenAPI',
    tags: ['Next.js', 'PostgreSQL', 'Drizzle ORM', 'TailwindCSS'],
    href: site.projectUrls.mean,
  },
  {
    name: 'EchoJournal - Mood Tracking SaaS',
    category: 'SaaS + Mobile-Web',
    description:
      'A journaling app for logging moods, tracking patterns, and reflecting on mental well-being over time.',
    impact: 'Deployed on Azure with Google SSO',
    tags: ['Angular', 'Node.js', 'MongoDB', 'Mongoose'],
    href: site.projectUrls.echoJournal,
  },
  {
    name: 'SpendMate - Group Expense Manager',
    category: 'Flutter App',
    description:
      'A mobile-first expense splitting app with layered architecture and offline-first SQLite storage.',
    impact: 'Offline-first by design',
    tags: ['Flutter', 'Dart', 'Provider', 'SQLite'],
    href: site.projectUrls.spendMate,
  },
  {
    name: 'Smart Parking System',
    category: 'ML + IoT',
    description:
      'An end-to-end vehicle detection and classification system that connects sensor input, ML inference, and output handling.',
    impact: 'Published research project',
    tags: ['Python', 'Machine Learning', 'IoT'],
    href: site.projectUrls.parking,
  },
]

export const experience: Experience[] = [
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

export const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Seattle University',
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'MIT Art, Design and Technology University',
  },
]

export const skillsWithLevels = [
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

export const skillCategories = [
  { name: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Dart'] },
  { name: 'Frontend', items: ['React', 'Next.js', 'Angular', 'Flutter', 'TailwindCSS'] },
  { name: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { name: 'Databases', items: ['PostgreSQL', 'MongoDB'] },
  { name: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Docker'] },
  { name: 'AI / ML', items: ['Machine Learning', 'System Design'] },
]

export const testimonials: Testimonial[] = [
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

export const stats = [
  { label: 'Projects shipped', value: '5+' },
  { label: 'Languages', value: '8+' },
  { label: 'Years active', value: '4+' },
  { label: 'Response time', value: '<24h' },
]
