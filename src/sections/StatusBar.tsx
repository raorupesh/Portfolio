import { site } from '../site'
import { useLocalTime } from '../hooks/useLocalTime'

export function StatusBar() {
  const localTime = useLocalTime()

  return (
    <div className="status-bar">
      <div className="status-bar-inner">
        <span className={`status-dot ${site.openToWork ? 'on' : 'off'}`} aria-hidden="true" />
        <span className="visually-hidden">
          {site.openToWork ? site.status.openAria : site.status.closedAria}
        </span>
        <span className="status-text">
          {site.openToWork ? site.status.open : site.status.closed}
        </span>
        <span className="status-secondary">
          <span className="status-sep" aria-hidden="true">/</span>
          <span className="status-text muted">{site.responseTime}</span>
          <span className="status-sep" aria-hidden="true">/</span>
          <span className="status-text muted">
            {localTime ? `${localTime} ${site.status.localSuffix}` : site.location} · {site.location}
          </span>
        </span>
      </div>
    </div>
  )
}
