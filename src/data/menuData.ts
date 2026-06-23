// =================================================================
//  menuData.ts — FONTE ÚNICA DE DADOS DO CARDÁPIO
//  Le Lui Bar e Cozinha
//
//  Todos os nomes, descrições e preços foram extraídos do cardápio
//  impresso (imagens enviadas). Para alterar um prato, descrição ou
//  valor, edite APENAS este arquivo. Nada está fixo nos componentes.
//
//  Regras de preço: sempre string, exatamente como impresso
//  (sem arredondar, sem remover centavos, vírgula preservada).
// =================================================================

import type {
  MenuCategory,
  NavGroup,
  Wine,
  WineServingOption,
} from '../types/menu'

// -----------------------------------------------------------------
//  INFORMAÇÕES DA CASA
// -----------------------------------------------------------------
export const houseInfo = {
  name: 'Le Lui',
  tagline: 'Bar e Cozinha',
  pitch: 'Cozinha contemporânea com influência portuguesa',
  address: 'R. Jacuna, 302 — Carandiru, São Paulo — SP',
  phone: '(11) 2251-1531',
  hours: [
    { days: 'Domingo e Segunda', time: '11h às 15h30' },
    { days: 'Terça a Sábado', time: '11h às 00h' },
  ],
  instagram: 'lelui_barcozinha',
  facebook: 'Lelui Bar e Cozinha',
  site: 'https://lelui.com.br/',
}

// -----------------------------------------------------------------
//  DESTAQUES DA CASA  (ids de itens reais marcados como destaque)
// -----------------------------------------------------------------
export const highlightIds: string[] = [
  'bacalhau-lelui',
  'polvo-lelui',
  'arroz-do-mar',
  'peixe-no-tucupi',
  'bacalhau-beira-alta',
  'salmao-santorini',
]

// -----------------------------------------------------------------
//  CARDÁPIO — COMIDA, BEBIDAS E COQUETÉIS
// -----------------------------------------------------------------
export const menu: MenuCategory[] = [
  {
    id: 'entradas',
    title: 'Entradas',
    items: [
      {
        id: 'pan-tomaca',
        name: 'Pan Tomaca - Couvert',
        description:
          'Pão de fermentação natural, pão sírio e manteiga de tomate assado com ervas',
        price: 'R$ 30',
        tags: ['NEW'],
      },
      {
        id: 'tostadas-brie',
        name: 'Tostadas e Brie',
        description:
          'Pão italiano tostado, queijo Brie ao forno, melaço cítrico, crispy de Parma e Nozes caramelizadas',
        price: 'R$ 89',
      },
      {
        id: 'alheira-portuguesa',
        name: 'Alheira Portuguesa',
        description:
          'Clássico embutido português em crosta dourada servido com creme de espinafre',
        price: 'R$ 37',
      },
      {
        id: 'croquetta-creme',
        name: 'Croquetta Creme (4 unidades)',
        description:
          'Croquetta cremosa de Presunto de Parma ao molho de morango e pimenta Gojuchang',
        price: 'R$ 42',
      },
      {
        id: 'bruschetta-classica',
        name: 'Bruschetta Clássica (3 unid.)',
        description:
          'Fatia de pão italiano tostado, tomate concassé e um toque de molho pesto',
        price: 'R$ 35',
      },
      {
        id: 'bruschetta-polvo',
        name: 'Bruschetta de Polvo (3 unid.)',
        description:
          'Fatia de pão italiano tostado, vinagrete de Polvo com um toque de aioli',
        price: 'R$ 49',
      },
      {
        id: 'bolinhos-bacalhau',
        name: 'Bolinhos de Bacalhau (6 unidades)',
        price: 'R$ 45',
      },
      {
        id: 'ceviche-camarao',
        name: 'Ceviche Quente de Camarão',
        description:
          'Salsa acervichada de Aji Amarilho, Camarão rosa salteado, croutons de broa, picles de rabanete e brotos fresco',
        price: 'R$ 78',
        tags: ['NEW'],
      },
    ],
  },

  {
    id: 'saladas',
    title: 'Saladas',
    items: [
      {
        id: 'salada-verde',
        name: 'Salada Verde ao Creme Balsâmico',
        price: 'R$ 28',
      },
      {
        id: 'salada-caprese',
        name: 'Salada Caprese à Lelui',
        description:
          'Tomate concassé, mussarela de búfala, rúcula, alface, amêndoas laminadas e molho Pesto',
        price: 'R$ 38',
      },
    ],
  },

  {
    id: 'carnes',
    title: 'Carnes',
    items: [
      {
        id: 'porco-caramelo',
        name: 'Porco Caramelo',
        description:
          'Mignon suíno, purê de couve-flor caramelizado, crispy de couve, picles de maxixe, farofa de broa e molho demi glace',
        price: 'R$ 82',
        tags: ['NEW'],
      },
      {
        id: 'file-parmegiana',
        name: 'Filé Mignon à Parmegiana',
        description: 'com arroz e batata frita',
        price: 'R$ 82',
      },
      {
        id: 'envelope-mignon-2',
        name: 'Envelope de Mignon 2.0',
        description:
          'recheado com gorgonzola ao molho de cogumelos, acompanhado de risotto de cebola caramelizada',
        price: 'R$ 89',
      },
      {
        id: 'grana-mignon',
        name: 'Grana Mignon',
        description:
          'Medalhão de mignon ao molho Roti com risotto Grana Padano e picles de cebola roxa',
        price: 'R$ 98',
      },
      {
        id: 'bife-ancho-boscaiola',
        name: 'Bife Ancho à Boscaiola',
        description:
          'Filé Angus ao Roti acompanhado de Fettuccine com cogumelos salteados',
        price: 'R$122',
      },
      {
        id: 'ancho-provoleta',
        name: 'Ancho à Provoleta',
        description:
          'Bife Ancho acompanhado de Gnocchi em fonduta de provolone, crocante de castanha de caju, tomate confit e finalizado com chimichurri',
        price: 'R$132',
      },
    ],
  },

  {
    id: 'frutos-do-mar',
    title: 'Frutos do Mar',
    items: [
      {
        id: 'peixe-no-tucupi',
        name: 'Peixe no Tucupi',
        description:
          'Peixe branco, Beurre Blanc de tucupi, azeite de nirá, ervilha torta, mini cenoura e pétalas de cebola baby',
        price: 'R$ 92',
        tags: ['NEW'],
      },
      {
        id: 'pescada-baiana',
        name: 'Pescada Baiana',
        description:
          'Pescada Amarela, mousseline de Bobó, farofa crocante com Coco queimado, banana da terra e azeite de coentro',
        price: 'R$ 89',
      },
      {
        id: 'bacalhau-beira-alta',
        name: 'Bacalhau à Beira Alta',
        description:
          'Camadas intercaladas de batata rosti e Bacalhau cremoso, ovos cozidos, pimentões e tomates assados, finalizado com tapenade de azeitona preta e alho frito',
        price: 'R$122',
      },
      {
        id: 'salmao-santorini',
        name: 'Salmão Santorini',
        description:
          'Salmão grelhado, molho de iogurte, abobrinha confitada, brócolis ramoso, tomate confitado',
        price: 'R$ 92',
        tags: ['NEW'],
      },
      {
        id: 'arroz-do-mar',
        name: 'Arroz do Mar',
        description:
          'Arroz caldoso de Polvo, Mexilhões e anéis de Lula com redução de Tucupi, finalizado com Nori tostado',
        price: 'R$126',
      },
      {
        id: 'bacalhau-lelui',
        name: 'Bacalhau à LeLui',
        description:
          'Lombo Premium de Bacalhau do Porto dourada no forno servida com batatas assadas, brócolis, cebola salteada, azeitonas e finalizado com alho frito',
        price: 'R$158',
      },
      {
        id: 'polvo-lelui',
        name: 'Polvo à LeLui',
        description:
          'Tentáculos premium de polvo salteados no alho e azeite, servido com terrine de batatinhas e ervas, brócolis e azeitona',
        price: 'R$162',
      },
    ],
  },

  {
    id: 'massas-risottos',
    title: 'Massas e Risottos',
    items: [
      {
        id: 'fettuccine-necco',
        name: 'Fettuccine Necco',
        description:
          'Fettuccine artesanal gratinado ao molho branco com camarões flambados na cachaça',
        price: 'R$ 96',
      },
      {
        id: 'fettuccine-mediterraneo',
        name: 'Fettuccine Mediterrâneo',
        description:
          'Fettuccine com Camarões, Lula e Mexilhões ao Molho Romesco, a base de tomates, pimentão e amêndoas',
        price: 'R$112',
      },
      {
        id: 'risotto-al-mare',
        name: 'Risotto Al Mare',
        description: 'Risotto de Frutos do Mar e anéis de Lula',
        price: 'R$112',
      },
      {
        id: 'gnocchi-veggie',
        name: 'Gnocchi Veggie',
        description:
          'Gnocchi dorati com fonduta de gorgonzola, espinafre salteado, nozes glaceadas e mel com infusão de alho e ervas de provence',
        price: 'R$ 78',
      },
      {
        id: 'risotto-boscaiola',
        name: 'Risotto Boscaiola',
        description: 'Mix de cogumelos',
        price: 'R$ 76',
      },
    ],
  },

  {
    id: 'executivo',
    title: 'Executivo',
    description: 'Servido apenas no almoço de segunda a sexta',
    note: 'Escolha uma proteína e o acompanhamento',
    items: [
      { id: 'exec-filezinho-frango', name: 'Filézinho de Frango', price: 'R$ 62' },
      { id: 'exec-meio-galeto', name: '1/2 Galeto', price: 'R$ 66' },
      { id: 'exec-st-peter', name: 'St Peter', price: 'R$ 62' },
      {
        id: 'exec-file-parmegiana',
        name: 'Filé Mignon à Parmegiana',
        price: 'R$ 78',
      },
      {
        id: 'exec-envelope-mignon',
        name: 'Envelope de Mignon',
        description: 'recheado com gorgonzola ao molho de cogumelos',
        price: 'R$ 86',
      },
      { id: 'exec-bife-ancho', name: 'Bife Ancho', price: 'R$ 106' },
      { id: 'exec-file-mignon', name: 'Filé Mignon', price: 'R$ 92' },
      { id: 'exec-salmao-grelhado', name: 'Salmão Grelhado', price: 'R$ 86' },
    ],
  },

  {
    id: 'acompanhamentos',
    title: 'Acompanhamentos',
    items: [
      { id: 'ac-salada', name: 'Salada', description: 'Arroz e Salada' },
      { id: 'ac-light', name: 'Light', description: 'Purê de Mandioquinha e Legumes' },
      { id: 'ac-jardineira', name: 'À Jardineira', description: 'Arroz e Legumes' },
      { id: 'ac-paulista', name: 'À Paulista', description: 'Arroz e Feijão' },
      { id: 'ac-carioca', name: 'À Carioca', description: 'Arroz e Fritas' },
      { id: 'ac-brasileira', name: 'À Brasileira', description: 'Arroz e Farofa' },
      { id: 'ac-gaucha', name: 'À Gaúcha', description: 'Vinagrete e Farofa' },
      { id: 'ac-mineira', name: 'À Mineira', description: 'Purê de Mandioquinha e Farofa' },
      { id: 'ac-grega', name: 'À Grega', description: 'Arroz à grega e Purê de Batata' },
      {
        id: 'ac-italiana',
        name: 'À Italiana',
        description: 'Fettuccine com molho (Pomodoro ou Branco)',
      },
      { id: 'ac-fettuccine-alfredo', name: 'Fettuccine Alfredo' },
      {
        id: 'ac-gnocchi',
        name: 'Gnocchi ao molho (Pomodoro ou Branco)',
        price: '+ R$10,90',
      },
    ],
  },

  {
    id: 'sobremesas',
    title: 'Sobremesas',
    items: [
      {
        id: 'shot-brigadeiro-cocada',
        name: 'Shot de Brigadeiro ou Cocada',
        price: 'R$ 7,00',
      },
      {
        id: 'brownie-lelui',
        name: 'Brownie do Lelui',
        description: 'com sorvete de creme e calda de chocolate',
        price: 'R$ 26,80',
      },
      {
        id: 'tropicalissima',
        name: 'Tropicalíssima',
        description:
          'Geleia de manga com maracujá, feuilletine, Gelato de Coco Dezato e azeite de baunilha',
        price: 'R$ 34,00',
      },
      {
        id: 'amazonia-noir',
        name: 'Amazonia Noir',
        description:
          'Creme (Curd) de cupuaçu, torta búlgara de chocolate 50%, castanha de caju caramelizada com laranja e cardamomo e broto de amaranto',
        price: 'R$ 38,00',
      },
      { id: 'pudim-leite', name: 'Pudim de Leite', price: 'R$ 23,80' },
      {
        id: 'brigadeiro-colher',
        name: 'Brigadeiro de colher',
        description: 'com pedaços de morango e farofa doce',
        price: 'R$ 35,00',
      },
      { id: 'creme-brulee', name: 'Crème Brulée', price: 'R$ 42,00' },
    ],
  },

  {
    id: 'bebidas',
    title: 'Bebidas',
    items: [
      { id: 'agua', name: 'Água (com e sem gás)', price: 'R$ 8,70' },
      { id: 'suco-laranja', name: 'Suco de Laranja', price: 'R$ 12,90' },
      {
        id: 'sucos-naturais',
        name: 'Sucos Naturais',
        description: '(Abacaxi, Limão, Maracujá)',
        price: 'R$ 15,90',
      },
      { id: 'refrigerantes', name: 'Refrigerantes', price: 'R$ 9,40' },
      { id: 'agua-coco', name: 'Água de Coco', price: 'R$ 16,00' },
      { id: 'cha-gelado', name: 'Chá Gelado da Casa', price: 'R$ 18,90' },
      { id: 'cerveja-longneck', name: 'Cerveja LongNeck', price: 'R$ 16,50' },
      { id: 'heineken', name: 'Heineken 600mL', price: 'R$ 23,90' },
      { id: 'original', name: 'Original 600mL', price: 'R$ 20,90' },
      {
        id: 'cerveja-artesanal',
        name: 'Cerveja Artesanal 600mL',
        price: 'R$ 35,90',
      },
      { id: 'nespresso', name: 'Nespresso', price: 'R$ 8,40' },
    ],
  },

  {
    id: 'zero-alcool',
    title: '0% Álcool',
    flatPrice: 'R$21',
    items: [
      {
        id: 'virgin-mojito',
        name: 'Virgin Mojito',
        description: 'Hortelã, Limão, Soda',
        tags: ['Carbonatado', 'Refrescante', 'Herbal'],
      },
      {
        id: 'suco-tomate-temperado',
        name: 'Suco de Tomate Temperado',
        description: 'Suco de Tomate, Nosso Mix de Temperos Especiais, Limão',
        tags: ['Salgado', 'Apimentado'],
      },
      {
        id: 'virgin-berry',
        name: 'Virgin Berry',
        description:
          'Frutas Vermelhas, Limão, Xarope de Limão Siciliano Artesanal, Soda',
        tags: ['Doce', 'Cítrico'],
      },
      {
        id: 'soda-morango',
        name: 'Soda de Morango',
        description: 'Compota de Morango, Limão, Club Soda',
        tags: ['Carbonatado', 'Refrescante', 'Doce'],
        notes: 'Soda sem Álcool',
      },
      {
        id: 'soda-gengibre',
        name: 'Soda Gengibre',
        description: 'Xarope de Gengibre Artesanal, Limão, Bitter Aromático, Club Soda',
        tags: ['Carbonatado', 'Refrescante', 'Aromático'],
        notes: 'Soda sem Álcool',
      },
      {
        id: 'soda-capim-limao',
        name: 'Soda de Capim Limão',
        description: 'Limão, Capim Limão, Club Soda',
        tags: ['Cítrico', 'Herbal'],
        notes: 'Soda sem Álcool',
      },
      {
        id: 'soda-pink-lemonade',
        name: 'Soda Pink Lemonade',
        description: 'Limão, Grenadine, Club Soda',
        tags: ['Cítrico', 'Levemente Doce'],
        notes: 'Soda sem Álcool',
      },
      {
        id: 'cajuina',
        name: 'Cajuína',
        description: 'Compota de Caju, Limão, Suco de Caju e Club Soda',
        tags: ['Doce', 'Refrescante'],
        notes: 'Soda sem Álcool',
      },
    ],
  },

  {
    id: 'regua-degustacao',
    title: 'Régua de Degustação',
    description: 'Cocktails',
    flatPrice: 'R$45',
    items: [
      {
        id: 'trio-collins',
        name: 'Trio Collins',
        description: 'Tom Collins, Dirty Collins, Berry Collins',
        tags: ['Cítrico', 'Salgado', 'Frutado'],
      },
      {
        id: 'trio-encorpado',
        name: 'Trio Encorpado',
        description: 'Martinez, Boulevardier, San Paolo',
      },
    ],
  },

  {
    id: 'caipirinhas',
    title: 'Caipirinhas',
    note: 'Cachaça | Sake | Smirnoff — R$ 36   ·   Absolut — R$ 40   ·   Grey Goose — R$ 48',
    items: [
      { id: 'caip-limao-taiti', name: 'Limão Taiti' },
      { id: 'caip-tres-limoes', name: 'Três Limões com Mel' },
      { id: 'caip-maracuja', name: 'Maracujá com Pimenta Rosa' },
      { id: 'caip-frutas-vermelhas', name: 'Frutas Vermelhas' },
      { id: 'caip-abacaxi', name: 'Abacaxi, Hortelã e Gengibre' },
    ],
  },

  {
    id: 'gin-tonica',
    title: 'Gin Tônica',
    flatPrice: 'R$40',
    items: [
      {
        id: 'gt-tea-tonic-frutas',
        name: 'Tea Tonic Frutas Vermelhas',
        description:
          'Gin Bombay infusionado a frio em Chá de Futas Silvesres, Tônica e Limão Siciliano',
        tags: ['Aromático', 'Carbonatado', 'Levemente doce'],
      },
      {
        id: 'gt-tea-tonic-spicy',
        name: 'Tea Tonic Spicy',
        description:
          'Gin Monkey 47 infusionado a frio em Chá Earl Grey, Tônica, Laranja e Bitter de Laranja',
        price: 'R$65',
        tags: ['Aromático', 'Carbonatado', 'Levemente doce'],
      },
      {
        id: 'gt-bombay',
        name: 'Bombay',
        description: 'Casca de Limão Taiti, Cardamomo',
        tags: ['Cítrico e Aromático'],
      },
      {
        id: 'gt-tanqueray',
        name: 'Tanqueray',
        description: 'Casca de limão Siciliano, Zimbro',
        tags: ['Cítrico e Aromático'],
      },
      {
        id: 'gt-hendricks',
        name: 'Hendricks',
        description: 'Espiral de Pepino',
        price: 'R$45',
        tags: ['Refrescante'],
      },
      {
        id: 'gt-bulldog',
        name: 'Bulldog',
        description: 'Casca de Limão Taiti, Limão Siciliano e Laranja',
        tags: ['Cítrico'],
      },
      {
        id: 'gt-monkey-47',
        name: 'Monkey 47',
        description: 'Casca de Laranja',
        price: 'R$60',
        tags: ['Especiarias', 'Aromático'],
      },
    ],
  },

  {
    id: 'classicos',
    title: 'Clássicos',
    flatPrice: 'R$40',
    note: '*Caso deseje outro Clássico, por favor, pergunte aos nossos atendentes',
    items: [
      {
        id: 'cl-negroni',
        name: 'Negroni',
        description: 'Gin, Campari, Vermute e Laranja',
        tags: ['Amargo', 'Levemente doce'],
      },
      {
        id: 'cl-dry-martini',
        name: 'Dry Martini',
        description: 'Gin, Vermute seco e Azeitona',
        tags: ['Potente', 'Seco'],
      },
      {
        id: 'cl-fitzgerald',
        name: 'Fitzgerald',
        description: 'Gin, Limão Siciliano e Bitter Aromático',
        tags: ['Leve', 'Aromático', 'Especiarias'],
      },
      {
        id: 'cl-caju-amigo',
        name: 'Caju Amigo',
        description: 'Cachaça ou Vodka, Compota de Caju, Suco de Caju, Limão',
        tags: ['Doce', 'Refrescante'],
      },
      {
        id: 'cl-penicillin',
        name: 'Penicillin',
        description: 'Black Label, Gengibre, Mel, Siciliano e Perfume de Talisker',
        tags: ['Defumado'],
      },
      {
        id: 'cl-bloody-mary',
        name: 'Bloody Mary',
        description: 'Vodka, Suco de Tomate, Mix de Temperos e Limão',
        tags: ['Apimentado'],
      },
      {
        id: 'cl-aperol-spritz',
        name: 'Aperol Spritz',
        description: 'Aperol, Água com gás e Espumante Brut',
        tags: ['Refrescante'],
      },
      {
        id: 'cl-whisky-sour',
        name: 'Whisky Sour',
        description: 'Bourbon, Limão Siciliano, Bitters e Clara de Ovo',
        tags: ['Cítrico'],
      },
      {
        id: 'cl-corpse-reviver',
        name: 'Corpse Reviver',
        description: 'Gin, Cointreau, Vermute Bianco, Siciliano e Perfume de Absinto',
        tags: ['Floral'],
      },
      {
        id: 'cl-margarita',
        name: 'Margarita',
        description: 'Tequila, Cointreau, Siciliano e Borda de Sal',
        tags: ['Cítrico'],
      },
      {
        id: 'cl-carajillo-43',
        name: 'Carajillo 43',
        description: 'Espresso e Licor 43',
        tags: ['Doce', 'Notas de Baunilha'],
      },
    ],
  },

  {
    id: 'autorais',
    title: 'Autorais',
    flatPrice: 'R$40',
    items: [
      {
        id: 'au-berry-collins',
        name: 'Berry Collins',
        description:
          'Gin, Frutas Vermelhas, Licor 43, Limão Siciliano e Água com Gás. Leve e frutado, com toque de baunilha e levemente gaseificado.',
      },
      {
        id: 'au-caju-collins',
        name: 'Caju Collins',
        description:
          'Gin, Compota de Caju, Suco de Caju, Limão e Água com Gás. Para apreciadores do Caju, levemente gaseificado, feito com compota artesanal infusionada com especiarias.',
      },
      {
        id: 'au-pera-por-favor',
        name: 'Pera, por favor',
        description:
          'Vodka com infusão de Pêra, Limão Siciliano, Uvas Verdes, Pepino e Pera Desidratada. Um coquetel com leveza e refrescância para começar os trabalhos. Cítrico e docinho na medida, uma explosão de sabores verdes.',
      },
      {
        id: 'au-rosa',
        name: 'Rosa',
        description:
          'Cachaça com infusão de Canela, Campari, Limão Taiti e Xarope de Pimenta Rosa e Cravo. Cítrico e aromático, com um leve amargor do Campari. A canela, o cravo e a pimenta rosa trazem notas de especiarias. Para beber 1 ou 10.',
      },
      {
        id: 'au-peach-spritz',
        name: 'Peach Spritz',
        description:
          'Peach Tree, Limão Siciliano e Espumante Brut. Uma revisita ao clássico Aperol Spritz, com notas de pêssego, de começo doce e final seco.',
      },
      {
        id: 'au-sweet-dreams',
        name: 'Sweet Dreams',
        description:
          'Rum com Infusão de Chocolate Branco, Morango, Licor de Avelãs, Licor de Amêndoas, Limão, Clarificado em Leite. Da alquimia da coquetelaria, usamos uma técnica avançada de clarificação em leite. Leve, aveludado e frutado.',
      },
      {
        id: 'au-old-cinema',
        name: 'Old Cinema',
        description:
          'Jack Daniels, Vinho Branco Chardonnay, Xarope de Pipoca, Bitter de Laranja. Uma celebração ao milho! Whisky americano feito de milho, com xarope de pipoca amanteigada. Um toque de vinho branco Chardonnay arredonda essa loucura.',
      },
      {
        id: 'au-torta-maca',
        name: 'Torta de Maçã',
        description:
          'Cachaça Amburana + Manteiga Noisette, Chá de Maçã, Limão Siciliano, Canela e Tônica. Através da técnica Fatwash, extrai-se propriedades aromáticas e gustativas (Amêndoas) da infusão de Cachaça em Manteiga Noisette. Fique tranquilo, seu coquetel não terá gordura, pois a mesma é separada por completo durante o processo. Uma experiência sensorial complexa e refrescante.',
      },
      {
        id: 'au-caffe-boulevard',
        name: 'Caffè Boulevard',
        description:
          'Bourbon com infusão de Baunilha, Campari, Vermute Tinto, Licor de Café, Perfume de Coco. Amargo e Intenso. Coquetel complexo com toques aromáticos, você irá sertir-se em uma cafeteria italiana.',
      },
    ],
  },

  {
    id: 'aperitivos-destilados',
    title: 'Aperitivos e Destilados',
    note: 'Valores por dose.',
    items: [
      // GIN
      { id: 'gin-hendricks', name: "Hendrick's", price: 'R$ 32,00', tags: ['Gin'] },
      { id: 'gin-gordons', name: "Gordon's", price: 'R$ 20,00', tags: ['Gin'] },
      { id: 'gin-bombay', name: 'Bombay Sapphire', price: 'R$ 25,00', tags: ['Gin'] },
      { id: 'gin-tanqueray', name: 'Tanqueray', price: 'R$ 25,00', tags: ['Gin'] },
      { id: 'gin-tanqueray-ten', name: 'Tanqueray Ten', price: 'R$ 32,00', tags: ['Gin'] },
      { id: 'gin-martin-millers', name: "Martin Miller's", price: 'R$ 39,00', tags: ['Gin'] },
      { id: 'gin-bulldog', name: 'Bulldog', price: 'R$ 25,00', tags: ['Gin'] },
      // VODKA
      { id: 'vod-smirnoff', name: 'Smirnoff', price: 'R$ 19,00', tags: ['Vodka'] },
      { id: 'vod-absolut', name: 'Absolut', price: 'R$ 25,00', tags: ['Vodka'] },
      { id: 'vod-grey-goose', name: 'Grey Goose', price: 'R$ 35,00', tags: ['Vodka'] },
      // TEQUILA
      { id: 'teq-jimador-blanco', name: 'El Jimador Blanco', price: 'R$ 25,00', tags: ['Tequila'] },
      { id: 'teq-jimador-reposado', name: 'El Jimador Reposado', price: 'R$ 25,00', tags: ['Tequila'] },
      { id: 'teq-patron-anejo', name: 'Patrón Añejo', price: 'R$ 59,00', tags: ['Tequila'] },
      // RUM
      { id: 'rum-havana-3', name: 'Havana Club 3 Anos', price: 'R$ 21,00', tags: ['Rum'] },
      { id: 'rum-kraken', name: 'Kraken Black Spiced', price: 'R$ 25,00', tags: ['Rum'] },
      { id: 'rum-bacardi-blanca', name: 'Bacardi Carta Blanca', price: 'R$ 19,00', tags: ['Rum'] },
      { id: 'rum-bacardi-ouro', name: 'Bacardi Carta Ouro', price: 'R$ 19,00', tags: ['Rum'] },
      { id: 'rum-malibu', name: 'Malibu', price: 'R$ 9,50', tags: ['Rum'] },
      // COGNAC
      { id: 'cog-courvoisier', name: 'Courvoisier VSOP', price: 'R$ 55,00', tags: ['Cognac'] },
      { id: 'cog-fundador', name: 'Fundador (Brandy)', price: 'R$ 19,50', tags: ['Cognac'] },
      // WHISKY — Scotch
      { id: 'wh-jw-red', name: 'J.W. Red Label', price: 'R$ 21,00', tags: ['Whisky', 'Scotch'] },
      { id: 'wh-jw-black', name: 'J.W. Black Label', price: 'R$ 31,00', tags: ['Whisky', 'Scotch'] },
      { id: 'wh-chivas-12', name: 'Chivas Regal 12', price: 'R$ 31,00', tags: ['Whisky', 'Scotch'] },
      { id: 'wh-macallan-12', name: 'Macallan 12 Single Malt', price: 'R$100,00', tags: ['Whisky', 'Scotch'] },
      { id: 'wh-glenlivet', name: "Glenlivet Founder's Reserve", price: 'R$ 55,00', tags: ['Whisky', 'Scotch'] },
      { id: 'wh-glenfiddich-15', name: 'Glenffidich Solera 15', price: 'R$ 70,00', tags: ['Whisky', 'Scotch'] },
      // WHISKY — Bourbon (preços conforme alinhamento provável do impresso — conferir)
      { id: 'wh-jim-beam', name: 'Jim Beam White', price: 'R$ 21,00', tags: ['Whisky', 'Bourbon'], notes: 'Conferir preço (alinhamento do impresso ambíguo).' },
      { id: 'wh-bulleit', name: 'Bulleit', price: 'R$ 31,00', tags: ['Whisky', 'Bourbon'], notes: 'Conferir preço (alinhamento do impresso ambíguo).' },
      { id: 'wh-makers-mark', name: 'Makers Mark', price: 'R$ 34,00', tags: ['Whisky', 'Bourbon'], notes: 'Conferir preço (alinhamento do impresso ambíguo).' },
      { id: 'wh-wild-turkey', name: 'Wild Turkey 101', price: 'R$ 39,00', tags: ['Whisky', 'Bourbon'], notes: 'Conferir preço (alinhamento do impresso ambíguo).' },
      // WHISKY — Tennessee
      { id: 'wh-jack-daniels', name: "Jack Daniel's", price: 'R$ 32,00', tags: ['Whisky', 'Tenessee'], notes: 'Conferir preço (alinhamento do impresso ambíguo).' },
      { id: 'wh-gentleman-jack', name: 'Gentleman Jack', price: 'R$ 41,00', tags: ['Whisky', 'Tenessee'], notes: 'Conferir preço (alinhamento do impresso ambíguo).' },
      // WHISKY — Irish
      { id: 'wh-jameson', name: 'Jameson', price: 'R$ 21,00', tags: ['Whisky', 'Irish'], notes: 'Conferir preço (alinhamento do impresso ambíguo).' },
      // CACHAÇA
      { id: 'ca-weber-amburana', name: 'Weber Haus Amburana', price: 'R$ 20,00', tags: ['Cachaça'] },
      { id: 'ca-weber-7-madeiras', name: 'Weber 7 Madeiras', price: 'R$ 25,00', tags: ['Cachaça'] },
      { id: 'ca-serra-almas', name: 'Serra das Almas Branca', price: 'R$ 15,00', tags: ['Cachaça'] },
      { id: 'ca-salinas', name: 'Salinas Tradicional', price: 'R$ 15,00', tags: ['Cachaça'] },
      { id: 'ca-nega-fulo', name: 'Nega Fulô Carvalho', price: 'R$ 20,00', tags: ['Cachaça'] },
      { id: 'ca-germana', name: 'Germana', price: 'R$ 20,00', tags: ['Cachaça'] },
      { id: 'ca-sebastiana', name: 'Sebastiana Carvalho', price: 'R$ 20,00', tags: ['Cachaça'] },
      { id: 'ca-jos-jambu', name: 'Jos (Jambu)', price: 'R$ 15,00', tags: ['Cachaça'] },
      // SAKE
      { id: 'sake-thikara', name: 'Thikará', price: 'R$ 15,00', tags: ['Sake'] },
      // PISCO
      { id: 'pisco-capel', name: 'Capel', price: 'R$ 17,50', tags: ['Pisco'] },
      // STEINHAEGER
      { id: 'stein-becosa', name: 'Becosa', price: 'R$ 15,00', tags: ['Steinhaeger'] },
      // APERITIVOS E LICORES
      { id: 'lic-amaretto', name: 'Amaretto del Orso', price: 'R$ 14,00', tags: ['Aperitivos e Licores'] },
      { id: 'lic-amaro-lucano', name: 'Amaro Lucano', price: 'R$ 24,00', tags: ['Aperitivos e Licores'] },
      { id: 'lic-amarula', name: 'Amarula', price: 'R$ 25,00', tags: ['Aperitivos e Licores'] },
      { id: 'lic-aperol', name: 'Aperol', price: 'R$ 25,00', tags: ['Aperitivos e Licores'] },
      { id: 'lic-baileys', name: 'Baileys', price: 'R$ 25,00', tags: ['Aperitivos e Licores'] },
      { id: 'lic-campari', name: 'Campari', price: 'R$ 19,00', tags: ['Aperitivos e Licores'] },
      { id: 'lic-carpano', name: 'Carpano Classico', price: 'R$ 21,50', tags: ['Aperitivos e Licores'] },
      { id: 'lic-chambord', name: 'Chambord', price: 'R$ 32,60', tags: ['Aperitivos e Licores'] },
      { id: 'lic-cointreau', name: 'Cointreau', price: 'R$ 19,50', tags: ['Aperitivos e Licores'] },
      { id: 'lic-cynar', name: 'Cynar', price: 'R$ 15,00', tags: ['Aperitivos e Licores'] },
      { id: 'lic-cynar-70', name: 'Cynar 70', price: 'R$ 25,00', tags: ['Aperitivos e Licores'] },
      { id: 'lic-fernet', name: 'Fernet Branca', price: 'R$ 24,00', tags: ['Aperitivos e Licores'] },
      { id: 'lic-frangelico', name: 'Frangelico', price: 'R$ 22,00', tags: ['Aperitivos e Licores'] },
      { id: 'lic-licor-43', name: 'Licor 43', price: 'R$ 25,00', tags: ['Aperitivos e Licores'] },
      { id: 'lic-lillet', name: 'Lillet Blanc', price: 'R$ 16,50', tags: ['Aperitivos e Licores'] },
      { id: 'lic-limoncello', name: 'Limoncello Lucano', price: 'R$ 19,50', tags: ['Aperitivos e Licores'] },
      { id: 'lic-mandarinetto', name: 'Mandarinetto', price: 'R$ 20,00', tags: ['Aperitivos e Licores'] },
      { id: 'lic-martini-bianco', name: 'Martini Bianco', price: 'R$ 20,00', tags: ['Aperitivos e Licores'] },
      { id: 'lic-martini-rosso', name: 'Martini Rosso', price: 'R$ 20,00', tags: ['Aperitivos e Licores'] },
      { id: 'lic-sambuca', name: 'Sambuca Molinari', price: 'R$ 25,00', tags: ['Aperitivos e Licores'] },
      { id: 'lic-noilly-pratt', name: 'Noilly Pratt', price: 'R$ 19,50', tags: ['Aperitivos e Licores'] },
      { id: 'lic-patron-cafe', name: 'Patrón Café XO', price: 'R$ 25,00', tags: ['Aperitivos e Licores'] },
      { id: 'lic-punt-e-mes', name: 'Punt e Mes', price: 'R$ 19,50', tags: ['Aperitivos e Licores'] },
      { id: 'lic-st-germain', name: 'St Germain', price: 'R$ 25,00', tags: ['Aperitivos e Licores'] },
      { id: 'lic-strega', name: 'Strega', price: 'R$ 27,50', tags: ['Aperitivos e Licores'] },
      { id: 'lic-tia-maria', name: 'Tia Maria', price: 'R$ 25,80', tags: ['Aperitivos e Licores'] },
      { id: 'lic-vermute-castilla', name: 'Vermute Fernando Castilla', price: 'R$ 19,50', tags: ['Aperitivos e Licores'] },
      // PORTO
      { id: 'porto-ramos-pinto', name: 'Adriano Ramos Pinto Tawny', price: 'R$ 23,00', tags: ['Porto'] },
      { id: 'porto-messias-ruby', name: 'Messias Ruby', price: 'R$ 18,50', tags: ['Porto'] },
    ],
  },
]

// IDs das categorias que pertencem ao universo "Bar / Coquetelaria"
export const barCategoryIds = [
  'bebidas',
  'zero-alcool',
  'regua-degustacao',
  'caipirinhas',
  'gin-tonica',
  'classicos',
  'autorais',
  'aperitivos-destilados',
]

// -----------------------------------------------------------------
//  GRUPOS DE NAVEGAÇÃO (barra sticky)
// -----------------------------------------------------------------
export const navGroups: NavGroup[] = [
  { id: 'destaques', label: 'Destaques', categoryIds: ['destaques'] },
  { id: 'entradas', label: 'Entradas', categoryIds: ['entradas'] },
  { id: 'saladas', label: 'Saladas', categoryIds: ['saladas'] },
  { id: 'carnes', label: 'Carnes', categoryIds: ['carnes'] },
  { id: 'frutos-do-mar', label: 'Frutos do Mar', categoryIds: ['frutos-do-mar'] },
  { id: 'massas-risottos', label: 'Massas e Risottos', categoryIds: ['massas-risottos'] },
  { id: 'executivo', label: 'Executivo', categoryIds: ['executivo', 'acompanhamentos'] },
  { id: 'sobremesas', label: 'Sobremesas', categoryIds: ['sobremesas'] },
  { id: 'bebidas', label: 'Bebidas', categoryIds: ['bebidas'] },
  { id: 'coquetelaria', label: 'Coquetelaria', categoryIds: ['zero-alcool', 'regua-degustacao', 'caipirinhas', 'gin-tonica', 'classicos', 'autorais'] },
  { id: 'destilados', label: 'Destilados', categoryIds: ['aperitivos-destilados'] },
  { id: 'vinhos', label: 'Carta de Vinhos', categoryIds: ['vinhos'] },
]

// =================================================================
//  CARTA DE VINHOS
// =================================================================

export const wineIntro = {
  title: 'Carta de Vinhos',
  paragraphs: [
    'Convidamos você a embarcar em uma experiência única pelo mundo do vinho, explorando rótulos consagrados e descobrindo preciosidades selecionadas com uma curadoria atenta e apaixonada.',
    'Para uma boa orientação, os vinhos estão organizados de acordo com seu corpo, em uma escala de uma a quatro taças, sendo uma taça para os mais leves e quatro para os mais encorpados. E, para os rótulos que alcançam o auge em intensidade e sofisticação, você encontrará o símbolo do canhão: nosso selo para vinhos extraordinários.',
    'Brinde conosco essa jornada de aromas, sabores e histórias. Saúde!',
  ],
}

export const wines: Wine[] = [
  // ---------------- BRANCOS ----------------
  { id: 'w-mar-de-morros', kind: 'branco', country: 'Brasil', name: 'Mar de Morros', grapes: 'Sauvignon Blanc', producer: 'Artesã | Mantiqueira', year: '2025', price: 'R$168', body: 1 },
  { id: 'w-pinot-grigio-venezie', kind: 'branco', country: 'Itália', name: 'Pinot Grigio Delle Venezie', grapes: 'Pinot Grigio', producer: 'Cantina di Soave | Veneto', year: '2021', price: 'R$189', body: 1 },
  { id: 'w-riesling-single', kind: 'branco', country: 'Brasil', name: 'Riesling Single Vineyard', grapes: 'Riesling', producer: 'Miolo | Campanha Gaúcha', year: '2022', price: 'R$138', body: 1 },
  { id: 'w-los-vascos-sb', kind: 'branco', country: 'Chile', name: 'Los Vascos Sauvignon Blanc', grapes: 'Sauvignon Blanc', producer: 'Viña Los Vascos | Aconcágua', year: '2023', price: 'R$179', body: 1 },
  { id: 'w-joseph-drouhin-chablis', kind: 'branco', country: 'França', name: 'Joseph Drouhin Chablis', grapes: 'Chardonnay', producer: 'Joseph Drouhin | Bourgogne', year: '2022', price: 'R$740', cannon: true },
  { id: 'w-orvietto-classico', kind: 'branco', country: 'Itália', name: 'Orvietto Clássico', grapes: 'Gerchetto, Trebbiano, Verdello', producer: 'Bonacchi | Umbria', year: '2023', price: 'R$148', body: 2 },
  { id: 'w-pizzato-semillon', kind: 'branco', country: 'Brasil', name: 'Pizzato Semillon', grapes: 'Semillon', producer: 'Pizzato | Bento Gonçalves', year: '2024', price: 'R$248', body: 1 },
  { id: 'w-camaleao-alvarinho', kind: 'branco', country: 'Portugal', name: 'Camaleão Alvarinho', grapes: 'Alvarinho', producer: 'Vinho Verde', year: '2022', price: 'R$218', body: 2 },
  { id: 'w-portada-dfj', kind: 'branco', country: 'Portugal', name: 'Portada – Lote DFJ', producer: 'DFJ | Lisboa', year: '2024', price: 'R$138', body: 2 },
  { id: 'w-alamos-chardonnay', kind: 'branco', country: 'Argentina', name: 'Alamos Chardonnay', grapes: 'Chardonnay', producer: 'Catena Zapata | Mendoza', year: '2023', price: 'R$189', body: 2 },
  { id: 'w-altano-naturalmente', kind: 'branco', country: 'Portugal', name: 'Altano Naturalmente', grapes: 'Malvasia Fina, Viosinho, Moscatel Galego Branco, Arinto', producer: 'Altano | Douro', year: '2023', price: 'R$180', body: 2 },
  { id: 'w-unshackled-chardonnay', kind: 'branco', country: 'Estados Unidos', name: 'Unshackled Chardonnay', grapes: 'Chardonnay, Albariño, Malvasia', producer: 'The Prisoner | California', year: '2021', price: 'R$372', body: 2, bodyPlus: true },
  { id: 'w-adolfo-lona-chardonnay', kind: 'branco', country: 'Brasil', name: 'Adolfo Lona Chardonnay', grapes: 'Chardonnay', producer: 'Adolfo Lona | Bento Gonçalves', year: '2022', price: 'R$138', body: 1 },
  { id: 'w-cave-antiga-taffarel', kind: 'branco', country: 'Brasil', name: 'Cave Antiga Taffarel', grapes: 'Schonburger, Chardonnay', producer: 'Cave Antiga | Farroupilha', year: '2025', price: 'R$144', body: 1 },

  // ---------------- ESPUMANTES ----------------
  { id: 'w-adolfo-lona-brut', kind: 'espumante', country: 'Brasil', name: 'Adolfo Lona Brut', grapes: 'Chardonnay, Pinot Noir', producer: 'Bento Gonçalves | Brasil', price: 'R$140', body: 2 },
  { id: 'w-adolfo-lona-brut-rose', kind: 'espumante', country: 'Brasil', name: 'Adolfo Lona Brut Rosé', grapes: 'Chardonnay, Pinot Noir', producer: 'Bento Gonçalves | Brasil', price: 'R$140', body: 2 },
  { id: 'w-cava-castelfino-brut', kind: 'espumante', country: 'Espanha', name: 'Cava Castelfino Brut', grapes: 'Macabeo, Xarello, Parellada', producer: 'Jaume Serra | Catalunha, Espanha', price: 'R$116', body: 2, bodyPlus: true },
  { id: 'w-cava-castelfino-demi-sec', kind: 'espumante', country: 'Espanha', name: 'Cava Castelfino Demi Sec', grapes: 'Macabeo, Xarello, Parellada', producer: 'Jaume Serra | Catalunha, Espanha', price: 'R$116', body: 2 },
  { id: 'w-pizzato-fausto-brut-rose', kind: 'espumante', country: 'Brasil', name: 'Pizzato Fausto Brut Rosé', grapes: 'Pinot Noir, Chardonnay', producer: 'Pizzato | Dois Lajeados, Brasil', price: 'R$126', body: 2 },
  { id: 'w-champagne-pol-roger', kind: 'espumante', country: 'França', name: 'Champagne Pol Roger Brut Resérve', grapes: 'Pinot Noir, Chardonnay, Pinot Meunier', producer: 'Pol Roger | Champagne, França', price: 'R$1180', cannon: true },
  { id: 'w-blanc-de-blanc-zero', kind: 'espumante', country: 'França', name: 'Blanc de Blanc Zero Álcool', grapes: 'Gewurztraminer, Riesling, Chardonnay', producer: 'Pol Roger | Champagne, França', price: 'R$260', tags: ['Zero Álcool'] },

  // ---------------- ROSÉ ----------------
  { id: 'w-fausto-merlot-rose', kind: 'rose', country: 'Brasil', name: 'Fausto Merlot Rosé', grapes: 'Merlot', producer: 'Pizzato | Dois Lajeados', year: '2023', price: 'R$116', body: 2 },
  { id: 'w-carmen-aperitif-rose', kind: 'rose', country: 'Chile', name: 'Carmén Aperitif Rosé', grapes: 'Cabernet Sauvignon, Syrah', producer: 'Viña Carmen | Valle Central', year: '2022', price: 'R$138', body: 2 },
  { id: 'w-la-ferme-julien-rose', kind: 'rose', country: 'França', name: 'La Ferme Julien Rosé', grapes: 'Cinsault, Grenache, Syrah', producer: 'La Vielle Ferme | Rhône', year: '2021', price: 'R$179', body: 2 },
  { id: 'w-s-de-siegel', kind: 'rose', country: 'Chile', name: 'S de Siegel', producer: 'Valle Central | Chile', price: 'R$114', body: 2 },
  { id: 'w-monte-doiro', kind: 'rose', country: 'Portugal', name: "Monte d'Oiro", producer: "Quinta Monte d'Oiro | Lisboa", year: '2023', price: 'R$172', body: 2 },

  // ---------------- TINTO · CHILE ----------------
  { id: 'w-carmen-insigne', kind: 'tinto', country: 'Chile', name: 'Carmén Insigne', grapes: 'Carménère', producer: 'Viña Carmen | Valle Central', year: '2022', price: 'R$138', body: 2 },
  { id: 'w-los-vascos-cs', kind: 'tinto', country: 'Chile', name: 'Los Vascos Cabernet Sauvignon', grapes: 'Cabernet Sauvignon', producer: 'Los Vascos | Valle Central', year: '2022', price: 'R$179', body: 2 },
  { id: 'w-boya-pinot-noir', kind: 'tinto', country: 'Chile', name: 'Boya Pinot Noir', grapes: 'Pinot Noir', producer: 'Viña Garcés Silva | Valle San Antonio', year: '2022', price: 'R$238', body: 3 },
  { id: 'w-lapostolle-apalta', kind: 'tinto', country: 'Chile', name: 'Lapostolle Apalta', grapes: 'Cabernet Sauvignon, Merlot, Carménère, Cabernet Franc, Syrah', producer: 'Lapostolle | Valle de Colchagua', year: '2021', price: 'R$299', cannon: true },

  // ---------------- TINTO · ARGENTINA ----------------
  { id: 'w-alamos-malbec', kind: 'tinto', country: 'Argentina', name: 'Alamos Malbec', producer: 'Catena | Mendoza', year: '2023', price: 'R$169', body: 2 },
  { id: 'w-alamos-syrah', kind: 'tinto', country: 'Argentina', name: 'Alamos Syrah', producer: 'Catena | Mendoza', year: '2023', price: 'R$169', body: 2 },
  { id: 'w-catena-malbec', kind: 'tinto', country: 'Argentina', name: 'Catena Malbec', grapes: 'Malbec', producer: 'Catena Zapata | Mendoza', year: '2022', price: 'R$289', body: 3 },
  { id: 'w-amancaya', kind: 'tinto', country: 'Argentina', name: 'Amancaya', grapes: 'Malbec, Cabernet Sauvignon', producer: 'Bodegas Caro | Mendoza', year: '2021', price: 'R$348', cannon: true },
  { id: 'w-el-enemigo', kind: 'tinto', country: 'Argentina', name: 'El Enemigo', grapes: 'Syrah, Viognier', producer: 'El Enemigo | Mendoza', year: '2021', price: 'R$348', cannon: true },
  { id: 'w-pispi-blend', kind: 'tinto', country: 'Argentina', name: 'Pispi Blend de Tintas', grapes: 'Malbec, Petit Verdot, Bonarda, Cabernet Fernac, Merlot', producer: 'Mosquita Muerta', year: '2020', price: 'R$228', body: 3, bodyPlus: true },
  { id: 'w-alacran-instinto-malbec', kind: 'tinto', country: 'Argentina', name: 'Alacran Instinto Malbec', grapes: 'Malbec', producer: 'Alacran | Mendoza', year: '2023', price: 'R$128', body: 2 },
  { id: 'w-birth-of-cabernet', kind: 'tinto', country: 'Argentina', name: 'Birth of Cabernet', grapes: 'Cabernet Sauvignon', producer: 'Catena Zapata | Mendoza', year: '2017', price: 'R$1698', cannon: true },

  // ---------------- TINTO · ÁFRICA DO SUL ----------------
  { id: 'w-pinotage-robertson', kind: 'tinto', country: 'África do Sul', name: 'Pinotage – Robertson', producer: 'Robertson Winery', year: '2024', price: 'R$162', body: 2 },

  // ---------------- TINTO · BRASIL ----------------
  { id: 'w-philosophia', kind: 'tinto', country: 'Brasil', name: 'Philosophia', grapes: 'Cabernet Franc', producer: 'Góes | São Roque', year: '2022', price: 'R$338', cannon: true },
  { id: 'w-wild-gamay', kind: 'tinto', country: 'Brasil', name: 'Wild Gamay Nouveau 2025', grapes: 'Gamay', producer: 'Miolo | Campanha Meridional', year: '2025', price: 'R$106', body: 1 },
  { id: 'w-concreto', kind: 'tinto', country: 'Brasil', name: 'Concreto', grapes: 'Cabernet Franc, Syrah', producer: 'Góes | São Roque', year: '2023', price: 'R$178', body: 3 },
  { id: 'w-pizzato-fausto-cabernet', kind: 'tinto', country: 'Brasil', name: 'Pizzato Fausto Cabernet', grapes: 'Cabernet Sauvignon', producer: 'Pizzato | Bento Gonçalves', year: '2023', price: 'R$122', body: 2 },
  { id: 'w-almaunica-quatro-castas', kind: 'tinto', country: 'Brasil', name: 'Almaúnica Quatro Castas', grapes: 'Syrah, Merlot, Malbec, Cabernet Sauvignon', producer: 'Pizzato | Bento Gonçalves', year: '2021', price: 'R$298', body: 3, bodyPlus: true },
  { id: 'w-baron-adolfo-lona', kind: 'tinto', country: 'Brasil', name: 'Baron – Adolfo Lona', grapes: 'Cabernet Sauvignon, Merlot, Tannat', producer: 'Adolfo Lona | Campanha Gaúcha', year: '2020', price: 'R$520', body: 3, bodyPlus: true },
  { id: 'w-lote-43', kind: 'tinto', country: 'Brasil', name: 'Lote 43', grapes: 'Cabernet Sauvignon, Merlot', producer: 'Miolo | Vale dos Vinhedos', year: '2022', price: 'R$332', body: 3, bodyPlus: true },
  { id: 'w-dadivas', kind: 'tinto', country: 'Brasil', name: 'Dádivas', grapes: 'Merlot, Cabernet Sauvignon', producer: 'Lidio Carraro | Encruzilhada do Sul', year: '2022', price: 'R$148', body: 2 },
  { id: 'w-grande-vindima-merlot', kind: 'tinto', country: 'Brasil', name: 'Grande Vindima Merlot', grapes: 'Merlot', producer: 'Lidio Carraro | Encruzilhada do Sul', year: '2018', price: 'R$387', body: 3 },
  { id: 'w-pizzato-dna99', kind: 'tinto', country: 'Brasil', name: 'Pizzato DNA99', grapes: 'Merlot', producer: 'Pizzato | Bento Gonçalves', year: '2020', price: 'R$570', cannon: true },
  { id: 'w-ingreme', kind: 'tinto', country: 'Brasil', name: 'Íngreme', grapes: 'Syrah', producer: 'Artesã | Mantiqueira', year: '2022', price: 'R$320', cannon: true },
  { id: 'w-rus-de-alma', kind: 'tinto', country: 'Brasil', name: 'Rus de Alma', grapes: 'Tannat, Cabernet Sauvignon, Sangiovese', producer: 'Quinta Barroca da Tília | Viamão', year: '2017', price: 'R$210', body: 3 },
  { id: 'w-corvos-anjos', kind: 'tinto', country: 'Brasil', name: 'Corvos Anjos', grapes: 'Nebbiolo', producer: 'Quinta Barroca da Tília | Viamão', year: '2018', price: 'R$398', cannon: true },
  { id: 'w-luiz-argenta-zero', kind: 'tinto', country: 'Brasil', name: 'Luiz Argenta Zero Álcool', grapes: 'Syrah', producer: 'Luiz Argenta | Flores da Cunha', year: '2025', price: 'R$136', tags: ['Zero Álcool'] },

  // ---------------- TINTO · ESTADOS UNIDOS ----------------
  { id: 'w-simi-cabernet', kind: 'tinto', country: 'Estados Unidos', name: 'Simi Cabernet Sauvignon', grapes: 'Cabernet Sauvignon', producer: 'Simi | California', year: '2020', price: 'R$350', body: 2, bodyPlus: true },

  // ---------------- TINTO · ESPANHA ----------------
  { id: 'w-bayanegra-tempranillo', kind: 'tinto', country: 'Espanha', name: 'Bayanegra Tempranillo', grapes: 'Tempranillo', producer: 'Bodegas Celaya | Castilla La Mancha', year: '2023', price: 'R$172', body: 2, bodyPlus: true },
  { id: 'w-alaja-cosecha', kind: 'tinto', country: 'Espanha', name: 'Alaja Cosecha', producer: 'Bodegas Luzón | Jumilla D.O.P', year: '2021', price: 'R$180', body: 3 },
  { id: 'w-santo-cristo-garnacha', kind: 'tinto', country: 'Espanha', name: 'Santo Cristo Garnacha', grapes: 'Garnacha', producer: 'Campo de Borja', year: '2018', price: 'R$210', body: 2, bodyPlus: true },
  { id: 'w-condado-haza-crianza', kind: 'tinto', country: 'Espanha', name: 'Condado de Haza Crianza', grapes: 'Tempranillo', producer: 'Bodegas Condado de Haza | Castilla Y León', year: '2019', price: 'R$450', cannon: true },
  { id: 'w-pesquera-crianza', kind: 'tinto', country: 'Espanha', name: 'Pesquera Crianza', grapes: 'Tempranillo', producer: 'Pesquera | Ribeira del Duero', year: '2020', price: 'R$648', cannon: true },
  { id: 'w-pintia-vega-sicilia', kind: 'tinto', country: 'Espanha', name: 'Pintia – Vega Sicilia', grapes: 'Tinta de Toro', producer: 'Bodegas Pintia | Castilla Y León', year: '2019', price: 'R$1890', cannon: true },

  // ---------------- TINTO · FRANÇA ----------------
  { id: 'w-chateau-bel-air', kind: 'tinto', country: 'França', name: 'Château Bel Air', grapes: 'Merlot, Cabernet Sauvignon', producer: 'Château Bel Air | Bordeaux', year: '2022', price: 'R$210', body: 2, bodyPlus: true },
  { id: 'w-maison-bouey', kind: 'tinto', country: 'França', name: 'Maison Bouey Erravimus', grapes: 'Carignan, Cinsault, Grenache, Syrah', producer: 'Maison Bouey | AOC Médoc', year: '2019', price: 'R$465', body: 3 },
  { id: 'w-drouhin-bourgogne-rouge', kind: 'tinto', country: 'França', name: 'Drouhin Bourgogne Rouge', grapes: 'Pinot Noir', producer: 'Joseph Drouhin | Borgonha', year: '2022', price: 'R$708', body: 2 },

  // ---------------- TINTO · ITÁLIA ----------------
  { id: 'w-bardolino-classico', kind: 'tinto', country: 'Itália', name: 'Bardolino Classico', grapes: 'Corvina, Rodinella, Molinara', producer: 'Campagnola | Veneto', year: '2021', price: 'R$190', body: 3 },
  { id: 'w-il-pumo-salento', kind: 'tinto', country: 'Itália', name: 'Il Pumo – Salento IGP', grapes: 'Primitivo', producer: 'San Marzano | Puglia', year: '2021', price: 'R$172', body: 2, bodyPlus: true },
  { id: 'w-chianti-gentilesco', kind: 'tinto', country: 'Itália', name: 'Chianti Gentilesco', grapes: 'Sangiovese, Canaiolo', producer: 'Bonacchi | Toscana', year: '2022', price: 'R$198', body: 2 },
  { id: 'w-braccale', kind: 'tinto', country: 'Itália', name: 'Braccale', grapes: 'Sangiovese Grosso, Merlot', producer: 'Castello di Montepo | Toscana', year: '2022', price: 'R$308', body: 3 },
  { id: 'w-valpolicella-ripasso', kind: 'tinto', country: 'Itália', name: 'Valpoliccela Ripasso Classico Superiore', grapes: 'Sangiovese Grosso, Merlot', producer: 'Campagnola | Veneto', year: '2020', price: 'R$350', body: 3 },
  { id: 'w-montepulciano-abruzzo', kind: 'tinto', country: 'Itália', name: "Montepulciano d'Abruzzo DOC", grapes: 'Sangiovese Grosso, Merlot', producer: 'San Marco | Abruzzo', year: '2022', price: 'R$148', body: 2, bodyPlus: true },
  { id: 'w-primitivo-manduria', kind: 'tinto', country: 'Itália', name: 'Primitivo di Manduria Masseria Trajone', grapes: 'Primitivo', producer: 'Masseria Trajone | Puglia', year: '2021', price: 'R$290', body: 2, bodyPlus: true },
  { id: 'w-barolo-abbona', kind: 'tinto', country: 'Itália', name: 'Barolo Abbona', grapes: 'Nebbiolo', producer: 'Marziano Abbona | Piemonte', year: '2020', price: 'R$1060', cannon: true },
  { id: 'w-brunello-la-fiorita', kind: 'tinto', country: 'Itália', name: 'Brunello di Montalcino DOCG – La Fiorita', grapes: 'Sangiovese', producer: 'La Fiorita | Toscana', year: '2017', price: 'R$790', cannon: true },

  // ---------------- TINTO · PORTUGAL ----------------
  { id: 'w-bojador', kind: 'tinto', country: 'Portugal', name: 'Bojador', grapes: 'Aragonez, Touriga Nacional, Trincadeira', producer: 'Alentejo', year: '2024', price: 'R$172', body: 2, bodyPlus: true },
  { id: 'w-meandro-vale-meao', kind: 'tinto', country: 'Portugal', name: 'Meandro do Vale Meão', grapes: 'Touriga Nacional, Touriga Franca, Tinta Roriz, Tinta Barroca, Alicante Bouschet', producer: 'Quinta do Vale Meão | Douro', year: '2021', price: 'R$448', cannon: true },
  { id: 'w-quadrifoglia', kind: 'tinto', country: 'Portugal', name: 'Quadrifoglia', producer: 'Quinta do Vallado | Douro D.O.C.', year: '2022', price: 'R$168', body: 2, bodyPlus: true },
  { id: 'w-vallado', kind: 'tinto', country: 'Portugal', name: 'Vallado', grapes: 'Touriga Franca, TOuriga Nacional, Tinta Roriz', producer: 'Quinta do Vallado | Douro D.O.C.', year: '2023', price: 'R$220', body: 3, bodyPlus: true },
  { id: 'w-nieport-touriga', kind: 'tinto', country: 'Portugal', name: 'Nieport Touriga Nacional', grapes: 'Touriga Nacional', producer: 'Nieport | Dão', year: '2020', price: 'R$238', body: 3, bodyPlus: true },
  { id: 'w-luis-pato-baga', kind: 'tinto', country: 'Portugal', name: 'Luis Pato – Baga, Touriga', grapes: 'Baga, Touriga Nacional', producer: 'Luis Pato | Bairrada', year: '2013', price: 'R$180', body: 3, bodyPlus: true },
  { id: 'w-piano-reserva', kind: 'tinto', country: 'Portugal', name: 'Piano Reserva', grapes: 'Tinta Roriz, Touriga Nacional, Touriga Franca', producer: 'Carlos Alonso | Douro', year: '2020', price: 'R$148', body: 3 },

  // ---------------- TINTO · URUGUAI ----------------
  { id: 'w-cisplatino', kind: 'tinto', country: 'Uruguai', name: 'Cisplatino', grapes: 'Tannat, Merlot', producer: 'Pisano | Canelones', year: '2022', price: 'R$190', body: 2, bodyPlus: true },
]

// Seções complementares da carta (preços por taça / garrafa / dose)
export const wineByGlass: WineServingOption[] = [
  {
    id: 'taca-consulte',
    name: 'Consulte Opções',
    origin: 'Tinto, Branco e Espumante',
    servings: [{ label: 'Taça', price: 'R$32' }],
  },
]

export const wineHalfBottle: WineServingOption[] = [
  {
    id: 'meia-pizzato-fausto',
    name: 'Pizzato Fausto',
    grapes: 'Cabernet Sauvignon',
    producer: 'Pizzato | Bento Gonçalves, Brasil',
    servings: [{ label: 'Meia Garrafa', price: 'R$56' }],
  },
]

export const wineDigestifs: WineServingOption[] = [
  {
    id: 'dig-grahams-tawny',
    name: "Graham's Fine Tawny",
    origin: 'Porto',
    servings: [{ label: '', price: 'R$36' }],
  },
  {
    id: 'dig-gran-feudo-dulce',
    name: 'Gran Feudo Dulce 2022',
    origin: 'Muscat – Espanha',
    servings: [{ label: '', price: 'R$42' }],
  },
]

// Seleção sazonal (impressa como "Seleção especial para o dia das Mães").
// Mantida por fidelidade ao impresso — pode ser editada/removida conforme a temporada.
export const wineSeasonalSelection = {
  title: 'Seleção especial',
  note: '*Temos dose para degustação',
  items: [
    {
      id: 'sel-miolo-riesling',
      name: 'Miolo Riesling Single Vineyard',
      producer: 'Miolo | Campanha Gaúcha',
      origin: 'Brasil – 2022',
      servings: [
        { label: 'Taça 100ml', price: 'R$18' },
        { label: 'Taça 150ml', price: 'R$28' },
        { label: 'Garrafa', price: 'R$110' },
      ],
    },
    {
      id: 'sel-rus-de-alma',
      name: 'Rus de Alma',
      grapes: 'Tannat, Cabernet Sauvignon, Sangiovese',
      producer: 'Quinta Barroca da Tília | Viamão',
      origin: 'Brasil – 2017',
      servings: [
        { label: 'Taça 100ml', price: 'R$28' },
        { label: 'Taça 150ml', price: 'R$42' },
        { label: 'Garrafa', price: 'R$180' },
      ],
    },
  ] as WineServingOption[],
}
