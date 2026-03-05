export function Header() {
  return (
    <header className="mb-8 font-mono">
      <h1 className="text-xs tracking-tight uppercase text-stone-500 underline mb-3">Foodstuffs</h1>
      <h1 className="font-serif text-4xl tracking-tight text-stone-100 gap-2 flex">
        <span>Price</span>
        <span className="text-lime-400">Calculator</span>
      </h1>
      <span className="text-xs text-stone-500">Calculate Discounts, Regional tax, Pricing</span>
    </header>
  )
}
