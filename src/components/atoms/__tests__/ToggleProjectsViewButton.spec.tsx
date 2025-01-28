import { render, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ToggleProjectsViewButton from '@/components/atoms/ToggleProjectsViewButton'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'

describe('ToggleProjectsViewButton component', () => {
  const renderComponent = (isDesktopMode: boolean, onClick: () => void) =>
    render(
      <AppTestProvider>
        <ToggleProjectsViewButton isDesktopMode={isDesktopMode} onClick={onClick} />
      </AppTestProvider>
    )

  it('matches the snapshot for desktop mode', () => {
    const { asFragment } = renderComponent(true, vi.fn())
    expect(asFragment()).toMatchSnapshot()
  })

  it('matches the snapshot for mobile mode', () => {
    const { asFragment } = renderComponent(false, vi.fn())
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders the correct icon for desktop mode', () => {
    const { getByTestId } = renderComponent(true, vi.fn())
    expect(getByTestId('MobileScreenShareIcon')).toBeInTheDocument()
  })

  it('renders the correct icon for mobile mode', () => {
    const { getByTestId } = renderComponent(false, vi.fn())
    expect(getByTestId('DesktopWindowsIcon')).toBeInTheDocument()
  })

  it('calls onClick when the button is clicked', () => {
    const handleClick = vi.fn()
    const { getByRole } = renderComponent(true, handleClick)
    fireEvent.click(getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
  })
})
