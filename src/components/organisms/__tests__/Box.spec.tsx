import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Box } from '@/components/organisms/Box'

describe('Box component', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(<Box startColumn={1} startRow={1} spanColumn={2} spanRow={2} content={'HI'} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders the content directly when useCard is false', () => {
    render(<Box startColumn={1} startRow={1} spanColumn={2} spanRow={2} content="Test content" useCard={false} />)

    const content = screen.getByText('Test content')
    expect(content).toBeInTheDocument()
  })

  it('applies shadow classes when addShadow is true', () => {
    render(
      <Box
        startColumn={1}
        startRow={1}
        spanColumn={2}
        spanRow={2}
        content="Test content"
        addShadow={true}
        useCard={false}
      />
    )

    const container = screen.getByText('Test content').closest('div')
    expect(container).toHaveClass('shadow-3d-light')
  })

  it('does not apply shadow classes when addShadow is false', () => {
    render(
      <Box
        startColumn={1}
        startRow={1}
        spanColumn={2}
        spanRow={2}
        content="Test content"
        addShadow={false}
        useCard={false}
      />
    )

    const container = screen.getByText('Test content').closest('div')
    expect(container).not.toHaveClass('shadow-3d-light')
    expect(container).not.toHaveClass('shadow-hover-light')
  })

  it('applies correct gridArea style based on props', () => {
    render(<Box startColumn={3} startRow={4} spanColumn={5} spanRow={6} content="Test content" useCard={false} />)

    const container = screen.getByText('Test content').closest('div')
    expect(container).toHaveStyle({
      gridArea: '4 / 3 / span 6 / span 5',
    })
  })
})
