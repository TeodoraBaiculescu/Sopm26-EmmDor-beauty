import { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/format';

const initialForm = {
    name: '',
    email: '',
    phoneCountry: '+40',
    phone: '',
    county: '',
    city: '',
    address: '',
    accountType: 'guest',
    password: '',
    payment: 'cash_on_delivery'
};

function validate(form) {
    const errors = {};

    if (form.name.trim().length < 3) {
        errors.name = 'Introdu numele și prenumele (minimum 3 caractere).';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
        errors.email = 'Introdu o adresă de e-mail validă.';
    }
    if (!/^[0-9]{9,10}$/.test(form.phone.replace(/\s/g, ''))) {
        errors.phone = 'Numărul de telefon trebuie să conțină 9 sau 10 cifre.';
    }
    if (!form.county.trim()) {
        errors.county = 'Completează județul.';
    }
    if (!form.city.trim()) {
        errors.city = 'Completează localitatea.';
    }
    if (form.address.trim().length < 5) {
        errors.address = 'Completează adresa completă.';
    }
    if (form.accountType === 'register' && form.password.length < 8) {
        errors.password = 'Parola trebuie să aibă cel puțin 8 caractere.';
    }

    return errors;
}

export default function Checkout({ cartItems, placeOrder }) {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const total = cartItems.reduce((sum, line) => sum + line.product.price * line.qty, 0);

    function handleChange(event) {
        const { name, value } = event.target;
        setForm((current) => ({ ...current, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const nextErrors = validate(form);
        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
            return;
        }

        placeOrder();
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <div className="checkout-success" role="status">
                <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
                <h1>Comanda a fost plasată!</h1>
                <p>Mulțumim, {form.name.split(' ')[0]}! Vei primi un e-mail de confirmare la {form.email}.</p>
                <p>Plata aleasă: <strong>{form.payment === 'cash_on_delivery' ? 'Ramburs la livrare' : 'Card online'}</strong></p>
                <Link to="/produse" className="hero-btn">CONTINUĂ CUMPĂRĂTURILE</Link>
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="empty-state" style={{ marginTop: '60px' }}>
                <i className="fa-solid fa-bag-shopping" aria-hidden="true"></i>
                <h3>Nu poți finaliza o comandă fără produse</h3>
                <p>Coșul tău este gol. Adaugă produse și revino la checkout.</p>
                <Link to="/produse" className="add-cart-btn-sephora">Vezi produsele</Link>
            </div>
        );
    }

    return (
        <main className="checkout">
            <h1>EmmDor Beauty</h1>
            <p className="checkout-subtitle">Finalizează comanda ta</p>

            <form id="checkoutForm" onSubmit={handleSubmit} noValidate>
                <h2>Date de contact</h2>

                <label htmlFor="name">Nume și prenume *</label>
                <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && <p className="field-error" id="name-error" role="alert">{errors.name}</p>}

                <label htmlFor="email">Adresă de e-mail *</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && <p className="field-error" id="email-error" role="alert">{errors.email}</p>}

                <label htmlFor="phoneCountry">Țara și prefixul telefonic *</label>
                <select id="phoneCountry" name="phoneCountry" value={form.phoneCountry} onChange={handleChange}>
                    <option value="+40">România (+40)</option>
                    <option value="+44">Regatul Unit (+44)</option>
                </select>

                <label htmlFor="phone">Număr de telefon *</label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    inputMode="numeric"
                    autoComplete="tel-national"
                    placeholder="Ex.: 712345678"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && <p className="field-error" id="phone-error" role="alert">{errors.phone}</p>}

                <h2>Adresă de livrare</h2>

                <label htmlFor="county">Județ *</label>
                <input
                    id="county"
                    name="county"
                    value={form.county}
                    onChange={handleChange}
                    autoComplete="address-level1"
                    aria-invalid={Boolean(errors.county)}
                    aria-describedby={errors.county ? 'county-error' : undefined}
                />
                {errors.county && <p className="field-error" id="county-error" role="alert">{errors.county}</p>}

                <label htmlFor="city">Localitate *</label>
                <input
                    id="city"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    autoComplete="address-level2"
                    aria-invalid={Boolean(errors.city)}
                    aria-describedby={errors.city ? 'city-error' : undefined}
                />
                {errors.city && <p className="field-error" id="city-error" role="alert">{errors.city}</p>}

                <label htmlFor="address">Stradă, număr, bloc, apartament *</label>
                <textarea
                    id="address"
                    name="address"
                    rows="3"
                    value={form.address}
                    onChange={handleChange}
                    autoComplete="street-address"
                    aria-invalid={Boolean(errors.address)}
                    aria-describedby={errors.address ? 'address-error' : undefined}
                ></textarea>
                {errors.address && <p className="field-error" id="address-error" role="alert">{errors.address}</p>}

                <h2>Cont client</h2>
                <label className="option">
                    <input
                        type="radio"
                        name="accountType"
                        value="guest"
                        checked={form.accountType === 'guest'}
                        onChange={handleChange}
                    />
                    Comandă fără cont
                </label>
                <label className="option">
                    <input
                        type="radio"
                        name="accountType"
                        value="register"
                        checked={form.accountType === 'register'}
                        onChange={handleChange}
                    />
                    Doresc să îmi creez un cont
                </label>

                {form.accountType === 'register' && (
                    <div>
                        <label htmlFor="password">Parolă pentru cont *</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            minLength="8"
                            autoComplete="new-password"
                            aria-invalid={Boolean(errors.password)}
                            aria-describedby={errors.password ? 'password-error' : undefined}
                        />
                        {errors.password && <p className="field-error" id="password-error" role="alert">{errors.password}</p>}
                    </div>
                )}

                <h2>Metoda de plată</h2>
                <label className="option">
                    <input
                        type="radio"
                        name="payment"
                        value="cash_on_delivery"
                        checked={form.payment === 'cash_on_delivery'}
                        onChange={handleChange}
                    />
                    Ramburs, la livrare
                </label>
                <label className="option">
                    <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={form.payment === 'card'}
                        onChange={handleChange}
                    />
                    Card online
                </label>

                <h2>Comanda ta</h2>
                <div className="order-summary">
                    {cartItems.map((line) => (
                        <div key={line.lineId}>
                            {line.product.name}
                            {line.shade ? ` (${line.shade})` : ''} × {line.qty} — {formatPrice(line.product.price * line.qty)}
                        </div>
                    ))}
                    <hr />
                    <strong>Total: {formatPrice(total)}</strong>
                </div>

                <button type="submit" className="checkout-submit">TRIMITE COMANDA</button>
            </form>

            <Link className="back" to="/cos">Înapoi la coș</Link>
        </main>
    );
}
