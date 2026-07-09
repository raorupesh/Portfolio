import { testimonials } from '../data'
import { site } from '../site'
import { useReveal } from '../hooks/useReveal'

export function TestimonialsSection() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section" id="testimonials" ref={ref}>
      <div className="section-heading">
        <div>
          <p className="section-label">06 · Testimonials</p>
          <h2>What collaborators say.</h2>
        </div>
        <p className="section-note">Short excerpts only. The full set can live on LinkedIn.</p>
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
      </div>

      <div className="hero-actions" style={{ marginTop: '24px' }}>
        <a className="button secondary" href={site.linkedinRecommendations} target="_blank" rel="noreferrer">
          View more on LinkedIn
        </a>
      </div>
    </section>
  )
}
