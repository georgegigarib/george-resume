import { centerModalInViewport } from '@/utils/centerModalInViewPort'
import { describe, it, expect } from 'vitest'

describe('centerModalInViewport', () => {
  it('calculates correct position for desktop', () => {
    window.innerWidth = 1200
    window.innerHeight = 800

    const position = centerModalInViewport(false)
    expect(position).toEqual({ top: 200, left: 375 })
  })

  it('calculates correct position for mobile', () => {
    window.innerWidth = 400
    window.innerHeight = 1000

    const position = centerModalInViewport(true)
    expect(position).toEqual({ top: 300, left: 40 })
  })
})
