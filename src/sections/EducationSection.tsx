import { site } from '../site'
import { education } from '../data'
import { useReveal } from '../hooks/useReveal'

export function EducationSection() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section" id="education" ref={ref}>
      <div className="section-heading">
        <div>
          <p className="section-label">{site.sections.education.label}</p>
          <h2>{site.sections.education.heading}</h2>
        </div>
        <p className="section-note">{site.sections.education.note}</p>
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
          <h3>{site.sections.education.notesPanel.title}</h3>
          {site.sections.education.notesPanel.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
