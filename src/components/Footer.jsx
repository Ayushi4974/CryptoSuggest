import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-v2" id="contact">
            <div className="container">
                <div className="footer-v2__grid">
                    <div className="footer-v2__col footer-v2__col--main">
                        <h3 className="footer-v2__title">About Crypto Suggest</h3>
                        <p className="footer-v2__text">
                            Your trusted directory for discovering verified crypto websites. We help users find reliable crypto platforms and give website owners visibility.
                        </p>
                    </div>

                    <div className="footer-v2__col">
                        <h4 className="footer-v2__col-title">Popular Categories</h4>
                        <ul className="footer-v2__links">
                            <li><Link to="/browse">Crypto Exchanges</Link></li>
                            <li><Link to="/browse">NFT Marketplaces</Link></li>
                            <li><Link to="/browse">Crypto Wallets</Link></li>
                            <li><Link to="/browse">DeFi Platforms</Link></li>
                            <li><Link to="/browse">Blockchain Explorers</Link></li>
                            <li><Link to="/browse">Crypto News</Link></li>
                        </ul>
                    </div>

                    <div className="footer-v2__col">
                        <h4 className="footer-v2__col-title">For Website Owners</h4>
                        <ul className="footer-v2__links">
                            <li><a href="#submit">Submit Website</a></li>
                            <li><a href="#verification">Verification Process</a></li>
                            <li><Link to="/#contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-v2__col">
                        <h4 className="footer-v2__col-title">Resources</h4>
                        <ul className="footer-v2__links">
                            <li><Link to="/#about">About Us</Link></li>
                            <li><a href="#faq">FAQ</a></li>
                            <li><Link to="/#contact">Contact</Link></li>
                        </ul>

                        <h4 className="footer-v2__col-title footer-v2__col-title--social">Follow Us</h4>
                        <div className="footer-v2__socials">
                            <a href="#" className="footer-v2__social-btn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                </svg>
                            </a>
                            <a href="#" className="footer-v2__social-btn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a href="#" className="footer-v2__social-btn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-v2__bottom">
                    <p>© 2026 Crypto Suggest - Your Trusted Crypto Directory. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
