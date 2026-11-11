// ==========================================
// API PUBLIC: Open Beauty Facts
// https://world.openbeautyfacts.org/display/api
// Nu necesită cheie. Răspunsurile sunt cache-uite în memorie,
// ca să nu repetăm aceleași cereri la fiecare randare.
// ==========================================
const BASE_URL = 'https://world.openbeautyfacts.org';
const FIELDS = 'code,product_name,brands,quantity,ingredients_text,image_url';
const CACHE_LIMIT = 100;

const cache = new Map();

function cacheSet(key, value) {
    if (cache.size >= CACHE_LIMIT) {
        cache.delete(cache.keys().next().value);
    }
    cache.set(key, value);
}

async function fetchJson(url, signal) {
    if (cache.has(url)) {
        return cache.get(url);
    }

    const response = await fetch(url, {
        signal,
        headers: { Accept: 'application/json' }
    });

    if (!response.ok) {
        throw new Error(`Open Beauty Facts a răspuns cu ${response.status}`);
    }

    const data = await response.json();
    cacheSet(url, data);
    return data;
}

function toProduct(item) {
    if (!item || !item.code || !item.product_name) {
        return null;
    }

    return {
        code: item.code,
        name: item.product_name.trim(),
        brand: (item.brands || '').trim(),
        quantity: (item.quantity || '').trim(),
        ingredients: (item.ingredients_text || '').trim(),
        image: item.image_url || '',
        url: `${BASE_URL}/product/${item.code}`
    };
}

// "L'ORÉAL PARIS" -> "l-oreal-paris" (formatul de brand folosit de API).
export function normalizeBrandTag(brand) {
    return brand
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/['’]/g, '')
        .replace(/&/g, ' and ')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function tokenize(value) {
    return value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .split(/[^a-z0-9]+/)
        .filter((token) => token.length >= 3);
}

// Alege produsul cel mai apropiat ca nume, ca exemplu pentru brand.
export function pickClosestProduct(products, name) {
    if (products.length === 0) {
        return null;
    }

    const target = tokenize(name);
    let best = products[0];
    let bestScore = 0;

    products.forEach((product) => {
        const score = tokenize(product.name).filter((token) => target.includes(token)).length;
        if (score > bestScore) {
            best = product;
            bestScore = score;
        }
    });

    return best;
}

// Căutare liberă după nume/brand — folosită în sugestiile din header.
export async function searchBeautyFacts(term, { limit = 4, signal } = {}) {
    const query = term.trim();
    if (query.length < 3) {
        return [];
    }

    const url = `${BASE_URL}/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=${limit}&fields=${FIELDS}`;
    const data = await fetchJson(url, signal);

    return (data.products || []).map(toProduct).filter(Boolean);
}

// Produsele unui brand din catalogul mondial (plus numărul total).
export async function getBrandCatalog(brand, { pageSize = 20, signal } = {}) {
    const tag = normalizeBrandTag(brand);
    const url = `${BASE_URL}/api/v2/search?brands_tags=${encodeURIComponent(tag)}&fields=${FIELDS}&page_size=${pageSize}`;
    const data = await fetchJson(url, signal);

    return {
        count: Number(data.count) || 0,
        products: (data.products || []).map(toProduct).filter(Boolean),
        url: `${BASE_URL}/brand/${tag}`
    };
}

export async function getBrandCount(brand, { signal } = {}) {
    const catalog = await getBrandCatalog(brand, { pageSize: 1, signal });
    return catalog.count;
}
