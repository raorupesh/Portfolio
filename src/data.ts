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
  points: string[]
}

export type Publication = {
  title: string
  journal: string
  authors: string
  url: string
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
    impact: 'Shipped solo, end-to-end from schema to UI',
    tags: ['Next.js', 'PostgreSQL', 'Drizzle ORM', 'TailwindCSS'],
    href: site.projectUrls.mean,
  },
  {
    name: 'EchoJournal - Mood Tracking SaaS',
    category: 'SaaS + Mobile-Web',
    description:
      'A journaling app for logging moods, tracking patterns, and reflecting on mental well-being over time.',
    impact: 'Live production SaaS, built and deployed solo',
    tags: ['Angular', 'Node.js', 'MongoDB', 'Mongoose'],
    href: site.projectUrls.echoJournal,
  },
  {
    name: 'SecureOnboard - Auth Starter Kit',
    category: 'Security + Auth',
    description:
      'A production-ready authentication boilerplate with JWT, role-based access control, and secure session management.',
    impact: 'Reusable auth scaffold for rapid prototyping',
    tags: ['JavaScript', 'JWT', 'Node.js', 'Express.js'],
    href: site.projectUrls.secureOnboard,
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
      'An end-to-end vehicle detection and classification system connecting sensor input, ML inference, and a live web dashboard.',
    impact: 'Published research with 7.4 SJIF',
    tags: ['Python', 'Machine Learning', 'IoT', 'Flask'],
    href: site.projectUrls.parking,
  },
]
export const experience: Experience[] = [
  {
    role: 'Enterprise Application Developer → Application Engineer',
    company: 'ZS Associates',
    location: 'India',
    period: 'Dec 2021 - Aug 2024',
    summary:
      'Delivered enterprise-scale microservices, API optimization, and CI/CD pipelines across a 30-month tenure.',
    points: [
      'Reduced API latency by 40% and built microservices supporting 500K+ daily transactions.',
      'Built Azure DevOps CI/CD pipelines that cut deployment time by 40% and improved release efficiency.',
      'Developed a financial tracking tool used across all regions with zero production issues.',
      'Built an Azure chatbot implementation and enhanced security across enterprise applications.',
      'Improved system throughput by 30% through production metrics analysis and targeted optimizations.',
      'Supported UAT, defect triage, and production deployments across four cross-functional teams.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Seattle University Events',
    location: 'United States',
    period: 'Jun 2025 - Jun 2026',
    summary:
      'Built real-time dashboards and analytics tools that gave stakeholders continuous operational visibility.',
    points: [
      'Built real-time tracking and reporting dashboards eliminating 6+ hours/week of manual reporting.',
      'Implemented WCAG 2.1 AA standards across university web properties for accessibility compliance.',
      'Partnered with stakeholders to deliver automated reporting solutions using Python and JavaScript.',
      'Coordinated with Facilities, IT, and admin teams across planning, development, and deployment.',
    ],
  },
]

export const publications: Publication[] = [
  {
    title: 'Agricultural Based Decisions: AGRODEC Web Application',
    journal: 'Applied Science & Engineering Technology (IJRASET), Vol 10, Issue VI, June 2022',
    authors: '',
    url: 'https://doi.org/10.22214/ijraset.2022.45030',
  },
  {
    title: 'Smart Parking System using Machine Learning and Internet of Things',
    journal: 'Applied Science & Engineering Technology (IJRASET), Vol 9, Issue I, January 2021',
    authors: '',
    url: 'https://www.ijraset.com/fileserve.php?FID=32904',
  },
]
export const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Seattle University',
    honors: ['Graduate Representative, ACES'],
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'MIT Art, Design and Technology University',
    honors: [
      'Best Outgoing Boy, Computer Science Department',
      'President, ACES Club',
      'Chief Student Coordinator, Human Library',
    ],
  },
]

export const skillCategories = [
  {
    name: 'Languages',
    icon: 'code',
    items: ['TypeScript', 'JavaScript', 'Python', 'Dart', 'SQL'],
    accent: 'var(--accent)',
  },
  {
    name: 'Frontend',
    icon: 'layout',
    items: ['React', 'Next.js', 'Angular', 'Flutter', 'TailwindCSS', 'HTML/CSS'],
    accent: 'var(--accent-blue)',
  },
  {
    name: 'Backend',
    icon: 'server',
    items: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL'],
    accent: 'var(--accent-warm)',
  },
  {
    name: 'Data & Storage',
    icon: 'database',
    items: ['PostgreSQL', 'MongoDB', 'Firebase', 'Drizzle ORM'],
    accent: 'var(--accent-strong)',
  },
  {
    name: 'Cloud & DevOps',
    icon: 'cloud',
    items: ['Azure DevOps', 'AWS', 'Docker', 'CI/CD', 'Git'],
    accent: 'var(--text-faint)',
  },
  {
    name: 'AI / ML',
    icon: 'brain',
    items: ['Machine Learning', 'NLP', 'Gemini API', 'System Design'],
    accent: 'var(--accent)',
  },
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
