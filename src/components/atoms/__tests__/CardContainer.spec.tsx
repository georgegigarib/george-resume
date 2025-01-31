import { render, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CardContainer } from '@/components/atoms/CardContainer'

describe('CardContainer component', () => {
  const renderComponent = (props = {}) =>
    render(
      <CardContainer {...props}>
        <p>Test content</p>
      </CardContainer>
    )

  it('matches the snapshot', () => {
    const { asFragment } = renderComponent({
      className: 'custom-class',
      containerClassName: 'container-class',
    })
    expect(asFragment()).toMatchSnapshot()
  })

  it('handles mouse movement', () => {
    const { getByRole } = render(
      <CardContainer>
        <div role="presentation">Test content</div>
      </CardContainer>
    )

    const container = getByRole('presentation').parentElement as HTMLElement

    Object.defineProperty(container, 'getBoundingClientRect', {
      value: () => ({
        left: 0,
        top: 0,
        width: 300,
        height: 200,
      }),
    })

    fireEvent.mouseMove(container, { clientX: 150, clientY: 100 })
    expect(container.style.transform).toContain('rotateY(0deg)')
    expect(container.style.transform).toContain('rotateX(0deg)')
  })
})
