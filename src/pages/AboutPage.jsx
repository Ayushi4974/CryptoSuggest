import React from 'react';
import './AboutPage.css';
import Newsletter from '../components/Newsletter';

const AboutPage = () => {
    return (
        <main className="about-page">
            {/* Header Section from Design */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero__badge">ABOUT CRYPTO SUGGEST</div>
                    <h1 className="about-hero__title">
                        Navigating the <span className="gradient-text">Crypto World</span> With Confidence
                    </h1>
                    <p className="about-hero__subtitle">
                        We're on a mission to simplify your crypto journey by curating the
                        most trusted, secure, and innovative platforms in one place.
                    </p>
                </div>
            </section>

            {/* Stats Section & Card from Design */}
            <section className="about-stats">
                <div className="container">
                    <div className="about-stats__card">
                        <div className="about-stats__item">
                            <h3 className="stat-number color-blue">500+</h3>
                            <p className="stat-label">Verified Websites</p>
                        </div>
                        <div className="about-stats__item">
                            <h3 className="stat-number color-indigo">50k+</h3>
                            <p className="stat-label">Monthly Users</p>
                        </div>
                        <div className="about-stats__item">
                            <h3 className="stat-number color-purple">15+</h3>
                            <p className="stat-label">Categories</p>
                        </div>
                        <div className="about-stats__item">
                            <h3 className="stat-number color-pink">24/7</h3>
                            <p className="stat-label">Monitoring</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision & Why We Started - NEW Section from Design */}
            <section className="about-details">
                <div className="container about-details__grid">
                    <div className="about-details__left">
                        <div className="about-card about-card--mission">
                            <div className="about-card__icon bg-blue">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="M21 21l-4.35-4.35" />
                                </svg>
                            </div>
                            <h2 className="about-card__title">Our Mission</h2>
                            <p className="about-card__text">
                                To eliminate the noise and scams in the crypto space by providing a meticulously verified directory of legitimate projects. We believe everyone deserves a safe entry point into Web3.
                            </p>
                        </div>

                        <div className="about-card about-card--vision">
                            <div className="about-card__icon bg-purple">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M2 12h20M12 2a15.3 15.3 0 010 20 15.3 15.3 0 010-20z" />
                                </svg>
                            </div>
                            <h2 className="about-card__title">Our Vision</h2>
                            <p className="about-card__text">
                                A world where cryptocurrency adoption is hindered only by curiosity, not fear. We aim to be the global standard for crypto reputation and discovery.
                            </p>
                        </div>
                    </div>

                    <div className="about-details__right">
                        <div className="why-started-card">
                            <h2 className="why-started-card__title">Why We Started</h2>
                            <div className="why-started-card__list">
                                <div className="why-started-item">
                                    <div className="why-started-item__num bg-soft-red">1</div>
                                    <div className="why-started-item__content">
                                        <h3 className="why-started-item__title">The Scam Epidemic</h3>
                                        <p className="why-started-item__text">We saw too many newcomers losing funds to phishing sites and rug pulls.</p>
                                    </div>
                                </div>
                                <div className="why-started-item">
                                    <div className="why-started-item__num bg-soft-orange">2</div>
                                    <div className="why-started-item__content">
                                        <h3 className="why-started-item__title">Information Overload</h3>
                                        <p className="why-started-item__text">Thousands of projects launching daily made it impossible to filter quality.</p>
                                    </div>
                                </div>
                                <div className="why-started-item">
                                    <div className="why-started-item__num bg-soft-green">3</div>
                                    <div className="why-started-item__content">
                                        <h3 className="why-started-item__title">The Solution</h3>
                                        <p className="why-started-item__text">A centralized, vetted hub for safe crypto exploration.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Section - NEW from Design */}
            <section className="about-quality">
                <div className="container">
                    <div className="about-quality__header">
                        <div className="section-badge">OUR PROCESS</div>
                        <h2 className="section-title">How We Ensure <span className="gradient-text">Quality</span></h2>
                        <p className="section-subtitle">
                            Every website on Crypto Suggest goes through a rigorous multi-step verification process.
                        </p>
                    </div>

                    <div className="about-quality__grid">
                        <div className="quality-card">
                            <div className="quality-card__icon bg-blue">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3 className="quality-card__title">Security Audit</h3>
                            <p className="quality-card__text">SSL, Domain Age, and Contract Checks</p>
                        </div>
                        <div className="quality-card">
                            <div className="quality-card__icon bg-indigo">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                                    <path d="M16 3.13a4 4 0 010 7.75" />
                                </svg>
                            </div>
                            <h3 className="quality-card__title">Team Verif.</h3>
                            <p className="quality-card__text">Background checks on core team members</p>
                        </div>
                        <div className="quality-card">
                            <div className="quality-card__icon bg-purple">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg>
                            </div>
                            <h3 className="quality-card__title">Performance</h3>
                            <p className="quality-card__text">Active user base and volume analysis</p>
                        </div>
                        <div className="quality-card">
                            <div className="quality-card__icon bg-pink">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <circle cx="12" cy="8" r="7" />
                                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                                </svg>
                            </div>
                            <h3 className="quality-card__title">Community</h3>
                            <p className="quality-card__text">Social sentiment and feedback analysis</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - NEW from Design */}
            <section className="about-cta">
                <div className="container">
                    <div className="about-cta__banner">
                        <h2 className="about-cta__title">Ready to Explore Safely?</h2>
                        <p className="about-cta__text">
                            Join thousands of users who trust Crypto Suggest for their daily crypto discovery.
                        </p>
                        <div className="about-cta__btns">
                            <button className="btn-white">Browse Websites</button>
                            <button className="btn-outline">Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Including established 'Newsletter' sections to round out the page */}
            <Newsletter />
        </main>
    );
};

export default AboutPage;
