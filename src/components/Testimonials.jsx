import './Testimonials.css';

const testimonials = [
    {
        name: 'Alex Johnson',
        role: 'Professional Trader',
        avatar: 'AJ',
        color: '#3b82f6',
        rating: 5,
        text: "CryptoNex's execution speed is unmatched. I've tried dozens of exchanges and nothing comes close to the performance here. My profits have increased 40% since switching.",
    },
    {
        name: 'Sarah Chen',
        role: 'DeFi Investor',
        avatar: 'SC',
        color: '#8b5cf6',
        rating: 5,
        text: 'The analytics tools are incredible. Real-time charts, AI signals, and portfolio tracking all in one place. It has completely changed how I approach crypto investing.',
    },
    {
        name: 'Marcus Brown',
        role: 'Crypto Enthusiast',
        avatar: 'MB',
        color: '#06b6d4',
        rating: 5,
        text: "As a beginner, I was worried about security. CryptoNex's 2FA and cold wallet storage gave me complete peace of mind. The UI is also the most intuitive I've used.",
    },
    {
        name: 'Priya Patel',
        role: 'Hedge Fund Manager',
        avatar: 'PP',
        color: '#10b981',
        rating: 5,
        text: 'We moved our institutional portfolio to CryptoNex for the API access and deep liquidity. The 0.01% maker fee alone saves us hundreds of thousands quarterly.',
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials" id="testimonials">
            <div className="orb orb-purple" style={{ width: '500px', height: '500px', bottom: '0', right: '-100px', opacity: 0.4 }}></div>

            <div className="container">
                <div className="testimonials__header">
                    <div className="section-label">💬 Testimonials</div>
                    <h2 className="testimonials__title">
                        Loved by <span className="gradient-text">Millions</span> Worldwide
                    </h2>
                    <p className="testimonials__subtitle">
                        Join our community of 12M+ traders who trust CryptoNex for their crypto journey.
                    </p>
                </div>

                <div className="testimonials__grid">
                    {testimonials.map((t, i) => (
                        <div className="testimonials__card" key={i} id={`testimonial-${i}`}>
                            <div className="testimonials__stars">
                                {'★'.repeat(t.rating)}
                            </div>
                            <p className="testimonials__text">"{t.text}"</p>
                            <div className="testimonials__author">
                                <div className="testimonials__avatar" style={{ background: `${t.color}33`, border: `2px solid ${t.color}66`, color: t.color }}>
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="testimonials__name">{t.name}</div>
                                    <div className="testimonials__role">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust bars */}
                <div className="testimonials__trust">
                    {[
                        { label: 'Trustpilot', score: '4.9/5', stars: '★★★★★' },
                        { label: 'App Store', score: '4.8/5', stars: '★★★★★' },
                        { label: 'Google Play', score: '4.7/5', stars: '★★★★★' },
                    ].map((t, i) => (
                        <div key={i} className="testimonials__trust-item">
                            <div className="testimonials__trust-stars">{t.stars}</div>
                            <div className="testimonials__trust-score">{t.score}</div>
                            <div className="testimonials__trust-label">{t.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
