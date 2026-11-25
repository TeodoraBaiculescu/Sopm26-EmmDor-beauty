<div align="center">

# ✨ EmmDor Beauty — proiect SOPM 2026

Magazin online de machiaj și îngrijire personală, dezvoltat ca proiect universitar. Repozitoriul conține **versiunea React (activă)** și **arhiva HTML/CSS/JS** (versiunea inițială, păstrată pentru comparație).

</div>

## 🎯 Cerințele proiectului (aplicația web React)

| # | Cerință | Unde se găsește |
| --- | --- | --- |
| 1 | **Structură SPA** | `aplicatia-parcel/src/App.jsx` — `BrowserRouter` + `Routes` cu 16 pagini și pagină 404; `aplicatia-parcel/src/components/Layout.jsx` — header/footer comun și `<Outlet />`. |
| 2 | **Minim 3 componente** | 20 de componente în `aplicatia-parcel/src/components/` (`Layout`, `Acasa`, `Produse`, `ProductCard`, `ProdusDetaliu`, `Cos`, `Checkout`, `Favorite`, `Contact`, `CatalogNote` etc.), date transmise prin `props` și callback-uri. |
| 3 | **Consum de date dintr-un API** | `aplicatia-parcel/src/api/beautyFacts.js` — `fetch` către API-ul public **Open Beauty Facts**, folosit în `Layout.jsx`, `CatalogNote.jsx` și `ProdusDetaliu.jsx`, cu stări *loading / error / gol*, debounce și `AbortController`. |

Laboratorul 4 (JSX, `useState`, formulare controlate, liste cu `key`, evenimente) și laboratorul 5 (rutare, `localStorage`, API, verificare și build de producție) sunt acoperite în codul aplicației React.

## 📁 Structura repozitoriului

```text
Sopm26-EmmDor-beauty/
├── README.md                 # acest fișier
├── aplicatia-parcel/         # aplicația React (Parcel) — VERSIUNEA ACTIVĂ
│   ├── README.md             # documentația aplicației React
│   ├── index.html
│   ├── package.json
│   ├── serve-dist.cjs
│   ├── style.css
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── api/beautyFacts.js
│       ├── hooks/useLocalStorage.js
│       ├── utils/format.js
│       ├── assets/
│       └── components/
└── arhiva-html/              # site-ul static inițial (HTML + CSS + JS)
    ├── README.md
    ├── *.html
    ├── style.css
    ├── script.js
    └── server.js
```

## ▶️ Cum rulezi

### Versiunea React (recomandată)

Din **rădăcina proiectului** (scripturile `dev`/`build`/`preview` apelează aplicația din `aplicatia-parcel`):

```powershell
cd "C:\Users\ACER\Desktop\an 4\SOPM\Sopm26-EmmDor-beauty"
npm run dev
```

Serverul de dezvoltare afișează adresa în terminal (de obicei `http://localhost:1234`).

Dacă vrei să lucrezi direct în subfolder:

```powershell
cd aplicatia-parcel
npm install
npm run dev
```

Pentru versiunea de producție, rulează `npm run build`, apoi `npm run preview` (din rădăcină sau din `aplicatia-parcel`).

Build-ul este generat în `dist/`, iar `npm run preview` îl servește la `http://localhost:3000` cu fallback SPA pentru rute precum `/produs/101`.

### Versiunea statică (arhivă)

```powershell
cd "C:\Users\ACER\Desktop\an 4\SOPM\Sopm26-EmmDor-beauty\arhiva-html"
node server.js
```

Apoi deschide `http://localhost:4000`.

> Nu deschide fișierele `.html` prin dublu-click: modulele JS și imaginile au nevoie de un server HTTP.

## ✨ Funcționalități

* Catalog cu produse accesibile, luxury și promoții; căutare și filtrare sincronizate cu URL-ul (`?q=...`).
* Selector de nuanțe, coș cu cantități și totaluri, favorite, checkout și formular de contact cu validare.
* Sugestii live din catalogul mondial Open Beauty Facts, alături de produsele locale.
* Persistență în `localStorage` pentru coș (`emmdor:cart`) și favorite (`emmdor:favorites`).
* Interfață responsivă și accesibilă: elemente semantice, etichete de formular, `alt`, skip-link, focus vizibil.
* Pagini informaționale: despre noi, Emma Carabelea Beauty Lounge, cariere, livrare, plată, retur.

## 🛠️ Tehnologii

* **React 19**, **React Router DOM 6**, **Parcel 2**
* **HTML5 / CSS3**, JavaScript (ES modules)
* **Open Beauty Facts API** (date externe, fără cheie)
* **LocalStorage** (persistență locală)
* **Git / GitHub** (controlul versiunilor)

> Nu există chei secrete în codul frontend; API-ul folosit este public.

## 👥 Echipa

* **Baiculescu Teodora** — UI/UX & arhitectură
* **Carabelea Emma** — flux utilizator, coș și cont
* **Nițu Delia** — date dinamice și logică de componente

## ✅ Verificări

* `npm run build` — finalizat cu succes.
* `npm run dev` — rutele `/`, `/produse`, `/produs/101` răspund `200`.
* Arhiva HTML rămâne disponibilă separat, prin `node server.js`.
