import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Browse', path: '/browse' },
        { name: 'Categories', path: '/categories' },
        { name: 'Bookmarks', path: '/bookmarks' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="container navbar__inner">
                {/* Logo */}
                <Link to="/" className="navbar__logo">
                    <div className="navbar__logo-icon">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <rect width="30" height="30" rx="8" fill="url(#navLg1)" />
                            <path d="M9 15 L15 9 L21 15 L15 21 Z" fill="rgba(255,255,255,0.3)" />
                            <path d="M11.5 15 L15 11.5 L18.5 15 L15 18.5 Z" fill="white" />
                            <defs>
                                <linearGradient id="navLg1" x1="0" y1="0" x2="30" y2="30">
                                    <stop stopColor="#3b82f6" />
                                    <stop offset="1" stopColor="#2563eb" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <span className="navbar__logo-text">CRYPTO SUGGEST</span>
                </Link>

                {/* Nav Links */}
                <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
                    {links.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Actions */}
                <div className="navbar__actions">
                    <button className="navbar__btn-wallet" id="connect-wallet-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="7" width="20" height="14" rx="2" />
                            <path d="M16 3H8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z" />
                            <circle cx="17" cy="14" r="1" fill="currentColor" />
                        </svg>
                        Connect Wallet
                    </button>
                    <Link to="/submit" className="navbar__btn-submit" id="submit-website-btn">
                        <span>+</span> Submit Website
                    </Link>
                </div>

                {/* Hamburger */}
                <button
                    className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    id="hamburger-btn"
                    aria-label="Toggle menu"
                >
                    <span></span><span></span><span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
