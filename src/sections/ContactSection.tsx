import { site } from '../site'
import { useReveal } from '../hooks/useReveal'

export function ContactSection() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div>
        <p className="section-label">{site.sections.contact.label}</p>
        <h2>{site.sections.contact.heading}</h2>
        <p className="section-note">
          {site.sections.contact.note} {site.responseTime}.
        </p>
      </div>

      <div className="contact-card">
        <a className="email-link" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <div className="contact-links">
          <a href={site.github} target="_blank" rel="noreferrer">
            {site.sections.contact.links.github}
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            {site.sections.contact.links.linkedin}
          </a>
          {site.resumeUrl ? (
            <a href={site.resumeUrl} target="_blank" rel="noreferrer">
              {site.sections.contact.links.resume}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}
