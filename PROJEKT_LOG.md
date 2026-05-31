# Projekt-Logbuch: Sushihaus Weiden

## Aktuelles Briefing
Entwicklung einer modernen, responsiven Website für das Sushihaus Weiden. Die Website basiert auf React und Vite und wird auf Vercel gehostet.
**Aktuelles Ziel:** Implementierung eines geschützten `/admin`-Bereichs zur dynamischen Verwaltung der Speisekarte durch den Restaurantbetreiber, inklusive Datenbank-Anbindung für die Vercel-Umgebung. Volle CRUD-Unterstützung für Kategorien und Gerichte wurde hinzugefügt.

## Änderungshistorie

### 31.05.2026
- **Planung:** Implementierungsplan für den neuen Admin-Bereich (`/admin`) erstellt.
- **Implementierung Admin Panel (V1):** 
  - `react-router-dom`, Vercel API Routes `api/menu.js` und `api/login.js`.
  - Upstash Redis Integration für Vercel.
- **Implementierung Admin Panel (V2 - CRUD):**
  - **Kategorien:** Funktionen zum Hinzufügen (+ Neue Kategorie), Umbenennen (Titel ist jetzt ein Input) und Löschen (🗑️) integriert.
  - **Gerichte:** Funktionen zum Hinzufügen (+ Neues Gericht) und Löschen integriert. Ein neues "Tag"-Feld hinzugefügt.
  - **Speicher-Button:** Als "Sticky Footer" an den unteren Bildschirmrand geheftet, um immer erreichbar zu sein.
