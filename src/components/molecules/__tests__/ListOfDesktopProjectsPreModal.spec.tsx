import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ListOfDesktopProjectsPreModal from '@/components/molecules/ListOfDesktopProjectsPreModal'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'
import { desktopProjects } from '@/constants/projects'

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

describe.skip('ListOfDesktopProjectsPreModal Component', () => {
  const renderComponent = () =>
    render(
      <AppTestProvider>
        <ListOfDesktopProjectsPreModal />
      </AppTestProvider>
    )

  it('renders correctly with desktop projects', () => {
    const { asFragment } = renderComponent()

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders titles correctly', () => {
    renderComponent()

    desktopProjects.forEach(async () => {
      expect(await screen.findByText('Example mobile project')).toBeInTheDocument()
    })
  })

  it('renders correctly with mobile projects tools', async () => {
    renderComponent()

    desktopProjects.forEach((project) => {
      project.tools.forEach(async (tool) => {
        expect(await screen.getAllByLabelText(tool)).toBeTruthy()
      })
    })
  })

  it('displays the project image', () => {
    renderComponent()

    desktopProjects.forEach(async (project) => {
      expect(await screen.findByText(project.src)).toBeInTheDocument()
    })
  })
})
