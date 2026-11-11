import ProductCard from './ProductCard';
import CatalogNote from './CatalogNote';

export default function BranduriLux({ luxuryProducts, favorites, toggleFavorite, addToCart }) {
    const brands = [...new Set(luxuryProducts.map((product) => product.brand))];

    return (
        <>
            <div className="section-header">
                <h2>BRANDURI DE LUX</h2>
                <p className="subtitle">Dior, Huda Beauty, Rare Beauty, Fenty Beauty, YSL</p>
                <CatalogNote brands={brands} />
            </div>

            <div className="products-grid">
                {luxuryProducts.map((product) => (
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
