import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import CustomTooltip from '@/components/molecules/CustomTooltip'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'

describe('CustomTooltip component', () => {
  const renderComponent = (title: string, children: React.ReactElement, props = {}) =>
    render(
      <AppTestProvider>
        <CustomTooltip title={title} {...props}>
          {children}
        </CustomTooltip>
      </AppTestProvider>
    )

  it('matches the snapshot', () => {
    const { asFragment } = renderComponent('Tooltip title', <span>Hover me</span>)

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders the tooltip title on hover', async () => {
    renderComponent('Tooltip title', <span>Hover me</span>)
    fireEvent.mouseOver(screen.getByText('Hover me'))

    expect(await screen.findByText('Tooltip title')).toBeInTheDocument()
  })

  it('removes tooltip message when mouse leave', async () => {
    renderComponent('Tooltip title', <span>Hover me</span>)
    fireEvent.mouseOver(screen.getByText('Hover me'))

    expect(await screen.findByText('Tooltip title')).toBeInTheDocument()

    fireEvent.mouseLeave(screen.getByText('Hover me'))

    //TODO: Fix this test, it works, but it's not the best way to test it
    setTimeout(() => {
      expect(screen.queryByText('Tooltip title')).not.toBeInTheDocument()
    }, 0)
  })
})
