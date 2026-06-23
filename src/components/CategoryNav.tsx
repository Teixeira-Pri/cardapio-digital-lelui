import { useEffect, useRef } from 'react'
import { navGroups } from '../data/menuData'

type Props = {
  activeId: string
  onSelect: (id: string) => void
}

/**
 * Navegação horizontal fixa. Apenas UMA categoria fica ativa por vez
 * (controlada pelo App via scroll spy). A categoria ativa é centralizada
 * automaticamente na barra.
 */
export default function CategoryNav({ activeId, onSelect }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  // Mantém o item ativo visível, deslizando a barra horizontalmente.
  useEffect(() => {
    const el = itemRefs.current[activeId]
    const scroller = scrollerRef.current
    if (!el || !scroller) return
    const target =
      el.offsetLeft - scroller.clientWidth / 2 + el.clientWidth / 2
    scroller.scrollTo({ left: target, behavior: 'smooth' })
  }, [activeId])

  return (
    <nav className="sticky top-0 z-40 border-b border-line/70 bg-paper/95 backdrop-blur nav-shadow">
      <div
        ref={scrollerRef}
        className="no-scrollbar mx-auto flex max-w-content gap-1 overflow-x-auto px-3 py-3"
      >
        {navGroups.map((g) => {
          const active = g.id === activeId
          return (
            <button
              key={g.id}
              ref={(node) => {
                itemRefs.current[g.id] = node
              }}
              onClick={() => onSelect(g.id)}
              aria-current={active ? 'true' : undefined}
              className={[
                'relative whitespace-nowrap px-3 pb-2 pt-1 text-[12px] uppercase tracking-wider2 transition-colors duration-200',
                active ? 'text-noir' : 'text-ash hover:text-noir',
              ].join(' ')}
            >
              {g.label}
              <span
                className={[
                  'absolute inset-x-2 bottom-0 h-[2px] origin-center transition-transform duration-300',
                  active ? 'scale-x-100 bg-gold' : 'scale-x-0 bg-gold/0',
                ].join(' ')}
              />
            </button>
          )
        })}
      </div>
    </nav>
  )
}
