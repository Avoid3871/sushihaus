import { motion } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="ambient-glow ambient-glow--gold contact__glow" />
      <div className="container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section__label">Besuchen Sie Uns</span>
          <h2 className="section__title">Kontakt & Anfahrt</h2>
          <p className="section__subtitle">
            Wir freuen uns auf Ihren Besuch — oder rufen Sie an, um einen Tisch zu reservieren.
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Info Cards */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Address */}
            <div className="contact-card glass">
              <div className="contact-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h3 className="contact-card__title">Adresse</h3>
                <p className="contact-card__text">
                  Sebastianstraße 5<br />
                  92637 Weiden i.d. OPf.
                </p>
              </div>
            </div>

            {/* Phone */}
            <a href="tel:+4996139391560" className="contact-card glass contact-card--link">
              <div className="contact-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <h3 className="contact-card__title">Telefon</h3>
                <p className="contact-card__text">+49 961 39391560</p>
              </div>
              <svg className="contact-card__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>

            {/* Hours */}
            <div className="contact-card glass">
              <div className="contact-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <h3 className="contact-card__title">Öffnungszeiten</h3>
                <div className="contact-card__hours">
                  <div className="contact-card__hours-row">
                    <span>Di – Sa</span>
                    <span>11:00 – 15:00 · 17:00 – 22:30</span>
                  </div>
                  <div className="contact-card__hours-row">
                    <span>Sonntag</span>
                    <span>11:00 – 15:00 · 17:00 – 22:00</span>
                  </div>
                  <div className="contact-card__hours-row contact-card__hours-row--closed">
                    <span>Montag</span>
                    <span>Ruhetag</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="contact__services-row">
              <div className="contact__service-badge">
                <span className="contact__service-dot contact__service-dot--green" />
                Dine-in
              </div>
              <div className="contact__service-badge">
                <span className="contact__service-dot contact__service-dot--green" />
                Abholung
              </div>
              <div className="contact__service-badge">
                <span className="contact__service-dot contact__service-dot--green" />
                Lieferung
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="contact__map-wrapper"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="contact__map">
              <iframe
                title="Sushihaus Weiden Standort"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2556.5!2d12.1619!3d49.6769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSebastianstra%C3%9Fe+5%2C+92637+Weiden+in+der+Oberpfalz!5e0!3m2!1sde!2sde!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sushihaus+Sebastianstra%C3%9Fe+5+92637+Weiden"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__map-link btn btn--outline"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              In Google Maps öffnen
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
