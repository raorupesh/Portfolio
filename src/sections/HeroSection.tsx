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
        <div className="terminal" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '0 20px' }}>
          <span>{site.hero.terminalFields.name}</span>
          <span>{site.name}</span>
          <span>{site.hero.terminalFields.role}</span>
          <span>{site.role}</span>
          <span>{site.hero.terminalFields.location}</span>
          <span>{site.location}</span>
          <span>{site.hero.terminalFields.focus}</span>
          <span>{site.focus.join(', ')}</span>
          <span>{site.hero.terminalFields.status}</span>
          <span>{site.openToWork ? site.hero.statusAvailable : site.hero.statusBusy}</span>
          <span>{site.hero.terminalFields.replyTime}</span>
          <span>{site.responseTime}</span>
          <span>{site.hero.terminalFields.contact}</span>
          <span>{site.email}</span>
        </div>
      </div>
    </section>
  )
}
