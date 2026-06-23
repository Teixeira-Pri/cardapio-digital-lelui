import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import CategoryNav from './components/CategoryNav'
import SearchBar from './components/SearchBar'
import HighlightSection from './components/HighlightSection'
import MenuSection from './components/MenuSection'
import MenuItemCard from './components/MenuItemCard'
import WineSection from './components/WineSection'
import Footer from './components/Footer'
import { menu, navGroups, wines } from './data/menuData'
import type { MenuItem } from './types/menu'

/** Remove acentos e caixa para uma busca tolerante. */
const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

export default function App() {
  const [query, setQuery] = useState('')
  const [activeId, setActiveId] = useState('destaques')

  const searching = query.trim().length > 0

  // Mapa categoria → grupo de navegação (um grupo pode conter várias categorias).
  const catToGroup = useMemo(() => {
    const map: Record<string, string> = {}
    for (const g of navGroups) for (const c of g.categoryIds) map[c] = g.id
    return map
  }, [])

  // ----------------------- Scroll spy -----------------------
  // Garante que APENAS uma categoria fique ativa por vez.
  useEffect(() => {
    if (searching) return
    const ids = ['destaques', ...menu.map((c) => c.id), 'vinhos']
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id)
          else visible.delete(e.target.id)
        }
        // primeiro id, em ordem de documento, que está visível
        const top = ids.find((id) => visible.has(id))
        if (top) setActiveId(catToGroup[top] ?? top)
      },
      { rootMargin: '-120px 0px -72% 0px', threshold: 0 },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [searching, catToGroup])

  // ----------------------- Ações -----------------------
  function handleSelect(groupId: string) {
    const group = navGroups.find((g) => g.id === groupId)
    const firstCat = group?.categoryIds[0] ?? groupId
    setActiveId(groupId)
    document.getElementById(firstCat)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // ----------------------- Busca -----------------------
  const matchMenu = useMemo(() => {
    if (!searching) return []
    const q = norm(query.trim())
    return menu
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((it) => {
          const hay = norm(
            [it.name, it.description, it.notes, ...(it.tags ?? [])]
              .filter(Boolean)
              .join(' '),
          )
          return hay.includes(q)
        }),
      }))
      .filter((cat) => cat.items.length > 0)
  }, [query, searching])

  const matchWines = useMemo<MenuItem[]>(() => {
    if (!searching) return []
    const q = norm(query.trim())
    return wines
      .filter((w) => {
        const hay = norm(
          [w.name, w.grapes, w.producer, w.country, w.year].filter(Boolean).join(' '),
        )
        return hay.includes(q)
      })
      .map((w) => ({
        id: w.id,
        name: w.name,
        description: [w.grapes, w.producer, w.year && `· ${w.year}`, `· ${w.country}`]
          .filter(Boolean)
          .join(' '),
        price: w.price,
      }))
  }, [query, searching])

  const noResults = searching && matchMenu.length === 0 && matchWines.length === 0

  return (
    <div className="min-h-screen bg-paper-grain font-sans text-noir">
      <Header />

      <SearchBar value={query} onChange={setQuery} />

      {!searching && <CategoryNav activeId={activeId} onSelect={handleSelect} />}

      {/* -------- Modo busca -------- */}
      {searching && (
        <div className="mx-auto max-w-content px-6 pb-16 pt-4">
          {noResults && (
            <p className="py-20 text-center font-serif text-[22px] italic text-ash">
              Nenhum item encontrado.
            </p>
          )}

          {matchMenu.map((cat) => (
            <section key={cat.id} className="py-6">
              <h2 className="font-sans text-[13px] uppercase tracking-wider3 text-amber">
                {cat.title}
                {cat.flatPrice ? ` · ${cat.flatPrice}` : ''}
              </h2>
              <div className="mt-1 divide-y divide-line/60">
                {cat.items.map((item) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    hidePrice={Boolean(cat.flatPrice)}
                  />
                ))}
              </div>
            </section>
          ))}

          {matchWines.length > 0 && (
            <section className="py-6">
              <h2 className="font-sans text-[13px] uppercase tracking-wider3 text-amber">
                Carta de Vinhos
              </h2>
              <div className="mt-1 divide-y divide-line/60">
                {matchWines.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          )}
        </div>
      )}

      {/* -------- Cardápio completo -------- */}
      {!searching && (
        <main>
          <HighlightSection />

          <div className="mx-auto max-w-content px-6">
            {menu.map((cat) => (
              <MenuSection key={cat.id} category={cat} />
            ))}
          </div>

          <WineSection />
        </main>
      )}

      <Footer />
    </div>
  )
}
