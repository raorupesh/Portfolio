import { experience } from '../data'
import { useReveal } from '../hooks/useReveal'

export function ExperienceSection() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section" id="experience" ref={ref}>
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
  )
}
