import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero-main.png';
import './Hero.css';
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <section className="hero" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className="container hero-container">
                <div className="hero-grid" style={{ gridTemplateColumns: '1fr' }}>
                    <div className="hero-content" style={{ textAlign: 'left', margin: '0', maxWidth: '1000px', paddingBottom: '40px' }}>
                        <h4 className="eyebrow-format-standard" style={{
                            color: '#3b82f6',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            fontFamily: "'Inter', system-ui, sans-serif",
                        }}>
                            PREMIER TECHNOLOGY PARTNER
                        </h4>
                        <h1 className="hero-title universal-hero-title" style={{
                            color: '#ffffff',
                            lineHeight: 1,
                            marginBottom: '2rem'
                        }}>
                            Growth.<br />
                            Transformation.<br />
                            <span className="highlight" style={{ color: '#3b82f6' }}>Opportunity.</span>
                        </h1>
                        <p className="hero-subtitle" style={{
                            color: 'rgba(255, 255, 255, 0.95)',
                            margin: '0 0 2rem 0',
                            maxWidth: '750px',
                            lineHeight: 1.5
                        }}>
                            We partner with global leaders to drive digital dominance through innovative technology services and talent solutions.
                        </p>
                        <div className="hero-actions">
                            <Link to="/what-we-do" className="btn btn-primary hero-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                                Explore Our Services <ArrowRight size={18} className="hero-btn-arrow" style={{ marginLeft: '8px' }} />
                            </Link>
                            <Link to="/success-stories" className="btn btn-outline hero-btn" style={{ textDecoration: 'none' }}>
                                View Success Stories
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Scroll hint centered at bottom */}
            <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                zIndex: 10
            }}>
                <span style={{
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontFamily: "'Inter', sans-serif"
                }}>Scroll</span>
                <div style={{
                    width: '1px',
                    height: '40px',
                    background: 'linear-gradient(180deg, #ffffff, transparent)',
                    animation: 'scrollPulse 2s ease-in-out infinite'
                }} />
            </div>
        </section>
    );
};
