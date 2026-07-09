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
            {site.hero.actions.hireMe}
          </a>
          {site.resumeUrl ? (
            <a className="button secondary" href={site.resumeUrl} target="_blank" rel="noreferrer">
              {site.hero.actions.viewResume}
            </a>
          ) : null}
          {site.calendlyUrl ? (
            <a className="button secondary" href={site.calendlyUrl} target="_blank" rel="noreferrer">
              {site.hero.actions.bookCall}
            </a>
          ) : null}
          <a className="button ghost" href="#projects">
            {site.hero.actions.viewWork}
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
          <span className="terminal-title">{site.hero.terminalTitle} / {site.brand}</span>
        </div>
        <pre className="terminal">{`${site.hero.terminalFields.name}        ${site.name}
${site.hero.terminalFields.role}        ${site.role}
${site.hero.terminalFields.location}    ${site.location}
${site.hero.terminalFields.focus}       ${site.focus.join(', ')}
${site.hero.terminalFields.status}      ${site.openToWork ? site.hero.statusAvailable : site.hero.statusBusy}
${site.hero.terminalFields.replyTime}  ${site.responseTime}
${site.hero.terminalFields.contact}     ${site.email}`}</pre>
      </div>
    </section>
  )
}
