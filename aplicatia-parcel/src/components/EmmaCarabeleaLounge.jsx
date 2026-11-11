import { Link } from 'react-router-dom';

export default function EmmaCarabeleaLounge() {
    return (
        <>
            <section className="hero-banner" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200") center/cover no-repeat' }}>
                <div className="hero-overlay">
                    <span className="hero-tag"><i className="fa-solid fa-crown" aria-hidden="true"></i> BEAUTY LOUNGE</span>
                    <h1>EMMA CARABELEA BEAUTY LOUNGE</h1>
                    <p>Sanctuarul tău de răsfăț și frumusețe în inima Brașovului</p>
                </div>
            </section>

            <div className="info-page">
                <div className="lounge-card">
                    <span className="lounge-tag">Beneficiu exclusiv client EmmDor</span>
                    <h2>Pachet Brow Styling Cadou (Valoare 250 LEI)</h2>
                    <p>
                        Efectuează o comandă de peste <strong>500 LEI</strong> pe EmmDor Beauty și primești cadou
                        o ședință completă de styling la <strong>Emma Carabelea Beauty Lounge</strong>.
                    </p>
                    <Link to="/produse" className="hero-btn">CUMPĂRĂ ACUM ȘI CÂȘTIGĂ CADOUL</Link>
                </div>
            </div>
        </>
    );
}
