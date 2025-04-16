import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach, Mock } from 'vitest'
import ListOfDesktopProjectsModal from '@/components/organisms/ListOfDesktopProjectsModal'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'
import { useIsMobile } from '@/hooks/useIsMobile'

vi.mock('swiper/react', () => ({
  Swiper: ({
    children,
    onSlideChange,
  }: {
    children: React.ReactNode
    onSlideChange?: (params: { realIndex: number }) => void
  }) => {
    onSlideChange?.({ realIndex: 0 })
    return <div data-testid="swiper">{children}</div>
  },
  SwiperSlide: ({ children }: { children: React.ReactNode }) => <div data-testid="swiper-slide">{children}</div>,
}))

vi.mock('@/hooks/useIsMobile', () => ({
  useIsMobile: vi.fn(),
}))

vi.mock('@/constants/projects', () => ({
  desktopProjects: [
    {
      title: 'dev.projects.projects.desktop.exampleProject.title',
      description: 'dev.projects.projects.desktop.exampleProject.description',
      url: 'http://example.com/desktop1',
      tools: ['React', 'TypeScript'],
      src: 'desktop1.png',
    },
    {
      title: 'dev.projects.projects.desktop.exampleProject.title',
      description: 'dev.projects.projects.desktop.exampleProject.description',
      url: 'http://example.com/desktop2',
      tools: ['React', 'TypeScript'],
      src: 'desktop2.png',
    },
    {
      title: 'dev.projects.projects.desktop.exampleProject.title',
      description: 'dev.projects.projects.desktop.exampleProject.description',
      url: 'http://example.com/desktop3',
      tools: ['React', 'TypeScript'],
      src: 'desktop3.png',
    },
  ],
}))

describe('ListOfDesktopProjectsModal component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const renderComponent = (isMobile: boolean) => {
    ;(useIsMobile as Mock).mockReturnValue(isMobile)
    return render(
      <AppTestProvider>
        <ListOfDesktopProjectsModal />
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

    expect(screen.getByText('Example desktop project')).toBeInTheDocument()
  })

  it('renders the correct content for mobile view', () => {
    renderComponent(true)
    expect(screen.getByText('Example desktop project')).toBeInTheDocument()
  })
})
