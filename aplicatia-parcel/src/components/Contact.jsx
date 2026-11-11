import { useState } from 'react';

const initialForm = {
    request: '',
    firstName: '',
    lastName: '',
    email: '',
    subject: ''
};

const MAX_MESSAGE_LENGTH = 1000;

function validate(form) {
    const errors = {};

    if (!form.request) {
        errors.request = 'Alege tipul solicitării.';
    }
    if (!form.firstName.trim()) {
        errors.firstName = 'Completează prenumele.';
    }
    if (!form.lastName.trim()) {
        errors.lastName = 'Completează numele.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
        errors.email = 'Introdu o adresă de e-mail validă.';
    }
    if (form.subject.trim().length < 10) {
        errors.subject = 'Descrie solicitarea în cel puțin 10 caractere.';
    }

    return errors;
}

export default function Contact() {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);

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

        setSent(true);
        setForm(initialForm);
    }

    return (
        <>
            <div className="contact-page-wrapper">
                <h1 className="contact-main-title">CONTACTEAZĂ-NE</h1>

                <div className="contact-info-strip">
                    <div className="contact-info-col">
                        <strong>Program relații clienți:</strong><br />
                        <span>Luni - Duminică: 09:00 - 21:00</span><br />
                        <strong>Telefon:</strong> <a href="tel:+40368400900">0368 400 900</a><br />
                        <strong>Email:</strong> <a href="mailto:suportclienti@emmdor.ro">suportclienti@emmdor.ro</a>
                    </div>
                    <div className="contact-info-col border-center">
                        <strong>Formular de contact</strong>
                    </div>
                    <div className="contact-info-col">
                        <strong>Adresa:</strong><br />
                        <span>Brașov, Cartier Coresi,<br />Str. Zaharia Stancu Nr. 1,<br />EmmDor Beauty Lounge.</span>
                    </div>
                </div>

                <div className="contact-form-section">
                    <h2 className="question-title">Ai o întrebare?</h2>

                    {sent && (
                        <p className="form-success" role="status">
                            Mulțumim! Solicitarea ta a fost trimisă. Îți răspundem în maximum 24 de ore.
                        </p>
                    )}

                    <form id="emmdor-contact-form" onSubmit={handleSubmit} noValidate>
                        <div className="form-grid-layout">
                            <div className="form-left-col">
                                <div className="floating-field">
                                    <label className="field-label" htmlFor="request">Solicitare *</label>
                                    <select
                                        id="request"
                                        name="request"
                                        required
                                        className="custom-input select-input"
                                        value={form.request}
                                        onChange={handleChange}
                                        aria-invalid={Boolean(errors.request)}
                                        aria-describedby={errors.request ? 'request-error' : undefined}
                                    >
                                        <option value="" disabled>Selectează o opțiune</option>
                                        <option value="Comanda mea">Comanda mea / Urmărește</option>
                                        <option value="Retur">Retur / Rambursare</option>
                                        <option value="Altele">Altele</option>
                                    </select>
                                    {errors.request && <p className="field-error" id="request-error" role="alert">{errors.request}</p>}
                                </div>

                                <div className="floating-field">
                                    <label className="field-label" htmlFor="firstName">Prenume *</label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        className="custom-input"
                                        autoComplete="given-name"
                                        aria-invalid={Boolean(errors.firstName)}
                                        aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                                    />
                                    {errors.firstName && <p className="field-error" id="firstName-error" role="alert">{errors.firstName}</p>}
                                </div>

                                <div className="floating-field">
                                    <label className="field-label" htmlFor="lastName">Nume *</label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        className="custom-input"
                                        autoComplete="family-name"
                                        aria-invalid={Boolean(errors.lastName)}
                                        aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                                    />
                                    {errors.lastName && <p className="field-error" id="lastName-error" role="alert">{errors.lastName}</p>}
                                </div>

                                <div className="floating-field">
                                    <label className="field-label" htmlFor="contactEmail">Email *</label>
                                    <input
                                        id="contactEmail"
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className="custom-input"
                                        autoComplete="email"
                                        aria-invalid={Boolean(errors.email)}
                                        aria-describedby={errors.email ? 'contactEmail-error' : undefined}
                                    />
                                    {errors.email && <p className="field-error" id="contactEmail-error" role="alert">{errors.email}</p>}
                                </div>
                            </div>

                            <div className="form-right-col">
                                <label className="field-label-text" htmlFor="subject">Subiectul solicitării *</label>
                                <div className="textarea-box">
                                    <textarea
                                        id="subject"
                                        name="subject"
                                        maxLength={MAX_MESSAGE_LENGTH}
                                        value={form.subject}
                                        onChange={handleChange}
                                        placeholder="Explică solicitarea"
                                        aria-invalid={Boolean(errors.subject)}
                                        aria-describedby={errors.subject ? 'subject-error' : 'subject-count'}
                                    ></textarea>
                                    <span className="char-count" id="subject-count">
                                        {MAX_MESSAGE_LENGTH - form.subject.length}/{MAX_MESSAGE_LENGTH}
                                    </span>
                                </div>
                                {errors.subject && <p className="field-error" id="subject-error" role="alert">{errors.subject}</p>}
                            </div>
                        </div>

                        <div className="form-action-btn">
                            <button type="submit" className="add-cart-btn-sephora">TRIMITE SOLICITAREA</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
