import React from 'react';
import './Impact.css';

export const Impact = () => {
    const stats = [
        {
            number: '+40%',
            label: 'Conversion Rate Increase',
            sub: 'AI-Powered E-Commerce'
        },
        {
            number: '-30%',
            label: 'Operational Cost Reduction',
            sub: 'Transport Management System'
        },
        {
            number: '+50%',
            label: 'Efficiency Gains',
            sub: 'Enterprise AI Automation Suite'
        },
        {
            number: '100+',
            label: 'Successful Global Implementations',
            sub: 'Avg. 100% ROI in 12 Months'
        }
    ];

    return (
        <section className="impact section-padding" style={{ backgroundColor: 'var(--c-primary)' }}>
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title impact-title reveal reveal-fade-up" style={{ color: '#fff' }}>
                    OUR IMPACT IN NUMBERS
                </h2>    <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Real results delivered for real businesses — proven across industries, geographies, and scales.</p>
                </div>
                <div className="impact-grid">
                    {stats.map((stat, i) => (
                        <div key={i} className="impact-item text-center">
                            <h3 className="impact-number text-white" style={{ background: 'none', WebkitTextFillColor: 'initial', color: '#fff' }}>{stat.number}</h3>
                            <p className="impact-label" style={{ color: '#fff' }}>{stat.label}</p>
                            <p className="impact-sub" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{stat.sub}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
