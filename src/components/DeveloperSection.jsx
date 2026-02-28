import './DeveloperSection.css';

const DeveloperSection = () => {
    return (
        <section className="dev-section">
            <div className="container dev-section__inner">
                <div className="dev-section__content">
                    <div className="dev-section__badge">For Developers</div>
                    <h2 className="dev-section__title">Build Trust with a Verified Listing</h2>
                    <p className="dev-section__desc">
                        Join 500+ verified platforms. Get discovered by active users and showcase your commitment to security and transparency.
                    </p>
                    <ul className="dev-section__list">
                        <li>
                            <div className="dev-section__check">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            Boost your SEO and brand visibility
                        </li>
                        <li>
                            <div className="dev-section__check">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            Gain a "Verified" badge for your platform
                        </li>
                        <li>
                            <div className="dev-section__check">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            Access detailed user analytics
                        </li>
                    </ul>
                    <button className="dev-section__btn">
                        Submit Your Website →
                    </button>
                </div>

                <div className="dev-section__visual">
                    <div className="dev-card">
                        <div className="dev-card__item">
                            <div className="dev-card__info">
                                <span className="dev-card__label">MONTHLY TRAFFIC</span>
                                <span className="dev-card__value">50,000+</span>
                            </div>
                            <div className="dev-card__icon dev-card__icon--green">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                                    <polyline points="17 6 23 6 23 12" />
                                </svg>
                            </div>
                        </div>
                        <div className="dev-card__divider"></div>
                        <div className="dev-card__item">
                            <div className="dev-card__info">
                                <span className="dev-card__label">CONVERSION RATE</span>
                                <span className="dev-card__value">4.8%</span>
                            </div>
                            <div className="dev-card__icon dev-card__icon--blue">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                                    <path d="M16 3.13a4 4 0 010 7.75" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeveloperSection;
