import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ListOfProjectsModal from '../ListOfMobileProjectsModal'

describe('ListOfProjectsModal component', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(<ListOfProjectsModal />)
    expect(asFragment()).toMatchSnapshot()
  })
})
