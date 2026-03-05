import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
}

export function Button({ label = 'Reset', className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`py-3.5 px-5 bg-transparent text-stone-500 border border-stone-700 rounded-xl text-[14px] cursor-pointer transition-all duration-150 hover:border-stone-500 hover:text-stone-300 ${className ?? ''}`}
      {...props}
    >
      {label}
    </button>
  )
}
