# Cardápio Digital — Le Lui Bar e Cozinha

Protótipo de cardápio digital mobile-first, premium e editorial, construído a
partir do cardápio impresso real e da identidade visual da casa.

Stack: **React + TypeScript + Vite + Tailwind CSS**.

---

## Como rodar

Pré-requisito: Node.js 18+.

```bash
npm install      # instala as dependências
npm run dev      # ambiente de desenvolvimento (abre em http://localhost:5173)
npm run build    # gera a versão de produção em /dist
npm run preview  # serve o build de produção localmente
```

Abra no celular (ou no modo responsivo do navegador, largura ~390px) para a
experiência pensada para mobile.

---

## Estrutura do projeto

```
src/
  components/
    Header.tsx          Cabeçalho premium com a marca le·lui e CTA "Reservar mesa"
    CategoryNav.tsx      Navegação horizontal sticky (scroll spy, uma categoria ativa)
    SearchBar.tsx        Busca por prato, bebida, vinho ou ingrediente
    MenuSection.tsx      Renderiza uma categoria do cardápio
    MenuItemCard.tsx     Card de item: nome, descrição, preço, tags
    HighlightSection.tsx Destaques da Casa (fundo escuro)
    WineSection.tsx      Carta de vinhos com filtros (tipo/país) e corpo em taças
    Footer.tsx           Informações da casa + CTAs discretos
  data/
    menuData.ts          FONTE ÚNICA DE DADOS (edite só aqui)
  types/
    menu.ts              Tipos TypeScript dos dados
  App.tsx                Orquestra busca, scroll spy e seções
  main.tsx
  index.css
```

---

## Onde alterar pratos, descrições e valores

**Tudo está em `src/data/menuData.ts`.** Nada de prato/preço/descrição fica
escrito nos componentes. Para mudar o cardápio, edite apenas esse arquivo.

- **Pratos e bebidas:** array `menu` (cada categoria tem `title` e `items`).
- **Preços:** sempre como string, exatamente como impresso — ex.: `'R$ 92'`,
  `'R$ 26,80'`, `'+ R$10,90'`. Não arredonde, não tire centavos, não troque
  vírgula por ponto.
- **Categoria com preço único:** use `flatPrice` (ex.: Autorais `'R$40'`).
- **Destaques da Casa:** array `highlightIds` (basta listar os `id` dos itens).
- **Carta de vinhos:** array `wines` + as seções `wineByGlass`,
  `wineHalfBottle`, `wineDigestifs` e `wineSeasonalSelection`.
  - `body`: 1 a 4 (corpo do vinho, exibido em taças).
  - `bodyPlus: true`: mostra o "+" ao lado das taças.
  - `cannon: true`: selo do canhão (vinho extraordinário).
- **Informações da casa, horários e contato:** objeto `houseInfo`.
- **Navegação:** array `navGroups` (rótulos e quais categorias cada link aponta).

---

## Itens marcados para CONFERIR

Nenhum nome, descrição ou preço ficou ilegível a ponto de virar `"CONFERIR"`.

Há **um ponto de atenção** em `aperitivos-destilados` (página de destilados do
impresso): os whiskies **Bourbon / Tennessee / Irish** têm o preço impresso em
alinhamento ambíguo (o valor aparece na linha do subtítulo, provavelmente
pertencendo ao item seguinte). A interpretação aplicada está marcada com a
observação *"Conferir preço (alinhamento do impresso ambíguo)."* nos itens:
Jim Beam White, Bulleit, Maker's Mark, Wild Turkey 101, Jack Daniel's,
Gentleman Jack e Jameson. Recomenda-se conferir esses valores com a casa.

Observação: a `wineSeasonalSelection` está rotulada como seleção sazonal
(impressa para uma data específica) e foi mantida por fidelidade — pode ser
editada ou removida conforme a temporada.

---

## Melhorias futuras recomendadas

1. **CMS / painel de edição** para a equipe da casa atualizar pratos e preços
   sem mexer no código (hoje a edição é direta em `menuData.ts`).
2. **Imagens dos pratos** nos destaques e nas categorias principais, mantendo a
   estética editorial (fotografia escura, fundo neutro).
3. **Integração real dos CTAs:** link de reserva (telefone/sistema de reservas),
   Google Maps com o pin exato e WhatsApp da casa em "Falar com a casa".
4. **Multilíngue (PT/EN)** para o público estrangeiro.
5. **Modo de acessibilidade** (contraste reforçado e ajuste de tamanho de fonte).
6. **Selo de filtros alimentares** (sem glúten, vegetariano) caso a casa queira
   sinalizar — exigindo dados novos no cardápio.
7. **Compartilhamento de itens** (link direto para um prato/vinho específico).
```
