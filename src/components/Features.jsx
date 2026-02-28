import './Features.css';

const features = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        iconBg: '#dbeafe',
        title: 'Manual Verification',
        desc: 'Every website is manually reviewed before listing',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
            </svg>
        ),
        iconBg: '#fee2e2',
        title: 'Scam Detection',
        desc: 'Continuous monitoring and community reporting',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
            </svg>
        ),
        iconBg: '#dcfce7',
        title: 'Regular Updates',
        desc: 'Listings updated daily with latest information',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
        iconBg: '#ede9fe',
        title: 'Community Driven',
        desc: 'Powered by user reviews and feedback',
    },
];

const Features = () => {
    return (
        <section className="features" id="about">
            <div className="container">
                <div className="features__header">
                    <p className="features__eyebrow">SAFETY FIRST</p>
                    <h2 className="features__title">Why Trust Crypto Suggest?</h2>
                    <p className="features__subtitle">
                        We take verification seriously so you can explore with confidence.
                    </p>
                </div>

                <div className="features__grid">
                    {features.map((f, i) => (
                        <div className="feature-card" key={i} id={`feature-card-${i}`}>
                            <div className="feature-card__icon" style={{ background: f.iconBg }}>
                                {f.icon}
                            </div>
                            <h3 className="feature-card__title">{f.title}</h3>
                            <p className="feature-card__desc">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
