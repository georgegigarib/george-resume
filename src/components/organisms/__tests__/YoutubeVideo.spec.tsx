import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, Mock } from 'vitest'
import { useIsMobile } from '@/hooks/useIsMobile'
import { Provider } from 'react-redux'
import { configureStore, Store } from '@reduxjs/toolkit'
import activeHashReducer from '@/store/hash/activeHashSlice'
import { Sections } from '@/app/layout/navbarTypes'
import YoutubeVideo from '../YoutubeVideo'
import i18n from '@/locales/i18n.config'
import { I18nextProvider } from 'react-i18next'

const mockStore = (initialState: { hash: { activeHash: Sections } }) => {
  return configureStore({
    reducer: {
      hash: activeHashReducer
    },
    preloadedState: initialState
  })
}

vi.mock('@/hooks/useIsMobile', () => ({
  useIsMobile: vi.fn()
}))

describe('LocalVideoWithTooltip Component', () => {
  const renderComponent = (store: Store) =>
    render(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <YoutubeVideo />
        </Provider>
      </I18nextProvider>
    )

  it('renders correctly and displays loading indicator initially', () => {
    ;(useIsMobile as Mock).mockReturnValue(false)
    const store = mockStore({ hash: { activeHash: Sections.Dev } })

    renderComponent(store)

    expect(screen.getByRole('progressbar')).toBeVisible()
  })

  it('matches snapshot', () => {
    ;(useIsMobile as Mock).mockReturnValue(false)
    const store = mockStore({ hash: { activeHash: Sections.Dev } })

    const { container } = renderComponent(store)
    expect(container).toMatchSnapshot()
  })

  it('shows tooltip when activeHash matches and after timeout', async () => {
    ;(useIsMobile as Mock).mockReturnValue(false)
    const store = mockStore({ hash: { activeHash: Sections.Music } })
    renderComponent(store)

    await waitFor(() => expect(screen.getByText('Click me!')).toBeVisible())
  })
})
