import { site } from '../site'
import { useReveal } from '../hooks/useReveal'

export function AboutSection() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section" id="about" ref={ref}>
      <div className="section-heading">
        <div>
          <p className="section-label">01 · About</p>
          <h2>Practical engineering with clear communication.</h2>
        </div>
        <p className="section-note">
          A focused summary of the kind of work I do, the problems I like to solve, and the impact I try to create.
        </p>
      </div>

      <div className="grid-two">
        <div className="panel">
          <h3>{site.aboutTitle}</h3>
          <p>{site.aboutOne}</p>
          <p>{site.aboutTwo}</p>
          <p>{site.aboutThree}</p>
        </div>

        <div className="panel stack">
          <div>
            <h3>What I optimize for</h3>
            <p>Readable code, reliable delivery, and interfaces that make the product easier to use.</p>
          </div>
          <div>
            <h3>Current focus</h3>
            <p>Front-end architecture, product-minded full-stack work, and AI-assisted workflows.</p>
          </div>
          <div>
            <h3>Working style</h3>
            <p>Small iterations, direct feedback loops, and stable releases over flashy but fragile output.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
