import { motion } from 'framer-motion'
import './Highlights.css'

const highlights = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12s1.5 2 4 2 4-2 4-2"/>
        <path d="M9 9h.01"/><path d="M15 9h.01"/>
      </svg>
    ),
    title: 'Frisches Sushi',
    description: 'Täglich frisch zubereitetes Sushi mit premium Fisch und saisonalen Zutaten aus nachhaltiger Herkunft.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Traditionelle Rezepte',
    description: 'Authentische japanische Rezepturen — von handgerolltem Maki bis hin zu würzigen Ramen-Suppen.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Gemütliches Ambiente',
    description: 'Japanisch inspiriertes Interieur mit warmem Licht — perfekt für ein unvergessliches Dinner-Erlebnis.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
}

export default function Highlights() {
  return (
    <section id="highlights" className="highlights section">
      <div className="container">
        <motion.div
          className="highlights__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section__label">Warum Sushihaus</span>
          <h2 className="section__title">Qualität, die man schmeckt</h2>
          <div className="divider" />
        </motion.div>

        <motion.div
          className="highlights__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              className="highlight-card"
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="highlight-card__icon">
                {item.icon}
              </div>
              <h3 className="highlight-card__title">{item.title}</h3>
              <p className="highlight-card__description">{item.description}</p>
              <div className="highlight-card__accent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
