import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Presentation from '@/components/organisms/Presentation'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'

describe('Presentation component', () => {
  const renderComponent = () =>
    render(
      <AppTestProvider>
        <Presentation />
      </AppTestProvider>
    )

  it('matches the snapshot', () => {
    const { asFragment } = renderComponent()
    expect(asFragment()).toMatchSnapshot()
  })
})
