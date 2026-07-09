import { site } from '../site'
import { projects } from '../data'
import { useReveal } from '../hooks/useReveal'

export function ProjectsSection() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="section-heading">
        <div>
          <p className="section-label">03 · Projects</p>
          <h2>{site.projectsLabel}</h2>
        </div>
        <p className="section-note">{site.projectsNote}</p>
      </div>

      <div className="card-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-card-top">
              <span className="status-chip">
                <span className="status-chip-dot" aria-hidden="true" />
                {project.category}
              </span>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </div>
            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <div className="project-footer">
              <strong>{project.impact}</strong>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a className="button secondary" href={project.href} target="_blank" rel="noreferrer">
                Open project
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
