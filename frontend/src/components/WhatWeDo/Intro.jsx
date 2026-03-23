import React from 'react';
import './Intro.css';

export const Intro = () => {
    return (
        <section id="intro" className="intro hero-format-standard">
            <div className="container text-center">
                <p className="eyebrow-format-standard">
                    OUR CAPABILITIES
                </p>
                <h1 className="universal-hero-title intro-title">
                    <span className="text-black">WHAT</span> <span className="text-primary">WE DO</span>
                </h1>
                <p className="intro-subtitle">
                    We provide a comprehensive suite of technology services designed to empower your business. From strategy to execution, we are your partner in digital excellence.
                </p>
            </div>
        </section>
    );
};
