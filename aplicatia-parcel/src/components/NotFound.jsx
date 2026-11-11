import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="empty-state" style={{ marginTop: '60px' }}>
            <i className="fa-solid fa-compass" aria-hidden="true"></i>
            <h3>Pagina nu a fost găsită</h3>
            <p>Adresa pe care ai accesat-o nu există sau a fost mutată.</p>
            <Link to="/" className="add-cart-btn-sephora">Înapoi la pagina principală</Link>
        </div>
    );
}
