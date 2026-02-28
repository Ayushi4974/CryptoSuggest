import './Browse.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const categoryColors = {
    'Crypto Exchanges': { bg: '#ede9fe', text: '#7c3aed' },
    'NFT Marketplaces': { bg: '#fce7f3', text: '#be185d' },
    'Crypto Wallets': { bg: '#ffedd5', text: '#c2410c' },
    'DeFi Platforms': { bg: '#dcfce7', text: '#15803d' },
    'Blockchain Explorers': { bg: '#dbeafe', text: '#1d4ed8' },
    'Crypto News & Media': { bg: '#fff7ed', text: '#ea580c' },
};

const Browse = () => {
    const navigate = useNavigate();
    const [allWebsites, setAllWebsites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

    useEffect(() => {
        const fetchWebsites = async () => {
            try {
                const response = await fetch('/api/websites');
                if (response.ok) {
                    const data = await response.json();
                    setAllWebsites(data);
                }
            } catch (error) {
                console.error('Error fetching websites:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWebsites();
    }, []);

    const filteredWebsites = allWebsites.filter(site => {
        const searchRaw = searchQuery.toLowerCase();
        return (
            site.name?.toLowerCase().includes(searchRaw) ||
            site.category?.toLowerCase().includes(searchRaw) ||
            site.desc?.toLowerCase().includes(searchRaw)
        );
    });

    return (
        <main className="browse-page">
            <div className="container">
                {/* Breadcrumbs */}
                <nav className="breadcrumbs">
                    <a href="/">Home</a>
                    <span className="separator">›</span>
                    <span className="current">Browse Websites</span>
                </nav>

                {/* Header */}
                <header className="browse-header">
                    <h1 className="browse-title">Explore <span className="browse-title-gradient">Crypto Websites</span></h1>
                    <p className="browse-subtitle">Discover the most trusted and verified cryptocurrency platforms, curated just for you.</p>
                </header>

                {/* Filter Bar */}
                <div className="filter-bar">
                    <div className="search-box">
                        <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search for exchanges, wallets, or tools..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="filter-actions">
                        <div className="dropdown">
                            <button className="dropdown-btn">
                                <span className="emoji">🔥</span> Most Popular
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>
                        </div>

                        <div className="view-toggle">
                            <button
                                className={`toggle - btn ${viewMode === 'grid' ? 'active' : ''} `}
                                onClick={() => setViewMode('grid')}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                                    <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                                </svg>
                            </button>
                            <button
                                className={`toggle - btn ${viewMode === 'list' ? 'active' : ''} `}
                                onClick={() => setViewMode('list')}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
                                    <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="results-count-badge">
                    <div className="count-icon">
                        <span className="count-number">{filteredWebsites.length}</span>
                    </div>
                    <span className="count-text">RESULTS FOUND</span>
                </div>

                <div className={`browse-grid ${viewMode}`}>
                    {loading ? (
                        <div className="loading-state">Loading platforms...</div>
                    ) : filteredWebsites.length === 0 ? (
                        <div className="no-results">No websites found matching your search.</div>
                    ) : (
                        filteredWebsites.map((site, i) => (
                            <div className="website-card" key={i}>
                                <div className="website-card__top">
                                    <div className="website-card__logo" style={{ background: site.bg || '#3b82f6' }}>
                                        {site.abbr || site.name?.substring(0, 2).toUpperCase()}
                                    </div>
                                    <div className="website-card__title-wrap">
                                        <div className="website-card__name">{site.name}</div>
                                        <div className="website-card__reviews">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                            <span>• {site.reviews || '980 reviews'}</span>
                                        </div>
                                    </div>
                                    <button className="website-card__heart" aria-label="Bookmark">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" strokeWidth="2">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                        </svg>
                                    </button>
                                </div>

                                <p className="website-card__desc">{site.desc || site.description}</p>

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
                                    {(site.featured || i < 6) && (
                                        <span className="website-card__featured-badge">Featured</span>
                                    )}
                                </div>

                                <div className="website-card__actions">
                                    <button className="website-card__compare">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
                                            <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
                                        </svg>
                                        Compare
                                    </button>
                                    <button
                                        className="website-card__details"
                                        onClick={() => navigate(`/website/${site._id}`)}
                                    >
                                        Details →
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </main>
    );
};

export default Browse;
