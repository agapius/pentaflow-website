# pentaflow.ai — Design & Site Documentation

Zentrales Dokument für alle Entscheidungen, die in die neue Website eingeflossen sind.
Stand: 2026-04-22 (Phase 2 Migration abgeschlossen — alle Sektionen in Produktion).

---

## 1. Kontext

### Buyer ICP
- **Rolle:** CEO oder CFO (nicht IT, nicht Einkauf)
- **Unternehmensgröße:** DACH-Mittelstand, ca. €20M Umsatz
- **Industrie:** Fertigungsindustrie mit PSI-Penta-ERP-Installation
- **Technisches Verständnis:** Non-technical — Design muss respektvoll aber nicht belehrend sein
- **Primäre Frage, die er stellt:** „Kann ich diesen Anbietern vertrauen?" — nicht „funktioniert KI überhaupt?"

### Positionierung
- **Kein SaaS-Produkt.** Spezialisierte Beratung + maßgeschneiderte Agenten-Entwicklung.
- **Value-Prop:** Ersetzt administrative FTE-Arbeit, nicht per-Seat-Pricing
- **PSI-Penta-first, ERP-agnostisch:** Marketing fokussiert PSI Penta (SEO-Wedge), Architektur kann jeden ERP
- **Model-agnostisch:** Standard Gemini 2.5, einsetzbar OpenAI/Anthropic/Mistral/lokal
- **Primäres Ziel der Website:** Vertrauen in PentaFlow aufbauen (nicht in KI generell); sekundär: Sales-Call buchen

### Referenzkunde: Seisenbacher GmbH
- CEO: Christian Forstner (Zitat freigegeben 2026-04-22)
- Branche: Schienenfahrzeugausstattung · Österreich
- Volumen: 1.700 Eingangsrechnungen/Monat + 1.500 Bestellbestätigungen/Monat
- Impact: 2 Vollzeitstellen automatisiert, 4 Wochen bis Produktivbetrieb
- Live seit: 2025

---

## 2. Design DNA

### Ästhetische Ankerpunkte

| Dimension | Entscheidung | Warum |
|---|---|---|
| Aesthetic | Linear-minimal | Vom User als stärkster Referenzpunkt bestätigt |
| Palette | Navy (#001F54) + Ice (#3478ff) + Ink (#04060a) | User-Präferenz: „High-contrast slate and deep navies, crisp blue accents" |
| Farbtemperatur | Kühl | User lehnte jeden sepia/warmen Ton explizit ab |
| Typografie Headings | Space Grotesk (500/600/700) | „Modern, engineered look" |
| Typografie Body | Inter (400/500/600) | Lesbarkeit + existierende Einbindung |
| Typografie Tech | JetBrains Mono (400/500) | Für Labels, Code-Snippets, Meta-Strips |
| Border-Stil | Hairline `rgba(255,255,255,0.06)` | Linear-subtil |
| Animation-Prinzip | Selten, langsam, selbstbewusst | Nicht „lebendig", sondern „präzise" |

### Design-Prinzipien
1. **Zeigen statt erzählen.** Echte Rechnungsnummern (205380), echte ERP-Objekte (PREK, PEKK, PEKP), echte Volumen — nichts Generisches.
2. **Technische Tiefe als Trust-Signal.** Die Zielgruppe ist non-technical, aber die *Präsenz* von technischer Präzision (UID-Checksumme, europe-west1, REST-API) signalisiert Kompetenz, auch wenn nicht jedes Detail gelesen wird.
3. **Subtiler als erwartet.** Wo andere Anbieter Particles, Gradients und laute Animationen nutzen, bleibt die Seite bewusst ruhig.
4. **Ein Gesicht hinter der Beratung.** Founder-Portrait prominent; widerspricht Sierra/Decagon-Pattern, passt zur Small-Specialist-Positionierung.

---

## 3. Reference Websites (Research-Phase)

Die Design-DNA entstand durch explizite Reaktionen des Users auf existierende Sites. Dokumentiert für spätere Iterationen:

### Übernommen / inspirierend
| Site | Was davon in pentaflow.ai geflossen ist |
|---|---|
| **linear.app** | Gesamtästhetik: dunkel, minimal, Hairline-Borders, technisch-subtil. Hauptreferenz. |
| **rossum.ai** | Invoice-mit-hervorgehobenen-Feldern-Pattern (FIG 01 Hero-Animation), „Three quality items"-Card-Layout (FIG 02 Pillars mit Produktmockups) |
| **sierra.ai** | Glass-Card-Pattern mit Hintergrund-Blur — übernommen für Extraction-Cards in FIG 01, aber in kühler Palette |
| **nanonets.com** | Klare „Impact-sofort-sichtbar"-Stärke — inspiriert FIG 06 |

### Bewusst abgelehnt
| Site | Warum verworfen |
|---|---|
| **sierra.ai** (sepia-Beispiele) | Warme Farbpalette — widerspricht User-Präferenz für kühle Navys |
| **decagon.ai** | Zu lose, zu viel Whitespace, unklar was sie tun |
| **dust.tt** | Zu generisch, Tech-Startup-Template-Gefühl; PentaFlow ist spezialisiert, nicht „ein weiteres Agent-Framework" |
| **trigger.dev** | Zu technisch, zu bunt, zu viel Animation |
| **resend.com** | Zu produktisch („dev-tool flair") — PentaFlow verkauft Beratung, nicht API-Tool |
| **make.com** | Zu viel Animation, zu laut |
| **relay.app** | Zu verspielt, nicht seriös genug für €20M-Kunden |
| **browserbase** | 90er-Computing-Vibe |

### Taste-Grundsätze (aus dem Research)
- **Klein-und-spezialisiert schlägt breit-und-generisch.** Die Seite darf nicht wie eine $10B-SaaS-Firma aussehen.
- **Weniger Animation, mehr Präzision.** Subtile Bewegung > auffällige Choreografie.
- **Technische Indikatoren ohne technisches Overhead.** `europe-west1`, `DSGVO`, `PEKK · PEKP · PREK` signalisieren Tiefe, ohne non-technical Leser zu überfordern.

---

## 4. Farbpalette

Tokens in `tailwind.config.js`:

```js
ink:  { 0: '#04060a', 1: '#07090f', 2: '#0a0d14', 3: '#0f1320', 4: '#141a2b' }  // Background-Hierarchie
navy: { 700: '#003a9e', 800: '#002870', 900: '#001F54' }                        // Depth-Layer (Glows)
ice:  { 200: '#bcd8ff', 300: '#8ec0ff', 400: '#5b8eff', 500: '#3478ff' }        // Akzente, Hover-States
brand: { ... }                                                                   // Bestehende Palette, bleibt für Rückwärtskompatibilität
```

**Logo-Farbe:** `#D9D9D9` — die Pentagon-SVG hat diesen Wert als Fill; Wordmark passt bewusst mit inline-style.

---

## 5. Sektionen — Zweck, Entscheidungen, Inhalt

### Nav
**Stil:** Boxed monospace Links (JetBrains Mono) mit Hairline-Borders, aus dem Prototyp übernommen auf Wunsch.
**Inhalt:** Logo-Mark + Wordmark + 5 Links (Prozess · Kundenstimme · Über uns · FAQ · Kontakt mit Ice-Akzent).
**Mobile:** Burger-Menü, gleicher Boxed-Stil vertikal gestapelt.

### FIG 01 — Hero
**Zweck:** Erste 6 Sekunden — zeigen was wir tun, ohne zu erzählen.
**Entscheidungen:**
- **H1-Copy** nach SEO-Option C: kurz „KI-Agenten für PSI Penta.", ERP bold in Subtitle (behält Keyword-Dichte ohne visuelle Schwere)
- **Pill** „Zwei Agenten live — Eingangsrechnungen & Bestellbestätigungen" (ersetzt altes „Erster Agent live")
- **Invoice-Animation** 13s Loop: echte Muster-Stahltechnik GmbH als Lieferant, UID ATU45678901, Bestellnr. 205380, Gesamt 4.281,60 €
- **Pipeline-Indicator** wurde ursprünglich hier gezeigt, aber auf User-Feedback in FIG 03 verschoben (Hero war zu cluttered)
- **Floating Extraction-Cards** (Lieferant / UID / Bestellung / Betrag / Confidence) — alle `hidden md:block`, Mobile zeigt nur Invoice + PSI-Penta-Record
- **Bottom Meta-Strip** Latency · Confidence · Extractor · Region — technische Credibility ohne laute Erklärung

### FIG 02 — Warum PentaFlow (Pillars)
**Zweck:** Drei Grundsätze, an denen sich PentaFlow messen lässt.
**3 Säulen:**
1. **Maßgeschneidert** — Mini-Mockup: `agent.config` Panel. Copy: „Kein Produkt von der Stange. Vier Wochen bis zum Produktivbetrieb."
2. **Datenschutz** — ursprünglich „Native Integration", nach User-Feedback umgestellt. Mini-Mockup: `data.location` Checklist. Vier Punkte: EU-hosted · On-prem/Managed · Keine Daten an Dritte · Kein Modell-Training. Copy: „Sie behalten die Datenhoheit."
3. **Human-in-the-Loop** — Mini-Mockup: HITL-Queue mit einem amber-hervorgehobenen Prüf-Vorgang. Copy: „Autonom. Aber nie ohne Sie."

### FIG 03 — Kundenstimme
**Zweck:** Forstner-Zitat als Peer-to-peer-Trust-Signal.
**Layout:** Editorial Split (User-gewählt aus A/B/C-Alternativen). Zitat links (7 Cols), strukturiertes Daten-Panel rechts (5 Cols) mit Name · Rolle · SEISENBACHER-Wortmarke · Branche · Monats-Stats.
**Pipeline-Indicator** sitzt hier (zwischen H2 und Figure) — zeigt die zwei ERP-Targets (PREK/PREP, PEKK/PEKP) im Kontext von Seisenbachers Produktivdaten.
**Forstner-Zitat:** Entwurf A „Kontrolle + Geschwindigkeit" — freigegeben 2026-04-22.
**Entwurf B** (Zahlen-geführt) liegt als HTML-Kommentar im Code für späteren Swap.
**Seisenbacher-Visuell:** Typografische Wortmarke in Space Grotesk bold, tracking-0.18em — bewusst gewählt gegen das offizielle Bildlogo (ruhigere Bildsprache).

### FIG 04 — Wie es funktioniert
**Zweck:** Prozess in drei Schritten sichtbar machen.
**Layout:** Drei Cards mit Mini-Produktmockups (Rossum-inspiriert) — Outlook-Inbox → Document/Extraction → PSI-Penta-Record.
**Step 02 Copy:** „Wahlweise Gemini, OpenAI oder Anthropic klassifiziert und extrahiert." — subtiler Model-Agnostik-Hinweis, bevor FAQ die Frage ausführlich beantwortet.

### FIG 05 — Über uns
**Zweck:** Founder-led Trust-Signal.
**Layout:** Portrait Forward (Variante A aus A/B/C) — 5-Col Portrait links, 7-Col Copy rechts.
**Portrait:** Jasper Castell, Farbe behalten (Navy-Blazer matcht Markenfarbe), 4:5 Aspect, `jasper-castell.webp` (10KB) + PNG-Fallback (749KB), lazy-loaded.
**Caption:** „Informatiker · Gründer" (nicht „Gründer · PentaFlow AI" — technisches Credential zuerst für CEO-Buyer).
**Stats:** Berlin & Wien · 100% PSI Penta Fokus · 24/7 Agent-Verfügbarkeit.

### FIG 06 — Impact
**Zweck:** Harte Zahlen als Beweis, ohne Prospekt-Ton.
**H2:** „Spürbare Verbesserung. Kein Marketingversprechen." (User-Copy nach Diskussion von Alternativen).
**Subtitle:** „Was bei Seisenbacher aktuell monatlich durch PentaFlow läuft." (gekürzt vom längeren Original).
**Kennzahlen (4 Cells):**
- 1.700+ Rechnungen/Monat
- 1.500+ Bestellbestätigungen/Monat
- 2 Vollzeitstellen automatisiert
- 4 Wochen bis Live
**Footer-Strip:** „Live seit 2025 · Seisenbacher GmbH" + Quelle „PSI Penta PREK/PEKK Log".

### FAQ
**Zweck:** Einwand-Antizipation + Long-tail-SEO.
**Layout:** Kicker + H2 links-ausgerichtet, Fragen-Cards zentriert (max-w-3xl mx-auto).
**6 Fragen** (nach Iteration):
1. Können Sie auch mit anderen ERP-Systemen arbeiten als PSI Penta? *(ERP-agnostisch)*
2. Welche PSI-Penta-Prozesse können Sie automatisieren? *(Scope + Dashboards)*
3. Welches KI-Modell setzen Sie ein? *(Model-agnostisch)*
4. Behält der Mensch die Kontrolle über die KI-Buchungen? *(HITL)*
5. Muss ich meine PSIpenta API für das Internet öffnen? *(Security)*
6. Wie lange dauert die Implementierung? *(Timeline)*

**Entfernt in Migration:**
- „Was ist PSIpenta?" — wurde ersetzt durch die ERP-agnostische Frage
- „Wie funktioniert automatische Rechnungsverarbeitung mit PSI Penta?" — Overlap mit FIG 04 + Q2

### FIG 07 — Kontakt
**Zweck:** Conversion-Punkt.
**Form:** **Keine** — User-Entscheidung. Nur E-Mail als CTA.
**Layout:** Variante C (Email-as-Hero) — `info@pentaflow.ai` in Display-Größe mit Underline + Pfeil, Trust-Microtext „Antwort in 24h · Direkt vom Gründer".
**Link:** `mailto:info@pentaflow.ai?subject=PSI%20Penta%20Potential-Analyse` (Cal.com/Calendly-Link optional später).

### Footer
**Unverändert:** Copyright · Impressum · Datenschutz. Container auf `max-w-7xl px-6` angeglichen für saubere Vertikal-Linie.

---

## 6. Typografie-Hierarchie

```
H1 (Hero)          : Space Grotesk 600, text-4xl md:5xl lg:6xl
H2 (Sections)      : Space Grotesk 600, text-3xl md:5xl
H3 (Card-Titles)   : Space Grotesk 600, text-xl
Body               : Inter 400, text-base md:lg
Section-Kicker     : JetBrains Mono 500, text-[11px], uppercase, tracking-0.18em, text-ice-400 (mit ::before dash)
Meta-Labels        : JetBrains Mono 500, text-[10px], uppercase, tracking-widest, text-gray-600
Code/Fields        : JetBrains Mono 400, monospace context
```

**H1-Prinzip:** Zweizeilig mit zweitem Teil in `text-gray-500` (muted) — durchgehendes Pattern.

---

## 7. Animations-Inventar

Alle definiert im `<style>`-Block von `index.html`:

| Animation | Zweck | Duration |
|---|---|---|
| `proto01` | Haupt-Loop für Hero-Invoice | 13s |
| `stageAppear` | Floating-Extraction-Cards erscheinen | 13s mit delays 0–6 |
| `markerDraw` | Feld-Highlights auf Rechnung | 13s |
| `drawLine` | Verbindungslinie Invoice → ERP-Record | 13s |
| `checkPulse` | Check-Icons scale-in | 13s |
| `badgeFloat` | Confidence-Badge schwebt | 6s ease-in-out |
| `pulse-ring` | Nicht aktuell genutzt, reserviert für CTA | 2.2s |
| Scroll-Reveal (`.reveal` JS) | Opacity 0→1 bei Intersection | 800ms |

---

## 8. Technical Stack

- **HTML:** Vanilla, keine Framework-Dependencies
- **CSS:** Tailwind v3.4 kompiliert zu `style.css` (36 KB minified) — **keine CDN in Produktion**
- **Fonts:** Self-hosted in `/fonts/` (Inter + Space Grotesk + JetBrains Mono, latin-subset, woff2 nur)
- **Font-Weights geladen:** Inter 300–900, Space Grotesk 500/600/700, JetBrains Mono 400/500
- **Preload:** Space Grotesk 600 + Inter 500 (LCP-kritisch)
- **Bilder:**
  - `jasper-castell.webp` (10 KB, primär)
  - `jasper-castell.png` (749 KB, Fallback)
  - `pentaflow logo.svg` (Pentagon-Mark, inline für currentColor optional)
  - `seisenbacher-logo-white.png` (vorhanden aber nicht referenziert — User-Präferenz für Typo-Wortmarke)
- **JS:** Vanilla, nur Mobile-Menü-Toggle + Scroll-Reveal (`IntersectionObserver`)
- **Kontakt:** `mailto:`-Link mit vorbefülltem Subject — keine Formspree, kein Cal.com derzeit

---

## 9. SEO-Strategie

### JSON-LD Schemas im `<head>`
1. **Organization** — Name, URL, Logo, Addresses (Berlin + Wien), knowsAbout
2. **WebSite** — Base-URL + Description
3. **LocalBusiness** — Adressen, priceRange
4. **ProfessionalService** (neu) — AreaServed erweitert auf DE + AT + CH
5. **Review** (neu) — Forstner-Zitat als 5-Sterne-Review, Autor mit Person/Organization
6. **FAQPage** — 6 Fragen 1:1 mit visiblem HTML synchronisiert

### Meta-Tags (unverändert übernommen)
- `<title>` „PentaFlow AI — KI-Agenten für PSI Penta ERP"
- Description, Keywords, Author, Canonical, hreflang `de`
- Open Graph + Twitter Card komplett

### Keyword-Dichte
„PSI Penta" und „PSIpenta" erscheinen in: Title · Meta Description · JSON-LD · Hero-Subtitle · alle Sektions-H2s · FAQ-Fragen + Antworten · Pipeline-Indicator · About-Copy.

### A11y (auch SEO-relevant)
- Skip-to-main-content Link (sr-visible on focus)
- `aria-hidden="true"` auf dekorativen SVGs
- `alt`-Texte mit Keyword-Kontext („Jasper Castell, Gründer PentaFlow AI", „PentaFlow AI Logo — KI-Agenten für PSI Penta ERP")
- Semantische H1/H2/H3-Hierarchie

---

## 10. Bewusst weggelassen / entfernt

| Element | Grund |
|---|---|
| Alte „Problem"-Sektion (Zeitverlust/Fehleranfällig/Skaliert nicht) | Generisch, implizit durch Pillars + Impact abgedeckt |
| Alte „Lösung"-Sektion (2 Cards) | Konsumiert von FIG 02 Pillars |
| Alte „Agenten-Übersicht" (3 Cards) | Konsumiert vom Pipeline-Indicator in FIG 03 |
| Alte „Technologie"-Sektion (4 Cards) | Konsumiert von FIG 02 Pillars |
| Particles-Animation (JS + CSS) | Generisch, FIG 01 Animation hat eigene Präsenz |
| Gradient-Text | Ersetzt durch `text-gray-500` muted second-line Pattern |
| Formspree-Formular | User-Entscheidung: Mailto reicht |
| 4-stufiger Prozess mit Emoji-Chips | Ersetzt durch 3-Step-Mockup |
| „Kostenlose Erstberatung" Hero-CTAs | Conversion bewegt sich nach unten — FIG 07 |
| Scroll-Indicator im Hero | Hero ist nicht full-screen; nicht nötig |
| FIG 03 „Architektur" (drei Linear-FIGs) | Prototyp-Iteration entfernt — Content doppelt mit FIG 04 |
| „Variante A/B/C"-Labels aus Prototyp | Prune nach Entscheidung |

---

## 11. Iterationshistorie (Prototyp-Snapshots)

Gesicherte Zwischenstände in Reihenfolge:

- `prototypes-v1.html` — Original 01+02+03 (Hero + Pillars + FIG-0-Illustrationen)
- `prototypes-v2.html` — mit Pipeline-Toggle und Logo-Hint
- `prototypes-v3.html` — nach FIG 04+05+06 hinzugefügt, mit allen A/B/C-Varianten
- `prototypes-v4.html` — pre-prune, alle Varianten noch inline
- `prototypes-v5.html` — **enthält FIG 03 Technical Figures** (falls Restore nötig)
- `prototypes-v6.html` — pre-restructure
- `prototypes-v7.html` — pre-Über-uns-prune
- `prototypes-v8.html` — Logo-Swap-Test (verworfen)
- `prototypes-v9.html` — pre-Kontakt
- `prototypes-v10.html` — pre-prune-auf-Variante-C für Kontakt
- `prototypes.html` — final state

**Wichtig:** `index-legacy.html` = Pre-Migration Produktion als Rollback-Option.

---

## 12. Key Copy-Entscheidungen (mit Quelle)

| Element | Finale Copy | Entstehung |
|---|---|---|
| H1 | „KI-Agenten für PSI Penta." | User-Präferenz für kurz; ERP in Subtitle |
| Hero-Subtitle | „Unsere Agenten verstehen Ihre Dokumente, prüfen sie und buchen sie direkt ins **PSI Penta ERP** — Abweichungen werden zur Prüfung markiert." | User-Text + ERP bold für SEO |
| FIG 02 H2 | „Kein Standardprodukt. Ein Partner, der PSI Penta versteht." | Pattern aus Research |
| Pillar 2 H3 | „Sie behalten die Datenhoheit." | User-Edit von „Direkte Integration" |
| FIG 03 H2 | „2 Vollzeitstellen automatisiert. Das sagt der CEO dazu." | User-Wahl aus Alternativen |
| FIG 04 Subtitle | „Postfach, Agent, ERP. Kein zweites System, keine Export-Import-Schleife. Der Agent ist wie ein zusätzlicher Mitarbeiter — nur schneller, rund um die Uhr." | User-Copy |
| FIG 06 H2 | „Spürbare Verbesserung. Kein Marketingversprechen." | User-Copy |
| FIG 06 Subtitle | „Was bei Seisenbacher aktuell monatlich durch PentaFlow läuft." | User-Edit — Originale lange Version gekürzt |
| FIG 07 Trust-Text | „Antwort in 24h · Direkt vom Gründer" | Minimal-Trust-Signal |

---

## 13. Offene Punkte / Known Issues

Stand 2026-04-22:

- **`sameAs` in Organization-JSON-LD** ist leer — LinkedIn/sonstige Profile könnten eingetragen werden
- **Cal.com/Calendly-Link** statt `mailto:` — optional
- **Seisenbacher SVG-Logo** — Datei im Repo (`seisenbacher-logo-white.png`) aber nicht eingebunden (User wählte Typo-Wortmarke)
- **Mobile Testplan** wurde geplant aber nicht strukturiert verifiziert (375/414/768/1024/1440)
- **Lighthouse-Audit** noch nicht gemacht
- **Cross-Browser-Test** Safari/Firefox/Chrome noch nicht gemacht
- **Open-Graph-Image** (`og-image.png`) zeigt noch altes Design
- **Analytics-Tracking** nicht konfiguriert (Plausible/Umami/GA empfohlen, vorher nicht vorhanden)
- **Impressum + Datenschutz** könnten auf neuen Look angepasst werden (aktuell altes Design)

---

## 14. Ordner-/Datei-Struktur

```
pentaflow/
├── index.html                         # ★ Produktion
├── index-legacy.html                  # Rollback-Backup
├── impressum.html                     # Alt-Design, noch nicht migriert
├── datenschutz.html                   # Alt-Design, noch nicht migriert
├── prototypes.html                    # Finaler Prototyp-Stand
├── prototypes-v1 bis v10.html         # Iterations-Snapshots
├── style.css                          # Tailwind-kompiliert (generated)
├── input.css                          # Tailwind source + @font-face
├── tailwind.config.js                 # Token-Definitionen
├── package.json                       # npm-Deps (@fontsource/*)
├── sitemap.xml                        # SEO
├── robots.txt
├── CNAME                              # pentaflow.ai
├── site.webmanifest
├── DESIGN.md                          # ← dieses Dokument
├── fonts/                             # Self-hosted woff2
│   ├── inter-*.woff2
│   ├── space-grotesk-*.woff2
│   └── jetbrains-mono-*.woff2
├── jasper-castell.webp                # Portrait primär
├── jasper-castell.png                 # Portrait Fallback
├── pentaflow logo.svg                 # Pentagon-Mark
├── pentaflow logo.png                 # Raster-Variante
├── seisenbacher-logo-white.png        # ungenutzt, für evtl. Re-Use
├── google-logo.png, google-logo.svg   # Organization-JSON-LD Logo
├── google-cover.png, google-cover.svg
├── og-image.png                       # Veraltet (altes Design)
├── apple-touch-icon.png
├── favicon-16x16.png, favicon-32x32.png
├── icon-192x192.png, icon-512x512.png
├── BingSiteAuth.xml
├── node_modules/
└── venv/
```
