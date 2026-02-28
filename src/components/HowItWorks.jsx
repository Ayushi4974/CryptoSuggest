import './HowItWorks.css';

const steps = [
    {
        number: '1',
        numberBg: '#3b82f6',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
            </svg>
        ),
        title: 'Browse Categories',
        desc: 'Explore 15+ categories including exchanges and DeFi',
    },
    {
        number: '2',
        numberBg: 'transparent',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        ),
        title: 'Compare',
        desc: 'Review key features, fees, and community ratings',
    },
    {
        number: '3',
        numberBg: '#22c55e',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
            </svg>
        ),
        title: 'Select & Go',
        desc: 'Choose the best platform and visit securely',
    },
];

const HowItWorks = () => {
    return (
        <section className="how-it-works" id="how-it-works">
            <div className="container">
                <div className="hiw__header">
                    <h2 className="hiw__title">How It Works</h2>
                    <p className="hiw__subtitle">Find trusted crypto platforms in 3 simple steps</p>
                </div>

                <div className="hiw__grid">
                    {steps.map((step, i) => (
                        <div className="hiw-card" key={i} id={`hiw-card-${i}`}>
                            <div className="hiw-card__number-wrap">
                                <span className="hiw-card__number">{i + 1}</span>
                            </div>
                            <div className="hiw-card__icon">
                                {step.icon}
                            </div>
                            <h3 className="hiw-card__title">{step.title}</h3>
                            <p className="hiw-card__desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
