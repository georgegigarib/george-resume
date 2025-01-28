import { render } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi, Mock } from 'vitest'
import ProjectInfo from '@/components/atoms/ProjectInfo'
import { IconName } from '@/constants/ToolsIconsList'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'
import { useIsMobile } from '@/hooks/useIsMobile'

vi.mock('@/hooks/useIsMobile', () => ({
  useIsMobile: vi.fn(),
}))

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserver

describe('ProjectInfo component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderComponent = (isMobile: boolean, props: any) => {
    ;(useIsMobile as Mock).mockReturnValue(isMobile)
    return render(
      <AppTestProvider>
        <ProjectInfo {...props} />
      </AppTestProvider>
    )
  }

  const defaultDesktopProjectProps = {
    title: 'dev.projects.projects.desktop.exampleProject.title',
    description: 'dev.projects.projects.desktop.exampleProject.description',
    url: 'https://example.com',
    tools: [IconName.React, IconName.TypeScript],
  }

  const defaultMobileProjectProps = {
    ...defaultDesktopProjectProps,
    title: 'dev.projects.projects.mobile.exampleProject.title',
    description: 'dev.projects.projects.mobile.exampleProject.description',
  }

  it('matches the snapshot for desktop view', () => {
    const { asFragment } = renderComponent(false, defaultDesktopProjectProps)
    expect(asFragment()).toMatchSnapshot()
  })

  it('matches the snapshot for mobile view', () => {
    const { asFragment } = renderComponent(true, defaultMobileProjectProps)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders the project title and description for desktop view', () => {
    const { getByText } = renderComponent(false, defaultDesktopProjectProps)
    expect(getByText('Example desktop project')).toBeInTheDocument()
    expect(getByText('Example desktop project description')).toBeInTheDocument()
  })

  it('renders the project title and description for mobile view', () => {
    const { getByText } = renderComponent(true, defaultMobileProjectProps)
    expect(getByText('Example mobile project')).toBeInTheDocument()
    expect(getByText('Example mobile project description')).toBeInTheDocument()
  })

  it('renders the project URL', () => {
    const { getByRole } = renderComponent(false, defaultDesktopProjectProps)
    const link = getByRole('link')
    expect(link).toHaveAttribute('href', 'https://example.com')
  })

  it('renders the technology badges', () => {
    const { getAllByText } = renderComponent(false, defaultDesktopProjectProps)
    const badges = getAllByText('TypeScript')
    expect(badges.length).toBeGreaterThan(0)
  })
})
