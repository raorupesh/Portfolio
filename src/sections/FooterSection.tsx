import { site } from '../site'

export function FooterSection() {
  return (
    <footer className="footer">
      <span>&copy; 2026 {site.name}</span>
      <span>{site.footer.tagline}</span>
    </footer>
  )
}
