# Projekt-Logbuch: Sushihaus Weiden

## Aktuelles Briefing
Entwicklung einer modernen, responsiven Website für das Sushihaus Weiden. Die Website basiert auf React und Vite und wird auf Vercel gehostet.
**Aktuelles Ziel:** Implementierung eines geschützten `/admin`-Bereichs zur dynamischen Verwaltung der Speisekarte durch den Restaurantbetreiber, inklusive Datenbank-Anbindung für die Vercel-Umgebung.

## Änderungshistorie

### 31.05.2026
- **Planung:** Implementierungsplan für den neuen Admin-Bereich (`/admin`) erstellt. Der Plan beinhaltet Routing, Passwortschutz und Datenbank-Optionen (z.B. Vercel KV) für die Speicherung der Speisekartendaten.
- **Implementierung Admin Panel:** 
  - `react-router-dom` in `App.jsx` eingeführt und bisheriges Layout nach `Home.jsx` verschoben.
  - Vercel API Routes `api/menu.js` und `api/login.js` angelegt.
  - `@vercel/kv` installiert, um Speisekarten-Daten in Vercel zu sichern.
  - Die `Menu.jsx` wurde dynamisiert und holt die Daten jetzt vom API Backend mit automatischem Fallback.
  - Admin-Interface in `Admin.jsx` und `Admin.css` gebaut. Bietet nun Felder für alle Gerichte und Kategorien an.
