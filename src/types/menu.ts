// =============================================================
//  TIPOS DO CARDÁPIO — Le Lui Bar e Cozinha
//  Estes tipos descrevem a forma dos dados em src/data/menuData.ts
// =============================================================

/** Item genérico do cardápio (pratos, sobremesas, bebidas, coquetéis). */
export type MenuItem = {
  id: string
  name: string
  description?: string
  /** Preço sempre como string, exatamente como no cardápio impresso. Ex.: "R$ 92", "R$ 26,80". */
  price?: string
  /** Etiquetas curtas. Ex.: "NEW", "Executivo", "0% Álcool". */
  tags?: string[]
  /** Observação livre (ex.: rótulo de intensidade de um coquetel). */
  notes?: string
}

/** Categoria de comida / bebida. */
export type MenuCategory = {
  id: string
  title: string
  /** Texto curto exibido abaixo do título da seção (ex.: regra do Executivo). */
  description?: string
  /** Preço único aplicado a toda a categoria (ex.: Autorais R$40, 0% Álcool R$21). */
  flatPrice?: string
  /** Texto livre extra (ex.: tabela de bases das caipirinhas). */
  note?: string
  items: MenuItem[]
}

/** Grupo lógico para a barra de navegação (agrupa categorias afins). */
export type NavGroup = {
  id: string
  label: string
  /** ids das categorias que o link de navegação aponta. */
  categoryIds: string[]
}

// ----------------------- CARTA DE VINHOS -----------------------

/** Tipo de vinho, usado nos filtros da carta. */
export type WineKind = 'branco' | 'espumante' | 'rose' | 'tinto'

/** Um rótulo da carta de vinhos. */
export type Wine = {
  id: string
  kind: WineKind
  /** País de origem (também usado como filtro). */
  country: string
  name: string
  /** Uvas / castas. */
  grapes?: string
  /** Produtor e região (ex.: "Miolo | Campanha Gaúcha"). */
  producer?: string
  /** Ano da safra, quando informado. */
  year?: string
  price?: string
  /** Corpo do vinho na escala da casa: 1 (leve) a 4 (encorpado). */
  body?: number
  /** "+" impresso ao lado das taças (meia-taça de intensidade extra). */
  bodyPlus?: boolean
  /** Símbolo do canhão: selo da casa para vinhos extraordinários. */
  cannon?: boolean
  /** Marcadores especiais: "Zero Álcool", "Meia Garrafa", "Taça", "Digestivo". */
  tags?: string[]
}

/** Opção de venda por taça/garrafa (seções "Taças", "Meia Garrafa", seleções). */
export type WineServingOption = {
  id: string
  name: string
  producer?: string
  grapes?: string
  origin?: string
  /** Lista de medidas e preços. Ex.: "Taça 100ml" → "R$18". */
  servings: { label: string; price: string }[]
}
