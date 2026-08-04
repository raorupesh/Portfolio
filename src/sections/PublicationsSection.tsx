import { ExternalLinkIcon } from '../icons'
import { site } from '../site'
import { publications } from '../data'
import { useReveal } from '../hooks/useReveal'

export function PublicationsSection() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section" id="publications" ref={ref}>
      <div className="section-heading">
        <div>
          <p className="section-label">{site.sections.publications.label}</p>
          <h2>{site.sections.publications.heading}</h2>
        </div>
        <p className="section-note">{site.sections.publications.note}</p>
      </div>

      <div className="publications-grid">
        {publications.map((pub) => (
          <article className="publication-card panel" key={pub.url}>
            <h3>{pub.title}</h3>
            <p className="pub-journal">{pub.journal}</p>
            <a className="button secondary" href={pub.url} target="_blank" rel="noreferrer">
              {site.sections.publications.viewPaper} <ExternalLinkIcon aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
