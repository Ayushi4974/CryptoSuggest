import React, { useState } from 'react';
import './SubmitPage.css';

const SubmitPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        websiteName: '',
        websiteUrl: '',
        email: '',
        category: '',
        description: '',
        logoUrl: '',
        twitter: '',
        discord: '',
        agreedToTerms: false,
        agreedToPolicy: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFinalSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSuccess(true);
                setCurrentStep(4); // Use a step that doesn't show the form
            } else {
                let errorMessage = 'Form submission failed. Please try again.';
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.message || errorMessage;
                } catch (e) {
                    console.error('Failed to parse error response:', e);
                }
                alert(`Error: ${errorMessage}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Connected to server failed. Make sure the backend is running.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const steps = [
        { id: 1, name: 'Basic Info' },
        { id: 2, name: 'Details' },
        { id: 3, name: 'Verification' }
    ];

    const benefits = [
        {
            icon: '✨',
            title: 'Increase Visibility',
            desc: 'Reach crypto enthusiasts actively searching for platforms like yours',
            color: 'blue'
        },
        {
            icon: '✔️',
            title: 'Build Trust',
            desc: 'Verified badge adds credibility to your platform',
            color: 'green'
        },
        {
            icon: '📈',
            title: 'Targeted Traffic',
            desc: 'Users specifically interested in your niche',
            color: 'orange'
        },
        {
            icon: '🎖️',
            title: 'Free Listing',
            desc: 'Basic listing at no cost with optional featured upgrades',
            color: 'purple'
        }
    ];

    return (
        <main className="submit-page">
            <div className="container">
                {/* Hero Section */}
                <header className="submit-hero">
                    <h1 className="submit-hero__title">
                        Get Your <span className="gradient-text">Crypto Website Listed</span>
                    </h1>
                    <p className="submit-hero__subtitle">
                        Join 500+ verified crypto platforms and get discovered by thousands of users
                    </p>
                </header>

                {/* Benefits Section */}
                <div className="submit-benefits">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`benefit-card card-${benefit.color}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={`benefit-card__icon bg-soft-${benefit.color}`}>
                                {benefit.icon}
                            </div>
                            <h3 className="benefit-card__title">{benefit.title}</h3>
                            <p className="benefit-card__text">{benefit.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Form Section */}
                <div className="submit-form-container">
                    {/* Stepper */}
                    <div className="submit-stepper">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className={`step-item ${currentStep === step.id ? 'active' : ''} ${currentStep > step.id ? 'completed' : ''}`}
                            >
                                <div className="step-number">{step.id}</div>
                                <div className="step-name">{step.name}</div>
                            </div>
                        ))}
                        <div className="stepper-line"></div>
                    </div>

                    {/* Form Card */}
                    <div className="submit-card">
                        {currentStep === 1 && (
                            <>
                                <div className="submit-card__header">
                                    <span className="info-icon">ℹ️</span>
                                    <h2>Basic Information</h2>
                                </div>
                                <form className="submit-form" onSubmit={(e) => { e.preventDefault(); setCurrentStep(2); }}>
                                    <div className="form-group">
                                        <label>Website Name *</label>
                                        <input
                                            name="websiteName"
                                            type="text"
                                            placeholder="e.g., Binance"
                                            value={formData.websiteName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Website URL *</label>
                                        <input
                                            name="websiteUrl"
                                            type="url"
                                            placeholder="https://example.com"
                                            value={formData.websiteUrl}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Official Email *</label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="contact@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Category *</label>
                                        <div className="select-wrapper">
                                            <select
                                                name="category"
                                                value={formData.category}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select a category</option>
                                                <option>Exchange</option>
                                                <option>Wallet</option>
                                                <option>DeFi</option>
                                                <option>NFT Marketplace</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" className="submit-next-btn">
                                        Next Step <span className="btn-arrow">›</span>
                                    </button>
                                </form>
                            </>
                        )}

                        {currentStep === 2 && (
                            <>
                                <div className="submit-card__header">
                                    <span className="info-icon">📝</span>
                                    <h2>Project Details</h2>
                                </div>
                                <form className="submit-form" onSubmit={(e) => { e.preventDefault(); setCurrentStep(3); }}>
                                    <div className="form-group">
                                        <label>Short Description *</label>
                                        <textarea
                                            name="description"
                                            rows="3"
                                            placeholder="Briefly describe your project..."
                                            value={formData.description}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Logo URL *</label>
                                        <input
                                            name="logoUrl"
                                            type="url"
                                            placeholder="https://example.com/logo.png"
                                            value={formData.logoUrl}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Twitter/X URL</label>
                                            <input
                                                name="twitter"
                                                type="url"
                                                placeholder="https://twitter.com/yours"
                                                value={formData.twitter}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Discord Invite</label>
                                            <input
                                                name="discord"
                                                type="url"
                                                placeholder="https://discord.gg/invite"
                                                value={formData.discord}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="submit-form-btns">
                                        <button type="button" className="submit-back-btn" onClick={() => setCurrentStep(1)}>
                                            Back
                                        </button>
                                        <button type="submit" className="submit-next-btn">
                                            Next Step <span className="btn-arrow">›</span>
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}

                        {currentStep === 3 && (
                            <>
                                <div className="submit-card__header">
                                    <span className="info-icon">🛡️</span>
                                    <h2>Verification</h2>
                                </div>
                                <form className="submit-verification" onSubmit={handleFinalSubmit}>
                                    <div className="verification-item">
                                        <input
                                            type="checkbox"
                                            id="terms"
                                            name="agreedToTerms"
                                            checked={formData.agreedToTerms}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="terms">I confirm that all provided information is accurate and I am authorized to submit this project.</label>
                                    </div>
                                    <div className="verification-item">
                                        <input
                                            type="checkbox"
                                            id="policy"
                                            name="agreedToPolicy"
                                            checked={formData.agreedToPolicy}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="policy">I agree to the listing policy and community guidelines.</label>
                                    </div>
                                    <p className="verification-note">
                                        Our team will manually review your submission within 24-48 hours. You will receive an email once the listing is approved.
                                    </p>
                                    <div className="submit-form-btns">
                                        <button type="button" className="submit-back-btn" onClick={() => setCurrentStep(2)}>
                                            Back
                                        </button>
                                        <button
                                            type="submit"
                                            className="submit-next-btn"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Submit Project'}
                                            <span className="btn-arrow">{isSubmitting ? '⌛' : '✨'}</span>
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}

                        {isSuccess && (
                            <div className="submit-success-view">
                                <div className="success-icon">🎉</div>
                                <h2>Application Received!</h2>
                                <p>
                                    Your website has been successfully submitted and is now live in our directory!
                                </p>

                                {/* Preview Card */}
                                <div className="submit-preview-container">
                                    <div className="website-card preview-card">
                                        <div className="website-card__top">
                                            <div className="website-card__logo" style={{ background: '#3b82f6' }}>
                                                {formData.websiteName?.substring(0, 2).toUpperCase() || '??'}
                                            </div>
                                            <div className="website-card__title-wrap">
                                                <div className="website-card__name">{formData.websiteName}</div>
                                                <div className="website-card__reviews">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                    </svg>
                                                    <span>• 0 reviews</span>
                                                </div>
                                            </div>
                                            <button className="website-card__heart" aria-label="Bookmark">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" strokeWidth="2">
                                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                                </svg>
                                            </button>
                                        </div>

                                        <p className="website-card__desc">{formData.description}</p>

                                        <div className="website-card__tags">
                                            <span className="website-card__tag" style={{ background: '#eff6ff', color: '#3b82f6' }}>
                                                {formData.category}
                                            </span>
                                        </div>

                                        <div className="website-card__actions">
                                            <button className="website-card__compare">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                    <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
                                                    <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
                                                </svg>
                                                Compare
                                            </button>
                                            <button className="website-card__details">
                                                Details →
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <button className="submit-next-btn return-btn" onClick={() => window.location.href = '/browse'}>
                                    Go to Browse Page
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SubmitPage;
