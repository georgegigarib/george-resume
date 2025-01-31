import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import DevTemplatesModal from '@/components/organisms/DevTemplatesModal'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'

vi.mock('@/constants/templates', () => ({
  devTemplates: [
    {
      tools: ['react', 'ts-circle', 'tailwind'],
      url: 'https://example.com',
      hint: 'dev.templates.templates.exampleTemplate.hint',
      bgColor: '#FF4500',
      description: 'dev.templates.templates.exampleTemplate.description',
    },
  ],
}))

describe('DevTemplatesModal component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const renderComponent = () =>
    render(
      <AppTestProvider>
        <DevTemplatesModal />
      </AppTestProvider>
    )

  it('matches the snapshot when modal is open', () => {
    const { asFragment } = renderComponent()
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders the correct templates hint', () => {
    renderComponent()

    const templates = screen.getByText('Example template hint')
    expect(templates).toBeInTheDocument()
  })
})
