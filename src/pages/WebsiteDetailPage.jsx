import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './WebsiteDetailPage.css';

const categoryColors = {
    'Crypto Exchanges': { bg: '#ede9fe', text: '#7c3aed' },
    'NFT Marketplaces': { bg: '#fce7f3', text: '#be185d' },
    'Crypto Wallets': { bg: '#ffedd5', text: '#c2410c' },
    'DeFi Platforms': { bg: '#dcfce7', text: '#15803d' },
    'Blockchain Explorers': { bg: '#dbeafe', text: '#1d4ed8' },
    'Crypto News & Media': { bg: '#fff7ed', text: '#ea580c' },
};

const WebsiteDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [website, setWebsite] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWebsiteDetails = async () => {
            try {
                const response = await fetch(`/api/websites/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setWebsite(data);
                } else {
                    setError('Website not found');
                }
            } catch (err) {
                console.error('Error fetching website details:', err);
                setError('Failed to load website details');
            } finally {
                setLoading(false);
            }
        };

        fetchWebsiteDetails();
    }, [id]);

    if (loading) {
        return (
            <div className="detail-loading">
                <div className="spinner"></div>
                <p>Loading details...</p>
            </div>
        );
    }

    if (error || !website) {
        return (
            <div className="detail-error">
                <h2>Opps!</h2>
                <p>{error || 'Something went wrong'}</p>
                <button onClick={() => navigate('/browse')}>Back to Browse</button>
            </div>
        );
    }

    return (
        <main className="website-detail-page">
            <div className="container">
                {/* Breadcrumbs */}
                <nav className="breadcrumbs">
                    <Link to="/">Home</Link>
                    <span className="separator">›</span>
                    <Link to="/browse">Browse</Link>
                    <span className="separator">›</span>
                    <span className="current">{website.name}</span>
                </nav>

                <div className="detail-grid">
                    {/* Left Side: Main Info */}
                    <div className="detail-main">
                        <header className="detail-header">
                            <div className="detail-header__left">
                                <div className="detail-logo" style={{ background: website.bg || '#3b82f6' }}>
                                    {website.abbr || website.name?.substring(0, 2).toUpperCase()}
                                </div>
                                <div className="detail-title-area">
                                    <div className="detail-badge-row">
                                        <span
                                            className="detail-category-badge"
                                            style={{
                                                background: categoryColors[website.category]?.bg || '#f1f5f9',
                                                color: categoryColors[website.category]?.text || '#64748b'
                                            }}
                                        >
                                            {website.category}
                                        </span>
                                        {website.featured && <span className="detail-featured-badge">Featured</span>}
                                    </div>
                                    <h1 className="detail-name">{website.name}</h1>
                                    <div className="detail-meta">
                                        <div className="detail-rating">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                            <span>4.8</span>
                                            <span className="detail-reviews-count">({website.reviews || '980 reviews'})</span>
                                        </div>
                                        <span className="divider">•</span>
                                        <span className="detail-status">Verified Platform</span>
                                    </div>
                                </div>
                            </div>
                            <div className="detail-header__right">
                                <button className="btn-bookmark">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                    </svg>
                                    Save
                                </button>
                                <a href={website.websiteUrl || '#'} target="_blank" rel="noopener noreferrer" className="btn-visit">
                                    Visit Website
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                </a>
                            </div>
                        </header>

                        <section className="detail-section">
                            <h2 className="section-title">About the Platform</h2>
                            <p className="detail-description">
                                {website.desc || website.description}
                                <br /><br />
                                This platform has been manually verified by our team for safety and security. It offers
                                industry-leading features for crypto enthusiasts, providing a seamless experience in the
                                evolving Web3 ecosystem.
                            </p>
                        </section>

                        <section className="detail-features-list">
                            <h2 className="section-title">Key Features</h2>
                            <div className="features-grid">
                                <div className="feature-item">
                                    <div className="feature-icon">🛡️</div>
                                    <div>
                                        <h3>Secure Infrastructure</h3>
                                        <p>Follows standard security protocols and regular audits.</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">⚡</div>
                                    <div>
                                        <h3>High Performance</h3>
                                        <p>Optimized for speed and minimal downtime during peak hours.</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">📱</div>
                                    <div>
                                        <h3>Mobile Friendly</h3>
                                        <p>Accessible from any device with a fully responsive interface.</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">🎧</div>
                                    <div>
                                        <h3>24/7 Support</h3>
                                        <p>Customer help available around the clock through various channels.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Side: Sidebar */}
                    <aside className="detail-sidebar">
                        <div className="sidebar-card">
                            <h3>Quick Links</h3>
                            <div className="sidebar-links">
                                <a href="#" className="sidebar-link">
                                    <span>Twitter / X</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                </a>
                                <a href="#" className="sidebar-link">
                                    <span>Discord Community</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                </a>
                                <a href="#" className="sidebar-link">
                                    <span>Whitepaper</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="sidebar-card promo-card">
                            <h3>Featured Listing</h3>
                            <p>Get your platform noticed by thousands of daily crypto users.</p>
                            <Link to="/submit" className="btn-promote">List Your Project</Link>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
};

export default WebsiteDetailPage;
