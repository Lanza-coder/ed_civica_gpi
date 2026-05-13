# 🌍 Sito Educativo: Terremoto Turchia-Siria 2023

## Progetto di Educazione Civica
**Gruppo:** Barile • Lanza • Groppo  
**Data:** Aprile-Maggio 2023  
**Argomento:** Analisi dell'impatto umanitario e ambientale attraverso il monitoraggio satellitare

---

## 📋 Indice del Progetto

1. **Il Contesto: Dove e Quando**
   - Localizzazione geografica
   - Faglie tettoniche
   - Sequenza sismica
   - Dati principali dell'evento (7.8 Mw, 17,9 km di profondità)

2. **Tecnologia Satellitare: Copernicus**
   - Sentinel-1 (Radar SAR)
   - Sentinel-2 (Ottico multispettrale)
   - Copernicus EMS (Emergency Management Service)
   - Monitoraggio e mappatura dei danni in tempo reale

3. **I Danni: Analisi dei Dati**
   - 59.259 vittime totali
   - 125.000+ feriti
   - 3 milioni di sfollati
   - 170.000 edifici distrutti
   - Disparità tra Turchia e Siria

4. **Risposta Umanitaria e Cooperazione Internazionale**
   - Risposta nazionale turca (AFAD, 80.000 soccorritori)
   - 91 paesi coinvolti
   - Meccanismi UE e ONU
   - Crisi in Siria e disparità geopolitica

5. **Riflessioni Conclusive**
   - Tecnologia come cittadinanza attiva
   - Prevenzione e norme antisismiche
   - Cooperazione internazionale
   - Giustizia umanitaria

---

## 📁 Struttura dei File

```
terremoto-2023/
│
├── index.html                    # Pagina principale
│
├── assets/
│   ├── style.css               # Stili CSS (1200+ righe)
│   └── script.js               # Logica JavaScript interattiva
│
└── README.md                     # Questo file
```

---

## 🎨 Design e Caratteristiche

### Palette di Colori
- **Primario:** Blu scuro (#1a3a52) - Rappresenta stabilità e serietà
- **Accento:** Rosso (#e74c3c) - Evidenzia dati critici e pericolo
- **Secondario:** Blu cielo (#3498db) - Informazioni e tecnologia
- **Background:** Bianco e grigio chiaro - Leggibilità ottimale

### Tipografia
- **Display:** Georgia (serif) - Per titoli e sezioni principali
- **Body:** Segoe UI / Roboto (sans-serif) - Per testi e contenuti

### Funzionalità

#### Frontend
- ✅ **Responsive Design** - Ottimizzato per mobile, tablet e desktop
- ✅ **Navigazione Fluida** - Menu fisso con smooth scroll
- ✅ **Animazioni CSS** - Transizioni eleganti e effetti di fade-in
- ✅ **Contatori Animati** - Statistiche che si riempiono al scroll
- ✅ **Menu Mobile** - Hamburger menu per dispositivi piccoli
- ✅ **Parallax Leggero** - Effetti di profondità sul hero

#### Interattività
- ✅ **Smooth Scrolling** - Navigazione morbida tra sezioni
- ✅ **Scroll Detection** - Highlighting automatico del menu attivo
- ✅ **Intersection Observer** - Animazioni al raggiungimento di elementi
- ✅ **Hover Effects** - Transizioni su card e link
- ✅ **Mobile Menu Toggle** - Hamburger menu funzionante

---

## 🚀 Come Utilizzare

### Installazione Locale

1. **Scarica i file**
   - Scarica tutti i file dal repository

2. **Apri il file**
   ```bash
   # Aprire direttamente il file index.html nel browser
   # Windows: doppio click su index.html
   # Mac: doppio click su index.html
   # Linux: aprire con il browser preferito
   ```

3. **Non è necessario**
   - Non serve installare dipendenze
   - Non serve un server web per visualizzare il sito (se aperto localmente)
   - Tutto funziona con HTML, CSS e JavaScript vanilla

### Deploy su GitHub Pages

1. **Crea un repository GitHub**
   ```bash
   git init
   git add .
   git commit -m "Sito Educativo Terremoto 2023"
   git remote add origin https://github.com/tuo-username/sito-terremoto.git
   git push -u origin main
   ```

2. **Abilita GitHub Pages**
   - Vai su Settings → Pages
   - Seleziona "Deploy from a branch"
   - Scegli "main" e "/root"
   - Salva

3. **Il sito sarà disponibile a:**
   ```
   https://tuo-username.github.io/sito-terremoto/
   ```

### Deploy su Netlify

1. **Trascinare i file su netlify.com**
   - Accedi a https://netlify.com
   - Trascina la cartella nel deploy area
   - Il sito sarà online istantaneamente

---

## 📱 Responsive Breakpoints

- **Desktop:** 1200px+ (grid completo, animazioni full)
- **Tablet:** 768px - 1199px (grid ridotto)
- **Mobile:** < 768px (layout singolo, menu hamburger)
- **Small Mobile:** < 480px (font ridotti, spacing ottimizzato)

---

## 🎯 Sezioni Principali

### Hero Section
- Titolo principale con animazione di slide-up
- Sottotitolo con magnitudo del terremoto
- Pulsante CTA "Scopri di più" con effetto hover

### Navigation Index
- 5 card cliccabili per navigare alle sezioni
- Hover effect con shadow e translazione
- Numerazione sequenziale

### Content Sections
Ogni sezione contiene:
- **Header** con numero sezione e titolo
- **Content** rilevante con testi formattati
- **Visual Elements** (box, card, liste formattate)
- **Animazioni** al raggiungimento della sezione

### Statistics Section
- 4 card con statistiche principali (59.259 vittime, 125.000+ feriti, ecc.)
- Contatore animato che riempie il numero
- Gradient background con effetto hover (scale 1.05)

### Technology Section
- 3 card per Sentinel-1, Sentinel-2 e Copernicus EMS
- Elenchi puntati formattati
- Border-top colorato per distinzione

### Response Section
- Comparazione Turchia vs Siria
- Turchia: ✓ (verde) - Risposta positiva
- Siria: ⚠ (rosso) - Difficoltà e limitazioni
- Box geopolitica di sintesi

### Sources Section
- 8 fonti citate con numerazione
- Background scuro per contrasto
- Layout a griglia responsive

---

## 🔧 Personalizzazione

### Cambiare Colori
Modifica le variabili CSS in `assets/style.css`:
```css
:root {
    --primary: #1a3a52;          /* Colore primario */
    --accent: #e74c3c;           /* Colore accento */
    --secondary: #3498db;        /* Colore secondario */
    /* ... altre variabili ... */
}
```

### Cambiare Font
```css
:root {
    --font-family-display: 'Georgia', serif;
    --font-family-body: 'Segoe UI', sans-serif;
}
```

### Aggiungere/Modificare Sezioni
1. Aggiungi una `<section>` con `id` in `index.html`
2. Aggiungi il link nel menu di navigazione
3. Crea lo stile corrispondente in `assets/style.css`
4. Il JavaScript gestirà automaticamente lo smooth scroll

---

## 📊 Dati Principali

| Metrica | Valore |
|---------|--------|
| **Data** | 6 Febbraio 2023 |
| **Ora** | 04:17 (ora locale) |
| **Magnitudo** | 7.8 Mw |
| **Profondità** | 17,9 km |
| **Epicentro** | Kahramanmaraş, Turchia |
| **Vittime** | 59.259 |
| **Feriti** | 125.000+ |
| **Sfollati** | 3 milioni |
| **Edifici Distrutti** | 170.000 |
| **Paesi che hanno Aiutato** | 91 |
| **Soccorritori Turchi (48h)** | 80.000 |

---

## ⚙️ Tecnologie Utilizzate

- **HTML5** - Struttura semantica
- **CSS3** - Styling moderno con variabili CSS
- **JavaScript Vanilla** - Nessuna libreria esterna
- **Intersection Observer API** - Animazioni trigger su scroll
- **CSS Animations & Transitions** - Effetti fluidi
- **Responsive Grid & Flexbox** - Layout adattivo

---

## 🌐 Browser Compatibility

| Browser | Supporto |
|---------|----------|
| Chrome | ✅ Pieno |
| Firefox | ✅ Pieno |
| Safari | ✅ Pieno |
| Edge | ✅ Pieno |
| IE11 | ⚠️ Limitato |
| Mobile Browsers | ✅ Pieno |

---

## 📚 Fonti Utilizzate

1. **INGV** — Istituto Nazionale di Geofisica e Vulcanologia
2. **OCHA** — UN Office for the Coordination of Humanitarian Affairs
3. **Copernicus EMS** — European Commission Rapid Mapping
4. **ESA / Sentinel Hub** — Earth Observation Browser
5. **AFAD** — Turkey Disaster & Emergency Management
6. **Amnesty International** — Humanitarian Response Report
7. **WHO** — Health Cluster Report
8. **USGS** — Earthquake Hazard Program

---

## 🎓 Aspetti Educativi

Questo sito affronta tematiche di:
- 🌍 **Geografia** - Faglie tettoniche, placche continentali
- 📡 **Tecnologia** - Monitoraggio satellitare, Copernicus
- 🤝 **Educazione Civica** - Cooperazione internazionale, aiuti umanitari
- 📊 **Data Analysis** - Lettura e interpretazione di dati statistici
- ⚖️ **Diritti Umani** - Giustizia umanitaria, disparità geopolitiche

---

## 📧 Contatti e Crediti

**Autori del Progetto:**
- Barile
- Lanza
- Groppo

**Istituzione:** [Nome della Scuola]  
**Materia:** Educazione Civica  
**Anno Scolastico:** 2025/2026  
**Data di Creazione:** Aprile-Maggio 2023

---

## 📄 Licenza

Questo progetto è disponibile per scopi educativi.  
Le immagini e i dati sono tratti da fonti pubbliche ufficiali.

---

**Ultimo Aggiornamento:** Maggio 2023  
**Versione:** 1.0

