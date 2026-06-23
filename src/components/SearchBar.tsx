type Props = {
  value: string
  onChange: (v: string) => void
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="mx-auto max-w-content px-6 pt-7">
      <div className="relative">
        <svg
          viewBox="0 0 24 24"
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 stroke-ash"
          fill="none"
          strokeWidth="1.6"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.2-3.2" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          inputMode="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar prato, bebida, vinho ou ingrediente"
          className="w-full border border-line bg-white/60 py-3 pl-11 pr-4 text-[14px] text-noir placeholder:text-ash/80 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/40"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            aria-label="Limpar busca"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] uppercase tracking-wider2 text-ash hover:text-noir"
          >
            Limpar
          </button>
        )}
      </div>
    </div>
  )
}
