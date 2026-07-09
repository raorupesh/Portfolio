import { site } from '../site'
import { useLocalTime } from '../hooks/useLocalTime'

export function StatusBar() {
  const localTime = useLocalTime()

  return (
    <div className="status-bar">
      <div className="status-bar-inner">
        <span className={`status-dot ${site.openToWork ? 'on' : 'off'}`} aria-hidden="true" />
        <span className="visually-hidden">
          {site.openToWork ? 'Available for new opportunities' : 'Currently focused on work'}
        </span>
        <span className="status-text">
          {site.openToWork ? 'Open to new opportunities' : 'Focused on current work'}
        </span>
        <span className="status-sep" aria-hidden="true">/</span>
        <span className="status-text muted">{site.responseTime}</span>
        <span className="status-sep" aria-hidden="true">/</span>
        <span className="status-text muted">
          {localTime ? `${localTime} local` : site.location} · {site.location}
        </span>
      </div>
    </div>
  )
}
