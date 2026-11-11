import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { findProductById } from './script';
import { formatPrice } from '../utils/format';
import { getBrandCatalog, pickClosestProduct } from '../api/beautyFacts';

const FALLBACK_DETAILS = 'Produs de înaltă calitate, recunoscut pentru rezistența sa îndelungată și aplicarea ușoară. Testat dermatologic.';
const FALLBACK_INGREDIENTS = 'AQUA (WATER), DIMETHICONE, GLYCERIN, ISODODECANE, PEG-10 DIMETHICONE, CI 77891 (TITANIUM DIOXIDE).';
const FALLBACK_REVIEWS = [
    { user: 'Andreea M.', rating: 5, text: 'Ador acest produs! Îl folosesc zilnic și rezistă perfect.' },
    { user: 'Elena P.', rating: 4, text: 'Culoare foarte frumoasă, raport calitate-preț excelent.' }
];

const TABS = [
    { id: 'details', label: 'Detalii' },
    { id: 'ingredients', label: 'Ingrediente' },
    { id: 'reviews', label: 'Recenzii' }
];

export default function ProdusDetaliu({ favorites, addToCart, toggleFavorite }) {
    const { id } = useParams();
    const product = findProductById(id);

    const [activeTab, setActiveTab] = useState('details');
    const [selectedShadeIndex, setSelectedShadeIndex] = useState(0);
    const [catalog, setCatalog] = useState({ status: 'idle', count: 0, sample: null, url: '' });

    // Date live din API-ul public Open Beauty Facts, pentru brandul produsului.
    useEffect(() => {
        if (!product) {
            return undefined;
        }

        const controller = new AbortController();
        setCatalog({ status: 'loading', count: 0, sample: null, url: '' });

        getBrandCatalog(product.brand, { signal: controller.signal })
            .then(({ count, products, url }) => {
                if (controller.signal.aborted) {
                    return;
                }
                setCatalog({
                    status: 'success',
                    count,
                    sample: pickClosestProduct(products, product.name),
                    url
                });
            })
            .catch((error) => {
                if (error.name === 'AbortError') {
                    return;
                }
                setCatalog({ status: 'error', count: 0, sample: null, url: '' });
            });

        return () => controller.abort();
    }, [product]);

    if (!product) {
        return (
            <div className="empty-state" style={{ marginTop: '60px' }}>
                <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i>
                <h3>Produsul nu a fost găsit</h3>
                <p>Este posibil ca produsul să fi fost eliminat din catalog.</p>
                <Link to="/produse" className="add-cart-btn-sephora">Înapoi la produse</Link>
            </div>
        );
    }

    const details = product.details || FALLBACK_DETAILS;
    const ingredients = product.ingredients || FALLBACK_INGREDIENTS;
    const reviews = product.reviews || FALLBACK_REVIEWS;
    const shades = product.shades || [];
    const selectedShade = shades[selectedShadeIndex] || null;
    const displayImg = selectedShade?.img || product.img;
    const isFavorite = favorites.includes(product.id);

    const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

    function handleAddToCart() {
        addToCart(product.id, selectedShade?.name || null);
    }

    return (
        <>
            <nav className="breadcrumb" aria-label="Firimitură de navigare">
                <Link to="/">Acasă</Link>
                <span aria-hidden="true">/</span>
                <Link to="/produse">Produse</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{product.name}</span>
            </nav>

            <div className="p-page-container">
                <div className="p-img-wrapper">
                    <img src={displayImg} alt={product.name} />
                </div>

                <div className="p-info-wrapper">
                    <div className="p-brand">{product.brand}</div>
                    <h1 className="p-title">{product.name}</h1>

                    <div className="p-stars">
                        <i className="fa-solid fa-star" aria-hidden="true"></i>
                        <span className="sr-only">Rating mediu {averageRating.toFixed(1)} din 5</span>
                        <span aria-hidden="true">{averageRating.toFixed(1)} / 5 ({reviews.length} recenzii)</span>
                    </div>

                    <div className="p-price">
                        {product.oldPrice ? (
                            <>
                                <span className="old-price">{formatPrice(product.oldPrice)}</span>
                                <span className="sale-price">{formatPrice(product.price)}</span>
                            </>
                        ) : (
                            formatPrice(product.price)
                        )}
                    </div>

                    {product.variant && <p className="p-variant">Variantă: {product.variant}</p>}

                    {selectedShade && (
                        <>
                            <div className="shade-title">
                                Nuanță selectată: <span>{selectedShade.name}</span>
                            </div>
                            <div className="shades-grid" role="group" aria-label="Alege nuanța">
                                {shades.map((shade, index) => (
                                    <button
                                        key={shade.name}
                                        type="button"
                                        className={`shade-btn ${selectedShadeIndex === index ? 'active' : ''}`}
                                        style={{ backgroundColor: shade.color }}
                                        title={shade.name}
                                        aria-label={shade.name}
                                        aria-pressed={selectedShadeIndex === index}
                                        onClick={() => setSelectedShadeIndex(index)}
                                    ></button>
                                ))}
                            </div>
                        </>
                    )}

                    <div className="action-row">
                        <button type="button" className="btn-add" onClick={handleAddToCart}>
                            ADAUGĂ ÎN COȘ
                        </button>
                        <button
                            type="button"
                            className={`btn-fav ${isFavorite ? 'active' : ''}`}
                            onClick={() => toggleFavorite(product.id)}
                            aria-pressed={isFavorite}
                            aria-label={isFavorite ? 'Elimină din favorite' : 'Adaugă la favorite'}
                        >
                            <i className={isFavorite ? 'fa-solid fa-heart' : 'fa-regular fa-heart'} aria-hidden="true"></i>
                        </button>
                    </div>

                    <div className="tabs-container">
                        <div className="tabs-header" role="tablist" aria-label="Informații despre produs">
                            {TABS.map((tab) => (
                                <button
                                    key={tab.id}
                                    type="button"
                                    role="tab"
                                    id={`tab-${tab.id}`}
                                    aria-selected={activeTab === tab.id}
                                    aria-controls={`panel-${tab.id}`}
                                    className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div
                            className="tab-content active"
                            role="tabpanel"
                            id={`panel-${activeTab}`}
                            aria-labelledby={`tab-${activeTab}`}
                        >
                            {activeTab === 'details' && <p>{details}</p>}
                            {activeTab === 'ingredients' && <p>{ingredients}</p>}
                            {activeTab === 'reviews' && (
                                reviews.map((review, index) => (
                                    <div className="review-card" key={`${review.user}-${index}`}>
                                        <h5>
                                            {review.user}
                                            <span className="review-rating">
                                                <i className="fa-solid fa-star" aria-hidden="true"></i> {review.rating}/5
                                            </span>
                                        </h5>
                                        <p>„{review.text}”</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {catalog.status === 'loading' && (
                        <p className="catalog-note" role="status">
                            Se încarcă datele din catalogul mondial…
                        </p>
                    )}

                    {catalog.status === 'error' && (
                        <p className="catalog-note">
                            Catalogul mondial este indisponibil momentan.
                        </p>
                    )}

                    {catalog.status === 'success' && catalog.count > 0 && (
                        <aside className="catalog-card" aria-label={`${product.brand} în catalogul Open Beauty Facts`}>
                            <h4>
                                <i className="fa-solid fa-globe" aria-hidden="true"></i>
                                Din catalogul mondial
                            </h4>
                            <p>
                                <strong>{catalog.count}</strong> produse {product.brand} în Open Beauty Facts
                            </p>
                            {catalog.sample && (
                                <p>
                                    Ex.:{' '}
                                    <a href={catalog.sample.url} target="_blank" rel="noreferrer">
                                        {catalog.sample.name}
                                    </a>
                                    {catalog.sample.quantity ? ` · ${catalog.sample.quantity}` : ''}
                                </p>
                            )}
                            <a className="catalog-card-link" href={catalog.url} target="_blank" rel="noreferrer">
                                Vezi brandul în catalog{' '}
                                <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                            </a>
                        </aside>
                    )}
                </div>
            </div>
        </>
    );
}
