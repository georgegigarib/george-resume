import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import { useIsMobile } from '@/hooks/useIsMobile'
import '@testing-library/jest-dom'
import { vi, describe, Mock, it, beforeEach, expect } from 'vitest'
import { centerModalInViewport } from '@/utils/centerModalInViewPort'
import Modal from '../Modal'

vi.mock('@/utils/centerModalInViewport')
vi.mock('@/hooks/useIsMobile')

describe('Modal Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    ;(centerModalInViewport as Mock).mockReturnValue({ top: 100, left: 100 })
  })

  it('matches snapshot', () => {
    const { asFragment } = render(
      <Modal trigger={<button>Open</button>} layoutId="some-layoutid">
        <div>Modal Content</div>
      </Modal>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('opens modal when trigger is clicked', () => {
    render(
      <Modal trigger={<button>Open</button>} layoutId="some-layoutid">
        <div>Modal Content</div>
      </Modal>
    )

    fireEvent.click(screen.getByText('Open'))
    expect(screen.getByText('Modal Content')).toBeInTheDocument()
  })

  it('closes modal when close button is clicked', async () => {
    render(
      <Modal trigger={<button>Open</button>} layoutId="some-layoutid">
        <div>Modal Content</div>
      </Modal>
    )

    fireEvent.click(screen.getByText('Open'))
    expect(screen.getByText('Modal Content')).toBeInTheDocument()

    fireEvent.click(screen.getByTestId('CloseIcon'))

    await waitFor(() => {
      expect(screen.queryByText('Modal Content')).not.toBeInTheDocument()
    })
  })

  it('calls centerModalInViewport to center modal when opened', () => {
    const mockPosition = { top: 100, left: 100 }
    ;(centerModalInViewport as Mock).mockReturnValue(mockPosition)
    ;(useIsMobile as Mock).mockReturnValue(false)

    render(
      <Modal trigger={<button>Open</button>} layoutId="some-layoutid">
        <div>Modal Content</div>
      </Modal>
    )

    fireEvent.click(screen.getByText('Open'))

    expect(centerModalInViewport).toHaveBeenCalledWith(false)
    expect(screen.getByText('Modal Content')).toBeInTheDocument()
  })

  it('adjusts modal position on resize', () => {
    const mockPosition = { top: 100, left: 100 }
    ;(centerModalInViewport as Mock).mockReturnValue(mockPosition)

    render(
      <Modal trigger={<button>Open</button>} layoutId="some-layoutid">
        <div>Modal Content</div>
      </Modal>
    )

    fireEvent.click(screen.getByText('Open'))

    // Simulate window resize
    fireEvent.resize(window)
    expect(centerModalInViewport).toHaveBeenCalledTimes(2)
  })

  it('adapts to mobile layout when isMobile is true', () => {
    ;(useIsMobile as Mock).mockReturnValue(true)

    render(
      <Modal trigger={<button>Open</button>} layoutId="some-layoutid">
        <div>Modal Content</div>
      </Modal>
    )

    fireEvent.click(screen.getByText('Open'))
    expect(centerModalInViewport).toHaveBeenCalledWith(true)
  })
})
