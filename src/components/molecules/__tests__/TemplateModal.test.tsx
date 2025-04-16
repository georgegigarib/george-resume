import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import TemplatesModal from '../TemplateModal'
import { devTemplates } from '@/constants/templates'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'

//TODO; Add all test
describe('TemplatesModal', () => {
  const renderComponent = () =>
    render(
      <AppTestProvider>
        <TemplatesModal />
      </AppTestProvider>
    )

  it('renders correctly', () => {
    const { asFragment } = renderComponent()

    expect(asFragment()).toMatchSnapshot()
  })

  it('displays all template options', () => {
    renderComponent()

    expect(screen.getAllByTestId('template-option')).toHaveLength(devTemplates.length)
  })

  it('shows tooltip when hovering over info icon', () => {
    render(
      <AppTestProvider>
        <TemplatesModal />
      </AppTestProvider>
    )

    const infoIcon = screen.getByTestId('tooltip')
    expect(infoIcon).toBeInTheDocument()

    fireEvent.click(infoIcon)
    expect(
      screen.getByText(
        "It's way easier when you have a starting point when developing new projects, and mostof the time we waste a lot of time setting and configuring the project... That's why I made this section, to save a LOT of time. All technologies are listed on each repository. Happy coding! 😄"
      )
    ).toBeInTheDocument()
  })
})
