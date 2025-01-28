import { render } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach, Mock } from 'vitest'
import DevTemplatesOption from '@/components/molecules/DevTemplatesOption'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'
import { Template } from '@/constants/templates'
import { useIsMobile } from '@/hooks/useIsMobile'
import { IconName } from '@/constants/ToolsIconsList'

vi.mock('@/hooks/useIsMobile', () => ({
  useIsMobile: vi.fn(),
}))

const mockTemplate: Template = {
  tools: [IconName.React, IconName.TypeScript, IconName.TailwindCSS],
  url: 'https://example.com',
  hint: 'example hint',
  bgColor: '#FF4500',
  description: 'Example description',
}

describe('DevTemplatesOption component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const renderComponent = (isMobile: boolean, option: Template) => {
    ;(useIsMobile as Mock).mockReturnValue(isMobile)
    return render(
      <AppTestProvider>
        <DevTemplatesOption option={option} />
      </AppTestProvider>
    )
  }

  it('matches the snapshot for desktop view', () => {
    const { asFragment } = renderComponent(false, mockTemplate)

    expect(asFragment()).toMatchSnapshot()
  })

  it('matches the snapshot for mobile view', () => {
    const { asFragment } = renderComponent(true, mockTemplate)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders the correct number of technology badges for desktop view', () => {
    const { getAllByTestId } = renderComponent(false, mockTemplate)
    expect(getAllByTestId('tec-badge').length).toBe(3)
  })

  it('renders the correct number of technology badges for mobile view', () => {
    const { getAllByTestId } = renderComponent(true, mockTemplate)
    expect(getAllByTestId('tec-badge').length).toBe(3)
  })
})
