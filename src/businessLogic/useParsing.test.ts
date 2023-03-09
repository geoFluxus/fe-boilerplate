import { renderHook, act } from '@testing-library/react'
import useParsing from './useParsing'
import { describe, expect, it, vi } from 'vitest'

const mockUtcDate = '2006-03-24T22:30:00.000Z'
const mockLongString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.`

describe('useParsing hook', () => {
  it('should parse utc Date corectly', () => {
    const { result } = renderHook(() => useParsing())
    let parsed

    act(() => {
      parsed = result.current.parseFromUtc(mockUtcDate)
    })

    expect(parsed).toBe('24/03/2006 - 22:30')
  })

  it('should truncate strings corectly', () => {
    const { result } = renderHook(() => useParsing())
    let truncated

    act(() => {
      truncated = result.current.truncate(mockLongString)
    })

    expect(truncated).toBe(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem...`)
  })
})
