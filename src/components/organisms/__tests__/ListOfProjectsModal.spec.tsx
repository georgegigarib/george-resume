import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ListOfProjectsModal from '@/components/organisms/ListOfMobileProjectsModal'
import AppTestProvider from '@/AppTestProvider/AppTestProvider.tsx'

describe('ListOfProjectsModal component', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(
      <AppTestProvider>
        <ListOfProjectsModal />
      </AppTestProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
