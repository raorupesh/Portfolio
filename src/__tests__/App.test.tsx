import { render, screen, waitFor } from '@testing-library/react'
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
  const nav = screen.getByLabelText(site.nav.ariaLabel)
  expect(nav).toBeInTheDocument()
  site.nav.links.forEach((link) => {
    expect(nav).toHaveTextContent(link)
  })
})

it('renders all major sections', async () => {
  render(<App />)
  expect(screen.getByText(site.sections.about.label)).toBeInTheDocument()
  expect(screen.getByText(site.sections.skills.label)).toBeInTheDocument()
  await waitFor(() => {
    expect(screen.getByText(site.sections.projects.label)).toBeInTheDocument()
  })
  await waitFor(() => {
    expect(screen.getByText(site.projectsLabel)).toBeInTheDocument()
  })
  await waitFor(() => {
    expect(screen.getByText(site.sections.experience.label)).toBeInTheDocument()
  })
  await waitFor(() => {
    expect(screen.getByText(site.sections.education.label)).toBeInTheDocument()
  })
  await waitFor(() => {
    expect(screen.getByText(site.sections.testimonials.label)).toBeInTheDocument()
  })
  await waitFor(() => {
    expect(screen.getByText(site.sections.contact.label)).toBeInTheDocument()
  })
})

it('has a floating theme toggle button', () => {
  render(<App />)
  const fab = document.querySelector('.theme-fab')
  expect(fab).toBeInTheDocument()
  expect(fab).toHaveAttribute('type', 'button')
  expect(fab).toHaveAttribute('aria-label')
})

it('renders project cards', async () => {
  render(<App />)
  await waitFor(() => {
    projects.slice(0, 2).forEach((project) => {
      expect(screen.getByText(project.name)).toBeInTheDocument()
    })
  })
})

it('renders skill category cards', () => {
  render(<App />)
  const pills = document.querySelectorAll('.bento-pill')
  expect(pills.length).toBeGreaterThan(0)
})

it('renders testimonial blockquotes', async () => {
  render(<App />)
  await waitFor(() => {
    testimonials.forEach(({ quote }) => {
      const snippet = quote.split(' ').slice(0, 3).join(' ')
      expect(screen.getByText(new RegExp(snippet))).toBeInTheDocument()
    })
  })
})
