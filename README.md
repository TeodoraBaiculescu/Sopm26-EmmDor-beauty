# Glow Studio - Magazin Online Makeup 

## Membrii echipei
- Nițu Delia
- Carabelea Emma
- Baiculescu Teodora

## Descriere
Glow Studio este o platformă web de cosmetice inspirată de experiența Sephora. Utilizatorii pot explora catalogul de machiaj, pot vizualiza detaliile produselor (nume, brand, preț, descriere), pot adăuga articole în coșul de cumpărături, pot plasa comenzi și primesc un e-mail de confirmare a procesării comenzii.

## Template selectat
Template 1 - Aplicație de căutare / Catalog cu produse[cite: 15].

## API selectat
- *Nume API:* Makeup API
- *Furnizor:* herokuapp.com
- *Documentație:* http://makeup-api.herokuapp.com/
- *Endpoint propus:* https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline[cite: 18]
- *Metodă HTTP:* GET[cite: 18]
- *Necesită autentificare:* Nu[cite: 18]
- *Metoda de autentificare:* Fără cheie API (acces public)[cite: 18]
- *Cheie solicitată de la furnizor:* Nu[cite: 18]

## Exemplu de request
GET https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline[cite: 18]

## Date utilizate din răspuns
- name (nume produs)[cite: 18]
- brand (brand)[cite: 18]
- price (preț)[cite: 18]
- description (descriere produs)[cite: 18]
- api_featured_image (imagine produs)[cite: 18]

## Rezultatul testării request-ului
- *Data testării:* 2026-10-15[cite: 18]
- *Cod HTTP:* 200 OK[cite: 18]
- *Observații:* Răspunsul este primit complet în format JSON, cu lista produselor și detaliile aferente[cite: 19].

## Funcționalități
- Pagină principală cu promoții și meniu de navigație responsive[cite: 1, 19];
- Catalog de produse încărcat din Makeup API cu filtrare după brand[cite: 15, 19];
- Adăugare produse în coșul de cumpărături și calcul total;
- Formular de plasare a comenzii și trimitere automată de e-mail de confirmare ("Comanda ta a fost procesată");
- Formular de contact și asistență[cite: 19].

## Gestionarea stărilor
- *Loading:* Mesaj de încărcare afișat în timp ce se preiau produsele din API[cite: 19].
- *Success:* Afișarea grilei de produse cu imagini, denumiri, prețuri și descrieri[cite: 19].
- *Empty:* Mesaj afișat dacă nu există produse pentru selecția aleasă[cite: 19].
- *Error:* Alertă vizuală în cazul unei erori de rețea sau de server[cite: 19].

## Responsabilități
- *Nițu Delia:* Structura de bază a site-ului, pagina principală (index.html), meniul comun și stilizarea responsive (style.css)[cite: 1, 19].
- *Carabelea Emma:* Integrarea Makeup API în pagina de produse (produse.html), afișarea datelor și logica coșului de cumpărături[cite: 19].
- *Baiculescu Teodora:* Pagina de finalizare comandă și contact (contact.html), logica de trimitere a e-mailului de confirmare și redactarea README.md[cite: 19].

## Instrucțiuni de configurare și rulare
1. Clonați proiectul cu git clone URL_REPOSITORY[cite: 5].
2. Deschideți folderul în Visual Studio Code[cite: 5].
3. Rulați index.html direct în browser sau cu extensia Live Server.
4. Pentru încărcarea produselor din API este necesară o conexiune la internet[cite: 19].