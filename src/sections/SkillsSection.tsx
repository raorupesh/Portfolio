import { site } from '../site'
import { skillsWithLevels, skillCategories } from '../data'
import { useReveal } from '../hooks/useReveal'

export function SkillsSection() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="section-heading">
        <div>
          <p className="section-label">{site.sections.skills.label}</p>
          <h2>{site.sections.skills.heading}</h2>
        </div>
        <p className="section-note">{site.sections.skills.note}</p>
      </div>

      <div className="grid-two">
        <div className="panel stack">
          {skillsWithLevels.map((skill) => (
            <div key={skill.name}>
              <div className="project-card-top">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div
                className="meter"
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.name}: ${skill.level}%`}
              >
                <div
                  className="meter-fill"
                  style={{ '--meter-width': `${skill.level}%` } as React.CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="panel stack">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3>{category.name}</h3>
              <div className="skills-grid">
                {category.items.map((skill) => (
                  <span className="skill-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
