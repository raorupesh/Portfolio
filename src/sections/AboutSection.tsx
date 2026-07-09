import { site } from '../site'
import { useReveal } from '../hooks/useReveal'

export function AboutSection() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section" id="about" ref={ref}>
      <div className="section-heading">
        <div>
          <p className="section-label">{site.sections.about.label}</p>
          <h2>{site.sections.about.heading}</h2>
        </div>
        <p className="section-note">{site.sections.about.note}</p>
      </div>

      <div className="grid-two">
        <div className="panel">
          <h3>{site.aboutTitle}</h3>
          <p>{site.aboutOne}</p>
          <p>{site.aboutTwo}</p>
          <p>{site.aboutThree}</p>
        </div>

        <div className="panel stack">
          {site.sections.about.panels.map((panel) => (
            <div key={panel.title}>
              <h3>{panel.title}</h3>
              <p>{panel.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
