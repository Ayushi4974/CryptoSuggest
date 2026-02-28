import React from 'react';
import { Link } from 'react-router-dom';
import './BookmarksPage.css';

const BookmarksPage = () => {
    // For now, we show the empty state as requested in the design
    const hasBookmarks = false;

    return (
        <main className="bookmarks-page">
            <div className="container">
                {/* Header Section from Design */}
                <header className="bookmarks-header">
                    <h1 className="bookmarks-header__title">
                        <span className="heart-icon">❤️</span> My Bookmarks
                    </h1>
                    <p className="bookmarks-header__subtitle">
                        Manage your saved crypto platforms and projects. Keep track of your favorites in one place.
                    </p>
                </header>

                {/* Empty State Card from Design */}
                {!hasBookmarks ? (
                    <div className="bookmarks-empty-card">
                        <div className="bookmarks-empty-card__inner">
                            <div className="bookmarks-empty-card__icon-wrap">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                </svg>
                            </div>
                            <h2 className="bookmarks-empty-card__title">No bookmarks yet</h2>
                            <p className="bookmarks-empty-card__subtitle">
                                Start exploring crypto platforms and save your favorites to access them quickly later.
                            </p>
                            <Link to="/browse" className="bookmarks-empty-card__btn">
                                Browse Platforms
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="bookmarks-grid">
                        {/* Bookmarks would go here */}
                    </div>
                )}
            </div>
        </main>
    );
};

export default BookmarksPage;
