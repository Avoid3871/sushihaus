import { motion } from 'framer-motion'
import './Footer.css'

const currentYear = new Date().getFullYear()

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <button className="footer__logo" onClick={() => scrollTo('hero')}>
              <span className="footer__logo-icon">鮨</span>
              <span className="footer__logo-text">Sushihaus</span>
            </button>
            <p className="footer__tagline">
              Authentische japanische Küche im Herzen von Weiden in der Oberpfalz.
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Navigation</h4>
            <ul className="footer__links">
              <li><button onClick={() => scrollTo('hero')}>Start</button></li>
              <li><button onClick={() => scrollTo('menu')}>Speisekarte</button></li>
              <li><button onClick={() => scrollTo('about')}>Über Uns</button></li>
              <li><button onClick={() => scrollTo('contact')}>Kontakt</button></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Kontakt</h4>
            <ul className="footer__links">
              <li><a href="tel:+4996139391560">+49 961 39391560</a></li>
              <li><span>Sebastianstraße 5</span></li>
              <li><span>92637 Weiden i.d. OPf.</span></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Öffnungszeiten</h4>
            <ul className="footer__links footer__links--hours">
              <li><span>Di – Sa</span><span>11 – 22:30</span></li>
              <li><span>Sonntag</span><span>11 – 22:00</span></li>
              <li className="footer__closed"><span>Montag</span><span>Ruhetag</span></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">© {currentYear} Sushihaus Weiden. Alle Rechte vorbehalten.</p>
          <div className="footer__legal">
            <a href="#impressum">Impressum</a>
            <a href="#datenschutz">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
