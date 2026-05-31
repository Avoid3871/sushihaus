import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Menu.css'
import { defaultMenuData } from '../data/defaultMenu.js'

const tagColors = {
  vegan: { bg: 'rgba(74, 222, 128, 0.1)', color: '#4ade80', border: 'rgba(74, 222, 128, 0.2)' },
  vegetarisch: { bg: 'rgba(74, 222, 128, 0.1)', color: '#4ade80', border: 'rgba(74, 222, 128, 0.2)' },
  scharf: { bg: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: 'rgba(239, 68, 68, 0.2)' },
  beliebt: { bg: 'rgba(201, 169, 110, 0.1)', color: '#c9a96e', border: 'rgba(201, 169, 110, 0.2)' },
}

export default function Menu() {
  const [menuData, setMenuData] = useState(defaultMenuData)
  const [activeCategory, setActiveCategory] = useState('vorspeisen')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch('/api/menu')
        if (res.ok) {
          const data = await res.json()
          setMenuData(data)
        }
      } catch (err) {
        console.warn('Could not fetch menu from API, using default.')
      } finally {
        setIsLoading(false)
      }
    }
    fetchMenu()
  }, [])

  const categories = Object.keys(menuData)
  const category = menuData[activeCategory] || menuData['vorspeisen']

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
        <div className="menu__tabs-wrapper">
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
        </div>

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
          Alle Preise in Euro inkl. der gesetzlichen MwSt. Informationen zu Allergenen und Zusatzstoffen erhältst du auf Nachfrage bei unserem Personal. Änderungen vorbehalten.
        </motion.p>
      </div>
    </section>
  )
}
