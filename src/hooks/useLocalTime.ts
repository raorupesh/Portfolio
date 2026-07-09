import { useEffect, useState } from 'react'
import { site } from '../site'

const formatLocalTime = (timeZone: string) => {
  try {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      timeZone,
    }).format(new Date())
  } catch {
    return ''
  }
}

export function useLocalTime() {
  const [time, setTime] = useState(() => formatLocalTime(site.timeZone))

  useEffect(() => {
    const id = window.setInterval(() => setTime(formatLocalTime(site.timeZone)), 30_000)
    return () => window.clearInterval(id)
  }, [])

  return time
}
