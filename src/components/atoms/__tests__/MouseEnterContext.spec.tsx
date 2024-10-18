import { render, screen, fireEvent } from '@testing-library/react'
import { MouseEnterProvider, useMouseEnter } from '@/components/atoms/MouseEnterContext'
import { describe, it, expect, vi } from 'vitest'

const TestComponent = () => {
  const [isMouseEntered, setIsMouseEntered] = useMouseEnter()

  return (
    <div>
      <div
        data-testid="mouse-area"
        onMouseEnter={() => setIsMouseEntered(true)}
        onMouseLeave={() => setIsMouseEntered(false)}
        style={{ width: '100px', height: '100px', backgroundColor: 'lightgrey' }}
      >
        Hover over me
      </div>
      <p data-testid="mouse-status">{isMouseEntered ? 'Mouse is inside' : 'Mouse is outside'}</p>
    </div>
  )
}

describe('MouseEnterProvider', () => {
  it('should provide mouse enter state to its children', () => {
    render(
      <MouseEnterProvider>
        <TestComponent />
      </MouseEnterProvider>
    )

    expect(screen.getByTestId('mouse-status').textContent).toContain('Mouse is outside')

    fireEvent.mouseEnter(screen.getByTestId('mouse-area'))
    expect(screen.getByTestId('mouse-status').textContent).toContain('Mouse is inside')

    fireEvent.mouseLeave(screen.getByTestId('mouse-area'))
    expect(screen.getByTestId('mouse-status').textContent).toContain('Mouse is outside')
  })

  it('should throw error if useMouseEnter is used outside of MouseEnterProvider', () => {
    const TestComponent = () => {
      useMouseEnter()
      return null
    }

    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => render(<TestComponent />)).toThrowError(
      'useMouseEnter must be used within a MouseEnterProvider'
    )

    consoleErrorSpy.mockRestore()
  })
})
