import { describe, it, expect } from 'vitest'
import { calculate, getDiscountRate } from '../utils/calculator'

describe('getDiscountRate', () => {
  it('returns 0% for subtotals below $1,000', () => {
    expect(getDiscountRate(0)).toBe(0)
    expect(getDiscountRate(999.99)).toBe(0)
  })
  it('returns 3% for subtotals >= $1,000', () => {
    expect(getDiscountRate(1000)).toBe(0.03)
    expect(getDiscountRate(4999)).toBe(0.03)
  })
  it('returns 5% for subtotals >= $5,000', () => {
    expect(getDiscountRate(5000)).toBe(0.05)
  })
  it('returns 7% for subtotals >= $7,000', () => {
    expect(getDiscountRate(7000)).toBe(0.07)
  })
  it('returns 10% for subtotals >= $10,000', () => {
    expect(getDiscountRate(10000)).toBe(0.1)
  })
  it('returns 15% for subtotals >= $50,000', () => {
    expect(getDiscountRate(50000)).toBe(0.15)
  })
})

describe('calculate — subtotal and discount', () => {
  it('computes subtotal from quantity × price', () => {
    expect(calculate(10, 100, 'AUK').subtotal).toBe(1000)
  })
  it('applies correct discount to subtotal', () => {
    const result = calculate(250, 28, 'WLG')
    expect(result.subtotal).toBe(7000)
    expect(result.discountRate).toBe(0.07)
    expect(result.discountAmount).toBeCloseTo(490, 2)
    expect(result.discountedSubtotal).toBeCloseTo(6510, 2)
  })
  it('applies no discount below $1,000', () => {
    const result = calculate(5, 10, 'AUK')
    expect(result.discountRate).toBe(0)
    expect(result.discountAmount).toBe(0)
  })
  it('handles fractional prices', () => {
    expect(calculate(3, 33.33, 'WAI').subtotal).toBeCloseTo(99.99, 2)
  })
})
