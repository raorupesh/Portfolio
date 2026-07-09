import { render, screen } from '@testing-library/react'
import App from '../App'
import { site } from '../site'
import { projects, testimonials } from '../data'

beforeEach(() => {
  localStorage.clear()
  document.documentElement.dataset.theme = 'dark'
})

it('renders without crashing', () => {
  render(<App />)
  expect(screen.getAllByText(new RegExp(site.name)).length).toBeGreaterThan(0)
})

it('renders the nav with section links', () => {
  render(<App />)
  expect(screen.getByLabelText(site.nav.ariaLabel)).toBeInTheDocument()
  site.nav.links.forEach((link) => {
    expect(screen.getByText(link)).toBeInTheDocument()
  })
})

it('renders all major sections', () => {
  render(<App />)
  expect(screen.getByText(site.sections.about.label)).toBeInTheDocument()
  expect(screen.getByText(site.sections.skills.label)).toBeInTheDocument()
  expect(screen.getByText(site.sections.projects.label)).toBeInTheDocument()
  expect(screen.getByText(site.projectsLabel)).toBeInTheDocument()
  expect(screen.getByText(site.sections.experience.label)).toBeInTheDocument()
  expect(screen.getByText(site.sections.education.label)).toBeInTheDocument()
  expect(screen.getByText(site.sections.testimonials.label)).toBeInTheDocument()
  expect(screen.getByText(site.sections.contact.label)).toBeInTheDocument()
})

it('shows open to work status', () => {
  render(<App />)
  expect(screen.getByText(site.status.open)).toBeInTheDocument()
})

it('has a theme toggle with aria-pressed', () => {
  render(<App />)
  const darkBtn = screen.getByText(site.theme.dark)
  const lightBtn = screen.getByText(site.theme.light)
  expect(darkBtn).toHaveAttribute('aria-pressed', 'true')
  expect(lightBtn).toHaveAttribute('aria-pressed', 'false')
})

it('renders project cards', () => {
  render(<App />)
  projects.slice(0, 2).forEach((project) => {
    expect(screen.getByText(project.name)).toBeInTheDocument()
  })
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
  testimonials.forEach(({ quote }) => {
    const snippet = quote.split(' ').slice(0, 3).join(' ')
    expect(screen.getByText(new RegExp(snippet))).toBeInTheDocument()
  })
})
