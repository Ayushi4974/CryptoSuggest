import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './FeaturedWebsites.css';

const websites = [
    {
        abbr: 'BI',
        name: 'Binance',
        reviews: '1250 reviews',
        desc: "World's largest cryptocurrency exchange by trading volume",
        category: 'Crypto Exchanges',
        featured: true,
        color: '#f59e0b',
        bg: '#1e40af',
    },
    {
        abbr: 'CO',
        name: 'Coinbase',
        reviews: '980 reviews',
        desc: 'User-friendly crypto exchange trusted by millions',
        category: 'Crypto Exchanges',
        featured: true,
        color: '#f59e0b',
        bg: '#1d4ed8',
    },
    {
        abbr: 'UN',
        name: 'Uniswap',
        reviews: '892 reviews',
        desc: 'Leading decentralized exchange protocol on Ethereum',
        category: 'Crypto Exchanges',
        featured: true,
        color: '#f59e0b',
        bg: '#7c3aed',
    },
    {
        abbr: 'OP',
        name: 'OpenSea',
        reviews: '1120 reviews',
        desc: "World's largest NFT marketplace",
        category: 'NFT Marketplaces',
        featured: true,
        color: '#f59e0b',
        bg: '#2563eb',
    },
    {
        abbr: 'BL',
        name: 'Blur',
        reviews: '567 reviews',
        desc: 'Pro NFT marketplace for traders',
        category: 'NFT Marketplaces',
        featured: true,
        color: '#f59e0b',
        bg: '#0f172a',
    },
    {
        abbr: 'ME',
        name: 'MetaMask',
        reviews: '2340 reviews',
        desc: 'Most popular Ethereum and EVM wallet',
        category: 'Crypto Wallets',
        featured: true,
        color: '#f59e0b',
        bg: '#065f46',
    },
];

const categoryColors = {
    'Crypto Exchanges': { bg: '#ede9fe', text: '#7c3aed' },
    'NFT Marketplaces': { bg: '#fce7f3', text: '#be185d' },
    'Crypto Wallets': { bg: '#ffedd5', text: '#c2410c' },
    'DeFi Platforms': { bg: '#dcfce7', text: '#15803d' },
    'Blockchain Explorers': { bg: '#dbeafe', text: '#1d4ed8' },
    'Crypto News & Media': { bg: '#fff7ed', text: '#ea580c' },
};

const FeaturedWebsites = () => {
    const navigate = useNavigate();
    const [websitesList, setWebsitesList] = useState(websites);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWebsites = async () => {
            try {
                const response = await fetch('/api/websites');
                if (response.ok) {
                    const data = await response.json();
                    if (data.length > 0) {
                        setWebsitesList(data);
                    }
                }
            } catch (error) {
                console.error('Error fetching websites:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWebsites();
    }, []);

    return (
        <section className="featured" id="browse">
            <div className="container">
                <div className="featured__header">
                    <div>
                        <h2 className="featured__title">Featured Websites</h2>
                        <p className="featured__subtitle">Handpicked verified crypto platforms for you</p>
                    </div>
                    <Link to="/browse" className="featured__view-all" id="featured-view-all-btn">View All</Link>
                </div>

                <div className="featured__grid">
                    {websitesList.map((site, i) => (
                        <div className="website-card" key={i} id={`website-card-${i}`}>
                            <div className="website-card__top">
                                <div className="website-card__logo" style={{ background: site.bg }}>
                                    {site.abbr}
                                </div>
                                <div className="website-card__title-wrap">
                                    <div className="website-card__name">{site.name}</div>
                                    <div className="website-card__reviews">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <span>• {site.reviews}</span>
                                    </div>
                                </div>
                                <button className="website-card__heart" aria-label="Bookmark">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                    </svg>
                                </button>
                            </div>

                            <p className="website-card__desc">{site.desc}</p>

                            <div className="website-card__tags">
                                <span
                                    className="website-card__tag"
                                    style={{
                                        background: categoryColors[site.category]?.bg || '#f3f4f6',
                                        color: categoryColors[site.category]?.text || '#3b82f6',
                                    }}
                                >
                                    {site.category}
                                </span>
                                {site.featured && (
                                    <span className="website-card__featured-badge">Featured</span>
                                )}
                            </div>

                            <div className="website-card__actions">
                                <button className="website-card__compare">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="8" y1="6" x2="21" y2="6" />
                                        <line x1="8" y1="12" x2="21" y2="12" />
                                        <line x1="8" y1="18" x2="21" y2="18" />
                                        <line x1="3" y1="6" x2="3.01" y2="6" />
                                        <line x1="3" y1="12" x2="3.01" y2="12" />
                                        <line x1="3" y1="18" x2="3.01" y2="18" />
                                    </svg>
                                    Compare
                                </button>
                                <button
                                    className="website-card__details"
                                    onClick={() => navigate(`/website/${site._id || i}`)}
                                >
                                    Details →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWebsites;
