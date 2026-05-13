# 📖 Manuale Tecnico Rapido - Sito Terremoto 2023

## Indice Veloce

1. [File e Cartelle](#file-e-cartelle)
2. [Come Modificare il Sito](#come-modificare-il-sito)
3. [Codice Principale](#codice-principale)
4. [Variabili CSS Importanti](#variabili-css-importanti)
5. [Classi Disponibili](#classi-disponibili)
6. [JavaScript API](#javascript-api)
7. [Troubleshooting](#troubleshooting)

---

## File e Cartelle

```
📁 Progetto
├── 📄 index.html              ← PAGINA PRINCIPALE (modifica qui il contenuto)
├── 📄 README.md               ← Documentazione generale
├── 📄 DEPLOYMENT.md           ← Guida al deployment
├── 📄 data.json              ← Dati strutturati (JSON)
├── 📄 TECHNICAL.md           ← Questo file
│
└── 📁 assets/               ← Cartella di risorse
    ├── 📄 style.css         ← STILI (modifica aspetto qui)
    └── 📄 script.js         ← LOGICA JAVASCRIPT (interattività)
```

---

## Come Modificare il Sito

### Aggiungere una nuova sezione

#### 1. In `index.html`:
```html
<!-- Copia il template qui sotto -->
<section id="nuova-sezione" class="content-section section-6">
    <div class="container">
        <div class="section-header">
            <span class="section-number">06</span>
            <h2>Titolo della Sezione</h2>
        </div>
        <!-- Contenuto qui -->
    </div>
</section>
```

#### 2. Aggiungi il link nel menu:
```html
<li><a href="#nuova-sezione" class="nav-link">Nuova Sezione</a></li>
```

#### 3. In `assets/style.css`:
```css
.section-6 { 
    background: white;  /* o var(--bg-lighter) */
}
```

---

### Cambiare il tema colore

In `assets/style.css`, modifica le variabili `:root`:

```css
:root {
    --primary: #1a3a52;          /* Blu scuro - titoli */
    --primary-light: #2d5a7b;
    --primary-dark: #0f2236;
    
    --accent: #e74c3c;           /* Rosso - highlights */
    --accent-light: #f5544a;
    
    --secondary: #3498db;        /* Blu cielo - info */
    --secondary-light: #5dade2;
    
    /* Colori di supporto */
    --success: #27ae60;          /* Verde - successo */
    --warning: #e67e22;          /* Arancio - attenzione */
    --danger: #c0392b;           /* Rosso scuro - pericolo */
    
    --neutral-light: #ecf0f1;    /* Grigio chiaro */
    --neutral-darker: #2c3e50;   /* Grigio scuro */
}
```

---

### Cambiare i font

In `assets/style.css`:
```css
:root {
    --font-family-display: 'Georgia', serif;      /* Titoli */
    --font-family-body: 'Segoe UI', sans-serif;   /* Testo */
}
```

**Opzioni di font:**
- **Display (Titoli):** Georgia, Cambria, 'Times New Roman', Arial Black
- **Body (Testo):** 'Segoe UI', Roboto, -apple-system, sans-serif

---

## Codice Principale

### Struttura HTML Base

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titolo della Pagina</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <!-- Contenuto -->
    <script src="assets/script.js"></script>
</body>
</html>
```

### Componenti Disponibili

#### 1. Navbar
```html
<nav class="navbar">
    <div class="nav-container">
        <div class="nav-logo">Logo</div>
        <ul class="nav-menu">
            <li><a href="#id" class="nav-link">Link</a></li>
        </ul>
    </div>
</nav>
```

#### 2. Hero Section
```html
<section class="hero">
    <div class="hero-background"></div>
    <div class="hero-content">
        <h1 class="hero-title">Titolo</h1>
        <p class="hero-description">Descrizione</p>
        <a href="#section" class="cta-button">Azione</a>
    </div>
</section>
```

#### 3. Card Grid
```html
<div class="index-grid">
    <a href="#id" class="index-card">
        <span class="index-number">01</span>
        <h3>Titolo</h3>
        <p>Descrizione</p>
    </a>
</div>
```

#### 4. Tech Cards
```html
<div class="tech-grid">
    <div class="tech-card">
        <h3>Titolo</h3>
        <p class="tech-subtitle">Sottotitolo</p>
        <ul class="tech-list">
            <li>Punto 1</li>
            <li>Punto 2</li>
        </ul>
    </div>
</div>
```

#### 5. Stat Cards
```html
<div class="stats-grid">
    <div class="stat-card">
        <div class="stat-number">59.259</div>
        <div class="stat-label">Vittime</div>
    </div>
</div>
```

#### 6. Info Box
```html
<div class="info-box">
    <h4>Titolo</h4>
    <p>Contenuto</p>
</div>
```

---

## Variabili CSS Importanti

### Spacing
```css
--spacing-xs: 0.25rem
--spacing-sm: 0.5rem
--spacing-md: 1rem
--spacing-lg: 1.5rem
--spacing-xl: 2rem
--spacing-xxl: 3rem
```

### Border Radius
```css
--radius-sm: 0.5rem
--radius-md: 0.75rem
--radius-lg: 1rem
```

### Shadows
```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1)
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.15)
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.2)
```

### Transitions
```css
--transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
--transition-slow: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
```

---

## Classi Disponibili

### Layout
- `.container` - Contenitore max-width 1200px
- `.content-grid` - Grid 2 colonne responsive
- `.tech-grid` - Grid 3 colonne per tech cards
- `.stats-grid` - Grid 4 colonne per statistiche

### Testo
- `.section-number` - Numero sezione grande
- `.section-header` - Header di sezione
- `.hero-title` - Titolo hero
- `.hero-subtitle` - Sottotitolo hero
- `.stat-number` - Numero statistiche

### Card/Box
- `.tech-card` - Card per tecnologie
- `.index-card` - Card indice
- `.stat-card` - Card statistiche
- `.info-box` - Box informazioni
- `.response-card` - Card risposta
- `.conclusion-card` - Card conclusioni

### Background
- `.section-1` - Background bianco
- `.section-2` - Background grigio chiaro
- `.hero-background` - Background con gradiente

### Effetti
- `.fade-in` - Animazione fade in
- `.hover` - Effetti hover

---

## JavaScript API

### Funzioni Disponibili

#### 1. Smooth Scrolling
Automatico per tutti gli `href="#id"`

#### 2. Navigation Highlighting
Il link del menu si evidenzia automaticamente durante lo scroll

#### 3. Intersection Observer
Gli elementi si animano quando entrano in viewport:
```javascript
// Selettori monitorati automaticamente:
.index-card
.tech-card
.stat-card
.response-card
.conclusion-card
.info-box
```

#### 4. Animated Counters
I numeri nelle stat-card si riempiono animati

#### 5. Mobile Menu Toggle
Il menu hamburger funziona automaticamente su mobile

### Aggiungere Funzionalità Personalizzate

```javascript
// In assets/script.js, aggiungi alla fine:

// Esempio: Log quando sezione diventa visibile
document.addEventListener('DOMContentLoaded', () => {
    const mySection = document.getElementById('nuova-sezione');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Sezione visibile!');
                // Qui puoi aggiungere logica
            }
        });
    });
    
    observer.observe(mySection);
});
```

---

## Breakpoints Responsive

```css
/* Desktop: 1200px+ */
@media (min-width: 1200px) { ... }

/* Tablet: 768px - 1199px */
@media (max-width: 1199px) { ... }

/* Mobile: < 768px */
@media (max-width: 768px) { ... }

/* Small Mobile: < 480px */
@media (max-width: 480px) { ... }
```

---

## Troubleshooting

### Problema: Styled non applica stile
**Soluzione:**
1. Verifica che `style.css` sia caricato in `<head>`
2. Controlla che il percorso sia corretto: `assets/style.css`
3. Cancella cache: `Ctrl+Shift+Delete`

### Problema: JavaScript non funziona
**Soluzione:**
1. Verifica che `script.js` sia caricato prima di `</body>`
2. Controlla che sia nella cartella `assets/`
3. Apri console (F12) per vedere errori

### Problema: Layout rotto su mobile
**Soluzione:**
1. Verifica il viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
2. Testa con DevTools (F12 → Ctrl+Shift+M)
3. Controlla i breakpoints in CSS

### Problema: Font non carica
**Soluzione:**
1. Font di sistema sono pre-installati, niente da fare
2. Se vuoi font Google, aggiungi:
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
```

### Problema: Immagine non si vede
**Soluzione:**
1. Crea cartella `assets/images/`
2. Metti l'immagine lì
3. Usa: `<img src="assets/images/nome.jpg" alt="descrizione">`
4. Comprimi immagini (tinypng.com)

---

## Performance Tips

### 1. Compressione Immagini
```bash
# Online (consigliato):
tinypng.com
compressor.io

# Terminal:
imagemagick, ffmpeg
```

### 2. Minify CSS/JS (Opzionale)
```bash
# Minify CSS
cssnano, csso

# Minify JS
uglify-js, terser
```

### 3. Caching
GitHub Pages e Netlify hanno caching automatico

### 4. CDN (Opzionale)
Se carichi librerie esterne:
```html
<!-- Usa CDNJS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/..."></script>
```

---

## Checklist Modifica Codice

Prima di ogni modifica:
- [ ] Ho fatto backup del file originale
- [ ] Ho chiuso il sito in tutti i browser
- [ ] Ho salvato il file dopo la modifica
- [ ] Ho ricaricato il browser (F5)
- [ ] Ho controllato la console (F12) per errori
- [ ] Ho testato su mobile (F12 → Ctrl+Shift+M)

---

## Comandi Utili

```bash
# Se usi Python per server locale
python -m http.server 8000
# Visita: http://localhost:8000

# Se usi Node.js
npx http-server

# Se usi Ruby
ruby -run -ehttpd . -p8000

# Pulisci cache locale (Windows)
del /Q cache.*

# Pulisci cache locale (Mac/Linux)
rm -rf cache.*
```

---

## Link Utili

- **Colori:** https://colorhexa.com
- **Fonts:** https://fonts.google.com
- **CSS Reference:** https://developer.mozilla.org/en-US/docs/Web/CSS
- **HTML Reference:** https://developer.mozilla.org/en-US/docs/Web/HTML
- **JavaScript:** https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **Can I Use:** https://caniuse.com

---

## Note Importanti

1. **Sempre testare su browser diversi**
2. **Sempre controllare console (F12) per errori**
3. **Sempre testare su mobile**
4. **Sempre fare backup prima di grandi modifiche**
5. **Mantenere il codice organizzato e commentato**

---

## Versione e Updates

**Versione Attuale:** 1.0  
**Data:** Maggio 2023  
**Status:** Stable and Production Ready ✅

---

**Domande?** Consulta README.md o DEPLOYMENT.md!
