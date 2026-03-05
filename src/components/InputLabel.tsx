interface InputLabelProps {
  label: string
  htmlFor?: string
}

export function InputLabel({ label, htmlFor }: InputLabelProps) {
  return (
    <label htmlFor={htmlFor} className="text-[10.5px] font-semibold tracking-widest uppercase text-stone-500">
      {label}
    </label>
  )
}
