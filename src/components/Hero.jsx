import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container hero__inner">
                {/* Left: Text Content */}
                <div className="hero__content">
                    <div className="hero__badge-new">
                        <span className="hero__badge-label">NEW</span>
                        <span>The most trusted crypto directory</span>
                    </div>

                    <h1 className="hero__title">
                        Build on<br />
                        <span className="hero__title-gradient">Verified Crypto</span><br />
                        Protocols
                    </h1>

                    <p className="hero__subtitle">
                        Discover manually verified Exchanges, Wallets, and DeFi protocols.<br />
                        No scams. Just trusted platforms.
                    </p>

                    <div className="hero__search">
                        <div className="hero__search-box">
                            <svg className="hero__search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" />
                                <path d="M21 21l-4.35-4.35" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search protocols..."
                                className="hero__search-input"
                                id="hero-search-input"
                            />
                        </div>
                        <Link to="/browse" className="hero__explore-btn" id="hero-explore-btn">
                            Explore →
                        </Link>
                    </div>

                    <div className="hero__stats">
                        <div className="hero__avatars">
                            {['#c7d2fe', '#a5b4fc', '#818cf8', '#6366f1'].map((color, i) => (
                                <div
                                    key={i}
                                    className="hero__avatar"
                                    style={{ background: color, marginLeft: i > 0 ? '-10px' : '0' }}
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                                    </svg>
                                </div>
                            ))}
                            <div className="hero__avatar hero__avatar-plus">+</div>
                        </div>

                        <div className="hero__stat-item">
                            <strong>50,000+</strong>
                            <span>Monthly Users</span>
                        </div>

                        <div className="hero__stat-divider"></div>

                        <div className="hero__stat-item">
                            <strong>500+</strong>
                            <span>Verified Apps</span>
                        </div>
                    </div>
                </div>

                {/* Right: Shield Image */}
                <div className="hero__visual">
                    <div className="hero__visual-card">
                        <p className="hero__visual-caption">Discovering Trusted Crypto<br />Platforms Made Easy</p>
                        <div className="hero__visual-content">
                            {/* Shield SVG illustration */}
                            <svg className="hero__shield" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Background decorations */}
                                <circle cx="50" cy="60" r="30" fill="url(#blueGrad)" opacity="0.7" />
                                <circle cx="210" cy="50" r="18" fill="url(#pinkGrad)" opacity="0.6" />
                                <circle cx="30" cy="200" r="22" fill="url(#purpleGrad)" opacity="0.6" />

                                {/* Main Shield */}
                                <path d="M130 30 L175 50 L175 110 C175 150 130 175 130 175 C130 175 85 150 85 110 L85 50 Z"
                                    fill="url(#shieldGrad)" />
                                <path d="M130 45 L165 62 L165 110 C165 142 130 162 130 162 C130 162 95 142 95 110 L95 62 Z"
                                    fill="url(#shieldInner)" />
                                {/* Checkmark */}
                                <path d="M112 108 L124 120 L150 94" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

                                {/* Stars below shield */}
                                {[0, 1, 2, 3, 4].map(i => (
                                    <text key={i} x={86 + i * 16} y="195" fontSize="12" fill={i < 4 ? "#f59e0b" : "#d1d5db"}>★</text>
                                ))}

                                {/* Bitcoin coin */}
                                <circle cx="82" cy="210" r="22" fill="url(#btcGrad)" />
                                <text x="82" y="216" textAnchor="middle" fontSize="18" fill="white" fontWeight="700">₿</text>

                                {/* Ethereum coin */}
                                <circle cx="195" cy="175" r="18" fill="url(#ethGrad)" />
                                <text x="195" y="181" textAnchor="middle" fontSize="14" fill="white" fontWeight="700">Ξ</text>

                                {/* Other coin */}
                                <circle cx="40" cy="168" r="14" fill="#8b5cf6" opacity="0.9" />
                                <text x="40" y="174" textAnchor="middle" fontSize="12" fill="white" fontWeight="700">₮</text>

                                {/* Wallet icon */}
                                <rect x="195" y="120" width="44" height="32" rx="6" fill="#1e40af" opacity="0.85" />
                                <rect x="207" y="112" width="20" height="8" rx="4" fill="#3b82f6" />
                                <circle cx="228" cy="136" r="4" fill="white" opacity="0.8" />

                                {/* Blockchain nodes */}
                                <rect x="160" y="50" width="16" height="16" rx="3" fill="#e0e7ff" stroke="#c7d2fe" strokeWidth="1" />
                                <rect x="185" y="65" width="16" height="16" rx="3" fill="#e0e7ff" stroke="#c7d2fe" strokeWidth="1" />
                                <line x1="176" y1="58" x2="185" y2="65" stroke="#c7d2fe" strokeWidth="1" />

                                {/* Lock icon */}
                                <rect x="42" y="108" width="20" height="16" rx="3" fill="#bfdbfe" />
                                <path d="M46 108 C46 101 58 101 58 108" stroke="#3b82f6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                                <circle cx="52" cy="116" r="2.5" fill="#3b82f6" />

                                <defs>
                                    <linearGradient id="shieldGrad" x1="85" y1="30" x2="175" y2="175" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#3b82f6" />
                                        <stop offset="1" stopColor="#1e40af" />
                                    </linearGradient>
                                    <linearGradient id="shieldInner" x1="95" y1="45" x2="165" y2="162" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#60a5fa" />
                                        <stop offset="1" stopColor="#2563eb" />
                                    </linearGradient>
                                    <linearGradient id="blueGrad" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#60a5fa" />
                                        <stop offset="1" stopColor="#a78bfa" />
                                    </linearGradient>
                                    <linearGradient id="pinkGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#f9a8d4" />
                                        <stop offset="1" stopColor="#ec4899" />
                                    </linearGradient>
                                    <linearGradient id="purpleGrad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#c4b5fd" />
                                        <stop offset="1" stopColor="#7c3aed" />
                                    </linearGradient>
                                    <linearGradient id="btcGrad" x1="60" y1="188" x2="104" y2="232" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#fb923c" />
                                        <stop offset="1" stopColor="#ea580c" />
                                    </linearGradient>
                                    <linearGradient id="ethGrad" x1="177" y1="157" x2="213" y2="193" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#a78bfa" />
                                        <stop offset="1" stopColor="#7c3aed" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        {/* Corner decorations */}
                        <div className="hero__corner hero__corner-tl"></div>
                        <div className="hero__corner hero__corner-tr"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
