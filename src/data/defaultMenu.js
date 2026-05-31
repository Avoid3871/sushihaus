export const defaultMenuData = {
  vorspeisen: {
    label: 'Vorspeisen',
    items: [
      { name: 'Miso Suppe', desc: 'Klassische japanische Suppe mit Tofu & Wakame', price: '4,50', tag: null },
      { name: 'Edamame', desc: 'Gesalzene Sojabohnen', price: '4,90', tag: 'vegan' },
      { name: 'Gyoza (6 Stk.)', desc: 'Japanische Teigtaschen, gedämpft oder gebraten', price: '6,90', tag: null },
      { name: 'Wakame Salat', desc: 'Seetangsalat mit Sesam-Dressing', price: '5,50', tag: 'vegan' },
      { name: 'Crispy Duck Salat', desc: 'Knusprige Ente auf frischem Salat mit Ponzu-Dressing', price: '8,90', tag: null },
    ],
  },
  maki: {
    label: 'Maki Rollen',
    subtitle: '8 Stück',
    items: [
      { name: 'Sake Maki', desc: 'Lachs', price: '6,90', tag: null },
      { name: 'Kappa Maki', desc: 'Gurke', price: '5,50', tag: 'vegetarisch' },
      { name: 'Tekka Maki', desc: 'Thunfisch', price: '7,50', tag: null },
      { name: 'Avocado Maki', desc: 'Avocado', price: '5,90', tag: 'vegan' },
      { name: 'Tamago Maki', desc: 'Japanisches Omelett', price: '5,90', tag: 'vegetarisch' },
    ],
  },
  insideout: {
    label: 'Inside-Out Rollen',
    subtitle: '8 Stück',
    items: [
      { name: 'California Roll', desc: 'Surimi, Avocado, Gurke, Sesam', price: '9,90', tag: null },
      { name: 'Spicy Tuna Roll', desc: 'Thunfisch, Sriracha Mayo, Frühlingszwiebel', price: '10,90', tag: 'scharf' },
      { name: 'Crispy Chicken Roll', desc: 'Knuspriges Hühnchen, Avocado, Teriyaki', price: '10,50', tag: null },
      { name: 'Veggie Deluxe', desc: 'Avocado, Mango, Gurke, Sesam', price: '9,50', tag: 'vegan' },
      { name: 'Mt. Everest Roll', desc: 'Lachs, Frischkäse, Avocado, Tempura', price: '12,90', tag: 'beliebt' },
      { name: 'Dragon Roll', desc: 'Garnele Tempura, Avocado, Unagi-Sauce', price: '13,50', tag: 'beliebt' },
    ],
  },
  nigiri: {
    label: 'Nigiri',
    subtitle: '2 Stück',
    items: [
      { name: 'Sake Nigiri', desc: 'Lachs', price: '5,50', tag: null },
      { name: 'Maguro Nigiri', desc: 'Thunfisch', price: '6,50', tag: null },
      { name: 'Ebi Nigiri', desc: 'Garnele', price: '5,90', tag: null },
      { name: 'Tamago Nigiri', desc: 'Japanisches Omelett', price: '4,90', tag: 'vegetarisch' },
      { name: 'Unagi Nigiri', desc: 'Gegrillter Aal', price: '7,50', tag: null },
    ],
  },
  warme: {
    label: 'Warme Gerichte',
    items: [
      { name: 'Teriyaki Chicken', desc: 'Hühnchen in Teriyaki-Sauce mit Reis & Gemüse', price: '13,90', tag: null },
      { name: 'Bento Box Classic', desc: 'Sushi, Gyoza, Salat, Reis, Miso-Suppe', price: '16,90', tag: 'beliebt' },
      { name: 'Bento Box Deluxe', desc: 'Premium Sushi, Tempura, Salat, Reis, Miso', price: '19,90', tag: null },
      { name: 'Ramen Tonkotsu', desc: 'Schweineknochen-Brühe, Nudeln, Chashu, Ei, Nori', price: '14,50', tag: null },
      { name: 'Chicken Katsu Curry', desc: 'Paniertes Hühnchen mit japanischem Curry & Reis', price: '14,90', tag: null },
    ],
  },
  desserts: {
    label: 'Desserts',
    items: [
      { name: 'Mochi Eis (3 Stk.)', desc: 'Japanisches Reiskuchen-Eis — Matcha, Mango, Erdbeere', price: '6,50', tag: null },
      { name: 'Gebackene Banane', desc: 'Mit Honig und geröstetem Sesam', price: '5,90', tag: null },
      { name: 'Matcha Tiramisu', desc: 'Cremiges Tiramisu mit Grüntee-Note', price: '7,50', tag: null },
      { name: 'Kokoseis', desc: 'Hausgemachtes Kokoseis mit Mango-Sauce', price: '5,50', tag: null },
    ],
  },
};
