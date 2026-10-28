// ==========================================
// 1. BRANDURI ACCESIBILE
// ==========================================
const budgetProducts = [
    { 
        id: 1, brand: "essence", name: "Balsam buze milky GLAZED 03, 4 ml", price: 13.00, badge: "Nou", img: "essence_gloss.jpg",
        details: "Balsam de buze hrănitor cu o textură lăptoasă care oferă un finisaj ultra-lucios, semi-transparent. Hidratează intens, oferind buzelor un aspect plin, fără a fi lipicios.",
        ingredients: "POLYISOBUTENE, CAPRYLIC/CAPRIC TRIGLYCERIDE, TOCOPHERYL ACETATE, PRUNUS AMYGDALUS DULCIS (SWEET ALMOND) OIL, PARFUM.",
        shades: [ 
            { name: "01 Milky Pink", color: "#f7b5b5" }, 
            { name: "02 Berry Glaze", color: "#9f3d5e" }, 
            { name: "03 Toffee Shine", color: "#c18266" },
            { name: "04 Clear Glass", color: "#fdfdfd" },
            { name: "05 Peach Shimmer", color: "#f5a88c" }
        ],
        reviews: [
            { user: "Andreea M.", rating: 5, text: "Miroase divin și lasă buzele super hidratate! Îl port zilnic." },
            { user: "Corina S.", rating: 4, text: "Un dupe foarte bun pentru gloss-urile scumpe." }
        ]
    },
    { 
        id: 2, brand: "essence", name: "Set pentru ridicarea sprâncenelor Brow Lifting Gel, 12 g", price: 20.50, badge: null, img: "sprancene_essence.jpg",
        details: "Gel transparent pentru fixare extremă. Creează efectul de laminare profesională a sprâncenelor în câteva secunde, rezistând întreaga zi.",
        ingredients: "AQUA, PVP, PROPYLENE GLYCOL, PANTHENOL, ACRYLATES COPOLYMER, PHENOXYETHANOL.",
        shades: [ 
            { name: "01 Clear (Transparent)", color: "#f0f0f0" },
            { name: "02 Blonde", color: "#d2b48c" },
            { name: "03 Soft Brown", color: "#8b5a2b" },
            { name: "04 Dark Brown", color: "#4a3018" },
            { name: "05 Ashy Black", color: "#2d2d2d" }
        ],
        reviews: [
            { user: "Diana T.", rating: 5, text: "Cele mai fixate sprâncene pe care le-am avut vreodată. Efect real de laminare!" }
        ]
    },
    { 
        id: 3, brand: "essence", name: "Fond de ten Silky BLUR HYDRA 100, 30 ml", price: 28.00, badge: null, img: "silky_blur_essence.jpg",
        details: "Fond de ten fluid cu efect de estompare a porilor (blur) și acid hialuronic. Oferă acoperire medie și un aspect de piele netedă.",
        ingredients: "AQUA, CYCLOPENTASILOXANE, GLYCERIN, SODIUM HYALURONATE, NIACINAMIDE, TITANIUM DIOXIDE.",
        shades: [ 
            { name: "05 Porcelain", color: "#fdf0e3" },
            { name: "10 Light Vanilla", color: "#f5e2cb" }, 
            { name: "20 Soft Sand", color: "#e8cba6" }, 
            { name: "30 Warm Honey", color: "#d9ae7e" },
            { name: "40 Deep Mocha", color: "#8a5a44" }
        ],
        reviews: [
            { user: "Ioana P.", rating: 4, text: "Arată foarte natural, nu încarcă tenul deloc." }
        ]
    },
    { 
        id: 4, brand: "essence", name: "Primer hidratant jelly Grip, 29 ml", price: 20.50, badge: null, img: "jelly_grip.jpg",
        details: "Bază de machiaj tip jeleu care creează o textură aderentă (grip) pentru a prinde fondul de ten și a-i prelungi rezistența.",
        ingredients: "AQUA, GLYCERIN, BUTYLENE GLYCOL, PEG-240/HDI COPOLYMER, ALOE BARBADENSIS LEAF JUICE.",
        shades: [ 
            { name: "Clear Grip", color: "#d1f2e6" },
            { name: "Green (Anti-Redness)", color: "#c1e1c1" },
            { name: "Peach (Brightening)", color: "#ffdac1" },
            { name: "Lavender (Anti-Dullness)", color: "#e2d1f9" },
            { name: "Yellow (Neutralizing)", color: "#fdfd96" }
        ],
        reviews: [
            { user: "Elena B.", rating: 5, text: "Machiajul meu nu s-a mișcat toată noaptea! Cel mai bun primer." }
        ]
    },
    { 
        id: 13, brand: "CATRICE", name: "Contur stick Sculpt & Charm 010, 5,5 g", price: 25.50, badge: null, img: "catrice_bronzer.jpg",
        details: "Stick cremos de contur care se estompează impecabil, lăsând un efect natural de umbră pe față, pentru o sculptare perfectă.",
        ingredients: "CAPRYLIC/CAPRIC TRIGLYCERIDE, SILICA, MICROCRYSTALLINE WAX, TOCOPHEROL.",
        shades: [ 
            { name: "010 Light Cool", color: "#bfa38a" }, 
            { name: "020 Medium Warm", color: "#a57d5e" },
            { name: "030 Tan Neutral", color: "#8c5c3e" },
            { name: "040 Deep Cool", color: "#6b442a" },
            { name: "050 Rich Espresso", color: "#4a2c18" }
        ],
        reviews: [
            { user: "Roxana", rating: 5, text: "Se estompează ca un vis. Nuanța 010 este o umbră perfectă, rece." }
        ]
    },
    { 
        id: 14, brand: "CATRICE", name: "Grip Aqua Splash bază de machiaj, 30 ml", price: 25.50, badge: null, img: "catrice_primer.jpg",
        details: "Un primer cu textură apoasă care revitalizează tenul și creează o bază hidratantă perfectă pentru machiaj.",
        ingredients: "AQUA, GLYCERIN, PANTHENOL, CITRIC ACID, SODIUM BENZOATE, PARFUM.",
        shades: [ 
            { name: "Aqua Clear", color: "#e0f7fa" },
            { name: "Rose Glow", color: "#ffe4e1" },
            { name: "Mint Calm", color: "#f5fffa" },
            { name: "Peach Fresh", color: "#ffebcd" },
            { name: "Lavender Dew", color: "#f8f8ff" }
        ],
        reviews: [
            { user: "Simona", rating: 4, text: "Foarte revigorant dimineața, se absoarbe rapid." }
        ]
    },
    { 
        id: 23, brand: "L'ORÉAL PARIS", name: "Infaillible 3 second spray pentru fixarea machiajului, 75 ml", price: 59.95, badge: null, img: "loreal_infaillible.jpg",
        details: "Spray de fixare micro-difuzat care blochează machiajul în doar 3 secunde. Rezistență extremă la transfer, apă și transpirație.",
        ingredients: "ALCOHOL DENAT., DIMETHYL ETHER, AQUA, VA/CROTONATES/VINYL NEODECANOATE COPOLYMER.",
        shades: [
            { name: "Original Matte", color: "#ffffff" },
            { name: "Dewy Finish", color: "#f0f8ff" },
            { name: "Luminous Glow", color: "#fffacd" },
            { name: "Rose Scented", color: "#fff0f5" },
            { name: "Coconut Hydration", color: "#fdf5e6" }
        ],
        reviews: [
            { user: "Laura M.", rating: 5, text: "Incredibil! Machiajul meu a rămas intact toată noaptea." }
        ]
    },
    { 
        id: 24, brand: "L'ORÉAL PARIS", name: "True Match fond de ten 2N, 30 ml", price: 77.95, badge: null, img: "loreal_true_match.jpg",
        details: "Fond de ten infuzat cu acid hialuronic, creat pentru a se potrivi perfect cu nuanța și textura pielii tale.",
        ingredients: "AQUA, DIMETHICONE, ISODODECANE, GLYCERIN, PEG-10 DIMETHICONE, SODIUM HYALURONATE.",
        shades: [ 
            { name: "1N Ivory", color: "#faecd8" }, 
            { name: "2N Vanilla", color: "#f0d8bd" }, 
            { name: "3W Golden Beige", color: "#e3bf96" },
            { name: "4C Rose Natural", color: "#d6a583" },
            { name: "5W Golden Sand", color: "#c89468" }
        ],
        reviews: [
            { user: "Cristina", rating: 5, text: "Pielea respiră și arată luminos. Recomand!" }
        ]
    },
    { 
        id: 32, brand: "MAYBELLINE NEW YORK", name: "Lash Sensational Sky High Mascara Black, 7,2 ml", price: 49.95, badge: null, img: "maybelline_sky_high.jpg",
        details: "Rimelul fenomenal care oferă alungire extremă și volum fără limite. Peria flexibilă ajunge la fiecare geană.",
        ingredients: "AQUA, PROPYLENE GLYCOL, STYRENE/ACRYLATES/AMMONIUM METHACRYLATE COPOLYMER.",
        shades: [ 
            { name: "01 Black", color: "#111111" },
            { name: "02 Very Black", color: "#000000" },
            { name: "03 Brownish Black", color: "#3b2f2f" },
            { name: "04 Burgundy", color: "#4a0404" },
            { name: "05 Navy Blue", color: "#000080" }
        ],
        reviews: [
            { user: "Carmen", rating: 5, text: "Genial! Genele mele arată ca și cum aș avea extensii." }
        ]
    },
    { 
        id: 37, brand: "MAYBELLINE NEW YORK", name: "Superstay Vinyl Ink ruj lichid 35 Cheeky, 4,2 ml", price: 67.50, badge: null, img: "maybelline_ruj.jpg",
        details: "Ruj lichid cu rezistență de până la 16 ore care oferă un finisaj tip vinyl, lucios, fără să se transfere. Agitați bine!",
        ingredients: "ISODODECANE, DIMETHICONE, TRIMETHYLSILOXYSILICATE, POLYMETHYLSILSESQUIOXANE.",
        shades: [ 
            { name: "15 Peachy", color: "#d88c7e" },
            { name: "35 Cheeky", color: "#c97a7e" }, 
            { name: "50 Wicked", color: "#b31b2c" },
            { name: "10 Lippy", color: "#8a2b3b" },
            { name: "100 Unrivaled", color: "#541624" }
        ],
        reviews: [
            { user: "Alina D.", rating: 5, text: "Dacă îl agiți bine, nu se ia pe pahar. Luciu superb!" }
        ]
    }
];

// ==========================================
// 2. BRANDURI DE LUX
// ==========================================
const luxuryProducts = [
    { 
        id: 101, brand: "DIOR", name: "Dior Forever Skin Perfect fond de ten stick", variant: "1 N Neutral (10 g)", price: 325.00, badge: null, img: "dior_forever_skin.jpg", 
        details: "Primul stick multifuncțional Dior cu rezistență de lungă durată și efect estompator natural.",
        ingredients: "SQUALANE, CERA ALBA, SILICA, JOJOBA ESTERS, POLYGLYCERYL-2 TRIISOSTEARATE.",
        shades: [ 
            { name: "0 N Neutral", color: "#f8eedf" },
            { name: "1 N Neutral", color: "#f3e1cb" }, 
            { name: "2 N Neutral", color: "#e4c6a6" },
            { name: "3 N Neutral", color: "#d4a97c" },
            { name: "4 N Neutral", color: "#bc8456" }
        ],
        reviews: [ { user: "Emma", rating: 5, text: "Ușor de aplicat, finish impecabil." } ]
    },
    { 
        id: 102, brand: "DIOR", name: "Rouge Dior On Stage Matte – Ruj cu finisaj mat", variant: "380 Nude Ultra (2 g)", price: 256.00, badge: "Noutate", img: "dior_on_stage_ruj.jpg", 
        details: "Ruj couture îmbogățit cu îngrijire florală. Oferă o culoare intensă, mată, cu un confort de durată.",
        ingredients: "POLYGLYCERYL-2 TRIISOSTEARATE, DIMETHICONE, HELIANTHUS ANNUUS SEED WAX.",
        shades: [ 
            { name: "100 Nude Look", color: "#dda79d" },
            { name: "380 Nude Ultra", color: "#d69888" },
            { name: "720 Icone", color: "#a54546" },
            { name: "999 Iconic Red", color: "#ba000d" },
            { name: "840 Rayonnante", color: "#8c2e28" }
        ],
        reviews: [ { user: "Teodora B.", rating: 5, text: "Nuanța perfectă, nu usucă buzele deloc." } ]
    },
    { 
        id: 104, brand: "HUDA BEAUTY", name: "Easy Bake Loose Baking & Setting Powder", variant: "Pound Cake (20 g)", price: 217.00, badge: "Exclusiv", img: "huda_pudra.jpg", 
        details: "Pudră liberă ultra-fină concepută pentru baking și fixare. Absoarbe strălucirea.",
        ingredients: "TALC, SYNTHETIC FLUORPHLOGOPITE, SILICA, DIMETHICONE.",
        shades: [ 
            { name: "Sugar Cookie", color: "#ffffff" },
            { name: "Pound Cake", color: "#f5e6cd" }, 
            { name: "Cherry Blossom", color: "#fce1e8" },
            { name: "Banana Bread", color: "#f5d794" },
            { name: "Blondie", color: "#d2a15c" }
        ],
        reviews: [ { user: "Bianca", rating: 5, text: "Cea mai bună pudră!" } ]
    },
    { 
        id: 106, brand: "Rare Beauty", name: "Soft Pinch Liquid Blush Fard de obraz", variant: "Grateful (7,5 ml)", price: 153.00, badge: "Hot on social", img: "rare_beauty_blush.jpg", 
        details: "Fard de obraz lichid, extrem de pigmentat, care se estompează fără efort.",
        ingredients: "ISODODECANE, SILICA, MICA, DIMETHICONE.",
        shades: [ 
            { name: "Grateful (True Red)", color: "#c41e3a" }, 
            { name: "Hope (Nude Mauve)", color: "#cf7d7b" },
            { name: "Joy (Dewy Peach)", color: "#e87a5d" },
            { name: "Bliss (Matte Nude)", color: "#d98c8c" },
            { name: "Believe (True Mauve)", color: "#9a5b6e" }
        ],
        reviews: [ { user: "Alexandra", rating: 5, text: "Foarte pigmentat!" } ]
    },
    { 
        id: 107, brand: "Too Faced", name: "Chocolate Soleil Stick Crémeux", variant: "Chocolate Mousse (8 g)", price: 175.00, badge: "Exclusiv", img: "too_faced.jpg", 
        details: "Stick bronzant cu miros de ciocolată! Are o textură cremoasă care se topește în piele.",
        ingredients: "THEOBROMA CACAO (COCOA) SEED BUTTER, SILICA, PARFUM.",
        shades: [ 
            { name: "Milk Chocolate", color: "#a57d5e" },
            { name: "Chocolate Mousse", color: "#8a5a44" },
            { name: "Dark Chocolate", color: "#5c3a21" },
            { name: "Caramel", color: "#b07c4f" },
            { name: "Truffle", color: "#4a2e1b" }
        ],
        reviews: [ { user: "Nicoleta", rating: 4, text: "Miroase incredibil de bine." } ]
    },
    { 
        id: 108, brand: "Fenty Beauty", name: "Gloss Bomb Stix Luciu in stick cu stralucire puternica", variant: "04 - FU$$Y (3,6 g)", price: 135.00, badge: null, img: "fenty_beauty_gloss.jpg", 
        details: "Luciu de buze solid care hidratează și oferă o strălucire explozivă.", 
        ingredients: "DIISOSTEARYL MALATE, SQUALANE, BUTYROSPERMUM PARKII.", 
        shades: [ 
            { name: "01 - Fenty Glow", color: "#cd8573" },
            { name: "04 - FU$$Y", color: "#d97d8b" },
            { name: "05 - Hot Chocolit", color: "#6b3f36" },
            { name: "02 - Sweet Mouth", color: "#f2c6c2" },
            { name: "06 - Glass Slipper", color: "#fdfdfd" }
        ],
        reviews: [ { user: "Irina F.", rating: 5, text: "Strălucește orbitor." } ]
    },
    { 
        id: 112, brand: "Yves Saint Laurent", name: "All Hours Foundation Fond de ten", variant: "LN4 (25 ml)", price: 356.00, badge: null, img: "ysl.jpg", 
        details: "Fond de ten cu acoperire completă și finisaj mat luminos 24H.",
        ingredients: "AQUA, CYCLOPENTASILOXANE, GLYCERIN, SODIUM HYALURONATE.",
        shades: [ 
            { name: "LC1 (Light Cool)", color: "#faebd7" },
            { name: "LN4 (Light Neutral)", color: "#f3e1cb" },
            { name: "LW7 (Light Warm)", color: "#eccba9" },
            { name: "MN1 (Medium Neutral)", color: "#d2a679" },
            { name: "MW2 (Medium Warm)", color: "#c68e58" }
        ],
        reviews: [ { user: "Sofia", rating: 5, text: "Rezistă impecabil." } ]
    }
];

// ==========================================
// 3. PROMOȚII (-40%)
// ==========================================
const promoProducts = [
    { 
        id: 201, brand: "Guerlain", name: "Rouge G Ruj de buze personalizabil", variant: "Velvet - 510 Le Rouge Vibrant", oldPrice: 235.00, price: 141.00, img: "guerlain.jpg",
        details: "Rujul bijuterie Guerlain pentru o culoare vibrantă, rezistentă și catifelată.",
        ingredients: "DIISOSTEARYL MALATE, SYNTHETIC WAX, RESVERATROL.",
        shades: [ 
            { name: "Velvet 510", color: "#b30b22" },
            { name: "Velvet 880", color: "#8b0000" },
            { name: "Satin 214", color: "#e35d6a" },
            { name: "Matte 999", color: "#c82a2a" },
            { name: "Velvet 721", color: "#a52a2a" }
        ],
        reviews: [ { user: "Veronica", rating: 5, text: "Un ruj elegant și pigmentat." } ]
    },
    { 
        id: 202, brand: "Fenty Beauty", name: "Eaze Blurring Skin Tint Fond de ten", variant: "1 (32 ml)", oldPrice: 196.00, price: 117.60, img: "fond_de_ten_fenty.jpg",
        details: "Skin tint lejer care uniformizează tenul și estompează imperfecțiunile.",
        ingredients: "AQUA, DIMETHICONE, GLYCERIN, SODIUM CHLORIDE.",
        shades: [ 
            { name: "1 (Light Cool)", color: "#fdf1e1" },
            { name: "3 (Light Warm)", color: "#f5dec3" },
            { name: "5 (Medium Neutral)", color: "#e6be98" },
            { name: "7 (Tan Warm)", color: "#c89b70" },
            { name: "9 (Deep Cool)", color: "#8a5a44" }
        ],
        reviews: [ { user: "Adelina", rating: 5, text: "Aspect natural, no-makeup." } ]
    },
    { 
        id: 206, brand: "Huda Beauty", name: "Nude Obsessions Eyeshadow Palette", variant: "Light (10 g)", oldPrice: 175.00, price: 105.00, img: "paleta_huda.jpg",
        details: "Mini paletă cu 9 nuanțe neutre extrem de pigmentate.",
        ingredients: "MICA, TALC, DIMETHICONE, SQUALANE.",
        shades: [ 
            { name: "Light Nude", color: "#e3c2b0" },
            { name: "Medium Nude", color: "#b57b64" },
            { name: "Rich Nude", color: "#6b3626" },
            { name: "Coral Obsessions", color: "#ff7f50" },
            { name: "Amethyst Obsessions", color: "#9966cc" }
        ],
        reviews: [ { user: "Delia", rating: 5, text: "Ideală pentru călătorii!" } ]
    },
    { 
        id: 208, brand: "CHARLOTTE TILBURY", name: "Unreal Skin Sheer Glow Tint", variant: "1 Fair (8 g)", oldPrice: 260.00, price: 156.00, img: "charlotte_tillbury.jpg",
        details: "Bază iluminatoare și fond de ten într-un format stick inovator.",
        ingredients: "HYALURONIC ACID, VITAMIN E, SQUALANE.",
        shades: [ 
            { name: "1 Fair", color: "#faecd8" },
            { name: "2 Light", color: "#f5deb3" },
            { name: "3 Medium", color: "#d2b48c" },
            { name: "4 Tan", color: "#cd853f" },
            { name: "5 Deep", color: "#8b4513" }
        ],
        reviews: [ { user: "Raluca", rating: 4, text: "Glow superb!" } ]
    }
];

// ==========================================
// LOGICĂ APLICAȚIE & LOCALSTORAGE
// ==========================================
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
    
    if (typeof renderCartPage === "function") {
        renderCartPage();
    }
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    localStorage.setItem('emmdor_cart', JSON.stringify(cart));
    updateBadges();
    
    if (typeof renderCartPage === "function") {
        renderCartPage();
    }
}
async function fetchBeautyAPI() {
    const apiContainer = document.getElementById('api-data');
    if (!apiContainer) return;

    try {
        // Apelăm un API public pentru produse din categoria beauty
        const response = await fetch('https://dummyjson.com/products/category/beauty');
        const data = await response.json();
        
        // Alegem un produs random din lista primită
        const randomProduct = data.products[Math.floor(Math.random() * data.products.length)];
        
        // Afișăm imaginea, titlul și prețul în footer
        apiContainer.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 5px;">
                <img src="${randomProduct.thumbnail}" alt="Recomandare" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px; background: #fff;">
                <div>
                    <strong style="color: #d4af37; display: block; font-size: 13px; margin-bottom: 3px;">${randomProduct.title}</strong>
                    <span style="font-size: 14px; font-weight: bold;">${randomProduct.price} $</span>
                </div>
            </div>
            <div style="font-size: 10px; margin-top: 10px; opacity: 0.5;">*Generat live via API Extern</div>
        `;
    } catch (error) {
        apiContainer.innerHTML = 'Recomandările nu sunt disponibile momentan.';
        console.error("Eroare API:", error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchBeautyAPI();
});