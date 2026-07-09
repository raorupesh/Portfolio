import { site } from '../site'
import { useReveal } from '../hooks/useReveal'

export function ContactSection() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section contact" id="contact" ref={ref}>
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
  )
}
