import { render } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi, Mock } from 'vitest'
import TechnologyBadge from '@/components/atoms/TechnologyBadge'
import { IconName, toolsIconsList } from '@/constants/ToolsIconsList'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'
import { useSelector } from 'react-redux'

vi.mock('react-redux', async () => {
  const actual = await vi.importActual('react-redux')
  return {
    ...actual,
    useSelector: vi.fn(),
  }
})

describe('TechnologyBadge component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const renderComponent = (tool: IconName, isDarkThemeEnabled: boolean) => {
    ;(useSelector as unknown as Mock).mockReturnValue(isDarkThemeEnabled)
    return render(
      <AppTestProvider>
        <TechnologyBadge tool={tool} size="lg" />
      </AppTestProvider>
    )
  }

  it('matches the snapshot for a light theme', () => {
    const { asFragment } = renderComponent(IconName.React, false) // Tema claro
    expect(asFragment()).toMatchSnapshot()
  })

  it('matches the snapshot for a dark theme', () => {
    const { asFragment } = renderComponent(IconName.React, true) // Tema oscuro
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly with the correct tool data', () => {
    const tool = IconName.React
    const { getByText } = renderComponent(tool, false)
    const toolData = toolsIconsList.find((t) => t.icon === tool)
    expect(getByText(toolData?.name ?? '')).toBeInTheDocument()
  })

  it('does not render if tool data is not found', () => {
    const { container } = renderComponent('NonExistentTool' as IconName, false)
    expect(container.firstChild).toBeNull()
  })
})
