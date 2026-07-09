import { education } from '../data'
import { useReveal } from '../hooks/useReveal'

export function EducationSection() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section" id="education" ref={ref}>
      <div className="section-heading">
        <div>
          <p className="section-label">05 · Education</p>
          <h2>Formal education and leadership.</h2>
        </div>
        <p className="section-note">Academic background that supports the technical and communication side of the work.</p>
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
          <h3>Leadership notes</h3>
          <p>
            I have worked best in environments where I can own execution, communicate tradeoffs clearly, and help the
            team stay aligned on outcomes.
          </p>
          <p>
            The same pattern shows up in my project work: keep the surface simple, reduce avoidable complexity, and
            leave the codebase easier to maintain than I found it.
          </p>
        </div>
      </div>
    </section>
  )
}
