import { render, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach, Mock } from 'vitest'
import { ClickableTooltip } from '@/components/molecules/ClickableTooltip'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'
import { useIsMobile } from '@/hooks/useIsMobile'

vi.mock('@/hooks/useIsMobile', () => ({
  useIsMobile: vi.fn(),
}))

describe('ClickableTooltip component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderComponent = (isMobile: boolean, props: any) => {
    ;(useIsMobile as Mock).mockReturnValue(isMobile)
    return render(
      <AppTestProvider>
        <ClickableTooltip {...props} />
      </AppTestProvider>
    )
  }

  const defaultProps = {
    text: 'Tooltip text',
    children: <span>Hover me</span>,
    bgColor: 'bg-blue-500',
    textColor: 'text-white',
  }

  it('matches the snapshot for desktop view', () => {
    const { asFragment } = renderComponent(false, defaultProps)

    expect(asFragment()).toMatchSnapshot()
  })

  it('matches the snapshot for mobile view', () => {
    const { asFragment } = renderComponent(true, defaultProps)

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders the tooltip text on hover', () => {
    const { getByText } = renderComponent(false, defaultProps)
    const button = getByText('Hover me')
    fireEvent.click(button)

    expect(getByText('Tooltip text')).toBeInTheDocument()
  })

  it('renders the tooltip text on click for mobile view', () => {
    const { getByText } = renderComponent(true, defaultProps)
    const button = getByText('Hover me')
    fireEvent.click(button)

    expect(getByText('Tooltip text')).toBeInTheDocument()
  })
})
