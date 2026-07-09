import { render, screen } from '@testing-library/react'
import App from '../App'

beforeEach(() => {
  localStorage.clear()
  document.documentElement.dataset.theme = 'dark'
})

it('renders without crashing', () => {
  render(<App />)
  expect(screen.getAllByText(/Rupeshwar Rao/).length).toBeGreaterThan(0)
})

it('renders the nav with section links', () => {
  render(<App />)
  expect(screen.getByLabelText('Section navigation')).toBeInTheDocument()
  expect(screen.getByText('About')).toBeInTheDocument()
  expect(screen.getByText('Skills')).toBeInTheDocument()
  expect(screen.getByText('Projects')).toBeInTheDocument()
  expect(screen.getByText('Experience')).toBeInTheDocument()
  expect(screen.getByText('Education')).toBeInTheDocument()
  expect(screen.getByText('Testimonials')).toBeInTheDocument()
  expect(screen.getByText('Contact')).toBeInTheDocument()
})

it('renders all major sections', () => {
  render(<App />)
  expect(screen.getByText('01 · About')).toBeInTheDocument()
  expect(screen.getByText('02 · Skills')).toBeInTheDocument()
  expect(screen.getByText('03 · Projects')).toBeInTheDocument()
  expect(screen.getByText('Selected work.')).toBeInTheDocument()
  expect(screen.getByText('04 · Experience')).toBeInTheDocument()
  expect(screen.getByText('05 · Education')).toBeInTheDocument()
  expect(screen.getByText('06 · Testimonials')).toBeInTheDocument()
  expect(screen.getByText('07 · Contact')).toBeInTheDocument()
})

it('shows open to work status', () => {
  render(<App />)
  expect(screen.getByText('Open to new opportunities')).toBeInTheDocument()
})

it('has a theme toggle with aria-pressed', () => {
  render(<App />)
  const darkBtn = screen.getByText('Dark')
  const lightBtn = screen.getByText('Light')
  expect(darkBtn).toHaveAttribute('aria-pressed', 'true')
  expect(lightBtn).toHaveAttribute('aria-pressed', 'false')
})

it('renders project cards', () => {
  render(<App />)
  expect(screen.getByText('Remorph - AI Code Refactoring Tool')).toBeInTheDocument()
  expect(screen.getByText('Mean - Medium-like Blogging Platform')).toBeInTheDocument()
})

it('renders skill meters with ARIA attributes', () => {
  render(<App />)
  const meters = document.querySelectorAll('[role="progressbar"]')
  expect(meters.length).toBeGreaterThan(0)
  meters.forEach((meter) => {
    expect(meter).toHaveAttribute('aria-valuenow')
    expect(meter).toHaveAttribute('aria-valuemin', '0')
    expect(meter).toHaveAttribute('aria-valuemax', '100')
  })
})

it('renders testimonial blockquotes', () => {
  render(<App />)
  expect(screen.getByText(/Great leader/)).toBeInTheDocument()
  expect(screen.getByText(/Strong leadership/)).toBeInTheDocument()
  expect(screen.getByText(/shows the kind of reliability/)).toBeInTheDocument()
})
