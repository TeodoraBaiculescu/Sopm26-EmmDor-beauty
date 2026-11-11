import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/format';

// cartItems vine din App: fiecare linie conține { lineId, id, qty, shade, product }
export default function Cos({ cartItems, updateCartQty, removeFromCart }) {
    const total = cartItems.reduce((sum, line) => sum + line.product.price * line.qty, 0);
    const remainingForGift = Math.max(0, 500 - total);

    return (
        <>
            <div className="section-header">
                <h2>COȘUL TĂU DE CUMPĂRĂTURI</h2>
            </div>

            <div className="cart-container">
                {cartItems.length === 0 ? (
                    <div className="empty-state">
                        <i className="fa-solid fa-bag-shopping" aria-hidden="true"></i>
                        <h3>Coșul tău este gol</h3>
                        <p>Adaugă produse din catalog pentru a continua cumpărăturile.</p>
                        <Link to="/produse" className="add-cart-btn-sephora">Vezi produsele</Link>
                    </div>
                ) : (
                    <>
                        <table className="cart-table">
                            <caption className="sr-only">Produsele din coș</caption>
                            <thead>
                                <tr>
                                    <th scope="col">PRODUS</th>
                                    <th scope="col">DENUMIRE</th>
                                    <th scope="col">PREȚ</th>
                                    <th scope="col">CANTITATE</th>
                                    <th scope="col">SUBTOTAL</th>
                                    <th scope="col"><span className="sr-only">Acțiuni</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((line) => (
                                    <tr key={line.lineId}>
                                        <td>
                                            <img src={line.product.img} className="cart-item-img" alt={line.product.name} />
                                        </td>
                                        <td>
                                            <strong>{line.product.brand}</strong><br />
                                            {line.product.name}
                                            {line.shade && <><br /><span className="cart-shade">Nuanță: {line.shade}</span></>}
                                        </td>
                                        <td>{formatPrice(line.product.price)}</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="cart-qty-btn"
                                                onClick={() => updateCartQty(line, -1)}
                                                aria-label={`Scade cantitatea pentru ${line.product.name}`}
                                            >
                                                −
                                            </button>
                                            <span className="cart-qty-value" aria-live="polite">{line.qty}</span>
                                            <button
                                                type="button"
                                                className="cart-qty-btn"
                                                onClick={() => updateCartQty(line, 1)}
                                                aria-label={`Crește cantitatea pentru ${line.product.name}`}
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td><strong>{formatPrice(line.product.price * line.qty)}</strong></td>
                                        <td>
                                            <button
                                                type="button"
                                                className="cart-remove-btn"
                                                onClick={() => removeFromCart(line)}
                                                aria-label={`Elimină ${line.product.name} din coș`}
                                            >
                                                <i className="fa-solid fa-trash" aria-hidden="true"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {remainingForGift === 0 ? (
                            <div className="gift-banner" role="status">
                                🎉 FELICITĂRI! Ai depășit suma de 500 LEI! Ai primit CADOU pachetul la Emma Carabelea Beauty Lounge!
                            </div>
                        ) : (
                            <p className="gift-hint">
                                Mai adaugă produse de {formatPrice(remainingForGift)} pentru a primi CADOU!
                            </p>
                        )}

                        <div className="cart-summary">
                            <h3>TOTAL: <span>{formatPrice(total)}</span></h3>
                            <Link
                                to="/checkout"
                                className="add-cart-btn-sephora"
                                style={{ display: 'inline-block', width: 'auto', padding: '12px 30px', marginTop: '15px', textDecoration: 'none' }}
                            >
                                FINALIZEAZĂ COMANDA
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
