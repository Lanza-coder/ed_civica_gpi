# 🚀 Guida Rapida al Deployment

## Opzioni di Pubblicazione

### Opzione 1: GitHub Pages (CONSIGLIATO)

#### Passo 1: Crea un repository su GitHub
```bash
# Se non hai Git, scaricalo da https://git-scm.com

# Apri la cartella del progetto nel terminale/cmd
cd path/al/progetto

# Inizializza il repository Git
git init

# Aggiungi tutti i file
git add .

# Crea il primo commit
git commit -m "Sito educativo Terremoto Turchia-Siria 2023"
```

#### Passo 2: Carica su GitHub
1. Vai su https://github.com/new
2. Crea un nuovo repository con nome `sito-terremoto`
3. NON selezionare "Initialize with README" (l'abbiamo già)
4. Copia il comando per aggiungere remote:
```bash
git remote add origin https://github.com/TUO_USERNAME/sito-terremoto.git
git branch -M main
git push -u origin main
```

#### Passo 3: Abilita GitHub Pages
1. Accedi al tuo repository
2. Vai su **Settings** (ingranaggio)
3. Scorri a sinistra fino a **Pages**
4. Sotto "Build and deployment":
   - Source: "Deploy from a branch"
   - Branch: "main" / folder: "/ (root)"
5. Clicca **Save**
6. Aspetta 1-2 minuti
7. Il sito sarà disponibile a: `https://username.github.io/sito-terremoto`

---

### Opzione 2: Netlify (SUPER FACILE)

#### Metodo 1: Drag & Drop
1. Accedi a https://netlify.com
2. Seleziona **Create a new site** → **Deploy manually**
3. Trascina la cartella del progetto nella zona di drop
4. ✅ Il sito è online istantaneamente!
5. URL: `https://random-name.netlify.app`

#### Metodo 2: Con Git
```bash
# Installa Netlify CLI (opzionale)
npm install -g netlify-cli

# Nella cartella del progetto
netlify deploy --prod
```

---

### Opzione 3: Vercel

1. Vai su https://vercel.com
2. Clicca **New Project**
3. Importa il repository GitHub
4. Clicca **Deploy**
5. ✅ Il sito è online!
6. URL automatico assegnato

---

### Opzione 4: Hosting Locale (Locale senza Server)

Se vuoi solo aprire il sito dal computer:
1. Fai doppio click su `index.html`
2. Si apre nel browser predefinito
3. **Tutto funziona offline!**

⚠️ **Nota:** Se vuoi servire su un server locale (per simulare un vero server):
```bash
# Con Python 3
python -m http.server 8000
# Visita: http://localhost:8000

# Con Python 2
python -m SimpleHTTPServer 8000

# Con Node.js
npx http-server

# Con Ruby
ruby -run -ehttpd . -p8000
```

---

## 📋 Checklist Pre-Deployment

- [ ] Verifica che tutti gli anchor link funzionino
- [ ] Testa il menu mobile (ridimensiona il browser)
- [ ] Controlla che le immagini carichino (se aggiunte)
- [ ] Valida il codice HTML: https://validator.w3.org
- [ ] Testa in almeno 2 browser (Chrome, Firefox)
- [ ] Controlla la velocità di caricamento: https://pagespeed.web.dev
- [ ] Verifica le fonti e i crediti
- [ ] Controlla gli errori della console (F12 → Console)

---

## 🔧 Configurazioni Consigliate

### SEO Basics

Aggiungi nel `<head>` di `index.html`:
```html
<meta name="description" content="Analisi del terremoto Turchia-Siria 2023 attraverso tecnologia satellitare Copernicus">
<meta name="keywords" content="terremoto, turchia, siria, 2023, educazione civica, satellite">
<meta name="author" content="Barile, Lanza, Groppo">
<meta property="og:title" content="Terremoto Turchia-Siria 2023">
<meta property="og:description" content="Analisi e monitoraggio satellitare">
<meta property="og:image" content="URL_immagine">
<meta name="theme-color" content="#1a3a52">
```

### Favicon
Salva un'immagine `favicon.ico` nella root folder e aggiungi:
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

### Analytics (Opzionale)
Per tracciare visite, aggiungi Google Analytics:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXX');
</script>
```

---

## 🐛 Troubleshooting

### Il sito non si carica
- Verifica che i percorsi siano corretti:
  - `assets/style.css` deve essere nella cartella `assets`
  - `assets/script.js` deve essere nella cartella `assets`
- Controlla la console del browser (F12)

### Il menu mobile non funziona
- Assicurati che `assets/script.js` sia caricato
- Controlla che i link nel menu abbiano `href="#sezione"`
- Pulisci la cache del browser (Ctrl+Shift+R)

### Le animazioni non funzionano
- Verifica che `assets/style.css` sia caricato
- Controlla che il browser supporti CSS Animations
- Prova su un browser moderno (Chrome, Firefox, Safari)

### Link non vanno alle giuste sezioni
- Verifica che l'`id` della sezione corrisponda all'`href` del link
- Esempio: `<section id="contesto">` ↔ `<a href="#contesto">`

### Il sito è lento
- Comprimi le immagini (se presenti)
- Minimizza il CSS/JS
- Usa un CDN per le dipendenze
- Abilita la cache del browser

---

## 📦 Struttura dei File Ottimale

```
sito-terremoto/
├── index.html
├── README.md
├── assets/
│   ├── style.css
│   ├── script.js
│   └── images/  (se aggiungi immagini)
│       ├── hero.jpg
│       ├── satellite.jpg
│       └── ...
└── .gitignore (opzionale)
```

### Contenuto di `.gitignore`:
```
node_modules/
.DS_Store
*.log
.env
dist/
build/
```

---

## 🎨 Customizzazione Avanzata

### Cambiare il colore del tema
1. Apri `assets/style.css`
2. Scorri fino a `:root { ... }`
3. Modifica le variabili:
   ```css
   --primary: #1a3a52;      /* Cambia il blu scuro */
   --accent: #e74c3c;       /* Cambia il rosso */
   --secondary: #3498db;    /* Cambia il blu cielo */
   ```

### Aggiungere una nuova sezione
1. Aggiungi l'HTML in `index.html`:
   ```html
   <section id="nuova-sezione" class="content-section section-6">
       <div class="container">
           <!-- contenuto -->
       </div>
   </section>
   ```
2. Aggiungi il link nel menu:
   ```html
   <li><a href="#nuova-sezione" class="nav-link">Nuova Sezione</a></li>
   ```
3. Aggiungi lo stile in `assets/style.css`:
   ```css
   .section-6 { background: var(--bg-light); }
   ```

### Aggiungere immagini
1. Crea una cartella `assets/images/`
2. Copia le immagini lì
3. Aggiungi nel HTML:
   ```html
   <img src="assets/images/mia-immagine.jpg" alt="Descrizione">
   ```
4. **Suggerimento:** Comprimi le immagini online (tinypng.com)

---

## 📱 Test Responsivo

### Chrome DevTools
1. Apri il sito
2. Premi **F12**
3. Clicca sull'icona del telefono (toggle device toolbar)
4. Seleziona vari dispositivi dalla lista
5. Testa il comportamento del menu e degli elementi

### Dispositivi da testare
- iPhone 12 (390 × 844)
- iPad Pro (1024 × 1366)
- Desktop (1920 × 1080)

---

## ✅ Checklist Finale

Prima di dichiarare il sito "pronto":

- [ ] Tutti i link interni funzionano
- [ ] Il sito è responsive (testato su mobile)
- [ ] La navbar si aggancia correttamente
- [ ] Le animazioni sono fluide
- [ ] Nessun errore nella console (F12)
- [ ] I crediti/fonti sono presenti
- [ ] Il footer contiene le informazioni corrette
- [ ] Il testo è corretto (nessun typo)
- [ ] Le immagini (se presenti) caricate correttamente
- [ ] Il loading è veloce (< 3 secondi)
- [ ] Testato in Chrome, Firefox e Safari
- [ ] Mobile menu funziona perfettamente

---

## 📞 Supporto

Se hai problemi:
1. Controlla la console del browser (F12 → Console)
2. Verifica i percorsi dei file
3. Pulisci la cache (Ctrl+Shift+Delete)
4. Prova in incognito/private browsing
5. Chiedi ai tuoi compagni di gruppo
6. Consulta la documentazione ufficiale

---

## 🎉 Congratulazioni!

Il tuo sito educativo è completo e pronto per il mondo! 🌍

**Ricorda:** Un sito ben strutturato e responsivo impressiona sempre gli insegnanti e gli ospiti!

---

**Data:** Maggio 2023  
**Versione:** 1.0  
**Status:** ✅ Ready to Deploy
