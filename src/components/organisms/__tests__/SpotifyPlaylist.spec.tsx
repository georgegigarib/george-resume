import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, Mock } from 'vitest'
import { useIsMobile } from '@/hooks/useIsMobile'
import SpotifyPlaylist from '../SpotifyPlaylist'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'

vi.mock('@/hooks/useIsMobile', () => ({
  useIsMobile: vi.fn()
}))

describe('SpotifyPlaylist Component', () => {
  const renderComponent = () =>
    render(
      <AppTestProvider>
        <SpotifyPlaylist />
      </AppTestProvider>
    )

  it('renders correctly in mobile view', () => {
    ;(useIsMobile as Mock).mockReturnValue(true)

    renderComponent()

    expect(screen.getByText('My Favorite Playlist')).toBeVisible()
    expect(
      screen.getByText(
        'Enjoy my personal selection of songs in this playlist. Listen to it and let yourself be carried away by the rhythm!'
      )
    ).toBeVisible()

    const iframe = screen.getByTestId('spotify-playlist-iframe')
    expect(iframe).toHaveAttribute('height', '152px')
  })

  it('renders correctly in desktop view', () => {
    ;(useIsMobile as Mock).mockReturnValue(false)

    renderComponent()

    expect(screen.getByText('My Favorite Playlist')).toBeVisible()
    expect(
      screen.getByText(
        'Enjoy my personal selection of songs in this playlist. Listen to it and let yourself be carried away by the rhythm!'
      )
    ).toBeVisible()

    const iframe = screen.getByTestId('spotify-playlist-iframe')
    expect(iframe).toHaveAttribute('height', '379px')
  })
})
