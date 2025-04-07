import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ListOfProjectsThreeDSlider from '@/components/molecules/ListOfProjectsThreeDSlider'
import { desktopProjects, mobileProjects } from '@/constants/projects'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'

vi.mock('@/hooks/useIsMobile', () => ({
  useIsMobile: vi.fn(),
}))

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserver

vi.mock('@/constants/projects', () => ({
  desktopProjects: [
    {
      title: 'Desktop Project 1',
      description: 'Description for Desktop Project 1',
      url: 'http://example.com/desktop1',
      tools: ['React', 'TypeScript'],
      src: 'desktop1.png',
    },
  ],
  mobileProjects: [
    {
      title: 'Mobile Project 1',
      description: 'Description for Mobile Project 1',
      url: 'http://example.com/mobile1',
      tools: ['React Native', 'JavaScript'],
      src: 'mobile1.png',
    },
  ],
}))

// TODO: Fix this
describe('ListOfProjectsThreeDSlider Component', () => {
  const renderComponent = (platform: 'desktop' | 'mobile') =>
    render(
      <AppTestProvider>
        <ListOfProjectsThreeDSlider platform={platform} />
      </AppTestProvider>
    )

  it('renders correctly', () => {
    const { asFragment } = renderComponent('desktop')

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly with desktop projects', () => {
    renderComponent('desktop')

    desktopProjects.forEach((project) => {
      expect(screen.findByAltText(project.title)).toBeTruthy()
    })
  })

  it('renders correctly with mobile projects', () => {
    renderComponent('mobile')

    mobileProjects.forEach((project) => {
      expect(screen.findByAltText(project.title)).toBeTruthy()
    })
  })

  it('toggles between desktop and mobile view', () => {
    renderComponent('desktop')

    const toggleButton2 = screen.getByTestId('platform-toggle')
    fireEvent.click(toggleButton2)

    mobileProjects.forEach((project) => {
      expect(screen.findByAltText(project.title)).toBeTruthy()
    })
  })
})
