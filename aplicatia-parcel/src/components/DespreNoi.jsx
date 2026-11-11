export default function DespreNoi() {
    return (
        <>
            <section className="hero-banner" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200") center/cover no-repeat' }}>
                <div className="hero-overlay">
                    <span className="hero-tag"><i className="fa-solid fa-gem" aria-hidden="true"></i> POVESTEA NOASTRĂ</span>
                    <h1>DESPRE EMMDOR BEAUTY</h1>
                    <p>Pasiune, visuri mari și dăruire – povestea a trei fete unite de dragostea pentru frumusețe</p>
                </div>
            </section>

            <div className="info-page">
                <div className="info-card">
                    <h2>TREI FETE, UN SINGUR VIS</h2>
                    <p>
                        <strong>EmmDor Beauty</strong> a luat naștere din prietenia și ambiția a trei fete la
                        început de drum, unite de o pasiune imensă pentru universul machiajului și al îngrijirii tenului.
                    </p>
                    <p className="info-quote">
                        „Pentru noi, EmmDor nu este doar un magazin, ci dovada că atunci când pui suflet, muncă
                        și sinceritate în ceea ce faci, visurile devin realitate.”
                    </p>
                </div>
            </div>
        </>
    );
}
