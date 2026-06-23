import { menu, highlightIds } from '../data/menuData'
import type { MenuItem } from '../types/menu'

/** Busca um item pelo id em todas as categorias do cardápio. */
function findItem(id: string): (MenuItem & { categoryTitle: string }) | null {
  for (const cat of menu) {
    const found = cat.items.find((i) => i.id === id)
    if (found) return { ...found, categoryTitle: cat.title }
  }
  return null
}

export default function HighlightSection() {
  const items = highlightIds
    .map(findItem)
    .filter((i): i is MenuItem & { categoryTitle: string } => Boolean(i))

  if (items.length === 0) return null

  return (
    <section id="destaques" className="scroll-mt-[112px] bg-noir text-cream">
      {/* atmosfera quente sutil, ecoando o cabeçalho */}
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              'radial-gradient(110% 70% at 50% 0%, rgba(196,163,90,0.14), transparent 60%)',
          }}
        />

        <div className="relative mx-auto max-w-content px-6 py-12">
          <header className="text-center">
            <p className="text-[11px] uppercase tracking-wider3 text-gold/80">
              Da nossa cozinha
            </p>
            <h2 className="mt-3 font-serif text-[30px] leading-tight text-cream">
              Destaques da Casa
            </h2>
            <div className="mx-auto mt-5 flex max-w-[140px] items-center">
              <span className="h-px flex-1 bg-gold/40" />
              <span className="diamond mx-2.5" />
              <span className="h-px flex-1 bg-gold/40" />
            </div>
          </header>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {items.map((item) => (
              <article
                key={item.id}
                className="border border-gold/25 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-gold/50"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-[22px] leading-tight text-cream">
                    {item.name}
                  </h3>
                  {item.price && (
                    <span className="whitespace-nowrap font-sans text-[14px] font-medium tracking-wide text-champagne">
                      {item.price}
                    </span>
                  )}
                </div>

                <p className="mt-1 text-[10px] uppercase tracking-wider2 text-gold/70">
                  {item.categoryTitle}
                </p>

                {item.description && (
                  <p className="mt-3 text-[13px] leading-relaxed text-cream/70">
                    {item.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
