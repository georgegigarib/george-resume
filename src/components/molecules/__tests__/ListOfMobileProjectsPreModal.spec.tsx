import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import ListOfMobileProjectsPreModal from '@/components/molecules/ListOfMobileProjectsPreModal'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'
import { mobileProjects } from '@/constants/projects'

vi.mock('swiper/react', () => ({
  Swiper: ({ children, onSlideChange }: any) => {
    onSlideChange?.({ realIndex: 0 })
    return <div data-testid="swiper">{children}</div>
  },
  SwiperSlide: ({ children }: any) => <div data-testid="swiper-slide">{children}</div>,
}))

vi.mock('swiper/modules', () => ({
  EffectCards: vi.fn(),
}))

beforeEach(() => {
  const originalWarn = console.warn
  vi.spyOn(console, 'warn').mockImplementation((...args) => {
    if (args[0]?.includes('Swiper Loop Warning')) return
    originalWarn.apply(console, args)
  })
})

vi.mock('@/constants/projects', () => ({
  mobileProjects: [
    {
      title: 'dev.projects.projects.mobile.exampleProject.title',
      description: 'dev.projects.projects.mobile.exampleProject.description',
      url: 'http://example.com/mobile1',
      tools: ['React', 'JavaScript'],
      src: 'mobile1.png',
    },
    {
      title: 'dev.projects.projects.mobile.exampleProject.title',
      description: 'dev.projects.projects.mobile.exampleProject.description',
      url: 'http://example.com/mobile2',
      tools: ['React', 'JavaScript'],
      src: 'mobile2.png',
    },
    {
      title: 'dev.projects.projects.mobile.exampleProject.title',
      description: 'dev.projects.projects.mobile.exampleProject.description',
      url: 'http://example.com/mobile3',
      tools: ['React', 'JavaScript'],
      src: 'mobile3.png',
    },
  ],
}))

describe('ListOfMobileProjectsPreModal Component', () => {
  const renderComponent = () =>
    render(
      <AppTestProvider>
        <ListOfMobileProjectsPreModal />
      </AppTestProvider>
    )

  it('renders correctly', () => {
    const { asFragment } = renderComponent()

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly with mobile projects titles', () => {
    renderComponent()

    mobileProjects.forEach(() => {
      expect(screen.getByText('Example mobile project')).toBeInTheDocument()
    })
  })

  it('renders correctly with mobile projects descrition', () => {
    renderComponent()

    mobileProjects.forEach(() => {
      expect(screen.getByText('Example mobile project description')).toBeInTheDocument()
    })
  })

  it('displays the project image', () => {
    renderComponent()

    mobileProjects.forEach(async (project) => {
      expect(await screen.findByText(project.src)).toBeInTheDocument()
    })
  })
})
