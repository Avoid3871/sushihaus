import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Menu.css'

const menuData = {
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
}

const categories = Object.keys(menuData)

const tagColors = {
  vegan: { bg: 'rgba(74, 222, 128, 0.1)', color: '#4ade80', border: 'rgba(74, 222, 128, 0.2)' },
  vegetarisch: { bg: 'rgba(74, 222, 128, 0.1)', color: '#4ade80', border: 'rgba(74, 222, 128, 0.2)' },
  scharf: { bg: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: 'rgba(239, 68, 68, 0.2)' },
  beliebt: { bg: 'rgba(201, 169, 110, 0.1)', color: '#c9a96e', border: 'rgba(201, 169, 110, 0.2)' },
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('vorspeisen')
  const category = menuData[activeCategory]

  return (
    <section id="menu" className="menu section">
      <div className="ambient-glow ambient-glow--gold menu__glow" />
      <div className="container">
        <motion.div
          className="menu__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section__label">Unsere Karte</span>
          <h2 className="section__title">Speisekarte</h2>
          <p className="section__subtitle">
            Von traditionellem Sushi bis zu warmen japanischen Spezialitäten — entdecken Sie unsere Auswahl.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="menu__tabs"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`menu__tab ${activeCategory === cat ? 'menu__tab--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {menuData[cat].label}
              {activeCategory === cat && (
                <motion.span
                  className="menu__tab-bg"
                  layoutId="menuTab"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="menu__items"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {category.subtitle && (
              <p className="menu__items-subtitle">je {category.subtitle}</p>
            )}
            {category.items.map((item, i) => (
              <motion.div
                key={item.name}
                className="menu-item"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <div className="menu-item__info">
                  <div className="menu-item__name-row">
                    <h3 className="menu-item__name">{item.name}</h3>
                    {item.tag && (
                      <span
                        className="menu-item__tag"
                        style={{
                          background: tagColors[item.tag]?.bg,
                          color: tagColors[item.tag]?.color,
                          borderColor: tagColors[item.tag]?.border,
                        }}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="menu-item__desc">{item.desc}</p>
                </div>
                <div className="menu-item__dots" />
                <span className="menu-item__price">{item.price} €</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Disclaimer */}
        <motion.p
          className="menu__disclaimer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Alle Preise inkl. MwSt. · Allergene & Zusatzstoffe auf Nachfrage · Änderungen vorbehalten
        </motion.p>
      </div>
    </section>
  )
}
