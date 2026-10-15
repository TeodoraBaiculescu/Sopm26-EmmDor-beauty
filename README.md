markdown
# Glow Studio - Magazin Online Makeup

## Membrii echipei
- [Nițu Delia Elena]
- [Carabelea Emma]
- [Baiculescu Teodora]

## Descriere și Așteptările Echipei
Glow Studio este o platformă web dedicată produselor cosmetice. Așteptările noastre pentru acest proiect sunt să construim o interfață modernă, intuitivă și rapidă, care să ofere o experiență de navigare fluidă pe orice dispozitiv. Ne propunem să simulăm un magazin online real, unde catalogul de produse se actualizează dinamic, ajutându-ne astfel să înțelegem practic conectarea unei interfețe web la un serviciu extern.

## Așteptările Profesorului (Cerințe de Laborator)
Conform cerințelor disciplinei, proiectul trebuie să îndeplinească următoarele criterii tehnice și organizatorice:
- **Design Web:** Realizarea unui site static cu minimum 3 pagini, meniu de navigație comun și design responsive[cite: 1].
- **Flux de lucru Git:** Utilizarea colaborativă a Git-ului prin branch-uri personale (ex. `student/delia-nitu`), fără commit-uri directe pe `main`, integrarea făcându-se exclusiv prin Pull Request / Merge Request[cite: 3, 21].
- **Integrare API:** Selectarea și documentarea unui API extern public, identificarea endpoint-ului și a datelor utile, plus tratarea stărilor de rețea (Loading, Success, Empty, Error)[cite: 10, 21].

## Template selectat
Template 1 - Aplicație de căutare / Catalog de produse[cite: 15].

## API selectat
- **Nume API:** Makeup API
- **Furnizor:** herokuapp.com
- **Documentație:** http://makeup-api.herokuapp.com/
- **Endpoint propus:** `https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`[cite: 18]
- **Metodă HTTP:** GET[cite: 18]
- **Necesită autentificare:** Nu[cite: 18]
- **Metoda de autentificare:** Acces public gratuit, fără token[cite: 18]
- **Cheie solicitată de la furnizor:** Nu[cite: 18]

## Exemplu de request
`GET https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`[cite: 18]

## Date utilizate din răspuns
- `name` (numele produsului)[cite: 18]
- `brand` (marca produsului)[cite: 18]
- `price` (prețul)[cite: 18]
- `api_featured_image` (imaginea de previzualizare)[cite: 18]

## Rezultatul testării request-ului
- **Data testării:** 2026-10-15[cite: 18]
- **Cod HTTP sau mesajul de eroare:** 200 OK[cite: 18]
- **Observații:** Răspunsul este returnat rapid în format JSON valid și conține o listă de obiecte cu detaliile produselor pentru brandul selectat[cite: 19].

## Funcționalități
- Pagină principală de prezentare (Hero banner și recomandări)[cite: 19].
- Catalog interactiv cu filtrare a produselor cosmetice în funcție de brand, încărcate dinamic din API[cite: 15, 19].
- Formular de contact pentru suport clienți[cite: 19].
- Meniu de navigație comun și design adaptabil (responsive) pentru mobil și desktop[cite: 1, 19].

## Gestionarea stărilor
- **Loading:** Afișarea unui mesaj informativ ("Se încarcă produsele...") în timpul procesării request-ului HTTP[cite: 19].
- **Success:** Popularea grilei HTML cu imaginile, titlurile și prețurile produselor primite din API[cite: 19].
- **Empty:** Afișarea unui mesaj specific ("Nu a fost găsit niciun produs") dacă API-ul returnează o listă goală pentru filtrul aplicat[cite: 19].
- **Error:** Notificare vizuală de eroare în cazul în care conexiunea la internet pică sau serverul API nu răspunde[cite: 19].

## Responsabilități
- **Nițu Delia Elena:** Configurarea inițială a proiectului pe Git, implementarea paginii principale (`index.html`), crearea meniului de navigație comun și redactarea fișierului CSS (`style.css`) pentru a asigura un design responsive unitar[cite: 19].
- **[Nume Coleg 2]:** Implementarea paginii de catalog (`produse.html`), scrierea logicii JavaScript (`app.js`) pentru apelul HTTP către Makeup API și tratarea dinamică a stărilor (Loading, Success, Empty, Error)[cite: 19].
- **[Nume Coleg 3]:** Dezvoltarea paginii de asistență (`contact.html`), crearea structurii formularului de contact, completarea și formatarea acestui fișier `README.md` și asistență la verificarea conflictelor de cod (Pull Requests)[cite: 19].

## Instrucțiuni de configurare și rulare
1. Se clonează repository-ul local folosind comanda `git clone`.
2. Se deschide folderul proiectului într-un editor de cod (ex. Visual Studio Code).
3. Fișierele statice (HTML/CSS/JS) pot fi rulate direct prin dublu-click pe fișierul `index.html` pentru a fi deschis în orice browser modern, sau utilizând extensia "Live Server" din VS Code pentru auto-reîncărcare.
4. Pentru a testa funcționalitatea API-ului, asigurați-vă că aveți o conexiune activă la internet, apoi navigați către pagina "Produse" din meniul aplicației[cite: 19].