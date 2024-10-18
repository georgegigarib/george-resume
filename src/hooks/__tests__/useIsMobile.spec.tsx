import { render, screen, act } from '@testing-library/react'
import { useIsMobile } from '@/hooks/useIsMobile'
import { describe, it, expect } from 'vitest'

const TestComponent = ({ breakpoint }: { breakpoint: number }) => {
  const isMobile = useIsMobile(breakpoint)

  return (
    <div>
      <p data-testid="mobile-status">{isMobile ? 'Mobile View' : 'Desktop View'}</p>
    </div>
  )
}

describe('useIsMobile', () => {
  it('should return true if the window width is less than the breakpoint', () => {
    window.innerWidth = 500

    render(<TestComponent breakpoint={768} />)

    expect(screen.getByTestId('mobile-status').textContent).toContain('Mobile View')
  })

  it('should return false if the window width is greater than or equal to the breakpoint', () => {
    window.innerWidth = 800

    render(<TestComponent breakpoint={768} />)

    expect(screen.getByTestId('mobile-status').textContent).toContain('Desktop View')
  })

  it('should update the view when the window is resized', () => {
    window.innerWidth = 800

    // Usar act para envolver la renderización inicial
    render(<TestComponent breakpoint={768} />)

    expect(screen.getByTestId('mobile-status').textContent).toContain('Desktop View')

    act(() => {
      window.innerWidth = 600
      window.dispatchEvent(new Event('resize'))
    })

    expect(screen.getByTestId('mobile-status').textContent).toContain('Mobile View')
  })
})
