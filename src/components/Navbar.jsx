import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const navLinks = [
  { id: 'hero', label: 'Start' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'menu', label: 'Speisekarte' },
  { id: 'about', label: 'Über Uns' },
  { id: 'contact', label: 'Kontakt' },
]

export default function Navbar({ scrollY }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const isScrolled = scrollY > 50

  useEffect(() => {
    const sections = navLinks.map(l => document.getElementById(l.id))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <div className="navbar__inner container">
          <button className="navbar__logo" onClick={() => scrollTo('hero')} aria-label="Zurück zum Anfang">
            <span className="navbar__logo-icon">鮨</span>
            <span className="navbar__logo-text">Sushihaus</span>
          </button>

          <ul className="navbar__links">
            {navLinks.map(link => (
              <li key={link.id}>
                <button
                  className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span
                      className="navbar__link-indicator"
                      layoutId="navIndicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <a href="tel:+4996139391560" className="navbar__cta btn btn--primary">
            Reservieren
          </a>

          <button
            className={`navbar__hamburger ${isOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü öffnen"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="mobile-menu__inner">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  className={`mobile-menu__link ${activeSection === link.id ? 'mobile-menu__link--active' : ''}`}
                  onClick={() => scrollTo(link.id)}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                href="tel:+4996139391560"
                className="btn btn--primary mobile-menu__cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Jetzt Reservieren
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
