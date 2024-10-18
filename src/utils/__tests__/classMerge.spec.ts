import { describe, it, expect } from 'vitest'
import { cn } from '../classMerge'

describe('cn function', () => {
  it('should combine classes correctly', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2')
  })

  it('should handle falsy values', () => {
    expect(cn('class1', false, null, undefined, 'class2')).toBe('class1 class2')
  })

  it('should merge Tailwind classes correctly', () => {
    expect(cn('bg-blue-500', 'bg-red-500')).toBe('bg-red-500')
  })

  it('should handle an empty input', () => {
    expect(cn()).toBe('')
  })
})
