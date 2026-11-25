<div align="center">

# ✨ EmmDor Beauty — aplicația web React

Magazin online de machiaj și îngrijire personală, construit ca **SPA React** pe baza laboratoarelor 4 și 5 SOPM, adaptat pentru site-ul EmmDor Beauty.

</div>

## 🎯 Cerințe acoperite

| Cerință | Unde se găsește în cod |
| --- | --- |
| **1. Structură SPA** | `src/App.jsx` definește `<BrowserRouter>` cu `<Routes>`; `src/components/Layout.jsx` conține header/footer comuni și `<Outlet />` pentru pagini. Navigarea nu reîncarcă pagina. |
| **2. Minim 3 componente** | 20 de componente în `src/components/` (`Layout`, `Acasa`, `Produse`, `ProductCard`, `ProdusDetaliu`, `Cos`, `Checkout`, `Favorite`, `Contact`, `CatalogNote` etc.), plus hook-ul `useLocalStorage`. Datele circulă prin `props`, iar modificările prin callback-uri (`addToCart`, `toggleFavorite`). |
| **3. Consum de date dintr-un API** | `src/api/beautyFacts.js` folosește `fetch` către API-ul public **Open Beauty Facts** (fără cheie). Este consumat în `Layout.jsx` (sugestii live în căutare), `CatalogNote.jsx` (numărul de produse pe brand) și `ProdusDetaliu.jsx` (catalogul brandului). Sunt tratate stările *loading / error / gol*, cu `AbortController` și debounce. |

Din laboratorul 4/5 sunt acoperite și: JSX, componente funcționale, `props`, `useState`/`useEffect`, formulare controlate cu validare, liste cu `key` stabil, actualizări imutabile ale stării, persistență în `localStorage`, rute React Router, stilizare responsivă și accesibilă, precum și build de producție.

## 🛠️ Tehnologii

* **React 19** + **React DOM** (interfață, stare, evenimente)
* **React Router DOM 6** (rutare SPA, 16 pagini + pagină 404)
* **Parcel 2** (bundler pentru dezvoltare și build)
* **HTML5 / CSS3** (layout responsiv, animații, contrast accesibil)
* **Open Beauty Facts API** (date externe, `fetch` + cache în memorie)
* **LocalStorage** (coș și favorite, chei `emmdor:cart` / `emmdor:favorites`)

## 📁 Structură

```text
aplicatia-parcel/
├── index.html              # elementul #root
├── package.json            # scripturile dev / build / preview
├── serve-dist.cjs          # server static pentru dist/ (cu fallback SPA)
├── style.css               # stilurile aplicației
└── src/
    ├── main.jsx            # createRoot
    ├── App.jsx             # starea globală + rutele SPA
    ├── api/beautyFacts.js  # integrarea API-ului public
    ├── hooks/useLocalStorage.js
    ├── utils/format.js
    ├── assets/             # imaginile produselor
    └── components/         # cele 20 de componente React
```

## ▶️ Cum rulezi

```powershell
cd "C:\Users\ACER\Desktop\an 4\SOPM\Sopm26-EmmDor-beauty\aplicatia-parcel"
npm install
npm run dev
```

Deschide adresa afișată în terminal (de obicei `http://localhost:1234`). Pentru versiunea de producție:

```powershell
npm run build
npm run preview
```

`npm run build` generează `dist/`; `npm run preview` servește build-ul la `http://localhost:3000` și trimite rutele necunoscute către `index.html`, ca reîncărcarea unei pagini secundare să nu dea 404.

> Nu deschide `index.html` prin dublu-click: modulele JS au nevoie de un server HTTP.

## ✨ Funcționalități

* Catalog împărțit în branduri accesibile, luxury și promoții, cu filtrare și căutare sincronizată cu URL-ul (`?q=...`).
* Selector de nuanțe și carduri de produs cu adăugare în coș / favorite.
* Coș complet (cantități, eliminare, totaluri) și checkout cu validarea câmpurilor.
* Formular de contact controlat, cu mesaje de eroare și confirmare.
* Căutare live: produse locale + sugestii din catalogul mondial Open Beauty Facts.
* Pagini informaționale (despre noi, lounge, cariere, livrare, plată, retur) și notificări `toast`.
* Interfață accesibilă: elemente semantice, `label`/`htmlFor`, `alt`, skip-link, focus vizibil.

## 👥 Echipa

* **Baiculescu Teodora** — UI/UX & arhitectură
* **Carabelea Emma** — flux utilizator, coș și cont
* **Nițu Delia** — date dinamice și logică de componente

## 📦 Versiunea veche

Site-ul inițial, static (HTML + CSS + JavaScript), este păstrat în [`../arhiva-html`](../arhiva-html/README.md) pentru comparație.
