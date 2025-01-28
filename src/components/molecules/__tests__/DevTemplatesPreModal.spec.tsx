import { render } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach } from 'vitest'
import DevTemplatesPreModal from '@/components/molecules/DevTemplatesPreModal'
import AppTestProvider from '@/AppTestProvider/AppTestProvider'

describe('DevTemplatesPreModal component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const renderComponent = () =>
    render(
      <AppTestProvider>
        <DevTemplatesPreModal />
      </AppTestProvider>
    )

  it('matches the snapshot', () => {
    const { asFragment } = renderComponent()

    expect(asFragment()).toMatchSnapshot()
  })
})
