import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="container newsletter__inner">
                <div className="newsletter__badge">Weekly Digest</div>
                <h2 className="newsletter__title">Stay Ahead of the Curve</h2>
                <p className="newsletter__desc">
                    Get verified listings, security alerts, and crypto insights delivered straight to your inbox.
                </p>
                <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
                    <div className="newsletter__input-group">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="newsletter__input"
                            id="newsletter-email"
                        />
                        <button type="submit" className="newsletter__submit">
                            Subscribe
                        </button>
                    </div>
                </form>
                <div className="newsletter__features">
                    <div className="newsletter__feature">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        No Spam, ever
                    </div>
                    <div className="newsletter__feature">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Unsubscribe anytime
                    </div>
                    <div className="newsletter__feature">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Weekly Updates
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
