import { site } from '../site'

export function FooterSection() {
  return (
    <footer className="footer">
      <span>&copy; 2026 {site.name}</span>
      <span style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <a href={site.github} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
          GitHub
        </a>
        <a href={site.linkedin} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
          LinkedIn
        </a>
        <span aria-hidden="true" style={{ color: 'var(--border-strong)' }}>/</span>
        {site.footer.tagline}
      </span>
    </footer>
  )
}
