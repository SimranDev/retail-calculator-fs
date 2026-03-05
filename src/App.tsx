import { Header } from '@/components/Header'
import { NumberInput } from '@/components/NumberInput'
import { RegionSelector } from '@/components/RegionSelector'
import { useState } from 'react'
import type { RegionCode } from '@/types'

function App() {
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [region, setRegion] = useState<RegionCode | null>(null)

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
          </div>
        </div>
      </div>
    </>
  )
}

export default App
