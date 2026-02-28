import './CTA.css';

const CTA = () => {
    return (
        <section className="cta" id="cta">
            <div className="container">
                <div className="cta__card">
                    {/* Background elements */}
                    <div className="orb orb-blue" style={{ width: '500px', height: '500px', top: '-100px', left: '-100px', opacity: 0.2 }}></div>
                    <div className="orb orb-purple" style={{ width: '400px', height: '400px', bottom: '-100px', right: '-100px', opacity: 0.2 }}></div>

                    <div className="cta__content">
                        <div className="section-label" style={{ margin: '0 auto 16px' }}>🎯 Limited Time Offer</div>
                        <h2 className="cta__title">
                            Start Trading with
                            <span className="gradient-text"> Zero Fees</span>
                            <br />for Your First 30 Days
                        </h2>
                        <p className="cta__subtitle">
                            Join millions of traders who have already discovered a smarter way to trade crypto.
                            Sign up now and get <strong>$50 in trading credits</strong> as a welcome bonus.
                        </p>

                        <div className="cta__actions">
                            <button className="btn-primary" id="cta-primary-btn" style={{ padding: '16px 36px', fontSize: '1rem' }}>
                                Create Free Account
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button className="btn-secondary" id="cta-secondary-btn" style={{ padding: '15px 32px' }}>
                                View Demo
                            </button>
                        </div>

                        <div className="cta__perks">
                            {['No credit card required', 'Cancel anytime', 'Bank-level security'].map((p, i) => (
                                <div key={i} className="cta__perk">
                                    <span className="cta__perk-check">✓</span> {p}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
