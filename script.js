// Baza de date - Branduri Accesibile (Essence, Catrice, L'Oreal, Maybelline)
const budgetProducts = [
    { id: 1, brand: "essence", name: "Balsam buze milky GLAZED 03, 4 ml", price: 13.00, badge: "Nou", img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=500" },
    { id: 2, brand: "essence", name: "Set pentru ridicarea sprâncenelor Brow Lifting Gel, 12 g", price: 20.50, badge: null, img: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?q=80&w=500" },
    { id: 3, brand: "essence", name: "Fond de ten Silky BLUR HYDRA 100, 30 ml", price: 28.00, badge: null, img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=500" },
    { id: 4, brand: "essence", name: "Primer hidratant jelly Grip, 29 ml", price: 20.50, badge: null, img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=500" },
    { id: 13, brand: "CATRICE", name: "Contur stick Sculpt & Charm 010, 5,5 g", price: 25.50, badge: null, img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=500" },
    { id: 14, brand: "CATRICE", name: "Grip Aqua Splash bază de machiaj, 30 ml", price: 25.50, badge: null, img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=500" },
    { id: 23, brand: "L'ORÉAL PARIS", name: "Infaillible 3 second spray pentru fixarea..., 75 ml", price: 59.95, badge: null, img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=500" },
    { id: 24, brand: "L'ORÉAL PARIS", name: "True Match fond de ten 2N, 30 ml", price: 77.95, badge: null, img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=500" },
    { id: 32, brand: "MAYBELLINE NEW YORK", namae: "Lash Sensational Sky High Mascara Black, 7,2 ml", price: 49.95, badge: null, img: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?q=80&w=500" },
    { id: 37, brand: "MAYBELLINE NEW YORK", name: "Superstay Vinyl Ink ruj lichid 35 Cheeky, 4,2 ml", price: 67.50, badge: null, img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=500" }
];

// Baza de date - Branduri de Lux
const luxuryProducts = [
    { id: 101, brand: "DIOR", name: "Dior Forever Skin Perfect fond de ten stick multifuncțional", variant: "1 N Neutral (10 g)", price: 325.00, badge: null, img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=500", shades: "Disponibil în 25 nuanțe" },
    { id: 102, brand: "DIOR", name: "Rouge Dior On Stage Matte – Ruj cu finisaj mat", variant: "380 Nude Ultra (2 g)", price: 256.00, badge: "Noutate", img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=500", shades: "Disponibil în 6 nuanțe" },
    { id: 104, brand: "HUDA BEAUTY", name: "Easy Bake Loose Baking & Setting Powder", variant: "Pound Cake (20 g)", price: 217.00, badge: "Exclusiv EmmDor", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=500", shades: "Disponibil în 11 nuanțe" },
    { id: 106, brand: "Rare Beauty", name: "Soft Pinch Liquid Blush Fard de obraz", variant: "Grateful (7,5 ml)", price: 153.00, badge: "Hot on social", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=500", shades: "Disponibil în 14 nuanțe" },
    { id: 107, brand: "Too Faced", name: "Chocolate Soleil Stick Crémeux – Stick bronzant si modelator", variant: "Chocolate Mousse (8 g)", price: 175.00, badge: "Exclusiv EmmDor", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=500", shades: "Disponibil în 7 nuanțe" },
    { id: 108, brand: "Fenty Beauty", name: "Gloss Bomb Stix Luciu in stick cu stralucire puternica", variant: "04 - FU$$Y (3,6 g)", price: 135.00, badge: null, img: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=500", shades: "Disponibil în 15 nuanțe" },
    { id: 112, brand: "Yves Saint Laurent", name: "All Hours Foundation Fond de ten", variant: "LN4 (25 ml)", price: 356.00, badge: null, img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=500", shades: "Disponibil în 24 nuanțe" }
];

// Baza de date - Promoții (-40%)
const promoProducts = [
    { id: 201, brand: "Guerlain", name: "Rouge G Ruj de buze personalizabil", variant: "Velvet - 510 Le Rouge Vibrant (3.5g)", oldPrice: 235.00, price: 141.00, img: "images/guerlain.jpg" },
    { id: 202, brand: "Fenty Beauty", name: "Eaze Blurring Skin Tint Fond de ten", variant: "1 (32 ml)", oldPrice: 196.00, price: 117.60, img: "images/fond_de_ten_fenty.jpg" },
    { id: 206, brand: "Huda Beauty", name: "Nude Obsessions Eyeshadow Palette Mini paleta de farduri", variant: "Light (10 g)", oldPrice: 175.00, price: 105.00, img: "images/paleta_huda.jpg" },
    { id: 208, brand: "CHARLOTTE TILBURY", name: "Unreal Skin Sheer Glow Tint Fond de ten hidratant stick", variant: "1 Fair (8 g)", oldPrice: 260.00, price: 156.00, img: "images/charlotte_tillbury.jpg" }
];

// Toate produsele la un loc
const allProducts = [...luxuryProducts, ...budgetProducts, ...promoProducts];

let favorites = JSON.parse(localStorage.getItem('emmdor_favorites')) || [];
let cart = JSON.parse(localStorage.getItem('emmdor_cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    updateBadges();
    setupSearch();
    markActiveFavorites();
});

function updateBadges() {
    const favBadge = document.getElementById('fav-count');
    const cartBadge = document.getElementById('cart-count');
    if (favBadge) favBadge.innerText = favorites.length;
    if (cartBadge) {
        const totalItems = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
        cartBadge.innerText = totalItems;
    }
}

// Căutare Live în Header
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length < 2) {
            searchResults.style.display = 'none';
            searchResults.innerHTML = '';
            return;
        }

        const filtered = allProducts.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.brand.toLowerCase().includes(query)
        );

        if (filtered.length === 0) {
            searchResults.innerHTML = '<div class="no-results">Niciun produs găsit.</div>';
        } else {
            searchResults.innerHTML = filtered.map(p => `
                <div class="search-item" onclick="goToProduct(${p.id})">
                    <img src="${p.img}" alt="${p.name}">
                    <div class="search-item-info">
                        <span class="search-brand">${p.brand}</span>
                        <span class="search-name">${p.name}</span>
                    </div>
                    <span class="search-price">${p.price.toFixed(2)} LEI</span>
                </div>
            `).join('');
        }
        searchResults.style.display = 'block';
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box')) {
            searchResults.style.display = 'none';
        }
    });
}

function goToProduct(id) {
    window.location.href = `produs_detaliu.html?id=${id}`;
}

function toggleFavorite(id) {
    const product = allProducts.find(p => p.id === id);
    if (!product) return;

    const index = favorites.findIndex(item => item.id === id);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(product);
    }

    localStorage.setItem('emmdor_favorites', JSON.stringify(favorites));
    updateBadges();
    markActiveFavorites();

    if (window.location.pathname.includes('favorite.html')) {
        renderFavoritesPage();
    }
}

function markActiveFavorites() {
    document.querySelectorAll('.product-card').forEach(card => {
        const id = parseInt(card.getAttribute('data-id'));
        const btn = card.querySelector('.fav-btn');
        if (btn) {
            const isFav = favorites.some(item => item.id === id);
            if (isFav) {
                btn.classList.add('active');
                btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
            } else {
                btn.classList.remove('active');
                btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
            }
        }
    });
}

function addToCart(id) {
    const product = allProducts.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem('emmdor_cart', JSON.stringify(cart));
    updateBadges();
    alert(`"${product.name}" a fost adăugat în coș!`);

    if (window.location.pathname.includes('cos.html')) {
        renderCartPage();
    }
}

function updateCartQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
    }
    localStorage.setItem('emmdor_cart', JSON.stringify(cart));
    updateBadges();
    renderCartPage();
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    localStorage.setItem('emmdor_cart', JSON.stringify(cart));
    updateBadges();
    renderCartPage();
}
