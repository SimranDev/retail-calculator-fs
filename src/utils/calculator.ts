import { DISCOUNT_TIERS } from '@/constants'
import type { CalculationResult, RegionCode } from '@/types'

export function getDiscountRate(subtotal: number): number {
  for (const tier of DISCOUNT_TIERS) {
    if (subtotal >= tier.threshold) return tier.rate
  }
  return 0
}

export function calculate(
  quantity: number,
  pricePerItem: number,
  _region: RegionCode // TODO: tax logic
): CalculationResult {
  const subtotal = quantity * pricePerItem
  const discountRate = getDiscountRate(subtotal)
  const discountAmount = subtotal * discountRate
  const discountedSubtotal = subtotal - discountAmount

  return {
    subtotal,
    discountRate,
    discountAmount,
    discountedSubtotal,
    taxRate: 0, // TODO: placeholder for tax logic
    taxAmount: 0, // TODO: placeholder for tax logic
    total: discountedSubtotal,
  }
}
