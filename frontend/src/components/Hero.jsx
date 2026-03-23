import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';

export const Hero = () => {
    return (
        <section className="hero" style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}>
            <div className="container hero-container">
                <div className="hero-grid" style={{ gridTemplateColumns: '1fr' }}>
                    <div className="hero-content hero-format-offset" style={{ textAlign: 'left', margin: '0', maxWidth: '1000px', paddingBottom: '80px' }}>
                        <h4 className="eyebrow-format-standard" style={{
                            color: '#3b82f6',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            fontFamily: "'Inter', system-ui, sans-serif",
                            opacity: 0,
                            animation: 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                        }}>
                            PREMIER TECHNOLOGY PARTNER
                        </h4>
                        <h1 className="hero-title universal-hero-title" style={{ 
                            color: '#ffffff', 
                            lineHeight: 1,
                            marginTop: '2.5rem', /* Increased padding on top of title as requested */
                            marginBottom: '2rem'
                        }}>
                            Growth.<br />
                            Transformation.<br />
                            <span className="highlight" style={{ color: '#3b82f6' }}>Opportunity.</span>
                        </h1>
                        <p className="hero-subtitle" style={{ 
                            color: 'rgba(255, 255, 255, 0.95)', 
                            margin: '0 0 3rem 0',
                            maxWidth: '750px',
                            lineHeight: 1.5
                        }}>
                            We partner with global leaders to drive digital dominance through innovative technology services and talent solutions.
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
                            <button className="btn btn-primary hero-btn" style={{ padding: '18px 40px', fontSize: '1.05rem', display: 'inline-flex', alignItems: 'center' }}>
                                Explore Our Services <ArrowRight size={18} className="hero-btn-arrow" style={{ marginLeft: '8px' }} />
                            </button>
                            <button className="btn btn-outline hero-btn" style={{ 
                                borderColor: 'rgba(255, 255, 255, 0.55)', 
                                color: '#ffffff',
                                padding: '18px 40px', 
                                fontSize: '1.05rem',
                                background: 'rgba(255,255,255,0.07)',
                                display: 'inline-flex', alignItems: 'center'
                            }}>
                                View Success Stories
                            </button>
                        </div>
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
