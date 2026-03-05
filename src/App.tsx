import { Header } from '@/components/Header'
import { NumberInput } from '@/components/NumberInput'
import { RegionSelector } from '@/components/RegionSelector'
import { useMemo, useState } from 'react'
import type { RegionCode } from '@/types'
import { calculate, formatCurrency, formatPercent } from './utils/calculator'

function App() {
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [region, setRegion] = useState<RegionCode | null>(null)

  const result = useMemo(() => {
    const qty = Number(quantity)
    const _price = Number(price)
    if (!qty || !_price || !region || qty <= 0 || _price <= 0) return null
    return calculate(qty, _price, region)
  }, [quantity, price, region])

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-stone-100 flex items-start justify-center px-5 py-12">
        <div className="relative z-10 w-full max-w-lg">
          <Header />
          <div className="relative bg-stone-900 border border-stone-800 rounded-3xl p-7 mb-4 overflow-hidden">
            {/* Inputs */}
            <div className="flex flex-col gap-5 mb-6">
              <div className="grid grid-cols-2 gap-3.5">
                <NumberInput id="quantity" label="Quantity" value={quantity} onChange={setQuantity} />
                <NumberInput id="price" label="Price per item" value={price} onChange={setPrice} prefix="$" />
              </div>
              <RegionSelector value={region} onChange={setRegion} />
            </div>

            {/* Results */}
            <div className="h-36">
              {result ? (
                <div className="font-mono text-sm space-y-2 mb-5">
                  <div className="flex justify-between">
                    <span className="text-stone-500">
                      Subtotal ({quantity} × ${Number(price).toFixed(2)})
                    </span>
                    <span>{formatCurrency(result.subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Discount</span>
                    <span className="text-lime-400">− {formatCurrency(result.discountAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">
                      {region} Tax ({formatPercent(result.taxRate)})
                    </span>
                    <span className="text-yellow-300">+ {formatCurrency(result.taxAmount)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-stone-800">
                    <span className="text-stone-400 text-xs uppercase tracking-widest">Total (NZD)</span>
                    <span className="text-lime-400 text-2xl">{formatCurrency(result.total)}</span>
                  </div>
                </div>
              ) : (
                <p className="text-center text-stone-600 text-sm py-4 mb-5">Fill in all fields to see the breakdown</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
