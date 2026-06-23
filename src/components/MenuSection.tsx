import type { MenuCategory } from '../types/menu'
import MenuItemCard from './MenuItemCard'

type Props = {
  category: MenuCategory
}

/**
 * Renderiza uma categoria do cardápio: título em caixa alta, eventuais
 * description / flatPrice / note e a lista de itens. Quando a categoria
 * tem flatPrice, o preço individual dos cards é ocultado.
 */
export default function MenuSection({ category }: Props) {
  const hidePrice = Boolean(category.flatPrice)

  return (
    <section id={category.id} className="scroll-mt-[112px] py-9">
      <header className="text-center">
        <h2 className="font-sans text-[15px] uppercase tracking-wider3 text-noir">
          {category.title}
        </h2>

        {category.flatPrice && (
          <p className="mt-2 font-serif text-[18px] italic text-amber">
            {category.flatPrice}
          </p>
        )}

        {category.description && (
          <p className="mx-auto mt-3 max-w-[46ch] text-[12px] uppercase tracking-wider2 text-ash">
            {category.description}
          </p>
        )}

        <div className="mx-auto mt-5 flex max-w-[120px] items-center">
          <span className="rule-gold flex-1" />
          <span className="diamond mx-2.5" />
          <span className="rule-gold flex-1" />
        </div>
      </header>

      <div className="mt-3 divide-y divide-line/60">
        {category.items.map((item) => (
          <MenuItemCard key={item.id} item={item} hidePrice={hidePrice} />
        ))}
      </div>

      {category.note && (
        <p className="mt-5 whitespace-pre-line border-l-2 border-gold/50 bg-cream/40 px-4 py-3 text-[12.5px] leading-relaxed text-ash">
          {category.note}
        </p>
      )}
    </section>
  )
}
