import { render, screen } from '@testing-library/react'
import { devTemplates } from '@/constants/templates'
import { describe, it, expect, vi } from 'vitest'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'
import TemplatesCarousels from '@/components/molecules/TemplatesCarousels'

// Mock the devTemplates to control the test environment
vi.mock('@/constants/templates', () => ({
  devTemplates: [
    {
      tools: ['React', 'TypeScript', 'Jest'],
      hint: 'template1',
      bgColor: '#fff',
      url: 'http://example.com/template1',
    },
    {
      tools: ['Node.js', 'Express', 'MongoDB'],
      hint: 'template2',
      bgColor: '#f0f0f0',
      url: 'http://example.com/template2',
    },
    {
      tools: ['Python', 'Django', 'PostgreSQL'],
      hint: 'template3',
      bgColor: '#e0e0e0',
      url: 'http://example.com/template3',
    },
  ],
}))

describe('TemplatesCarousels Component', () => {
  const renderComponent = () =>
    render(
      <AppTestProvider>
        <TemplatesCarousels />
      </AppTestProvider>
    )

  it('renders correctly with provided templates', () => {
    const { asFragment } = renderComponent()

    devTemplates.forEach((template) => {
      template.tools.forEach((tool) => {
        expect(screen.getByLabelText(tool)).toBeInTheDocument()
      })
    })

    expect(asFragment()).toMatchSnapshot()
  })
})
