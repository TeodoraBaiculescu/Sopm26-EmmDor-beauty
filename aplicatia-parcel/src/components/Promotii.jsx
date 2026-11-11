import ProductCard from './ProductCard';

export default function Promotii({ promoProducts, favorites, toggleFavorite, addToCart }) {
    return (
        <>
            <div className="section-header">
                <h2>PROMOȚII -40% REDUCERE</h2>
                <p className="subtitle">Produsele preferate la prețuri speciale</p>
            </div>

            <div className="products-grid">
                {promoProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        isFavorite={favorites.includes(product.id)}
                        onToggleFavorite={toggleFavorite}
                        onAddToCart={addToCart}
                    />
                ))}
            </div>
        </>
    );
}
