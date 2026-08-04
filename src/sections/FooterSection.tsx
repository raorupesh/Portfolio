import { site } from '../site'

export function FooterSection() {
  return (
    <footer className="footer">
      <span>
        &copy; {new Date().getFullYear()} {site.name}
      </span>
    </footer>
  )
}
