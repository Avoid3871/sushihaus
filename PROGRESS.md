# Projekt-Log: Sushi Haus

## Aktuelles Briefing
Das Projekt ist eine moderne, responsive Website für das Restaurant **Sushi Haus** in Weiden. Ziel ist eine performante und ästhetisch ansprechende Präsentation mit React und Vite. Die Website ist jetzt vollständig mobilfähig mit optimierten Layouts für alle Bildschirmgrößen.

## Änderungen - 30.05.2026
- **Mobile Responsiveness Overhaul:** Komplette Überarbeitung aller Komponenten für Mobile-Geräte.
  - **Navbar:** Mobile-Menü deckt jetzt den gesamten Bildschirm ab (Fullscreen-Overlay statt seitlichem Panel). iOS-Tap-Highlight entfernt.
  - **Hero:** Badge bekommt auf Mobile Top-Margin (nicht von Navbar verdeckt). Buttons stapeln sich vertikal und sind full-width. Öffnungszeiten-Karte ist full-width. `100svh` für korrektes Viewport-Filling auf Mobile-Browsern.
  - **Menu:** Tabs-Bereich hat jetzt einen Fade-Gradient-Indikator rechts, der anzeigt, dass weitere Tabs per Swipe erreichbar sind. Touch-optimiertes Scrolling.
  - **Contact:** Öffnungszeiten-Karte stapelt Tag/Zeit vertikal auf kleinen Screens für bessere Lesbarkeit. Google Maps Button full-width. Karte-Höhe reduziert.
  - **Footer:** Einspaltiges Layout bereits ab 768px (statt vorher 480px). Copyright-Bar stapelt sich auf Mobile.
  - **Global:** `-webkit-tap-highlight-color: transparent` hinzugefügt für saubere Touch-Interaktionen.
- **About Section Fix:**
  - **Neues Bild:** Echtes Sushihaus-Interieur-Foto (`sushihaus-interior.jpg`) eingebunden — ersetzt das bisherige `restaurant-interior.png`.
  - **Stats-Badge Layout-Fix:** Stats-Badge von `position: absolute` auf `position: relative` mit `margin-top: -30px` umgestellt. Der Überlappungseffekt auf dem Bild bleibt erhalten, aber die Badge liegt jetzt im normalen Dokumentfluss und kollidiert nicht mehr mit den Service-Badges (Dine-in, Abholung, Lieferung) in der rechten Spalte.
  - **Service-Badges Update:** "Lieferung" Service-Badge und Text-Erwähnung ("beliefern") auf Kundenwunsch aus der Über Uns Sektion entfernt, da nur noch Dine-in und Abholung angeboten werden.
  - **Logo Update:** Das japanische Zeichen (鮨) wurde aus dem Text-Logo in der Navbar und im Footer entfernt, sodass jetzt nur noch "Sushihaus" steht.
- **SEO & Search Indexing:** `robots.txt` und `sitemap.xml` im `/public` Ordner generiert, damit Google und andere KIs die Seite sauber crawlen können. (Schema.org JSON-LD für AI Empfehlungen war bereits in der `index.html` verankert).
  - **Rechtliches (Impressum & Datenschutz):** Ein wiederverwendbares Modal-System (`LegalModal.jsx`) inkl. Animationen und Scroll-Lock gebaut. Im Footer öffnen die Links für Impressum und Datenschutz nun elegante Pop-ups. Die realen Daten (Sushihaus Weiden, Sebastianstraße 5) wurden in die Platzhalter übernommen.
  - **Gastronomie-Pflichtangaben (LMIV & PAngV):** Unter der Speisekarte wurde ein rechtlich sicherer Disclaimer-Text eingebaut: *"Alle Preise in Euro inkl. der gesetzlichen MwSt. Informationen zu Allergenen und Zusatzstoffen erhältst du auf Nachfrage bei unserem Personal. Änderungen vorbehalten."*
  - **Letzter Aufräum-Schritt:** Den übrig gebliebenen "Lieferung"-Badge im Kontakt-Bereich ganz unten entfernt, da dieser Service nicht mehr angeboten wird.
- **Navbar CTA Specificity Fix:** "Reservieren" Button war auf Mobile sichtbar, weil `.btn { display: inline-flex }` aus `index.css` die gleiche Spezifität wie `.navbar__cta { display: none }` hatte. Fix: Selektor auf `.navbar .navbar__cta` erhöht (Spezifität 0-2-0 statt 0-1-0).

## Änderungen - 11.05.2026
- **Git Initialisierung:** Lokales Git-Repository erstellt und ersten Commit durchgeführt.
- **GitHub Upload:** Repository auf GitHub unter [Avoid3871/sushihaus](https://github.com/Avoid3871/sushihaus) erstellt und Code hochgeladen.
- **Vercel Deployment:** Die Website wurde erfolgreich auf Vercel deployt.
- **Live-URL:** [https://sushihaus.vercel.app/](https://sushihaus.vercel.app/)
- **GitHub Professionalisierung:**
    - Erstellung eines KI-generierten Premium-Banners für das Repository.
    - Vollständiger Rewrite der `README.md` mit Badges, Features und Installationsanleitung.
    - Hinzufügen einer MIT-Lizenz.
    - Optimierung der Repository-Metadaten (Topics & Beschreibung) für bessere Sichtbarkeit.

