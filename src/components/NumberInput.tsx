import { InputLabel } from '@/components/InputLabel'

interface NumberInputProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  prefix?: string
  min?: number
  step?: number
}

export function NumberInput({ id, label, value, onChange, placeholder = '0', prefix, min, step }: NumberInputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <InputLabel label={label} htmlFor={id} />
      <div className="relative flex items-center">
        {prefix && (
          <span className="absolute left-3.5 font-mono text-md text-stone-500 pointer-events-none select-none">{prefix}</span>
        )}
        <input
          id={id}
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          min={min}
          step={step}
          className={`
            w-full bg-stone-800/60 border rounded-xl py-3 font-mono text-md text-stone-100 outline-none placeholder:text-stone-700
            [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none focus:border-lime-400
            ${prefix ? 'pl-7 pr-3.5' : 'px-3.5'}

          `}
        />
      </div>
    </div>
  )
}
