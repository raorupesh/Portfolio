import { site } from '../site'
import { stats } from '../data'

export function HeroSection() {
  return (
    <section className="section hero" aria-labelledby="hero-title">
      <div>
        <p className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          {site.availability.join(' · ')}
        </p>
        <h1 id="hero-title">
          {site.name}
          <br />
          {site.role}
        </h1>
        <p className="lead">{site.headline}</p>
        <p className="lead muted">{site.intro}</p>

        <div className="hero-meta" aria-label="Key focus areas">
          {site.focus.slice(0, 3).map((focus) => (
            <span key={focus}>{focus}</span>
          ))}
          <span>{site.location}</span>
        </div>

        <div className="hero-actions">
          <a className="button primary" href="#contact">
            Hire me
          </a>
          {site.resumeUrl ? (
            <a className="button secondary" href={site.resumeUrl} target="_blank" rel="noreferrer">
              View resume
            </a>
          ) : null}
          {site.calendlyUrl ? (
            <a className="button secondary" href={site.calendlyUrl} target="_blank" rel="noreferrer">
              Book a call
            </a>
          ) : null}
          <a className="button ghost" href="#projects">
            View work
          </a>
        </div>

        <div className="hero-metrics">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-card" aria-label="Profile summary card">
        <div className="hero-card-header">
          <span className="dot red" />
          <span className="dot amber" />
          <span className="dot green" />
          <span className="terminal-title">status / {site.brand}</span>
        </div>
        <pre className="terminal">{`name        ${site.name}
role        ${site.role}
location    ${site.location}
focus       ${site.focus.join(', ')}
status      ${site.openToWork ? 'available for new roles' : 'heads down, currently building'}
reply time  ${site.responseTime}
contact     ${site.email}`}</pre>
      </div>
    </section>
  )
}
