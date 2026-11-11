import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from './ProductCard';

export default function Produse({ allProducts, favorites, toggleFavorite, addToCart }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const queryFromUrl = searchParams.get('q') || '';

    const [term, setTerm] = useState(queryFromUrl);
    const [brand, setBrand] = useState('toate');

    // URL-ul este sursa de adevăr pentru căutarea venită din header.
    useEffect(() => {
        setTerm(queryFromUrl);
    }, [queryFromUrl]);

    const brands = useMemo(
        () => [...new Set(allProducts.map((product) => product.brand))].sort((a, b) => a.localeCompare(b)),
        [allProducts]
    );

    const filteredProducts = useMemo(() => {
        const query = term.trim().toLowerCase();
        return allProducts.filter((product) => {
            const matchesTerm = `${product.brand} ${product.name}`.toLowerCase().includes(query);
            const matchesBrand = brand === 'toate' || product.brand === brand;
            return matchesTerm && matchesBrand;
        });
    }, [allProducts, term, brand]);

    function handleSearchSubmit(event) {
        event.preventDefault();
        const value = term.trim();
        setSearchParams(value ? { q: value } : {});
    }

    function resetFilters() {
        setTerm('');
        setBrand('toate');
        setSearchParams({});
    }

    return (
        <>
            <div className="section-header">
                <h2>TOATE PRODUSELE</h2>
                <p className="subtitle">Colecția completă disponibilă</p>
            </div>

            <form className="catalog-filters" onSubmit={handleSearchSubmit} role="search">
                <div className="filter-field">
                    <label htmlFor="catalog-search">Caută în catalog</label>
                    <input
                        id="catalog-search"
                        type="search"
                        value={term}
                        onChange={(event) => setTerm(event.target.value)}
                        placeholder="Ex.: Dior, fond de ten, ruj..."
                    />
                </div>

                <div className="filter-field">
                    <label htmlFor="catalog-brand">Filtrează după brand</label>
                    <select id="catalog-brand" value={brand} onChange={(event) => setBrand(event.target.value)}>
                        <option value="toate">Toate brandurile</option>
                        {brands.map((brandName) => (
                            <option key={brandName} value={brandName}>{brandName}</option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="filter-submit">Caută</button>
                <button type="button" className="filter-reset" onClick={resetFilters}>Resetează</button>
            </form>

            <p className="results-count" role="status">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'produs găsit' : 'produse găsite'}
            </p>

            {filteredProducts.length === 0 ? (
                <div className="empty-state">
                    <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                    <h3>Niciun produs nu corespunde căutării</h3>
                    <p>Încearcă alt termen sau resetează filtrele.</p>
                    <button type="button" className="add-cart-btn-sephora" onClick={resetFilters}>
                        Resetează filtrele
                    </button>
                </div>
            ) : (
                <div className="products-grid">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isFavorite={favorites.includes(product.id)}
                            onToggleFavorite={toggleFavorite}
                            onAddToCart={addToCart}
                        />
                    ))}
                </div>
            )}
        </>
    );
}
