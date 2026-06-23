import type { MenuItem } from '../types/menu'

type Props = {
  item: MenuItem
  /** Quando true, oculta o preço individual (categorias com preço único). */
  hidePrice?: boolean
}

function Tag({ label }: { label: string }) {
  const isNew = label.toUpperCase() === 'NEW'
  return (
    <span
      className={[
        'inline-block border px-2 py-[2px] text-[9.5px] uppercase tracking-wider2',
        isNew
          ? 'border-gold bg-gold/10 text-amber'
          : 'border-line text-ash',
      ].join(' ')}
    >
      {label}
    </span>
  )
}

export default function MenuItemCard({ item, hidePrice }: Props) {
  const showPrice = !hidePrice && item.price
  return (
    <article className="py-4">
      <div className="flex items-baseline">
        <h3 className="font-serif text-[20px] leading-tight text-noir">
          {item.name}
        </h3>
        {showPrice && (
          <>
            <span className="leader" />
            <span className="whitespace-nowrap font-sans text-[14px] font-medium tracking-wide text-wood">
              {item.price}
            </span>
          </>
        )}
      </div>

      {item.description && (
        <p className="mt-1.5 max-w-[52ch] text-[13.5px] leading-relaxed text-ash">
          {item.description}
        </p>
      )}

      {(item.tags?.length || item.notes) && (
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          {item.tags?.map((t) => (
            <Tag key={t} label={t} />
          ))}
          {item.notes && (
            <span className="text-[11px] italic text-ash/80">{item.notes}</span>
          )}
        </div>
      )}
    </article>
  )
}
