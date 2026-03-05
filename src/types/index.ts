export type RegionCode = 'AUK' | 'WLG' | 'WAI' | 'CHC' | 'TAS'

export interface CalculationResult {
  subtotal: number
  discountRate: number
  discountAmount: number
  discountedSubtotal: number
  taxRate: number
  taxAmount: number
  total: number
}

export interface DiscountTier {
  threshold: number
  rate: number
  label: string
  rateLabel: string
}
