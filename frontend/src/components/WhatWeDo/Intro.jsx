import React from 'react';
import './Intro.css';

export const Intro = () => {
    return (
        <section id="intro" className="intro hero-format-standard">
            <div className="container text-center">
                <p className="eyebrow-format-standard" style={{
                    color: 'var(--c-primary)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', system-ui, sans-serif",
                }}>
                    OUR CAPABILITIES
                </p>
                <h2 className="section-title" style={{ display: 'inline-block', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                    <span style={{ color: '#000000' }}>WHAT</span>{' '}
                    <span style={{ color: 'var(--c-primary)' }}>WE DO</span>
                </h2>
                <p className="section-subtitle" style={{ 
                    maxWidth: '800px', 
                    margin: '0 auto',
                    fontSize: 'clamp(1rem, 3vw, 1.15rem)' 
                }}>
                    We provide a comprehensive suite of technology services designed to empower your business. From strategy to execution, we are your partner in digital excellence.
                </p>
            </div>
        </section>
    );
};
