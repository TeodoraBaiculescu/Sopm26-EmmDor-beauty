import ProductCard from './ProductCard';

export default function BranduriAccesibile({ budgetProducts, favorites, toggleFavorite, addToCart }) {
    return (
        <>
            <div className="section-header">
                <h2>BRANDURI ACCESIBILE</h2>
                <p className="subtitle">Essence, Catrice, L'Oréal, Maybelline</p>
            </div>

            <div className="products-grid">
                {budgetProducts.map((product) => (
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
