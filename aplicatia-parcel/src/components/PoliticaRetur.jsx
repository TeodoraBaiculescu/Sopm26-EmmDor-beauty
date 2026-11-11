import { Link } from 'react-router-dom';

export default function PoliticaRetur() {
    return (
        <>
            <div className="section-header">
                <h2>POLITICA DE RETUR</h2>
                <p className="subtitle">Garanția returnării produselor în 14 zile</p>
            </div>

            <div className="info-page">
                <p>
                    La EmmDor Beauty îți dorim să fii pe deplin mulțumită de produsele achiziționate. Dacă dorești
                    să returnezi un produs, ai la dispoziție <strong>14 zile calendaristice</strong> de la primirea coletului.
                </p>

                <h3>Condiții de retur</h3>
                <ul>
                    <li>
                        Produsele trebuie să fie sigilate, în ambalajul original și să nu prezinte urme de utilizare
                        (din motive de igienă specifice produselor de cosmetică și makeup).
                    </li>
                    <li>Să fie însoțite de factura fiscală primită la livrare.</li>
                </ul>

                <h3>Cum procedez?</h3>
                <p>
                    Completează formularul de pe pagina noastră de <Link to="/contact">Contact</Link> selectând
                    opțiunea „Comanda mea / Anulare sau rambursare”, iar echipa noastră va trimite curierul să
                    ridice coletul de retur.
                </p>
            </div>
        </>
    );
}
