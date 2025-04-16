import { render, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import MusicLink from '@/components/atoms/MusicLink'
import { Sections } from '@/app/layout/types/NavBarTypes'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'

describe('MusicLink component', () => {
  const mockScrollToSection = vi.fn()
  const mockSetAutomaticScroll = vi.fn()

  const renderComponent = (activeHash: string) =>
    render(
      <AppTestProvider>
        <MusicLink
          scrollToSection={mockScrollToSection}
          setAutomaticScroll={mockSetAutomaticScroll}
          activeHash={activeHash}
        />
      </AppTestProvider>
    )

  it('matches the snapshot when activeHash is Sections.Dev', () => {
    const { asFragment } = renderComponent(Sections.Dev)
    expect(asFragment()).toMatchSnapshot()
  })

  it('matches the snapshot when activeHash is Sections.Music', () => {
    const { asFragment } = renderComponent(Sections.Music)
    expect(asFragment()).toMatchSnapshot()
  })

  it('matches the snapshot when activeHash is Sections.Me', () => {
    const { asFragment } = renderComponent(Sections.Me)
    expect(asFragment()).toMatchSnapshot()
  })

  it('calls scrollToSection and setAutomaticScroll on click', () => {
    const { getByText } = renderComponent(Sections.Music)
    const linkElement = getByText('music')

    fireEvent.click(linkElement)

    expect(mockScrollToSection).toHaveBeenCalledWith(Sections.Music, true)
    expect(mockSetAutomaticScroll).toHaveBeenCalledWith(false)
  })
})
