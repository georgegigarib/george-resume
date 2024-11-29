import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ExampleComponent from '../ExampleComponent'

describe('ExampleComponent', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(<ExampleComponent />)
    expect(asFragment()).toMatchSnapshot()
  })
})
