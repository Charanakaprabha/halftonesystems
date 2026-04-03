import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero_bg_tech_v2_1775215071873.png';
import './Hero.css';
import { Link } from 'react-router-dom';

export const Hero = () => {
    const fullText = "Accelerate Your Digital Transformation";
    const [text, setText] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, i + 1));
            i++;
            if (i === fullText.length) clearInterval(interval);
        }, 100);

        const cursorInterval = setInterval(() => {
            setCursorVisible(v => !v);
        }, 500);

        return () => {
            clearInterval(interval);
            clearInterval(cursorInterval);
        };
    }, []);

    return (
        <section className="hero" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className="container hero-container">
                <div className="hero-grid">
                    <div className="hero-content">

                        <h1 className="hero-title" style={{
                            color: '#ffffff',
                            lineHeight: 1.2,
                            marginBottom: '1rem',
                            minHeight: '120px'
                        }}>
                            {text}<span style={{ opacity: cursorVisible ? 1 : 0, color: '#3b82f6' }}>|</span>
                        </h1>
                        <p className="hero-subtitle" style={{
                            color: 'rgba(255, 255, 255, 0.95)',
                            margin: '0 auto 2rem',
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
