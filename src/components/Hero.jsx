import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { CurveSeparator } from './SectionSeparator';
import { HeroLogo3D } from './HeroLogo3D';

import './Hero.css';

const useTypewriter = (text, speed = 100, delay = 1000) => {
    const [displayText, setDisplayText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let timeout;
        let currentIndex = 0;

        const type = () => {
            if (currentIndex < text.length) {
                setDisplayText(text.slice(0, currentIndex + 1));
                currentIndex++;
                timeout = setTimeout(type, speed);
            } else {
                setIsComplete(true);
            }
        };

        timeout = setTimeout(type, delay);
        return () => clearTimeout(timeout);
    }, [text, speed, delay]);

    return { displayText, isComplete };
};

export const Hero = () => {
    const { displayText: typingText, isComplete } = useTypewriter('Transformation.', 120, 1500);

    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Growth. <span className="typewriter-text">{typingText}<span className={`cursor ${isComplete ? 'blink' : ''}`}>|</span></span><br />
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
            </div>
            <CurveSeparator fill="var(--c-primary)" height="80px" inverted={true} />
        </section>
    );
};
