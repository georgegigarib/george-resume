import { render } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import ToolIcon from '@/components/atoms/ToolIcon'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'
import { IconName, ToolIconProps } from '@/constants/ToolsIconsList'

describe('ToolIcon component', () => {
  const renderComponent = ({ tool, size = 'lg' }: ToolIconProps) =>
    render(
      <AppTestProvider>
        <ToolIcon tool={tool} size={size} />
      </AppTestProvider>
    )

  it('matches the snapshot for a default size', () => {
    const { asFragment } = renderComponent({ tool: IconName.React })

    expect(asFragment()).toMatchSnapshot()
  })

  it('matches the snapshot for a custom size', () => {
    const { asFragment } = renderComponent({ tool: IconName.React, size: '2x' })

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders the correct icon for a known tool', () => {
    const { getByAltText } = renderComponent({ tool: IconName.JavaScript })

    expect(getByAltText('JavaScript')).toBeInTheDocument()
  })

  it('renders nothing for an unknown tool', () => {
    const { container } = renderComponent({ tool: 'UnknownTool' as IconName })

    expect(container.firstChild).toBeNull()
  })

  beforeEach(() => {
    vi.clearAllMocks()
  })
})
