import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CardBody } from '@/components/atoms/CardBody'

describe('CardBody component', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(
      <CardBody className="custom-class">
        <p>Test content</p>
      </CardBody>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders children correctly', () => {
    render(
      <CardBody className="custom-class">
        <p>Test content</p>
      </CardBody>
    )
    const content = screen.getByText('Test content')
    expect(content).toBeTruthy()
  })

  it('applies additional className', () => {
    const { container } = render(
      <CardBody className="custom-class">
        <p>Test content</p>
      </CardBody>
    )
    const div = container.firstChild as HTMLElement
    expect(div).toHaveClass('custom-class')
  })

  it('has the default styles applied', () => {
    const { container } = render(
      <CardBody>
        <p>Test content</p>
      </CardBody>
    )
    const div = container.firstChild as HTMLElement
    expect(div).toHaveClass('h-96', 'w-96', '[transform-style:preserve-3d]', '[&>*]:[transform-style:preserve-3d]')
  })
})
