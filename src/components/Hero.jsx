import { motion } from 'framer-motion'
import heroImg from '../assets/hero-sushi.png'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Background Image */}
      <div className="hero__bg">
        <img src={heroImg} alt="Frisches Sushi Arrangement" className="hero__bg-img" />
        <div className="hero__bg-overlay" />
      </div>

      {/* Ambient Glows */}
      <div className="ambient-glow ambient-glow--gold hero__glow-1" />
      <div className="ambient-glow ambient-glow--red hero__glow-2" />

      {/* Content */}
      <div className="hero__content container">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Badge */}
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="hero__badge-dot" />
            Sebastianstraße 5 · Weiden i.d. OPf.
          </motion.div>

          <h1 className="hero__title">
            <span className="hero__title-line">Authentische</span>
            <span className="hero__title-line hero__title-line--accent">Japanische</span>
            <span className="hero__title-line">Küche</span>
          </h1>

          <p className="hero__description">
            Erleben Sie die Kunst des Sushi — frisch zubereitet mit ausgewählten Zutaten 
            und traditioneller Handwerkskunst. Willkommen im Sushihaus Weiden.
          </p>

          <div className="hero__actions">
            <motion.a
              href="#menu"
              className="btn btn--primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3h18v18H3z" /><path d="M3 9h18" /><path d="M9 21V9" />
              </svg>
              Speisekarte
            </motion.a>
            <motion.a
              href="tel:+4996139391560"
              className="btn btn--outline"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Reservieren
            </motion.a>
          </div>
        </motion.div>

        {/* Opening Hours Card */}
        <motion.div
          className="hero__hours glass"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="hero__hours-header">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>Öffnungszeiten</span>
          </div>
          <div className="hero__hours-grid">
            <div className="hero__hours-row">
              <span className="hero__hours-day">Di – Sa</span>
              <span className="hero__hours-time">11:00 – 15:00 & 17:00 – 22:30</span>
            </div>
            <div className="hero__hours-row">
              <span className="hero__hours-day">Sonntag</span>
              <span className="hero__hours-time">11:00 – 15:00 & 17:00 – 22:00</span>
            </div>
            <div className="hero__hours-row hero__hours-row--closed">
              <span className="hero__hours-day">Montag</span>
              <span className="hero__hours-time">Ruhetag</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="hero__scroll-line"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
