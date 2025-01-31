import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach, Mock } from 'vitest'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'
import { useIsMobile } from '@/hooks/useIsMobile'
import ListOfMobileProjectsModal from '@/components/organisms/ListOfMobileProjectsModal.tsx'

vi.mock('@/hooks/useIsMobile', () => ({
  useIsMobile: vi.fn(),
}))

vi.mock('@/constants/projects', () => ({
  mobileProjects: [
    {
      title: 'dev.projects.projects.mobile.exampleProject.title',
      description: 'dev.projects.projects.mobile.exampleProject.description',
      url: 'http://example.com/mobile1',
      tools: ['React', 'TypeScript'],
      src: 'mobile1.png',
    },
    {
      title: 'dev.projects.projects.mobile.exampleProject.title',
      description: 'dev.projects.projects.mobile.exampleProject.description',
      url: 'http://example.com/mobile2',
      tools: ['React', 'TypeScript'],
      src: 'mobile2.png',
    },
    {
      title: 'dev.projects.projects.mobile.exampleProject.title',
      description: 'dev.projects.projects.mobile.exampleProject.description',
      url: 'http://example.com/mobile3',
      tools: ['React', 'TypeScript'],
      src: 'mobile3.png',
    },
  ],
}))

describe('ListOfMobileProjectsModal component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const renderComponent = (isMobile: boolean) => {
    ;(useIsMobile as Mock).mockReturnValue(isMobile)
    return render(
      <AppTestProvider>
        <ListOfMobileProjectsModal />
      </AppTestProvider>
    )
  }

  it('matches the snapshot for desktop view', () => {
    const { asFragment } = renderComponent(false)
    expect(asFragment()).toMatchSnapshot()
  })

  it('matches the snapshot for mobile view', () => {
    const { asFragment } = renderComponent(true)

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders the correct content for desktop view', () => {
    renderComponent(false)

    expect(screen.getByText('Example mobile project')).toBeInTheDocument()
  })

  it('renders the correct content for mobile view', () => {
    renderComponent(true)
    expect(screen.getByText('Example mobile project')).toBeInTheDocument()
  })
})
