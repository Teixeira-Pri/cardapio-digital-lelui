import { houseInfo } from '../data/menuData'

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Le Lui Bar e Cozinha, ' + houseInfo.address,
)}`
const instagramUrl = `https://instagram.com/${houseInfo.instagram}`
const telUrl = `tel:+551122511531`

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-noir text-cream">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 120%, rgba(196,163,90,0.14), transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-content px-6 py-14 text-center">
        <div className="flex items-center justify-center gap-2.5 text-cream">
          <span className="font-serif text-[30px] leading-none">le</span>
          <span className="relative grid h-5 w-5 place-items-center">
            <span className="absolute inset-0 rotate-45 rounded-[4px] border border-gold/70" />
            <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-gold">
              <rect x="10.5" y="3" width="3" height="18" rx="1" />
              <rect x="5" y="9" width="14" height="3" rx="1" />
            </svg>
          </span>
          <span className="font-serif text-[30px] leading-none">lui</span>
        </div>
        <p className="mt-2 text-[11px] uppercase tracking-wider2 text-champagne/80">
          {houseInfo.tagline}
        </p>

        <div className="mx-auto my-8 flex max-w-[220px] items-center">
          <span className="rule-gold flex-1" />
          <span className="diamond mx-3" />
          <span className="rule-gold flex-1" />
        </div>

        {/* Endereço e horários */}
        <div className="space-y-6 text-[13px] leading-relaxed text-cream/80">
          <div>
            <p className="mb-1 text-[10px] uppercase tracking-wider3 text-gold/70">Endereço</p>
            <p>{houseInfo.address}</p>
          </div>

          <div>
            <p className="mb-1 text-[10px] uppercase tracking-wider3 text-gold/70">
              Horário de Funcionamento
            </p>
            {houseInfo.hours.map((h) => (
              <p key={h.days}>
                {h.days} — {h.time}
              </p>
            ))}
          </div>

          <div>
            <p className="mb-1 text-[10px] uppercase tracking-wider3 text-gold/70">Reservas</p>
            <a href={telUrl} className="transition-colors hover:text-champagne">
              {houseInfo.phone}
            </a>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="border border-cream/25 px-6 py-2.5 text-[11px] uppercase tracking-wider2 text-cream/80 transition-colors duration-300 hover:border-cream/50 hover:text-cream"
          >
            Ver localização
          </a>
          <a
            href={telUrl}
            className="border border-cream/25 px-6 py-2.5 text-[11px] uppercase tracking-wider2 text-cream/80 transition-colors duration-300 hover:border-cream/50 hover:text-cream"
          >
            Falar com a casa
          </a>
        </div>

        {/* Instagram */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-[12px] text-cream/70 transition-colors hover:text-champagne"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.6">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
          </svg>
          @{houseInfo.instagram}
        </a>

        <p className="mt-10 text-[10px] uppercase tracking-wider2 text-ash">
          Le Lui Bar e Cozinha · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
