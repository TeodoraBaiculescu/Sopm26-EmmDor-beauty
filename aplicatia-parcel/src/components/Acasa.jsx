import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

export default function Acasa({ promoProducts, luxuryProducts, favorites, toggleFavorite, addToCart }) {
    const isFavorite = (id) => favorites.includes(id);

    return (
        <>
            <section className="hero-banner" aria-labelledby="hero-title">
                <div className="hero-overlay">
                    <span className="hero-tag"><i className="fa-solid fa-crown" aria-hidden="true"></i> OFERTĂ EXCLUSIVĂ EMMDOR</span>
                    <h1 id="hero-title">LAMINARE &amp; STYLING SPRÂNCENE CADOU</h1>
                    <p>Efectuează o comandă de peste <strong>500 LEI</strong> și primești gratuit pachetul complet:</p>
                    <div className="hero-perks">✨ Pensat + Laminat + Vopsit Sprâncene ✨</div>
                    <p className="hero-lounge">
                        Serviciu oferit în cadrul salonului <strong>Emma Carabelea Beauty Lounge</strong> (Brașov Coresi)
                    </p>
                    <Link to="/produse" className="hero-btn">DESCOPERĂ PRODUSELE</Link>
                </div>
            </section>

            <section aria-labelledby="promo-heading">
                <div className="section-header">
                    <h2 id="promo-heading">OFERTE SPECIALE %</h2>
                    <p className="subtitle">Cele mai dorite produse cu 40% reducere</p>
                </div>
                <div className="products-grid">
                    {promoProducts.slice(0, 4).map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isFavorite={isFavorite(product.id)}
                            onToggleFavorite={toggleFavorite}
                            onAddToCart={addToCart}
                        />
                    ))}
                </div>
                <div className="section-actions">
                    <Link to="/promotii" className="hero-btn">VEZI TOATE PROMOȚIILE</Link>
                </div>
            </section>

            <section aria-labelledby="lux-heading">
                <div className="section-header">
                    <h2 id="lux-heading">SELECȚIE BRANDURI DE LUX</h2>
                    <p className="subtitle">Dior, Huda Beauty, Rare Beauty, Fenty Beauty</p>
                </div>
                <div className="products-grid">
                    {luxuryProducts.slice(0, 4).map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isFavorite={isFavorite(product.id)}
                            onToggleFavorite={toggleFavorite}
                            onAddToCart={addToCart}
                        />
                    ))}
                </div>
            </section>

            <section className="services-bar" aria-label="Serviciile noastre">
                <div className="service-item">
                    <i className="fa-solid fa-bag-shopping" aria-hidden="true"></i>
                    <div>
                        <h4>Click &amp; Collect</h4>
                        <p>Ridicare gratuită în 2 ore</p>
                    </div>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-truck-fast" aria-hidden="true"></i>
                    <div>
                        <h4>Livrare gratuită</h4>
                        <p>La comenzi de peste 200 Lei</p>
                    </div>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-shield-halved" aria-hidden="true"></i>
                    <div>
                        <h4>Plată securizată</h4>
                        <p>Card, Ramburs sau Rate</p>
                    </div>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-rotate-left" aria-hidden="true"></i>
                    <div>
                        <h4>Retur simplu</h4>
                        <p>Până la 14 zile calendaristice</p>
                    </div>
                </div>
            </section>
        </>
    );
}
