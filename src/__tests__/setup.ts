import '@testing-library/jest-dom'
import { vi } from 'vitest'

vi.stubGlobal(
  'fetch',
  vi.fn(() => new Promise<Response>(() => {})),
)

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: query === '(prefers-color-scheme: dark)',
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
})

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: class MockObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return []
    }
  },
})
