import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { searchProducts } from './script';
import { searchBeautyFacts } from '../api/beautyFacts';

export default function Layout({ allProducts, cartCount, favoritesCount }) {
    const [term, setTerm] = useState('');
    const [worldSuggestions, setWorldSuggestions] = useState([]);
    const [worldLoading, setWorldLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Închidem sugestiile după orice schimbare de pagină.
    useEffect(() => {
        setTerm('');
    }, [location.pathname]);

    // Sugestii din API-ul public Open Beauty Facts (cu debounce + anulare).
    useEffect(() => {
        const query = term.trim();
        setWorldSuggestions([]);

        if (query.length < 3) {
            setWorldLoading(false);
            return undefined;
        }

        const controller = new AbortController();
        setWorldLoading(true);

        const timer = setTimeout(() => {
            searchBeautyFacts(query, { limit: 4, signal: controller.signal })
                .then((results) => {
                    if (!controller.signal.aborted) {
                        setWorldSuggestions(results);
                    }
                })
                .catch(() => {
                    if (!controller.signal.aborted) {
                        setWorldSuggestions([]);
                    }
                })
                .finally(() => {
                    if (!controller.signal.aborted) {
                        setWorldLoading(false);
                    }
                });
        }, 450);

        return () => {
            clearTimeout(timer);
            controller.abort();
        };
    }, [term]);

    const suggestions = term.trim().length >= 2
        ? searchProducts(allProducts, term).slice(0, 6)
        : [];

    const localNames = new Set(suggestions.map((product) => product.name.toLowerCase()));
    const externalSuggestions = worldSuggestions
        .filter((product) => !localNames.has(product.name.toLowerCase()))
        .slice(0, 4);

    function handleSearchSubmit(event) {
        event.preventDefault();
        const value = term.trim();
        navigate(value ? `/produse?q=${encodeURIComponent(value)}` : '/produse');
    }

    return (
        <>
            <a className="skip-link" href="#main-content">Sari la conținut</a>

            <div className="top-bar">
                <span>✨ TRANSPORT GRATUIT PESTE 200 LEI | CADOU SPRÂNCENE LA 500 LEI ✨</span>
            </div>

            <header>
                <div className="header-container">
                    <Link to="/" className="logo-container" aria-label="EmmDor Beauty – pagina principală">
                        <div className="logo-badge" aria-hidden="true">ED</div>
                        <div className="logo-text">
                            <span className="brand-name">EMMDOR</span>
                            <span className="brand-sub">BEAUTY</span>
                        </div>
                    </Link>

                    <form className="search-box" role="search" onSubmit={handleSearchSubmit}>
                        <label className="sr-only" htmlFor="search-input">Caută produse după brand sau nume</label>
                        <input
                            id="search-input"
                            type="search"
                            value={term}
                            onChange={(event) => setTerm(event.target.value)}
                            placeholder="Caută brand, produs (ex: Dior, Fenty, Maybelline)..."
                            autoComplete="off"
                            aria-describedby="search-hint"
                        />
                        <button type="submit" aria-label="Caută">
                            <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                        </button>
                        <span id="search-hint" className="sr-only">
                            Scrie cel puțin două caractere pentru sugestii, apoi apasă Enter.
                        </span>

                        {term.trim().length >= 2 && (
                            <ul className="search-results-dropdown" aria-label="Sugestii de produse">
                                {suggestions.map((product) => (
                                    <li key={product.id}>
                                        <Link to={`/produs/${product.id}`} onClick={() => setTerm('')}>
                                            <img src={product.img} alt="" />
                                            <span className="search-item-info">
                                                <span className="search-brand">{product.brand}</span>
                                                <span className="search-name">{product.name}</span>
                                            </span>
                                        </Link>
                                    </li>
                                ))}

                                {externalSuggestions.length > 0 && (
                                    <>
                                        <li className="search-group-label" aria-hidden="true">
                                            Din catalogul Open Beauty Facts
                                        </li>
                                        {externalSuggestions.map((product) => (
                                            <li key={product.code}>
                                                <a
                                                    href={product.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    title={`${product.name} – deschide în Open Beauty Facts`}
                                                >
                                                    {product.image ? (
                                                        <img src={product.image} alt="" loading="lazy" />
                                                    ) : (
                                                        <span className="search-img-placeholder" aria-hidden="true">
                                                            <i className="fa-solid fa-flask"></i>
                                                        </span>
                                                    )}
                                                    <span className="search-item-info">
                                                        <span className="search-brand">{product.brand || 'Open Beauty Facts'}</span>
                                                        <span className="search-name">{product.name}</span>
                                                    </span>
                                                    <i className="fa-solid fa-arrow-up-right-from-square search-external-icon" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                        ))}
                                    </>
                                )}

                                {suggestions.length === 0 && externalSuggestions.length === 0 && (
                                    <li className="no-results">
                                        {worldLoading ? 'Se caută și în catalogul mondial…' : 'Niciun produs găsit.'}
                                    </li>
                                )}
                            </ul>
                        )}
                    </form>

                    <div className="header-icons">
                        <NavLink to="/favorite" title="Favorite" aria-label={`Lista de favorite (${favoritesCount} produse)`}>
                            <i className="fa-regular fa-heart" aria-hidden="true"></i>
                            <span className="badge">{favoritesCount}</span>
                        </NavLink>
                        <NavLink to="/cos" title="Coș" aria-label={`Coșul de cumpărături (${cartCount} produse)`}>
                            <i className="fa-solid fa-bag-shopping" aria-hidden="true"></i>
                            <span className="badge">{cartCount}</span>
                        </NavLink>
                    </div>
                </div>

                <nav className="main-nav" aria-label="Navigare principală">
                    <ul>
                        <li><NavLink to="/" end>ACASĂ</NavLink></li>
                        <li><NavLink to="/produse">TOATE PRODUSELE</NavLink></li>
                        <li><NavLink to="/branduri-accesibile">BRANDURI ACCESIBILE</NavLink></li>
                        <li><NavLink to="/branduri-lux">BRANDURI LUX</NavLink></li>
                        <li><NavLink to="/promotii" className="sale-link">PROMOȚII %</NavLink></li>
                        <li><NavLink to="/contact">CONTACT</NavLink></li>
                    </ul>
                </nav>
            </header>

            <main id="main-content">
                <Outlet />
            </main>

            <footer className="sephora-footer">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h4>AJUTOR &amp; SUPORT</h4>
                        <ul>
                            <li><Link to="/contact">Contact &amp; Întrebări frecvente</Link></li>
                            <li><Link to="/modalitati-plata">Modalități de plată</Link></li>
                            <li><Link to="/conditii-livrare">Condiții de livrare</Link></li>
                            <li><Link to="/politica-retur">Politica de retur</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>DESPRE EMMDOR</h4>
                        <ul>
                            <li><Link to="/despre-noi">Despre EmmDor Beauty</Link></li>
                            <li><Link to="/emma-carabelea-lounge">Emma Carabelea Beauty Lounge</Link></li>
                            <li><Link to="/cariere">Cariere</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>INSPIRAȚIE</h4>
                        <ul>
                            <li><Link to="/branduri-lux">Branduri de lux</Link></li>
                            <li><Link to="/branduri-accesibile">Branduri accesibile</Link></li>
                            <li><Link to="/promotii">Ghid promoții</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>URMĂREȘTE-NE</h4>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/emma.carabelea" target="_blank" rel="noreferrer" aria-label="Instagram">
                                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
                                <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                                <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                                <i className="fa-brands fa-youtube" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>&copy; 2026 EmmDor Beauty &amp; Emma Carabelea Lounge. Toate drepturile rezervate.</p>
                </div>
            </footer>
        </>
    );
}
