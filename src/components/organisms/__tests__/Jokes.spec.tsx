import { render, screen, fireEvent, act } from '@testing-library/react'
import Jokes from '@/components/organisms/Jokes'
import { vi, describe, afterEach, it, expect, beforeEach } from 'vitest'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'

describe('Jokes Component', () => {
  const renderComponent = () =>
    render(
      <AppTestProvider>
        <Jokes />
      </AppTestProvider>
    )

  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.clearAllTimers()
  })

  it('matches the snapshot', () => {
    const { asFragment } = renderComponent()
    expect(asFragment()).toMatchSnapshot()
  })

  it('changes the joke after the interval', () => {
    renderComponent()

    const jokeElement = screen.getByTestId('current-joke')
    const firstJoke = jokeElement.textContent

    expect(firstJoke).toBeTruthy()

    act(() => {
      vi.advanceTimersByTime(10000) // Simulate 10 seconds passing
    })

    const updatedJokeElement = screen.getByTestId('current-joke')
    const newJoke = updatedJokeElement.textContent
    expect(newJoke).not.toBe(firstJoke)
  })

  it('changes the joke when refresh button is clicked', () => {
    renderComponent()

    const jokeElement = screen.getByTestId('current-joke')
    const firstJoke = jokeElement.textContent

    expect(firstJoke).toBeTruthy()

    const refreshButton = screen.getByTestId('refresh-joke-button')
    fireEvent.click(refreshButton)

    act(() => {
      vi.advanceTimersByTime(2000) // Simulate time for transition
    })

    const updatedJokeElement = screen.getByTestId('current-joke')
    const newJoke = updatedJokeElement.textContent
    expect(newJoke).not.toBe(firstJoke)
  })
})
