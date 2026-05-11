import { motion } from 'framer-motion'
import interiorImg from '../assets/restaurant-interior.png'
import './About.css'

const stats = [
  { value: '新鮮', label: 'Täglich frisch' },
  { value: '30+', label: 'Gerichte' },
  { value: '★ 4.5', label: 'Bewertung' },
]

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about__grid">
          {/* Image */}
          <motion.div
            className="about__image-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="about__image-frame">
              <img
                src={interiorImg}
                alt="Sushihaus Weiden Interieur — Gemütliches japanisches Ambiente"
                className="about__image"
              />
              <div className="about__image-border" />
            </div>

            {/* Stats */}
            <motion.div
              className="about__stats glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {stats.map((stat, i) => (
                <div key={i} className="about__stat">
                  <span className="about__stat-value">{stat.value}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="section__label">Über Uns</span>
            <h2 className="section__title">Willkommen im Sushihaus</h2>
            <div className="divider" />

            <div className="about__paragraphs">
              <p>
                Im Herzen von Weiden in der Oberpfalz befindet sich das Sushihaus — 
                Ihr Anlaufpunkt für authentische japanische Küche. In der gemütlichen 
                Atmosphäre unseres Restaurants in der Sebastianstraße servieren wir 
                Ihnen frisch zubereitetes Sushi, traditionelle Ramen und würzige 
                Spezialitäten.
              </p>
              <p>
                Unsere Küche verbindet traditionelle japanische Rezepturen mit 
                sorgfältig ausgewählten, frischen Zutaten. Ob handgerollte Maki, 
                zarter Nigiri oder dampfende Bento-Boxen — jedes Gericht wird mit 
                Liebe zum Detail zubereitet.
              </p>
              <p>
                Genießen Sie vor Ort, bestellen Sie zur Abholung oder lassen Sie 
                sich beliefern. Wir freuen uns auf Ihren Besuch!
              </p>
            </div>

            <div className="about__services">
              <div className="about__service">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M9 21V9"/>
                </svg>
                <span>Dine-in</span>
              </div>
              <div className="about__service">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 16h6v6h-6z"/><path d="M2 2h6v6H2z"/><path d="M5 8v4a4 4 0 0 0 4 4h3"/><path d="M15 16v-4a4 4 0 0 0-4-4H8"/>
                </svg>
                <span>Abholung</span>
              </div>
              <div className="about__service">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
                <span>Lieferung</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
