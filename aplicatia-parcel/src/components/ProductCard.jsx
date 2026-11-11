import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/format';

// Card reutilizabil pentru toate listele de produse (Laborator 5: props + liste cu chei).
export default function ProductCard({ product, isFavorite, onToggleFavorite, onAddToCart }) {
    const { id, brand, name, price, oldPrice, badge, img, variant } = product;

    return (
        <article className="product-card">
            <button
                type="button"
                className={`fav-btn ${isFavorite ? 'active' : ''}`}
                onClick={() => onToggleFavorite(id)}
                aria-pressed={isFavorite}
                aria-label={isFavorite ? `Elimină ${name} din favorite` : `Adaugă ${name} la favorite`}
            >
                <i className={isFavorite ? 'fa-solid fa-heart' : 'fa-regular fa-heart'} aria-hidden="true"></i>
            </button>

            {oldPrice ? (
                <span className="sephora-tag" style={{ background: '#e63946' }}>-40% OFF</span>
            ) : badge ? (
                <span className="sephora-tag">{badge}</span>
            ) : null}

            <Link to={`/produs/${id}`} className="product-img" aria-label={`Vezi detalii pentru ${name}`}>
                <img src={img} alt={name} loading="lazy" />
            </Link>

            <div className="product-info-sephora">
                <span className="sephora-brand">{brand}</span>
                <h4 className="sephora-title">
                    <Link to={`/produs/${id}`}>{name}</Link>
                </h4>
                {variant && <span className="sephora-variant">{variant}</span>}

                <div className="sephora-price">
                    {oldPrice && <span className="old-price">{formatPrice(oldPrice)}</span>}
                    <span className={oldPrice ? 'sale-price' : undefined}>{formatPrice(price)}</span>
                </div>

                <button type="button" className="add-cart-btn-sephora" onClick={() => onAddToCart(id)}>
                    Adaugă în coș
                </button>
            </div>
        </article>
    );
}
