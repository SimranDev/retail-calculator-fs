import { REGIONS, TAX_RATES } from '@/constants'
import { formatPercent } from '@/utils/calculator'
import type { RegionCode } from '@/types'
import { InputLabel } from './InputLabel'

interface RegionSelectorProps {
  value: RegionCode | null
  onChange: (region: RegionCode) => void
}

export function RegionSelector({ value, onChange }: RegionSelectorProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <InputLabel label="Select region" />
      <div className="grid grid-cols-5 gap-2">
        {REGIONS.map((region) => {
          const isActive = value === region
          return (
            <button
              key={region}
              type="button"
              onClick={() => onChange(region)}
              className={`
                flex flex-col items-center gap-0.5 py-2.5 px-1 rounded-xl border text-center
                transition-all duration-150 cursor-pointer
                ${
                  isActive
                    ? 'bg-lime-400/10 border-lime-400 text-lime-400'
                    : 'bg-stone-800/60 border-stone-700 text-stone-500 hover:border-stone-500 hover:text-stone-300'
                }
              `}
            >
              <span className="font-mono text-xs font-medium">{region}</span>
              <span className="font-mono text-[9px] opacity-70">{formatPercent(TAX_RATES[region])}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
