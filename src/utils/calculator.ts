import { DISCOUNT_TIERS, TAX_RATES } from '@/constants'
import type { CalculationResult, RegionCode } from '@/types'

export function getDiscountRate(subtotal: number): number {
  for (const tier of DISCOUNT_TIERS) {
    if (subtotal >= tier.threshold) return tier.rate
  }
  return 0
}

export function calculate(quantity: number, pricePerItem: number, region: RegionCode): CalculationResult {
  const subtotal = quantity * pricePerItem
  const discountRate = getDiscountRate(subtotal)
  const discountAmount = subtotal * discountRate
  const discountedSubtotal = subtotal - discountAmount
  const taxRate = TAX_RATES[region]
  const taxAmount = discountedSubtotal * taxRate
  const total = discountedSubtotal + taxAmount

  return {
    subtotal,
    discountRate,
    discountAmount,
    discountedSubtotal,
    taxRate,
    taxAmount,
    total,
  }
}

export function formatPercent(rate: number): string {
  return `${(rate * 100).toFixed(2)}%`
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-NZ', {
    style: 'currency',
    currency: 'NZD',
    minimumFractionDigits: 2,
  }).format(value)
}
