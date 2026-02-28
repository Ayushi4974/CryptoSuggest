import { Link } from 'react-router-dom';
import './Categories.css';

const categories = [
    {
        name: 'Crypto Exchanges',
        count: '127+ Apps',
        description: 'Trusted cryptocurrency exchanges for buying, selling, and trading digital assets',
        tags: ['Centralized Exchanges', 'Decentralized Exchanges', 'Peer-to-Peer'],
        color: '#3b82f6',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 10l5-5 5 5M7 14l5 5 5-5" />
            </svg>
        )
    },
    {
        name: 'NFT Marketplaces',
        count: '89+ Apps',
        description: 'Leading platforms for buying, selling, and creating NFTs',
        tags: ['Art NFTs', 'Gaming NFTs', 'Music NFTs', '+1'],
        color: '#8b5cf6',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
            </svg>
        )
    },
    {
        name: 'Crypto Wallets',
        count: '156+ Apps',
        description: 'Secure wallets for storing and managing your cryptocurrencies',
        tags: ['Hardware Wallets', 'Software Wallets', 'Mobile Wallets', '+1'],
        color: '#ec4899',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4" />
                <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
                <path d="M18 12a2 2 0 00-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
            </svg>
        )
    },
    {
        name: 'DeFi Platforms',
        count: '143+ Apps',
        description: 'Decentralized finance platforms for lending, borrowing, and yield farming',
        tags: ['Lending', 'DEX', 'Yield Farming', '+1'],
        color: '#f97316',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
        )
    },
    {
        name: 'Blockchain Explorers',
        count: '67+ Apps',
        description: 'Tools to explore and analyze blockchain transactions and addresses',
        tags: ['Bitcoin Explorers', 'Ethereum Explorers', 'Multi-Chain'],
        color: '#10b981',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
        )
    },
    {
        name: 'Crypto News & Media',
        count: '94+ Apps',
        description: 'Latest news, analysis, and insights from the crypto world',
        tags: ['News Sites', 'Podcasts', 'YouTube Channels', '+1'],
        color: '#3b82f6',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        )
    },
    {
        name: 'Learning & Education',
        count: '78+ Apps',
        description: 'Educational resources to learn about blockchain and cryptocurrencies',
        tags: ['Courses', 'Tutorials', 'Documentation', '+1'],
        color: '#0ea5e9',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
        )
    },
    {
        name: 'Portfolio Trackers',
        count: '102+ Apps',
        description: 'Track and manage your crypto portfolio performance',
        tags: ['Mobile Apps', 'Web Apps', 'Desktop Apps'],
        color: '#6366f1',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20V10" />
                <path d="M18 20V4" />
                <path d="M6 20v-4" />
            </svg>
        )
    },
    {
        name: 'Analytics & Research',
        count: '85+ Apps',
        description: 'Data analytics and research tools for crypto markets',
        tags: ['Market Data', 'On-Chain Analytics', 'Research Reports'],
        color: '#f43f5e',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
            </svg>
        )
    },
    {
        name: 'Gaming & Metaverse',
        count: '112+ Apps',
        description: 'Blockchain-based games and metaverse platforms',
        tags: ['Play-to-Earn', 'Virtual Worlds', 'Gaming Guilds'],
        color: '#f59e0b',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <path d="M6 12h4M8 10v4M15 13a1 1 0 100-2 1 1 0 000 2zm3-3a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
        )
    },
    {
        name: 'Payment Gateways',
        count: '58+ Apps',
        description: 'Accept and process cryptocurrency payments',
        tags: ['Merchant Services', 'Payment Processors', 'Point of Sale'],
        color: '#06b6d4',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
        )
    },
    {
        name: 'DAO & Governance',
        count: '73+ Apps',
        description: 'Decentralized autonomous organizations and governance tools',
        tags: ['DAO Platforms', 'Voting Tools', 'Treasury Management'],
        color: '#2563eb',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
        )
    }
];

const Categories = ({ showHeader = true }) => {
    return (
        <section className="categories" id="categories">
            <div className="container">
                {showHeader && (
                    <div className="categories__header">
                        <h2 className="categories__title">Browse by Category</h2>
                        <p className="categories__subtitle">
                            Explore verified crypto websites across all categories, styled for easy discovery.
                        </p>
                    </div>
                )}

                <div className="categories-v3-grid">
                    {categories.map((cat, i) => (
                        <div className="cat-v3-card" key={i} style={{ '--accent-color': cat.color }}>
                            <div className="cat-v3-card__header">
                                <div className="cat-v3-card__icon-wrap">
                                    {cat.icon}
                                </div>
                                <div className="cat-v3-card__badge">
                                    {cat.count}
                                </div>
                            </div>

                            <div className="cat-v3-card__body">
                                <h3 className="cat-v3-card__name">{cat.name}</h3>
                                <p className="cat-v3-card__desc">{cat.description}</p>

                                <div className="cat-v3-card__tags">
                                    {cat.tags.map((tag, j) => (
                                        <span key={j} className="cat-v3-card__tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="cat-v3-card__footer">
                                <Link to="/browse" className="cat-v3-card__link">
                                    Explore Collection
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Categories;
