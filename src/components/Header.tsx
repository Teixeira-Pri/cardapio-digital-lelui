import { houseInfo } from '../data/menuData'

/** Marca "le · lui" recriada em tipografia, com o ornamento da casa ao centro. */
function Wordmark() {
  return (
    <div className="flex items-center justify-center gap-3 text-cream">
      <span className="font-serif text-[44px] leading-none tracking-tight">le</span>
      <span className="relative grid h-7 w-7 place-items-center">
        <span className="absolute inset-0 rotate-45 rounded-[5px] border border-gold/70" />
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-gold">
          <rect x="10.5" y="3" width="3" height="18" rx="1" />
          <rect x="5" y="9" width="14" height="3" rx="1" />
        </svg>
      </span>
      <span className="font-serif text-[44px] leading-none tracking-tight">lui</span>
    </div>
  )
}

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-noir text-cream">
      {/* atmosfera: brilho âmbar quente vindo do alto, como luz de bar */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(120% 80% at 50% -10%, rgba(196,163,90,0.16), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-content px-6 pb-9 pt-12 text-center">
        <p className="mb-5 text-[11px] uppercase tracking-wider3 text-gold/80">
          São Paulo · Carandiru
        </p>

        <Wordmark />

        <p className="mt-3 text-[12px] uppercase tracking-wider2 text-champagne/90">
          {houseInfo.tagline}
        </p>

        <div className="mx-auto my-6 flex max-w-[220px] items-center">
          <span className="rule-gold flex-1" />
          <span className="diamond mx-3" />
          <span className="rule-gold flex-1" />
        </div>

        <p className="mx-auto max-w-sm font-serif text-[19px] italic leading-snug text-cream/90">
          {houseInfo.pitch}
        </p>
      </div>
    </header>
  )
}
