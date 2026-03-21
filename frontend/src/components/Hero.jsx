import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HeroLogo3D } from './HeroLogo3D';

import './Hero.css';

export const Hero = () => {
    return (
        <section className="hero" style={{ background: '#ffffff' }}>
            {/* Background removed per user request */}
            <div className="hero-overlay" style={{ background: '#ffffff' }}></div>
            <div className="hero-overlay"></div>
            <div className="container hero-container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Growth.<br />
                            Transformation.<br />
                            <span className="highlight">Opportunity.</span>
                        </h1>
                        <p className="hero-subtitle">
                            We partner with global leaders to drive digital dominance through innovative technology services and talent solutions.
                        </p>
                        <div className="hero-actions">
                            <button className="btn btn-primary hero-btn">
                                Explore Our Services <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                            </button>
                            <button className="btn btn-outline hero-btn">
                                View Success Stories
                            </button>
                        </div>
                    </div>

                    {/* 3D Logo — right column */}
                    <div className="hero-3d-logo">
                        <HeroLogo3D />
                    </div>
                </div>

                {/* Scroll hint centered at bottom */}
                <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    animation: 'slideInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards',
                    opacity: 0,
                    zIndex: 10
                }}>
                    <span style={{
                        fontSize: '10px',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'rgba(11, 31, 64, 0.6)',
                        fontFamily: "'Inter', sans-serif"
                    }}>Scroll</span>
                    <div style={{
                        width: '1px',
                        height: '40px',
                        background: `linear-gradient(180deg, #3b82f6, transparent)`,
                        animation: 'scrollPulse 2s ease-in-out infinite'
                    }} />
                </div>
            </div>
        </section>
    );
};
