import type { DiscountTier, RegionCode } from '@/types'

export const DISCOUNT_TIERS: DiscountTier[] = [
  { threshold: 50000, rate: 0.15, label: '$50,000+', rateLabel: '15%' },
  { threshold: 10000, rate: 0.1, label: '$10,000+', rateLabel: '10%' },
  { threshold: 7000, rate: 0.07, label: '$7,000+', rateLabel: '7%' },
  { threshold: 5000, rate: 0.05, label: '$5,000+', rateLabel: '5%' },
  { threshold: 1000, rate: 0.03, label: '$1,000+', rateLabel: '3%' },
]

export const TAX_RATES: Record<RegionCode, number> = {
  AUK: 0.0685,
  WLG: 0.08,
  WAI: 0.0625,
  CHC: 0.04,
  TAS: 0.0825,
}

export const REGIONS = Object.keys(TAX_RATES) as RegionCode[]
