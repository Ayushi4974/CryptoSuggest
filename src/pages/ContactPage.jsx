import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
                alert('Message sent successfully!');
            } else {
                let errorMessage = 'Failed to send message. Please try again.';
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.message || errorMessage;
                } catch (e) {
                    console.error('Failed to parse error response:', e);
                }
                alert(`Error: ${errorMessage}`);
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to connect to server.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="contact-page">
            <div className="container">
                {/* Hero Section */}
                <header className="contact-hero">
                    <div className="contact-hero__badge">CONNECT WITH US</div>
                    <h1 className="contact-hero__title">
                        We'd Love to <span className="gradient-text">Hear From You</span>
                    </h1>
                    <p className="contact-hero__subtitle">
                        Have a question, feedback, or just want to say hello? Drop us a
                        message and our team will get back to you.
                    </p>
                </header>

                <div className="contact-grid">
                    {/* Left Column: Form */}
                    <div className="contact-form-card">
                        <div className="contact-form-card__header">
                            <span className="icon">💬</span>
                            <h2>Send us a Message</h2>
                        </div>
                        {isSuccess ? (
                            <div className="contact-success-message">
                                <div className="success-icon">✅</div>
                                <h3>Thank you for reaching out!</h3>
                                <p>We have received your message and will get back to you soon.</p>
                                <button className="contact-form__btn" onClick={() => setIsSuccess(false)}>Send Another Message</button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <select
                                        id="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    >
                                        <option>General Inquiry</option>
                                        <option>Technical Support</option>
                                        <option>Partnership</option>
                                        <option>Scam Report</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        placeholder="How can we help you today?"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="contact-form__btn" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'} <span className="btn-icon">{isSubmitting ? '⏳' : '✈️'}</span>
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Right Column: Info & FAQ */}
                    <div className="contact-sidebar">
                        <div className="contact-info-card">
                            <div className="contact-info-card__header">
                                <span className="icon">📧</span>
                                <h3>Contact Info</h3>
                            </div>
                            <div className="info-item">
                                <span className="info-item__label">EMAIL US</span>
                                <a href="mailto:hello@cryptosuggest.com" className="info-item__value">hello@cryptosuggest.com</a>
                            </div>
                            <div className="info-item">
                                <span className="info-item__label">RESPONSE TIME</span>
                                <div className="info-item__value">
                                    <span className="clock-icon">🕒</span> 24-48 Hours
                                </div>
                            </div>
                            <p className="info-footer-text">
                                Our team reviews every submission manually to ensure the highest quality for our community.
                            </p>
                        </div>

                        <div className="contact-faq-card">
                            <div className="contact-faq-card__header">
                                <span className="icon">❓</span>
                                <h3>Common Questions</h3>
                            </div>
                            <div className="faq-list">
                                <div className="faq-item">
                                    <div className="faq-item__icon bg-soft-yellow">✨</div>
                                    <div className="faq-item__content">
                                        <h4>How to submit a website?</h4>
                                        <p>Visit our Submit Website page, fill out the details. We review within 3-5 business days.</p>
                                    </div>
                                </div>
                                <div className="faq-item">
                                    <div className="faq-item__icon bg-soft-green">✔️</div>
                                    <div className="faq-item__content">
                                        <h4>Is listing free?</h4>
                                        <p>Yes! Basic listing is free. We verify all submissions for safety.</p>
                                    </div>
                                </div>
                                <div className="faq-item">
                                    <div className="faq-item__icon bg-soft-red">🚫</div>
                                    <div className="faq-item__content">
                                        <h4>Reporting a scam?</h4>
                                        <p>Use the "Report" subject in this form or flag it directly on the website page.</p>
                                    </div>
                                </div>
                                <div className="faq-item">
                                    <div className="faq-item__icon bg-soft-blue">💬</div>
                                    <div className="faq-item__content">
                                        <h4>Edit my listing?</h4>
                                        <p>Send us a message with your website details and requested changes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
