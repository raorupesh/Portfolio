import { site } from '../site'
import { experience } from '../data'
import { useReveal } from '../hooks/useReveal'

export function ExperienceSection() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="section-heading">
        <div>
          <p className="section-label">{site.sections.experience.label}</p>
          <h2>{site.sections.experience.heading}</h2>
        </div>
        <p className="section-note">{site.sections.experience.note}</p>
      </div>

      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={`${item.role}-${item.company}`}>
            <div className="timeline-meta">
              <span>{item.period}</span>
            </div>
            <div>
              <h3>{item.role}</h3>
              <div className="timeline-company" style={{ color: 'var(--text-dim)' }}>
                {item.company} · {item.location}
              </div>
              <p>{item.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
