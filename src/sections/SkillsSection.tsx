import { site } from '../site'
import { skillCategories } from '../data'
import { useReveal } from '../hooks/useReveal'

const bentoSizes = [
  'bento-wide',
  'bento-wide',
  'bento-medium',
  'bento-medium',
  'bento-narrow',
  'bento-narrow',
]

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

      <div className="bento-grid">
        {skillCategories.map((category, i) => (
          <article
            className={`bento-card ${bentoSizes[i] || 'bento-medium'}`}
            key={category.name}
            style={{ '--card-accent': category.accent } as React.CSSProperties}
          >
            <div className="bento-card-glow" aria-hidden="true" />
            <div className="bento-card-content">
              <div className="bento-card-header">
                <span className="bento-card-icon" aria-hidden="true">
                  {category.icon === 'code' && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  )}
                  {category.icon === 'layout' && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <line x1="9" y1="21" x2="9" y2="9" />
                    </svg>
                  )}
                  {category.icon === 'server' && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="8" rx="2" />
                      <rect x="2" y="14" width="20" height="8" rx="2" />
                      <line x1="6" y1="6" x2="6.01" y2="6" />
                      <line x1="6" y1="18" x2="6.01" y2="18" />
                    </svg>
                  )}
                  {category.icon === 'database' && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    </svg>
                  )}
                  {category.icon === 'cloud' && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                    </svg>
                  )}
                  {category.icon === 'brain' && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2a4 4 0 0 0-4 4c0 .73.2 1.41.56 2A3.5 3.5 0 0 0 6 11.5C6 13.43 7.57 15 9.5 15H12v7" />
                      <path d="M12 2a4 4 0 0 1 4 4c0 .73-.2 1.41-.56 2A3.5 3.5 0 0 1 18 11.5C18 13.43 16.43 15 14.5 15H12" />
                      <path d="M12 15v7" />
                      <path d="M9 18h6" />
                    </svg>
                  )}
                </span>
                <h3>{category.name}</h3>
              </div>
              <div className="bento-pills">
                {category.items.map((skill) => (
                  <span className="bento-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
