import { useMemo, useState } from 'react'
import {
  wines,
  wineIntro,
  wineByGlass,
  wineHalfBottle,
  wineDigestifs,
  wineSeasonalSelection,
} from '../data/menuData'
import type { Wine, WineKind, WineServingOption } from '../types/menu'

// ----------------------------- ícones -----------------------------

/** Taça preenchida proporcional ao corpo do vinho. */
function GlassIcon({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
      <path
        d="M7 3h10l-1 7a4 4 0 0 1-8 0L7 3Z"
        className={filled ? 'fill-gold/85' : 'fill-line/50'}
      />
      <path d="M12 14v5M8.5 20h7" className="stroke-ash" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

/** Selo do canhão: vinhos extraordinários. */
function CannonIcon() {
  return (
    <span className="inline-flex items-center gap-1.5 text-amber" title="Vinho extraordinário">
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-amber" aria-hidden>
        <circle cx="6" cy="16" r="3" />
        <rect x="8" y="9" width="13" height="4" rx="2" transform="rotate(-18 8 9)" />
        <path d="M3 19h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <span className="text-[9px] uppercase tracking-wider2">Extraordinário</span>
    </span>
  )
}

/** Mostra o corpo (1–4 taças, com eventual "+") ou o canhão. */
function Body({ wine }: { wine: Wine }) {
  if (wine.cannon) return <CannonIcon />
  if (!wine.body) return null
  return (
    <span className="inline-flex items-center gap-0.5" title={`Corpo ${wine.body} de 4`}>
      {Array.from({ length: 4 }).map((_, i) => (
        <GlassIcon key={i} filled={i < wine.body!} />
      ))}
      {wine.bodyPlus && <span className="ml-0.5 text-[13px] leading-none text-amber">+</span>}
    </span>
  )
}

// ----------------------------- filtros -----------------------------

const KIND_FILTERS: { id: WineKind | 'todos' | 'zero'; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'branco', label: 'Brancos' },
  { id: 'espumante', label: 'Espumantes' },
  { id: 'rose', label: 'Rosé' },
  { id: 'tinto', label: 'Tintos' },
  { id: 'zero', label: 'Zero Álcool' },
]

function isZero(w: Wine) {
  return w.tags?.some((t) => t.toLowerCase().includes('zero')) ?? false
}

// --------------------------- card do vinho --------------------------

function WineCard({ wine }: { wine: Wine }) {
  return (
    <article className="py-4">
      <div className="flex items-baseline gap-3">
        <h4 className="text-[13px] font-medium uppercase tracking-wide text-noir">
          {wine.name}
        </h4>
        <span className="leader" />
        {wine.price && (
          <span className="whitespace-nowrap font-sans text-[13.5px] font-medium text-wood">
            {wine.price}
          </span>
        )}
      </div>

      {wine.grapes && (
        <p className="mt-1 text-[12.5px] font-medium text-woodlight">{wine.grapes}</p>
      )}

      <p className="mt-0.5 text-[12px] text-ash">
        {[wine.producer, wine.year && `· ${wine.year}`].filter(Boolean).join(' ')}
      </p>

      <div className="mt-2 flex items-center gap-3">
        <Body wine={wine} />
        {isZero(wine) && (
          <span className="border border-gold/50 px-2 py-[1px] text-[9px] uppercase tracking-wider2 text-amber">
            Zero Álcool
          </span>
        )}
      </div>
    </article>
  )
}

// ------------------------- seção de serviço -------------------------

function ServingBlock({
  title,
  options,
  note,
}: {
  title: string
  options: WineServingOption[]
  note?: string
}) {
  if (options.length === 0) return null
  return (
    <div className="mt-10">
      <h3 className="font-serif text-[22px] text-noir">{title}</h3>
      <div className="mt-3 divide-y divide-line/60">
        {options.map((o) => (
          <div key={o.id} className="py-3">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-[13px] font-medium uppercase tracking-wide text-noir">
                {o.name}
              </span>
              {o.servings.length === 1 && o.servings[0].label === '' && (
                <span className="font-sans text-[13.5px] font-medium text-wood">
                  {o.servings[0].price}
                </span>
              )}
            </div>
            {(o.grapes || o.producer || o.origin) && (
              <p className="mt-0.5 text-[12px] text-ash">
                {[o.grapes, o.producer, o.origin].filter(Boolean).join(' · ')}
              </p>
            )}
            {!(o.servings.length === 1 && o.servings[0].label === '') && (
              <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
                {o.servings.map((s) => (
                  <span key={s.label} className="text-[12.5px] text-woodlight">
                    {s.label} <span className="font-medium text-wood">{s.price}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {note && <p className="mt-3 text-[11px] italic text-ash">{note}</p>}
    </div>
  )
}

// ----------------------------- principal ----------------------------

export default function WineSection() {
  const [kind, setKind] = useState<WineKind | 'todos' | 'zero'>('todos')
  const [country, setCountry] = useState<string>('Todos')

  // Vinhos após o filtro de tipo (antes do país) — base para gerar os países.
  const byKind = useMemo(() => {
    if (kind === 'todos') return wines
    if (kind === 'zero') return wines.filter(isZero)
    return wines.filter((w) => w.kind === kind)
  }, [kind])

  const countries = useMemo(() => {
    const set = new Set(byKind.map((w) => w.country))
    return ['Todos', ...Array.from(set)]
  }, [byKind])

  const filtered = useMemo(
    () => (country === 'Todos' ? byKind : byKind.filter((w) => w.country === country)),
    [byKind, country],
  )

  // Agrupa por país para leitura, como no impresso.
  const grouped = useMemo(() => {
    const map = new Map<string, Wine[]>()
    for (const w of filtered) {
      const arr = map.get(w.country) ?? []
      arr.push(w)
      map.set(w.country, arr)
    }
    return Array.from(map.entries())
  }, [filtered])

  function selectKind(id: WineKind | 'todos' | 'zero') {
    setKind(id)
    setCountry('Todos')
  }

  return (
    <section id="vinhos" className="scroll-mt-[112px] bg-cream/50">
      <div className="mx-auto max-w-content px-6 py-14">
        {/* Abertura editorial da carta */}
        <header className="text-center">
          <p className="text-[11px] uppercase tracking-wider3 text-amber">A Casa indica</p>
          <h2 className="mt-3 font-serif text-[34px] leading-tight text-noir">
            {wineIntro.title}
          </h2>
          <div className="mx-auto mt-5 flex max-w-[150px] items-center">
            <span className="rule-gold flex-1" />
            <span className="diamond mx-2.5" />
            <span className="rule-gold flex-1" />
          </div>
          {wineIntro.paragraphs.map((p, i) => (
            <p
              key={i}
              className="mx-auto mt-4 max-w-[56ch] text-[13.5px] leading-relaxed text-ash"
            >
              {p}
            </p>
          ))}

          {/* legenda dos selos */}
          <div className="mx-auto mt-6 flex max-w-sm flex-wrap items-center justify-center gap-x-6 gap-y-2 border-y border-line/70 py-3 text-[11px] text-ash">
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-flex">
                <GlassIcon filled />
                <GlassIcon filled={false} />
              </span>
              Corpo: 1 (leve) a 4 (encorpado)
            </span>
            <CannonIcon />
          </div>
        </header>

        {/* Filtro por tipo */}
        <div className="no-scrollbar mt-10 flex justify-center gap-2 overflow-x-auto">
          {KIND_FILTERS.map((f) => {
            const active = f.id === kind
            return (
              <button
                key={f.id}
                onClick={() => selectKind(f.id)}
                className={[
                  'whitespace-nowrap border px-4 py-2 text-[11px] uppercase tracking-wider2 transition-colors duration-200',
                  active
                    ? 'border-gold bg-noir text-champagne'
                    : 'border-line text-ash hover:border-gold/60 hover:text-noir',
                ].join(' ')}
              >
                {f.label}
              </button>
            )
          })}
        </div>

        {/* Filtro por país (quando há mais de um) */}
        {countries.length > 2 && (
          <div className="no-scrollbar mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 overflow-x-auto">
            {countries.map((c) => {
              const active = c === country
              return (
                <button
                  key={c}
                  onClick={() => setCountry(c)}
                  className={[
                    'whitespace-nowrap py-1 text-[11px] uppercase tracking-wider2 transition-colors duration-200',
                    active ? 'text-noir underline decoration-gold underline-offset-4' : 'text-ash hover:text-noir',
                  ].join(' ')}
                >
                  {c}
                </button>
              )
            })}
          </div>
        )}

        {/* Lista de vinhos agrupada por país */}
        <div className="mt-8">
          {grouped.length === 0 && (
            <p className="py-10 text-center text-[14px] italic text-ash">
              Nenhum item encontrado.
            </p>
          )}
          {grouped.map(([countryName, list]) => (
            <div key={countryName} className="mb-8">
              <h3 className="border-b border-line pb-2 text-[12px] uppercase tracking-wider3 text-amber">
                {countryName}
              </h3>
              <div className="divide-y divide-line/50">
                {list.map((w) => (
                  <WineCard key={w.id} wine={w} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Seções complementares de serviço */}
        <ServingBlock title="Taças" options={wineByGlass} />
        <ServingBlock title="Meia Garrafa" options={wineHalfBottle} />
        <ServingBlock title="Digestivos" options={wineDigestifs} />
        <ServingBlock
          title={wineSeasonalSelection.title}
          options={wineSeasonalSelection.items}
          note={wineSeasonalSelection.note}
        />
      </div>
    </section>
  )
}
