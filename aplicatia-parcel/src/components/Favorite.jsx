import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/format';

export default function Favorite({ favorites, toggleFavorite, addToCart }) {
    return (
        <>
            <div className="section-header">
                <h2>LISTA TA DE FAVORITE ❤️</h2>
                <p className="subtitle">Produsele salvate</p>
            </div>

            <div className="favorites-container">
                {favorites.length === 0 ? (
                    <div className="empty-state">
                        <i className="fa-regular fa-heart" aria-hidden="true"></i>
                        <h3>Nu ai adăugat încă produse la favorite</h3>
                        <p>Apasă inima de pe orice produs pentru a-l salva aici.</p>
                        <Link to="/produse" className="add-cart-btn-sephora">Vezi produsele</Link>
                    </div>
                ) : (
                    favorites.map((product) => (
                        <article className="fav-compact-card" key={product.id}>
                            <Link to={`/produs/${product.id}`} aria-label={`Vezi detalii pentru ${product.name}`}>
                                <img src={product.img} alt={product.name} className="fav-compact-img" />
                            </Link>
                            <div className="fav-compact-details">
                                <span className="fav-compact-brand">{product.brand}</span>
                                <Link to={`/produs/${product.id}`} className="fav-compact-title">{product.name}</Link>
                                <div className="fav-compact-price">{formatPrice(product.price)}</div>
                            </div>
                            <div className="fav-compact-actions">
                                <button
                                    type="button"
                                    className="add-cart-btn-sephora"
                                    style={{ padding: '8px 15px', fontSize: '11px' }}
                                    onClick={() => addToCart(product.id)}
                                >
                                    Adaugă
                                </button>
                                <button
                                    type="button"
                                    className="add-cart-btn-sephora"
                                    style={{ padding: '8px 15px', fontSize: '11px', background: '#e63946', color: '#fff', borderColor: '#e63946' }}
                                    onClick={() => toggleFavorite(product.id)}
                                    aria-label={`Elimină ${product.name} din favorite`}
                                >
                                    <i className="fa-solid fa-trash" aria-hidden="true"></i>
                                </button>
                            </div>
                        </article>
                    ))
                )}
            </div>
        </>
    );
}
