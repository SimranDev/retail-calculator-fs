export type RegionCode = 'AUK' | 'WLG' | 'WAI' | 'CHC' | 'TAS'

export interface CalculationResult {
  subtotal: number
  discountRate: number
  discountAmount: number
  discountedSubtotal: number
  taxRate: number // placeholder — tax logic
  taxAmount: number // placeholder — tax logic
  total: number
}

export interface DiscountTier {
  threshold: number
  rate: number
  label: string
  rateLabel: string
}
