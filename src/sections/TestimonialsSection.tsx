import { site } from '../site'
import { testimonials } from '../data'
import { useReveal } from '../hooks/useReveal'

export function TestimonialsSection() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section" id="testimonials" ref={ref}>
      <div className="section-heading">
        <div>
          <p className="section-label">{site.sections.testimonials.label}</p>
          <h2>{site.sections.testimonials.heading}</h2>
        </div>
        <p className="section-note">{site.sections.testimonials.note}</p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <blockquote className="testimonial" key={item.person}>
            <p>&ldquo;{item.quote}&rdquo;</p>
            <footer>
              <strong>{item.person}</strong>
              <span>{item.role}</span>
            </footer>
          </blockquote>
        ))}
        <div className="testimonial testimonial-cta">
          <div>
            <p style={{ color: 'var(--text-dim)', fontSize: '14px', margin: 0, marginBottom: '12px' }}>
              See what others say about working with me.
            </p>
            <a className="button secondary" href={site.linkedinRecommendations} target="_blank" rel="noreferrer">
              {site.sections.testimonials.viewMore} ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
